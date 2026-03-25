import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "Content-Type": "application/json",
  },
  // timeout:10000
});

export const checkBackendStatus = async () => {
  try {
    await axiosInstance.get("/api/v1/resumes/health");
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const generateResume = async (description) => {
  try {
    const response = await axiosInstance.post("/api/v1/resumes/generate", {
      description,
    });

    return response.data;
  } catch (error) {
    console.error("API ERROR:", error);

    if (!error.response) {
      // throw new Error("Backend not reachable.");
    }

    throw new Error(
      error.response?.data?.message || "Resume generation failed",
    );
  }
};
export const saveResume = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/v1/resumes", payload);

    return response.data;
  } catch (error) {
    console.error("SAVE RESUME ERROR:", error);

    if (!error.response) {
      // throw new Error("Backend not reachable.");
    }

    throw new Error(error.response?.data?.message || "Failed to save resume");
  }
};