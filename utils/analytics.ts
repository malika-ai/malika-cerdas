// Type declaration for Facebook Pixel
declare global {
  interface Window {
    fbq?: (action: string, event: string, data?: Record<string, any>) => void;
  }
}

/**
 * Tracks a Facebook Pixel event
 * @param event - The name of the event to track (e.g., 'AddToCart', 'Lead', 'Purchase')
 * @param data - Optional additional data to send with the event
 */
export const trackFacebookPixelEvent = (
  event: string,
  data?: Record<string, any>
): void => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', event, data);
  }
};

/**
 * Convenience function to track AddToCart events (used for booking/consultation intents)
 */
export const trackAddToCart = (): void => {
  trackFacebookPixelEvent('AddToCart');
};
