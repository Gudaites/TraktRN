import React from 'react';
import FastImage from 'react-native-fast-image';
import Feather from 'react-native-vector-icons/Feather';

import {
  Modal,
  SafeAreaView,
  View,
  CardContent,
  Image,
  Title,
  Resume,
  ResumeText,
  ButtonView,
} from './styles';

Feather.loadFont();

export const Card = ({ open, resume, title, poster, setModal }) => (
  <Modal visible={open} animationType="slide" transparent>
    <SafeAreaView>
      <CardContent>
        <ButtonView testID="button-close" onPress={() => setModal(false)}>
          <Feather testID="testIcon" name="x" size={22} color="#f0a500" />
        </ButtonView>
        <View>
          <Title testID="title-modal">{title}</Title>
          <Image
            resizeMode={FastImage.resizeMode.stretch}
            source={{
              uri:
                poster !== undefined
                  ? poster
                  : 'https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg',
              priority: FastImage.priority.high,
            }}
          />
          <Resume testID="resume-modal">Resume</Resume>
          <ResumeText testID="resume-text-modal">{resume}</ResumeText>
        </View>
      </CardContent>
    </SafeAreaView>
  </Modal>
);

export default Card;
