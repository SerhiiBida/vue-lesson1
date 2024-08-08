import {options} from './js/loadingComponents.js'
import {numberApp} from './main.js'

const {loadModule} = window['vue3-sfc-loader'];

// Завдання 9: Створіть другорядний об'єкт Vue і прив'яжіть його до деякого елементу HTML на вашій сторінці.
// Завдання 10: Передайте данні від основного об'єкта до другорядного.
const Components = {
    name: 'Components',
    data() {
        return {
            numberApp
        }
    },
    components: {
        'HelloWorld': Vue.defineAsyncComponent(() => loadModule('./src/components/HelloWorld.vue', options)),
        'InputForm': Vue.defineAsyncComponent(() => loadModule('./src/components/InputForm.vue', options)),
        'Timer': Vue.defineAsyncComponent(() => loadModule('./src/components/Timer.vue', options))
    },
    template: `
        <div>
            <HelloWorld/>
            <InputForm/>
            <Timer/>
            <h4>
                {{ numberApp.count }}
            </h4>
        </div>
    `
};

Vue.createApp(Components).mount('#components');