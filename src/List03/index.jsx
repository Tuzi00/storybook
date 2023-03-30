import React from 'react';

import './index.less'

const List03 =({data})=> {

  const cls = `m-item ${(data.dash)?'dash':''} ${(data.icon)?'icon':''}`

  return (
    <div className="sc-list03">
      {/* <Title title={data?.title} line={data?.line} /> */}

      <div className="m-bd">
        {data?.list.map((item,i)=>
          <div className={cls} key={i}>
            <label className={(data.icon)?'icon':''}>{item.title}</label>
            <span>{item.cnt}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default List03

