import store from 'store';
import { USER_KEY } from './constants';

interface storage {
    addUser: (user: userInfo) => void,
    getUser: () => userInfo,
    removerUser: (userKey: string) => void
}

interface userInfo {
    position: number | undefined,
    token: string | undefined,
    userId: string | undefined,
    userName: string | undefined,
    email: string | undefined,
    phone: string | undefined
}

export  const storageUtils: storage = {
    addUser: (user: userInfo) => store.set(USER_KEY, user),
    getUser: () => store.get(USER_KEY) || {},
    removerUser: (userKey: string) => store.remove(userKey)
}