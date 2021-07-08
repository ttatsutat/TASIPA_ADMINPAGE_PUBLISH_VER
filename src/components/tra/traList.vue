<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Train Number</th>
          <th scope="col">Type</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tra in users" :key="tra.Id">
          <td>{{ tra.TrainNo}}</td>
          <td>{{ tra.Type}}</td>
          <td>
            <router-link :to="`/tredit/${tra.Id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteUser(tra.Id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from '../../firebaseCRUD/firebaseTra'

export default {
  setup() {
    const users = useLoadUsers()
    return { users, deleteUser }
  }
}
</script>
