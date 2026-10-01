const configuredGaId = import.meta.env.PUBLIC_GA_MEASUREMENT_ID === undefined
  ? 'G-7EKF16D1R7'
  : import.meta.env.PUBLIC_GA_MEASUREMENT_ID.trim();

export const gaMeasurementId = /^G-[A-Z0-9]+$/.test(configuredGaId) ? configuredGaId : undefined;
