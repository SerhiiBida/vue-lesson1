// Завдання 2: Створіть основний об'єкт Vue і прив'яжіть його до деякого елементу HTML на вашій сторінці.
const App = {
    name: 'App',
    data() {
        return {
            header: 'Welcome!'
        }
    }
};

Vue.createApp(App).mount('#app');