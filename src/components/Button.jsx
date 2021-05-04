import React, { useState } from 'react'

const Button = ({ color, text, onClick }) => {
    // const [textColor, setTextColor] = useState("black")
    // const [bgColor, setBgColor] = useState("white")

    // const tempClick = () => {
    //     let random = Math.floor(Math.random() * 999999)
    //     let random2 = Math.floor(Math.random() * 999999)
    //     setTextColor(`#${random}`);
    //     setBgColor(`#${random2}`)
    // };

    return <>
        <Button className="btn"
            onClick={onClick}
            style={{ backgroundColor: color }}
        >
            {text}
        </Button>
    </>
}

export default Button;