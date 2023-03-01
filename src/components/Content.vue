<template>
  <div class="content container">
    <div class="content-top">
      <h3 class="content-top__title">{{words.contentTitle[lang]}}</h3>
      <button class="content-top__toggle" @click="grid = !grid">
        <img src="@/assets/images/grid.png" alt="" v-if="grid">
        <img src="@/assets/images/list.png" alt="" v-else>
        <span>{{!grid ? words.list[lang] : words.grid[lang]}}</span>
      </button>
    </div>
    <div class="content-items" :class="grid ? 'flex' : 'grid'">
      <Item
        v-for="(item, index) in itemList"
        :key="index"
        :item="item"
        @changeItem="$emit('changeItem', item.id)"
        @deleteItem="$emit('deleteItem', item.id)"
        :grid="grid"
        :lang="lang"
      />
    </div>
  </div>
</template>

<script>
import Item from '@/components/Item.vue'
export default {
  props: ['itemList', 'lang'],
  inject: ['words'],
  components: {Item},
  data() {
    return {
      grid: false
    }
  },
}
</script>

<style>

</style>