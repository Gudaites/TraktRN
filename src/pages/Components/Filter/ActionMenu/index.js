// React
import React from 'react';

// Styled Components
import { Content, View, ActionView, ActionButton, Button } from './styles';

const ActionMenu = ({ options, setFilter, filter }) => (
  <Content>
    <ActionView>
      <View>
        {options.map(
          item =>
            item.slug !== 'none' && (
              <ActionButton
                isActive={filter === item.slug}
                key={item.name}
                activeOpacity={0.8}
                onPress={() => {
                  if (filter === item.slug) {
                    setFilter(null);
                  } else {
                    setFilter(item.slug);
                  }
                }}
              >
                <Button>{item.name}</Button>
              </ActionButton>
            ),
        )}
      </View>
    </ActionView>
  </Content>
);

export default ActionMenu;
