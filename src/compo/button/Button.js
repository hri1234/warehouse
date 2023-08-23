import React from 'react'

const Button = (props) => {
    const {type, btnName, btnStyle, btnEvent} = props
    return (
        <>
            <button
                type={type}
                onClick={btnEvent}
                className={btnStyle ? btnStyle : "fill-btn"}
            >{btnName}
            </button>
        </>
    )
}

export default Button
