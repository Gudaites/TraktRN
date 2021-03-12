import React from 'react';
import FastImage from 'react-native-fast-image';
import { Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {
  Modal,
  SafeAreaView,
  View,
  CardContent,
  Image,
  Border,
  Title,
  Resume,
  ResumeText,
  ButtonView,
} from './styles';

Feather.loadFont();

export const Card = ({ open, resume, title, poster, setModal }) => (
  <Modal
    visible={open}
    animationType="slide"
    r
    transparent
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
    }}
  >
    <SafeAreaView>
      <CardContent>
        <ButtonView onPress={() => setModal(false)}>
          <Feather name="x" size={22} color="#f0a500" />
        </ButtonView>
        <View>
          <Title>{title}</Title>
          <Image
            resizeMode={FastImage.resizeMode.stretch}
            imageStyle={Border}
            source={{
              uri:
                poster !== undefined
                  ? poster
                  : 'https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg',
              priority: FastImage.priority.high,
            }}
          />
          <Resume>Resume</Resume>
          <ResumeText>{resume}</ResumeText>
        </View>
      </CardContent>
    </SafeAreaView>
  </Modal>
);

export default Card;
