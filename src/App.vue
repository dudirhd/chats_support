<template>
<nav v-if="store.isLogined">
  <div class="inner-nav">
    <text class="platform-name">Чат поддержки</text>
    <div class="menus">
      <text class="title" @click="menus[0] = !menus[0], menus[1] = false, menus[2] = false">Чаты</text>
      <text class="title" @click="menus[1] = !menus[1], menus[0] = false, menus[2] = false">Инструменты</text>
      <text class="title" @click="menus[2] = !menus[2], menus[0] = false, menus[1] = false">Информация</text>
      
      <div class="elements" v-if="(menus[0] || menus[1] || menus[2]) != false">
        <div style="grid-column: 1" v-if="menus[0]">
          <span @click="$router.push('/home'), menus[0] = false">Чаты</span>
          <span @click="somevalue = true, menus[0] = false">Новый чат</span>
          <span @click="$router.push('/chatbot'), menus[0] = false">Чат бот</span>
          <span @click="menus[0] = false">Выгрузка чатов</span>
          <span @click="$router.push('/search'), menus[0] = false">Поиск чатов</span>
        </div>

        <div style="grid-column: 2" v-if="menus[1]">
          <span>Онлайн монитор</span>
          <span>Онлайн монитор корзина</span>
          <span>Автооповещение</span>
          <span>Автоинформатор</span>
        </div>
        
        <div style="grid-column: 3" v-if="menus[2]">
          <span>Скорость ответа 1\2</span>
          <span>Заявки БТУ</span>
          <span>Оценки</span>
          <span>Автоинформатор статистика</span>
          <span>Статистика по операторам 1\2</span>
        </div>
      </div>
    </div>
    <div class="user-info">Админ</div>
    <popup_new_chat v-if="somevalue" @test="(i) => {somevalue = i}" />
  </div>
</nav>
<router-view/>
</template>

<script setup>
import {ref} from 'vue';
import { useCounterStore } from '@/store';
import popup_new_chat from '@/components/home/popups/popup_new_chat.vue'
const store = useCounterStore();
const somevalue = ref(false)
const menus = ref([false, false, false]);


</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
*{margin:0; padding:0;}
body{background-color: rgb(255, 255, 255);}

:root{
  --color-text:             #2c3e50;
  --color-element:          #e4f3fa;
  --color-hover-active:     #42b983;
  --color-hover:            #00693E;
  --color-element-child:    #7e96ac;
  --color-element-in-child: #84b8bb;

  --color-link:             #408da7;
  --color-error:            #a74040;
  --color-description:      gray;

  --chat-color-unread:       #f3d3c8;
  --chat-color-atwork:       #ffcf77;
  --chat-color-done:         #8fbc8f;
  --chat-color-user-message: #eaeab4;
  --chat-color-your-message: #f5f5dc;

  --text-size-12:            0.75rem;
  --text-size-14:            0.875rem;
  --text-size-16:            1rem;
  --text-size-18:            1.125rem;
  --text-size-22:            1.375rem;
  --text-size-24:            1.5rem;
}

#app {
  font-family:             "Roboto", sans-serif;
  text-align:              center;
  color:                   var(--color-text);
  -webkit-font-smoothing:  antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media screen and (max-width: 1440px) {nav{width: 1440px}}
nav {
  padding:          15px;
  user-select:      none;
  background-color: var(--color-element);
  position:         relative;
  .inner-nav{
    margin-left:           auto;
    margin-right:          auto;
    display:               grid;
    width:                 1440px;
    grid-template-columns: 26.5% 1fr 19.5%;
    .platform-name{
      grid-column:     1;
      display:         flex;
      font-size:       var(--text-size-16);
      font-weight:     bold;
      justify-content: flex-start;
      align-items:     center;
    }
    .menus{
      font-size:       var(--text-size-16);
      display:         flex;
      justify-content: space-around;
      flex-direction:  row;
      position:        relative;
      .title{
        width: 100px;
        &:hover{
          color:  var(--color-hover-active);
          cursor: pointer;
        }
      }
      .elements{
        position:              absolute;
        width:                 100%;
        top:                   20px;
        display:               grid;
        grid-template-columns: 1fr 1fr 1fr;
        z-index:               20;

        div{
          // width: fit-content;
          padding:         8px 16px;
          border:          1px solid var(--color-element-child);
          backdrop-filter: blur(10px);
          display:         flex;
          flex-direction:  column;
          justify-content: center;
          align-items:     center;
          border-radius:   6px;
          span:hover{
            color: var(--color-hover-active);
          }
        }
      }
    }
    .user-info{
      grid-column:     3;
      display:         flex;
      font-size:       var(--text-size-16);
      font-weight:     bold;
      justify-content: flex-end;
      align-items:     center;
    }
  }
  // a {
  //   font-weight: bold;
  //   color: var(--color-text);

  //   &.router-link-exact-active {
  //     color: var(--color-hover-active);
  //   }
  // }
}

.container{
  width: 100vw;
  .content{
    width:        1440px;
    margin-left:  auto;
    margin-right: auto;
  }
}
</style>
