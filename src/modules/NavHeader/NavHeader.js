import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';

import * as styles from './NavHeader.module.scss';

class NavHeader extends Component {
  render() {
    return (
      <Navbar sticky="top" className={styles.navBar}>
        <div className={styles.homeTitle}>
          <h2>shuhuarma...</h2>
        </div>
        <div className={styles.navBarLinksContainer}>
          <Button className={styles.navButton}>
            <h5>what on latata is dis?</h5>
          </Button>
          <Button className={styles.navButton}>
            <h5>stan (g)i-dle</h5>
          </Button>
        </div>
      </Navbar>
    );
  }
}

export default NavHeader;
