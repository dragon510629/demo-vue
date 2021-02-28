<template>
  <div>
    <div class="bg-info">
      <h1>Laptop</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 product" v-for="product in filteredProducts" v-bind:key="product.id">
          <a href="#">{{product.name}}</a>
          <img class="laptop-img" src="../assets/image/laptop.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productsMixin } from '../productMixin'

export default {
  name: 'Product',
  mixins: [productsMixin],
  data () {
    return {
      products: JSON.parse(localStorage.getItem('laptop')),
      filterProducts: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .laptop-img{
    max-width: 100%;
  }
</style>
