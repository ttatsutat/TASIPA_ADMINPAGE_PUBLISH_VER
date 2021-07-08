<template>
  <div class="card card-body mt-4">
    <h3>Edit Event</h3>
    <form @submit.prevent="update">
   
      <div class="form-group">
        <label> Event Name</label>
        <input v-model="form.Name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Description</label>
        <input v-model="form.Description" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>Category</label>
        <input v-model="form.Category" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>Location</label>
        <input v-model="form.Location" class="form-control"  required/>
      </div>
      <div class="form-group mt-3">
        <label>Longitude</label>
        <input v-model.number="form.Longitude" class="form-control" Step = "any" required/>
      </div>
      <div class="form-group mt-3">
        <label>Latitude</label>
        <input v-model.number="form.Latitude" class="form-control" Step = "any" required/>
      </div>
      <div class="form-group mt-3">
        <label>Date of Event(YYYY-MM-DD)</label>
        <input v-model="form.Date" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>Telephone</label>
        <input v-model="form.Telephone" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>imageURL</label>
        <input v-model="form.imageURL" class="form-control" required/>
      </div>
      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUser, updateUser } from '../../firebaseCRUD/firebaseEve'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userId = computed(() => route.params.id)

    const form = reactive({   Name: '', Description: '',Category:'',Location:'', Latitude:'', Longitude:'', Date:'', Telephone:'', distance:0, id:2200, imageURL:'' })
    onMounted(async () => {
      const user = await getUser(userId.value)
      console.log(user, userId.value)
      form.Name = user.Name
      form.Description = user.Description
      form.Category = user.Category
      form.Location = user.Location
      form.Longitude = user.Longitude
      form.Latitude = user.Latitude
      form.Date = user.Date
      form.Telephone = user.Telephone
      form.imageURL = user.imageURL
    })

    const update = async () => {
      await updateUser(userId.value, { ...form })
      router.push('/e')
      form.Name = ''
      form.Description = ''
      form.Category = ''
      form.Location = ''
      form.Longitude = ''
      form.Latitude = ''
      form.Date = ''
      form.Telephone = ''
      form.imageURL = ''
    }

    return { form, update }
  }
}
</script>
