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
          <a className={styles.navButton}>
            <h5>what on latata is dis?</h5>
          </a>
          <a  className={styles.navButton} href="https://twitter.com/G_I_DLE" target="_blank">
            <h5>stan (g)i-dle</h5>
          </a>
          <a className={styles.navButton} href="https://twitter.com/shuhuarma" target="_blank">
            <h5>yeorobun</h5>
          </a>
        </div>
      </Navbar>
    );
  }
}

export default NavHeader;
