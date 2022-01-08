import Product from '../models/product';

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    '848 Seed',
    'https://turtletreeseed.org/wp-content/uploads/2015/06/vermont-red-kernel-popcorn.jpg',
    'A red t-shirt, perfect for days with non-red weather.',
    29.99,
  ),
  new Product(
    'p2',
    'u1',
    '848 Seed',
    'https://solsticeseeds.org/wp-content/uploads/2020/11/corn_rotertessinermais.jpg',
    'Fits your red shirt perfectly. To stand on. Not to wear it.',
    99.99,
  ),
  new Product(
    'p3',
    'u2',
    'White',
    'http://cdn.shopify.com/s/files/1/1537/5553/products/11413_grande.jpg?v=1486444974',
    'Can also be used for tea!',
    8.99,
  )
];

export default PRODUCTS;
