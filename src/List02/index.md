
## List02

```tsx
import React, { useState, useEffect } from 'react';
import { List02 } from 'japanCom';


const [line, setLine] = useState(true)
const [dash, setDash] = useState(true)
const [icon, setIcon] = useState(true)

const data = {
  title:"このような方におすすめです",
  list:["肌の衰えが目立ってきた",
        "シミ・シワ・たるみが気になる",
        "くすみを改善したい、美白肌になりたい",
        "繰り返す大人ニキビをどうにかしたい",
        "まわりに気づかれずに肌を若返らせたい",
        "この頃、傷の治りが遅くなってきた"],
  icon: icon,
  line: line,
  dash: dash,
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
      <span style={s} onClick={setDash.bind(this,!dash)}>DASH</span>
      <span style={s} onClick={setIcon.bind(this,!icon)}>ICON</span>
    </div>
    <List02 data={data} />
  </div>

  );
```
