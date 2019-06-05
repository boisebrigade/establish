import Dexie from 'dexie'

export const Storage = new Dexie('Establish')
Storage.version(1).stores({
  resources: `id,favorite`,
  favorites: `id`,
})
