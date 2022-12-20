// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ScoreTracker } = initSchema(schema);

export {
  ScoreTracker
};