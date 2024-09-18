import axios, { AxiosResponse } from 'axios';

// Інтерфейс для зображень, які ми отримуємо з API
interface Image {
    id: number;
    webformatURL: string;
    largeImageURL: string;
    tags: string;
    likes: number;
    views: number;
    comments: number;
    downloads: number;
}

// Інтерфейс для даних з API
interface PixabayResponse {
    total: number;
    totalHits: number;
    hits: Image[];
}

// Створення інстансу axios
const instance = axios.create({
    baseURL: "https://pixabay.com/api",
    params: {
        per_page: 12,
        key: "29306254-f578092880d046ebab65c0a59"
    }
})

// Функція для отримання зображень без пошукового запиту
export const getImage = async (page: number = 1): Promise<PixabayResponse> => {
    const { data }: AxiosResponse<PixabayResponse> = await instance.get("/", {
        params: {
            page,
        }
    });
    return data;
}

// Функція для пошуку зображень за запитом
export const searchImage = async (q: string, page: number = 1): Promise<PixabayResponse> => {
    const { data }: AxiosResponse<PixabayResponse> = await instance.get("/", {
        params: {
            q,
            page,
        }
    });
    return data;
}

// Константи для використання в запитах
const KEY = '29306254-f578092880d046ebab65c0a59';
const BASE_URL = 'https://pixabay.com/api';
const LIMIT = 12;

// Функція для пошуку зображень з додатковими параметрами
export const fetch = async (query: string, page: number): Promise<PixabayResponse | void> => {
    try {
        const response: AxiosResponse<PixabayResponse> = await axios.get(
            `${BASE_URL}/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${LIMIT}`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}