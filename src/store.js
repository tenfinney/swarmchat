// @flow

import { AsyncStorage } from 'react-native-web'

const KEY_PREFIX = 'swarmchat:'
const SWARM_URL_KEY = KEY_PREFIX + 'swarm_url'

export const getSwarmURL = (): Promise<?string> => {
  return AsyncStorage.getItem(SWARM_URL_KEY)
}

export const setSwarmURL = (url: string): Promise<void> => {
  return AsyncStorage.setItem(SWARM_URL_KEY, url)
}

const appDataKey = (key: string) => `${KEY_PREFIX}${key}:data`

export const getAppData = async (key: string): Promise<Object> => {
  let data = {}
  try {
    const value = await AsyncStorage.getItem(appDataKey(key))
    if (value != null) {
      data = JSON.parse(value)
    }
  } catch (err) {
    console.warn(err)
  }
  return data
}

export const setAppData = (key: string, data: Object = {}): Promise<void> => {
  return AsyncStorage.setItem(appDataKey(key), JSON.stringify(data))
}
