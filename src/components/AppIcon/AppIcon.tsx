import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IProps {
  name: string;
  link: string;
  icon: IconProp;
}

const AppIcon = ({ name, link, icon }: IProps) => (
  <a href={link} title={name} target="_blank" style={{ textAlign: 'center' }}>
    <FontAwesomeIcon icon={icon} size="6x" />
  </a>
)

export default AppIcon;
