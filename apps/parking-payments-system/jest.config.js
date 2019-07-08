module.exports = {
  name: 'parking-payments-system',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/parking-payments-system',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
