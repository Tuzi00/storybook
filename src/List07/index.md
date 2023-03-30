## List07

- line `boolean`: 标题栏目的显示模式
- id `boolean`: 是否显示序号
- title `string`: 标题文本
- list `array`: ITEM 对象

### ITEM

`cnt` 和 `list` 只有一个可以显示。

- title `string`: 内容标题
- label `string`: 二级标签
- cnt `string`: 段落内容
- list `array`: 内容数组

```tsx
import { List07 } from 'japanCom';
import React, { useState } from 'react';

const [line, setLine] = useState(true);
const [id, setId] = useState(true);

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
  title: 'List07',
  list: [
    {
      title: 'ti',
      label: 'label副标题',
      cnt: '美容点滴の問合せ先とは異なりますのでご了承下さい。测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字',
      list: [],
    },
    {
      title: 'title主题title主题title主题title主题',
      label:
        'label副标题label副标题label副标题label副标题label副标题label副标题label副标题label副标题label副标题label副标题',
      cnt: '',
      list: [
        '取扱い中止の検査項目について',
        '3月末で下記項目を取扱い中止とさせていただきます。',
        '大変ご不便おかけいたしますが、引き続きよろしくお願い申し上げます。',
      ],
    },
    {
      title: 'title主题title主题title主题title主题',
      label:
        'label副标题label副标题label副标题label副标题label副标题label副标题label副标题label副标题label副标题label副标题',
      cnt: '',
      list: [
        '取扱い中止の検査項目について',
        '3月末で下記項目を取扱い中止とさせていただきます。',
        '大変ご不便おかけいたしますが、引き続きよろしくお願い申し上げます。',
      ],
    },
    {
      title: 'title主题title主题title主题title主题',
      label:
        'label副标题label副标题label副标题label副标题label副标题label副标题label副标题label副标题label副标题label副标题',
      cnt: '',
      list: [
        '取扱い中止の検査項目について',
        '3月末で下記項目を取扱い中止とさせていただきます。',
        '大変ご不便おかけいたしますが、引き続きよろしくお願い申し上げます。',
      ],
    }
  ],
  line: line,
  id: id,
};

export default () => (
  <div>
    <div className="m-btn" style={{ display: 'flex' }}>
      <span style={s} onClick={setLine.bind(this, !line)}>
        LINE
      </span>
      <span style={s} onClick={setId.bind(this, !id)}>
        ID
      </span>
    </div>
    <List07 data={data} />
  </div>
);
```
