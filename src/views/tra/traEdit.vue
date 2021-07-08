<template>
  <div class="card card-body mt-4">
    <h3>Edit Train</h3>
    <form @submit.prevent="update">
   
      <div class="form-group">
          <label> Train Number</label>
          <input v-model.number="form.TrainNo" class="form-control" type="number" required />
        </div>

        <div class="form-group mt-3">
          <label>Type</label>
          <input v-model="form.Type" class="form-control" required />
        </div>
        <div class="form-group mt-3">
          <label>Departure Station</label>
          <input v-model="form.DepStation" class="form-control" required />
        </div>
        <div class="form-group mt-3">
          <label>Departure Time</label>
          <input v-model="form.DepTime" class="form-control" required />
        </div>
        <div class="form-group mt-3">
          <label>Destination Station</label>
          <input v-model="form.DestStation" class="form-control" required />
        </div>
        <div class="form-group mt-3">
          <label>Destination Time</label>
          <input v-model="form.DestTime" class="form-control" required />
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
import { getUser, updateUser } from '../../firebaseCRUD/firebaseTra'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userId = computed(() => route.params.id)

      const form = reactive({
        TrainNo: '',
        Type: '',
        DestStation: '',
        DestTime: '',
        DepStation: '',
        DepTime: ''

      })
    onMounted(async () => {
      const user = await getUser(userId.value)
      console.log(user, userId.value)
      form.TrainNo = user.TrainNo
      form.Type= user.Type
      form.DestStation = user.DestStation
      form.DestTime = user.DestTime
      form.DepStation = user.DepStation
      form.DepTime = user.DepTime

    })

    const update = async () => {
      await updateUser(userId.value, { ...form })
      router.push('/tr')
        form.TrainNo = ''
        form.Type = ''
        form.DestStation = ''
        form.DestTime = ''
        form.DepStation = ''
        form.DepTime = ''
    }

    return { form, update }
  }
}
</script>
