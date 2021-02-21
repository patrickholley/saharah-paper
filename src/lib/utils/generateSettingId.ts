import { getSettings } from '.';
import { ISetting } from '../interfaces';

export default () => {
  let id = 0;

  getSettings().applications.forEach((setting: ISetting) => {
    if (setting.id === id) id += 1;
  });

  return id;
};
