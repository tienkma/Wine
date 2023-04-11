import React, { useEffect, useState } from "react";

const UserPage = () => {
  const [choose, setChoose] = useState('user')
  


  return <main id="user-page">
      {/* <PageHero title="user" />
      <section className="container">
        <section className="nav">
          <Profile />
          <div className="listWinery">
            {optionUser.map((item: any) => (
              <button
                key={item.value}
                className={`${item.value === choose ? "activeWinery" : null}`}
                onClick={() => setChoose(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
          </section>
        <section className="content">
          {choose == "user" ? <ContentUser /> : <></>}
          {choose == 'changePassword' ? <PasswordChange /> : <></>}
          {choose == 'order' ? <ListOrder admin={false} /> : <></>}
        </section>
      </section>
      <Footer /> */}
      UserPage
    </main>
  ;
};

export default UserPage;
