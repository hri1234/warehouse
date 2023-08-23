import React from 'react'

const Input = (props) => {
    const { inputType, inputName, inputStyle, inputEvent, inputId, Inputvalue } = props
    return (<>
        <input
            type={inputType}
            name={inputName}
            onChange={inputEvent}
            id={inputId}
            value={Inputvalue}
            className={inputStyle ? inputStyle : "fill-btn"}
        />
    </>
    )
}

export default Input
