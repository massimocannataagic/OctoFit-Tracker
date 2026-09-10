import { Workout } from '../models/Workout';
import { createCollectionRouter } from './createCollectionRouter';

export const workoutsRouter = createCollectionRouter(Workout);
