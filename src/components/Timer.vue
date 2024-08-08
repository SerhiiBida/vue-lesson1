<!--Завдання 8: Створіть обробники подій, які реагують на події кліку та змінюють стан вашого об'єкта Vue.-->
<template>
  <div>
    <p>
      {{ seconds }}
    </p>
    <button ref="start" @click="startTimer">
      Start
    </button>
    <button ref="stop" @click="stopTimer" disabled>
      Stop
    </button>
  </div>
</template>

<script>
export default {
  name: "Timer",
  data() {
    return {
      seconds: 0,
      timerId: null
    }
  },
  methods: {
    startTimer(event) {
      this.timerId = setInterval(() => this.seconds++, 1000);

      this.$refs.stop.disabled = false;
      event.target.disabled = true;
    },
    stopTimer(event) {
      clearInterval(this.timerId);

      this.seconds = 0;

      this.$refs.start.disabled = false;
      event.target.disabled = true;
    }
  }
}
</script>

<style scoped>
* {
  font-size: 24px;
}
</style>