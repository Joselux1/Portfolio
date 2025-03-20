import React, { useState, useEffect } from 'react';

interface TimezoneProps {
  timezone: string;
}

const Timezone: React.FC<TimezoneProps> = ({ timezone }) => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleString('es-ES', {
        timeZone: timezone,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      setDateTime(now);
    };

    updateTime(); // Llamamos a la función inmediatamente
    const interval = setInterval(updateTime, 1000); // Actualizar cada segundo

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div>
      <p>{dateTime}</p>
      <p className="text-sm text-gray-500">{timezone}</p>
    </div>
  );
};

export default Timezone;
