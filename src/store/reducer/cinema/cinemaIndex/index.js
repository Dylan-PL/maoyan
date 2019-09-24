import initState from "../../../state/cinema";
import {CHANGE_CINEMA_LIST} from "../../../actionType/cinema";

export default function (state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === CHANGE_CINEMA_LIST){
        state.cinemaList =[...state.cinemaList,...payload.cinemaList || []];
        state.total = payload.total
        state.offset+=20;
    }
    return state
}