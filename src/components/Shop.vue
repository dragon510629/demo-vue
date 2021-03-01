<template>
  <div>
    <div class="logo">
      <img src="../assets/image/lisa.jpg" alt="">
    </div>
    <FilterShop :filter = "filter" @update-search="updateSearch"></FilterShop>
    <Products :filter = "filter"></Products>
    <Phone :filter="filter"></Phone>
  </div>
</template>

<script>
import Products from './Laptop'
import FilterShop from './FilterShop'
import Phone from './Phone'

export default {
  name: 'Shop',
  data () {
    return {
      filter: {
        name: '',
        category: '',
        price: 0,
        ratting: 0
      }
    }
  },
  components: {
    Products,
    FilterShop: FilterShop,
    Phone
  },
  methods: {
    updateSearch (e) {
      this.filter = e
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo {
    margin-bottom: 50px;
  }
</style>
