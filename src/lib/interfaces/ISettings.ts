export interface ISettingsApp {
  id: number;
  name: string;
  location: string;
  process: string;
}
export default interface ISettings {
  applications: Array<ISettingsApp>;
  defaults: {
    locations: Array<string>;
    primaryMonitorIndex: number;
  };
  previous: {
    locations: Array<string>;
    primaryMonitorIndex: number;
    monitorCount: number;
  };
}
