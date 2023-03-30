
## List04

```tsx
import React, { useState, useEffect } from 'react';
import { List04 } from 'japanCom';


const [line, setLine] = useState(true)
const [icon, setIcon] = useState(true)

const data = {
  title:"よくある質問",
  list:[{
    title:"施術時間",
    cnt: ["30分程度（カウンセリングを除きます）"]
    },{
    title:"通院",
    cnt: ["症状に合わせ、継続的に1ヶ月～3カ月に1度の治療をお勧めしています。",
          "数カ月かけて、複数回行うことでお肌の状態が改善されていきます。"]
    },{
    title:"注意事項",
    cnt: ["特にありません。",
          "治療当日から洗顔、メイク、シャワー、入浴、運動が可能です。",
          "また、効果については個人差があります。"]
    }],
  icon: icon,
  line: line,
}

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

export default () => (
  <div>
    <div className="m-btn" style={{"display": "flex"}}>
      <span style={s} onClick={setLine.bind(this,!line)}>LINE</span>
      <span style={s} onClick={setIcon.bind(this,!icon)}>ICON</span>
    </div>
    <List04 data={data} />
  </div>

  );
```
