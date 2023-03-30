import React from 'react';

import './index.less'

const List04 =({data})=> {

 
  return (
    <div className="sc-list04">
      {/* <Title title={data?.title} line={data?.line} /> */}

      <div className="m-bd">
        {data?.list.map((item,i)=>
          <div className="m-item" key={i}>
            <label className={(data.icon)?'icon':''}>{item.title}</label>
            <p>
              {item.cnt.map((o,j)=>
                <span>{o}</span>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default List04

