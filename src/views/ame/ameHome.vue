<template>
<div>
  <UserCreate />
  <UserList />
  </div>
</template>

<script>
import UserCreate from '../../components/ame/ameCreate.vue'
import UserList from '../../components/ame/ameList.vue'

export default {
  name: 'Home',
  components: { UserCreate, UserList }
}
</script>
