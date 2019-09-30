<template>
  <div>
    <div class="table-container">
      <table class="table">
        <thead>
          <tr class="table-header">
            <th
              v-for="(column, index) in columns"
              v-show="visibleColumn(column) ? true : false"
              :key="index"
              class="head-cell"
            >{{column}}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in items"
            :key="index"
            v-show="visibleRow(item) ? true : false"
            class="table-row"
          >
            <td
              v-for="(column, indexColumn) in itemsColumns"
              :key="indexColumn"
              v-show="visibleItem(column) ? true : false"
              class="table-cell"
            >{{item[column]}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      perPage: 10,
      wtf: false
    }
  },

  methods: {
    visibleColumn(column) {
      return Object.keys(this.info.visibleColumns).indexOf(column) != -1
    },
    visibleItem(column) {
      return Object.values(this.info.visibleColumns).indexOf(column) != -1
    },
    visibleRow(item) {
      if (this.info.searchParam == '') {
        return true
      } else {
        return Object.values(item).some(
          i =>
            i.toLowerCase().indexOf(this.info.searchParam.toLowerCase()) != -1
        )
      }
    },
    ...mapActions('info', ['fetchInfo'])
  },
  computed: {
    page() {
      return this.info.visibleInfo.length
    },
    columns() {
      return Object.keys(this.info.columns)
    },
    itemsColumns() {
      return Object.values(this.info.columns)
    },
    items() {
      return this.info.info
    },
    ...mapState(['info'])
  }
}
</script>

<style scoped>
.table-container {
  padding-top: 20px;
}
.table {
  width: 100%;
  border-collapse: collapse;
}

.head-cell {
  border-bottom: 2px solid gray;
  padding-bottom: 10px;
}
.table-cell {
  font-size: 14px;
}

tbody tr:nth-child(even) {
  background-color: #dfdfdf;
}

.table-row {
  height: 50px;
}

.table-row:not(:last-child) {
  border-bottom: 1px solid gray;
}
th:not(:first-child),
td:not(:first-child) {
}
</style>