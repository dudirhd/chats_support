<template>
<div class="templates-info-header">
    <span 
        @click = "header_field = 'info'" 
        :class = "{'active-span': header_field == 'info'}"
    >
        Информация
    </span>
    <span 
        @click = "header_field = 'templates'" 
        :class = "{'active-span': header_field == 'templates'}"
    >
        Шаблоны
    </span>
</div>

<div class="info" v-if="header_field == 'info'">
    <div class="change-status-or-theme">
        <div
            v-for  = "i in changing" 
            :key   = "i"
            :class = "{selected: i.isSelected}"
        >
            <text @click="i.isSelected = !i.isSelected;">{{ i.name }}</text>
            <div class="select-option" v-if="i.isSelected">
                <text v-for="n in i.options" :key="n" @click="i.isSelected = false">{{ n }}</text>
            </div>
        </div>
    </div>

    <div class="comments">
        <input v-model="comment_input" type="text" placeholder="Комментировать..." />
        <Icon 
            class  = "button" 
            v-if   = "!sending" 
            @click = "send_comment(comment_input)" 
            icon   = "fluent:send-28-filled" 
        />
        <Icon 
            class = "active-button"
            v-if  = "sending" 
            icon  = "ion:checkmark-done-outline" 
        />
    </div>

    <div class="info-blocks">
        <div class="info-block">
            <text v-if="opened_block == 'none' || opened_block == 'info'">
                <Icon 
                    @click = "opened_block = 'info'" 
                    v-if   = "opened_block == 'none'" 
                    class  = "icon" 
                    icon   = "raphael:arrowdown" 
                />
                <Icon 
                    @click = "opened_block = 'none'" 
                    v-if   = "opened_block == 'info'" 
                    class  = "icon" 
                    icon   = "raphael:arrowup" 
                />
                Инфо
            </text>
            <div class="blocks" v-if="opened_block == 'info'">
                <div class="buttons">
                    <button @click = "is_chat_selected_test('untie_the_btus_appeal')">Отвязать обращение БТУ</button>
                    <button @click = "is_chat_selected_test('close_chats_on_contacting_btu')">Закрыть чаты по обращению в БТУ</button>
                    <button @click = "is_chat_selected_test('link_a_btu_appeal')">Привязать обращение БТУ</button>
                    <button @click = "is_chat_selected_test('submit_a_question')">Передать вопрос</button>
                    <button @click = "is_chat_selected_test('transfer_to_the_queue')">Передать в очередь</button>
                    <button @click = "is_chat_selected_test('transfer_to_an_employee')">Передать сотруднику</button>
                </div>

                <div class="buttons-popup-shadow" v-if="buttons_popup.isVisible" >
                    <div class="buttons-popup">
                        <div class="popup-header">
                            <text>{{ buttons_popup.content }}</text>
                            <text @click="buttons_popup.isVisible = false">Close</text>
                        </div>
                        <div class="popup-body">
                            body
                        </div>
                        <div class="popup-do">
                            <button @click="buttons_popup.isVisible = false">do it!</button>
                        </div>
                    </div>
                </div>

                <table>
                    <tr>
                        <td>Номер:</td>
                        <th>{{ chat_info_store.number }}</th>
                    </tr>
                    <tr>
                        <td>Тема:</td>
                        <th>{{chat_info_store.theme}}</th>
                    </tr>
                    <tr>
                        <td>Статус:</td>
                        <th>{{chat_info_store.status}}</th>
                    </tr>
                    <tr>
                        <td>Послед.сообщение:</td>
                        <th>{{chat_info_store.last_message}}</th>
                    </tr>
                    <tr>
                        <td>Договор:</td>
                        <th>{{chat_info_store.dogovor}}</th>
                    </tr>
                    <tr>
                        <td>Логин:</td>
                        <th>{{chat_info_store.login}}</th>
                    </tr>
                    <tr>
                        <td>Имя:</td>
                        <th>{{chat_info_store.chat_name}}</th>
                    </tr>
                    <tr>
                        <td>Телефон:</td>
                        <th>{{chat_info_store.phone}}</th>
                    </tr>
                    <tr>
                        <td>Баланс:</td>
                        <th>{{chat_info_store.balance}}</th>
                    </tr>
                    <tr>
                        <td>Реком. к оплате:</td>
                        <th>{{chat_info_store.need_to_pay}}</th>
                    </tr>
                    <tr>
                        <td>Ежемесячный платеж:</td>
                        <th>{{chat_info_store.month_pay}}</th>
                    </tr>
                    <tr>
                        <td>Расч.дата:</td>
                        <th>{{chat_info_store.pay_day}}</th>
                    </tr>
                    <tr>
                        <td>Тариф:</td>
                        <th>{{chat_info_store.tarif}}</th>
                    </tr>
                    <tr>
                        <td>Префикс тарифа:</td>
                        <th>{{chat_info_store.tarif_prefix}}</th>
                    </tr>
                    <tr>
                        <td>Скорость днем:</td>
                        <th>{{chat_info_store.day_speed}}</th>
                    </tr>
                    <tr>
                        <td>Скорость ночью:</td>
                        <th>{{chat_info_store.nigth_speed}}</th>
                    </tr>
                    <tr>
                        <td>Версия прил.:</td>
                        <th>{{chat_info_store.app_version}}</th>
                    </tr>
                    <tr>
                        <td>Город БК:</td>
                        <th>{{chat_info_store.city_bk}}</th>
                    </tr>
                    <tr>
                        <td>Корзина:</td>
                        <th>{{ chat_info_store.trash }}</th>
                    </tr>
                </table>
            </div>
        </div>

        <div class="info-block">
            <text v-if="opened_block == 'none' || opened_block == 'open_chats'">
                <Icon 
                    @click = "opened_block = 'open_chats'" 
                    v-if   = "opened_block == 'none'" 
                    class  = "icon" 
                    icon   = "raphael:arrowdown" 
                />
                <Icon 
                    @click = "opened_block = 'none'" 
                    v-if   = "opened_block == 'open_chats'" 
                    class  = "icon" 
                    icon   = "raphael:arrowup" 
                />Открытые чаты</text>
            <div 
                class = "blocks" 
                v-if  = "opened_block == 'open_chats'"
            >
                <a 
                    v-for = "i in opened_chats" 
                    :key  = "i"
                    :href = "i.link" 
                    class = "block"
                >{{i.name}}</a>
            </div>
        </div>

        <div class="info-block">
            <text v-if="opened_block == 'none' || opened_block == 'close_chats'">
                <Icon 
                    @click="opened_block = 'close_chats'" 
                    v-if="opened_block == 'none'" 
                    class="icon" 
                    icon="raphael:arrowdown" 
                />
                <Icon 
                    @click="opened_block = 'none'" 
                    v-if="opened_block == 'close_chats'" 
                    class="icon" 
                    icon="raphael:arrowup" 
                />Закрытые чаты</text>
            <div 
                class = "blocks" 
                v-if  = "opened_block == 'close_chats'"
            >
                <a 
                    v-for = "i in closed_chats" 
                    :key  = "i" 
                    :href = "i.link" 
                    class = "block"
                >{{i.name}}</a>
            </div>
        </div>
    </div>
