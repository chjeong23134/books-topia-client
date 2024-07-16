import Axios, {AxiosInstance} from "axios";

const axios: AxiosInstance = Axios.create({
    baseURL: "/aladin"
});

//const BASE_URL = "https://3.39.176.88:8080/auth";

export interface BookType {
	readonly title: string;
    readonly author: string;
    readonly pubDate: string;
    readonly description: string;
    readonly isbn13: string;
    readonly priceStandard: number;
    readonly cover: string;
    readonly publisher: string;
    readonly adult: boolean;
}

interface AladinResponseType {
	readonly totalResults: number;
	readonly startIndex: number;
	readonly itemsPerPage: number;
	readonly item: BookType[];
}

enum ListTypeEnum {
	BESTSELLER = "BESTSELLER",
	NEW = "NEW"
}

export async function search(
	jwt: string,
	keyword: string
): Promise<AladinResponseType> {
	return await axios
		.get("/search", {
			params: {
				keyword: keyword,
			},
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		}).then(res => res.data);
}

export async function bestList(
	jwt: string
): Promise<AladinResponseType> {
	return await axios
		.get("/list", {
			params: {
				type: ListTypeEnum.BESTSELLER,
			},
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		}).then(res => res.data);
}

export async function newList(
	jwt: string
): Promise<AladinResponseType> {
	return await axios
		.get("/list", {
			params: {
				type: ListTypeEnum.NEW,
			},
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		}).then(res => res.data);
}

export async function detail(
	jwt: string,
	id: number
): Promise<AladinResponseType> {
	return await axios
		.get("/detail/" + id, {
			headers: {
				Authorization: `Bearer ${jwt}`,
			}
		}).then(res => res.data);
}