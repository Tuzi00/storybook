## List09

- tit `boolean`: 标题栏目的显示模式
- label `boolean`: 标签的显示模式
- line `boolean`: 分隔线的显示模式
- title `string`: 标题文本
- list `array`: ITEM 对象

### ITEM

- title `string`: 内容标题
- label `string`: 标签
- cnt `string`: 段落内容

```tsx
import { List09 } from 'japanCom';
import React, { useState } from 'react';

const [line, setLine] = useState(true);
const [label, setLabel] = useState(true);
const [tit, setTit] = useState(true);

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
      title: 'title主题title主题',
      label: 'label标签l签',
      cnt: '取扱い中止の検査項目について大変ご不便おかけいたしますが、引き続きよろしくお願い申し上げます。',
    },
    {
      title: 'title主题title主题title主题title主题',
      label: 'label标签l签',
      cnt: '取扱い中止の検査項目について大変ご不便おかけいたしますが、引き続きよろしくお願い申し上げます。',
    },
  ],
  line: line,
  label: label,
  tit: tit,
};

export default () => (
  <div>
    <div className="m-btn" style={{ display: 'flex' }}>
      <span style={s} onClick={setTit.bind(this, !tit)}>
        TITLE
      </span>
      <span style={s} onClick={setLine.bind(this, !line)}>
        LINE
      </span>
      <span style={s} onClick={setLabel.bind(this, !label)}>
        LABEL
      </span>
    </div>
    <List09 data={data} />
  </div>
);
```
