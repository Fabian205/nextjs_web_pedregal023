import React from 'react'

function Button({link, text}) {
  return (
    <a href={link} className='btn'>{text} </a>
  )
}

export default Button