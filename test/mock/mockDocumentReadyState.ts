export const mockReadyStateLoading = () => {
  Object.defineProperty(document, 'readyState', {
    value: 'loading',
    writable: true
  });
};

export const mockReadyStateInteractive = () => {
  Object.defineProperty(document, 'readyState', {
    value: 'interactive',
    writable: true
  });
};

export const mockReadyStateComplete = () => {
  Object.defineProperty(document, 'readyState', {
    value: 'complete',
    writable: true
  });
};