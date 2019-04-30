import React, { Component } from 'react';
import { MUSIC_VIDEOS } from '../../constants';
import MusicVideoItemContainer from '../MusicVideoItem/MusicVideoItemContainer'

class MusicVideoListContainer extends Component {
	render() {
		return (
			<div>
				{MUSIC_VIDEOS.map(mv => (
					<MusicVideoItemContainer
						title={mv.title}
						key={mv.video_id}
						videoId={mv.video_id}
					/>
				))}
			</div>
		);

	}
}

export default MusicVideoListContainer;
