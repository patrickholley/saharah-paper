import { writeFileSync } from 'fs';
import { userDataPath } from '../constants';
import { ISettings } from '../interfaces';

export default (settings: ISettings) => {
  // TODO: Investigate UI updates related to save
  writeFileSync(userDataPath, JSON.stringify(settings));
};
