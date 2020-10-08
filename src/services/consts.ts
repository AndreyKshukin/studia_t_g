export const routes = {
  mainLink: 'https://randomuser.me/api/',
  countProfiles: 20, //Количество профилей запрашиваемых за один запрос
  GetProfileTeasers: (page = 1, results = 20): string =>
    GetProfileTeasers(page, results),

  GetProfileDetail: (id_value: string): string => GetProfileDetail(id_value),
};

const mainLink = 'https://randomuser.me/api/';

const GetProfileTeasers = (page: number, results: number) => {
  return `${mainLink}?inc=name,picture,email,id&page=${page}&results=${results}&seed=abc&noinfo`;
};

const GetProfileDetail = (id_value: string) => {
  const new_id = id_value.replace(/ /g, `+`);
  // https://randomuser.me/api/?email=louane.vidal@example.com&id/value=2NNaN01776236+16&seed=abc&noinfo
  return `${mainLink}?id/value=${new_id}&seed=abc&noinfo`;
};
