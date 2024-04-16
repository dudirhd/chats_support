<template>
    <div class="container">
        <div class="chatbot-container">
            <h1>Чат-бот</h1>
            <div class="header">
                <div class="buttons">
                    <button class="chatbot-button"><img src="../assets/plus.svg" alt="Плюс">Новая запись</button>
                    <button class="chatbot-button"><img src="../assets/export.svg" alt="Экспорт">Экспорт</button>
                    <button class="chatbot-button"><img src="../assets/export.svg" alt="Экспорт">Экспорт csv</button>
                    <button class="chatbot-button"><img src="../assets/search.svg" alt="Лупа">Поиск</button>
                </div>
                <div class="page-pagination">
                    <ul>
                        <li><Icon icon="radix-icons:double-arrow-left" /></li>
                        <li><Icon icon="ph:arrow-circle-left-fill" /></li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li><Icon icon="ph:arrow-circle-right-fill" /></li>
                        <li><Icon icon="radix-icons:double-arrow-right" /></li>
                    </ul>
                </div>
            </div>
            <div class="chatbot">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>id</th>
                            <th>Параметр</th>
                            <th>Значение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                          v-for="i in storage" :key="i"
                        >
                            <td class="chatbot-button-container">
                                <button class="chatbot-button" data-original-title="Редактировать">
                                    <img class="chatbot-img" src="../assets/pencil.svg" alt="Карандаш">
                                    <span class="chatbot-button-tooltip">Редактировать</span>
                                </button>
                                <button class="chatbot-button">
                                    <img class="chatbot-img" src="../assets/trashcan.svg" alt="Мусорка">
                                    <span class="chatbot-button-tooltip">Удалить</span>
                                </button>
                            </td>
                            <td>
                                {{ i.id }}
                            </td>
                            <td>
                                {{ i.par }}
                            </td>
                            <td>
                                {{ i.val }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useCounterStore} from '@/store/';
import {Icon} from '@iconify/vue';
// import { ref } from "vue";

const storage = useCounterStore().table_inf;


function Pagination() {
    let amount = storage.length / 5;

}

</script>


<style lang="scss">
.container {
    width: 1400px;
    margin-left: auto;
    margin-right: auto;
    .chatbot-container {
        // background-color: #D3D3D3;
        h1 {
        margin-top: 20px;
        margin-left: 10px;
        text-align: left;
        }
        .header {
            margin-top: 10px;
            display:flex;
            justify-content: space-between;
            .page-pagination {
                width: 400px;
                ul{
                    font-size:0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    // text-align: center;
                    height: 100%;
                    li{
                        font-size:25px;
                        height: 40px;
                        display: inline-block;
                        width: 10%;
                        margin:0;
                        padding:0;
                        display: flex;
                        text-align: center;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
                        border: 1px solid black;
                        border-radius: 10px;
                    }
                }
            }
        }
        .footer {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }
        .chatbot {
            table {
                margin-top: 20px;
                // border-spacing: 0;
                // empty-cells: hide;
                // width: 100%;
                // text-align: left;
                // border-bottom: 1px solid var(--color-link);
                // border-left: 1px solid var(--color-link);
                // border-top: 1px solid var(--color-link);
                // border-radius: 20px;
                // border-collapse: collapse;
                width: 100%;
                border: none;
                margin-bottom: 20px;
                border-spacing: 0;
                thead th {
                    font-weight: bold;
                    text-align: left;
                    border: none;
                    padding: 10px 15px;
                    background: #d8d8d8;
                    font-size: 14px;
                    border-left: 1px solid #ddd;
                    border-right: 1px solid #ddd;
                }
                tbody td {
                    text-align: left;
                    border-left: 1px solid #ddd;
                    border-right: 1px solid #ddd;
                    padding: 10px 15px;
                    font-size: 14px;
                    vertical-align: center;
                }
                thead tr th:first-child, tbody tr td:first-child {
                    border-left: none;
                }
                thead tr th:last-child, tbody tr td:last-child {
                    border-right: none;
                }
                tbody tr:nth-child(even){
                    background: #f3f3f3;
}
                tr {
                    .chatbot-button-container {
                        display: flex;
                        gap: 10px;
                        .chatbot-button {
                            background-color: transparent;
                            border: 1px solid black;
                            border-radius: 10px;
                            padding: 5px 10px;
                            position: relative;
                            transition: 0.5s;
                            text-align: center;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            // .tooltip {
                            //     visibility: hidden;
                            //     width: 120px;
                            //     background-color: black;
                            //     color: #fff;
                            //     text-align: center;
                            //     padding: 5px 0;
                            //     border-radius: 6px;
                            //     position: absolute;
                            //     z-index: 1;
                            // }
                        }
                        .chatbot-button:hover {
                            // .tooltip {
                            //     visibility:visible;
                            // }
                            background-color: #D3D3D3;
                            transition: 0.5s;
                        }
                    }
                }
            }
        }
    }
    
}
.buttons {
    display: flex;
    gap: 10px;
    .chatbot-button {
        display: flex;
        align-items: center;
        background-color: var(--color-hover-active);
        border: none;
        border-radius: 20px;
        padding: 10px 20px;
        font-size: var(--text-size-16);
        color: white;
        transition: 0.5s;
        img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
        }
    }
    .chatbot-button:hover {
        background-color: var(--color-hover);
        transition: 0.5s;
    }
}
.chatbot-img {
    width: 15px;
    height: 20px;
}
button {
    cursor: pointer;
}
</style>

