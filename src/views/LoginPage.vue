<template>
<div class="container">
    <div class="content">
        <div class="login-inputs">
            <div class="welcome">
                <text>Введите данные для входа в систему</text>
            </div>
            <div class="inputs" :class="{isValidate: !validation}">
                <div>
                    <input 
                        type="text" 
                        placeholder="Логин" 
                        v-model="form.login"
                        @input="validation = true"
                    />
                </div>
                <div>
                    <input 
                        :type="switch_visible ? 'text' : 'password'" 
                        placeholder="Пароль" 
                        v-model="form.password"
                        @input="validation = true"
                        @keydown.enter="validate(form.login, form.password)"
                    />
                    <Icon
                        @click="switch_visible = true" 
                        v-if="!switch_visible" 
                        icon="mdi:eye" 
                        class="icon" 
                    />
                    <Icon
                        @click="switch_visible = false" 
                        v-if="switch_visible" 
                        icon="ion:eye-off-sharp" 
                        class="icon" 
                    />
                </div>
                <button @click="validate(form.login, form.password)">Войти</button>
            </div>
            <div class="footer">
                <text>
                    Если вы забыли логин или пароль обратитесь к 
                    <a href="https://goole.com">администратору сайта</a>
                </text>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import {Icon} from '@iconify/vue';
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import { useCounterStore } from '@/store';

const store = useCounterStore();
const router = useRouter();

const switch_visible = ref(false);
const validation = ref(true);
const form = ref({
    login: '',
    password: ''
});

function validate(login, password){
    if(login == 'admin' && password == 'admin'){
        validation.value = true;
        store.isLogined = true;
        router.push('/home');
    } else {
        validation.value = false;
    }
}
</script>

<style scoped lang="scss">
.login-inputs{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-element);
    border-radius: 12px;
    padding: 8px 16px;
    width: 720px;
    height: 50%;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .welcome{
        font-size: var(--text-size-24);
        font-weight: bold;
    }
    .inputs{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        div{
            position: relative;
            background-color: var(--color-element-child);
            display: flex;
            flex-direction: row;
            justify-content: left;
            align-items: center;
            padding: 16px;
            border-radius: 6px;
            .icon{
                // position: absolute;
                // top: 50%;
                // right: 4%;
                // transform: translate(0%, -50%);
                font-size: var(--text-size-24);
                color: var(--color-element);
                margin-left: 5px;
            }
            input{
                border: none;
                font-size: var(--text-size-16);
                background-color: var(--color-element-child);
                color: white;
                outline: none;
                width: 100%;
                &::placeholder{
                    color: white;
                    opacity: 1;
                }
            }
        }
        button{
            border: none;
            background-color: var(--color-element-child);
            padding: 16px;
            border-radius: 6px;
            font-size: var(--text-size-16);
            color: white;
            font-weight: bold;
            &:hover{
                background-color: var(--color-hover-active);
                cursor: pointer;
            }
        }
    }
    .isValidate{
        div{
            background-color: var(--color-error);
            input{
                background-color: var(--color-error);
            }
        }
    }
    .footer{
        font-size: var(--text-size-14);
        color: var(--color-description);
        a{
            text-decoration: none;
            color: var(--color-link);
        }
    }
}
</style>