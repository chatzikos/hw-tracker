import { routes } from './routes.js';
import { _ } from '../controllers/_.js';
import '../libs/lucide.js'; 

export const router = {
    async init() {
        await this.render(window.location.hash || '#overview');

        window.addEventListener('hashchange', async () => {
            await this.render(window.location.hash);
        });

    },
    async render(route) {
        const page = routes[route] || routes['#notFound'];

        const response = await fetch(`./app/views/${page.file}`);
        const html = await response.text();
        
        
        document.querySelector('#title').innerText = page.title;
        document.querySelector('#app').innerHTML = html;
        
        if(document.querySelector('[data-lucide]')) {
            lucide.createIcons();
        }   

        _();

        if(typeof(page.onload) === "function") {
            await page.onload();
        }
    }
};

export const redirect = (route) => {
    window.location.hash = route;
}