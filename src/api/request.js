import { axiosInstance } from './config';

// banner图
export const getBannerRequest = () => {
  return axiosInstance.get('/banner');
};
// 推荐
export const getRecommendListRequest = () => {
  return axiosInstance.get('/personalized');
};
// 热门歌手
export const getHotSingerListRequest = (count) => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};
// 歌手列表
export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};
// 排行榜
export const getRankListRequest = () => {
  return axiosInstance.get(`/toplist/detail`);
};

// 歌单详情
export const getAlbumDetailRequest = (id) => {
  return axiosInstance.get(`/playlist/detail?id=${id}`);
};

// 歌手详情
export const getSingerInfoRequest = (id) => {
  return axiosInstance.get(`/artists?id=${id}`);
};

// 歌词
export const getLyricRequest = (id) => {
  return axiosInstance.get(`/lyric?id=${id}`);
};
