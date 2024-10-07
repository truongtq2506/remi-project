export type Movie = {
  imageurl: string | undefined;
  movieId: string;
  title: string;
  description: string;
  thumbnail: number;
  isFavorite: boolean;
  isBooked: boolean;
  timestamp?: number;
};
