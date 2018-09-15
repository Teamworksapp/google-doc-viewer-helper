export default {
  default: {
    baseUrl: 'https://docs.google.com/viewer',
    options: {
      embedded: {
        key: 'embedded',
        options: [true, false],
      },
      url: {
        key: 'url',
        required: true,
        mustEncode: true,
      },
    },
  },
  gview: {
    baseUrl: 'https://docs.google.com/gview',
    options: {
      embedded: {
        key: 'embedded',
        options: [true, false],
      },
      url: {
        key: 'url',
        required: true,
        mustEncode: true,
      },
    },
    deprecated: true,
  },
};