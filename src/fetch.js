import axios from 'axios'

export function fetchGet(url) {
  let isBrowser
  try {
    isBrowser = !!window
  } catch (e) {
    isBrowser = false
  }
  return axios.get(isBrowser ? url : 'http://localhost:9000' + url)
}