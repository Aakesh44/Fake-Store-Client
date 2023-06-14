import React from 'react';
// import { useState,useContext } from 'react'
// import DataContext from './context/DataContext';

const About = () => {
  // const {dataElec}=useContext(DataContext)

  // const [searchTerm, setSearchTerm] = useState('');
  // const [filteredProducts, setFilteredProducts] = useState([]);

  // // Function to perform the search and update the results
  // const performSearch = (e) => {
  //   const searchTerm = e.toLowerCase();

  //   // Filter the array of products based on the search term
  //   const filteredProducts = dataElec.filter(product =>
  //     product.title.toLowerCase().includes(searchTerm)
  //   ).slice(0,5);

  //   setSearchTerm(searchTerm);
  //   setFilteredProducts(filteredProducts);
  // };

  return (
    // <div>
    //   <input type="text" value={searchTerm} onChange={(e)=>performSearch(e.target.value)} placeholder="Search" />
    //   {filteredProducts.length > 0 && (
    //     <ul>
    //       {filteredProducts.map(product => (
    //         <li key={product.id} value={product.id}>{product.title}</li>
    //       ))}
    //     </ul>
    //   )}
    // </div>

    <section>
      <div className=' mt-5 flex flex-col gap-4'>
        <h1 className=' text-xl font-semibold'>Mission Statement:</h1>
        <p className=' ml-3'>At Fake Store, our mission is to provide customers with a seamless online shopping experience. We aim to offer a wide selection of high-quality products at competitive prices, ensuring customer satisfaction and convenience.</p>
      </div>

      <div className=' mt-5 flex flex-col gap-4'>
        <h1 className=' text-xl font-semibold'>Company History:</h1>
        <p className=' ml-3'>Established in [year], Fake Store has grown from a small startup to a trusted online retailer. Over the years, we have built a reputation for reliability, customer service excellence, and delivering on our promises.</p>
      </div>

      <div className=' mt-5 flex flex-col gap-4'>
        <h1 className=' text-xl font-semibold'>Team Members:</h1>
        <p className=' ml-3'>Our dedicated team of professionals is passionate about delivering the best shopping experience to our customers. From our customer support team to our product curators and technical experts, we work together to meet your needs.</p>
      </div>

      <div className=' mt-5 flex flex-col gap-4'>
        <h1 className=' text-xl font-semibold'>Features and Benefits:</h1>
        <p className=' ml-3'>At Fake Store, youll find an extensive range of products across various categories. Enjoy the convenience of secure online payments, fast shipping, and a hassle-free return policy. We also provide detailed product descriptions and customer reviews to help you make informed purchasing decisions.</p>
      </div>

      <div className=' mt-5 flex flex-col gap-4'>
        <h1 className=' text-xl font-semibold'>Testimonials:</h1>
        <p className=' ml-3'>Dont just take our word for it. Heres what our customers have to say about their experience with Fake Store:<br></br>
          - I love shopping at Fake Store. The product quality is excellent, and the prices are unbeatable. - Sarah<br></br>
          - The customer support team at Fake Store is exceptional. They promptly resolved my queries and ensured I had a smooth shopping experience. - John</p>
      </div>

      <div className=' mt-5 flex flex-col gap-4'>
        <h1 className=' text-xl font-semibold'>Contact Information:</h1>
        <p className=' ml-3'>Were here to assist you! If you have any questions, concerns, or feedback, please dont hesitate to reach out to us. You can contact us via email at [email protected] or call our customer support hotline at XXX-XXXX-XXXX.</p>
      </div>

      <div className=' mt-5 flex flex-col gap-4'>
        <h1 className=' text-xl font-semibold'>Privacy Policy:</h1>
        <p className=' ml-3'>We prioritize the privacy and security of your personal information. Our Privacy Policy outlines how we collect, use, and protect your data. Rest assured that your information is handled with utmost care and in compliance with data protection regulations.</p>
      </div>

      <div className=' mt-5 flex flex-col gap-4'>
        <h1 className=' text-xl font-semibold'>Terms of Service:</h1>
        <p className=' ml-3'>Our Terms of Service govern the use of our website and outline the rules and guidelines for shopping on Fake Store. We encourage you to read through them to ensure a smooth and fair shopping experience.</p>
      </div>

      <div className=' mt-5 flex flex-col gap-4'>
        <h1 className=' text-xl font-semibold'>Social Media Links:</h1>
        <p className=' ml-3'>Stay connected with us through our social media channels for updates on new arrivals, special promotions, and more. Follow us on [Facebook, Instagram, Twitter] for exciting offers and engaging content.</p>
      </div>

      <div className=' mt-5 flex flex-col gap-4'>
        <h1 className=' text-xl font-semibold'>FAQ:</h1>
        <p className=' ml-3'>Have questions about shopping at Fake Store? Check out our FAQ section for answers to commonly asked questions. If you cant find what youre looking for, feel free to reach out to our customer support team.</p>
      </div>

    </section>
  )
}

export default About