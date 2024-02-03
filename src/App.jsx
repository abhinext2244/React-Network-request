import { useState,useEffect } from 'react'
import DataDisplay from "./componets/DataDisplay"

function App() {
  const[data,setData]=useState([])
  const[isLoading,setisLoading]=useState(false);
  const[error,setError]=useState(null);
  
  async function fetchData(){
    setisLoading(true)
    try {
      let res= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      let response= await res.json();
      setData(response)
      console.log(response)
    } catch (error) {
      setError(error.message)
    }finally{
      setisLoading(false)
    }
  }
  // useEffect(function(){
  //   fetchData()
  // },[])
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
     <div>
    <button onClick={function(){
      fetchData();
     
    }}>Fetch Data</button>
       <DataDisplay post={data} />
        </div>
    
    
    </>
  )
}

export default App
