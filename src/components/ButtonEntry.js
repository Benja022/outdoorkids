import React from 'react'
import style from './ButtonEntry.module.css'

export default function ButtonEntry ({ text }) {
  return (
    <button className={style['button--entry']}>
      {text}
    </button>
  )
}
