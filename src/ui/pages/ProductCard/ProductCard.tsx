import React from 'react';
import { useParams } from 'react-router-dom';

import LowBanner from '../components/LowBanner';
import Recommendation from './components/Recommendation';

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
      {bookId}
      <LowBanner />
      <h2 className="recommendation__title">Recommendations</h2>
      <Recommendation />
    </StyledProductCard>
  );
};

export default ProductCard;