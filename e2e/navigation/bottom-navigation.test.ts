import { by, device, element, expect } from 'detox';
import {
  BOOKING_SCREEN_ID,
  FAVOURITE_SCREEN_ID,
  HOME_SCREEN_ID,
  TAB_BOOKING,
  TAB_FAVOURITE,
} from 'e2e/ids';

describe('Bottom Tab Navigation', () => {
  beforeAll(async () => {
    await device.launchApp(); // Set timeout in milliseconds
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display the home screen initially', async () => {
    await expect(element(by.id(HOME_SCREEN_ID))).toBeVisible();
  });

  it('should navigate to the booking screen when the booking tab is pressed', async () => {
    await element(by.id(TAB_BOOKING)).tap();
    await expect(element(by.id(BOOKING_SCREEN_ID))).toBeVisible();
  });

  it('should navigate to the favorites screen when the favorites tab is pressed', async () => {
    await element(by.id(TAB_FAVOURITE)).tap();
    await expect(element(by.id(FAVOURITE_SCREEN_ID))).toBeVisible();
  });
});
