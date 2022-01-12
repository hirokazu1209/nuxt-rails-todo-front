// currentUserの値として現在のログイン情報、ユーザー情報の入れものを作成
export const state = () => ({
  currentUser: {}
});

export const mutations = {
  // actionからsetUserが呼び出しを受けた際に、stateの情報（ログインユーザーの状態）を書き換えられる
  setUser(state, payload) {
    // 第二引数として渡ってきた情報をcurrentUserに入れる
    state.currentUser = payload
  },
};

// 一番初めにコンポーネントからVuexへのリクエストを受ける
export const actions = {
  setUser(context, data) {
    context.commit('setUser', data)
  }
};
