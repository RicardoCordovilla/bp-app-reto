import axios from "axios";

export const baseUrl = "http:192.168.100.2:9000/";
const mainpath = "bp/";
const authorId = "1234567890";

const paths = {
    products: "products",
    users: "users",
}

const API = {
    products: {
        getAllProducts: async () => {
            const response = await axios.get(
                baseUrl
                + mainpath
                + paths.products,
                {
                    headers: {
                        authorId: authorId
                    }
                }
            )
            return response.data;
        },
        createProduct: async (productData) => {
            console.log(productData);
            const response = await axios.post(
                baseUrl
                + mainpath
                + paths.products,
                productData,
                {
                    headers: {
                        authorId: authorId
                    }
                }
            )
            return response.data;
        },
        updateProduct: async (productData) => {
            const response = await axios.put(
                baseUrl
                + mainpath
                + paths.products,
                productData,
                {
                    headers: {
                        authorId: authorId
                    }
                }
            )
            return response.data;
        },
        deleteProduct: async (productId) => {
            const response = await axios.delete(
                baseUrl
                + mainpath
                + paths.products,
                {
                    params: {
                     id: productId
                    },
                    headers: {
                        authorId: authorId
                    }
                }
            )
            return response.data;
        },
        verifyProductIdExists: async (productId) => {
            const response = await axios.get(
                baseUrl
                + mainpath
                + paths.products,
                + "/verification",
                {
                    params: {
                     id: productId
                    },
                    headers: {
                        authorId: authorId
                    }
                }
            )
            return response.data;
        }

    }
}

export default API;