import { useQuery } from '@tanstack/react-query';

export interface Article {
  id: string;
  title: string;
  body: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
}

export const useFetchArticles = () => {
  return useQuery({
    queryKey: ['fetchAllArticles'],
    queryFn: async () => {
      const res = await fetch('http://localhost:1234/articles');
      const data: Article[] = await res.json();

      return data ?? [];
    },
  });
};
