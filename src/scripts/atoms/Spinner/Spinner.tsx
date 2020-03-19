import React from 'react';

import styles from './Spinner.css';

import colors from 'Styles/vars/colors.css';

interface Props {
  className?: string,
  style?: object,
  color?: string,
}

const Spinner: React.SFC<Props> = props => {
  const { className, style, color } = props;

  return (
    <div style={style} className={`${className} ${styles.root}`}>
      <svg
        className={styles.rolling}
        viewBox="22 22 44 44"
      >
        <circle cx="44" cy="44" r="20.2" fill="none" stroke={color} strokeWidth="3.6" />
      </svg>
    </div>
  );
}


Spinner.defaultProps = {
  color: colors.colorBase,
} as Partial<Props>;

export default Spinner;