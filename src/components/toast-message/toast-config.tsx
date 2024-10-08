import React, { JSX } from 'react';
import {
  BaseToast,
  BaseToastProps,
  ToastConfigParams,
} from 'react-native-toast-message';
import ToastFavourite from './toast-favourite';
import { FavouriteToastType } from './toast-types';

export const toastConfig = {
  success: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast {...props} />
  ),
  error: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast {...props} />
  ),
  favouriteFilm: (
    props: JSX.IntrinsicAttributes & ToastConfigParams<FavouriteToastType>,
  ) => <ToastFavourite {...props} />,
};
