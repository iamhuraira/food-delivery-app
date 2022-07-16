import { fetchUser } from "../utils/fetchLoacalStorageData"

const userInfo = fetchUser();
export const  initialState={
    user : userInfo,
}