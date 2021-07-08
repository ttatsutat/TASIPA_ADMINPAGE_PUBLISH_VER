<template>
  <div class="card card-body mt-4">
    <h3>Edit Attraction</h3>
    <form @submit.prevent="update">
   <div class="form-group">
        <label> Attraction Name</label>
        <input v-model="form.Name" class="form-control" required />
      </div>
      <div class="form-group mt-3">
        <label>Category</label>
        <input v-model="form.Category" class="form-control" required/>
      </div>
       <div class="form-group mt-3">
        <label>Location</label>
        <input v-model="form.Location" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>Latitude</label>
        <input v-model.number="form.Latitude" class="form-control" type="number" required/>
      </div>
      <div class="form-group mt-3">
        <label>Longitude</label>
        <input v-model.number="form.Longitude" class="form-control" type="number" required/>
      </div>
     <div class="form-group mt-3">
        <label>Rating</label>
        <input v-model.number="form.Rating" class="form-control" type="number" step='any' required/>
      </div>
      <div class="form-group mt-3">
        <label>Image Url of Restaurant</label>
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
import { getUser, updateUser } from '../../firebaseCRUD/firebaseAtt'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userId = computed(() => route.params.id)

    const form = reactive({Name: '', Description: '',Category:'',Location:'', Latitude:'', Longitude:'',Rating:'',RatingNo:200,distance:0,id:3400,imageURL:'' })
    onMounted(async () => {
      const user = await getUser(userId.value)
      console.log(user, userId.value)
      form.Name = user.Name
      form.Description = user.Description
      form.Category=user.Category
      form.Location=user.Location
      form.Latitude = user.Latitude
      form.Longitude = user.Longitude
      form.Rating=user.Rating
      form.imageURL=user.imageURL
    })

    const update = async () => {
      await updateUser(userId.value, { ...form })
      router.push('/at')
      form.Name = ''
      form.Description = ''
      form.Category=''
      form.Location=''
      form.Latitude = ''
      form.Longitude = ''

      form.Rating=''
      form.imageURL=''
    }

    return { form, update }
  }
}
</script>
