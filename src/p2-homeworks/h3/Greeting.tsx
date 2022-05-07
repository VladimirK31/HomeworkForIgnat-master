import React, { ChangeEvent } from 'react'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
  addUser: () => void // need to fix any
  error: any // need to fix any
  totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
  const inputClass = s.error // need to fix with (?:)

  return (
    <div>
      <SuperInputText
        value={name}
        onChange={setNameCallback}
        className={inputClass}
      />
      <span>{error}</span>
      <SuperButton onClick={addUser}>add</SuperButton>
      <span>{totalUsers}</span>
    </div>
  )
}

export default Greeting
