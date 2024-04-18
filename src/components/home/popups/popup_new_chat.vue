<template>
    <div class="new-chat-popup-shadow">
        <div class="new-chat-popup">
            <div class="new-chat-header">
                <text>Создание нового чата</text>
                <text @click="setEmit()" class="new-chat-close">Close</text>
            </div>
            <div class="new-chat-body">
                <div class="new-chat-input">
                    <h2>Номер договора</h2>
                    <input type="text" placeholder="Номер договора" name="" id="">
                </div>
                <div class="new-chat-input">
                    <h2>Тема чата</h2>
                    <select name="Тема чатов" id="">
                        <option value="" class="bg-first-group">Услуга не работает</option>
                        <option value="" class="bg-first-group">Деградация услуги</option>
                        <option value="" class="bg-first-group">Услуга работает, нужен доп. сервис</option>
                        <option value="" class="bg-sec-group">Возобновление услуги</option>
                        <option value="" class="bg-sec-group">Смена тарифного плана</option>
                        <option value="" class="bg-sec-group">Приостановка услуги</option>
                        <option value="" class="bg-sec-group">Расторжение</option>
                        <option value="" class="bg-third-group">Акт сверки (для юр.лиц)</option>
                        <option value="" class="bg-third-group">Восстановление документов (для юр.лиц)</option>
                        <option value="" class="bg-third-group">Изменение реквизитов в расчетных документах (для юр.лиц)</option>
                        <option value="" class="bg-third-group">Переоформление (для юр.лиц)</option>
                        <option value="" class="bg-third-group">Изменение адреса доставки расчетныз документов (для юр.лиц)</option>
                        <option value="" class="bg-third-group">Возврат денежных средств</option>
                        <option value="" class="bg-third-group">Перерасчет</option>
                        <option value="" class="bg-third-group">Отправка счета на оплату</option>
                        <option value="" class="bg-third-group">Платежное поручение (для юр.лиц)</option>
                        <option value="" class="bg-third-group">Гарантийное письмо (для юр.лиц)</option>
                        <option value="" class="bg-third-group">Оплата не проведена</option>
                        <option value="">Консультация</option>
                    </select>
                </div>
                <div class="new-chat-input">
                    <h2>Сообщение</h2>
                    <input type="text" placeholder="Сообщение" name="" id="" class="new-chat-message">
                </div>
            </div>
            <div class="new-chat-do">
                <button>Создать чат</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineEmits} from 'vue';
const emit = defineEmits(['test']);

function setEmit(){
    emit('test', false);
}
</script>

<style scoped lang="scss">
.new-chat-popup-shadow{
    position: fixed;
    top:      0;
    left:     0;
    width:    100vw;
    height:   100vh;
    z-index:  10;
    background-color: rgba(128, 128, 128, 0.466);
    .new-chat-popup{
        z-index:   21;
        border:    1px solid white;
        position:  fixed;
        top:       50%;
        left:      50%;
        transform: translate(-50%, -50%);
        padding:   8px 16px;
        width:     900px;
        height:    300px;
        display:   grid;
        grid-template-rows: 10% 1fr 10%;
        background-color:  white;
        .new-chat-header{
            display:         flex;
            flex-direction:  row;
            justify-content: space-between;
            border-bottom:   1px solid black;
            font-size:       var(--text-size-18);
            .new-chat-close:hover {
                color: var(--color-hover-active);
            }
        }
        .new-chat-body{
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            font-size: var(--text-size-16);
            .new-chat-input{
                display: flex;
                justify-content: space-between;
                h2 {
                    font-size: var(--text-size-18);
                    font-weight: 400;
                }
                input {
                    width: 50%;
                    padding: 0px;
                    margin: 0;
                }
                input:focus {
                    outline: none;
                }
                select:focus {
                    outline: none;
                }
                select {
                    color: rgb(0, 0, 0, 0.7);
                    width: 50%;
                    .bg-first-group {
                        background-color: rgb(80,200,120, 0.5);
                    }
                    .bg-sec-group {
                        background-color: rgb(48,186,143, 0.5);
                    }
                    .bg-third-group {
                        background-color: rgb(189,236,182, 0.5);
                    }
                }
            }
        }
        .new-chat-do{
            font-size:       var(--text-size-16);
            display:         flex;
            justify-content: right;
            align-items:     center;
            button{
                width: 30%;
                height: 30px;
                background-color: var(--color-hover-active);
                color: white;
                border: none;
                border-radius: 5px;
            }
            button:hover {
                background-color: #00693E;
            }
        }
    }
}
</style>