import React, { useState } from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'High' | 'Low' | 'Middle' // need to fix any
export type AffairType = {
  _id: number
  name: string
  priority: AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
  // need to fix any
  { _id: 1, name: 'React', priority: 'High' },
  { _id: 2, name: 'anime', priority: 'Low' },
  { _id: 3, name: 'games', priority: 'Low' },
  { _id: 4, name: 'work', priority: 'High' },
  { _id: 5, name: 'html & css', priority: 'Middle' },
]

// pure helper functions
export const filterAffairs = (
  affairs: AffairType[],
  filter: FilterType
): any => {
  switch (filter) {
    case 'High':
      return affairs.filter((a) => a.priority === 'High')
    case 'Middle':
      return affairs.filter((a) => a.priority === 'Middle')
    case 'Low':
      return affairs.filter((a) => a.priority === 'Low')
    default:
      return affairs
  }
}
export const deleteAffair = (affairs: AffairType[], _id: number): any => {
  return affairs.filter((a) => a._id !== _id)
}

function HW2() {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredAffairs = filterAffairs(affairs, filter)
  const deleteAffairCallback = (_id: number) =>
    setAffairs(deleteAffair(affairs, _id)) // need to fix any

  return (
    <div>
      <hr />
      homeworks 2{/*should work (должно работать)*/}
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr />
    </div>
  )
}

export default HW2
