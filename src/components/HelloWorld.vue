<!--Завдання 5: Створіть окремий файл з компонентом, зареєструйте та додайте до проєкту.-->
<template>
  <p class="title">
    {{ title }}
  </p>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: 'Hello World',
    }
  },
}
</script>

<style scoped>
.title {
  color: red;
}
</style>