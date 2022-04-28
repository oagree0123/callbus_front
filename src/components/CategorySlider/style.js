import styled from 'styled-components';

export const SliderWrap = styled.div`
  margin-bottom: 20px;
  padding-left: 22px;
  width: 360px;
  overflow: hidden;
`;

export const CategoryList = styled.ul`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  cursor: pointer;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryItem = styled.li`
  margin-right: 4px;
  padding: 12px 16px;
  width: 100%;
  height: 38px;

  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: center;
  color: ${(props) => (props.isClicked ? '#ffffff' : '#7a7a7a')};
  background-color: ${(props) => (props.isClicked ? '#2C7FFF' : '#fff')};
  border: ${(props) =>
    props.isClicked ? '1px solid #2C7FFF' : '1px solid #e8e8e8'};
  border-radius: 20px;
  cursor: pointer;

  white-space: nowrap;
  list-style: none;
`;
