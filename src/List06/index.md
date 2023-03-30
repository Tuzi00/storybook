
## List06

```tsx
import React, { useState, useEffect } from 'react';
import { List06 } from 'japanCom';


const [line, setLine] = useState(false)
const [color, setColor] = useState('#ff0000')


const doColor=()=> {
  document.querySelector('html').classList.add('red')
}

const data = {
  title:"診療メニュー",
  list:[{
        "name": "初診療・測定",
        "rec": [
            "特徴の説明",
            "特徴の説明",
            "特徴の説明"
        ],
        "desc": "詳細な説明詳細な説明詳細な説明詳細な説明詳細な説明詳細な説明詳細な説明詳細な説明詳細な説明",
        "list": [
            {
                "m": "初診療",
                "v": "￥１１,０００",
                "d": "問診料・カウンセリング料"
            },
            {
                "m": "口臭測定",
                "v": "￥１１,０００",
                "d": "硫化水素測定・メチルメルカチタン・ジメチルサルファイド"
            },
            {
                "m": "量子共鳴人体ドック",
                "v": "￥５５,０００",
                "d": "体内２４系統（１６０項目）を測定"
            }
        ]
    },
    {
        "name": "治療",
        "rec": [
            "特徴の説明",
            "特徴の説明",
            "特徴の説明"
        ],
        "desc": "詳細な説明詳細な説明詳細な説明詳細な説明詳細な説明詳細な説明詳細な説明詳細な説明詳細な説明",
        "list": [
            {
                "m": "医療面談",
                "v": "￥３３,０００",
                "d": ""
            },
            {
                "m": "口臭改善",
                "v": "￥１１,０００",
                "d": "口臭における不安内容の確認と改善処置"
            },
            {
                "m": "採血",
                "v": "￥１１,０００",
                "d": "現在の状況及び状態を検査、治療効果の測定",
                "o": "※採血に於いては、基本検査以外にアレルギー検査、内分泌検査等も各種行います。"
            }
        ]
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
    <List06 data={data} />
  </div>

  );
```
