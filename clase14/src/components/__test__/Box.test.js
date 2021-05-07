import React from 'react';
import {render} from '@testing-library/react-native';
import Box from '../Box';

describe('Box component ::', () => {
  it('is rendering correctly', () => {
    const {getByTestId} = render(<Box />);

    expect(getByTestId('box-container')).toBeTruthy();
  });

  it('is rendering correctly with props', () => {
    const props = {
      totalName: 'totalName',
      totalValue: 'totalValue',
      color: 'red',
    };

    const {getByTestId} = render(<Box {...props} />);

    const container = getByTestId('box-container');

    const [totalValue, totalName] = container.children;

    expect(container).toBeTruthy();
    expect(container.children.length).toBe(2);
    expect(totalValue.props.children).toBe(props.totalValue);
    expect(totalName.props.children).toBe(props.totalName);
  });

  it('is rendering correctly without props', () => {
    const props = {
      totalName: undefined,
      totalValue: undefined,
      color: 'red',
    };

    const {getByTestId} = render(<Box {...props} />);

    const container = getByTestId('box-container');

    const [totalValue, totalName] = container.children;

    expect(container).toBeTruthy();
    expect(container.children.length).toBe(2);
    expect(totalValue.props.children).toBeUndefined();
    expect(totalName.props.children).toBeUndefined();
  });
});
