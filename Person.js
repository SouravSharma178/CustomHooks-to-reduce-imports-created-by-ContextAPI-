import personContext from '../Components/PersonContext'
import { useContext } from 'react';
const usePerson = () => {
  return useContext(personContext)
}

export default usePerson
