import React, { useState } from 'react';
import { Radio } from 'antd';


type Mode = 'all' | 'double' | 'one'

const PaddingInput = () => {
  const [mode, setMode] = useState<Mode>('one')

  return (
    <div>
      {mode}
      <Radio.Group onChange={e => setMode(e.target.value)} defaultValue="one">
        <Radio.Button value="one">Similar all around</Radio.Button>
        <Radio.Button value="double">Shanghai</Radio.Button>
        <Radio.Button value="all">Beijing</Radio.Button>
      </Radio.Group>
    </div>
  );
}

export default PaddingInput;
