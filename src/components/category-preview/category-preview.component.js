import ProductCard from '../product-card/product-card.component';
import {
  CatargoryPreviewContainer,
  Preview,
  Title,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <CatargoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CatargoryPreviewContainer>
  );
};

export default CategoryPreview;
