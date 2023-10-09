import { createContext,useEffect,useMemo,useState } from 'react';

import PropTypes from 'prop-types';
import axios from 'axios';

const DataContext=createContext({});

import { useNavigate } from 'react-router-dom';

export const DataProvider = ({children}) =>{
 
const [Mainproduct,setMainProduct]=useState(null)

const linkData = [
  { category: "kids' wear",    img: "https://img.freepik.com/free-photo/low-angle-little-boy-posing_23-2148445671.jpg?size=626&ext=jpg&ga=GA1.1.935296291.1680001946&semt=ais"},
  { category: "women clothing",img: "https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17506.jpg?size=626&ext=jpg&ga=GA1.1.935296291.1680001946&semt=ais" },
  { category: "men clothing",  img: "https://img.freepik.com/free-photo/full-length-portrait-handsome-serious-man_171337-17388.jpg?size=626&ext=jpg&ga=GA1.1.935296291.1680001946&semt=ais" },
  { category: "accessories",   img: "https://img.freepik.com/free-photo/jewelry-lifestyle-flat-layout-with-place-text-jewellery-background-mockup-banner-fashion-accessories_460848-12601.jpg?size=626&ext=jpg&ga=GA1.2.935296291.1680001946&semt=sph" },
  { category: "cosmetics",     img: "https://img.freepik.com/free-photo/dark-glass-bottle-with-single-liquid-drop-generative-ai_188544-9634.jpg?size=626&ext=jpg&ga=GA1.1.665246650.1680002263&semt=sph"},
  { category: "footwear",      img: "https://img.freepik.com/free-photo/leather-shoes-wooden-background_1203-7617.jpg?size=626&ext=jpg&ga=GA1.1.935296291.1680001946&semt=sph"},
  { category: "electronics",   img: "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309698.jpg?size=626&ext=jpg&ga=GA1.2.935296291.1680001946&semt=ais"},
  { category: "home decor",    img: "https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg?size=626&ext=jpg&ga=GA1.1.665246650.1680002263&semt=ais"},

];



  const [dataElec, setDataElec] = useState([]);
//   const [category, setCategory] = useState('');

  async function fetchPosts(){
    try {
      const response = await axios.get('https://fake-store-server.vercel.app/products');
      setDataElec(response.data);
      // console.log(response.data[0]);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      }
    }
  }
  useEffect(() => {

    fetchPosts()
  }, []);

  const [userid,setUserid] = useState(null)

  const navigate = useNavigate()

  const handleUser = async() =>{
    const userInfostring = localStorage.getItem('storeUser')

    if(userInfostring){
      navigate(-1);
      const userId = JSON.parse(userInfostring)
      setUserid(userId)
      // console.log('userData: ',userData);
    }
  }

  useEffect(()=>{
    handleUser()
  },[])

  const [mainUser,setMainUser]=useState(null)

  async function getUser() {

    try {
      const response = await axios.get(`https://fake-store-server.vercel.app/user/${userid}`)
      setMainUser(response.data)
      console.log(response.data);
    } catch (error) {
      console.log('err:',error);
    }

  }
  // console.log(userid);
  useEffect(()=>{
    if(userid){
      getUser()
    }
  },[userid])

  const [orders,setOrders] = useState([])

  async function getOrder() {

    if(userid){
      try {
        const response = await axios.get(`https://fake-store-server.vercel.app/fetchOrder/${userid}`)
        setOrders(response.data)
        console.log(response.data);
      } catch (error) {
        console.log('err:',error);
      }
    }

  }

  const addToCart = async(productId) => {
    try {
      const config = {
          headers: {
              "Content-Type":"application/json"
          }
      }

      const response = await axios.put(
          "https://fake-store-server.vercel.app/addToCart",
          {
            userId:mainUser._id,
            productId:productId
          },
          config
      )
      setMainUser(response.data.userProfile)
      console.log('add to cart');
      // handleGetUser()
  } 
  catch (err) {
      console.log(err.message);
  }
  };

  const removeFromCart = async (productId) =>{
    try {
      const config = {
          headers: {
              "Content-Type":"application/json"
          }
      }

      const response = await axios.put(
          "https://fake-store-server.vercel.app/removeFromCart",
          {
            userId:mainUser._id,
            productId:productId
          },
          config
      )
      setMainUser(response.data.userProfile)
      console.log('remove from cart');
      // handleGetUser()
  } 
  catch (err) {
      console.log(err.message);
  }
  }

  const likeProduct = async (productId) => {
  
    console.log(mainUser._id);
  console.log(productId);
    try {
      const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await axios.put(
      "https://fake-store-server.vercel.app/like",
      {
        userId:mainUser._id,
        productId:productId
      },
      config
    )
    setMainUser(response.data.userProfile)
    console.log('liked');
    // handleGetUser()
    } 
    catch (err) {
      console.log(err.message);
    }
  };

  const dislikeProduct = async (productId) =>{
    try {
      const config = {
          headers: {
              "Content-Type":"application/json"
          }
      }

      const response = await axios.put(
          "https://fake-store-server.vercel.app/dislike",
          {
            userId:mainUser._id,
            productId:productId
          },
          config
      )
      setMainUser(response.data.userProfile)
      console.log('disliked');
      // handleGetUser()
  } 
  catch (err) {
      console.log(err.message);
  }
  }

  const [buyProduct,setBuyProduct] = useState(
    {
      productId:null,
      counts:null,
      price:null
    })
console.log('kiki');

  const memoizedBuyProduct = useMemo(()=>{
    return {buyProduct,setBuyProduct};
  },[buyProduct,setBuyProduct])



  return (
    <DataContext.Provider
      value={{

        dataElec,

        Mainproduct,setMainProduct,linkData,

        setUserid,
        userid,
        handleUser,

        mainUser,
        setMainUser,
        
        likeProduct,
        dislikeProduct,

        addToCart,
        removeFromCart,

      

        memoizedBuyProduct,

        buyProduct,

        orders,
        getOrder

      }}
    >
      {children}
    </DataContext.Provider>
  );
};


DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContext