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
