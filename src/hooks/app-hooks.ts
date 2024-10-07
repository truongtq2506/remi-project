import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export const useBottomTabBarHeightValue = () => {
  const bottomTabBarHeight = useBottomTabBarHeight();
  return {
    bottomTabBarHeight,
  };
};
