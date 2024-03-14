import express from 'express';
import db from '../db';
import { articles } from '../schema';
import { eq } from 'drizzle-orm';
import { isArticleBodyPatch } from './helpers';
import { alphabet, generateRandomString } from 'oslo/crypto';

const router = express.Router();

router.get('/', async (req, res) => {
  const articles_db = await db.select().from(articles);

  return res.status(200).json(articles_db);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const article_json = await db
    .select()
    .from(articles)
    .where(eq(articles.id, id));

  return res.status(200).json(article_json);
});

router.post('/', async (req, res) => {
  const { body } = req;

  if (!isArticleBodyPatch(body)) {
    return res.status(400).json({ message: 'Invalid body' });
  }

  try {
    const id = generateRandomString(15, alphabet('a-z', '0-9'));
    await db.insert(articles).values({
      id,
      ...body,
    });
    return res.status(200).json({ message: 'Article created' });
  } catch (e) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  if (!isArticleBodyPatch(body)) {
    return res.status(400).json({ message: 'Invalid body' });
  }

  try {
    const editedAt = new Date();
    await db
      .update(articles)
      .set({
        updatedAt: editedAt.toString(),
        ...body,
      })
      .where(eq(articles.id, id));
    return res.status(200).json({ message: 'Article updated' });
  } catch (e) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
});

export { router };
