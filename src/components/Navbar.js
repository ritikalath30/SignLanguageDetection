

import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Menu />
        <Typography variant="h6">Navbar</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
