import {NativeModules, NativeModule} from 'react-native';

const CustomModule: NativeModule & {helloWorld: () => void} =
  NativeModules.CustomModule;

export default {
  ...CustomModule,
};
