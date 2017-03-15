// @flow
import React from 'react';
import './ColorPicker.css';

type Props = {
  label: string,
  color: string,
  onColorSelected: Function,
};

const ColorPicker = ({ label, color, onColorSelected }: Props) => (
  <div className="ColorPicker">
    {label}
    {' '}
    <input
      type="color"
      value={`#${color}`}
      onChange={e => onColorSelected(e.target.value.split('#')[1])}
    />
  </div>
);

export default ColorPicker;
