import React from 'react';
import scss from './imageGalleryItem.module.scss';

// Оголосіть типи для пропсів
interface ImageGalleryItemProps {
  webformatURL: string;
  tags: string;
  onClick: () => void;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({ webformatURL, tags, onClick }) => {
  return (
    <img
      className={scss.ImageGalleryItemImage}
      src={webformatURL}
      alt={tags}
      onClick={onClick}
    />
  );
};

export default ImageGalleryItem;