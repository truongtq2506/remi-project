import { useEffect, useRef, useState } from 'react';
import { BackHandler, Linking } from 'react-native';

import {
  createNavigationContainerRef,
  NavigationContainer,
  NavigationState,
  PartialState,
} from '@react-navigation/native';

import LocalStorage from '@/utils/storage-util';
import { RootStackParamLists } from '../root-navigation/types';
import { useIsMounted } from '@/hooks/custom-hooks';
import { isIOS } from '@/utils';
import { PersisNavigationConfig } from '../router';
import RouteConfig from '../router/router-config';

type Storage = typeof LocalStorage;

export const navigationRef =
  createNavigationContainerRef<RootStackParamLists>();

/**
 * Gets the current screen from any navigation state.
 * @param {NavigationState | PartialState<NavigationState>} state - The navigation
 *  state to traverse.
 * @returns {string} - The name of the current screen.
 */
export const getActiveRouteName = (
  state: NavigationState | PartialState<NavigationState>,
): string => {
  const route = state.routes[state.index ?? 0];

  // Found the active route --return the name
  if (!route.state) {
    return route.name as keyof RootStackParamLists;
  }

  // Rescursive call to deal with nested routers
  return getActiveRouteName(
    route.state as NavigationState<RootStackParamLists>,
  );
};

export const useBackButtonHandler = (
  canExit: (routeName: string) => boolean,
) => {
  // The reason we're using a ref here is because we need to the able
  // to update the canExit function without re-setting up all the listeners
  const canExitRef = useRef(canExit);

  useEffect(() => {
    // We'll fire this when the back button is pressed on Android.
    const onBackPress = () => {
      if (!navigationRef.isReady()) {
        return false;
      }
      // grab the current route
      const routeName = getActiveRouteName(navigationRef.getRootState());

      // are we allowed to exit?
      if (canExitRef.current(routeName)) {
        // exit and let the system know we've handled the event
        BackHandler.exitApp();
        return true;
      }

      // we can't exit, so let's turn this into a back action
      if (navigationRef.canGoBack()) {
        navigationRef.goBack();
        return true;
      }
      return false;
    };

    // ignore unless android... no back button
    if (isIOS()) {
      return;
    }

    // Subscribe when we come to life
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    // Unsubscribe when we're done
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);
};

/**
 * This helper function will determine whether we should enable navigation persistence
 * based on a config setting and the __DEV__ environment (dev or prod).
 * @param {PersistNavigationConfig} persistNavigation - The config setting for
 *  navigation persistence.
 * @returns {boolean} - Whether to restore navigation state by default.
 */

const navigationRestoredDefaultState = (
  persistNavigation: PersisNavigationConfig,
) => {
  if (persistNavigation === 'always') return false;
  if (persistNavigation === 'dev' && __DEV__) return false;
  if (persistNavigation === 'prod' && !__DEV__) return false;

  // all other cases, disable restoration by returning true
  return true;
};

/**
 * Custom hook for persisting navigation state.
 * @param {Storage} storage - The storage utility to use.
 * @param {string} persistenceKey - The key to use for storing the navigation state.
 * @returns {object} - The navigation state and persistence functions.
 */

export type NavigationProps = Partial<
  React.ComponentProps<typeof NavigationContainer>
>;

export const useNavigationPersitence = (
  storage: Storage,
  persistenceKey: string,
) => {
  const [initialNavigationState, setInitialNavigationState] = useState<
    NavigationProps['initialState'] | undefined
  >(undefined);
  const isMounted = useIsMounted();

  const initNavState = navigationRestoredDefaultState(
    RouteConfig.persistNavigation,
  );
  const [isRestored, setIsRestored] = useState<boolean>(initNavState);
  const routerNameRef = useRef<keyof RootStackParamLists | undefined>();

  const onNavigationStateChange = (state: NavigationState | undefined) => {
    const previousRouteName = routerNameRef.current;

    if (state !== undefined) {
      const currentRouteName = getActiveRouteName(state);

      if (previousRouteName !== currentRouteName) {
        // track screens.
        if (__DEV__) {
          console.log(currentRouteName);
        }
      }

      // Save the current route name for later comparison
      routerNameRef.current = currentRouteName as keyof RootStackParamLists;
      // Persist state to change
      storage.setItem(persistenceKey, JSON.stringify(state));
    }
  };

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        // Only restore the state if app has not started from a deep link
        if (!initialUrl) {
          const stateLocal = await storage.getItem(persistenceKey);
          const state =
            typeof stateLocal === 'string'
              ? JSON.parse(stateLocal)
              : (null as NavigationProps['initialState'] | null);
          if (state) {
            setInitialNavigationState(state);
          }
        }
      } finally {
        if (isMounted()) {
          setIsRestored(true);
        }
      }
    };
    if (!isRestored) {
      restoreState();
    }
  }, [initialNavigationState, isMounted, isRestored, persistenceKey, storage]);

  return { onNavigationStateChange, isRestored, initialNavigationState };
};
