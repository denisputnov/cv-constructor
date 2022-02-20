import { observer } from 'mobx-react-lite'
import React from 'react'
import userData from '../../../store/userData'

const Share = observer(() => {
  return (
    <button onClick={() => {
      // navigator.clipboard.writeText(`http://localhost:3000/?editorCollapsed=false${userData.converToUrlParams()}`)
    }}>123</button>
  )
})

export default Share