import React, { FC, memo } from 'react';
import { ActivityIndicator, StyleSheet, View, ViewStyle } from 'react-native';
import Divider from '../divider';

interface IListingFooterLoading {
  style?: ViewStyle;
  paddingTop?: boolean;
  paddingBottom?: boolean;
}

const ListingFooterLoading: FC<IListingFooterLoading> = ({
  style,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <>
      {paddingTop && <Divider height={4} />}
      <View style={[styles.loadingMore, style]}>
        <ActivityIndicator size={'large'} />
      </View>
      {paddingBottom && <Divider height={4} />}
    </>
  );
};

const styles = StyleSheet.create({
  loadingMore: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 24,
  },
});
export default memo(ListingFooterLoading);
