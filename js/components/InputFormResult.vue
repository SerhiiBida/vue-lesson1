<!--Завдання 7: Створіть ще один окремий файл з компонентом, зареєструйте та використуйте його у існуючему компоненті.-->
<template>
  <p>
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "InputFormResult",
  props: {
    text: String
  }
}
</script>

<style scoped>
p {
  color: blue;
}
</style>