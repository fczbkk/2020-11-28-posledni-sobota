<template>
  <h1>Home</h1>
  <p>{{ fullName }}, {{ street }}, {{ city }}</p>
  <div class="formValidationMessages"></div>
  <NameEditor v-model="fullName" />
  <AddressEditor v-model:street="street" v-model:city="city" />
</template>

<script>
import AddressEditor from '@/components/AddressEditor.vue'
import NameEditor from '@/components/NameEditor.vue'
import { ref } from 'vue'

export default {
  components: { AddressEditor, NameEditor },
  setup () {
    const fullName = ref('John Doe')
    const street = ref('Under the bridge')
    const city = ref('Praha')
    return {
      fullName,
      street,
      city
    }
  }
}
</script>

<style>
  .warning {
    background: #c00;
    color: #fff;
    padding: 1rem;
  }
</style>
