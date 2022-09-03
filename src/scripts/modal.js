export class Modal {
    static template(form) {
        const body = document.querySelector("body")
        const section = document.createElement("section")

        section.classList.add("modal")

        section.append(form)
        body.append(section)
    }

    static loginForm() {
        const modalForm = document.createElement("form")
        const h3TitleForm = document.createElement("h3")
        const inputEmail = document.createElement("input")
        const inputPassword = document.createElement("input")
        const btnLogin = document.createElement("button")
        const span = document.createElement("span")
        const btnPagRegister = document.createElement("button")

        h3TitleForm.innerText = "Login"
        span.innerText = "Ainda não possui cadastro?"
        inputEmail.type = "email"
        inputEmail.placeholder = "Digite seu email"
        inputEmail.classList.add("inputEmail")
        inputPassword.type = "password"
        inputPassword.placeholder = "Digite sua senha"
        inputPassword.classList.add("inputPassword")
        btnLogin.innerText = "Logar"
        btnLogin.type = "submit"
        btnLogin.classList.add("btnLogin")
        btnLogin.classList.add("btnLog")
        btnPagRegister.innerText = "Ir para página de registro"
        btnPagRegister.type = "submit"
        btnPagRegister.classList.add("btnRegister")

        modalForm.append(h3TitleForm, inputEmail, inputPassword, btnLogin, span, btnPagRegister )
    
        return modalForm
    }

    static signupForm() {
        const modalForm = document.createElement("form")
        const divForm = document.createElement("div")
        const h3TitleForm = document.createElement("h3")
        const btnBack = document.createElement("button")
        const inputName = document.createElement("input")
        const inputEmail = document.createElement("input")
        const inputPassword = document.createElement("input")
        const inputJob = document.createElement("input")
        const inputImgPefil = document.createElement("input")
        const btnRegister = document.createElement("button")
        const spanLogin = document.createElement("span")
        const btnLogin = document.createElement("button")
    
        divForm.classList.add("divFormSignup")
        h3TitleForm.innerText = "Cadastro"
        btnBack.innerText = "Voltar"
        btnBack.classList.add("backSignupOne")
        inputName.placeholder = "Seu nome"
        inputName.type = "text"
        inputEmail.placeholder= "Seu email"
        inputEmail.type = "email"
        inputPassword.placeholder = "Sua senha"
        inputPassword.type = "password"
        inputJob.placeholder = "Qual o seu trabalho?"
        inputJob.type = "text"
        inputImgPefil.placeholder = "URL da imagem de perfil"
        inputImgPefil.type = "url"
        btnRegister.innerText = "Registrar"
        btnRegister.type = "submit"
        btnRegister.classList.add("btnLogin")
        spanLogin.innerText = "Já possui login?"
        btnLogin.innerText = "Ir para página de login"
        btnLogin.type = "submit"
        btnLogin.classList.add("btnRegister")

        divForm.append(h3TitleForm, btnBack)
        modalForm.append(divForm, inputName, inputEmail, inputPassword, inputJob, inputImgPefil, btnRegister, spanLogin, btnLogin)
    
        return modalForm
    }   

}