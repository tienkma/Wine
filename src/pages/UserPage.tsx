import React, { useEffect, useState } from "react";
import PageHero from "../components/PageHero";
import Profile from "../components/Profile";

const UserPage = () => {
  const [choose, setChoose] = useState('user')
  


  return <main id="user-page">
      <PageHero title="user" />
      <section className="container">
        <section className="nav">
          <Profile />
          <div className="listWinery flex flex-col">
            {/* {optionUser.map((item: any) => (
              <button
                key={item.value}
                className={`${item.value === choose ? "activeWinery" : null} mt-1 text-base block mr-auto bg-transparent text-background/70 font-bold capitalize`}
                onClick={() => setChoose(item.value)}
              >
                {item.label}
              </button>
            ))} */}
          </div>
          </section>
        <section className="content">
          {/* {choose == "user" ? <ContentUser /> : <></>}
          {choose == 'changePassword' ? <PasswordChange /> : <></>}
          {choose == 'order' ? <ListOrder admin={false} /> : <></>} */}
        </section>
      </section>
    </main>
  ;
};

export default UserPage;
