// src/componentes/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',  // Puedes cambiar 'smooth' por 'auto' si prefieres que sea instantáneo
    });
  }, [pathname]);

  return null;  
};

export default ScrollToTop;
