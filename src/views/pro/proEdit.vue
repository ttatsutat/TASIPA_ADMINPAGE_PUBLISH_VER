<template>
  <div class="card card-body mt-4">
    <h3>Edit Promotion</h3>
    <form @submit.prevent="update">
   <div class="form-group">
        <label> Shop Name</label>
        <input v-model="form.ShopName" class="form-control" required />
      </div>
      <div class="form-group">
        <label> Product Name</label>
        <input v-model="form.ProductName" class="form-control" required />
      </div>
      <div class="form-group mt-3">
        <label>Category</label>
        <input v-model="form.Category" class="form-control" required/>
      </div>
       <div class="form-group mt-3">
        <label>Address</label>
        <input v-model="form.AddressWord" class="form-control" required/>
      </div>
          <div class="form-group mt-3">
        <label>Latitude</label>
        <input v-model.number="form.Latitude" class="form-control" type="number" step='any' required/>
      </div>
       <div class="form-group mt-3">
        <label>Longitude</label>
        <input v-model.number="form.Longitude" class="form-control" type="number" step='any' required/>
      </div>
      <div class="form-group mt-3">
        <label>Discount(in %))</label>
        <input v-model="form.Discount" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>Intial Price</label>
        <input v-model.number="form.Ini_Price" class="form-control" type="number" required/>
      </div>
      <div class="form-group mt-3">
        <label>Discount Price</label>
        <input v-model.number="form.Discount_price" class="form-control" type="number" required/>
      </div>
        <div class="form-group mt-3">
        <label>Expire Date</label>
        <input v-model="form.ValidTo" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>Image Url of Restaurant</label>
        <input v-model="form.imageURL" class="form-control" required/>
      </div>
      <div class="form-group mt-3">
        <label>Shop Url</label>
        <input v-model="form.shopURL" class="form-control" required/>
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
import { getUser, updateUser } from '../../firebaseCRUD/firebasePro'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userId = computed(() => route.params.id)

    const form = reactive({
        ProductName: '', ShopName: '', AddressWord: '', Discount: '', Discount_price: '', 
        Ini_Price: '',Category:'', Latitude:'', Longitude:'', ValidTo: '',distance:0,
        id:5400,imageURL:'' , shopURL: ''})

    onMounted(async () => {
      const user = await getUser(userId.value)
      console.log(user, userId.value)
      form.ProductName = user.ProductName
      form.ShopName = user.ShopName
      form.AddressWord = user.AddressWord
      form.Category=user.Category
      form.Discount=user.Discount
      form.Discount_price=user.Discount_price
      form.Ini_Price=user.Ini_Price
      form.Latitude = user.Latitude
      form.Longitude = user.Longitude
      form.ValidTo=user.ValidTo
      form.imageURL=user.imageURL
      form.shopURL=user.shopURL
    })

    const update = async () => {
      await updateUser(userId.value, { ...form })
      router.push('/pr')
      form.ProductName = ''
      form.ShopName = ''
      form.AddressWord = ''
      form.Category=''
      form.Discount=''
      form.Discount_price=''
      form.Ini_Price=''
      form.Latitude =''
      form.Longitude = ''
      form.ValidTo=''
      form.imageURL=''
      form.shopURL=''
    }

    return { form, update }
  }
}
</script>
