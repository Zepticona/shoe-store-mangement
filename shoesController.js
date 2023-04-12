const Shoe = require('./shoesModel');
const Sale = require('./saleModel');

exports.createShoe =  async (req, res) => {
    try {
        const shoePromise =  await Shoe.create(req.body)
        console.log(shoePromise);

        res.json({
            status: 200,
            data: 'success'
        })
    } catch(err) {
        console.log(err);
    }
}

exports.sellShoe = async (req, res) => {
    try {
        const {price, size, id} = req.params;
        console.log(req.query);
        
        console.log(req.body);

        // Update shoe data
        const soldShoe = await Shoe.findById(id);            
        
        const indx = soldShoe.sizes.findIndex((sz, i) => sz.size === size);
        if(soldShoe.sizes[indx].pcs>0) {
            // Create a sale record
            const createdSale = await Sale.create({
                brand: soldShoe.brand,
                articleNo: soldShoe.articleNo,
                size: size,
                sellingPrice: Number(price),
                sellingDate: new Date()
            });  
            soldShoe.sizes[indx].pcs--;
        }
        const updatedShoe = await soldShoe.save();       

        
        res.json({
            status: 200,
            data: updatedShoe
        })
    } catch(err) {
        console.log(err);
    }
}

exports.getAllShoes = async (req, res) => {
    try {
        const allShoes = await Shoe.find({});

        res.json({
            status: 200,
            data: allShoes
        })
    } catch(err) {
        console.log(err);
    }
}
