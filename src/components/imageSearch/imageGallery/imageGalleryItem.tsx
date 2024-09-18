import React from 'react';
import scss from './imageGalleryItem.module.scss';
import { ImageGalleryItemImage } from './imageGalleryItem.styled';
// Оголосіть типи для пропсів
interface ImageGalleryItemProps {
  webformatURL: string;
  tags: string;
  onClick: () => void;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({ webformatURL, tags, onClick }) => {
  return (
    <ImageGalleryItemImage
      src={webformatURL}
      alt={tags}
      onClick={onClick}
    />
  );
};

export default ImageGalleryItem;