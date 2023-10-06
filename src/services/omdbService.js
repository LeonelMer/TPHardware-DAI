import { AxiosClient,  AlkemyClient} from "./axiosClient";

export const getDishes = async () => {
    return AxiosClient.get(`/recipes/complexSearch?number=20&apiKey=ca984c7738bf44f48ec9d97649409a8a`)
        .then((response) => {
            return response.data.results;
        }).catch((error) => {
            throw error;
        });
}
/*1a1fde2048f044529a1e7e749306db44 fede */
/*ca984c7738bf44f48ec9d97649409a8a leo */
/*a0d6581ea80d4c1b84864c7000c508fd santi1 */

export const getDish = async (id) => {
    return AxiosClient.get(`/recipes/${id}/information?apiKey=ca984c7738bf44f48ec9d97649409a8a`)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            throw error;
        });
}

export const getDishByTitle = async (title) => {
    return AxiosClient.get(`/recipes/complexSearch?query=${title}&apiKey=ca984c7738bf44f48ec9d97649409a8a`)
        .then((response) => {
            return response.data.results;
        }).catch((error) => {
            throw error;
        });
}

export const getToken = async (email, password) => {
    const data = {
        email: email,
        password: password,
      };

    return AlkemyClient.post(`/`, data)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            throw error;
        });
}
