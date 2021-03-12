// Styled Components
import styled from 'styled-components/native';

export const Content = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: 100%;
  position: absolute;
  z-index: 1;
  background-color: rgba(3, 3, 3, 0.5);
`;

export const View = styled.View`
  align-items: center;
  justify-content: center;
`;
export const ActionView = styled.ScrollView`
  width: 100%;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 250px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  border: 1px solid #f0a500;
  background-color: ${props => (props.isActive ? '#999' : '#333')};
  padding: 11px;
  margin-bottom: 15px;
`;

export const Button = styled.Text`
  color: white;
  font-size: 14px;
`;
