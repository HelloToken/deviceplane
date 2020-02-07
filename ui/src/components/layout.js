import React from 'react';

import { Column, Row } from './core';
import Header from './header';
import Sidebar from './sidebar';

const Layout = ({ children, header, ...rest }) => (
  <Column flex={1}>
    <Header>{header}</Header>
    <Row
      flex={1}
      flexDirection={[
        'column-reverse',
        'column-reverse',
        'column-reverse',
        'row',
      ]}
    >
      <Sidebar />
      <Column
        minHeight={[
          'calc(100vh - 120px)',
          'calc(100vh - 120px)',
          'calc(100vh - 134px)',
          'calc(100vh - 64px)',
        ]}
        overflow="auto"
        flex={1}
        bg={['black', 'black', 'pageBackground']}
        borderRadius={1}
        padding={5}
        {...rest}
      >
        {children}
      </Column>
    </Row>
  </Column>
);

export default Layout;
