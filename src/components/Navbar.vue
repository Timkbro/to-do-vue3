<template>
  <nav class="navbar">
    <div class="navbar-nav container" v-if="!navbar">
      <button class="btn-lang navbar-btn" @click="changeLang" v-if="lang == 'en'">Ru</button>
      <button class="btn-lang navbar-btn" @click="changeLang" v-else>En</button>
        <h1 class="navbar-nav__title" >{{words.navbarTitle[lang]}}</h1>
      <button class="btn-search navbar-btn" @click="navbar = !navbar, search = ''">
        <img src="@/assets/images/search.png" alt="">
      </button>
    </div>
    <div class="navbar-search container" v-else>
      <button class="btn-back navbar-btn" @click="navbar = !navbar">
        <img src="@/assets/images/back.svg" alt="">
      </button>
      <input type="text" :placeholder="words.navbarSearch[lang]" class="navbar-search__input" v-model="search">
      <button class="btn-clear navbar-btn" @click="search = ''">
        <img src="@/assets/images/clear.svg" alt="">
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['lang'],
  inject: ['words'],
  data() {
    return {
      navbar: false,
      search: ''
    }
  },
  watch: {
    search(value){
      this.$emit('getSearch', value)
      console.log(value)
    }
  },
  methods:{
    changeLang(){
      this.$emit('changeLang', this.lang == 'ru' ? 'en' : 'ru')
    }
  }
}
</script>
