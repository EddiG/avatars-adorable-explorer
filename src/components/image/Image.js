// @flow

import React from 'react';
import './Image.css';

type Props = {
  src: string,
};

const Image = ({ src }: Props) => <img className="Avatar" src={src} alt="" />;

export default Image;
