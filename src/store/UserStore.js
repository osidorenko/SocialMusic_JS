import {action, computed, observable, runInAction} from "mobx";
import {useState} from "react";
import songsStore from "../store/SongsStore"
import postsStore from "../store/PostsStore"

class UserStore {
    @observable user = {
        id: 0,
        name: '',
        picture: {
            id: 0,
            name: ''
        }
    }

    @observable isHaveRules = false
    @observable isPosts = false
    @observable isAddPost = false
    @observable isAddMusic = false
    @observable users


    constructor() {
        this.getAllUsers()
        console.log(this.users)
    }

    @action
    init() {
        this.getAllUsers()
    }

    getUsers() {
        return this.users
    }

    reBuild(id, user) {
        var users = this.users
        var i = 0
        for (i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                this.setUser(users[i])
                break
            }
        }
        this.isHaveRules = user.id === this.user.id
        postsStore.setUser(this.user)
        songsStore.setUser(this.user)
        this.isPosts = false
        this.isAddPost = false
        this.isAddMusic = false

    }

    getAllUsers() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8100/users", requestOptions)
            .then(response => response.text())
            .then(result => {
                var users = JSON.parse(result)
                runInAction(() =>
                    this.users = users
                )

                /*                users.map(user => {
                                    this.users.push(user)
                                })*/
            })
            .catch(error => console.log('error', error));
    }


    @action
    setIsPosts(bol) {
        this.isPosts = bol
    }

    @action
    setIsAddPost(bol) {
        this.isAddPost = bol
    }

    @action
    setIsAddMusic(bol) {

        this.isAddMusic = bol
    }

    setUser(user) {
        this.user = user
    }


}

export default new UserStore();