import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';

import {
  Container,
  CardContent,
  Image,
  Border,
  InfoView,
  Title,
  Year,
  Info,
  More,
  Line,
} from './styles';
import Modal from '../Modal';

export const Card = ({ index, item }) => {
  const [modal, setModal] = useState(false);
  const poster = item.movieInfo ? item.movieInfo.poster : null;
  return (
    <>
      <Modal
        open={modal}
        title={item.movieInfo ? item.movieInfo.title : null}
        resume={item.movieInfo ? item.movieInfo.resume : null}
        poster={`https://image.tmdb.org/t/p/w500${poster}`}
        setModal={setModal}
      />
      <Container key={index}>
        <CardContent>
          <Image
            resizeMode={FastImage.resizeMode.stretch}
            imageStyle={Border}
            source={{
              uri:
                poster !== null
                  ? `https://image.tmdb.org/t/p/w500${poster}`
                  : 'https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg',
              priority: FastImage.priority.high,
            }}
          />
        </CardContent>
        <InfoView>
          <Title>Top {index + 1}º</Title>
          <Title>{item.title}</Title>
          <Year>{item.year}</Year>
          <Info onPress={() => setModal(true)}>
            <More>Information</More>
          </Info>
        </InfoView>
      </Container>
      <Line />
    </>
  );
};

export default Card;
