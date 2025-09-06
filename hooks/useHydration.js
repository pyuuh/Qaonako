// hooks/useHydration.js
import { useState, useMemo } from 'react';

const clamp = (v, min = 0, max = 100) => Math.max(min, Math.min(max, v));

export function useHydration () {
  const [hydration, setHydration] = useState(0);

  // Progress percentage (clamped)
  const hydrationPct = useMemo(() => clamp(Math.round((hydration / 8) * 100)), [hydration]);

  const incrementHydration = () => setHydration((p) => p + 1);
  const decrementHydration = () => setHydration((p) => Math.max(0, p - 1));

  return {
    hydration,
    hydrationPct,
    incrementHydration,
    decrementHydration,
  };
};