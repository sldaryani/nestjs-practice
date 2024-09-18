import apiClient from "."

const getAllProductRequest = async () => {
    return apiClient.get("/products")
}

const getOneProductRequest = async (id: number) => {
    return apiClient.get(`/products/${id}`)
}

const createProductRequest = async (product: any) => {
    return apiClient.post("/products", product)
}

const updateProductRequest = async (product: any) => {
    return apiClient.put(`/products/${product.id}`, product)
}

const deleteProductRequest = async (id: number) => {
    return apiClient.delete(`/products/${id}`)
}

export {
    getAllProductRequest,
    createProductRequest,
    updateProductRequest,
    deleteProductRequest,
    getOneProductRequest
}