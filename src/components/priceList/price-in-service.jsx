import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
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

const Header = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgb(200 183 255 / 20%);
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
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

const PriceInService = ({ data, narcosis, showHeader }) => {
  let zet = '';

  return (
    <ul>
      {data.map(({ node }) => {
        const currentCat = node.Category;
        const showCat = zet !== currentCat;
        if (showCat) {
          zet = currentCat;
        }

        return (
          <Item key={node.id}>
            {showCat && showHeader && (
              <Header>
                <h3>{node.Category}</h3>
              </Header>
            )}
            <Body>
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
            </Body>
          </Item>
        );
      })}
      {narcosis && (
        <Item>
          <Body>
            <div>Наркоз *оплачивается отдельно</div>
            <Count>
              <span>5000 ₽</span>
              <CountDefis>-</CountDefis>
              <span>15 000 ₽</span>
            </Count>
          </Body>
        </Item>
      )}
      <Item className="price-list--help">
        Внимание! Цены на сайте могут отличаться от реальных. Точную сумму уточняйте у администратора +7 (8722) 77‒70‒07
      </Item>
    </ul>
  );
};

export default PriceInService;
