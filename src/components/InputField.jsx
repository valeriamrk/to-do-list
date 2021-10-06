import React from 'react'
import * as S from "./styles"


// const InputField = React.forwardRef((props, ref) => {
//   return (
//     <div>
//       <input ref={ref} {...props}/>
//     </div>
//   )
// })

// export default InputField

const InputField = (props) => {
  return (
    <div>
      <S.InputField {...props}/>
    </div>
  )
}

export default InputField
