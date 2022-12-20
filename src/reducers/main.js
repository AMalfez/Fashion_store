const Reducer = (state,action)=>{
    switch (action.type) {
        case "setStyle":
            return {
                ...state,
                view:{
                    style1:{
                        color: action.payload.style1.color,
                        backgroundColor: action.payload.style1.backgroundColor
                    },
                    style2:{
                        color: action.payload.style2.color,
                        backgroundColor: action.payload.style2.backgroundColor
                    }
                }
            }
    
        default:
            break;
    }
}

export default Reducer;