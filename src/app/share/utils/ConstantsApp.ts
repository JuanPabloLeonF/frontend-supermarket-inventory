export const CONFIGURATION_AXIOS = {
    BASE_URL: `${import.meta.env.BASE_URL}`
} as const;

export const PATH_ROUTES = {
    ALL: "*",
    LOGIN: "/login",
    DASHBOARD: "/dashboard"
} as const;