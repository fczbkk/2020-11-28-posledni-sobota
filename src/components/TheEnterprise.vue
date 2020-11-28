<template>
  <h2>Enterprise</h2>
  <p>
    <button @click="beamUp()">Beam me up, Scotty</button>
  </p>

  <div class="enterprise"></div>

  <teleport :to="destination">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Jean-Luc_Picard.jpg"
      alt="Jean-Luc Pickard"
      class="pickard"
    >
  </teleport>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TheEnterprise',
  setup () {
    const destination = ref('.planet')
    const beamUp = () => destination.value = '.enterprise'
    return {
      destination,
      beamUp
    }
  }
}
</script>

<style scoped>
  .pickard {
    height: 10rem;
  }
</style>
