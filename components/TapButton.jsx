import React from 'react'

const TapButton = ({active,selectTap,children}) => {
    const buttonClasses = active? "text-white border-b border-purple-600" : "text-[#ADB7BE]"
  return (
    <button onClick={selectTap}>
        <p className={`mr-3 hover:text-white ${buttonClasses}`}>
        {children}
        </p>
    </button>
  )
}

export default TapButton