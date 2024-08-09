import {options} from './js/loadingComponents.js'

const {loadModule} = window['vue3-sfc-loader'];

// Завдання 2: Створіть основний об'єкт Vue і прив'яжіть його до деякого елементу HTML на вашій сторінці.
const App = {
    name: 'App',
    data() {
        return {
            header: 'Welcome!'
        }
    },
    components: {
        'Counter': Vue.defineAsyncComponent(() => loadModule('./src/components/Counter.vue', options))
    },
    template: `
        <header>
            <!--Завдання 3: Створіть змінну в об'єкті Vue і виведіть її значення на сторінці.-->
            <h1>
                {{ header }}
            </h1>
        </header>
    
        <main>
            <!--Завдання 4: Додайте в існуючий проект кнопку, яка буде змінювати значення вашої змінної в об'єкті Vue при кожному кліку.-->
            <Counter/>
            <div id="components">
            
            </div>
        </main>
    `
};

Vue.createApp(App).mount('#app');


// Завдання 10: Передайте данні від основного об'єкта до другорядного.
const {reactive} = Vue;

export const numberApp = reactive({
    count: 15
})