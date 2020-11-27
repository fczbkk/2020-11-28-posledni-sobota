<template>
  <h1>Transition</h1>

  <p><label>
    <input type="checkbox" v-model="isVisible" />
    toggle visibility
  </label></p>

  <transition name="fade" mode="out-in">
    <div class="bigBlock" v-if="isVisible">Now you see me...</div>
    <div class="bigBlock" v-else>...now you don't.</div>
  </transition>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const isVisible = ref(true)

    return {
      isVisible
    }
  }
}
</script>

<style scoped>
  .bigBlock {
    width: 10rem;
    height: 10rem;
    line-height: 10rem;
    font-weight: bold;
    text-align: center;
    background: #f00;
    color: #fff;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
</style>
