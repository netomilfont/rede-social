import { Modal } from "./modal.js"
import { Requests } from "./requests.js"

class Index {
    // static renderIndex() {
    //     const token = localStorage.getItem("@kenzieSocial:token")

    //     if(token) {
    //         window.location.replace("./src/pages/dashboard.html")
    //     }
    // }

    static handleLoginModal() {
        const loginBtn = document.querySelector("#loginBtn")

        loginBtn.addEventListener("click", () => {
            const newLoginModal = Modal.loginForm()
            Modal.template(newLoginModal)
            Index.closeModalLogin()
            Index.closeModalSignup()
            Index.handleLogin()
        })
    }

    static closeModalLogin() {
        const closeModalBtn = document.querySelector("#signupBtn")

        closeModalBtn.addEventListener("click", () => {
            const modal = document.querySelector(".modal")
            modal.classList.add("disappear")

            setTimeout(() => {
                modal.remove()
            }, 1000)
        })
    }

    static hangleSignupModal () {
        const signupBtn = document.querySelector("#signupBtn")
        
        signupBtn.addEventListener("click", () => {
            Index.closeModalLogin()
            const newSignupModal = Modal.signupForm()
            Modal.template(newSignupModal)
        })
    }

    static closeModalSignup () {
        const closeModalBtn = document.querySelector("#loginBtn")

        closeModalBtn.addEventListener("click", () => {
            const modal = document.querySelector(".modal")
            modal.classList.add("disappear")

            setTimeout(() => {
                modal.remove()
            }, 1000)
        })
    }

    static handleLogin() {
        const userEmail = document.querySelector(".inputEmail")
        const userPassword = document.querySelector(".inputPassword")
        const btnLogin = document.querySelector(".btnLog")

        btnLogin.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = {
                email: userEmail.value,
                password: userPassword.value                
            }

            const login = await Requests.login(data)
        })

    }
}

Index.handleLoginModal()
Index.hangleSignupModal()