import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

const axiosInstance = axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '62f3d719ed334f489c4481bff764b0fb',
	},
});

class APICLIENT<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config: AxiosRequestConfig) => {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);
	};
}

export default APICLIENT;

/*
queryFn: () => apiClient
	.get<FetchResponse<Platform>>('/platforms/lists/parents')
	.then((res) => res.data),
	

We have duplicated the data fecthing logic in a few differrent places.
Everytime we need to retrieve data we must call teh get method and 
remember to use the FetchResponse interface and extract the data from the 
response. We can extract that into resuable APICLINET class.
*/
