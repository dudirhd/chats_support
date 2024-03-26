<template>
    <text v-if="!chat_info_store.isSelected">Выберите чат</text>
    <div  class="messages" v-if="chat_info_store.isSelected">
        <message_view 
            v-for    = "i in message_list" :key="i"
            :isYou   = "i.isYou"
            :message = "i.message"
        />
    </div>
</template>

<script setup>
import { useCounterStore } from '@/store';
import message_view from './message_view.vue';

const chat_info_store = useCounterStore().chat_info;
const message_list = useCounterStore().message_list;

</script>

<style scoped lang="scss">
.messages{
    // height:  700px;
    display: flex;
    gap:     10px;
    flex-direction: column;
}
</style>