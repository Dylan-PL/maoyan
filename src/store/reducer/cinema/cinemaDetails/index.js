import initState from "../../../state/cinemaDetails"
import {CHANGE_CINEMA_DATA} from "../../../actionType/cinemaDetails"
import {CHANGE_SHOW_DATA} from "../../../actionType/cinemaDetails";
import {CHANGE_DEAL_LIST } from "../../../actionType/cinemaDetails";


export default function(state=initState,{type,payload}){
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_CINEMA_DATA){
        state.cinemaData = payload;
    }
    if(type===CHANGE_SHOW_DATA){
        state.showData = payload;
    }
    if(type===CHANGE_DEAL_LIST){
        state.dealList = payload;
    }

    return state;
}
