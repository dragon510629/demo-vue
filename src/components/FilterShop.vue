<template>
  <div>
    <div class="container filter-box">
      <input class="search-input" placeholder="Nhập từ khoá cần tìm" role="searchbox" aria-label="Search" v-model="searchName" @click="search">
      <button class="btn btn-info" @click="search">
        Search
      </button>
      <button class="btn btn-outline-info" @click="isActive = !isActive">
        Filter
      </button>
      <button class="btn btn-outline-info" @click="clearFilter">
        Clear Filter
      </button>
    </div>
    <table class="table" :class="{ 'active': isActive }">
      <tbody>
          <tr>
            <td >Category</td>
            <td v-for="element in filterData.category" :key="element.id"><button class="btn btn-info" @click="addSearchCategory(element.keySearch)">{{ element.keySearch }}</button></td>
          </tr>
          <tr>
            <td >Price</td>
            <td v-for="element in filterData.price" :key="element.id"><button class="btn btn-info" @click="addSearchPrice(element.keySearch)">{{ element.keySearch }}</button></td>
          </tr>
          <tr>
            <td >Rating</td>
            <td v-for="element in filterData.rating" :key="element.id"><button class="btn btn-info" @click="addSearchRating(element.value)">{{ element.value }}</button></td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { filterData } from '../data/Filter'

export default {
  name: 'FilterShop',
  props: ['filter'],
  data () {
    return {
      isActive: false,
      searchName: '',
      filterData
    }
  },
  methods: {
    addSearchCategory (e) {
      this.filter.category = e
    },
    addSearchPrice (e) {
      this.filter.price = e
    },
    addSearchRating (e) {
      this.filter.ratting = e
    },
    search () {
      this.filter.name = this.searchName
      this.$emit('update-search', this.filter)
    },
    clearFilter () {
      this.filter.name = ''
      this.filter.category = ''
      this.filter.price = 0
      this.filter.ratting = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search-input {
    width: 70%;
    height: 50px;
  }
  .filter-box {
    margin-bottom: 50px;
  }
  .table {
    display: none;
  }
  .active {
    display: inline-table;
  }
</style>
