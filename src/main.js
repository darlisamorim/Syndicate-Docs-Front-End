// Vue Imports
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Global Style
import './base.css'

// Construct
const app = createApp(App)

// Use Routers
app.use(router)

app.mount('#app')
