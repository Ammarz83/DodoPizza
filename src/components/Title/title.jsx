import React from 'react'
import css from './title.module.css'

function Title(props) {
  return (
    <div style={{textAlign: props.position}} className={css.title}>{props.title} </div>
  )
}

export default Title