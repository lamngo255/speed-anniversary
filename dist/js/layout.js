const setupLayout = () => {
  const docEl = document.documentElement;
  const baseWidth = 1920;

  // set size for root element
  function resetRoot() {
    setTimeout(() => {
      const imax = window.innerWidth;
      docEl.style.fontSize = `${(imax / baseWidth) * 100}px`;
      docEl.style.width = `${imax}px`;
    }, 200);
  }
  resetRoot();
  window.addEventListener('orientationchange', resetRoot);
};

setupLayout();
