import { Requests } from "./requests.js";
import { Toast } from "./toastify.js";

export default class Postagens {
    
    static listPosts(array) {
        const ulPosts = document.querySelector(".container__posts")
        const data = array.results.reverse()

        ulPosts.innerText = ""

        data.forEach((post) => {
            const postCard = Postagens.createPost(post)

            ulPosts.append(postCard)
        })
    }

    static createPost (data){

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
        btnOpenPost.classList.add("btnOpenPost")
        divLikePost.classList.add("container__likePost")
        imgHeart.classList.add("greyHeart")
        spanLikesCount.classList.add("spanCount")
        
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

    static async infoUser (){
        const idUser = localStorage.getItem("@kenzieSocial:user_Id")
        const infoUserLogged = await Requests.infoUserLogged(idUser)

        const divUserInfo = document.querySelector(".container__createPost")
        const divImg = document.createElement("div")
        const userImg = document.createElement("img")
        const divuserInfoDois = document.createElement("div")
        const h3UserName = document.createElement("h3")
        const pUserJob = document.createElement("p")
        const spanFollowers = document.createElement("span")

        divImg.classList.add("div__userImg")
        divuserInfoDois.classList.add("container__userInfo")
        h3UserName.classList.add("h3__dashboard")
        spanFollowers.classList.add("userFollowers")
    
        userImg.src = infoUserLogged.image
        h3UserName.innerText = infoUserLogged.username
        pUserJob.innerText = infoUserLogged.work_at
        spanFollowers.innerText = infoUserLogged.followers_amount

        divImg.append(userImg)
        divuserInfoDois.append(h3UserName,pUserJob)
        divUserInfo.append(divImg, divuserInfoDois, spanFollowers)
    }

    static newPostUser () {
        const userPostTitle = document.querySelector("#titlePost")
        const userDescriptionPost = document.querySelector("#descriptionPost")
        const btnPost = document.querySelector(".btnPostar")

        btnPost.addEventListener("click", async (event) => {
            
            const data = {
                "title": userPostTitle.value,
                "description": userDescriptionPost.value
            }
            
            await Requests.userPost(data)
            const pages = await Requests.countPages()
            const listaPost = await Requests.listPostsSocial(pages)
            window.location.replace("../pages/dashboard.html")
            Postagens.listPosts(listaPost)
        })

    }

    static logout() {
        const btnLogout = document.querySelector(".btnLogout")
        btnLogout.addEventListener("click", () => {
            localStorage.removeItem("@kenzieSocial:token")
            localStorage.removeItem("@kenzieSocial:user_Id")
            Toast.create("Você foi deslogado!", "green")
            window.location.assign("../../index.html")
        })
    }

    static likePostUser () {
        const container = document.querySelector(".container__posts")
        const imgHeart = document.querySelector(".greyHeart")
        const spanCount = document.querySelector(".spanCount")

        container.addEventListener("click", async (event) => {
            const idPost = event.target.id
            
            const data = {
                "post_uuid": idPost
            }
            
            
            if(event.target.id == idPost && event.target.classList.contains("greyHeart") && !event.target.classList.contains("noLikeHeart")) {
                imgHeart.classList.add("noLikeHeart")
                spanCount.textContent++
                imgHeart.src = "../assets/heartRed.png"
                await Requests.likePost(data)
                
            } else {
                spanCount.textContent--
                imgHeart.src = "../assets/heartBlack.png"
                await Requests.dislikePost(idPost)
            }
        })
    }

    static createSuggestUser(user) {
        const li = document.createElement("li")
        const divSug =  document.createElement("div")
        const divImg = document.createElement("div")
        const img = document.createElement("img")
        const divUserInfo = document.createElement("div")
        const h3TitleUserName = document.createElement("h3")
        const pUserJob = document.createElement("p")
        const btnFollow = document.createElement("button")

        li.classList.add("container__sugDesktop")
        divSug.classList.add("container__suggestedUser")
        divImg.classList.add("div__userImg")
        divUserInfo.classList.add("container__userInfo")
        h3TitleUserName.classList.add("h3__dashboard")
        btnFollow.classList.add("btnFollow")

        img.src = user.image
        h3TitleUserName.innerText = user.username
        pUserJob.innerText = user.work_at
        btnFollow.innerText = "Seguir"

        divImg.append(img)
        divUserInfo.append(h3TitleUserName,pUserJob)
        divSug.append(divImg, divUserInfo)
        li.append(divSug, btnFollow)

        return li
    }

    static listSuggestUser(array) {
        const ul = document.querySelector(".container__suggestions")

        ul.innerText = ""

        array.forEach((user) => {
            
            const sugUser = Postagens.createSuggestUser(user)

            ul.append(sugUser)
        })
    }

    static createListtUser(array) {

        const newArray = []

        for(let i = 0; newArray.length < 3; i++) {

            const user = array[Math.floor(Math.random() * array.length)]

            newArray.push(user)
        }

        Postagens.listSuggestUser(newArray)
    }
}
const users = await Requests.listUsers()
const pages = await Requests.countPages()
const listPost = await Requests.listPostsSocial(pages)
Postagens.listPosts(listPost)
Postagens.infoUser()
Postagens.newPostUser()
Postagens.logout()
Postagens.likePostUser()
Postagens.createListtUser(users)