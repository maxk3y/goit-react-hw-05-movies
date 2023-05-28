import styled from 'styled-components';

export const CastWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  padding-left: 40px;
`;

export const CastItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  color: inherit;
  width: 400px;
  padding: 15px;
  padding-left: 15px;
  border-radius: 3px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CastImg = styled.img`
  display: block;
  max-width: 50px;
  height: 100%;
`;

export const CastInfo = styled.p`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 18px;
  margin: 0;
`;
