const reducer = (state,action)=>{
    switch (action.type) {
        case "setLoading":
            return {
                ...state,
                isLoading: true
            }

            case "setSingleLoading":
            return {
                ...state,
                SingleLoading: true
            }
        
            case "setProducts":
                return {
                    ...state,
                    isLoading: false,
                    products: action.payload
                }
                case "error":
                    return {
                        ...state,
                        isError: true
                    }
                    case "setSingleProduct":
                return {
                    ...state,
                    SingleLoading: false,
                    SingleProduct: action.payload
                }

                case "filteredProducts":
                    return {
                        ...state,
                        isLoading:false,
                        filtered: action.payload
                    }

                    case "set__priceFilter":
                        return{
                            ...state,
                            isLoading:false,
                            PriceRangeFiltered: action.payload
                        }

                        case "search":
                            const { value} = action.payload;
                            return{
                                ...state,
                                text: value
                            }

                            case 'set__cart':
                                return{
                                    ...state,
                                    cartProd: action.payload
                                }
                                case 'delete__cart':
                                    let updatedCart = state.cartProd.filter((i)=>{
                                        return i.id !== action.payload
                                    })
                                    return{
                                        ...state,
                                        cartProd: updatedCart
                                    }

        default:
            return state;
    }
}
export {reducer}