import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import genres from '../data/genres';
import APICLIENT from '../services/api-client';
import { Genre } from '../entities/Genre';

const apiClient = new APICLIENT<Genre>('/genres');

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'),
		initialData: genres,
	});

export default useGenres;

//<FetchResponse<Genre>>
//We expect response of type FetchResponse of type Genre
