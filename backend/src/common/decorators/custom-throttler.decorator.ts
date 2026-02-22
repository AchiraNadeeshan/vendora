// Custom throttl config

import { Throttle } from '@nestjs/throttler';

// Strict rate for auth, payments
export const StrictThrottle = () =>
  Throttle({
    default: {
      ttl: 1000,
      limit: 3, // Only 3 requests per second
    },
  });

// Moderate rate for orders
export const ModerateThrottle = () =>
  Throttle({
    default: {
      ttl: 1000,
      limit: 5, // 5 requests per second
    },
  });

// Relaxed rate for read operations
export const RelaxedThrottle = () =>
  Throttle({
    default: {
      ttl: 1000,
      limit: 20, // 20 requests per second
    },
  });
