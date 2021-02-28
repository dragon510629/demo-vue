export const productsMixin = {
  data () {
    return {
    }
  },
  computed: {
    filteredProducts () {
      return this.products.filter((element) => {
        return element.name.match(this.filterProducts)
      })
    }
  }
}
