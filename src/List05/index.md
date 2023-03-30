
## List05

```tsx
import React, { useState, useEffect } from 'react';
import { List05 } from 'japanCom';


const [line, setLine] = useState(true)

const data = {
  title:"点滴メニュー",
  btn: "詳細はこちら",
  list:[{
    title:"サイトカイン点滴(歯髄) ",
    cnt: "「肌の悩みや身体の悩みを細胞レベルで改善していきます。当クリニックでは「脂肪由来 幹細胞培養液」「歯髄 幹細胞培養液」の2種類を導入・ご提供しております。",
    ossm: true,
    },{
    title:"脂肪燃焼ダイエット点滴",
    cnt: "痩せやすい体質への改善をサポートします。食事・運動の適正化やサプリメントとの併用により、ダイエット効果を高めることができます",
    ossm: true,
    },{
    title:"白玉点滴(シンデレラ点滴)",
    cnt: "白玉注射・白玉点滴（グルタチオン注射・グルタチオン点滴）は、美容最前線をいくハリウッドセレブや韓国芸能人から発信され浸透し、日本国内においても大人気治療となっています。",
    ossm: true,
    },{
    title:"サイトカイン点滴(歯髄) ",
    cnt: "「肌の悩みや身体の悩みを細胞レベルで改善していきます。当クリニックでは「脂肪由来 幹細胞培養液」「歯髄 幹細胞培養液」の2種類を導入・ご提供しております。",
    ossm: false,
    },{
    title:"脂肪燃焼ダイエット点滴",
    cnt: "痩せやすい体質への改善をサポートします。食事・運動の適正化やサプリメントとの併用により、ダイエット効果を高めることができます",
    ossm: false,
    },{
    title:"白玉点滴(シンデレラ点滴)",
    cnt: "白玉注射・白玉点滴（グルタチオン注射・グルタチオン点滴）は、美容最前線をいくハリウッドセレブや韓国芸能人から発信され浸透し、日本国内においても大人気治療となっています。",
    ossm: false,
    }],
  line: line
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
    </div>
    <List05 data={data} />
  </div>

  );
```
