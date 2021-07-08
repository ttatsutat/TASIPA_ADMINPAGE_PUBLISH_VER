<template>
  <div class="card card-body mt-4">
    <h3>Edit Restaurant</h3>
    <form @submit.prevent="update">
       <div class="form-group">
        <label> Restaurant Name</label>
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
        <input v-model="form.Location" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>Latitude</label>
        <input v-model.number="form.Latitude" class="form-control" Step = "any" type="number" required/>
      </div>
      <div class="form-group mt-3">
        <label>Longitude</label>
        <input v-model.number="form.Longitude" class="form-control" Step = "any" type="number" required/>
      </div>
      <div class="form-group mt-3">
        <label>Menu1</label>
        <input v-model="form.Menu1" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>Menu1 PicUrl</label>
        <input v-model="form.Menu1pic" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>Price of Menu1</label>
        <input v-model="form.Price1" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>Menu2</label>
        <input v-model="form.Menu2" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>Menu2 PicUrl</label>
        <input v-model="form.Menu2pic" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>Price of Menu2</label>
        <input v-model="form.Price2" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>Rat</label>
        <input v-model.number="form.Rating" class="form-control" type="number" step='any' required/>
      </div>
      <div class="form-group mt-3">
        <label>Menu3</label>
        <input v-model="form.Menu3" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>Menu3 PicUrl</label>
        <input v-model="form.Menu3pic" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>Price of Menu3</label>
        <input v-model="form.Price3" class="form-control" required/>
      </div>

      <div class="form-group mt-3">
        <label>Telephone</label>
        <input v-model="form.Telephone" class="form-control" required/>
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
import { getUser, updateUser } from '../../firebaseCRUD/firebaseRes'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userId = computed(() => route.params.id)

    //const form = reactive({ restname: '', restcontact: '', restloca:'', restcat:'', restrate:'', imageUrl:'' })
     const form = reactive({ Name: '', Description: '',Category:'',Location:'', Latitude:'', Longitude:'', Menu1:'', Menu1pic:'', Menu2:'', Menu2pic:'', Menu3:'', Menu3pic:'',Price1:'',Price2:'',Price3:'',Rating:'',Telephone:'',imageURL:'' })
    onMounted(async () => {
      const user = await getUser(userId.value)
      console.log(user, userId.value)
      form.Name = user.Name
      form.Description = user.Description
      form.Category=user.Category
      form.Location=user.Location
      form.Latitude = user.Latitude
      form.Longitude = user.Longitude
      form.Menu1 = user.Menu1
      form.Menu1pic = user.Menu1pic
      form.Price1= user.Price1
      form.Menu2 = user.Menu2
      form.Menu2pic = user.Menu2pic
      form.Price2= user.Price2
      form.Menu3 = user.Menu3
      form.Menu3pic = user.Menu3pic
      form.Price3= user.Price3
      form.Telephone=user.Telephone
      form.Rating=user.Rating
      form.imageURL=user.imageURL
    })

    const update = async () => {
      await updateUser(userId.value, { ...form })
      router.push('/r')
      form.Name = ''
      form.Description = ''
      form.Category=''
      form.Location=''
      form.Latitude = ''
      form.Longitude = ''
      form.Menu1 = ''
      form.Menu1pic = ''
      form.Price1= ''
      form.Menu2 = ''
      form.Menu2pic = ''
      form.Price2= ''
      form.Menu3 = ''   
      form.Menu3pic = ''
      form.Price3= ''
      form.Telephone=''
      form.Rating=''
      form.imageURL=''
    }

    return { form, update }
  }
}
</script>
