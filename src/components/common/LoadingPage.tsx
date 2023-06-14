import React from "react";
import Footer from "./Footer";
import Loading from "./Loading";

interface LoadingPageProps {
  loading: boolean;
  children: JSX.Element;
  className?: string;
  footer?: boolean;
}

const LoadingPage = (props: LoadingPageProps) => {
  const { loading, className, footer } = props;
  if (loading) {
    return <Loading loading={true} className={className} />;
  }

  return (
    <>
      {props.children}
      {footer && <Footer />}
    </>
  );
};

export default LoadingPage;
