import axios from 'axios';

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '62f3d719ed334f489c4481bff764b0fb',
	},
});
