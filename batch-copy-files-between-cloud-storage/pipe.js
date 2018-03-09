// if you haven't yet install the Flex.io JS SDK, you'll need to do that
// before running this script. To do so, run `npm install flexio-sdk-js`.
var Flexio = require('flexio-sdk-js')

// insert your API key here to use the Flex.io JS SDK with your account
Flexio.setup('YOUR_API_KEY')

// This is the Flex.io pipe logic to read a CSV file from AWS S3 and write it to Dropbox
// Note that the aliases below will need to be replaced with your connection aliases (e.g. `{username}-s3`)
var pipe = Flexio.pipe()
  .read('/tutorial-s3/contacts.csv')
  .write('/tutorial-dropbox/contacts.csv')

// You may save your pipe in the Flex.io app, which enables a pipe endpoint to be called using an alias, via REST
// API or cURL. Note that the alias `examples-batch-copy-files-between-cloud-storage` below needs to be replaced with
// your own alias in order to save this pipe to your account (e.g. `{username}-batch-copy-files-between-cloud-storage`).
pipe.save({
  name: 'Copy Single File Between Cloud Storage',
  ename: 'examples-batch-copy-files-between-cloud-storage'
})
