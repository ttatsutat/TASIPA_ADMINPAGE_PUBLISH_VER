import { ref, onUnmounted } from 'vue'
import {db} from '../firebase'
const usersCollection = db.collection('Attractions')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async Id => {
  const user = await usersCollection.doc(Id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (Id, user) => {
  return usersCollection.doc(Id).update(user)
}

export const deleteUser = Id => {
  return usersCollection.doc(Id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ Id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
