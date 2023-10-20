import React from 'react'
import Sidebar from './Sidebar'
import Farm from './Farm'
import '../css/farmer.css'

function Screenone() {
  return (
    <div style={{ display: 'flex'}}>
      
      <div>
            <Sidebar/>
      </div>
     

      <div style={{ width:'100%'}}>
            <Farm/>
      </div>
    </div>
  )
}

export default Screenone

