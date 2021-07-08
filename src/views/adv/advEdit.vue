<template>
<!-- this page is for getting all the input to update the current amenity data -->
<!-- Note: We have 3 more ..Edit.vue to get input and push it each collection 
i.e Events,Attraction and Restaurants
=> One can use comments on this page as reference to other ..Edit.vue code-->
  <div class="card card-body mt-4">
    <h3>Edit Advertisement</h3>
    <form @submit.prevent="update">
   <div class="form-group">
        <label> Advertisement Image URL</label>
        <input v-model="form.Promotion_IMG" class="form-control" required />
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
import { getUser, updateUser } from '../../firebaseCRUD/firebaseAdv'

export default {
  //this function job is the grab all the changes and push it to amenity collection on firebase
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userId = computed(() => route.params.id)

    const form = reactive({ Promotion_IMG: ''})
    onMounted(async () => {
      const user = await getUser(userId.value)
      console.log(user, userId.value)
      form.Promotion_IMG=user.Promotion_IMG
    })

    const update = async () => {
      await updateUser(userId.value, { ...form })
      router.push('/ad')
      form.Promotion_IMG=user.Promotion_IMG
    }

    return { form, update }
  }
}
</script>
