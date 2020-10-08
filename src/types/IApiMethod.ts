export interface IApiMethod<T, Q extends T> {
  getUsers(page: number): Promise<IResponse<T[]>>;
  fetchByItem(item: T): Promise<IResponse<Q[]>>;
}

export interface IResponse<T> {
  results: T;
}
