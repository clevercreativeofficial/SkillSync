import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
}

const container = ({children}:ContainerProps) => {
  return (
    <div className='max-w-[1200px] w-full m-auto px-3'>
        {children}
    </div>
  )
}

export default container