// hooks/usePoop.js
import { useState } from 'react';

const formatTimeObj = (t) => {
  if (!t) return 'Not set';
  const hh = String(t.hour).padStart(2, '0');
  const mm = String(t.minute).padStart(2, '0');
  return `${hh}:${mm} ${t.ampm}`;
};

export function usePoop () {
  const [lastPoopTime, setLastPoopTime] = useState(null);
  const [poopModalVisible, setPoopModalVisible] = useState(false);
  const [poopHour, setPoopHour] = useState(12);
  const [poopMinute, setPoopMinute] = useState(0);
  const [poopAMPM, setPoopAMPM] = useState('PM');

  const openPoopModalInit = () => {
    // initialize to current time if unset
    if (!lastPoopTime) {
      const d = new Date();
      let hour = d.getHours();
      let ampm = 'AM';
      if (hour >= 12) {
        ampm = 'PM';
        if (hour > 12) hour -= 12;
      } else if (hour === 0) hour = 12;
      setPoopHour(hour);
      setPoopMinute(d.getMinutes());
      setPoopAMPM(ampm);
    } else {
      setPoopHour(lastPoopTime.hour);
      setPoopMinute(lastPoopTime.minute);
      setPoopAMPM(lastPoopTime.ampm);
    }
    setPoopModalVisible(true);
  };

  const savePoopTime = () => {
    // sanitize hour/min
    let h = parseInt(poopHour, 10);
    let m = parseInt(poopMinute, 10);
    if (isNaN(h) || h < 1) h = 1;
    if (h > 12) h = 12;
    if (isNaN(m) || m < 0) m = 0;
    if (m > 59) m = 59;
    setLastPoopTime({ hour: h, minute: m, ampm: poopAMPM });
    setPoopModalVisible(false);
  };

  const closePoopModal = () => {
    setPoopModalVisible(false);
  };

  return {
    lastPoopTime,
    poopModalVisible,
    poopHour,
    poopMinute,
    poopAMPM,
    setPoopHour,
    setPoopMinute,
    setPoopAMPM,
    setPoopModalVisible,
    openPoopModalInit,
    savePoopTime,
    closePoopModal,
    formatTimeObj,
  };
};