import { useEffect, useState } from "react";

export default function ProductList(props) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { search } = props;

  const fetchData = async () => {
    try {
      const resp = await fetch(
        "https://dummyjson.com/products?limit=30&select=title,category,price"
      )
      const data = await resp.json();
      const result = data.products.filter( (el) =>
          String(el.title).toLowerCase().includes(search.toLowerCase()) ||
          String(el.category).toLowerCase().includes(search.toLowerCase()) ||
          String(el.price).toLowerCase().includes(search.toLowerCase())
      )

      setProduct(result)
    } catch (err) {
      setError(err)

    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    setTimeout(() => {
      fetchData()
    }, 2000)

    return () => {
      clearTimeout()
    }
  }, [search])

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {true &&
        product.map((el, index) => (
          <p key={index}>{` ${el.title} | ${el.category} | ${el.price}`}</p>
        ))}
    </div>
  )
}
