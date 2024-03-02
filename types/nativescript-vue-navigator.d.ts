
import Vue from 'nativescript-vue';
import Navigator from 'nativescript-vue-navigator'

// declare module 'vue/types/vue' {
//     interface Vue {
//       $navigator: any;
//     }
//     export default Navigator;
//   }

  declare module 'vue/types/vue' {
    interface Vue {
      $navigator: any;
    }
  }