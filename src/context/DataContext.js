import React from 'react'
import { children } from 'react'
import { createContext,useEffect,useState } from 'react'
import api from "../api/products"

const DataContext=createContext({})

export const DataProvider=({children})=>{

    const placeholder="Search items";

    // console.log("hii");

    const [data,setData]=useState([])
    // console.log('usestate data:',data);
    const [dataElec,SetDataElec]=useState([])

    const [category,SetCategory]=useState('')
    
    // const handleCategory=(n)=>{
    //     SetCategory(n)
        
    // }
    const [name, setName] = useState(' ');
    const [email, setEmail] = useState('');
    // const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    // console.log(children,setData,category);

    useEffect(()=>{

    },[submitted])
  
    const handleSubmit=(e)=>{
        e.preventDefault();
    //   console.log(name);
    //   console.log(email);

      setSubmitted(true)
    //   console.log(submitted);
    }
    const handleChangeEmail=(e)=>{
      setEmail(e)
    }
    const handleChangeName=(e)=>{
      setName(e)
    }
    

    const [cartItems,setCartItems]=useState([])
    const addToCart=(n=>{
        const productIndex=cartItems.findIndex(item=>item.id===n.id)

        if (productIndex !==-1) {
            const updatedCartItems = [...cartItems];
            // updatedCartItems[productIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems,n]);
            // setCartItems([...cartItems, { name: n.name, quantity: 1 }]);
        }
  
    })

    const [like,setLike]=useState([])
    const likeProduct=(n=>{
        const productIndex=like.findIndex(item=>item.id===n.id)

        if(productIndex !== -1){
            const updated=[...like]
            setLike(updated)
        }
        else{setLike([...like,n])}
    })

    const [buy,setBuy]=useState([])
    const buyProduct=(n=>{
        const productIndex=buy.findIndex(item=>item.id===n.id)

        if(productIndex !== -1){
            const updated=[...buy]
            setBuy(updated)
        }
        else{setBuy([...buy,n])}
    })

    useEffect(()=>{

        const fetchPosts=async()=>{
            try{
                const response=await api.get()
                SetDataElec(response.data)
                // console.log ( 'response dataelec :',response.data);
            }
            catch(err){
                if(err.response){
                    console.log(err.response.data);
                }
            }
        }
        fetchPosts();
    },[])

    // useEffect(()=>{

    //     const fetchPosts=async()=>{
    //         try{
    //             const response=await api.get(`/category/${category}`)
    //             setData(response.data)
    //             console.log ( 'response data :',response.data);
    //         }
    //         catch(err){
    //             if(err.response){
    //                 console.log(err.response.data);
    //             }
    //         }
    //     }
    //     fetchPosts();
    // },[category])



    return (
    <DataContext.Provider value={{
            placeholder,data,SetCategory,dataElec,
            name,email,handleChangeEmail,handleChangeName,handleSubmit,submitted,
            cartItems,addToCart,
            like,likeProduct,
            buy,buyProduct
    }}>
            {children}
    </DataContext.Provider>
    )
}

export default DataContext