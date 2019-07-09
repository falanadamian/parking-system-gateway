module.exports = {
  name: 'ui-ticket-print',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-ticket-print',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
