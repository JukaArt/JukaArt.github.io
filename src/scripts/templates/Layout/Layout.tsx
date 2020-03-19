import React from 'react';

const Layout: React.SFC = props => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;