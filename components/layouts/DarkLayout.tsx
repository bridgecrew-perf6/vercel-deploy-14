import React, { FC, PropsWithChildren } from 'react'

interface Props {
  children: React.ReactNode
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '5px',
        borderRadius: '10px'
        
    }}
    >   
        <h3>DarLayout</h3>
        { children }
    </div>
  )
}
