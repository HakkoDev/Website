import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";
import icon from 'astro-icon';

export default defineConfig({
    integrations: [react(), icon()],
    build: {
        assets: '_nd'
    },
    output: "static",
    site: 'https://ndcore.dev',
    // redirects: {
    //     '/discord': {
    //         status: 302,
    //         destination: 'https://discord.gg/andys-development-857672921912836116'
    //     },
    //     '/hosting': {
    //         status: 302,
    //         destination: "https://prism-host.com"
    //     },
    //     '/store': {
    //         status: 302,
    //         destination: "https://andyyy.tebex.io"
    //     }
    // },
    vite: {
        plugins: [tailwindcss()],
    }
});