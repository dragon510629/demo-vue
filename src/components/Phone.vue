<template>
  <div>
    <div class="bg-info">
      <h1>Phone</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 product" v-for="product in filteredProducts" v-bind:key="product.id">
          <a href="#">{{product.name}}</a>
          <img class="phone-img" src="../assets/image/iphone-12-mini.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { productsMixin } from '../productMixin'

export default {
  name: 'Phone',
  mixins: [productsMixin],
  data () {
    return {
      products: JSON.parse(localStorage.getItem('phone')),
      filterProducts: 'Pro'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .phone-img{
    max-width: 100%;
  }
</style>
