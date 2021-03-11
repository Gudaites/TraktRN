import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const CardContent = styled.View`
  flex: 1;
  max-height: 210px;
  max-width: 161px;
  border-radius: 15px;
  background-color: #fff;
  margin: 10px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border: 2px solid #f0a500;
`;

export const Image = styled(FastImage)`
  height: 208px;
  width: 159px;
  border-radius: 15px;
`;

export const Border = styled(FastImage)`
  border-radius: 15px;
`;

export const InfoView = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.Text`
  color: white;
  font-size: 18px;
`;

export const Year = styled.Text`
  color: white;
  font-size: 12px;
`;
