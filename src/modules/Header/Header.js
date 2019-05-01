import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import * as styles from './Header.module.scss';

class Header extends Component {
  render() {
    const { onModalOpen } = this.props;

    return (
      <div className={styles.mainContainer}>
        <Jumbotron fluid className={styles.jumbotronContainer}>
          <div className={styles.mainText}>
            <p>Happy First Year Anniversary!</p>
          </div>
          <div className={styles.logoContainer}>
            <img
              src={require('./logo_crop.jpg')}
              alt="idle-logo"
              className={styles.logo}
              onClick={onModalOpen}
            />
          </div>
          <div className={styles.helperText}>
            <p>
              <b>Since 05.02.2018</b>
            </p>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
