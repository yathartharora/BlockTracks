const router = require('express').Router();
let Product = require('../models/products.model');


router.route('/').get((req, res) => {
    Product.find()
      .then(products => res.json(products))
      .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) => {
    const productname = req.body.productname;
    const productbrand = req.body.productbrand;
    const productprice = Number(req.body.productprice);
    const productsize = Number(req.body.productsize);
    const productcode = req.body.productcode;
    const isresold = Boolean(req.body.isresold);
    const hash = req.body.hash;

    const newProduct = new Product({
        productname,
        productbrand,
        productprice,
        productsize,
        productcode,
        isresold,
        hash,
    });

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;