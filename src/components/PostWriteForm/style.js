import styled from 'styled-components';

export const PostWriteFormWrap = styled.div`
  width: 100%;
`;

export const WriteFrom = styled.form``;

export const PostWriteHeader = styled.header`
  position: relative;
  padding-top: 18px;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #e5e5e5;
`;

export const HeaderButton = styled.button`
  position: absolute;
  top: 21px;
  left: 21px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  border: none;
`;

export const ButtonImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const PostWriteTitle = styled.h1`
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
`;

export const WriteButton = styled.button`
  position: absolute;
  left: 286px;
  top: 10px;
  width: 64px;
  height: 36px;
  padding: 12px 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: #fff;
  background-color: #2c7fff;
  border: none;
  border-radius: 8px;
`;

export const SelectWrap = styled.div`
  padding-left: 16px;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
`;

export const CategorySelect = styled.select`
  padding: 4px;
  width: 80px;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  border: none;
  background: ${(props) =>
    props.arrow_img
      ? `url(${props.arrow_img})
    calc(100% - 5px) center no-repeat`
      : ''};

  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const CategoryOption = styled.option``;

export const WriteWrap = styled.div``;

export const TitleInput = styled.input`
  padding-left: 20px;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  border: none;
  border-bottom: 1px solid #e8e8e8;

  &::placeholder {
    color: #b4b4b4;
  }
`;

export const ContTextarea = styled.textarea`
  padding: 10px 20px;
  width: 360px;
  height: 179px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  border: none;

  &::placeholder {
    color: #b4b4b4;
  }
`;
