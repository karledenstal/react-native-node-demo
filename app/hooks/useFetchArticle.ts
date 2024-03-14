import { useQuery } from '@tanstack/react-query';
import { Article } from './useFetchArticles';

export const useFetchArticle = (id: string) => {
  return useQuery({
    queryKey: ['fetchArticle', id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:1234/articles/${id}`);
      const data: Article[] = await res.json();

      console.log('data in fetch', data);

      return data[0];
    },
  });
};
