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
        inputName.classList.add("inputName")
        inputEmail.placeholder= "Seu email"
        inputEmail.type = "email"
        inputEmail.classList.add("inputEmail")
        inputPassword.placeholder = "Sua senha"
        inputPassword.type = "password"
        inputPassword.classList.add("inputPassword")
        inputJob.placeholder = "Qual o seu trabalho?"
        inputJob.type = "text"
        inputJob.classList.add("inputJob")
        inputImgPefil.placeholder = "URL da imagem de perfil"
        inputImgPefil.type = "url"
        inputImgPefil.classList.add("inputImg")
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

    static showModal() {
        const modal = document.querySelector("btnOpenPost")
    }

    static modalPost (post) {
        const liPostContainer = document.createElement("li")
        const divPost = document.createElement("div")
        const divImg = document.createElement("div")
        const userImg = document.createElement("img")
        const divuserInfoDois = document.createElement("div")
        const h3UserName = document.createElement("h3")
        const pUserJob = document.createElement("p")
        const h2TitlePost = document.createElement("h2")
        const pDescriptionPost = document.createElement("p")
        const divPostInfo = document.createElement("div")
        const btnOpenPost = document.createElement("button")
        const divLikePost = document.createElement("div")
        const imgHeart = document.createElement("img")
        const spanLikesCount = document.createElement("span")

        liPostContainer.classList.add("container__post")
        divPost.classList.add("container__userPost")
        divImg.classList.add("div__userImg")
        divImg.classList.add("div__userImg")
        divuserInfoDois.classList.add("container__userInfo")
        h3UserName.classList.add("h3__dashboard")
        divPostInfo.classList.add("container__postInfo")
        
        liPostContainer.id = data.uuid 
        userImg.src = data.author.image
        h3UserName.innerText = data.author.username
        pUserJob.innerText = data.author.work_at
        h2TitlePost.innerText = data.title
        pDescriptionPost.innerText = data.description
        btnOpenPost.innerText = "Abrir Post"
        imgHeart.src = "../assets/heartBlack.png"
        imgHeart.id = data.uuid
        spanLikesCount.innerText = Number(data.likes.length)
        
        divImg.append(userImg)
        divuserInfoDois.append(h3UserName,pUserJob)
        divPost.append(divImg, divuserInfoDois)
        divLikePost.append(imgHeart)
        divPostInfo.append(btnOpenPost, divLikePost, spanLikesCount)
        liPostContainer.append(divPost, h2TitlePost, pDescriptionPost, divPostInfo)

        return liPostContainer

    }

}