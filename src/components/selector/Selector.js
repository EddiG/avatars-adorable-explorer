// @flow
import React from 'react';
import './Selector.css';

type Props = {
  label: string,
  values: Array<string>,
  selectedValue: string,
  onSelectChanged: Function,
};

const Selector = ({ label, values, selectedValue, onSelectChanged }: Props) => (
  <div className="Selector">
    <span>
      {label}
    </span>
    {' '}
    <select
      value={selectedValue}
      onChange={e => onSelectChanged(e.target.value)}
    >
      {values && values.map(v => <option key={v} value={v}>{v}</option>)}
    </select>
  </div>
);

export default Selector;
