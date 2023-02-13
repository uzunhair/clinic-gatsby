import React from 'react';
import styled from 'styled-components';

import usePriceData from 'hooks/use-price-data';

const Item = styled.div`
  display: block;
`;

const PriceInService = () => {
  const data = usePriceData();

  return (
    <>
      <div>Hello</div>
      {data.map(({ node }) => (
        <Item key={node.id}>{node.Name}</Item>
      ))}
    </>
  );
};

export default PriceInService;
