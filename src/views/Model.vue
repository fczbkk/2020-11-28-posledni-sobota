<template>
  <h1>Model</h1>

  <h2>Counter: {{ counter }}</h2>
  <ItemCounter v-model="counter" />

  <h2>Range: {{ from }} - {{ to }}</h2>
  <RangeEditor v-model:from="from" v-model:to="to" />
</template>

<script>
import ItemCounter from '@/components/ItemCounter.vue'
import RangeEditor from '@/components/RangeEditor.vue'
import { ref } from 'vue'

export default {
  components: { RangeEditor, ItemCounter },
  setup () {
    const counter = ref(0)
    const from = ref(0)
    const to = ref(10)

    return { counter, from, to }
  }
}
</script>
