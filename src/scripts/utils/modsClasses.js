import classnames from 'classnames';

const modsClasses = (mods, props, styles, onlyMods = false) => {
  const modsClasses = mods.map(key => {
    const value = props[key];

    return styles[`${key}-${value}`];
  });
  const defaultClass = onlyMods ? '' : props.className;
  const classes = classnames(defaultClass, ...modsClasses);

  return classes;
};

export default modsClasses;
