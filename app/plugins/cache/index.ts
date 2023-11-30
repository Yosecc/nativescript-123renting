
import { ApplicationSettings } from '@nativescript/core';

var sharedPreferences = ApplicationSettings

var cache = {
  get: function(key:string) {
    return sharedPreferences.getString(key, undefined);
  },
  set: function(key:string, value:string) {
    sharedPreferences.setString(key, value)
  },
  delete: function(key: string) {
    sharedPreferences.remove(key)
  },
  clear: function(){
    sharedPreferences.clear()
  }
}

export default cache