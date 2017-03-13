// @flow
import React from 'react'

type Props = {
  label: string,
  values: Array<string>,
  onSelectChanged: Function
}

const Selector = ({ label, values, onSelectChanged }: Props) => (
  <div>
    {label}
    <select onChange={e => onSelectChanged(e.target.value)}>
      {
        values && values.map(v => <option key={v} value={v}>{v}</option>)
      }
    </select>
  </div>
)

export default Selector
