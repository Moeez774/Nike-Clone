'use client'
import React, { useState } from 'react'

const Button = ({ text, color, hoverColor, tColor } : { text: string, color: string, hoverColor: string, tColor: string }) => {

    const [isHovered, setHovered]  = useState(false)

    return (
        <div>
            <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`px-4 py-1.5 rounded-3xl`} style={{ color: tColor, backgroundColor: isHovered? hoverColor: color, fontWeight: '600' }}>{text}</button>
        </div>
    )
}

export default Button
