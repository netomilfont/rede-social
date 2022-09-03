import { instance } from "./axios.js";
import { Toast } from "./toastify.js";

export class Requests {

    static async login(data) {
        console.log(data)
        const userLogin = await instance
            .post("users/login/", data)
            .then((res) => {
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
}