import { Team } from '../models/Team';
import { createCollectionRouter } from './createCollectionRouter';

export const teamsRouter = createCollectionRouter(Team);
