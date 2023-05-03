import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import apiClient, { FetchResponse } from '../services/api-client';
import { Platform } from './usePlatforms';

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
	useQuery<FetchResponse<Game>, Error>({
		queryKey: ['games', gameQuery],
		queryFn: () =>
			apiClient
				.get<FetchResponse<Game>>('/games', {
					params: {
						genres: gameQuery.genre?.id,
						parent_platforms: gameQuery.platform?.id,
						ordering: gameQuery.sortOrder,
						search: gameQuery.searchText,
					},
				})
				.then((res) => res.data),
	});

export default useGames;

/*
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    .
    .
    .
    [gameQuery]
  );

  We used the useData hook to fetch games. Now we replaced it with query hook from react Query
  becasue all the functionality we have implemneted in the data hook is laready implementred in 
  the query hook in a much better way.
*/
