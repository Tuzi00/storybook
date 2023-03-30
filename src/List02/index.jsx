import React from 'react';

import './index.less'

const List02 =({data})=> {

  const cls = `m-item ${(data.dash)?'dash':''} ${(data.icon)?'icon':''}`

  return (
    <div className="sc-list02">

      <div className="m-bd">
        {data?.list.map((item,i)=>
          <div className={cls} key={i}>
            {item}
          </div>
        )}
      </div>
    </div>
  )
}

export default List02

