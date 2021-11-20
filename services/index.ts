import { expressApp } from "../shared/lib/expressApp";
import * as dotenv from 'dotenv';

// Add extra middleware to the app
const result = dotenv.config();
if (result.error) {
  throw result.error;
}
export default expressApp;