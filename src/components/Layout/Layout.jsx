import React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Helmet} from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
      <Helmet>
       <meta charSet="utf-8" />
       <meta name="description" content={description} />
       <meta name="keywords" content={keywords} />
       <meta name="author" content={author} />
       <title>{title}</title>
     </Helmet>
        <Header/>
        <main style={{ minHeight: "70vh" }}>
       
        <Toaster />

        {children}
      </main>
        <Footer/>
    </div>
  )
};

Layout.defaultProps = {
  title: 'Ecommerce app-Shop now',
  description: 'Mern Stack Project',
  keywords: 'mern,react,express,mongodb,react-router-dom,jsonwebtoken,bcryptjs',
  author: 'DASTARUS',
}

export default Layout