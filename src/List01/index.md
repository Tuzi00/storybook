
## List01

```tsx
import React, { useState, useEffect } from 'react';
import { List01 } from 'japanCom';
import { SketchPicker } from 'react-color';

const [line, setLine] = useState(true)
const [id1, setId1] = useState(true)
const [id2, setId2] = useState(true)
const [id3, setId3] = useState(true)
const [clr, setClr] = useState('ff6600')



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
  title:"お知らせ",
  list:[{
    title: "2022.6.10",
    cnt:[ "銀座ベレアージュクリニックPCRセンターについて",
          "PCRセンター専用ホームページ",
          "を開設いたしました。料金やお問合せはホームページ内の連絡先にお願いします。",
          "美容点滴の問合せ先とは異なりますのでご了承下さい。"],
    list:[],
    },{
    title: "2022.3.3",
    cnt:[ "取扱い中止の検査項目について",
          "3月末で下記項目を取扱い中止とさせていただきます。",
          "大変ご不便おかけいたしますが、引き続きよろしくお願い申し上げます。"],
    list:["ミアテストプラチナ","ミアテスト膵がん","ミアテストアルツハイマー型認知症"],
    }],
  line:line,
  id1: id1,
  id2: id2,
  id3: id3,
  clr: `rgba(${clr.r},${clr.g},${clr.b},${clr.a})`
}

const handleChange = (clr,e)=>{
  console.log(clr)
  setClr(clr.rgb)
}

export default () => (
  <div>
    <SketchPicker color={clr} onChange={ handleChange }  />
    <div className="m-btn" style={{"display": "flex"}}>
      <span style={s} onClick={setLine.bind(this,!line)}>LINE</span>
      <span style={s} onClick={setId1.bind(this,!id1)}>ID1</span>
      <span style={s} onClick={setId2.bind(this,!id2)}>ID2</span>
      <span style={s} onClick={setId3.bind(this,!id3)}>ID3</span>
    </div>

    <List01 data={data} />
  </div>
  )
```
