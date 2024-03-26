import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    isLogined: true,
    home:{chats_type: 'unread'},

    chat_info:{
      isSelected:   false,
      chat_number:  '-',
      theme:        '-',
      status:       '-',
      last_message: '-',
      dogovor:      '-',
      login:        '-',
      chat_name:    '-',
      phone:        '-',
      balance:      '-',
      need_to_pay:  '-',
      month_pay:    '-',
      pay_day:      '-',
      tarif:        '-',
      tarif_prefix: '-',
      day_speed:    '-',
      nigth_speed:  '-',
      app_version:  '-',
      city_bk:      '-',
      trash:        '-'
    },

    list_messages:{
      unread: [
        {
          date:          "2024-02-20 13:33:20",
          message_count: 99,
          alert:         true,
          done:          false,
          timeout:       false,
          isBTU: {
            active: false,
            name:   'БТУ 443331'
          },
          message_info:{
            number:       "#121212",
            theme:        false,
            status:       false,
            last_message: false,
            dogovor:      false,
            login:        false,
            name:         "Иванов И.",
            phone:        false,
            balance:      false,
            need_to_pay:  false,
            month_pay:    false,
            pay_day:      false,
            tarif:        false,
            tarif_prefix: false,
            day_speed:    false,
            nigth_speed:  false,
            app_version:  false,
            city_bk:      false,
            trash:        false,
          }
        },
        {
          date:          "2024-02-20 13:33:20",
          message_count: 32,
          alert:         false,
          done:          false,
          timeout:       false,
          isBTU: {
            active: false,
            name:   'БТУ 414141'
          },
          message_info:{
            number:       "#121212",
            theme:        false,
            status:       false,
            last_message: false,
            dogovor:      false,
            login:        false,
            name:         "Иванов И.",
            phone:        false,
            balance:      false,
            need_to_pay:  false,
            month_pay:    false,
            pay_day:      false,
            tarif:        false,
            tarif_prefix: false,
            day_speed:    false,
            nigth_speed:  false,
            app_version:  false,
            city_bk:      false,
            trash:        false,
          }
        },
      ],

      atwork: [
        {
          date:          "2024-02-20 13:33:20",
          message_count: 99,
          alert:         true,
          done:          false,
          timeout:       false,
          isBTU: {
            active: false,
            name:   'БТУ 443331'
          },
          message_info:{
            number:       "#121212",
            theme:        false,
            status:       false,
            last_message: false,
            dogovor:      false,
            login:        false,
            name:         "Иванов И.",
            phone:        false,
            balance:      false,
            need_to_pay:  false,
            month_pay:    false,
            pay_day:      false,
            tarif:        false,
            tarif_prefix: false,
            day_speed:    false,
            nigth_speed:  false,
            app_version:  false,
            city_bk:      false,
            trash:        false,
          }
        },
        {
          date:          "2024-02-20 13:33:20",
          message_count: 32,
          alert:         false,
          done:          false,
          timeout:       false,
          isBTU: {
            active: false,
            name:   'БТУ 414141'
          },
          message_info:{
            number:       "#121212",
            theme:        false,
            status:       false,
            last_message: false,
            dogovor:      false,
            login:        false,
            name:         "Иванов И.",
            phone:        false,
            balance:      false,
            need_to_pay:  false,
            month_pay:    false,
            pay_day:      false,
            tarif:        false,
            tarif_prefix: false,
            day_speed:    false,
            nigth_speed:  false,
            app_version:  false,
            city_bk:      false,
            trash:        false,
          }
        },
      ],

      done:[
        {
          date:          "2024-02-20 13:33:20",
          message_count: 99,
          alert:         true,
          done:          false,
          timeout:       true,
          isBTU: {
            active: false,
            name:   'БТУ 443331'
          },
          message_info:{
            number:       "#121212",
            theme:        false,
            status:       false,
            last_message: false,
            dogovor:      false,
            login:        false,
            name:         "Иванов И.",
            phone:        false,
            balance:      false,
            need_to_pay:  false,
            month_pay:    false,
            pay_day:      false,
            tarif:        false,
            tarif_prefix: false,
            day_speed:    false,
            nigth_speed:  false,
            app_version:  false,
            city_bk:      false,
            trash:        false,
          }
        },
        {
          date:          "2024-02-20 13:33:20",
          message_count: 32,
          alert:         false,
          done:          true,
          timeout:       false,
          isBTU: {
            active: false,
            name:   'БТУ 414141'
          },
          message_info:{
            number:       "#222333",
            theme:        false,
            status:       false,
            last_message: false,
            dogovor:      false,
            login:        false,
            name:         "Cоколов И.",
            phone:        false,
            balance:      false,
            need_to_pay:  false,
            month_pay:    false,
            pay_day:      false,
            tarif:        false,
            tarif_prefix: false,
            day_speed:    false,
            nigth_speed:  false,
            app_version:  false,
            city_bk:      false,
            trash:        false,
          }
        },
      ],
    },
    message_list: [
      {
          isYou:   false,
          message: 'hello'
      },
      {
          isYou:   false,
          message: 'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello '
      },
      {
          isYou:   true,
          message: 'hi'
      },
    ]
  }),
})