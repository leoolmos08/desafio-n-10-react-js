import { useState, useEffect} from "react";
import { getDocs, collection } from "firebase/firestore";
import db from "../utils/firebaseConfig";
import ItemList from './ItemList';
import customFetch from '../utils/CustomFetch'
import { useParams } from "react-router-dom";
import { getCategory } from "../utils/FetchFirebase";
const { products } = require('../utils/products');

const ItemListContainer = () => {
    const onAdd = (rta) => {
        alert("Has seleccionado  " + rta + "  hamburguesas.");
    }

    const [datos , setDatos] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        getCategory(categoryId)
            .then(response=> setDatos(response))
            .catch(err => console.log(err));
    }, [categoryId]);
    
    return (
        <>
        <ItemList items={datos}/>
        </>
    );
}
export default ItemListContainer;