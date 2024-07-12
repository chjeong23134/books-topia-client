import Axios, {AxiosInstance} from "axios";

const axios: AxiosInstance = Axios.create({
    baseURL: "/auth"
});

//const BASE_URL = "https://3.39.176.88:8080/auth";

export interface UserType {
	readonly id: number;
	readonly email: string;
	readonly name: string;
	readonly createDate: Date;
	readonly updateDate: Date;
}

interface AuthResponseType {
	readonly accessJwt: string;
	readonly user: UserType;
}

export async function signup(
	email: string,
	password: string,
	name: string
): Promise<UserType> {
    return await axios
        .post("/signup", {
            name: name,
            email: email,
            password: password,
        })
        .then((res) => res.data);
}

export async function signin(
	email: string,
	password: string
): Promise<AuthResponseType> {
    return await axios
        .post("/signin", {
            email: email,
            password: password,
        })
        .then((res) => res.data);
}

export async function validate(
	jwt: string,
	id: number
): Promise<UserType[]> {
	return await axios
		.get("/validate/" + id, {
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		}).then((res) => res.data);
}