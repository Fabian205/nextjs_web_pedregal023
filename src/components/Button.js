import React from 'react'

function Button({link, text, onClick}) {
  return (
    <a href={link} className='btn mb-5' onClick={onClick}>{text}  </a>
  )
}

export default Button