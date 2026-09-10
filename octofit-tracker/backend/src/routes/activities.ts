import { Activity } from '../models/Activity';
import { createCollectionRouter } from './createCollectionRouter';

export const activitiesRouter = createCollectionRouter(Activity);
