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
  background-color: ${(props) => (props.active_write ? '#2c7fff' : '#e8e8e8')};
  border: none;
  border-radius: 8px;

  &:disabled {
    cursor: default;
  }
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
  margin-bottom: 39px;
  padding: 10px 20px;
  width: 360px;
  height: 179px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  border: none;
  resize: none;

  &::placeholder {
    color: #b4b4b4;
  }
`;

export const ImageUploadWrap = styled.div`
  padding-left: 20px;
  width: 360px;
  overflow: hidden;
`;

export const ImageSlider = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  cursor: grab;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  margin-right: 16px;
  width: 89px;
  height: 83px;
  background-color: #e8e8e8;
  border-radius: 4px;
`;

export const UploadImg = styled.img`
  width: 89px;
  height: 83px;
  object-fit: cover;
`;

export const UploadCloseBtn = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 24px;
  height: 24px;
  background-image: ${(props) => `url(${props.bg})`};
  background-position: center center;
  border: none;
`;

export const UploadButton = styled.label`
  width: 86px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dbe9ff;
  border-radius: 6px;
  cursor: pointer;
`;

export const UploadInput = styled.input`
  display: none;
`;

export const UploadBtnIcon = styled.img`
  margin-right: 4px;
`;

export const UploadBtnText = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  color: #2c7fff;
`;
