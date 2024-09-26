import React from 'react'

const Wrapper = ({children}) => {
  return (
      <div className='p-3 border border-gray-300' >
          {children}
    </div>
  )
}

export default Wrapper;