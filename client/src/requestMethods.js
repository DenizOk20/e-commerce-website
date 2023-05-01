import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDkzZDcwYTcwMmQyZDI1N2NjYTliNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Mjg0ODkzOCwiZXhwIjoxNjgzMTA4MTM4fQ.-MCvn98X5WYfI3h6TbgdkS3xjefVUh4CD6rrwqjKwCI";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});