import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-dom/extend-expect';
import { Card } from '../pages/Components/Card';

const item = {
  title: 'teste 1',
  year: '2021',
  movieInfo: {
    poster:
      'https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg',
    title: 'teste 1',
    resume: '123',
  },
};

describe('Test Card and Modal', () => {
  test('Tests render Texts components', () => {
    const { getByTestId } = render(<Card item={item} index={0} />);

    expect(getByTestId('title').props.children).toBe('teste 1');
    expect(getByTestId('year').props.children).toBe('2021');
    expect(getByTestId('top')).toBeTruthy();
    expect(getByTestId('modal').props.children).toBeFalsy();
  });

  test('Teste Card Modal', () => {
    const { getByTestId } = render(<Card item={item} index={0} />);
    expect(getByTestId('modal').props.children).toBeFalsy();

    fireEvent.press(getByTestId('button'));
    expect(getByTestId('modal').props.children).toBeTruthy();
    expect(getByTestId('title-modal').props.children).toBe('teste 1');
    expect(getByTestId('resume-modal').props.children).toBe('Resume');
    expect(getByTestId('resume-text-modal').props.children).toBe('123');

    fireEvent.press(getByTestId('button-close'));
    expect(getByTestId('modal').props.children).toBeFalsy();
  });
});
