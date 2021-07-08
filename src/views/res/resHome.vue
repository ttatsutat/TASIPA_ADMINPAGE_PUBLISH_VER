<template>
<div>
  <UserCreate />
  <UserList />
  </div>
</template>

<script>
import UserCreate from '../../components/res/resCreate.vue'
import UserList from '../../components/res/resList.vue'

export default {
  name: 'resHome',
  components: { UserCreate, UserList }
}
</script>
