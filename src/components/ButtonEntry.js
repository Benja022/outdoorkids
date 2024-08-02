import React from 'react'
import style from './ButtonEntry.module.css'

const ButtonEntry = ({ text }) => {
  return (
    <button className={style['button--entry']}>
      {text}
    </button>
  )
}

export default ButtonEntry