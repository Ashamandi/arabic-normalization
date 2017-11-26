

# Arabic-normalization
Nodejs module to normalize Arabic chars to improve search and replace function for Arabic utterances.


## installation

npm install arabic-normalization

## Usage

   var normalize = require('arabic-normalization');
   normalize("İì ÇáÃÓÈæÚ ÇáÍÇáí íÊã ÊÍÏíÏ ßã ÅÕÈÚ");
   
   output:
   
   "İí ÇáÇÓÈæÚ ÇáÍÇáí íÊã ÊÍÏíÏ ßã ÇÕÈÚ"
   

## Developing


## Tests

  npm test


### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
