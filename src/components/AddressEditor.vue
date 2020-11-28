<template>
  <teleport to=".formValidationMessages">
    <p v-if="!isStreetValid" class="warning">
      Street is not valid, it is too long.
      <button @click="streetContent = fixField(streetContent)">Fix the problem</button>
    </p>
  </teleport>

  <p>Street:<br><input type="text" v-model="streetContent"></p>
  <p>City:<br><input type="text" v-model="cityContent"></p>
</template>

<script>
import { isValidField, fixField } from '@/formValidation.js'
import { ref, watch, computed } from 'vue'

export default {
  name: 'AddressEditor',
  props: {
    street: String,
    city: String
  },
  setup (props, context) {
    const streetContent = ref(props.street)
    const cityContent = ref(props.city)

    watch(streetContent, () => context.emit('update:street', streetContent.value))
    watch(cityContent, () => context.emit('update:city', cityContent.value))

    const isStreetValid = computed(() => isValidField(streetContent.value))

    return {
      streetContent,
      cityContent,
      isStreetValid,
      fixField
    }
  }
}
</script>
