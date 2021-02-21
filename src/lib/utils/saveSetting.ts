import getSettings from './getSettings';
import { ISetting } from '../interfaces';
import getSettingIndexById from './getSettingIndexById';
import saveSettings from './saveSettings';

export default (setting: ISetting, isAdding = false) => {
  const settings = getSettings();
  const { isMonitor } = setting;

  if (isMonitor) {
    // TODO: implement
  } else {
    const applications = [...settings.applications];

    const settingToSave = {
      id: setting.id,
      location: setting.location as string,
      name: setting.name as string,
      process: setting.process as string,
    };

    const settingIndex = getSettingIndexById(setting.id, applications);

    if (isAdding || settingIndex === -1) {
      if (!isAdding) {
        alert(
          'Error occurred when saving; added new entry instead. If outdated entry still exists, please delete it.'
        );
      }

      settings.applications.push(settingToSave);
    } else {
      settings.applications[settingIndex] = settingToSave;
    }

    saveSettings(settings);
  }
};
