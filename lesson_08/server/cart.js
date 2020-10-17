const add = (cart, req) => {
    cart.contents.push(req.body);
    cart.countGoods += 1;
    cart.amount += req.body.price;
    return { name: req.body.product_name, newCart: JSON.stringify(cart, null, 4)};
};

const change = (cart, req) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    cart.countGoods += req.body.quantity;
    cart.amount += find.price;
    return {name: find.product_name, newCart: JSON.stringify(cart, null, 4)};
};

const remove = (cart, req) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    if (find.quantity > 1) {
        find.quantity--;
    } else {
        cart.contents.splice(cart.contents.indexOf(find), 1);
    }
    cart.countGoods--;
    cart.amount -= find.price;
    return {name: find.product_name, newCart: JSON.stringify(cart, null, 4)};
};

module.exports = {
    add,
    change,
    remove,
};
