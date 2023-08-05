import { Link } from "react-router-dom"

const arrayObject = []



export default function HomePage() {

  return (

    <div>
      {arrayObject.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <h2>{item.description}</h2>
          <Link to={`single/${item.id}`}>{item.id}</Link>
        </div>
      ))}

    </div>
  )
}