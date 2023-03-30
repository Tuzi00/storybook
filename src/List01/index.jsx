import React from 'react';

import './index.less'


const List01 =({data})=> {


  return (
    <div className="sc-list01" style={{background:`${data.clr}`}}>
      <div className="m-bd">
        {data?.list.map((item,i)=>
          <div className="m-item" key={i}>
            <div className="m-tl">
              {item?.title && 
              <label> 
              {data?.id1 && <span>{i+1} .</span>} {item?.title} 
              </label>}
            </div>

            {item.cnt.map((o,j)=>
              <span key={j}>
                {data?.id2 && <label>{j+1}. </label>} {o}
              </span>
            )}

            {item.list.map((o,j)=>
              <li className={data?.id3?'':'np'} key={j}>
                <span>{o}</span>
              </li>
            )}
            
          </div>
        )}
      </div>

      
    </div>
  )
}

export default List01