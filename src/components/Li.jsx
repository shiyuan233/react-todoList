import React, { useState, useEffect, useRef } from 'react'

function Li(props) {
  const { item: { name, checked }, bkey, handleChecked, changeValue } = props
  const [isChange, setChange] = useState(true);
  const [value, setValue] = useState('');
  const input = useRef('input')
  function handleDoubleClick() {
    setChange(!isChange)
  }
  function handleChange({ target: { value } }) {
    setValue(value)
  }
  useEffect(() => {
    setValue(name)
  }, [])
  useEffect(() => {
    console.log(isChange, input);
    if (!isChange) {
      input.current.focus()
    }
  })
  function handleBulr() {
    changeValue(bkey, value)
    setChange(!isChange)
  }
  return (
    <li className={checked ? 'li__did' : ''} onDoubleClick={handleDoubleClick} >
      {isChange ?
        <>
          <input type="checkbox" checked={checked} onChange={
            () => {
              handleChecked(bkey)
            }
          } />
          {name}
        </> :
        <input type="text" ref={input} value={value} onChange={handleChange} onBlur={handleBulr} />}
    </li>
  )
}

export default Li
