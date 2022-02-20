import { InputNumber } from 'antd'
import { observer } from 'mobx-react-lite'
import React from 'react'
import editorSettins from '../../../../store/editorSettins'

const FontSizeInput = observer(() => {
  return (
    <InputNumber 
      addonBefore='Font Size' 
      value={editorSettins.customFontSize} 
      placeholder='Default' 
      stringMode
      controls={false} 
      onChange={value => 
        editorSettins.setCustomFontSize(value)
      }
    />
  )
})

export default FontSizeInput