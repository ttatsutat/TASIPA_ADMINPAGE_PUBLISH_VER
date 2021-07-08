<template>
<!-- this vue is to show list of available data in the amenity collection -->
<!-- Note: We have 3 more ..List.vue to read data from their particular collection 
i.e Events,Attraction and Restaurants
=> One can use comments on this page as reference to other ..List.vue code-->
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col"> Amenity Name</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ame in users" :key="ame.Id">
          <td>{{ ame.Name }}</td>
          <td>{{ ame.Category }}</td>
          <td>
            <router-link :to="`/aedit/${ame.Id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteUser(ame.Id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from '../../firebaseCRUD/firebaseAme'

export default {
  //this function load all the stored data in Amenity collection and store it in users
  setup() {
    const users = useLoadUsers()
    return { users, deleteUser }
  }
}
</script>
