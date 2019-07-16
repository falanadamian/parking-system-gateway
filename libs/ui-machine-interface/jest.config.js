module.exports = {
  name: 'ui-machine-interface',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-machine-interface',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
