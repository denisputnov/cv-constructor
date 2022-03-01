import React from 'react'
import { InputNumber } from 'antd'
import { observer } from 'mobx-react-lite'
import editorSettings from '../../../../store/editorSettings'

const FontSizeInput = observer(() => {
  return (
    <InputNumber 
      addonBefore='Font Size' 
      value={editorSettings.customFontSize} 
      placeholder='Default' 
      stringMode
      controls={false} 
      onChange={value => 
        editorSettings.setCustomFontSize(value)
      }
    />
  )
})

export default FontSizeInput