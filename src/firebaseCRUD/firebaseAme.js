//Here in this js file, we perform firebase CRUD(Create Read Update Delete) operation
//Note: We have 3 more firebase js file for other three collection.
//i.e. Events, Attractions & Restaurants

import { ref, onUnmounted } from 'vue'
import {db} from '../firebase'


const usersCollection = db.collection('Amenities')

//this function is to create database of Amenity collection
export const createUser = user => {
  return usersCollection.add(user)
}
//this function is to get database of Amenity collection
export const getUser = async Id => {
  const user = await usersCollection.doc(Id).get()
  return user.exists ? user.data() : null
}
//this function is to update database of Amenity collection
export const updateUser = (Id, user) => {
  return usersCollection.doc(Id).update(user)
}
//this function is to delete database of Amenity collection
export const deleteUser = Id => {
  return usersCollection.doc(Id).delete()
}

//this function is to listen to database in real-time
//i.e it will refresh all data every time an update to database occurs 
export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ Id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
