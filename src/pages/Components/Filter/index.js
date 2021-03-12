import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import ActionMenu from './ActionMenu';

import { Container } from './styles';

Feather.loadFont();

const Filter = ({ options, setFilter, filter }) => {
  const [isActionMenuOpened, setIsActionMenuOpened] = useState(false);
  return (
    <>
      {isActionMenuOpened && (
        <ActionMenu options={options} setFilter={setFilter} filter={filter} />
      )}
      <Container
        activeOpacity={0.8}
        onPress={() => {
          setIsActionMenuOpened(!isActionMenuOpened);
        }}
      >
        <Feather name="filter" size={22} color="#f0a500" />
      </Container>
    </>
  );
};

export default Filter;
