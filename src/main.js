// Завдання 2: Створіть основний об'єкт Vue і прив'яжіть його до деякого елементу HTML на вашій сторінці.
const App = {
    name: 'App',
    data() {
        return {
            header: 'Welcome!',
            counter: 0
        }
    }
};

Vue.createApp(App).mount('#app');


// Завдання 10: Передайте данні від основного об'єкта до другорядного.
const {reactive} = Vue;

export const numberApp = reactive({
    count: 0
})