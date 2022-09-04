import { Requests } from "./requests.js";

export default class Postagens {

    static async createPost (data){

        const divPostContainer = document.createElement("div")
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

        divPostContainer.classList.add("container__post")
        divPost.classList.add("container__userPost")
        divImg.classList.add("div__userImg")
        divImg.classList.add("div__userImg")
        divuserInfoDois.classList.add("container__userInfo")
        h3UserName.classList.add("h3__dashboard")
        divPostInfo.classList.add("container__postInfo")
        btnOpenPost.classList.add("btnOpenPost")
        divLikePost.classList.add("container__likePost")
        
        divImg.append(userImg)
        divuserInfoDois.append(h3UserName,pUserJob)
        divPost.append(divImg, divuserInfoDois)
        divLikePost.append(imgHeart)
        divPostInfo.append(btnOpenPost, divLikePost, spanLikesCount)
        divPostContainer.append(divPost, h2TitlePost, pDescriptionPost, divPostInfo)

        return divPostContainer
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
        h3UserName = infoUserLogged.username
        pUserJob = infoUserLogged.work_at
        spanFollowers= infoUserLogged.followers_amount

        divImg.append(userImg)
        divuserInfoDois.append(h3UserName,pUserJob)
        divUserInfo.append(divImg, divuserInfoDois, spanFollowers)
    }
}

Postagens.infoUser()