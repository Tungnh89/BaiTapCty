import axios from 'axios'

// create in javascript là tạo 1 đối tượng mới.
export const AxiosClient = axios.create({
      baseURL: "https://6136cd838700c50017ef5669.mockapi.io",
      headers: {
            "Content-Type": "application/json"
      }
})