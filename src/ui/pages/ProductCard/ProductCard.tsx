import React from 'react';
import { useParams } from 'react-router-dom';
import LowBanner from '../components/LowBanner';

import StyledProductCard from './ProductCard.style';

const ProductCard: React.FC = () => {
  const { bookId } = useParams();
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('fetch.getcurrentdevice', bookId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledProductCard>
      ProductCart
      <LowBanner />
    </StyledProductCard>
  );
};

export default ProductCard;
