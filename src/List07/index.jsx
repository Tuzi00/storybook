import React from 'react';

import './index.less';

const List07 = ({ data }) => {
  return (
    <div className="sc-list07">
      {/* <Title title={data?.title} line={data?.line} /> */}

      <div className="m-bd">
        {data?.list.map((item, i) => (
          <div className="m-item m-bdy" key={i}>
            <div className="m-lt">
              {item?.title && <div className="title">{item?.title}</div>}
              {item?.label && <div className="label">{item?.label}</div>}
            </div>
            <div className="m-rt">
              {item?.list[0] && (
                <div className="m-cnt">
                  {item.list.map((o, j) => (
                    <span key={j}>
                      {data?.id && <label>{j + 1}. </label>} {o} <br />
                    </span>
                  ))}
                </div>
              )}
              {item?.cnt && <div className="m-cnt m-p">{item?.cnt}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List07;
