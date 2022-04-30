import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import postsStore from "./store/PostsStore";
import {observer, inject, Provider} from "mobx-react"
import musicStore from "./store/MusicStore";
import postEditorStore from "./store/PostEditorStore"
import musicEditorStore from "./store/MusicEditorStore"
import userStore from "./store/UserStore"
import songsStore from "./store/SongsStore"

export const User = {
    id: 2,
    name: "Nirvana",
    picture: {
        id: 1,
        name: "defAvatar1.png"
    }
}
/*

export const User = {
    id: 3,
    name: "alexs",
    picture: {
        id: 12,
        name: "defAvatar1.png"
    }
}
*/

const stores = {
    userStore,
    postsStore,
    musicStore,
    postEditorStore,
    musicEditorStore,
    songsStore,
    user: User
}
ReactDOM.render(
    <Provider {...stores}><App/></Provider>,
    document.getElementById('root')
)