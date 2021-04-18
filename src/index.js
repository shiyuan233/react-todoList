import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ul from './components/Ul';


function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState(
    [
      {
        id: 0,
        name: '马超',
        checked: true,
      }, {
        id: 1,
        name: '孙尚香',
        checked: false,
      }, {
        id: 2,
        name: '司空震',
        checked: false,
      }, {
        id: 3,
        name: '韩信',
        checked: false,
      }, {
        id: 4,
        name: '蒙犽',
        checked: false,
      },
    ]
  )
  const input = useRef('input')
  function KeyDown() {
    console.log(input);
    input.current.onkeydown = (e) => {
      if (!value.trim()) {
        return
      }
      if (e.keyCode === 13) {
        setList([
          ...list,
          {
            id: list.length + 1,
            name: value,
            checked: false,
          }
        ])
        setValue('')
      }
    }
  }
  function handleChecked(id) {
    let newList = list;
    list.filter(item => item.id === id)
    newList[id].checked = !newList[id].checked
    setList([...newList])
  }
  function changeValue(id, value) {

    let newList = list;
    if (!value) {
      console.log(id);
      newList.splice(id, 1)
      setList([...newList])
      return
    }
    list.filter(item => item.id === id)
    newList[id].name = value
    setList([...newList])
  }
  useEffect(() => {
    KeyDown()
  })
  return (
    <div>
      <input
        ref={input}
        type="text"
        value={value}
        onChange={({ target: { value } }) => {
          setValue(value)
        }
        }
        placeholder='请输入待做事项'
      />
      <Ul list={list} handleChecked={handleChecked} changeValue={changeValue} />
      <div>
        <p>待完成：{list.filter(item => !item.checked).length}项</p>
        {list.filter(item => !item.checked).length > 0 ? <p>已完成：{list.filter(item => item.checked).length}项</p> : ''}
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
