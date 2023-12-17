import axios from "axios";
import { store } from "../GlobalState/Store";
import { NewModel } from "../Models/NewModel";
import { getNews } from "../GlobalState/NewsSlice";

export type Categories = "business" | "entertainment" | "general" | "health" | "science" | "sports" | "technology";
const news_url = "https://newsapi.org/v2/top-headlines?apiKey=5f12c06f0ef54cab8a7fbc915937de33&language=en&category=";
const search_url = "https://newsapi.org/v2/everything?q=";

class NewsService {

    private static async getNews(url: string): Promise<NewModel[]> {
        let news = store.getState().news.news;

        if (news.length) {
            return news;
        }

        news = (await axios.get<{ articles: NewModel[] }>(url)).data.articles;
        store.dispatch(getNews(news));
        return news;
    }

    static async getCategory(category: Categories): Promise<NewModel[]> {
        return this.getNews(news_url + category);
    }

    static async searchNews(query: string): Promise<NewModel[]> {
        return this.getNews(search_url + query + "&apiKey=5f12c06f0ef54cab8a7fbc915937de33");
    }
}

export default NewsService;