import { apiGet } from '.';
import { setPatients } from '../store/slices/patientsSlice';
import { store } from '../store/store';
import { PatientResponse } from '../types/patient/intex';
import endpoints from './endpoints';
import { callWrappedServiceDebounced } from './enhancedServices';
import { WrappedFunctionWithLoadingServiceParams } from './interfaces';

const retrieveUsers = (fakeService = false) =>
  apiGet({
    endpoint: endpoints.retrieveUsers(),
    fakeService: fakeService,
  });

type EnhancedServiceParams = Pick<
  WrappedFunctionWithLoadingServiceParams,
  'onPreRequest' | 'onSuccess' | 'onError' | 'setLoadingState'
>;

export const enhancedRetrieveUsers = ({
  onPreRequest,
  onSuccess,
  onError,
  setLoadingState,
}: EnhancedServiceParams) => {
  const dispatch = store.dispatch;

  return callWrappedServiceDebounced({
    service: () => retrieveUsers(),
    onPreRequest,
    onSuccess: (data?: PatientResponse) => {
      dispatch(setPatients(data));
      if (onSuccess) {
        onSuccess(data);
      }
    },
    onError: (error) => {
      console.log('🚀 ~ file: services.ts:38 ~ error:', error);
      onError(error);
    },
    setLoadingState,
  });
};
