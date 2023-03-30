## List08

- line `boolean`: 分隔线的显示模式
- id `boolean`: 是否显示序号
- title `string`: 标题文本
- list `array`: ITEM 对象

### ITEM

- title `string`: 内容标题
- label `string`: 标签
- list `array`: 内容数组

```tsx
import { List08 } from 'japanCom';
import React, { useState } from 'react';

const [id, setId] = useState(true);
const [line, setLine] = useState(true);
const [label, setLabel] = useState(true);

const s = {
  padding: '10px 15px',
  border: '1px solid #eee',
  width: '120px',
  textAlign: 'center',
  fontSize: '16px',
  cursor: 'pointer',
  transition: '.2 ease',
  flex: 1,
};

const data = {
  title: 'List08',
  list: [
    {
      title: 'title主题title主题title主题title主题',
      label: 'label标签l签',
      list: [
        '取扱い中止の検査項目について',
        '3月末で下記項目を取扱い中止とさせていただきます。',
        '大変ご不便おかけいたしますが、引き続きよろしくお願い申し上げます。',
      ],
    },
    {
      title: 'title主题title主题title主题title主题',
      label: 'label标签',
      list: [
        '取扱い中止の検査項目について',
        '3月末で下記項目を取扱い中止とさせていただきます。',
        '大変ご不便おかけいたしますが、引き続きよろしくお願い申し上げます。',
      ],
    },
  ],
  id: id,
  line: line,
  label: label,
};

export default () => (
  <div>
    <div className="m-btn" style={{ display: 'flex' }}>
      <span style={s} onClick={setId.bind(this, !id)}>
        ID
      </span>
      <span style={s} onClick={setLine.bind(this, !line)}>
        LINE
      </span>
      <span style={s} onClick={setLabel.bind(this, !label)}>
        LABEL
      </span>
    </div>
    <List08 data={data} />
  </div>
);
```
