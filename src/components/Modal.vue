<template>
  <Transition name="scale">
    <div class="modal" @click="modalClose">
      <div class="modal-item" @click.stop="">
        <h3 class="modal-item__title" v-if="!edit">{{ words.modalTitle[lang] }}</h3>
        <h3 class="modal-item__title" v-else>{{ words.modalTitleEdit[lang] }}</h3>
        {{ editinfo }}
        <label class="modal-item__input">
          <span>Title</span>
          <input type="text" placeholder="Tile" v-model="title">
        </label>
        <label class="modal-item__input">
          <span>Content</span>
          <input type="text" placeholder="Content" v-model="desc">
        </label>
        <div class="modal-item__btns">
      <button class="modal-btn btn-cancel" @click="modalClose">{{ words.cancelBtn[lang] }}</button>
          <button class="modal-btn btn-add" @click="addItem" v-if="!edit">{{ words.addBtn[lang] }}</button>
          <button class="modal-btn btn-add" @click="editItem" v-else>{{ words.changeBtn[lang] }}</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: ['currentId', 'edit', 'itemObj', 'lang'],
  inject: ['words'],
  data() {
    return {
      title: '',
      desc: '',
      id: this.currentId
    }
  },
  computed: {
    editinfo(){
      if(this.edit){
        this.title = this.itemObj.title
        this.desc = this.itemObj.desc
      }else{
        this.title = ''
        this.desc = ''
      }
    }
  },
  methods: {
    modalClose(){
      this.$emit('modalClose', true)
      this.title = ''
      this.desc = ''
    },
    addItem(){
      if(this.title != '' && this.desc != ''){
        localStorage.itemId = this.id
        const item = {
          id: this.id++,
          title: this.title,
          desc: this.desc,
          date: new Date().toLocaleDateString()
        }
        this.$emit('addItem', item)
        this.title = '';
        this.desc = '';
        this.modalClose()

      }
    },
    editItem(){
      if(this.title != '' && this.desc != ''){
        const itemEditObj = {
          id: this.itemObj.id,
          title: this.title,
          desc: this.desc,
          date: new Date().toLocaleDateString()
        }
        this.$emit('editItem', itemEditObj)
        this.modalClose()
      }
    }
  },
}
</script>
