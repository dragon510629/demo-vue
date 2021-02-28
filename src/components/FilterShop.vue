<template>
  <div>
    <div class="container filter-box">
      <input class="search-input" placeholder="Nhập từ khoá cần tìm" role="searchbox" aria-label="Search" value="">
      <button class="btn btn-info">
        Search
      </button>
      <button class="btn btn-outline-info">
        Filter
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterShop',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
</style>
