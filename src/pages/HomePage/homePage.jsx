import React from 'react'
import Header from '../../components/Header/header'
import Title from '../../components/Title/title'

function homePage() {
  return (
    <div>
        <main><Header /></main>
        <section>
            <Title position='left'  title='Пицца' />
        </section>
        <section>
        <Title position='center' title='Напитка' />
        </section>
    </div>
  )
}

export default homePage