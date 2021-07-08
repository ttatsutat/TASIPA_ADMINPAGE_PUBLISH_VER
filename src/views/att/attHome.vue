<template>
<div>
  <UserCreate />
  <UserList />
  </div>
</template>

<script>
import UserCreate from '../../components/att/attCreate.vue'
import UserList from '../../components/att/attList.vue'

export default {
  name: 'Home',
  components: { UserCreate, UserList }
}
</script>
