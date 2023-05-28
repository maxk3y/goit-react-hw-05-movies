import styled from 'styled-components';

export const ReviewWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  padding-left: 40px;
  list-style: none;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  padding-left: 15px;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ReviewImg = styled.img`
  display: block;
  max-width: 50px;
  height: 100%;
`;

export const ReviewInfo = styled.p`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 18px;
  margin: 0;
`;

export const ReviewContent = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const NotReviews = styled.div`
  font-size: 24px;
  margin: 0;
  margin-top: 20px;
  padding-left: 40px;
`;
