// axios本体をimportする
import axios from "axios";

export default axios.create({
    // アプリ上でbaseURLと書いた際に、envファイルに書いたAPI _ENDPOINTの値を参照する
    baseURL: process.env.API_ENDPOINT
})
