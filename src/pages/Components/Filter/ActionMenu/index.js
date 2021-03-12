// React
import React from 'react';

// Styled Components
import { Content, View, ActionView, ActionButton, Button } from './styles';

const ActionMenu = ({ options, setFilter }) => (
  <Content>
    <ActionView>
      <View>
        {options.map(item => (
          <ActionButton
            key={item.name}
            activeOpacity={0.8}
            onPress={() => setFilter(item.slug)}
          >
            <Button>{item.name}</Button>
          </ActionButton>
        ))}
      </View>
    </ActionView>
  </Content>
);

export default ActionMenu;
