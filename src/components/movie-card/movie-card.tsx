import React, { FC, memo } from 'react';
import { Pressable, View } from 'react-native';

import ButtonBookTicket from '../button-book-ticket';
import ButtonFavourite from '../button-favourite';
import RnText from '../rn-text';
import ImageLoader from '../image-loader';
import styles from './movie-card.styles';
import { IMovieCard } from './movie-card.types';

const MovieCard: FC<IMovieCard> = ({
  movieId,
  thumbnailUrl,
  title,
  description,
  isFavorite,
  isBooked,
  style,
  isShowFavouriteButton,
  isShowBookButton,
  bookTicketID,
  favouriteID,
  onPress,
  onPressBookTicket,
  onPressFavourite,
}) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <ImageLoader imageUrl={thumbnailUrl} imageStyle={styles.thumbnail} />
      <RnText text={title} marginTop={8} numberOfLines={1} />
      {description && <RnText text={description} marginTop={8} />}
      {(isShowFavouriteButton || isShowBookButton) && (
        <View style={styles.wrapButtonContent}>
          {isShowFavouriteButton && (
            <ButtonFavourite
              testID={favouriteID}
              movieId={movieId}
              isFavorite={isFavorite}
              style={styles.buttonFavourite}
              onPress={onPressFavourite}
            />
          )}
          {isShowBookButton && (
            <ButtonBookTicket
              testID={bookTicketID}
              movieId={movieId}
              isBooked={isBooked}
              onPress={onPressBookTicket}
              style={styles.buttonBook}
            />
          )}
        </View>
      )}
    </Pressable>
  );
};

export default memo(MovieCard);
