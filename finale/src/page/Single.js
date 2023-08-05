import { useParams } from "react-router-dom"
import { useList } from "../context/List"

export default function SinglePage() {

  const arrayObject = useList()

  console.log(arrayObject)
  const { value } = useParams()
  return (
    <>
      <h2>{value}</h2>
    </>
  )
}