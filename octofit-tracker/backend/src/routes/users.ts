import { User } from '../models/User';
import { createCollectionRouter } from './createCollectionRouter';

export const usersRouter = createCollectionRouter(User);
