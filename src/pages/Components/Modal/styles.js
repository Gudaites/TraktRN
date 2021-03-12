import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Modal = styled.Modal`
  flex: 1;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(3, 3, 3, 0.5);
`;
export const View = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const CardContent = styled.ScrollView`
  flex: 1;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  background-color: #333;
  border-width: 2px;
  border: 2px solid #f0a500;
`;

export const Image = styled(FastImage)`
  flex: 1;
  height: 400px;
  width: 70%;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Resume = styled.Text`
  color: white;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ResumeText = styled.Text`
  color: white;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ButtonView = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
`;
