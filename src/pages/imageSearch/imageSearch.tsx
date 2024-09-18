import { useState, useEffect } from 'react';
import Searchbar from '../../components/imageSearch/searchbar/searchbar';
import { searchImage } from '../../components/imageSearch/API/fetch';
import Loader from '../../components/imageSearch/loader/loader';
import { ImageGallery } from '../../components/imageSearch/imageGallery/imageGallery';
import { Button } from '../../components/imageSearch/button/button';
import Modal from '../../components/imageSearch/modal/modal';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Оголошення типів для зображень та стану модального вікна
interface Image {
  id: number;
  largeImageURL: string;
  webformatURL: string;
  tags: string;
}

interface ModalImage {
  largeImageURL: string;
}

export default function ImageSearch() {
  const [items, setItems] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ModalImage>({
    largeImageURL: '',
  });

  useEffect(() => {
    if (!search) {
      return;
    }

    setLoading(true);

    const fetchImage = async () => {
      try {
        const data = await searchImage(search, page);
        if (data.hits.length === 0) {
          Notify.failure('There is no photo with this name');
        } else {
          setItems((prevItems) => [...prevItems, ...data.hits]);
        }
      } catch (err) {
        setError(err as Error); // Явно вказуємо тип помилки
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [search, page]);

  const onSearch = (inputSearch: string) => {
    if (inputSearch !== search) {
      setItems([]);
      setSearch(inputSearch);
      setPage(1);
    } else {
      setSearch(inputSearch);
    }
  };

  const LoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage({ largeImageURL: '' });
  };

  const openModal = (modalImage: ModalImage) => {
    setModalOpen(true);
    setModalImage(modalImage);
  };

  const isImage = Boolean(items.length);

  return (
    <>
      {modalOpen && (
        <Modal onClose={closeModal}>
          <img src={modalImage.largeImageURL} alt="" />
        </Modal>
      )}
      <Searchbar onSubmit={onSearch} />
      <div>
        {loading && <Loader />}
        {error && <p>Помилка: {error.message}</p>}
        {isImage && (
          <ImageGallery items={items} onClick={openModal} />
        )}
        {isImage && <Button onClick={LoadMore} />}
      </div>
    </>
  );
};