import firebase from "@/plugins/firebase";
import axios from "@/plugins/axios";

const authCheck = ({ store, redirect }) => {
  // ログイン状態のユーザーの情報をFirebaseへ確認しに行く処理
  firebase.auth().onAuthStateChanged(async user => {
    // userが存在 = ログインしていれば、/v1/usersにFirebaseから取得してきたuid情報を使って、GETリクエストを送る
    if(user) {
      const { data } = await axios.get('/v1/users', {
        params: {
          uid: user.uid,
        },
      });
      console.log("ログインしているユーザー:", data);
      store.dispatch("auth/setUser", data)
    } else {
      store.dispatch("auth/setUser", null)
    }
  });
};

export default authCheck
