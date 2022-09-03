import { Modal } from "./modal.js"

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
            Index.closeModal()
            // Index.handleLoginModal()
        })
    }

    static closeModal() {
        const closeModalBtn = document.querySelector("#signupBtn")

        closeModalBtn.addEventListener("click", () => {
            const modal = document.querySelector(".modal")
            modal.classList.add("disappear")

            setTimeout(() => {
                modal.remove()
            }, 1000)
        })
    }

}

Index.handleLoginModal()