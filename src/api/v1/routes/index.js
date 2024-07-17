let express    = require('express');
let router     = express.Router();
const multer   = require('multer');
const { SuccessResponseObject } = require('../../../common/http');
const services = require('../services');

const storage = multer.memoryStorage();
const upload  = multer({ storage: storage });

module.exports = router;

router.post('/scraper-mail/:email', function (req, res, next) {
    res.status(200).send('ok: scraper-mail');
});

router.post('/scraper-pdf/:reason', upload.single('pdf'), function (req, res, next) {
    services.pdfExtractor.convertPDFtoText(req, res, next);
});

router.get('/', (req, res) => res.json(new SuccessResponseObject('<pre>Smarter-PFT v.1.0.0<br/>🪙 Smarter Personal Finance Tracker</pre>')));
module.exports = router;