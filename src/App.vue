<template>
  <div id="app">
    <SearchTab />
    <Table />
    <Paginate />
  </div>
</template>


<script>
import Table from './views/Table.vue'
import SearchTab from './views/SearchTab'
import Paginate from './views/Paginate'
export default {
  components: {
    Table,
    SearchTab,
    Paginate
  },
  created() {
    this.$store.dispatch('info/fetchInfo')
  }
}
</script>



<style>
#app {
  border: 1px solid black;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 85vw;
  margin: 40px auto;
  text-align: center;
}
</style>
