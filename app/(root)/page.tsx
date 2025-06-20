import React from 'react';
import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';

export const metadata = {
  title: 'Home'
};
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve,ms));
const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  // await delay(2000);
  return (
    <>
      <ProductList data={latestProducts} title='Newest Arrivals' limit={4}/>
    </>
  )
}

export default HomePage;

