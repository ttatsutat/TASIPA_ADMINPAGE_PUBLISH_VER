<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Restaurant Name</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rest in users" :key="rest.Id">
          <td>{{ rest.Name }}</td>
          <td>{{ rest.Category }}</td>
          <td>
            <router-link :to="`/redit/${rest.Id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteUser(rest.Id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from '../../firebaseCRUD/firebaseRes'

export default {
  setup() {
    const users = useLoadUsers()
    return { users, deleteUser }
  }
}
</script>
