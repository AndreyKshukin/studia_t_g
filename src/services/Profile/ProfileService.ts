import { IApiMethod, IProfileDetail, IProfileTeaser, IResponse } from '@types';

import { routes } from '../consts';

//Получаем данные для персонажа
export const ProfileService: IApiMethod<IProfileTeaser, IProfileDetail> = {
  getUsers: (page: number) => getUsers(page),
  fetchByItem: (profile: IProfileTeaser) => fetchByItem(profile),
};

//Запос юзеров
async function getUsers(page: number): Promise<IResponse<IProfileTeaser[]>> {
  try {
    const link = `${routes.mainLink}?inc=name,picture,email,id&page=${page}&results=${routes.countProfiles}&seed=abc&noinfo`;
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error('Cannot get data');
    }
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

//Запос для подробной информации о выбраном юзере
async function fetchByItem(
  profile: IProfileTeaser,
): Promise<IResponse<IProfileDetail[]>> {
  try {
    //Нет конкретной ссылки для запросы данных об узере.
    //так что профиль не совпадает.
    const link = `${routes.mainLink}?email=${profile.email}`;
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error('Cannot fetch data');
    }
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
