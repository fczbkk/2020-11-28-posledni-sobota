<template>
  <p>
    From:
    <input
      type="number"
      :value="from"
      @input="(event) => $emit('update:from', Number(event.target.value))"
    >
  </p>
  <p>
    To:
    <input
      type="number"
      :value="to"
      @input="(event) => $emit('update:to', Number(event.target.value))"
    >
  </p>
</template>

<script>
export default {
  name: 'RangeEditor',
  props: {
    from: Number,
    to: Number
  }
}
</script>
