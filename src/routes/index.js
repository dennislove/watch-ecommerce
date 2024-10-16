import Cart from '../pages/Cart';
import DetailProduct from '../pages/DetailProduct';
import Product from '../pages/Product';

export const routes = [
  {
    path: '/',
    element: Product,
    isShowHeader: true
  },
  {
    path: '/detail-product/:id',
    element: DetailProduct,
    isShowHeader: true
  },
  {
    path: '/cart',
    element: Cart,
    isShowHeader: true
  }
];