</div>

<div class="templates" v-if="header_field == 'templates'">
    <div v-for="template in templates" :key="template">
        <text class="block-name" @click="template.isOpen = !template.isOpen">
            {{template.name}}
        </text>
        <section v-if="template.content_type == 'text'">
            <span class="block" v-for="block in template.content" :key="block">{{block}}</span>
        </section>
        <section v-if="template.content_type == 'stickers'">
            <img v-for="img in template.content" :key="img" :src="img" />
        </section>
    </div>
</div>
</template>

<script setup>
import {ref} from 'vue';
import { Icon } from '@iconify/vue';
import { useCounterStore } from '@/store';

// defineProps(['chapter', 'info']);

// const chat_message_store = useCounterStore().message_info;

const chat_info_store = useCounterStore().chat_info;

const buttons_popup = ref({
    isVisible: false,
    content:   '123',
});
const sending       = ref(false);
const header_field  = ref('info');
const opened_block  = ref('none');
const comment_input = ref();

const opened_chats = ref([
    {name: '#597699 2024-02-25 01:23:02 Консультация', link: 'https://google.com'},
    {name: '#578629 2024-01-24 19:06:39 Консультация', link: 'https://google.com'},
    {name: '#578478 2024-01-24 13:50:06 Консультация', link: 'https://google.com'},
    {name: '#566047 2024-01-05 12:22:52 Консультация', link: 'https://google.com'},
    {name: '#561840 2023-12-28 17:16:31 Консультация', link: 'https://google.com'},
    {name: '#561761 2023-12-28 15:52:51 Консультация', link: 'https://google.com'},
    {name: '#550685 2023-12-11 21:59:46 Консультация', link: 'https://google.com'},
    {name: '#539039 2023-11-25 21:15:14 Консультация', link: 'https://google.com'},
    {name: '#537718 2023-11-24 18:26:50 Консультация', link: 'https://google.com'},
    {name: '#532076 2023-11-15 20:11:00 Консультация', link: 'https://google.com'},
    {name: '#529801 2023-11-13 11:42:40 Консультация', link: 'https://google.com'},
    {name: '#462588 2023-07-25 18:57:58 Консультация', link: 'https://google.com'},
    {name: '#461967 2023-07-24 17:22:54 Консультация', link: 'https://google.com'},
    {name: '#454516 2023-07-13 11:05:23 Консультация', link: 'https://google.com'},
    {name: '#429030 2023-05-29 21:11:54 Консультация', link: 'https://google.com'},
    {name: '#428961 2023-05-29 19:32:01 Консультация', link: 'https://google.com'},
    {name: '#406039 2023-04-13 21:42:38 Консультация', link: 'https://google.com'},
    {name: '#393794 2023-03-21 19:11:00 Консультация', link: 'https://google.com'}
])
const closed_chats = ref([
    {name: '#597699 2024-02-25 01:23:02 Консультация', link: 'https://google.com'},
    {name: '#578629 2024-01-24 19:06:39 Консультация', link: 'https://google.com'},
    {name: '#578478 2024-01-24 13:50:06 Консультация', link: 'https://google.com'},
    {name: '#566047 2024-01-05 12:22:52 Консультация', link: 'https://google.com'},
    {name: '#561840 2023-12-28 17:16:31 Консультация', link: 'https://google.com'},
    {name: '#561761 2023-12-28 15:52:51 Консультация', link: 'https://google.com'},
    {name: '#550685 2023-12-11 21:59:46 Консультация', link: 'https://google.com'},
    {name: '#539039 2023-11-25 21:15:14 Консультация', link: 'https://google.com'},
    {name: '#537718 2023-11-24 18:26:50 Консультация', link: 'https://google.com'},
    {name: '#532076 2023-11-15 20:11:00 Консультация', link: 'https://google.com'},
    {name: '#529801 2023-11-13 11:42:40 Консультация', link: 'https://google.com'},
    {name: '#462588 2023-07-25 18:57:58 Консультация', link: 'https://google.com'},
    {name: '#461967 2023-07-24 17:22:54 Консультация', link: 'https://google.com'},
    {name: '#454516 2023-07-13 11:05:23 Консультация', link: 'https://google.com'},
    {name: '#429030 2023-05-29 21:11:54 Консультация', link: 'https://google.com'},
    {name: '#428961 2023-05-29 19:32:01 Консультация', link: 'https://google.com'},
    {name: '#406039 2023-04-13 21:42:38 Консультация', link: 'https://google.com'},
    {name: '#393794 2023-03-21 19:11:00 Консультация', link: 'https://google.com'}
])
const changing     = ref([
    {
        name:       'Изменить статус',
        isSelected: false,
        options:    [
            'Новый', 
            'Завершен'
        ]
    },
    {
        name:       'Изменить тему',
        isSelected: false,
        options:    [
            'Услуга не работает', 
            'Услуга работает, нужен доп. сервис', 
            'Деградация услуги', 
            'Приостановка услуги', 
            'Возобновление услуги', 
            'Смена тарифного плана', 
            'Расторжение', 
            'Акт сверки (для юр. лиц)', 
            'Восстановление документов (для юр. лиц)', 
            'Изменение реквизитов в расчетных документах (для юр.лиц)', 
            'Переоформление (для юр.лиц)', 
            'Изменение адреса доставки расчетных документов (для юр.лиц)', 
            'Возврат денежных средств', 
            'Перерасчет', 
            'Отправка счета на оплату', 
            'Платежное поручение (для юр.лиц)', 
            'Гарантийное письмо (для юр.лиц)', 
            'Оплата не проведена', 
            'Консультация'
        ]
    }
]);
const templates    = ref([
    {
        name:         'Шаблоны ответов',
        content_type: 'text',
        content:      [
            'Здравствуйте, чем я могу Вам помочь? Из-за повышенной загрузки время ответа может составить более 10 минут. Спасибо за понимание!',
            'Здравствуйте! Сейчас проверим и вернёмся, пожалуйста, ожидайте. Из-за повышенной нагрузки время ответа может составить более 10 минут. Спасибо за понимание',
            'Здравствуйте. Ожидайте, пожалуйста, уточняю информацию по данному вопросу. И заранее просим прощения за длительный ответ, так как сейчас повышенная нагрузка, то ожидание может занять более 10 минут.',
            'По диагностике до Вашего роутера проблем не обнаружено. Сигнал по кабелю стабилен, видим авторизацию по договору. Пожалуйста, проверьте наличие подключения к роутеру на конечных устройствах (телефоны, планшеты, компьютеры), предварительно выполнив перезагрузку роутера по питанию, отключив его от розетки на 2 минуты. Напишите, пожалуйста, о результатах. Я буду ждать.',
            'Ваша оплата прошла за предыдущий период, так как вы не приостановили договор. У вас списались средства, из-за чего вы ушли в минус, а сейчас, внеся оплату, вы оплатили этот минус на счете.',
            'Вы можете приостановить обслуживание договора до 3 месяцев во вкладке "Управление статусом договора". Минимальное количество дней для приостановки - 7. Возобновить договор можно в любой момент в этой же вкладке, либо по звонку:) Если требуется приостановить на срок более 3 месяцев, сообщите мне, пожалуйста, период приостановки, и я приостановлю Вам договор.',
            'Подать заявление возможно наиболее удобным для Вас способом: ·Предоставить сканированную копию или фото подписанного заявления в чат мобильного приложения или на e-mail: support@k-telecom.org либо ·Подойти лично в офис продаж с паспортом. Бланки заявлений Вы можете взять в разделе "Техподдержка" или "Помощь" на сайте: www.k-telecom.org, блок "Бланки заявлений".',
            'Для того чтобы верно оценить входящую скорость, необходимо подключить провод непосредственно к компьютеру (замер при подключении через роутер не является показательным, т. к. роутер может существенно снижать скорость). Подключите, пожалуйста, кабель в компьютер и сделайте замер скорости на speedtest.net , скриншот замера предоставьте в этот чат.',
            'Хочу заранее Вас проинформировать - заявка предварительно регистрируется как бесплатная, но если проблема будет выявлена внутри дома/квартиры - к примеру с кабелем, работы могут быть платные в зависимости от объёма работ. Ремонтник по завершению работ предоставит Вам акт, где будут перечислены все платные услуги и их стоимость. Чтобы зарегистрировать заявку, подскажите, пожалуйста, по этому номеру сможем с вами связаться? (ВСТАВИТЬ НОМЕР)',
            'Спасибо за обращение! Если появятся дополнительные вопросы, то будем рады помочь. Хорошего дня!',
            'Сообщите, пожалуйста, Ваш контактный номер телефона для обратной связи',
            'Снять/установить приостановку договора Вы можете в приложении: на главном экране, в разделе "Управление статусом договора".',
            'Временный доступ Вы можете подключить в мобильном приложении: во вкладке "Отложенный платеж". Временный доступ предоставляется на 48ч.',
            'Так как офисов много, Вам будет удобнее посмотреть информацию самостоятельно. Адреса, часы работы и телефоны офисов Вы можете посмотреть в приложении, для этого необходимо перейти в раздел «Офисы», а чтобы было быстрее найти, Вы можете выбрать вариант отображения «Списком».',
            'Здравствуйте, ИО. У нас сейчас действительно есть проблема с подключением интернета и эта задача является приоритетным для нас. На данный момент на место аварии уже выехали специалисты и как только они оповестят о том, что авария устранена, мы сразу же передадим вам информацию, поэтому, пожалуйста ожидайте и просим прощения, что такая ситуация произошла.',
            'Расчетная дата может измениться, если по договору была произведена приостановка (добровольная приостановка абонентом или принудительная приостановка из-за недостатка средств на лицевом счете более 30-ти дней). В этом случае расчетной датой станет дата первого выхода в сеть после возобновления действия договора.',
            'Укажите, пожалуйста, Ваш новый адрес для проверки технической возможности подключения. В рабочее время с Вами свяжется наш менеджер для уточнения деталей',
            'Укажите, пожалуйста, Ваш новый адрес для проверки технической возможности подключения.',
            'Передал информацию об ошибке разработчику:) Благодарим Вас за обратную связь, и что помогаете нам стать лучше) Если нам понадобится какая-то информация по этому вопросу, то мы обязательно свяжемся с Вами. Срок решения вопроса пока неизвестен.',
            '200 баллов начисляются в День рождения в конце суток, в 23:30.',
            'Если необходимо быстро и удобно заполнить заявление на перерасчет, то для Вас мы создали эту возможность в мобильном приложении. Для этого на главной странице откройте раздел «Заявление на перерасчет» и заполните необходимые поля. Если у Вас возникли какие-либо вопросы по заявлению или возникли трудности, и Вы не можете самостоятельно подать заявление, то сообщите мне период перерасчета и причину, и я помогу Вам:) Что касается сроков, то максимальный период решения по Вашему заявлению будет составлять до 10 рабочих дней.',
            'Для настройки роутера рекомендуем воспользоваться данной инструкцией: https://wiki-old.k-telecom.org/nastrojka-marshrutizatorov После перехода по ссылке выберите модель Вашего роутера и следуйте указаниям в инструкции. Если при настройке возникнут вопросы - будем рады помочь!',
            'Для смены пароля от Wi-Fi рекомендуем воспользоваться данной инструкцией: https://wiki-old.k-telecom.org/smena-parolya-wi-fi После перехода по ссылке выберите модель Вашего роутера и следуйте указаниям в инструкции. Если при смене пароля от Wi-Fi возникнут вопросы - будем рады помочь!',
            'Для того чтобы подключить компьютер напрямую, следуйте инструкции ниже: Подключите кабель интернета (идущий из подъезда) к компьютеру. Откройте на компьютере браузер. В адресной строке браузера (самая верхняя строка) напишите: "10.255.0.8" или "ipoe.k-telecom.org" Должен открыться сайт "К-Телеком", где будет кнопка "Авторизоваться". После нажатия на неё у Вас будет запрошено ввести логин VPN и пароль VPN из договора. После ввода логина и пароля в течение 5 минут интернет появится. Знаете свой логин и пароль?',
            'Для того чтобы подключить компьютер напрямую, следуйте инструкции ниже: Подключите кабель интернета (идущий из подъезда) к компьютеру. Откройте на компьютере браузер. И перейдите по ссылке: https://wiki-old.k-telecom.org/ . После перехода в "Справочник абонента" необходимо загрузить и установить файл "Мастер настройки VPN авторизации" , который находится во вкладке "Настройки VPN" - "Автонастройки". Если у Вас Windows 7, то после установки файла на рабочем столе появится значок "К-Телеком“ у Вас будет запрошен логин и пароль из договора. Если у Вас Windows 10, то справа внизу на панели задач при нажатии на значок "Сети" у Вас появится новое подключение "К-Телеком", которое необходимо запустить, после чего у вас будет запрошен логин и пароль из договора. У вас есть эти данные?',
            'Для того чтобы подключить компьютер напрямую, следуйте инструкции ниже: Подключите кабель интернета (идущий из подъезда) к компьютеру. Через "Панель управления" перейдите в раздел "Центр управления сетями и общим доступом" и выберите «Создание и настройка нового подключения или сети». В открывшемся окне выберите «Подключение к интернету», нажмите внизу «далее». Затем среди типов соединения вам необходимо выбрать «Высокоскоростное (с PPPoE)». Система запросит ваш учётные данные: Логин и пароль (из договора) «Имя подключения» можете выставить произвольное (например, К Телеком). После того, как всё введено, нажмите кнопку «Подключить». Если всё введено верно, то через несколько секунд проверки подключения Вы уже сможете выйти в интернет. Напишите, пожалуйста, о результатах. Я буду ждать.',
            'Сигнал по кабелю до Вашего роутера видим, но авторизации от него не поступает. Попробуйте выполнить следующие действия: 1. Перезагрузите роутер, отключив его от розетки на 2 минуты. 2. Если 1 п. не поможет, то, скорей всего, сбились настройки роутера. В таком случае рекомендуем воспользоваться инструкцией по настройке роутера: https://wiki-old.k-telecom.org/nastrojka-marshrutizatorov. Напишите, пожалуйста, о результатах. Я буду ждать.',
            'На данный момент не видим сигнала по кабелю. Причины могут быть следующие: 1. Кабель не подключен; 2. Кабель подключен некорректно; 3. Кабель поврежден. Пожалуйста, попробуйте переподключить кабель интернета в устройство, после чего сообщите нам о результатах. При использовании роутера проверьте, чтобы кабель был подключен в WAN-порт. Напишите, пожалуйста, о результатах. Я буду ждать.',
            'Если "К Телеком" не отображается в разделе оплаты услуг Интернет, то необходимо в настройках приложения "Сбербанк онлайн" выбрать Ваш регион оплаты. Выбрать его можно, нажав на главной странице на "Аватар вашего профиля", далее перейти во вкладку "Настройки" и в самом низу найти раздел "Регион оплаты". Здесь необходимо выбрать вашу область и город. Если именно Вашего города в списке нет, можно выбрать город "Екатеринбург", после чего наша компания должна появится в списке провайдеров.',
            'Я оставлю заявку инженерам, они постараются решить вопрос дистанционно. Если потребуется выезд на место, то специалист с вами свяжется для согласования времени визита. Выезд будет бесплатным, оплата возможна только за материалы (например если нужно протянуть новый кабель из одной комнаты в другую)',
            'Вам необходимо актуализировать паспортные данные. Если удобно, можем сделать это прямо сейчас! Понадобится: серия и номер паспорта, кем и когда выдан, а также код подразделения. Но хочу обратить ваше внимание, что при некорректно заполненных данных - может быть приостановлено оказание услуг по договору на основании федерального закона № 126-ФЗ «О связи». Также сделать это можно в мобильном приложении, в разделе "Настройки", в личном кабинете на сайте: stat-new.k-telecom.org.',
            'Я передал ваше обращение своему коллеге. В ближайшее рабочее время с вами свяжутся по указанному выше номеру и решат ваш вопрос. Помимо данного вопроса могу я вам еще чем-то помочь?',
            'До Вас по линии доходит сигнал, поступает обратный адрес от роутера. Пожалуйста, выполните перезагрузку роутера по питанию путем отключения его от розетки минимум на 1 минуту (отключение на меньший срок может не помочь), а также переподключение интернет кабеля. Вероятно, Вы можете быть не подключены к своей wi-fi сети, при этом интернет находится в работе, просьба проверить включена ли раздача wi-fi сети на роутере (будет гореть зеленым или синим характерный индикатор wi-fi в виде "веера", при его отсутствии, на части роутеров имеются кнопки с подписью "wi-fi", при нажатии на которую отключается и включается сеть), после чего проверьте подключение на разных устройствах, а также можете попробовать подключиться по стандартным данным, указанным на наклейке под роутером (если Ваш пароль wi-fi не будет подходить) или произвести полный сброс настроек (кнопка reset зажимается на 10 секунд). Напишите, пожалуйста, о результатах. Я буду ждать.',
            'До Вас по линии доходит стабильный сигнал, ошибок не наблюдаем по кабелю. Пожалуйста, выполните перезагрузку роутера по питанию путем отключения его от розетки минимум на 1 минуту (отключение на меньший срок может не помочь), а также переподключение интернет кабеля (отключить и подключить до щелчка), понаблюдать за стабильностью подключения после данных действий. За долгое время работы роутер может накапливать ошибки, что виляют на стабильность и скорость, перезагрузка на 1-2 минуты хотя бы раз в неделю уже может помочь обновить роутер от данных ошибок. Если перезагрузка роутера не поможет, подключите, пожалуйста, кабель в компьютер и произведите проверку подключения, стабильности интернета без участия роутера. Напишите, пожалуйста, о результатах. Я буду ждать.',
            'Прошу прощения, что такая ситуация возникла, она произошла из-за технического сбоя, мы уже решаем данную проблему и не волнуйтесь, будет сделан перерасчет и недостаток баллов придет вам уже в ближайшее время, благодарим за понимание)',
            'Вам необходимо будет перейти в личный кабинет на сайте: stat-new.k-telecom.org далее в разделе "услуги" в самом конце страницы отобразится подраздел "оборудование" и у нового устройства будет кнопка "установить HLS", после её нажатия, потребуется перезагрузить телевизор и телевидение будет в работе. Авторизация предусматривает до 5 устройств, лишние Вы сможете удалить также в этом разделе по кнопке "удалить".',
            'Моментально пополнить баланс без комиссии можно через мобильное приложение или в интернет-банке Сбербанк и УБРИР, а также по ссылке https://pay.k-telecom.org/cloudpayments/. Обратите внимание, что при оплате через другие интернет-банки зачисление средств может занять 2-3 дня.',
            'Понимаю ваше негодование. Уже отправил информацию группе клиентского сервиса. Как только специалист рассмотрит обращение с вами свяжутся и предложат решение',
            'Могу предложить оформить заявку инженерам на удаленную диагностику неполадок. Если дистанционно решить вопрос не сможем, то понадобится вызов мастера на дом. Для согласования выезда мы свяжемся с вами по телефону. Подскажите, пожалуйста, ваш номер телефона.',
            'Для проведения технических работ выбирается специальное время, когда меньше всего пользователей. Мы их проводим, для улучшения качества связи и исключения поломок и сбоев, если периодически их не проводить, то могут быть более длительные перебои в самые активные часы дня. Спасибо вам за терпение и понимание!',
        ]
    },
    {
        name:         'Работа с расторжением',
        content_type: 'text',
        content:      [
            'После приостановки - Хорошо, договор Вам приостановили до XXXX .',
            
            'К сожалению, на данный момент у нас нет технической возможности подключить Вам интернет в этом доме. Но мы уже завели заявку на рассмотрение, поэтому, как только появится возможность подключения, мы с Вами свяжемся)',
            'Подскажите, почему решили не подключаться снова к К Телеком?',
            'Это не займет много времени, специалист подъедет к вам в удобное время и подключит. А также на новый адрес мы вам сделаем скидку 20% на первый месяц обслуживания. Записать вас на подключение?',
            'Подскажите, пожалуйста, какие условия вам предложил другой провайдер ?',
            'На вашем новом адресе есть возможность подключить К Телеком, специалист подъедет к вам в удобное время для Вас и подключит. А также на новый адрес мы Вам сделаем скидку 20% на первый месяц обслуживания. Записать Вас на подключение?',
            
            'Можем предложить вам бесплатный выезд ремонтника, чтобы он на месте смог устранить причину. Помимо этого, если вы согласитесь на выезд, то в качестве извинения мы предлагаем вам скидку 30% на 3 месяца. Будем делать заявку',
            'Уточняем ( ранее обращались в техническую поддержку)',
            '(Попытка удержания) Можем предложить вам бесплатный выезд',
            
            'Сочувствую, что вы оказались в такой ситуации, мы можем вам помочь и предложить акцию “Очень добрый Клик”, которая дает скидку в размере 50% на 6 месяцев, подскажите, пожалуйста, вам будет удобен такой вариант?',
            'Уточняем Возможно вы бы хотели изменить расчетную дату?',
            'Если будет необходимо, то мы можем вам помочь и предложить отсрочку на 3 дня, будет ли удобен такой вариант?',
            'Понял Вас, в таком случае, когда у вас появится необходимость в интернет-обслуживании, то будем рады видеть Вас нашим клиентом. При возобновлении договора, на первые 3 месяца у Вас будет скидка в размере 50%',
            
            'Мы можем предложить вам приостановку договора',
            
            'Давайте подберем вам другой тариф. Могу вам предложить….. Какой тариф вам бы подошел больше?',
            'такой ситуации, мы можем вам предложить акцию “Очень добрый Клик”, которая дает скидку в размере 50% на 6 месяцев, подскажите, пожалуйста, вам будет удобен такой вариант?',
            
            'Если необходимо быстро и удобно приостановить договор - то для Вас мы создали эту возможность в мобильном приложении. Для это Для этого на главной странице откройте раздел - Управление статусом договора и выберите даты приостановки. Учтите, что договор можно остановить на срок не менее 7 дней и не более 3 месяцев. Если захотите возобновить договор раньше, то можете написать нам, исправим дату на актуальную. Подскажите, пожалуйста, есть возможность сделать это в мобильном приложении?',
        ]
    },
    {
        name:         'Стикеры',
        content_type: 'stickers',
        content:      [
            'https://mobile.k-telecom.org/images/stickers/1001.png',
            'https://mobile.k-telecom.org/images/stickers/1002.png',
            'https://mobile.k-telecom.org/images/stickers/1003.png',
            'https://mobile.k-telecom.org/images/stickers/1004.png',
            'https://mobile.k-telecom.org/images/stickers/1005.png',
            'https://mobile.k-telecom.org/images/stickers/1006.png',
            'https://mobile.k-telecom.org/images/stickers/1007.png',
            'https://mobile.k-telecom.org/images/stickers/1008.png',
            'https://mobile.k-telecom.org/images/stickers/1009.png',
            'https://mobile.k-telecom.org/images/stickers/1010.png',
            'https://mobile.k-telecom.org/images/stickers/1011.png',
            'https://mobile.k-telecom.org/images/stickers/1012.png',
            'https://mobile.k-telecom.org/images/stickers/1013.png',
            'https://mobile.k-telecom.org/images/stickers/1014.png',
            'https://mobile.k-telecom.org/images/stickers/1015.png',
            'https://mobile.k-telecom.org/images/stickers/1016.png',
            'https://mobile.k-telecom.org/images/stickers/1017.png',
            'https://mobile.k-telecom.org/images/stickers/1018.png',
            'https://mobile.k-telecom.org/images/stickers/1019.png',
            'https://mobile.k-telecom.org/images/stickers/1020.png',
            'https://mobile.k-telecom.org/images/stickers/1021.png',
        ]
    }
]);

