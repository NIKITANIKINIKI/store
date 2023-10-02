import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Store</span>
            <ul className='nav'>
              <li>О нас</li>
              <li>Контакты</li>
              <li>Личный кабинет</li>
            </ul>
        </div>
        <div className='pres'></div>
    </header>
  )
}
