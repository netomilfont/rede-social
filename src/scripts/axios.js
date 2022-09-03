const token = localStorage.getItem("@kenzieSocial:token")

export const instance = axios.create({
    baseURL: "https://m2-rede-social.herokuapp.com/api/",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
    },
})