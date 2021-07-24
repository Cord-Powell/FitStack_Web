import firebase from "firebase";
import { runInAction } from "mobx";
import { makeAutoObservable } from "mobx";
import { User, UserLoginValues } from "../models/User";

export default class UserStore {
    user: any
    userInfo: firebase.firestore.DocumentData | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    login = async (creds: UserLoginValues) => {
        try{
            firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
            var uid = firebase.auth().currentUser?.uid
            var user = firebase.firestore().collection('UserInfo').doc(uid).get()
            runInAction(() => this.user = user)
        }catch(e){
            throw e;
        }
    }

}