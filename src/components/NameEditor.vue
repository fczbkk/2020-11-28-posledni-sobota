<template>
  <teleport to=".formValidationMessages">
    <p v-if="!isFirstNameValid" class="warning">
      First name is not valid, it is too long.
      <button @click="firstName = fixField(firstName)">Fix the problem</button>
    </p>
    <p v-if="!isLastNameValid" class="warning">
      Last name is not valid, it is too long.
      <button @click="lastName = fixField(lastName)">Fix the problem</button>
    </p>
  </teleport>

  <p>First name:<br><input type="text" v-model="firstName"></p>
  <p>Last name:<br><input type="text" v-model="lastName"></p>
</template>

<script>
import { isValidField, fixField } from '@/formValidation.js'
import { ref, watch, computed } from 'vue'

export default {
  name: 'NameEditor',
  props: {
    modelValue: String
  },
  setup (props, context) {
    const [firstNameChunk = '', lastNameChunk = ''] = props.modelValue.split(' ')

    const firstName = ref(firstNameChunk)
    const lastName = ref(lastNameChunk)

    watch([firstName, lastName], () => {
      const fullName = [firstName.value, lastName.value].join(' ')
      context.emit('update:modelValue', fullName)
    })

    const isFirstNameValid = computed(() => isValidField(firstName.value))
    const isLastNameValid = computed(() => isValidField(lastName.value))

    return {
      firstName,
      lastName,
      isFirstNameValid,
      isLastNameValid,
      fixField
    }
  }
}
</script>
