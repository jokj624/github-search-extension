import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

axios.defaults.withCredentials = true;

export const useGithubSearch = query => {
    const getLastPage = (total) => {
        return ((total - 1) / 4) + 1;
    }

    const getSearchResult = async (page, query) => {
        const { data } = await axios.get(
            `https://api.github.com/search/repositories?q=${query}&page=${page}&sort=stars&per_page=10`
        );

        return {
            result: data,
            currentPage: page,
            isLast: getLastPage(data.total_count) === page
        };
    }

    const { 
        data,
        fetchNextPage,
        isSuccess,
        hasNextPage
    } = useInfiniteQuery(["search_list", query],
        ({ page = 1 }) => getSearchResult(page, query), {
        getNextPageParam: (lastPage, pages) => {
            if (!lastPage.isLast) return lastPage.currentPage + 1;

            return undefined;
        },
    });

    return { data, fetchNextPage, isSuccess, hasNextPage };
}