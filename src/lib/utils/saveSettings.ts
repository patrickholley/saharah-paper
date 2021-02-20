import { writeFileSync } from 'fs';
import { getSettings } from '.';
import { userDataPath } from '../constants';
import { ISettings } from '../interfaces/ISettings';

export default (settings: ISettings, isAdding = false) => {
  const userSettings = getSettings();
  const { isMonitor } = settings;

  if (isMonitor) {
    // TODO: implement
  } else {
    const applications = [...userSettings.applications];

    // TODO: check elsewhere or update interface
    if (settings.name && settings.process) {
      userSettings.applications[
        applications.findIndex((app) => Number(app.id) === settings.id)
      ] = {
        id: settings.id,
        location: settings.location,
        name: settings.name,
        process: settings.process,
      };

      writeFileSync(userDataPath, JSON.stringify(userSettings));
    }
  }
};
