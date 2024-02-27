
#import "CustomModule.h"

@implementation CustomModule
 
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(helloWorld)
{
  NSLog(@"hello world!");
  dispatch_async(dispatch_get_main_queue(), ^{
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"Hello world!"
                                                    message:nil
                                                   delegate:self
                                          cancelButtonTitle:@"OK  "
                                          otherButtonTitles:nil,nil];
    [alert show];
  });
}

@end
