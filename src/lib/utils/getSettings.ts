import { existsSync, readFileSync } from 'fs';
import { userDataPath } from '../constants';
import { ISettings } from '../interfaces';
import generateSettings from './generateSettings';

export default (): ISettings => {
  if (!existsSync(userDataPath)) generateSettings();

  return JSON.parse(readFileSync(userDataPath).toString());
};
