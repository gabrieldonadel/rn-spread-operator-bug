#import "CustomTurboModule.h"
#import <CustomTurboModuleSpec/CustomTurboModuleSpec.h>

@implementation CustomTurboModule

RCT_EXPORT_MODULE()
 
- (void)helloWorld { 
  NSLog(@"Hello World");
  dispatch_async(dispatch_get_main_queue(), ^{
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"Hello world!"
                                                    message:nil
                                                   delegate:self
                                          cancelButtonTitle:@"OK  "
                                          otherButtonTitles:nil,nil];
    [alert show];
  });
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
(const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeCustomTurboModuleSpecJSI>(params);
}


@end
