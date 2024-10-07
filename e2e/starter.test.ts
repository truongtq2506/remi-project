import { by, device, element, expect } from 'detox';

jest.setTimeout(120000);

describe('Bottom Tab Navigation', () => {
  beforeAll(async () => {
    await device.launchApp(); // Set timeout in milliseconds
  }, 120000);

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display the home screen initially', async () => {
    await expect(element(by.id('home-screen-id'))).toBeVisible();
  });

  it('should navigate to the booking screen when the booking tab is pressed', async () => {
    await element(by.id('tab-booking')).tap();
    await expect(element(by.id('booking-screen-id'))).toBeVisible();
  });

  it('should display an error message if the booking screen fails to load', async () => {
    await element(by.id('Booking')).tap();
    await expect(
      element(by.text('Failed to load booking screen')),
    ).toBeVisible();
  });

  it('should navigate to the favorites screen when the favorites tab is pressed', async () => {
    await element(by.id('tab-favorite')).tap();
    await expect(element(by.id('favourite-screen-id'))).toBeVisible();
  });

  it('should display an error message if the favorites screen fails to load', async () => {
    await element(by.id('tab-favorite')).tap();
    await expect(
      element(by.text('Failed to load favorites screen')),
    ).toBeVisible();
  });
});
