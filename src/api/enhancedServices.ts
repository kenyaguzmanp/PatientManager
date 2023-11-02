import { debounce, noop } from 'lodash';

import { CallWrappedServiceParams, WrappedFunctionWithLoadingServiceParams } from './interfaces';
import { DEBOUNCE_PROPS_DEFAULT, DEBOUNCE_TIMER_MIN } from '../static/constants/ServicesConstants';
import { PatientResponse } from '../types/patient/intex';

export const callWrappedService = ({
  service,
  onPreRequest,
  onSuccess,
  onError,
}: CallWrappedServiceParams) => {
  onPreRequest();
  return service().then(onSuccess, onError);
};

export const callWrappedServiceWithLoading = ({
  service,
  onPreRequest = noop,
  setLoadingState = noop,
  onSuccess = noop,
  onError = noop,
}: WrappedFunctionWithLoadingServiceParams) => {
  setLoadingState(true);
  return callWrappedService({
    service,
    onPreRequest,
    onSuccess: (response?: PatientResponse) => {
      setLoadingState(false);
      return onSuccess(response);
    },
    onError: (error) => {
      setLoadingState(false);
      return onError(error);
    },
  });
};

export const callWrappedServiceDebounced = debounce(
  async ({
    service,
    onPreRequest,
    onSuccess,
    onError,
    setLoadingState,
  }: WrappedFunctionWithLoadingServiceParams) => {
    return await callWrappedServiceWithLoading({
      service,
      setLoadingState,
      onPreRequest,
      onSuccess,
      onError,
    });
  },
  DEBOUNCE_TIMER_MIN,
  DEBOUNCE_PROPS_DEFAULT,
);
