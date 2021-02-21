import getSettingIndexById from './getSettingIndexById';
import getSettings from './getSettings';
import saveSettings from './saveSettings';

export default (id: number) => {
  const settings = getSettings();
  const { applications } = settings;

  applications.splice(getSettingIndexById(id), 1);

  saveSettings(settings);
};
