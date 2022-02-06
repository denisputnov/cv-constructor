import React, { useEffect, useMemo, useState } from 'react';
import { Radio, InputNumber } from 'antd';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import editorSettins, { Paddings, PaddingSettingModes } from '../../../store/editorSettins';


type Mode = 'all' | 'oposite' | 'one'

const PaddingInput = observer(() => {
  const [mode, setMode] = useState<Mode>('one')
  
  useEffect(() => {
    editorSettins.setPadding(5, 'all')
  }, [mode])

  const inputsLayout = useMemo(() => {
    switch (mode) {
      case 'one':
        return (
          <InputNumber
            addonBefore={'All around'} 
            value={editorSettins.paddings.top} 
            min={2} 
            max={30} 
            defaultValue={5} 
            controls={false} 
            onChange={value => editorSettins.setPadding(value, 'all')}
          />
        )
      case 'oposite':
        return (
          <>
            <InputNumber 
              addonBefore={'Top & Bottom'} 
              value={editorSettins.paddings.top}
              min={2} 
              max={30} 
              defaultValue={5} 
              controls={false} 
              onChange={value => editorSettins.setPadding(value, 'topbottom')}
            />
            <InputNumber
              addonBefore={'Left & Right'} 
              value={editorSettins.paddings.left}
              max={30} 
              defaultValue={5} 
              controls={false} 
              onChange={value => editorSettins.setPadding(value, 'leftright')}
            />
          </>
        )
      case 'all':
        return (
          <>
            {['Top', 'Right', 'Bottom', 'Left'].map((name) =>
              <InputNumber 
                key={name}
                addonBefore={name} 
                value={editorSettins.paddings[name.toLowerCase() as keyof Paddings]}
                min={2} 
                max={30} 
                defaultValue={5} 
                controls={false} 
                onChange={value => 
                  editorSettins.setPadding(value, name.toLowerCase() as PaddingSettingModes)
                }
              />  
            )}
          </>
        )
      default:
        return null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, editorSettins.paddings])

  return (
    <>
      <Radio.Group onChange={e => setMode(e.target.value)} defaultValue='one'>
        <StyledRadioButton value='one'>Similar all around</StyledRadioButton>
        <StyledRadioButton value='oposite'>Oposite sides</StyledRadioButton>
        <StyledRadioButton value='all'>Each side</StyledRadioButton>
      </Radio.Group>
      <InputsContainer $mode={mode}>
        {inputsLayout}
      </InputsContainer>
    </>
  );
})


const InputsContainer = styled.div<{
  $mode: Mode
}>`
  display: grid;
  grid-template-columns: ${({ $mode }) => {
    if ($mode === 'one') return '1fr';
    return 'repeat(2, 1fr)';
  }};
  grid-template-rows: auto;
  width: 100%;
  padding-top: 10px;
  gap: 10px;
  
  
  & .ant-input-number-wrapper {
    width: 100%;
    box-shadow: 0px 3px 10px 0px rgba(34, 60, 80, 0.1);
    border-radius: 10px;

    .ant-input-number-group-addon {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      width: 85px;
      text-align: left;
      border: none;
      color: #00000076;
    }

    .ant-input-number {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border: none;
    }
  }
`

const StyledRadioButton = styled(Radio.Button)`
  border: none;
  
  &.ant-radio-button-wrapper-checked,
  &:first-child {
    border: none;
  }

  &::before {
    content: none !important;
  }
`

export default PaddingInput;
