module.exports = {
  name: 'ui-keypad',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-keypad',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
