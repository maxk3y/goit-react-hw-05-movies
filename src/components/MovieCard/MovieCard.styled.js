import styled from 'styled-components';

export const CardWrapper = styled.section`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  padding-left: 40px;
`;

export const Poster = styled.img`
  display: block;
  max-width: 200px;
  height: 100%;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 200px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Subtitle = styled.h2`
  color: inherit;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  padding-top: 5px;
  margin: 0;
`;

export const AddInfo = styled.h2`
  color: inherit;
  margin: 0;
  padding-top: 30px;
  padding-left: 40px;
`;
