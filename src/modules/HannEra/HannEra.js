import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import axios from 'axios';

import * as styles from './HannEra.module.scss';
import MusicVideoItem from '../YoutubeData/components/MusicVideoItem/MusicVideoItem';

class HannEra extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded1: false,
			isLoaded2: false,
			response1: {},
			response2: {}
		}
	}

	componentDidMount() {
		this.loadData();
	}

	loadData = () => {
		const hann1thek = '3K38Fc1SV5c';
		const hannOfficial = 'OKNXn2qCEws';
		axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAmCEDPnXeQf4c0MHkuTXAMwXolZDCT1J0&id=${hann1thek}&part=statistics,snippet`)
			.then(response => {
					if (response.status === 200) {
						this.setState({
							isLoaded1: true,
							response1: response.data,
						});
					}
				}
			);

		axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAmCEDPnXeQf4c0MHkuTXAMwXolZDCT1J0&id=${hannOfficial}&part=statistics,snippet`)
			.then(response => {
					if (response.status === 200) {
						this.setState({
							isLoaded2: true,
							response2: response.data,
						});
					}
				}
			);
	}

	renderMVData = () => {
		const { isLoaded1, isLoaded2, response1, response2} = this.state;
		if (isLoaded1 && isLoaded2) {
			const videoObj1 = response1.items[0];
			const videoObj2 = response2.items[0];
			const totalViewCount = parseInt(videoObj1.statistics.viewCount, 10) + parseInt(videoObj2.statistics.viewCount, 10)
			const totalLikeCount = parseInt(videoObj1.statistics.likeCount, 10) + parseInt(videoObj2.statistics.likeCount, 10)
			const totalDisikeCount = parseInt(videoObj1.statistics.dislikeCount, 10) + parseInt(videoObj2.statistics.dislikeCount, 10)
			const totalCommentCount = parseInt(videoObj1.statistics.commentCount, 10) + parseInt(videoObj2.statistics.commentCount, 10)
			return (
				<div>
					<MusicVideoItem
						id={videoObj1.id}
						title={videoObj1.snippet.title}
						imageSource={videoObj1.snippet.thumbnails.standard.url}
						viewCount={videoObj1.statistics.viewCount}
						likeCount={videoObj1.statistics.likeCount}
						dislikeCount={videoObj1.statistics.dislikeCount}
						commentCount={videoObj1.statistics.commentCount}
						isLoaded={isLoaded1}
					/>
					<MusicVideoItem
						id={videoObj2.id}
						title={videoObj2.snippet.title}
						imageSource={videoObj2.snippet.thumbnails.standard.url}
						viewCount={videoObj2.statistics.viewCount}
						likeCount={videoObj2.statistics.likeCount}
						dislikeCount={videoObj2.statistics.dislikeCount}
						commentCount={videoObj2.statistics.commentCount}
						isLoaded={isLoaded2}
					/>
					<div className={styles.totalContainer}>
						<div className={styles.statContainer}>
							<div className={styles.stats}>
								<div className={styles.counts}>
									<h1>{parseInt(totalViewCount, 10).toLocaleString()}</h1>
									<p>views</p>
								</div>
								<div className={styles.counts}>
									<h1>{parseInt(totalLikeCount, 10).toLocaleString()}</h1>
									<p>likes</p>
								</div>
								<div className={styles.counts}>
									<h1>{parseInt(totalDisikeCount, 10).toLocaleString()}</h1>
									<p>dislikes</p>
								</div>
								<div className={styles.counts}>
									<h1>{parseInt(totalCommentCount, 10).toLocaleString()}</h1>
									<p>comments</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
		return null;
	}


  render() {
    return (
      <div className={styles.mainContainer}>
        <Jumbotron fluid className={styles.jumbotronContainer}>
          <div className={styles.mainText}>
            <p>HANN</p>
          </div>
					{this.renderMVData()}
        </Jumbotron>
      </div>
    );
  }
}

export default HannEra;
