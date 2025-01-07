import React from 'react'
import { useState } from 'react'
function Home(Open) {
    let price = 38
    function Newcomponent(){
        const [data,setData]=useState(0)
        function Clickbtn(){
            setData(data+1)
        }
        function Clickagain(){
            if (data<=0) {
                setData(0)
            }else{
                setData(data-1)
            }
        }
        return <Open data={data} Clickbtn={Clickbtn} Clickagain={Clickagain} price={price}/>
    }
  return Newcomponent
}

export default Home
