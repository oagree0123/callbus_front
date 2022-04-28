import styled from 'styled-components';

export const PostCardWrap = styled.div`
  padding: 26px;
  border-bottom: 6px solid #e8e8e8;
`;

export const PostCardHeader = styled.header`
  margin-bottom: 19px;
  display: flex;
  align-items: flex-end;
`;

export const HeaderRight = styled.div`
  margin-left: 8px;
`;

export const UserName = styled.p`
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 12px;
  font-weight: 700;
  color: #222222;
`;

export const PostCardInfo = styled.p`
  font-size: 12px;
  line-height: 12px;
  font-weight: 500;
  color: #b4b4b4;
`;

export const PostCardMain = styled.main``;

export const PostCardTitle = styled.h2`
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  color: #222222;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

export const PostCardCont = styled.p`
  margin-bottom: 17px;
  font-size: 14px;
  line-height: 22px;
  color: #7a7a7a;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

export const PostCardImg = styled.div`
  margin-bottom: 15px;
  width: 100%;
  height: 160px;
  border-radius: 4px;
  overflow: hidden;
  background-image: ${(props) =>
    props.img_url ? `url(${props.img_url})` : ''};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const PostCardFooter = styled.footer`
  display: flex;
  align-items: center;
`;

export const CountWrap = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

export const FooterIcon = styled.img`
  margin-right: 4px;
`;

export const FooterCount = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  color: #7a7a7a;
`;
