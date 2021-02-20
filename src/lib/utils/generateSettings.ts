import { copyFileSync } from 'fs';
import path from 'path';
import { userDataPath } from '../constants';

export default () => {
  copyFileSync(
    path.resolve(__dirname, './userSettingsTemplate.json'),
    userDataPath
  );
};
