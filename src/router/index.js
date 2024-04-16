import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import ChatBot from '../views/ChatBot.vue'
import SearchChat from '@/views/SearchChat.vue'
 
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/chatbot',
    name: 'chatbot',
    component: ChatBot
  },
  {
    path: '/search',
    name: 'searchchat',
    component: SearchChat
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
