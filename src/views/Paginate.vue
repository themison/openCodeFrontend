<template>
  <div class="paginate-wrapper">
    <div class="button-wrapper">
      <button @click="prevPage" :disabled="this.pagination.pageNumber <= 0">Пред.</button>
      <button
        @click="nextPage"
        :disabled="this.pagination.totalPage-1<=this.pagination.pageNumber"
      >След.</button>
    </div>
    <span class="total-posts">Всего постов:{{totalPosts}}</span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    totalPosts() {
      return this.info.visibleInfo.length
    },
    ...mapState(['info', 'pagination'])
  },
  methods: {
    prevPage() {
      this.prev()
    },
    nextPage() {
      this.next()
    },
    ...mapActions('pagination', ['next', 'prev'])
  }
}
</script>

<style scoped>
.total-posts {
  font-size: 12px;
  font-weight: bold;
}

.paginate-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px 0px;
}
</style>