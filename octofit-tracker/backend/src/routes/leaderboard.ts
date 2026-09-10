import { LeaderboardEntry } from '../models/LeaderboardEntry';
import { createCollectionRouter } from './createCollectionRouter';

export const leaderboardRouter = createCollectionRouter(LeaderboardEntry);
