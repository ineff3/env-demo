'use client';
import React from 'react'

const CustomBtn = ({ title, componentStyles, handleClick }) => {
    return (
        <button
            className={` rounded-md w-56 py-3 font-semibold hover:bg-emerald-600 ${componentStyles}`}
            onClick={handleClick}>
            {title}
        </button>
    )
}

export default CustomBtn