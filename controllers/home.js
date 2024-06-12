const MenutItem = require('../models/MenuItems')
module.exports = {
    getIndex: (req, res) => {
        res.render('index')
    },
    getIndexAr: (req, res) => {
        res.render('indexAr')
    }
}

