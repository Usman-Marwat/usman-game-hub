import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import APICLIENT, { FetchResponse } from '../services/api-client';
import { Platform } from './usePlatforms';

const apiClient = new APICLIENT<Game>('/games');

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
	useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ['games', gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
				},
			}),
		//allPages contain data for each page we have retrieved already.
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
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
