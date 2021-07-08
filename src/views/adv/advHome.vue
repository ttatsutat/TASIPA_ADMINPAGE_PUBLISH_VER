<template>
<div>
  <UserCreate />
  <UserList />
  </div>
</template>

<script>
import UserCreate from '../../components/adv/advCreate.vue'
import UserList from '../../components/adv/advList.vue'

export default {
  name: 'Home',
  components: { UserCreate, UserList }
}
</script>
