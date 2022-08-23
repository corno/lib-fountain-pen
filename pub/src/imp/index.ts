import * as api from "../interface"
import { createContext } from "./createContext"

type API = {
    createContext: api.CreateContext
}

export const $: API = {
    createContext: createContext
}