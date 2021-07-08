<template>
<div>
  <UserCreate />
  <UserList />
  </div>
</template>

<script>
import UserCreate from '../../components/tra/traCreate.vue'
import UserList from '../../components/tra/traList.vue'

export default {
  name: 'traHome',
  components: { UserCreate, UserList }
}
</script>
