import React from 'react'
import personDispatchContext from '../Components/PersonDispatchContext'
import { useContext } from 'react'

const usePersonDispatch = () => {
  return useContext(personDispatchContext)
}

export default usePersonDispatch
