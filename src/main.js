/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
// import "assets/reset.css";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Composables
import { createApp } from 'vue'


const app = createApp(App)

registerPlugins(app)

app.mount('#app')

import './assets/global.scss'; // Import the global SCSS file