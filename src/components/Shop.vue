<template>
  <div>
    <div class="logo">
      <img src="../assets/image/lisa.jpg" alt="">
    </div>
    <FilterShop></FilterShop>
    <Products></Products>
    <Phone></Phone>
  </div>
</template>

<script>
import Products from './Products'
import FilterShop from './FilterShop'
import Phone from './Phone'

export default {
  name: 'Shop',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Products,
    FilterShop: FilterShop,
    Phone
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo {
    margin-bottom: 50px;
  }
</style>
