import React, { useEffect, useState } from 'react'

function Home() {
    const [record,setRecord] = useState(null)
    useEffect(()=>{
       
        addData()
    },[])

    const addData = () =>{
      fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setRecord(data))
    }

  return (
    <div>
      <h1>Json server data </h1>
        {
            record 
            ?
            record.map((e,i)=>{
                return <div key={i} >
                    <p>{e.id}</p>
                    <p>{e.title}</p>
                    <p>{e.views}</p>
                </div>
                
            })
            :
            <p>Loading</p>

        }
        <button onClick={addData}>Add+</button>
    </div>
  )
}

export default Home
