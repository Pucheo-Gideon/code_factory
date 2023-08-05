import { createContext, useContext, useState } from "react";

const arrayObject = [{
  title: "Manager",
  description: 'supervise operations',
  id: 1
},
{
  title: "Cleaner",
  description: 'Clean the whole of FutureLabs.',
  id: 2
},
{
  title: "Errand boy",
  description: 'Be  going for any kind of errands, including slapping .',
  id: 3
}
]

const context = createContext()

export function ListProvider({ children }) {
  const [array, setArray] = useState(arrayObject)
  // console.log({ children })

  return (
    <>
      <context.Provider value={array}>
        {children}
      </context.Provider>
    </>
  )
}

const useList = () => useContext(context)

export { useList }