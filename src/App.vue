<template>
  <Navbar
  @getSearch="search = $event"
  :lang="lang"
  @changeLang="changeLang"
  />
  <Content
    :itemList="filterItemList"
    @changeItem="changeItem"
    @deleteItem="deleteItem"
    :lang="lang"
  />
  <Modal
    v-show="modalOpenOrClose"
    @modalClose="modalClose"
    @addItem="addItem"
    :currentId="currentId"
    :edit="edit"
    :itemObj="itemObj"
    @editItem="editItem"
    :lang="lang"
  />
  <AddBtn
    @modalOpen="modalOpen"
  />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Content from '@/components/Content.vue'
import Modal from '@/components/Modal.vue'
import AddBtn from '@/components/AddBtn.vue'
import langs from '@/langs.js'
export default {
  components: {Navbar,Content,Modal,AddBtn},
  data() {
    return {
      modalOpenOrClose: false,
      itemList: [],
      currentId: 1,
      edit: false,
      itemObj: {},
      search: '',
      lang: 'ru',
      langsWord: {}
    }
  },
  computed:{
    filterItemList(){
      return this.search ? this.itemList.filter(item => item.title.toLowerCase().includes(this.search.toLowerCase())) : this.itemList
    }
  },
  methods: {
    changeLang(value){
      this.lang  = localStorage.lang = value
    },
    modalOpen(bool){
      this.modalOpenOrClose = bool
      this.edit = false
    },
    modalClose(bool){
      this.edit = this.modalOpenOrClose = !bool
    },
    addItem(item){
      this.itemList.push(item)
    },
    getLocalList(){
      const localList = localStorage.itemList
      if(localList){
        this.itemList = JSON.parse(localList)
        this.currentId = localStorage.itemId
        this.currentId++
      }
    },
    changeItem(id){
      this.edit = this.modalOpenOrClose = true
      let obj = this.itemList.find(item => item.id == id)
      this.itemObj = obj
    },
    deleteItem(id){
      this.itemList = this.itemList.filter(item => item.id != id)
    },
    editItem(itemObjEdited){
      this.itemList.forEach(item => {
        if(item.id == itemObjEdited.id){
          item.title = itemObjEdited.title
          item.desc = itemObjEdited.desc
          item.date = itemObjEdited.date
        }
      })
    }
  },
  created() {
    this.getLocalList()
    localStorage.lang = localStorage.lang || 'ru'
    this.lang = localStorage.lang || 'ru'
    this.langsWord = langs
    localStorage.words = JSON.stringify(this.langsWord)
  },
  provide(){
    return{
      words: JSON.parse(localStorage.words)
    }
  },
  watch: {
    itemList: {
      handler(list){
        console.log(list);
        localStorage.setItem('itemList', JSON.stringify(this.itemList))
      },
      deep: true
    }
  }
}
</script>