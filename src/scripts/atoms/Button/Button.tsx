import React from 'react';

import styles from './Button.css';

import classnames from 'classnames';
import modsClasses from 'Util/modsClasses.js';

import Spinner from 'Atoms/Spinner/Spinner';

import colors from 'Styles/vars/colors.css';

import { buttonColor, ButtonType } from 'Types/common';

const MODS = [
  'size',
  'color',
  'theme',
  'mainColor',
  'width',
];

const getPreloaderColor = (color?: buttonColor) => {
  switch (color) {
    case 'secondary':
      return colors.colorBase;
    case 'normal':
      return colors.colorWetAsphalt;
    default:
      return colors.colorWhite;
  }
};

const Button: React.SFC<ButtonType> = props => {
  const {
    type,
    text,
    icon,
    leftIcon,
    rightIcon,
    loading,
    disabled,
    style,
    onClick,
  } = props;

  const getTextContent = () => {
    let textValue = '';

    if (text) {
      textValue = text;
    }

    return textValue ? (
      <span className={styles.text}>
        {textValue}
      </span>
    ) : null;
  };

  const textContent = getTextContent();

  const getContent = () => {
    return icon ? (
      <div className={styles.icon}>
        {icon}
      </div>
    ) : (
        <div className={styles.content} data-test="content">
          {leftIcon}
          {textContent}
          {rightIcon}
        </div>
      );
  };

  const getPreloader = () => {
    const { color } = props;
    const preloaderColor = getPreloaderColor(color);

    return (
      <Spinner
        className={styles.preloader}
        color={preloaderColor}
      />
    );
  };

  const classes = modsClasses(MODS, props, styles);
  const classNameList = classnames(classes, styles.root, {
    [styles.loading]: loading,
    [styles.disabled]: disabled,
    [styles.withContent]: textContent,
  });

  const handleClick = disabled || loading ? undefined : onClick;

  return (
    <button
      type={type}
      style={style}
      className={classNameList}
      onClick={handleClick}
      data-test="button"
    >
      {loading && getPreloader()}
      {getContent()}
    </button>
  );
};

Button.defaultProps = {
  button: 'button',
  msgValues: undefined,
  theme: 'dark',
  size: 'md',
  color: 'normal',
  mainColor: 'base',
} as Partial<ButtonType>;

export default Button;