const Sale = require('./saleModel');


exports.getAllSale = async (req, res) => {
    try {
        const allSales = await Sale.find({});

        res.json({
            status: 200,
            data: allSales
        })
    } catch(err) {
        console.log(err);
    }
}
