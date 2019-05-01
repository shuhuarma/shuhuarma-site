import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import * as styles from './HomeContainer.module.scss';
import Header from '../Header/Header';
import LatataEra from '../LatataEra/LatataEra';
import HannEra from '../HannEra/HannEra';
import SenoritaEra from '../SenoritaEra/SenoritaEra';

class HomeContainer extends Component {
  render() {
    return (
      <Container className={styles.mainContainer}>
        <Header />
        <LatataEra />
        <HannEra />
        <SenoritaEra />
			</Container>
    );
  }
}

export default HomeContainer;
// <MusicVideoListContainer />

//  a64ac9 fccd04 ffb48f f5e6cc 17e9e0
