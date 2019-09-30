<template>
  <div>
    <!-- <p>Showing {{first}} to {{last}} of {{ totalPosts }} entries</p> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      perPage: 10
    }
  },
  computed: {
    totalPosts() {
      return this.info.visibleInfo.length
    },
    ...mapState(['info'])
  }
}
</script>

<style scoped>
</style>