import axios from "axios";
import { CONFIGURATION_AXIOS } from "../utils/ConstantsApp";

export const apiClient = axios.create({
    baseURL: CONFIGURATION_AXIOS.BASE_URL,
});