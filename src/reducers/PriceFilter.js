const PriceFilter = (state, action) =>{
    switch (action.type) {
        case 'set__range':
            return {
                range: action.payload
            }
    
        default:
            break;
    }
}
export default PriceFilter