<template>
  <!--Завдання 4: Додайте в існуючий проект кнопку, яка буде змінювати значення вашої змінної в об'єкті Vue при кожному кліку.-->
  <div>
    <h2>
      {{ counter }}
    </h2>
    <button @click="counter--">
      -
    </button>
    <button @click="counter++">
      +
    </button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      counter: 0
    }
  }
}
</script>