import { createContext, useReducer,useEffect } from "react";
import axios from "axios";
import { reducer } from "../reducers/products";

const AppContext = createContext();

const InitialState = {
  isLoading: false,
  isError: false,
  products: [],
  SingleLoading: false,
  SingleProduct: {},
  filtered: [],
  PriceRangeFiltered: 1000,
  text: '',
  cartProd: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const API = "https://fakestoreapi.com/products";

  const getData = async (url) => {
    dispatch({type: 'setLoading'})
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({type:'setProducts', payload: products})
    } catch (error) {
        dispatch({type:'error'})
    }
  };

  const getSingleData = async (url) => {
    dispatch({type: 'setSingleLoading'})
    try {
      const res = await axios.get(url);
      const SingleProduct = await res.data;
      dispatch({type:'setSingleProduct', payload: SingleProduct})
    } catch (error) {
        dispatch({type:'SingleError'})
    }
  };

  const FilteredProd = async(url)=>{
    dispatch({type: 'setLoading'})
    try {
      const res = await axios.get(url);
      const filteresdProducts = await res.data;
      dispatch({type:'filteredProducts', payload: filteresdProducts})
    } catch (error) {
        dispatch({type:'error'})
    }
  }

  const PriceFilterFunc = async(range)=>{
    dispatch({type: 'setLoading'})
    try {
      dispatch({type:'set__priceFilter', payload:range})
    } catch (error) {
        dispatch({type:'error'})
    }
  }

  const handleSearch =(e)=>{
    const value = e.target.value;

    dispatch({type:"search", payload: {value}})
  }

  const addtocart = (product)=>{
    const cartProd = state.cartProd;
    cartProd.push(product)
    dispatch({type:"set__cart", payload: cartProd})
  }
  const deleteCart = (id)=>{
    dispatch({type:'delete__cart', payload: id})
  }

  useEffect(() => {
    getData(API);
  }, []);

  return <AppContext.Provider value={{...state,deleteCart, addtocart ,getSingleData,handleSearch, FilteredProd, PriceFilterFunc}}>{children}</AppContext.Provider>;
};
export { AppProvider, AppContext, InitialState };
