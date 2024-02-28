package com.spreadoperatortest

import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.util.Log
import android.widget.Toast


class CustomModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  override fun getName() = "CustomModule"

  @ReactMethod fun helloWorld() {
    Log.d("CustomModule", "hello world!")
    Toast.makeText(reactApplicationContext.currentActivity, "hello world!", Toast.LENGTH_SHORT).show()
  }
}
