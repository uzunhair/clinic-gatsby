import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  + li {
    border-top: 1px solid rgb(200 183 255 / 20%);
  }

  &.price-list--help {
    margin-top: 16px;
    padding: 18px 18px;
    border: 2px solid #e0e9ff;
  }
`;

const Count = styled.div`
  white-space: nowrap;
  display: flex;
  min-width: 150px;
  justify-content: flex-end;
  text-align: right;
  font-size: 14px;
`;

const CountDefis = styled.span`
  flex: 1 0 auto;
  text-align: center;
`;

export const PriceList = ({ data, narcosis }) => {
  return (
    <ul>
      {data.map(({ node }) => (
        <Item key={node.Name}>
          <div>{node.Name}</div>
          <Count>
            <span>{`${node.Price_Min}  ₽`}</span>
            {node.Price_Max && (
              <>
                <CountDefis>-</CountDefis>
                <span>{`${node.Price_Max}  ₽`}</span>
              </>
            )}
          </Count>
        </Item>
      ))}
      {narcosis && (
        <Item>
          <div>Наркоз *оплачивается отдельно</div>
          <Count>
            <span>5000 ₽</span>
            <CountDefis>-</CountDefis>
            <span>10 000 ₽</span>
          </Count>
        </Item>
      )}
      <Item className="price-list--help">
        Внимание! Цены на сайте могут отличаться от реальных. Точную сумму уточняйте у администратора +7 (8722) 77‒70‒07
      </Item>
    </ul>
  );
};

export default PriceList;
