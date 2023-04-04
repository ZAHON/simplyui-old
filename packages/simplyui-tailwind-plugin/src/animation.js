module.exports = {
  animation: {
    'progress-stripes':
      'progress-stripes var(--progress-stripes-animation-duration) linear infinite',
    'progress-indeterminate':
      'progress-indeterminate var(--progress-indeterminate-animation-duration) ease infinite normal none running',
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
  },
};
