
#import "CustomModule.h"

@implementation CustomModule
 
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(helloWorld)
{
  NSLog(@"hello world!");
}

@end
