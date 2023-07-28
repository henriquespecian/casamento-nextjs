export const isMobileDevice = () => {
  return typeof window !== 'undefined' && window.innerWidth < 992;
};
