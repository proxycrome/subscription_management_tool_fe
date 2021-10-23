import React from 'react'

function Input({children,type,name}){
    return(
        <div>
            
            <button type={type} name={name}>{children}</button>
        </div>
    )
}
export default Input