import LoadingPage from "../components/common/LoadingPage";
import PageHero from "../components/common/PageHero";

export const OrderPage = () => {
  return (
    <main className="relative ">
      <PageHero title="orders" />
      <LoadingPage loading={false} footer={true}>
        <section className="container mx-auto pb-9">
          <div className="">
            <div className="">
              <ul className="nc zh by mt l1">
                <li className="ti ek gj pj zi">
                  <div className="jy">
                    <div className="re ij pj zy p1 q1 fk">
                      <div className="ql ul rt u1">
                        <div className="vd gg dh vv jz">
                          <div>
                            <p className="kn un go">Order ID</p>
                            <p className="kn vn fo od">#46199271460087</p>
                          </div>
                          <div>
                            <p className="kn un go">Date</p>
                            <p className="kn vn fo od">14 January, 2022</p>
                          </div>
                          <div>
                            <p className="kn un go">Total Amount</p>
                            <p className="kn vn fo od">$499</p>
                          </div>
                          <div>
                            <p className="kn un go">Order Status</p>
                            <div className="od sd qg">
                              <div className="td qg ug xf ff ne bj do zk tc">
                                <svg
                                  className="kf pe"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </div>
                              <span className="kn vn fo"> Pending </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vf ql ul rt u1">
                      <ul className="hi">
                        <li className="y sd wm nu">
                          <div className="xf">
                            <img
                              className="hl yi if oe"
                              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/order-details/3/product-1.png"
                              alt=""
                            />
                          </div>
                          <div className="sd kg vg vf jc">
                            <div className="gs qs bt">
                              <div>
                                <p className="mn vn fo">Apple Watch Series 7</p>
                                <p className="kc kn un go">Golden</p>
                              </div>
                              <div className="oc qr">
                                <p className="mn vn gn fo pu">$359</p>
                              </div>
                            </div>
                            <div className="x ob jb dr">
                              <div className="sd wh">
                                <a
                                  href="#"
                                  title=""
                                  className="ll xb kn un go cp dp aj rp fq gq mq iq"
                                >
                                  {" "}
                                  View Product{" "}
                                </a>
                                <span className="lo"> | </span>
                                <a
                                  href="#"
                                  title=""
                                  className="ll xb kn un go cp dp aj rp fq gq mq iq"
                                >
                                  {" "}
                                  Similar Product{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="y sd wm nu">
                          <div className="xf">
                            <img
                              className="hl yi if oe"
                              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/order-details/3/product-2.png"
                              alt=""
                            />
                          </div>
                          <div className="sd kg vg vf jc">
                            <div className="gs qs bt">
                              <div>
                                <p className="mn vn fo">Beylob 90 Speaker</p>
                                <p className="kc kn un go">Space Gray</p>
                              </div>
                              <div className="oc qr">
                                <p className="mn vn gn fo pu">$49</p>
                              </div>
                            </div>
                            <div className="x ob jb dr">
                              <div className="sd wh">
                                <a
                                  href="#"
                                  title=""
                                  className="ll xb kn un go cp dp aj rp fq gq mq iq"
                                >
                                  {" "}
                                  View Product{" "}
                                </a>
                                <span className="lo"> | </span>
                                <a
                                  href="#"
                                  title=""
                                  className="ll xb kn un go cp dp aj rp fq gq mq iq"
                                >
                                  {" "}
                                  Similar Product{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <hr className="nc pj" />
                      <div className="sd qg nc wh">
                        <button
                          type="button"
                          className="td qg ug ql jm kn vn fo cp dp ek gj qj zi fq gq mq jq lp"
                        >
                          View Order
                        </button>
                        <button
                          type="button"
                          className="td qg ug ql jm kn vn fo cp dp ek gj qj zi fq gq mq jq lp"
                        >
                          View Invoice
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="ti ek gj pj zi">
                  <div className="jy">
                    <div className="re ij pj zy p1 q1 fk">
                      <div className="ql ul rt u1">
                        <div className="vd gg dh vv jz">
                          <div>
                            <p className="kn un go">Order ID</p>
                            <p className="kn vn fo od">#46199271460087</p>
                          </div>
                          <div>
                            <p className="kn un go">Date</p>
                            <p className="kn vn fo od">14 January, 2022</p>
                          </div>
                          <div>
                            <p className="kn un go">Total Amount</p>
                            <p className="kn vn fo od">$299</p>
                          </div>
                          <div>
                            <p className="kn un go">Order Status</p>
                            <div className="od sd qg">
                              <div className="td qg ug xf ff ne bj do al tc">
                                <svg
                                  className="kf pe"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <span className="kn vn fo"> Delivered </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vf ql ul rt u1">
                      <ul className="hi">
                        <li className="y sd wm nu">
                          <div className="xf">
                            <img
                              className="hl yi if oe"
                              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/order-details/3/product-1.png"
                              alt=""
                            />
                          </div>
                          <div className="sd kg vg vf jc">
                            <div className="gs qs bt">
                              <div>
                                <p className="mn vn fo">Apple Watch Series 7</p>
                                <p className="kc kn un go">Golden</p>
                              </div>
                              <div className="oc qr">
                                <p className="mn vn gn fo pu">$359</p>
                              </div>
                            </div>
                            <div className="x ob jb dr">
                              <div className="sd wh">
                                <a
                                  href="#"
                                  title=""
                                  className="ll xb kn un go cp dp aj rp fq gq mq iq"
                                >
                                  {" "}
                                  View Product{" "}
                                </a>
                                <span className="lo"> | </span>
                                <a
                                  href="#"
                                  title=""
                                  className="ll xb kn un go cp dp aj rp fq gq mq iq"
                                >
                                  {" "}
                                  Similar Product{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="y sd wm nu">
                          <div className="xf">
                            <img
                              className="hl yi if oe"
                              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/order-details/3/product-2.png"
                              alt=""
                            />
                          </div>
                          <div className="sd kg vg vf jc">
                            <div className="gs qs bt">
                              <div>
                                <p className="mn vn fo">Beylob 90 Speaker</p>
                                <p className="kc kn un go">Space Gray</p>
                              </div>
                              <div className="oc qr">
                                <p className="mn vn gn fo pu">$49</p>
                              </div>
                            </div>
                            <div className="x ob jb dr">
                              <div className="sd wh">
                                <a
                                  href="#"
                                  title=""
                                  className="ll xb kn un go cp dp aj rp fq gq mq iq"
                                >
                                  {" "}
                                  View Product{" "}
                                </a>
                                <span className="lo"> | </span>
                                <a
                                  href="#"
                                  title=""
                                  className="ll xb kn un go cp dp aj rp fq gq mq iq"
                                >
                                  {" "}
                                  Similar Product{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <hr className="nc pj" />
                      <div className="sd qg nc wh">
                        <button
                          type="button"
                          className="td qg ug ql jm kn vn fo cp dp ek gj qj zi fq gq mq jq lp"
                        >
                          View Order
                        </button>
                        <button
                          type="button"
                          className="td qg ug ql jm kn vn fo cp dp ek gj qj zi fq gq mq jq lp"
                        >
                          View Invoice
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </LoadingPage>
    </main>
  );
};
