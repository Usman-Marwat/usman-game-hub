import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import APICLIENT from '../services/api-client';

const apiClient = new APICLIENT<Genre>('/genres');

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: genres,
	});

export default useGenres;

//<FetchResponse<Genre>>
//We expect response of type FetchResponse of type Genre
