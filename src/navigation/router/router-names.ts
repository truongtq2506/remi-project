export const TabRoutesName = {
  TabHome: 'TabHome',
  TabBooking: 'TabBooking',
  TabFavourite: 'TabFavourite',
} as const;

export const AppRoutesName = {
  BookingDetail: 'BookingDetail',
  ...TabRoutesName,
} as const;
