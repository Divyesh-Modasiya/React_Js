import React, { useContext } from 'react'
import { context } from './Home'

export default function About() {
    const data = useContext(context)
  return (
    <div>
      <h1>About</h1>
      <p>{data}</p>
    </div>
  )
}
