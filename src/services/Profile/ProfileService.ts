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
    // Нет конкретной ссылки для запроса данных о пользователе.
    // Поэтому придумываем дополнительные данные
    const profileDetail: IProfileDetail = {
      ...profile,
      phone: '+7 (999) 888-77-29',
      dob: {
        date: '09.10.2020',
        age: 'unknown',
      },
    };
    const list: IResponse<IProfileDetail[]> = {
      results: [profileDetail],
    };
    return list;
    // Если был бы запрос пользователя, то это выгядело вот так
    // const link = `${routes.mainLink}?email=${profile.email}`;
    // const response = await fetch(link);
    // if (!response.ok) {
    //   throw new Error('Cannot fetch data');
    // }
    // return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
