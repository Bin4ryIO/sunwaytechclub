import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_ASSET = 'FETCH_ASSET';

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = '341zfgzoso3v';
const API_TOKEN = '491714fc5f8d28e15f81c7754e27f213e9865df6d3735f3fea825884ccfda2fa';

export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=post&order=sys.createdAt`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries/${id}?access_token=${API_TOKEN}&content_type=post`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function fetchAsset(id) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}`);

  return {
    type: FETCH_ASSET,
    payload: request
  };
}