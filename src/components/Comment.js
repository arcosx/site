import React, { useEffect, useRef } from 'react';
import { init } from '@waline/client';

import '@waline/client/dist/waline.css';

export const Waline = (props) => {
  const walineInstanceRef = useRef(null);
  const containerRef = React.createRef();

  useEffect(() => {
    walineInstanceRef.current = init({
      ...props,
      el: containerRef.current,
    });

    return () => {
      if (walineInstanceRef.current && typeof walineInstanceRef.current.destroy === 'function') {
        walineInstanceRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (walineInstanceRef.current && typeof walineInstanceRef.current.update === 'function') {
      walineInstanceRef.current.update(props);
    }
  }, [props]);

  return <div ref={containerRef} />;
};
