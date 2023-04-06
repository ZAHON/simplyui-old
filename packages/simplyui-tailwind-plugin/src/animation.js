module.exports = {
  animation: {
    'progress-stripes':
      'progress-stripes var(--progress-stripes-animation-duration) linear infinite',
    'progress-indeterminate':
      'progress-indeterminate var(--progress-indeterminate-animation-duration) ease infinite normal none running',
    'skeleton-fade': 'skeleton-fade var(--skeleton-animation-duration) linear infinite',
  },
  keyframes: {
    'progress-stripes': {
      '0%': { 'background-position-x': 0 },
      '100%': { 'background-position-x': '2.5rem' },
    },
    'progress-indeterminate': {
      '0%': { transform: 'translateX(-200%)' },
      '100%': { transform: 'translateX(200%)' },
    },
    'skeleton-fade': {
      '0%': { opacity: 0.1 },
      '50%': { opacity: 1 },
      '100%': { opacity: 0.1 },
    },
  },
};
