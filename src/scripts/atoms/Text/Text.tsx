import React from 'react';

import classnames from 'classnames';
import modsClasses from 'Util/modsClasses.js';

import styles from './Text.css';

import { TextType } from 'Types/common';

const MODS = [
  'align',
  'color',
  'display',
  'size',
  'transform',
  'type',
  'weight',
  'overflow',
];

const Text: React.SFC<TextType> = props => {
  const {
    children,
    text,
    style,
    tag = 'div',
    overflow,
  } = props;

  const getInnerContent = () => {
    if (children) {
      return children;
    } else if (text !== undefined && text !== null) {
      return text;
    }

    return null;
  }

  const classes = modsClasses(MODS, props, styles);
  const classList = classnames(classes, styles.root, styles[tag], { [styles.overflow]: overflow });
  const content = getInnerContent();
  const Tag = tag;

  return (
    <Tag
      className={classList}
      style={style}
    >
      {content}
    </Tag>
  );
}

export default Text;
