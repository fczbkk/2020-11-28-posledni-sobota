<template>
  <h1>Teleport</h1>

  <ThePlanet />
  <TheEnterprise />
</template>

<script>
import TheEnterprise from '@/components/TheEnterprise.vue'
import ThePlanet from '@/components/ThePlanet.vue'

export default {
  components: { ThePlanet, TheEnterprise },
}
</script>

<style scoped>
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    flex: 1;
    border: 1px solid red;
  }
</style>
