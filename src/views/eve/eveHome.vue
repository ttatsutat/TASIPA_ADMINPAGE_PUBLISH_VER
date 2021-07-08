<template>
<div>
  <UserCreate />
  <UserList />
  </div>
</template>

<script>
import UserCreate from '../../components/eve/eveCreate.vue'
import UserList from '../../components/eve/eveList.vue'

export default {
  name: 'eveHome',
  components: { UserCreate, UserList }
}
</script>
