import { instance } from "./axios.js";
import { Toast } from "./toastify.js";

export class Requests {

    static async login(data) {
        console.log(data)
        const userLogin = await instance
            .post("users/login/", data)
            .then((res) => {
                localStorage.setItem("@kenzieSocial:user_Id", res.data.user_uuid)
                localStorage.setItem("@kenzieSocial:token", res.data.token)
                Toast.create("Login realizado com sucesso", "green")

                setTimeout(() => {
                    window.location.replace("src/pages/dashboard.html")
                },900)
            })
            .catch((err) => {
                console.log(err)
                Toast.create("Essa conta não existe, logo não pode acessar a página dos posts", "red")
            })

            return userLogin
    }

    static async signup(data) {
        const userSingup = await instance
        .post("users/", data)
        .then(async (res) => {
            Toast.create("Cadastro realizado com sucesso!", "green")
            const newData = {
                email: res.data.email,
                password: data.password
            }

          const userSignup =  await Requests.login(newData)
        })
        .catch(err => {
            console.log(err)
            Toast.create(err.response.data.message, "red")
        })
    }

    static async infoUserLogged(id) {
        const infoUser = await instance
        .get(`users/${id}/`)
        .then( (res) => res.data)
        .catch((err) => console.log(err))
        console.log(infoUser)
        return infoUser
    }

    static async listPostsSocial() {
        const posts = await instance
        .get(`posts/?page=1/`)
        .then((res) => res.data)
        .catch((err) => console.log(err))

        return posts
    }
}