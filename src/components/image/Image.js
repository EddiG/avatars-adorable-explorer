// @flow

import React from 'react';
import './Image.css';

type Props = {
  src: string,
};

const Image = ({ src }: Props) => (
  <div className="Avatar">
    <img src={src} alt="" />
    <div>
      <a href={src}>Permanent link</a>
      {' '}
      on
      {' '}
      <a href="http://avatars.adorable.io/">Adorable Avatars</a>
    </div>
  </div>
);

export default Image;
