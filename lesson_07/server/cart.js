const logger = require('./logger');

const add = (cart, req, action) => {
    cart.contents.push(req.body);
    logger(action, req.body.product_name);
    return JSON.stringify(cart, null, 4);
};

const change = (cart, req, action) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    logger(action, find.product_name);
    return JSON.stringify(cart, null, 4);
};

const remove = (cart, req, action) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    if (find.quantity > 1) {
        find.quantity -= req.body.quantity;
    } else {
        cart.contents.splice(find, 1);
    }
    logger(action, find.product_name);
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    change,
    remove,
};
