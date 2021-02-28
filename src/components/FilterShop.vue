<template>
  <div>
    <div class="container filter-box">
      <input class="search-input" placeholder="Nhập từ khoá cần tìm" role="searchbox" aria-label="Search" value="">
      <button class="btn btn-info" @click="search">
        Search
      </button>
      <button class="btn btn-outline-info" @click="isActive = !isActive">
        Filter
      </button>
    </div>
    <table class="table" :class="{ 'active': isActive }">
      <thead>
      <tr>
        <th scope="col">Category</th>
        <th scope="col">Price</th>
        <th scope="col">Rating</th>
      </tr>
      </thead>
      <tbody>
          <tr>
            <td><button class="btn btn-info">Dell</button></td>
            <td><button class="btn btn-info">Iphone</button></td>
            <td><button class="btn btn-info">Iphone</button></td>
          </tr>
          <tr>
            <td><button class="btn btn-info">Iphone</button></td>
            <td><button class="btn btn-info">Thornton</button></td>
            <td><button class="btn btn-info">2</button></td>
          </tr>
          <tr>
            <td><button class="btn btn-info">MSI</button></td>
            <td><button class="btn btn-info">Thornton</button></td>
            <td><button class="btn btn-info">3</button></td>
          </tr>
          <tr>
            <td><button class="btn btn-info">Hp</button></td>
            <td><button class="btn btn-info">Thornton</button></td>
            <td><button class="btn btn-info">4</button></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td><button class="btn btn-info">5</button></td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'FilterShop',
  props: ['filter'],
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    search () {
      console.log(this.filter)
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
