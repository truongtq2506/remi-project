import { v4 as uuidv4 } from 'uuid';
import { Movie } from '@/screens/types';
import thumbnailImageData from '@/assets/data/thumbnail.json';

export const generateRandomMovies = (numberMovies: number): Movie[] => {
  const genres = [
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Fantasy',
    'Horror',
    'Mystery',
    'Thriller',
  ];

  const getRandomElement = (arr: any[]) =>
    arr[Math.floor(Math.random() * arr.length)];

  const getRandomImages = () => {
    const numImages = Math.floor(Math.random() * 100) + 1; // 1 to 3 images
    const selectedImages = [];
    for (let i = 0; i < numImages; i++) {
      selectedImages.push(getRandomElement(thumbnailImageData));
    }
    return selectedImages;
  };

  const movies: Movie[] = [];

  for (let i = 0; i < numberMovies; i++) {
    movies.push({
      movieId: uuidv4(),
      title: `Movie Title ${i + 1}`,
      description: `This is a description of movie ${
        i + 1
      }. It is a great movie with lots of action and suspense.`,
      thumbnail: Math.floor(Math.random() * 100), // Random number for thumbnail
      isFavorite: Math.random() < 0.09, // 50% chance to be favorite
      isBooked: i === 0 ? false : Math.random() < 0.05, // 50% chance to be booked
      imageurl: getRandomImages(),
      timestamp: Date.now() - Math.floor(Math.random() * 1000000000), // Random timestamp
      genre: Array.from(
        new Set([getRandomElement(genres), getRandomElement(genres)]),
      ), // 1-2 random genres
      imdbrating: Math.round((Math.random() * 9 + 1) * 10) / 10, // Random rating from 1 to 10, one decimal place
      released: Math.floor(Math.random() * 40) + 1980, // Random year from 1980 to 2020
    });
  }

  return movies;
};
