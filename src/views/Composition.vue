<template>
  <h1>Composition API</h1>
  <p><input type="number" v-model="single"></p>
  <p>{{ single }}, {{ double }}, {{ triple }}, {{ quadruple }}</p>
</template>

<script>
import {ref, computed, watchEffect, watch} from 'vue'

export default {
  setup () {
    const single = ref(0)

    const double = computed(() => single.value * 2)

    const triple = ref(0)
    watchEffect(() => triple.value = single.value * 3)

    const quadruple = ref(0)
    watch([single], () => quadruple.value = single.value * 4)

    return {
      single,
      double,
      triple,
      quadruple
    }
  }
}
</script>
