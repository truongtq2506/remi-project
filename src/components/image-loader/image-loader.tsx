import React, { useState, FC, useCallback, useMemo, memo } from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  StyleSheet,
  Text,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import ImageLoaderError from './image-loader-error';

interface IImageLoader {
  imageUrl?: string;
  style?: ViewStyle;
  imageStyle?: ImageStyle;
}

const ImageLoader: FC<IImageLoader> = ({ imageUrl, style, imageStyle }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = useCallback(() => {
    setLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setLoading(false);
    setError(true);
  }, []);

  const source = useMemo(() => ({ uri: imageUrl }), [imageUrl]);

  return (
    <View style={[styles.container, style]}>
      {loading && !error && (
        <ActivityIndicator size="large" color="#C1C9D2" style={styles.loader} />
      )}
      {error || !imageUrl ? (
        <ImageLoaderError contentStyle={[styles.image, imageStyle || {}]} />
      ) : (
        <Image
          source={source}
          style={[styles.image, imageStyle]}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 250,
    resizeMode: 'cover',
  },
  loader: {
    position: 'absolute',
  },
});

export default memo(ImageLoader);
