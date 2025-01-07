import React from 'react'
import { useState } from 'react'

function Maincomponent(Firstcomp) {
    function NewComponent(){
        const [data,setData] = useState(0)
        function handelincrement(){
            setData(data+1)
        }

        return <Firstcomp data = {data} handelincrement = {handelincrement}/>
    }
    return NewComponent
}

export default Maincomponent
