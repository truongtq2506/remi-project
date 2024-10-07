import { by, element, expect, device } from 'detox';
import {
  BOOK_BUTTON,
  BOOKING_DETAIL_SCREEN_ID,
  BOOKING_SCREEN_ID,
  HOME_LIST_MOVIES,
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
    await expect(element(by.id(HOME_SCREEN_ID))).toBeVisible();
  });

  it('should display the list of movies', async () => {
    await expect(element(by.id(HOME_LIST_MOVIES))).toBeVisible();
  });

  it('should navigate to booking detail screen when tapping "Book Ticket"', async () => {
    await element(by.id(BOOK_BUTTON(HOME_SCREEN_ID)))
      .atIndex(0)
      .tap();

    // Verify the booking detail screen is displayed
    await expect(element(by.id(BOOKING_DETAIL_SCREEN_ID))).toBeVisible();
  });

  it('should navigate to booking screen after tapping "Book Ticket" on detail screen', async () => {
    await element(by.id(BOOK_BUTTON(BOOKING_DETAIL_SCREEN_ID))).tap();

    await expect(element(by.id(BOOKING_SCREEN_ID))).toBeVisible();
  });
});
