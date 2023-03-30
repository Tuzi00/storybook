import React from 'react';

import './index.less';

const List09 = ({ data }) => {
  return (
    <div className="sc-list09">
      {/* <Title title={data?.title} line={data?.tit} /> */}

      <div className="m-bd">
        {data?.list.map((item, i) => (
          <div className="m-item" key={i}>
            <div className={`m-bdy ${data.line ? 'm-line' : ''}`}>
              <div className="m-lt">
                {item?.label && 
                  data?.label&&
                (
                  <div className={`m-lb`}>{item?.label}</div>
                )}
                {item?.title && <div className="title">{item?.title}</div>}
              </div>
              {item?.cnt && <div className="m-cnt">{item?.cnt}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List09;
