import { useState } from "react"
import SearchBar from "./SearchBar"
import ProductList from "./ProductList"


export default function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="flex flex-col items-center justify-items-center justify-center gap-3 ">
      <h1 className="text-3xl m-2">Product Search</h1>
      <SearchBar  setSearch={setSearch}/>
      <ProductList search={search}/>
    </div>
  )
}


