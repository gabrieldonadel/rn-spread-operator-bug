package com.spreadoperatortest

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class CustomTurboPackage : TurboReactPackage() {
    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? =
    if (name == CustomTurboModule.NAME) {
        CustomTurboModule(reactContext)
   } else {
     null
   }

    override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
        mapOf(
                CustomTurboModule.NAME to ReactModuleInfo(
                        CustomTurboModule.NAME,
                        CustomTurboModule.NAME,
                        false, // canOverrideExistingModule
                        false, // needsEagerInit
                        false, // hasConstants
                        true, // isCxxModule
                )
        )
    }
}
