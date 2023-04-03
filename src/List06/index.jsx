import React, { useState, useEffect } from 'react';

import './index.less'


const List06 =({data})=> {

  return (
    <div className="sc-list06">
      {/* <Title title={data?.title} line={data?.line} /> */}

      <div className="m-bd">
        {data?.list.map((item,i)=> 
          <div className="m-item" key={i}>
            <div className="m-tl">{item.name}</div>
            <div className="m-ossm">{item.subtitle}</div>
            <div className="m-rec">
              {item.rec.map((o,j)=>
                <li key={j}>{o}</li>
              )}
            </div>
            <div className="m-desc">{item.desc}</div>
            <div className="m-ft">
              {item.list.map((o,j)=>
                <div className="m-list" key={j}>
                  <div className="m-row">
                    <label>{o.m}</label>
                    <em>{o.v}</em>
                  </div>
                  <div className="m-row">
                    <span>{o.d}</span>
                  </div>
                  <div className="m-row">
                    <span>{o.o}</span>
                  </div>
                </div>
              )}
              {/* <div className="m-fn">
                <a>ご予約はこちら</a>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default List06
