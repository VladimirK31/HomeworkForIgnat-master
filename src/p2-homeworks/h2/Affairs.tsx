import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import Affair from './Affair'
import { AffairType } from './HW2'

type AffairsPropsType = {
  // need to fix any
  data: AffairType[]
  setFilter: any
  deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair // should work
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  const setAll = () => {
    props.setFilter('All')
  } // need to fix
  const setHigh = () => {
    props.setFilter('High')
  }
  const setMiddle = () => {
    props.setFilter('Middle')
  }
  const setLow = () => {
    props.setFilter('Low')
  }

  return (
    <div>
      {mappedAffairs}

      <SuperButton onClick={setAll}>All</SuperButton>
      <SuperButton onClick={setMiddle}>Middle</SuperButton>
      <SuperButton onClick={setLow}>Low</SuperButton>
      <SuperButton onClick={setHigh}>High</SuperButton>
    </div>
  )
}

export default Affairs
