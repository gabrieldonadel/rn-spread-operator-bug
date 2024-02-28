package com.spreadoperatortest

import com.facebook.react.bridge.ReactApplicationContext
import android.util.Log
import android.widget.Toast

class CustomTurboModule(reactContext: ReactApplicationContext) : NativeCustomTurboModuleSpec(reactContext) {

  override fun getName() = NAME

  override fun helloWorld() {
    Log.d("CustomTurboModule", "hello world!")
    Toast.makeText(reactApplicationContext.currentActivity, "hello world!", Toast.LENGTH_SHORT).show()
  }

  companion object {
    const val NAME = "CustomTurboModule"
  }
}
