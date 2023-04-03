
## List10

- title `string`: 标题文本
- list `array`: ITEM 对象
- line `boolean`: 标题栏目的显示模式
- link `boolean`: 是否显示跳转标签
- lbLink `boolean`: 跳转标签的显示模式

### ITEM

- icon `string`: 图标链接
- title `array`：标题数组
- cnt `string`：段落内容
- src `string`：跳转链接
- link `string`：跳转链接说明

```tsx
import React, { useState, useEffect } from 'react';
import { List10 } from 'japanCom';

const [line, setLine] = useState(true)
const [link, setLink] = useState(true)
const [lbLine, setLbLine] = useState(true)


const s = {
  padding: '10px 15px',
  border: '1px solid #eee',
  width: '120px',
  textAlign: 'center',
  fontSize: '16px',
  cursor: 'pointer',
  transition: '.2 ease',
  flex: 1, 
}

const data = {
  title: "Let's build a better workplace",
  list:[{
      icon:"https://images.pexels.com/photos/7245251/pexels-photo-7245251.jpeg",
      title:["Facilities","Services"],
      cnt:"加齢に伴い私たちの身体は、しみ・しわ・たるみの増加、視力・聴力の低下、筋力や抵抗力の減少など、さまざまな老化サインを見せ始めます。",
      src:"http://www.baidu.com",
      link:"Learn more",
    },{
      icon:"https://images.pexels.com/photos/7245251/pexels-photo-7245251.jpeg",
      title:["Facilities","Services"],
      cnt:"加齢に伴い私たちの身体は、しみ・しわ・たるみの増加、視力・聴力の低下、筋力や抵抗力の減少など、さまざまな老化サインを見せ始めます。",
      src:"http://www.baidu.com",
      link:"Learn more",
    },{
      icon:"https://images.pexels.com/photos/7245251/pexels-photo-7245251.jpeg",
      title:["Facilities","Services"],
      cnt:"加齢に伴い私たちの身体は、しみ・しわ・たるみの増加、視力・聴力の低下、筋力や抵抗力の減少など、さまざまな老化サインを見せ始めます。",
      src:"http://www.baidu.com",
      link:"Learn more",
    }],
    line:line,
    link:link,
    lbLine:lbLine,
}

export default () => (
  <div>
    <div className="m-btn" style={{"display": "flex"}}>
      <span style={s} onClick={setLine.bind(this,!line)}>LINE</span>
      <span style={s} onClick={setLink.bind(this,!link)}>LINK</span>
      <span style={s} onClick={setLbLine.bind(this,!lbLine)}>LBLINE</span>
    </div>

    <List10 data={data} />
  </div>
  )
```
