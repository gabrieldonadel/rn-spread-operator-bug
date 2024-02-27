import {TurboModule, TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  helloWorld(): void;
}

export default TurboModuleRegistry.get<Spec>('CustomTurboModule') as Spec;
