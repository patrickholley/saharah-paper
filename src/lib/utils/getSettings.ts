import { existsSync, readFileSync } from 'fs';
import { userDataPath } from '../constants';
import generateSettings from './generateSettings';

export default () => {
  if (!existsSync(userDataPath)) generateSettings();

  return JSON.parse(readFileSync(userDataPath).toString());
};
