import React, { Component } from 'react';
import axios from 'axios';

import * as styles from './MusicVideoItemContainer.module.scss';
import MusicVideoItem from '../../components/MusicVideoItem/MusicVideoItem';
// https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAmCEDPnXeQf4c0MHkuTXAMwXolZDCT1J0&id=EGuuBE7xjBk&part=statistics

class MusicVideoItemContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			response: {},
		}
	}

	componentDidMount() {
		this.loadData();
	}

	loadData = () => {
		const { videoId } = this.props;
		console.log(videoId);
		axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAmCEDPnXeQf4c0MHkuTXAMwXolZDCT1J0&id=${videoId}&part=statistics,snippet`)
			.then(response => {
					if (response.status === 200) {
						this.setState({
							isLoaded: true,
							response: response.data,
						});
					}
				}
			);
	}

	render() {
		const { isLoaded, response } = this.state;
		if (isLoaded) {
			console.log(response);
			const videoObj = response.items[0];
			return (
				<MusicVideoItem
					id={videoObj.id}
					title={videoObj.snippet.title}
					imageSource={videoObj.snippet.thumbnails.standard.url}
					viewCount={videoObj.statistics.viewCount}
					likeCount={videoObj.statistics.likeCount}
					dislikeCount={videoObj.statistics.dislikeCount}
					commentCount={videoObj.statistics.commentCount}
					isLoaded={isLoaded}
				/>
			);
		}
		return <div className={styles.mainContainer}>LOADING</div>
	}
}

export default MusicVideoItemContainer;
