// Google Analytics measurement ID
export const GA_MEASUREMENT_ID = "G-E6BJG085B6";

// Send a custom event to Google Analytics
// Usage: gtagEvent("event_name", { key: "value" })
export function gtagEvent(action, params = {}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
}
