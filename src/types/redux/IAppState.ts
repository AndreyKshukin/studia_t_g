export interface IAppState {
  state: DataState;
  errorMessage?: string;
}

export enum DataState {
  initial = 0,
  loading,
  refreshing,
  loaded,
  error,
}
