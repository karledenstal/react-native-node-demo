import { ArticleBodyPatch, ArticleBodyPost } from './types';

export function isArticleBodyPatch(body: any): body is ArticleBodyPatch {
  return 'title' in body || 'body' in body;
}

export function isArticleBodyPost(body: any): body is ArticleBodyPost {
  return 'title' in body && 'body' in body && 'author' in body;
}
