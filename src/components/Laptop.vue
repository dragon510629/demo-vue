<template>
  <div>
    <div class="bg-info">
      <h1>Laptop 12345</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 product" v-for="product in filteredProducts" v-bind:key="product.id">
          <a href="#">{{product.name}}</a>
          <img class="laptop-img" src="../assets/image/laptop.jpg" alt="">
          <p>{{product.price | priceVn }}</p>
          <div>
            <h2>Star Rating</h2>
            <div v-html="rating(product.Rating)">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productsMixin } from '../productMixin'

export default {
  name: 'Product',
  props: ['filter'],
  mixins: [productsMixin],
  data () {
    return {
      products: JSON.parse(localStorage.getItem('laptop')),
      filterProductsName: this.filter.name,
      filterProductsCategory: this.filter.category,
      filterProductsPrice: this.filter.price,
      filterProductsRatting: this.filter.ratting
    }
  },
  watch: {
    'filter.name': function (newValue) {
      this.filterProductsName = newValue
    },
    'filter.category': function (newValue) {
      this.filterProductsCategory = newValue
    },
    'filter.price': function (newValue) {
      this.filterProductsPrice = newValue
    },
    'filter.ratting': function (newValue) {
      this.filterProductsRatting = newValue
    }
  },
  methods: {
    rating: (value) => {
      let html = ''
      for (let i = 0; i < value; i++) {
        html = html + '<span class="fa fa-star" style="color: orange"></span>'
      }

      for (let i = 0; i < 5 - value; i++) {
        html = html + '<span class="fa fa-star"></span>'
      }

      return html
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
