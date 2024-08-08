// Завдання 2: Створіть основний об'єкт Vue і прив'яжіть його до деякого елементу HTML на вашій сторінці.
const App = {
    name: 'App',
    data() {
        return {
            header: 'Welcome!',
            counter: 0
        }
    },
    components: {
        'HelloWorld': Vue.defineAsyncComponent(() => loadModule('./js/components/HelloWorld.vue', options))
    },
};

Vue.createApp(App).mount('#app');


// Для загрузки компонентов, если Vue через CDN
const options = {
    moduleCache: {
        vue: Vue
    },
    async getFile(url) {

        const res = await fetch(url);
        if (!res.ok)
            throw Object.assign(new Error(res.statusText + ' ' + url), {res});
        return {
            getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
        }
    },
    addStyle(textContent) {

        const style = Object.assign(document.createElement('style'), {textContent});
        const ref = document.head.getElementsByTagName('style')[0] || null;
        document.head.insertBefore(style, ref);
    },
}

const {loadModule} = window['vue3-sfc-loader'];

// Завдання 5: Створіть окремий файл з компонентом, зареєструйте та додайте до проєкту.
const Components = {
    name: 'Components',
    components: {
        'HelloWorld': Vue.defineAsyncComponent(() => loadModule('./js/components/HelloWorld.vue', options))
    },
    template: `
        <div>
            <HelloWorld/>
        </div>
    `
};

Vue.createApp(Components).mount('#components');