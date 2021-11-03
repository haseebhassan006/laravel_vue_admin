<template>
  <div>
    <UsersTable :users="users" />
  </div>
</template>

<script>
import UsersTable from "./UsersTable.vue";
export default {
  components: { UsersTable },
  data() {
    return {
      users: [],
    };
  },
};
</script>

