import scss from "./imageGallery.module.scss";
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
    <ul className={scss.ImageGallery}>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li className={scss.ImageGalleryItem} key={id}>
          <ImageGalleryItem
            webformatURL={webformatURL}
            tags={tags}
            onClick={() => onClick({ largeImageURL })}
          />
        </li>
      ))}
    </ul>
  );
};