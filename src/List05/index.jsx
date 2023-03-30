import React from 'react';

import './index.less'

// import icon_ossm from '../../imgs/ossm.svg'

const List05 =({data})=> {

 
  return (
    <div className="sc-list05">
      {/* <Title title={data?.title} line={data?.line} /> */}

      <div className="m-bd">
        {data?.list.map((item,i)=>
          <div className={(item.ossm)?"m-item ossm":"m-item"} key={i}>

            {item.ossm && 
            <div className="m-icon">
              {/* <img src={icon_ossm} /> */}
            </div>}
            
            <label className={(data.icon)?'icon':''}>{item.title}</label>
            <span>{item.cnt}</span>
            <p>
              <a>{data.btn}</a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default List05

