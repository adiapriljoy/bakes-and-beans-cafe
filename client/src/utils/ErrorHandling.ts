import axios from "axios";

export function ErrorHandling(error: unknown) {
  if (axios.isAxiosError(error)) {
    if (!error.response) {
      // Network error or no response from the server
      return error.message;
    } else {
      // Server responded with an error status code
      const errorData = error.response.data;
      console.error(`Server error: `, errorData);
      return errorData.developerMessage;
    }
  } else {
    return `Unexpected error:, ${error}`;
  }
}
