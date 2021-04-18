import React from 'react'
import Li from './Li'
function Ul(props) {
  const { list } = props
  return (
    <ul>
      {list.map((item, index) => {
        return < Li item={item} key={item.id} bkey={index} handleChecked={props.handleChecked} changeValue={props.changeValue} />
      })}

    </ul>
  )
}

export default Ul
