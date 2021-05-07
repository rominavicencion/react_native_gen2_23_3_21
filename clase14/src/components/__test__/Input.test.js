import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Input from '../Input';

describe('Input component ::', () => {
  it('is rendering correctly without props', () => {
    const {getByTestId} = render(<Input />);

    expect(getByTestId('text-input')).toBeTruthy();
  });

  it('is rendering correctly with props', () => {
    const props = {
      value: 'TestValue',
      placeholder: 'placeholder',
      onChangeText: jest.fn(),
    };

    const {getByTestId} = render(<Input {...props} />);

    expect(getByTestId('text-input')).toBeTruthy();
  });

  it('calls onChangeText on text input', () => {
    const props = {
      value: 'TestValue',
      placeholder: 'placeholder',
      onChangeText: jest.fn(),
    };

    const {getByTestId} = render(<Input {...props} />);
    const textInput = getByTestId('text-input');
    const newText = 'new input text';

    fireEvent.changeText(textInput, newText);

    expect(props.onChangeText).toHaveBeenCalled();
    expect(props.onChangeText.mock.calls[0][0]).toBe(newText);
  });
});
