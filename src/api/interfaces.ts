import noop from 'lodash';
import { PatientResponse } from '../types/patient/intex';

export type DispatchType<A> = (value: A) => void;
export type SetStateActionType<S> = S | ((prevState: S) => S);
export type DispatchActionType<S> = DispatchType<SetStateActionType<S>>;
export type Nullable<T> = T | null;

type ServiceResponses = PatientResponse;

export interface CallWrappedServiceParams {
  service: () => Promise<ServiceResponses>;
  onPreRequest: () => void | typeof noop;
  onSuccess: (response?: PatientResponse) => void | typeof noop;
  onError: (response?: string) => void | typeof noop;
}

export interface WrappedFunctionWithLoadingServiceParams {
  service: () => Promise<ServiceResponses>;
  setLoadingState: ((param?: boolean) => void) | typeof noop;
  onPreRequest: () => void | typeof noop;
  onSuccess: (response?: PatientResponse) => void | typeof noop;
  onError: (response?: string) => void | typeof noop;
}
