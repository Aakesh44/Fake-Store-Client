import React from 'react';
// import { children } from 'react'
import { createContext,useEffect,useState } from 'react';
import api from '../api/products';
// import PropTypes from 'prop-types';

const DataContext=createContext({});

export const DataProvider = ({children}) =>{
 

//   const [data, setData] = useState([]);
  const [dataElec, setDataElec] = useState([]);
//   const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [like, setLike] = useState([]);
  const [buy, setBuy] = useState([]);

  const addToCart = (n) => {
    const productIndex = cartItems.findIndex((item) => item.id === n.id);

    if (productIndex !== -1) {
      const updatedCartItems = [...cartItems];
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, n]);
    }
  };

  const likeProduct = (n) => {
    const productIndex = like.findIndex((item) => item.id === n.id);

    if (productIndex !== -1) {
      const updated = [...like];
      setLike(updated);
    } else {
      setLike([...like, n]);
    }
  };

  const buyProduct = (n) => {
    const productIndex = buy.findIndex((item) => item.id === n.id);

    if (productIndex !== -1) {
      const updated = [...buy];
      setBuy(updated);
    } else {
      setBuy([...buy, n]);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get();
        setDataElec(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
        }
      }
    };
    fetchPosts();
  }, []);

  const handleChangeEmail = (e) => {
    setEmail(e);
  };

  const handleChangeName = (e) => {
    setName(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <DataContext.Provider
      value={{

        // data,
        // setCategory,
        dataElec,
        name,
        email,
        handleChangeEmail,
        handleChangeName,
        handleSubmit,
        submitted,
        cartItems,
        addToCart,
        like,
        likeProduct,
        buy,
        buyProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};


// DataProvider.propTypes = {
//     children: PropTypes.node.isRequired,
//   };
export default DataContext