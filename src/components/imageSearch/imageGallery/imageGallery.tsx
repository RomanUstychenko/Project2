import { ImageGalleryWrap, ImageGalleryList } from "./imageGallery.styled";
import ImageGalleryItem from "./imageGalleryItem";

// Оголошуємо інтерфейс для типізації items
interface ImageGalleryProps {
  items: {
    id: number;
    webformatURL: string;
    largeImageURL: string;
    tags: string;
  }[];
  onClick: (item: { largeImageURL: string }) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onClick }) => {
  return (
    <ImageGalleryWrap>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryList key={id}>
          <ImageGalleryItem
            webformatURL={webformatURL}
            tags={tags}
            onClick={() => onClick({ largeImageURL })}
          />
        </ImageGalleryList>
      ))}
    </ImageGalleryWrap>
  );
};