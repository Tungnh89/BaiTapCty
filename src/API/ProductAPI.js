import { AxiosClient } from "./axiosClient";

const ProductApi = {
      getAll() {
            const url = '/ProductAPI';
            return AxiosClient.get(url)
      }
}

export default ProductApi;