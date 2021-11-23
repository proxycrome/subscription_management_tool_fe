import React from 'react'
import '../Smallestbox/Smallestbox.css'

function Smallestbox({icon,name}){
    return(
        <div className="Smallestbox">
            <div><img src={icon}/></div>
            
        </div>

    )
}

export default Smallestbox