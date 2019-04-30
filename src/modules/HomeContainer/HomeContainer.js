import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import * as styles from './HomeContainer.module.scss';
import MusicVideoListContainer from '../YoutubeData/containers/MusicVideoList/MusicVideoDataListContainer';

class HomeContainer extends Component {
  render() {
    return (
      <Container className={styles.mainContainer}>
				<h1> HIIII </h1>
        <MusicVideoListContainer />
			</Container>
    );
  }
}

export default HomeContainer;

//  a64ac9 fccd04 ffb48f f5e6cc 17e9e0
