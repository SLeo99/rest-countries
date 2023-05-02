import { useState, useEffect } from "react"

export default function useFetch(api) {
  const [data,setData] = useState([])
  
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  return data;
  
}

