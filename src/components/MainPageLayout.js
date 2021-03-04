import React from 'react';
import NavigationBar from './NavigationBar';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
};

export default MainPageLayout;
