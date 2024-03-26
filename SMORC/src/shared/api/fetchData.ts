import axios from "axios";

interface DataResponse {}

class ApiService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  public async getData(): Promise<DataResponse> {
    try {
      const response = await axios.get<DataResponse>(`${this.baseURL}/data`);
      return response.data;
    } catch (error) {
      // Обработка ошибки
      throw error;
    }
  }
}

// Использование
const apiService = new ApiService("https://your-api-url.com");
apiService
  .getData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Ошибка при получении данных:", error);
  });
