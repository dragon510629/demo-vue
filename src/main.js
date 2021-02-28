// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

const productsLaptop = [
  {
    id: 1,
    name: 'Laptop Lenovo Ideapad S340-13IML- 81UM004SVN ( 13.3" Full HD/Intel Core i5-10210U/8GB/512GB',
    price: '14990000',
    img: ''
  },
  {
    id: 2,
    name: 'Laptop Dell Inspiron 15 (N3501C-P90F002N3501C) ( 15.6" Full HD/Intel Core i3-1115G4/4GB/256GB SSD/Windows 10 Home SL 64-bit/2kg)',
    price: '11990000',
    img: ''
  },
  {
    id: 3,
    name: 'Laptop Dell Vostro 15 (3500-7G3982) ( 15.6" Full HD/Intel Core i7-1165G7/8GB/512GB SSD/NVIDIA GeForce MX330/Windows 10 Home SL 64-bit/1.8kg)',
    price: '21490000',
    img: ''
  },
  {
    id: 4,
    name: 'Laptop Dell Vostro 15 (3500-7G3981) ( 15.6" Full HD/Intel Core i5-1135G7/8GB/256GB SSD/Windows 10 Home SL 64-bit/1.8kg)',
    price: '15090000',
    img: ''
  },
  {
    id: 5,
    name: 'Laptop Dell Vostro 14 (3400-YX51W1) ( 14" Full HD/Intel Core i5-1135G7/4GB/256GB SSD/NVIDIA GeForce MX330/Windows 10 Home SL 64-bit/1.6kg)',
    price: '16490000',
    img: ''
  },
  {
    id: 6,
    name: 'Laptop HP 15s-du1055TU (1W7P3PA) ( 15.6" HD/Intel Pentium Gold 6405U/4GB/256GB SSD/Windows 10 Home SL 64-bit/1.8kg)',
    price: '7990000',
    img: ''
  },
  {
    id: 7,
    name: 'Laptop MSI Modern 14 B10MW 427VN ( 14" Full HD/Intel Core i3-10110U/8GB/256GB SSD/Windows 10 Home 64-bit/1.3kg)',
    price: '13990000',
    img: ''
  },
  {
    id: 8,
    name: 'Laptop MSI Modern 15 A11M 200VN ( 15.6" Full HD/Intel Core i5-1135G7/8GB/512GB SSD/Windows 10 Home 64-bit/1.6kg)',
    price: '18990000',
    img: ''
  }
]

const productsPhone = [
  {
    id: 1,
    name: 'iPhone 12 Pro Max Chính Hãng (VN/A)',
    price: '30590000',
    img: 'iphone-12-256.jpg'
  },
  {
    id: 2,
    name: 'iPhone 12 Chính Hãng (VN/A)',
    price: '21400000',
    img: '../assets/image/iphone-12-512.jpg'
  },
  {
    id: 3,
    name: 'iPhone 12 Pro Chính Hãng (VN/A)',
    price: '27500000',
    img: '../assets/image/iphone-12.jpg'
  },
  {
    id: 4,
    name: 'iPhone 12 mini Chính hãng (VN/A)',
    price: '17690000',
    img: '../assets/image/iphone-12-mini.jpg'
  }
]
localStorage.setItem('laptop', JSON.stringify(productsLaptop))
localStorage.setItem('phone', JSON.stringify(productsPhone))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
