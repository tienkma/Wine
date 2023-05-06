import React from "react";
import Footer from "./Footer";
import Loading from "./Loading";

interface LoadingPageProps{
  loading: boolean;
  children: JSX.Element
  className?: string;
}

const LoadingPage = (props:LoadingPageProps) => {
  const {loading, className} = props;
  if(loading) {
    return <Loading loading={true} className={className} />
  }

  return (
    <>
    {props.children}
    <Footer />
    </>
  );
};

export default LoadingPage;
