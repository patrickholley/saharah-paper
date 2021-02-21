import getSettings from './getSettings';
import { ISetting } from '../interfaces';
import getSettingIndexById from './getSettingIndexById';
import saveSettings from './saveSettings';

export default (
  { id, isMonitor, location, name, process }: ISetting,
  isAdding = false
) => {
  const settings = getSettings();

  if (isMonitor) {
    settings.defaults.locations[id] = location;
  } else {
    const { applications } = settings;

    const settingToSave = {
      id,
      location: location as string,
      name: name as string,
      process: process as string,
    };

    const settingIndex = getSettingIndexById(id, applications);

    if (isAdding || settingIndex === -1) {
      if (!isAdding) {
        alert(
          'Error occurred when saving; added new entry instead. If outdated entry still exists, please delete it.'
        );
      }

      applications.push(settingToSave);
    } else {
      applications[settingIndex] = settingToSave;
    }
  }

  saveSettings(settings);
};
