import Cart from '../pages/Cart';
import DetailProduct from '../pages/DetailProduct';
import Product from '../pages/Product';
import Profile from '../pages/Profile';
import Admin from '../pages/Admin';

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
  },
  {
    path: '/profile',
    element: Profile,
    isShowHeader: true
  },
  {
    path: '/admin',
    element: Admin,
    isShowHeader: false
  }
];
