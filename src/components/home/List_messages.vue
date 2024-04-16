<template>
<div 
    class="messages" 
    :class="
        [
            {'chapter-unread': chapter == 'unread'}, 
            {'chapter-atwork': chapter == 'atwork'}, 
            {'chapter-done':   chapter == 'done'}
        ]
    "
    @click="
        store.isSelected   = true;
        store.number  = info.message_info.number;
        store.theme        = info.message_info.theme;
        store.status       = info.message_info.status;
        store.last_message = info.message_info.last_message;
        store.dogovor      = info.message_info.dogovor;
        store.login        = info.message_info.login;
        store.chat_name    = info.message_info.name;
        store.phone        = info.message_info.phone;
        store.balance      = info.message_info.balance;
        store.need_to_pay  = info.message_info.need_to_pay;
        store.month_pay    = info.message_info.month_pay;
        store.pay_day      = info.message_info.pay_day;
        store.tarif        = info.message_info.tarif;
        store.tarif_prefix = info.message_info.tarif_prefix;
        store.day_speed    = info.message_info.day_speed;
        store.nigth_speed  = info.message_info.nigth_speed;
        store.app_version  = info.message_info.app_version;
        store.city_bk      = info.message_info.city_bk;
        store.trash        = info.message_info.trash;
    "
>
    <div class="info">
        <span class="chat-number">
            <Icon icon="ph:chats-teardrop-duotone" />
            <text>{{ info.message_info.number }}</text>
        </span>
        &nbsp;
        <span class="chat-manager">
            <Icon icon="solar:link-bold-duotone" />
            <text>{{ info.message_info.name }}</text>
        </span>
        &nbsp;
        <div v-if="info.isBTU.active">{{info.isBTU.name}}</div>
    </div>
    
    <div class="date">{{ info.date }}
    {{ totalVuePackages }}
    </div>
    <div class="count">
        <div class="count-message"><text>{{ info.message_count }}</text></div>
        <div :class="{iconActive: info.done}">   <Icon class="icon" icon="ic:round-done" />   </div>
        <div :class="{iconActive: info.alert}">  <Icon class="icon" icon="ph:bell-duotone" /> </div>
        <div :class="{iconActive: info.timeout}"><Icon class="icon" icon="pajamas:time-out" /></div>
    </div>
</div>
</template>

<script setup>
import {defineProps, ref} from 'vue';
import {Icon} from '@iconify/vue';
import { useCounterStore } from '@/store';
// import axios from 'axios';

defineProps(['chapter', 'info']);

const store = useCounterStore().chat_info;

const totalVuePackages = ref()
// async function created() {
//   // GET request using axios with async/await
//   const headers = {
//     "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:123.0) Gecko/20100101 Firefox/123.0",
//     "Accept": "text/html",
//     "Accept-Language": "en-US,en",
//     "Accept-Encoding": "gzip, deflate, br",
//     "X-Requested-With": "XMLHttpRequest",
//     "Connection": "keep-alive",
//     "Referer": "https://mobile.k-telecom.org/manage/?menu=chats",
//     "Cookie": "_ym_uid=1691741744172397858; _ym_d=1691741744; PHPSESSID=gun1q3467p12fc9pckhrhr8ko7; _ym_debug_build=1093",
//     "Sec-Fetch-Dest": "empty",
//     "Sec-Fetch-Mode": "cors",
//     "Sec-Fetch-Site": "same-origin"
//   };
//    const response = await axios.get("https://mobile.k-telecom.org/manage/?menu=ajgetchatstag20&alarm_id=&selected=false", headers);
//    totalVuePackages.value = response.data;
// }
// const emit = defineEmits(['chat_number'])

// const counts = ref({
//     alert: false,
//     done: false,
//     timeout: false
// })
// onMounted(() => {
//     created()
// })
</script>

<style scoped lang="scss">
.messages{
    display:               grid;
    grid-template-columns: 1fr 15%;
    grid-template-rows:    1fr 1fr;
    border-radius:         6px;
    padding:               4px 8px;
    &:hover{
        cursor:  pointer;
        opacity: .9;
    }
    .info{
        grid-column:     1;
        grid-row:        1;
        display:         flex;
        flex-direction:  row;
        justify-content: left;
        align-items:     center;
        font-size:       var(--text-size-16);
        div{
            color:      rgb(165, 94, 94);
            font-weight: bold;
        }
    }
    .date{
        grid-column:     1;
        grid-row:        2;
        display:         flex;
        flex-direction:  column;
        justify-content: center;
        align-items:     flex-start;
        font-size:       var(--text-size-14);
    }
    .count{
        grid-column:           2;
        grid-row:              1/3;
        display:               flex;
        flex-direction:        column;
        justify-content:       center;
        align-items:           center;
        display:               grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows:    1fr 1fr;
        div{
            display:         flex;
            justify-content: center;
            align-items:     center;
            opacity:         .5;
        }
        .iconActive{opacity: 1;}
        .count-message{
            opacity:          1;
            background-color: #7e96ac79;
            width:            20px;
            height:           20px;
            margin-left:      auto;
            margin-right:     auto;
            border-radius:    6px;
            text{font-size: var(--text-size-12);}
        }
        .no-messages{
            background-color: none;
        }
    }
}
.chapter-unread{background-color: var(--chat-color-unread)}
.chapter-atwork{background-color: var(--chat-color-atwork)}
.chapter-done{background-color: var(--chat-color-done)}
</style>