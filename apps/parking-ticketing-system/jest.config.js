module.exports = {
  name: 'parking-ticketing-system',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/parking-ticketing-system',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
