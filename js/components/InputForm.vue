<!--Завдання 6: Створіть форму вводу тексту та зв'яжіть введене значення з властивістю об'єкта Vue. Виведіть введений текст на сторінці.-->
<template>
  <form action="#">
    <p>
      {{ text }}
    </p>
    <label for="text">
      Text
    </label>
    <input v-model="text" type="text" name="text" id="text">
  </form>
</template>

<script>
export default {
  name: 'InputForm',
  data() {
    return {
      text: ''
    }
  }
}
</script>

<style scoped>
form {
  font-size: 24px;
}
</style>