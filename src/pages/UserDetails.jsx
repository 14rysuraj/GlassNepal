import React from 'react'
import { seedDatabase } from '../utils/databaseSeed'

const UserDetails = () => {
  return (
    <div>
          <button onClick={()=>seedDatabase()}>
        click me daddy with mummy      
      </button>
    </div>
  )
}

export default UserDetails
