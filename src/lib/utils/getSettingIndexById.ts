import getSettings from './getSettings';

export default (id: number, applications = getSettings().applications) =>
  applications.findIndex((app) => app.id === id);
