import { getShoppingCart } from "../components/utilities/fakedb";

const loadData = async() => {
    const loadProducts = await fetch('products.json');
    const products = await loadProducts.json();
    
    const storedCart = getShoppingCart();
    const savedCart = [];

    for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
}

export default loadData;