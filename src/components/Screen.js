import React from 'react'
import Sidebar from './Sidebar'
import Farmer from './Farmer'
import '../css/farmer.css'
function Screen() {
  return (
    <div className="Screen">
      
      <div>
            <Sidebar/>
      </div>
     

      <div className="farmer">
            <Farmer/>
      </div>
    </div>
  )
}

export default Screen