function send_comment(comment) {
    this.sending = true;
    console.log(comment);
    setTimeout(() => {this.sending = false}, 2000);
}
function is_chat_selected_test(button_type){
    if(!this.chat_info_store.isSelected){
        alert('Для управления чатом нужно выбрать чат!')
    } else {
        switch(button_type){
            case 'untie_the_btus_appeal':
                console.log('untie_the_btus_appeal');
                this.buttons_popup.isVisible = true;
                this.buttons_popup.content = 'untie_the_btus_appeal';
                break;
            case 'close_chats_on_contacting_btu':
                console.log('close_chats_on_contacting_btu');
                this.buttons_popup.isVisible = true;
                this.buttons_popup.content = 'close_chats_on_contacting_btu';
                break;
            case 'link_a_btu_appeal':
                console.log('link_a_btu_appeal');
                this.buttons_popup.isVisible = true;
                this.buttons_popup.content = 'link_a_btu_appeal';
                break;
            case 'submit_a_question':
                console.log('submit_a_question');
                this.buttons_popup.isVisible = true;
                this.buttons_popup.content = 'submit_a_question';
                break;
            case 'transfer_to_the_queue':
                console.log('transfer_to_the_queue');
                this.buttons_popup.isVisible = true;
                this.buttons_popup.content = 'transfer_to_the_queue';
                break;
            case 'transfer_to_an_employee':
                console.log('transfer_to_an_employee');
                this.buttons_popup.isVisible = true;
                this.buttons_popup.content = 'transfer_to_an_employee';
                break;
        }
    }
}
</script>

