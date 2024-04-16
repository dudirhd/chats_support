<template>
<div class="container">
  <div class="content">
    <div class="chats-message">
      <div class="chats">
        <div class="chat-header">
          <div 
            :class="{choosedChat: store.chats_type == 'unread'}"
            @click="store.chats_type = 'unread'"
          >
            Непрочитанные
          </div>
          <div 
            :class="{choosedChat: store.chats_type == 'at_work'}"
            @click="store.chats_type = 'at_work'"
          >
            В работе
          </div>
          <div 
            :class="{choosedChat: store.chats_type == 'done'}"
            @click="store.chats_type = 'done'"
          >
            Архив
          </div>
        </div>
        <div class="chat-body">
          <div class="chat-message" v-if="store.chats_type == 'unread'">
            <List_messages 
              v-for        = "i in list_messages.unread" :key="i"
              :chapter     = "'unread'"
              :info        = "i"
              @chat_number = "(e) => console.log(e)"
            />
          </div>
          <div class="chat-message" v-if="store.chats_type == 'at_work'">
            <List_messages 
              v-for        = "i in list_messages.atwork" :key="i"
              :chapter     = "'atwork'"
              :info        = "i"
              @chat_number = "(e) => console.log(e)"
            />
          </div>
          <div class="chat-message" v-if="store.chats_type == 'done'">
            <List_messages 
              v-for        = "i in list_messages.done" :key="i"
              :chapter     = "'done'"
              :info        = "i"
              @chat_number = "(e) => console.log(e)"
            />
          </div>
        </div>
      </div>
      <div class="message">
        <Chat_and_pannel />
      </div>
    </div>
    <div class="footer">
      version 1.0
    </div>
  </div>
</div>
</template>

<script setup>
import { useCounterStore } from '@/store';
import List_messages from '@/components/home/List_messages.vue';
import Chat_and_pannel from '@/components/home/Chat_and_pannel.vue';

const store = useCounterStore().home;
const list_messages = useCounterStore().list_messages;
</script>

<style scoped lang="scss">
.chats-message{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 90vh;
  margin-top: 20px;
  .chats{
    background-color: var(--color-element);
    width: 25%;
    padding: 8px 16px;
    border-radius: 12px;
    .chat-header{
      user-select: none;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      background-color: var(--color-element-child);
      border-radius: 6px;
      div{
        padding: 4px 8px;
        color: white;
        font-size: var(--text-size-16);
        cursor: pointer;
      }
      .choosedChat{
        background-color: var(--color-hover-active);
        border-radius: 6px;
        font-weight: bold;
      }
    }
    .chat-body{
      margin-top: 10px;
      height: 95%;
      overflow: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none; 
      &::-webkit-scrollbar{
        display: none;
      }
      .chat-message{
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    }
  }
  .message{
    width: 72%;
  }
  .chat-info{
    border: 1px solid black;
  }
}
.footer{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgb(236, 236, 236);
  text-align: left;
  color: rgb(173, 173, 173);
}
</style>