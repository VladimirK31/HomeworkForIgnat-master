import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './Pages'
import s from './Header.module.css'

function Header() {
  return (
    <div className={s.header}>
      <NavLink to={PATH.PRE_JUNIOR}> PreJunior</NavLink>
      <NavLink to={PATH.PRE_JUN}> PreJun</NavLink>
      <NavLink to={PATH.PRE_JUNPLUS}> PreJun +</NavLink>
    </div>
  )
}

export default Header
