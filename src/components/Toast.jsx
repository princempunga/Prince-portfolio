import React, { useEffect, useRef, useState } from 'react';

/**
 * Toast notification component.
 * Types: 'success' | 'error' | 'loading'
 * Auto-hides after 4s for success/error.
 */
const Toast = ({ message, type, onHide }) => {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));

    if (type !== 'loading') {
      timerRef.current = setTimeout(() => {
        setVisible(false);
        setTimeout(onHide, 400);
      }, 4000);
    }

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timerRef.current);
    };
  }, [type, onHide]);

  const renderIcon = () => {
    if (type === 'loading') {
      return <span className="toast-spinner"></span>;
    }
    if (type === 'success') {
      return <i className="fa fa-check-circle toast-fa-icon"></i>;
    }
    if (type === 'error') {
      return <i className="fa fa-times-circle toast-fa-icon"></i>;
    }
    return null;
  };

  return (
    <div className={`toast-notification toast-${type} ${visible ? 'toast-show' : ''}`}>
      <span className="toast-icon">{renderIcon()}</span>
      <span className="toast-message">{message}</span>
      {type !== 'loading' && (
        <button
          className="toast-close"
          onClick={() => { setVisible(false); setTimeout(onHide, 400); }}
          aria-label="Close notification"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Toast;
