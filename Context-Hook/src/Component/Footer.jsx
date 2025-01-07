import React from 'react'
import { useContext } from 'react'
import { context } from './Home'

export default function Footer() {

    const data=useContext(context)
  return (
    <div>
      <label htmlFor="">Enter Your First Name : </label>
      <input type="text" placeholder=''  value={data} />
    </div>
  )
}

