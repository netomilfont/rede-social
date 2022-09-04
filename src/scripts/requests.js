import { instance, instanceCad } from "./axios.js";
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
        const userSingup = await instanceCad
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
        
        return infoUser
    }

    static async countPages() {
        const number = await instance
        .get(`posts/`)
        .then((res) => res.data.count)
        .catch((err) => console.log(err))

        return number
    }

    static async listPostsSocial(number) {
        const posts = await instance
        .get(`posts/?limit=30&offset=${number - 30}`)
        .then((res) => {
            console.log(res.data)
            return res.data
        })
        .catch((err) => console.log(err))
        
        
        return posts
    }
    
    static async userPost(data) {
        const newPost = await instance
        .post("posts/", data)
        .then((res) => {
            Toast.create("Postagem realizada com sucesso!", "green")
            return res.data
        })
        .catch((err) => {
            Toast.create("Postagem não foi feita!", "red")
        })

        return newPost
    }

}