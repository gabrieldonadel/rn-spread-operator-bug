#import "CustomTurboModule.h"
#import <CustomTurboModuleSpec/CustomTurboModuleSpec.h>

@implementation CustomTurboModule

RCT_EXPORT_MODULE()
 
- (void)helloWorld { 
  NSLog(@"Hello World");
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
(const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeCustomTurboModuleSpecJSI>(params);
}


@end
