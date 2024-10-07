import { by, element, expect, device } from 'detox';
import {
  BOOK_BUTTON,
  BOOKING_DETAIL_SCREEN_ID,
  BOOKING_SCREEN_ID,
  HOME_SCREEN_ID,
} from '../ids';

describe('Booking Movie', () => {
  beforeAll(async () => {
    await device.launchApp({ delete: true, newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display the home screen', async () => {
    // Verify home screen is displayed
    await expect(element(by.id(HOME_SCREEN_ID))).toBeVisible();
  });

  it('should display the list of movies', async () => {
    // Verify list of movies is displayed
    await expect(element(by.id('home-list-movies'))).toBeVisible();
  });

  it('should navigate to booking detail screen when tapping "Book Ticket"', async () => {
    // Tap the "Book Ticket" button on the first movie item
    await element(by.id(BOOK_BUTTON(HOME_SCREEN_ID)))
      .atIndex(0)
      .tap();

    // Verify the booking detail screen is displayed
    await expect(element(by.id(BOOKING_DETAIL_SCREEN_ID))).toBeVisible();
  });

  it('should navigate to booking screen after tapping "Book Ticket" on detail screen', async () => {
    // Tap the "Book Ticket" button on the booking detail screen
    await element(by.id(BOOK_BUTTON(BOOKING_DETAIL_SCREEN_ID))).tap();

    // Verify the booking screen is displayed
    await expect(element(by.id(BOOKING_SCREEN_ID))).toBeVisible();
  });
});
