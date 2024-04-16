<template>
<div class="text-area">
    <div class="message-history">
        <div class="chat" id="chat_scroll">
            <chat_window />
        </div>
        <div class="text-input">
            <textarea v-model="message"></textarea>
            <div class="buttons">
                <div>
                    <text v-if="button_name_visible[0]">Отправить сообщение</text>
                    <Icon 
                        @mouseover="button_name_visible[0] = true"
                        @mouseleave="button_name_visible[0] = false"
                        class="button-icon" icon="fluent:send-28-filled"
                    />
                </div>
                <div>
                    <text v-if="button_name_visible[1]">Добавить "Ваш вопрос решен?"</text>
                    <Icon
                        @mouseover="button_name_visible[1] = true"
                        @mouseleave="button_name_visible[1] = false" 
                        @click="message = message + 'Ваш вопрос решён?'"
                        class="button-icon" icon="fluent-mdl2:search-issue"
                    />
                </div>
                <div>
                    <text v-if="button_name_visible[2]">Добавить "ИО"</text>
                    <Icon
                        @mouseover="button_name_visible[2] = true"
                        @mouseleave="button_name_visible[2] = false"
                        @click="message = message + store.chat_name + store.chat_number"
                        class="button-icon" icon="ic:round-plus"
                    />
                </div>
                <div>
                    <text v-if="button_name_visible[3]">Установить напоминание</text>
                    <Icon
                        @mouseover="button_name_visible[3] = true"
                        @mouseleave="button_name_visible[3] = false"
                        @click="notification = !notification"
                        :class="{NotificationActive: notification}" 
                        class="button-icon" icon="carbon:reminder"
                    />
                </div>
            </div>
        </div>
    </div>
    <div class="templates-info">
        <Info_and_templates />
    </div>
</div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import { Icon } from '@iconify/vue';
import {useCounterStore} from '@/store/';
import Info_and_templates from './right_pannel/Info_and_templates.vue';
import chat_window from './chat/chat_window.vue';

//Определяемые переменные
const store = useCounterStore().chat_info;

//Изменяемые переменные
const notification = ref(false);
const message = ref('');
const button_name_visible = ref([false, false, false, false]);

onMounted(() => {document.getElementById('chat_scroll').scrollTo(0, 1999999999);});
</script>

<style scoped lang="scss">
.text-area{
    height:          100%;
    display:         flex;
    flex-direction:  row;
    justify-content: space-between;
    .message-history{
        width:   74%;
        display: grid;
        grid-template-rows: 1fr 15%;
        .chat{
            border:     1px solid var(--color-element-child);
            text-align: left;
            padding:    8px 16px;
            overflow-y:   scroll;
            border-radius: 6px;
        }
        .text-input{
            display:     flex;
            align-items: flex-end;
            justify-content: left;
            textarea{
                width:   95%;
                height:  90%;
                outline: none;
                resize:  none;
                padding: 4px 8px;
                border:  1px solid var(--color-element-child);
            }
            .buttons{
                height:          95%;
                width:           5%;
                display:         flex;
                flex-direction:  column;
                justify-content: space-between;
                align-items:     center;
                div{
                    display:     flex;
                    align-items: center;
                    position:    relative;
                    justify-content: center;
                    text{
                        position: absolute;
                        top:      0;
                        left:     150%;
                        border:   1px solid #7e96ac33;
                        padding:  4px 8px;
                        z-index:  999;
                        width:    200px;
                        border-radius: 6px;
                        backdrop-filter: blur(10px);
                    }
                }
                .button-icon{
                    font-size: var(--text-size-24);
                    &:hover{
                        color:  var(--color-hover-active);
                        cursor: pointer;
                    }
                    &:active{color: var(--color-description)}
                }
                .NotificationActive{color: var(--color-hover-active);}
            }
        }
    }
    .templates-info{
        width:            25%;
        border-radius:    6px 6px 0px 0px;
        background-color: var(--color-element);
    }
}
</style>