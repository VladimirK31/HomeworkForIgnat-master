import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJun from './pages/PreJun'
import PreJunior from './pages/PreJunior'
import PreJunPlus from './pages/PreJunPlus'

export const PATH = {
  PRE_JUNIOR: '/pre-junior',
  PRE_JUN: '/pre-Jun',
  PRE_JUNPLUS: '/pre-Jun+',
  Error404: '/*',

  // add paths
}

function Pages() {
  return (
    <div>
      {/*Routes выбирает первый подходящий роут*/}
      <Routes>
        {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
        <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR} />} />
        <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />
        <Route path={PATH.PRE_JUN} element={<PreJun />} />
        <Route path={PATH.PRE_JUNPLUS} element={<PreJunPlus />} />
        // add routes
        {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
        <Route path={PATH.Error404} element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default Pages
