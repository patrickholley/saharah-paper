export default interface ISettings {
  applications: Array<{
    id: number;
    name: string;
    location: string;
    process: string;
  }>;
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
