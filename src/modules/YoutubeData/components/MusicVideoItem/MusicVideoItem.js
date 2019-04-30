import React, { Component } from 'react';

import * as styles from './MusicVideoItem.module.scss';

// https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAmCEDPnXeQf4c0MHkuTXAMwXolZDCT1J0&id=EGuuBE7xjBk&part=statistics

class MusicVideoItem extends Component {
	render() {
		const {
			id,
			title,
			imageSource,
			viewCount,
			likeCount,
			dislikeCount,
			commentCount,
			isLoaded,
		} = this.props;
		if (isLoaded) {
			return (
				<div className={styles.mainContainer}>
					<div className={styles.imageContainer}>
						<img
							alt={id}
							src={imageSource}
						/>
					</div>
					<div className={styles.statContainer}>
						<h3>{title}</h3>
						<div className={styles.stats}>
							<div className={styles.counts}>
								<h1>{parseInt(viewCount, 10).toLocaleString()}</h1>
								<p>views</p>
							</div>
							<div className={styles.counts}>
								<h1>{parseInt(likeCount, 10).toLocaleString()}</h1>
								<p>likes</p>
							</div>
							<div className={styles.counts}>
								<h1>{parseInt(dislikeCount, 10).toLocaleString()}</h1>
								<p>dislikes</p>
							</div>
							<div className={styles.counts}>
								<h1>{parseInt(commentCount, 10).toLocaleString()}</h1>
								<p>comments</p>
							</div>
						</div>
					</div>
				</div>
			);
		}
		return <div className={styles.mainContainer}>LOADING</div>
	}
}

export default MusicVideoItem;
