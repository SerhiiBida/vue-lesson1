<!--Завдання 6: Створіть форму вводу тексту та зв'яжіть введене значення з властивістю об'єкта Vue. Виведіть введений текст на сторінці.-->
<template>
  <form action="#">
    <InputFormResult :text="text"/>
    <label for="text">
      Text
    </label>
    <input v-model="text" type="text" name="text" id="text">
  </form>
</template>

<script>
import InputFormResult from './InputFormResult.vue'

export default {
  name: 'InputForm',
  data() {
    return {
      text: ''
    }
  },
  components: {
    InputFormResult
  }
}
</script>

<style scoped>
form {
  font-size: 24px;
}
</style>