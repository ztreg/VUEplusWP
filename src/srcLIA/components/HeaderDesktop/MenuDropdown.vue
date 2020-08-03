<template>
  <q-btn-dropdown
    role="tab"
    flat
    :label="label"
    :outline="false"
    :ripple="false"
    class="headNavDrop"
    v-bind:class="{ 'q-hoverable': false}"
    no-caps
    @click="menuItemClick(labelPath)"
    v-model="menu"
    @mouseenter.native="menuOver = true"
    @mouseleave.native="menuOver = false"
  >
    <q-list
      class="headNavDropList"
      @mouseover.native="listOver = true"
      @mouseout.native="listOver = false"
      v-bind:key="menuItems.indexOf(menuItem)"
      v-for="menuItem in menuItems"
    >
      <q-item v-if="!menuItem.hide" clickable v-close-popup @click="menuItemClick(menuItem.path)">
        <q-item-section>
          <q-item-label>{{ menuItem.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
import { debounce } from 'quasar'

export default {
  name: 'MenuDropdown',
  props: {
    label: String,
    labelPath: String,
    menuItems: Array
  },
  data() {
    return {
      menu: false,
      menuOver: false,
      listOver: false,
      isActive: false
    }
  },
  methods: {
    debounceFunc: debounce(function() { this.checkMenu() }, 50),
    debounceFuncTwo: debounce(function() { this.checkMenu() }, 50),
    checkMenu () {
      if (this.menuOver || this.listOver) {
        this.menu = true
      }
      else {
        this.menu = false
      }
    },
    menuItemClick (targetPath) {
      this.menu = false
      this.menuOver = false
      this.listOver = false
      if (targetPath !== this.$router.currentRoute.path) {
        this.$router.push({ path: targetPath })
      } else {
        this.$root.$emit('samePageClick')
      }
    }
  },
  watch: {
    menuOver (val) {
      if (val) {
        this.debounceFunc()
      } else {
        this.debounceFuncTwo()
      }
    },
    listOver (val) {
      if (val) {
        this.debounceFunc()
      } else {
        this.debounceFuncTwo()
      }
    }
  }
};
</script>
