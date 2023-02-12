import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Date = styled.div`
  margin: 0 8px 8px 0;
  padding: 4px 8px;
  background: #e8ebf1;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  color: #5a5c61;
`;

export const TimeLines = ({ date, children }) => {
  return (
    <Item>
      <Date>{date}</Date>
      {children}
    </Item>
  );
};

export default TimeLines;
