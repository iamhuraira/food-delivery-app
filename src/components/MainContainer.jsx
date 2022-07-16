import React from 'react'

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className='py-2 flex-1 flex flex-col items-start md:items-start justify-center'>
        <p>Bike Delivery</p>
      </div>
      <div className='py-2 flex-1 bg-blue-400'></div>
    </div>
  )
}

export default MainContainer