import React from 'react'

export const Page: React.FC<{
  extra: string
}> = ({ extra }) => {
  return (
    <div>
      <span>page: {extra}</span>
    </div>
  )
}
