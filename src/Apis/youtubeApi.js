import axios from 'axios';

const youtubeApi = async (keyword) => {
	const response = await axios.get(
		'https://www.googleapis.com/youtube/v3/search',
		{
			params: {
				part: 'snippet',
				maxResuls: 5,
				key: process.env.REACT_APP_YOUTUBE_API_KEY,
				q: keyword,
			},
		},
	);

	return response.data.results;
};

export default youtubeApi;
