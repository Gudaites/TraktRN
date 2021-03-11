import React from 'react';
import FastImage from 'react-native-fast-image';

import {
  Container,
  CardContent,
  Image,
  Border,
  InfoView,
  Title,
  Year,
} from './styles';

const Card = ({index, item}) => {
  const poster = item.movieposter?.url;
  return (
    <Container key={index}>
      <CardContent>
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
      </CardContent>
      <InfoView>
        <Title>{item.title}</Title>
        <Year>{item.year}</Year>
      </InfoView>
    </Container>
  );
};

export default Card;
