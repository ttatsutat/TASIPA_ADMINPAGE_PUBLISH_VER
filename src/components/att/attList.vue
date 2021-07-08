<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Attraction Name</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="att in users" :key="att.Id">
          <td>{{ att.Name }}</td>
          <td>{{ att.Category }}</td>
          <td>
            <router-link :to="`/atedit/${att.Id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteUser(att.Id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from '../../firebaseCRUD/firebaseAtt'

export default {
  setup() {
    const users = useLoadUsers()
    return { users, deleteUser }
  }
}
</script>
