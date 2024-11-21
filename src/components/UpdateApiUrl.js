import moviesIN from "../api/showData/moviesIN.json"
import tvshowsIN from "../api/showData/tvshowsIN.json"
import moviesEn from "../api/showData/moviesEN.json"
import moviesOther from "../api/showData/moviesOther.json"
import tvshowsEn from "../api/showData/tvshowsEN.json"
import tvshowsOther from "../api/showData/tvshowsOther.json"
import { selectType } from "./TrendingSelect"



export const UpdateApiUrl = () => {
    let apiUrl = null;

    if (selectType.value === "movies") {
        apiUrl = moviesIN
    } else if (selectType.value === "tvshows") {
        apiUrl = tvshowsIN
    } else if (selectType.value === "movies-english") {
        apiUrl = moviesEn
    } else if (selectType.value === "movies-other-languages") {
        apiUrl = moviesOther
    } else if (selectType.value === "tvshows-english") {
        apiUrl = tvshowsEn
    } else if (selectType.value === "tvshows-other-languages") {
        apiUrl = tvshowsOther
    }
    
    return apiUrl
    
}