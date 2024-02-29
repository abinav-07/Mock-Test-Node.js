const USER_TYPES = Object.freeze({
    ADMIN: "ADMIN",
    USER: "USER"
});

const HTTPSTATUSCODES = Object.freeze({
    OK: 200,
    UNAUTHORIZED: 401,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500,
    VALIDATION_ERROR:422,
});

module.exports = {
    USER_TYPES,
    HTTPSTATUSCODES
}