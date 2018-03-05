import Loki from 'lokijs'
export const db = new Loki('notes',{ 
  autoload: true,
  autosave: true,
  autosaveInterval: 3000,
  persistenceMethod: 'localStorage',
  autoloadCallback: databaseInitialize
})

function databaseInitialize() {
  // collection  表
  const notes = 
    db.getCollection('notes');
  if (notes === null) {
    db.addCollection('notes');
  }
  
}
export function loadCollection(
  collection) {
  return new Promise(resolve => {
    const _collection = 
    db.getCollection(collection) || 
    db.addCollection(collection)
    resolve(_collection)
  }) 
}
