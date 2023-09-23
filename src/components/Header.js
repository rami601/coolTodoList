import React from 'react'

const Header = ({total,completedItems}) => {
  return (
    <div className='header'>
        <h1>Todo-List <br/> {completedItems } / {total} </h1>
        
        
    </div>
  )
}

export default Header