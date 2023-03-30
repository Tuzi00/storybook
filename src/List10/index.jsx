import React from 'react';

import './index.less'


const List10 =({data})=> {


  return (
    <div className="sc-list10">
      {/* <Title title={data?.title} line={data?.line} /> */}

       <div className="m-bd">
        {data?.list.map((item,i)=>
          <div className="m-item" key={i}>

            <div className="m-icon">
              <img src={item?.icon} />
            </div>

            <div className="m-cnt">
                {item?.title.map((o,j)=>
                  <span key={j} className="m-title">{o}</span>
                )}
                {item?.cnt && <div>{item?.cnt}</div>}
                {data.link? 
                  <label>
                    {item?.src && 
                      <a href={item?.src} className={data.lbLine? "m-label":""}>{item?.link}</a>}
                  </label> : ""}
            </div>
          </div>
        )}
      </div> 
    </div>
  )
}

export default List10