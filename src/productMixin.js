export const productsMixin = {
  data () {
    return {
    }
  },
  computed: {
    filteredProducts () {
      return this.products.filter((element) => {
        return element.name.toLowerCase().match(this.filterProductsName.toLowerCase()) &&
          (parseInt(element.price.split('.').join('')) < this.filterProductsPrice || this.filterProductsPrice === 0) &&
          element.name.toLowerCase().match(this.filterProductsCategory.toLowerCase()) &&
          (element.Rating === this.filterProductsRatting || this.filterProductsRatting === 0)
      })
    }
  }
}
