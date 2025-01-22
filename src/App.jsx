import React from "react";
import Page1 from "./Pages/Page1";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Dynamo Designs | Graphic Designer</title>
        <meta
          name="description"
          content="Professional graphic designer offering  graphic design work including logos, branding, marketing materials, and digital assets."
        />
        <link rel="canonical" href="https://www.yourwebsite.com/" />
        <meta property="og:url" content="https://www.yourwebsite.com/" />
        <meta property="og:title" content="Dynamo Designs | Graphic Designer" />
        <meta
          property="og:description"
          content="Professional graphic designer offering all kinds of graphic design work including logos, branding, marketing materials, and digital assets."
        />
        <meta property="og:image" content="https://www.yourwebsite.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Dynamo Designs - Graphic Design Portfolio" />
        <meta property="og:site_name" content="Dynamo Designs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yoursite" />
        <meta name="twitter:creator" content="@yourhandle" />
      </Helmet>
      <Navbar />
      <Page1 />
    </>
  );
};

export default App;