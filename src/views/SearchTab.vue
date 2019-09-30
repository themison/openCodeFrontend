<template>
  <div class="wrapper">
    <h4 class="search-header">Инспекция по ресторанам</h4>
    <div class="dropdown">
      <button class="dropbtn">Редактировать таблицу</button>
      <div class="dropdown-content" @click.prevent="(e)=>{toggleColumn(e)}">
        <a href name="business_name">
          <i class="fas fa-times icon"></i> Название организации
        </a>
        <a name="business_address" href>
          <i class="fas fa-times icon"></i> Адрес организации
        </a>
        <a name="business_city" href>
          <i class="fas fa-times icon"></i> Город организации
        </a>
        <a name="business_phone_number" href>
          <i class="fas fa-times icon"></i> Номер организации
        </a>
        <a name="inspection_date" href>
          <i class="fas fa-times icon"></i> Дата инспекции
        </a>
        <a name="inspection_description" href>
          <i class="fas fa-times icon"></i> Статус инспекции
        </a>
        <a name="inspection_type" href>
          <i class="fas fa-times icon"></i> Тип проведения инспекции
        </a>
      </div>
    </div>
    {{' '}}
    <input
      class="search-input"
      placeholder="Поиск по полям таблицы"
      @input.prevent="e=>{searchInfo(e)}"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    toggleColumn(e) {
      this.toggleIcon(e.target.children[0])
      this.$store.dispatch('info/toggleColumn', {
        column: e.target.name
      })
    },
    searchInfo(e) {
      this.$store.dispatch('info/searchInfo', {
        info: e.target.value
      })
    },
    toggleIcon(icon) {
      console.dir(icon)
      if (icon.classList.contains('fa-times')) {
        icon.classList.remove('fa-times')
        icon.classList.add('fa-check')
        console.log(icon.classList)
      } else {
        console.log(123)
        icon.classList.remove('fa-check')
        icon.classList.add('fa-times')
        console.log(icon.classList)
      }
    }
  },
  computed: mapState(['info'])
}
</script>

<style scoped>
.wrapper {
  display: flex;
  border-bottom: 1px solid black;
  justify-content: space-around;
  align-items: center;
  font-size: 8px;
}
.dropbtn {
  width: 100%;
  background-color: white;
  color: black;
  padding: 2px 6px;
  font-size: 12px;
  border: 1px solid black;
  text-align: center;
}

.dropdown {
  min-width: 200px;
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  text-align: left;
  font-size: 12px;
  color: black;
  padding: 4px 2px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: darkgray;
}
.wrapper {
  text-align: center;
}
.search-header {
  font-size: 16px;
}

.search-input {
  min-width: 200px;
  padding-left: 10px;
  text-align: left;
}

.search-input::placeholder {
  font-size: 12px;
}

.icon {
  min-width: 12px;
}

.search,
h4 {
  display: inline;
}
</style>