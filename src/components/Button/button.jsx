import React from 'react'
import css from './button.module.css'

function button(props) {
  return (
    <div>
        <button className={props.variant === 'empty' ? css.empty : css.full}>{props.title}</button>
    </div>
  )
}

export default button