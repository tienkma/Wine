import React from "react";
import Footer from "./Footer";
import Loading from "./Loading";

interface LoadingPageProps {
  loading: boolean;
  children: JSX.Element;
  className?: string;
  footer?: boolean;
  error?: boolean;
}

const LoadingPage = (props: LoadingPageProps) => {
  const { loading, className, footer, error = false } = props;
  if (loading) {
    return <Loading loading={true} className={className} />;
  }

  if (error) {
    return (
      <div className="my-10 text-center font-medium text-xl text-red-500">
        No Data Avaiable
      </div>
    );
  }

  return (
    <>
      {props.children}
      {footer && <Footer />}
    </>
  );
};

export default LoadingPage;
