<template>
  <div>
    <button @click="$emit('update:modelValue', modelValue - 1)">-</button>
    {{ modelValue }}
    <button @click="$emit('update:modelValue', modelValue + 1)">+</button>
  </div>
</template>

<script>
export default {
  name: 'ItemCounter',
  props: {
    modelValue: Number
  }
}
</script>

<style scoped>

</style>
