import {NativeModules, NativeModule} from 'react-native';

export const CustomModule: NativeModule & {helloWorld: () => void} =
  NativeModules.CustomModule;

export default {
  ...CustomModule,
};
