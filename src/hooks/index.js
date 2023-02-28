import { useContext } from "react"
import { UserContext } from "../contex/UserProvider"

export const useUserContext = () => useContext(UserContext);