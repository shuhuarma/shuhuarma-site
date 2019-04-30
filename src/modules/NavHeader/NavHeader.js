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
          <Button
            className={styles.navButton}

          >
            <h5>what on latata is dis?</h5>
          </Button>
          <a  href="https://twitter.com/G_I_DLE" target="_blank">
            <Button className={styles.navButton}>
              <h5>stan (g)i-dle</h5>
            </Button>
          </a>
          <a  href="https://twitter.com/shuhuarma" target="_blank">
            <Button className={styles.navButton}>
              <h5>yeorobun</h5>
            </Button>
          </a>
        </div>
      </Navbar>
    );
  }
}

export default NavHeader;
