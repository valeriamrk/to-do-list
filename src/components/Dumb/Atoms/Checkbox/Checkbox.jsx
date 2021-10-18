import React from 'react'

const Checkbox = (props) => {

  const changeCheckbox = (id, done) => {
    props.doneTask(id, done)
  }

  return (
    <div>
      <input type="checkbox"
      checked={props.done}
      onChange={() => changeCheckbox(props.id, props.done)}></input>
    </div>
  )
}

export default Checkbox
