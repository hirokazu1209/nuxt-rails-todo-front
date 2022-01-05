import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const fbConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
};
// 各種設定を引数にしてFirebaseアプリオブジェクトを作成している
firebase.initializeApp(fbConfig)

// nuxtプロジェクト内からFirebaseへアクセス出来る様になる
export default firebase
