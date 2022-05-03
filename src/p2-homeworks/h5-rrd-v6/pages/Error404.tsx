import React from 'react'
import s from './Error.module.css'
function Error404() {
  return (
    <div className={s.error}>
      <div className={s.title}>404</div>
      <div className={s.title}>Page not found!</div>
      <div className={s.title}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
    </div>
  )
}

export default Error404
