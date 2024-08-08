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
      title: 'Hello World'
    }
  },
}
</script>

<style scoped>
.title {
  color: red;
}
</style>