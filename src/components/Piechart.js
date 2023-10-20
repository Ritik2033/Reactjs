import React from 'react'

import Sidebar from './Sidebar'
import Screentwo from './Screentwo'
import '../css/farmer.css'

function Piechart() {
    return (

        <div style={{ display: 'flex' }}>

            <div>
                <Sidebar />
            </div>


            <div style={{ width: '100%' }}>
                <Screentwo />
            </div>
        </div>


    )
}

export default Piechart
