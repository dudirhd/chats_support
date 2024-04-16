<template>
<div class="user message" v-if="!isYou">
    <div class="info info-user">
        <text>Пользователь</text>
        <text>2024-03-06 11:56:31</text>
    </div>
    <div class="created-message mess-user">
        <div class="profile-photo user-photo">
            <img class="profile-photo" src="https://mobile.k-telecom.org/app/lte/img/logo128.png">
        </div>
        <div class="created-message-text created-message-text-user">{{message}}</div>
    </div>
    <div class="info-about-pinning" v-if="pin">
        <text>2024-03-06 11:56:32 Откреплён (Источник: Системный Пользователь)</text>
    </div>
</div>

<div class="your message" v-if="isYou">
    <div class="info info-your">
        <text>2024-03-06 11:56:31</text>
        <text>Кириченко Роман</text>
    </div>
    <div class="created-message mess-you">
        <div class="profile-photo your-photo">
            <img src="https://mobile.k-telecom.org/app/lte/img/logo128.png">
        </div>
        <div class="created-message-text created-message-text-you">{{message}}</div>
    </div>
    <div class="info-about-pinning" v-if="pin">
        <text>2024-03-06 11:57:27 Закреплён за Кириченко Роман (Источник: Системный Пользователь)</text>
    </div>
</div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
// import { Icon } from '@iconify/vue';

defineProps([
    'isYou',
    'message'
]);

const pin = ref(true);
</script>

<style scoped lang="scss">
.message {
    display: flex;
    flex-direction: column;
    .info {
        display: flex;
        justify-content: space-between;
        font-size: var(--text-size-14);
    } 
    .info-user {
        margin-left: 45px;
    }
    .created-message {
        display: flex;
        .profile-photo {
            img {
                width: 30px;
            }
        }
        .user-photo {
            margin-right: 10px;
        }
        .created-message-text {
            border: 1px solid black;
            width: 100%;
            padding: 5px;
            border-radius: 5px;
        }
        .created-message-text-user {
            background-color: var(--chat-color-user-message);
        }
        .info-about-pinning {
            justify-self: center;
        }
    }
    .info-about-pinning {
            align-self: center;
            font-size: var(--text-size-12);
            margin-top: 2px
    }
}

.user {
    margin-right: 40px;
}

.your {
    margin-left: 40px;
    .info-your {
        margin-right: 45px;
    }
    .mess-you {
        flex-direction: row-reverse;
        .your-photo {
            margin-left: 10px;
        }
        .created-message-text-you {
            background-color: var(--chat-color-your-message);
        }
    }
}

</style>