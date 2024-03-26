<template>
<div class="user message" v-if="!isYou">
    <div class="info">
        <text>Пользователь</text>
        <text>2024-03-06 11:56:31</text>
    </div>
    <div class="profile-photo user-photo">
        <img src="https://mobile.k-telecom.org/app/lte/img/logo128.png">
    </div>
    <div class="created-message mess-user">
        {{message}}
    </div>
    <div class="info-about-pinning" v-if="pin">
        <text>2024-03-06 11:56:32 Откреплён (Источник: Системный Пользователь)</text>
    </div>
</div>

<div class="your message" v-if="isYou">
    <div class="info">
        <text>2024-03-06 11:56:31</text>
        <text>Кириченко Роман</text>
    </div>
    <div class="profile-photo your-photo">
        <img src="https://mobile.k-telecom.org/app/lte/img/logo128.png">
    </div>
    <div class="created-message mess-you">
        {{message}}
    </div>
    <div class="info-about-pinning" v-if="pin">
        <text>2024-03-06 11:57:27 Закреплён за Кириченко Роман (Источник: Системный Пользователь)</text>
    </div>
</div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

defineProps([
    'isYou',
    'message'
]);

const pin = ref(true);
</script>

<style scoped lang="scss">
.message{
    // border:  1px solid black;
    display:               grid;
    padding:               2px 4px;
    border-radius:         3px;
    background-color:      var(--color-element);
    grid-template-rows:    10% 1fr 10%;
    grid-template-columns: 45px 1fr 45px;
    .info{
        grid-column:     1/4;
        grid-row:        1;
        display:         flex;
        flex-direction:  row;
        justify-content: space-between;
        text{font-size: var(--text-size-14);}
    }
    
    .profile-photo{
        height:          40px;
        grid-row:        2;
        display:         flex;
        align-items:     center;
        justify-content: center;
        // width: 40px;
        img{
            width:  40px;
            height: 40px;
        }
    }
    .user-photo{grid-column: 1;}
    .your-photo{grid-column: 3;}

    .created-message{
        grid-row:    2;
        border:      1px solid var(--color-element-in-child);
        grid-column: 2;
        padding:     0px 4px;
        background-color: white;
    }
    .mess-user{border-radius: 0px 6px 6px 6px;}
    .mess-you{border-radius: 6px 0px 6px 6px;}

    .info-about-pinning{
        grid-row:    3;
        grid-column: 1/4;
        text-align:  center;
        font-size:   var(--text-size-12);
    }
}
</style>