<style scoped lang="scss">
.templates-info-header{
    background-color: var(--color-element-child);
    border-radius: 6px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span{
        padding: 4px 8px;
        border-radius: 6px;
        font-size: var(--text-size-14);
        width: 50%;
        cursor: pointer;
    }
    .active-span{
        font-weight: bold;
        background-color: var(--color-hover-active);
        cursor: zoom-in;
    }
}

.info{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 4px;
    height: 95%;
    //overflow: scroll;
    // user-select: none;
    .change-status-or-theme{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: var(--text-size-14);
        position: relative;
        div{
            padding: 4px 8px;
            background-color: var(--color-element-in-child);
            border-radius: 3px;
            text{
                &:hover{
                    // color: var(--color-hover-active);
                    color: white;
                    cursor: pointer;
                }
            }
            .select-option{
                position: absolute;
                top: 110%;
                left: 0;
                display: flex;
                flex-direction: column;
                text-align: left;
                gap: 5px;
                z-index: 20;
                text{
                    padding: 2px 4px;
                    &:hover{color: var(--color-text);}
                }
            }
        }
        .selected{
            background-color: var(--color-hover-active);
            color: white;
        }
    }

    .comments{
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        position: relative;
        background-color: white;
        border-radius: 3px;
        z-index: 1;
        input{
            width: 87%;
            padding: 2%;
            border: none;
            outline: none;
        }
        .button{
            font-size: var(--text-size-18);
            cursor: pointer;
            &:active{
                color: rgb(228, 228, 228);
            }
        }
        .active-button{
            font-size: var(--text-size-18);
            color: var(--color-hover-active);
        }
    }

    .info-blocks{
        height:   95%;
        overflow-y: scroll;
        .info-block{
            text-align:     left;
            display:        flex;
            flex-direction: column;
            align-items:    flex-start;
            text{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 4px 0px;
                font-size: var(--text-size-18);
                user-select: none;
                &:hover{
                    color: var(--color-hover-active);
                }
                .icon{
                    cursor: pointer;
                }
            }
            .blocks{
                display:        flex;
                flex-direction: column;
                .buttons{
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    button{
                        font-size: var(--text-size-12);
                        width: 100%;
                        padding: 4px 0px;
                        border: 1px solid gray;
                        border-radius: 3px;
                        background-color: lightgray;
                       cursor: pointer;
                        &:active{
                            background-color: rgb(228, 228, 228);
                        }
                    }
                }

                .buttons-popup-shadow{
                    position: fixed;
                    top:      0;
                    left:     0;
                    width:    100vw;
                    height:   100vh;
                    z-index:  10;
                    background-color: rgba(128, 128, 128, 0.466);
                    .buttons-popup{
                        z-index:   20;
                        border:    1px solid white;
                        position:  fixed;
                        top:       50%;
                        left:      50%;
                        transform: translate(-50%, -50%);
                        padding:   8px 16px;
                        width:     400px;
                        height:    300px;
                        display:   grid;
                        grid-template-rows: 10% 1fr 10%;
                        background-color:  white;
                        .popup-header{
                            display:         flex;
                            flex-direction:  row;
                            justify-content: space-between;
                            border-bottom:   1px solid black;
                            font-size:       var(--text-size-18);
                        }
                        .popup-body{font-size: var(--text-size-16);}
                        .popup-do{
                            font-size:       var(--text-size-16);
                            display:         flex;
                            justify-content: right;
                            align-items:     center;
                            button{width: 50%;}
                        }
                    }
                }

                table{
                    font-size: var(--text-size-14);
                    width: 100%;
                    tr{
                        padding-top: 10px;
                        td, th{
                            text-align: left;
                            border-bottom: 1px solid black;
                            padding-top: 10px;
                        }
                    }
                }
                a{
                    text-decoration: none;
                    font-size: var(--text-size-12);
                    color: var(--color-link);
                    &:hover{color: var(--color-hover-active)}
                }
            }
        }
    }
}

.templates{
    display: flex;
    flex-direction: column;
    // gap: 10px;
    justify-content: space-between;
    padding: 4px;
    user-select: none;
    height: 96%;
    div{
        padding: 4px 8px;
        border: 1px solid var(--color-element-child);
        border-radius: 3px;
        text-align: center;
        height: 31%;
        .block-name{
            font-weight: bold;
            font-size: var(--text-size-16);
        }
        section{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            border-top: 1px solid var(--color-element-child);
            font-size: var(--text-size-14);
            height: 90%;
            overflow: scroll;
            span{
                cursor: pointer;
                text-align: left;
                &:hover{color: gray;}
            }
            img{
                width: 200px;
                height: 200px;
                cursor: pointer;
                &:hover{background-color: var(--color-hover-active);}
            }
        }
    }
}
</style>