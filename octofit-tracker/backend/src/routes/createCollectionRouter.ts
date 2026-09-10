import { Router } from 'express';
import { Model } from 'mongoose';

export function createCollectionRouter(collectionModel: Model<unknown>) {
  const router = Router();

  router.get('/', async (_req, res, next) => {
    try {
      const items = await collectionModel.find();
      res.json(items);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
