<template>
<div>
  <UserCreate />
  <UserList />
  </div>
</template>

<script>
import UserCreate from '../../components/pro/proCreate.vue'
import UserList from '../../components/pro/proList.vue'

export default {
  name: 'Home',
  components: { UserCreate, UserList }
}
</script>
