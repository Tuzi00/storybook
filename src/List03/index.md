
## List03

```tsx
import React, { useState, useEffect } from 'react';
import { List03 } from 'japanCom';


const [line, setLine] = useState(true)
const [icon, setIcon] = useState(true)

const data = {
  title:"よくある質問",
  list:[{
    title:"1回の点滴で効果はありますか?",
    cnt: "個人差がありますが、老化の予防などを目的とされる方は定期的に摂取されることをおすすめしています。"
    },{
    title:"どうして老化予防効果があるのですか?",
    cnt: "現在、老化の原因とされている活性酸素は体の細胞にダメージを与え、そのダメージが老化につながると報告されています。エイジングケア点滴をすることで、活性酸素が少なくなると、ダメージを受ける細胞も少なくなり老化に対して効果が期待できます。"
    },{
    title:"保険は適応ですか??",
    cnt: "自由診療の扱いになりますので公的保険は適応になりません。"
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
    <List03 data={data} />
  </div>

  );
```
