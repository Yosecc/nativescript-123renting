import Vue from 'nativescript-vue';
import { VueI18n } from 'vue-i18n';

declare module 'vue/types/vue' {
  interface Vue {
    $t: VueI18n['t'];
    $i18n: VueI18n
  }
}