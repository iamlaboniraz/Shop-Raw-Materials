import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
}

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(res => {
            // const user = res.user;
            const { displayName, photoURL, email } = res.user;
            const signInUser = {
                isSingedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true,
            }

            return signInUser;
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
}

export const handleSingOut = () => {
    firebase.auth().signOut()
        .then(res => {
            const singOutUser = {
                isSingedIn: false,
                name: '',
                email: '',
                photo: '',
                error: '',
                success: false

            }
            return singOutUser;
        })
        .catch(err => {

        })
}


export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            //   setUser(newUserInfo);
            updateUserName(name)
            return newUserInfo;
        })
        .catch(error => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
            //  setUser(newUserInfo);
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // console.log(errorCode,errorMessage)
            // // ..
        });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
            //    setUser(newUserInfo);
            //    setLoggedInUser(newUserInfo);
            //    history.replace(from);
            //    console.log("sign in user info",res.user);
        })
        .catch(error => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

const updateUserName = name => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name,
    }).then(function () {
        console.log("user name updated successfully")
    }).catch(function (error) {
        console.log(error)
    });
}
