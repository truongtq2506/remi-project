import { ViewStyle } from 'react-native';

export interface IMovieCard {
  bookTicketID?: string;
  favouriteID?: string;
  movieId?: string;
  thumbnailUrl?: string;
  title?: string;
  description?: string;
  isFavorite?: boolean;
  isBooked?: boolean;
  style?: ViewStyle;
  isShowFavouriteButton?: boolean;
  isShowBookButton?: boolean;
  onPress?: () => void;
  onPressBookTicket?: (movieId: string) => void;
  onPressFavourite?: (movieId: string, isFavorite?: boolean) => void;
}
