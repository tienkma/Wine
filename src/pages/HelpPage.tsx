import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PageHero from "../components/PageHero";
import { RouterName } from "../routers";
import { Link } from "react-router-dom";

export default function HelpPage() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <main className="minHeight">
      <PageHero title="help" />
      <div className="container mx-auto flex divide-x py-14">
        <div className="pr-8 flex-1">
          <h6 className="uppercase text-slate-500 text-sm font-bold">
            Common purchase queries answered
          </h6>
          <h3 className="text-2xl text-background font-bold mb-4 mt-2 uppercase">
            Orders and Shipping
          </h3>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            disableGutters={true}
            className="border border-solid border-slate-200 border-b-0"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={
                expanded === "panel1"
                  ? { borderBottom: "1px solid #e5e7eb" }
                  : {}
              }
            >
              <Typography>
                How long does it take for me to receive my order?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We normally produce and ship within 15-20 business days not
                including the production time.
                <br />
                Our Standard shipping/transit times apply &#40;15-20 days for
                domestic and 20-35 days for international&#41;.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            disableGutters={true}
            sx={expanded === "panel2" ? {} : {}}
            className="border border-solid border-slate-200 border-b-0"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              sx={
                expanded === "panel2"
                  ? { borderBottom: "1px solid #e5e7eb" }
                  : {}
              }
            >
              <Typography>
                How do I change my shipping address or order information?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Please contact us at Contact page within 24 hours to confirm the
                correct one. The deadline to change the address is 48 hours from
                the placing of your order. For any other information, please
                visit the Shipping Policy Page.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            disableGutters={true}
            sx={expanded === "panel3" ? {} : {}}
            className="border border-solid border-slate-200 border-b-0"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
              sx={
                expanded === "panel3"
                  ? { borderBottom: "1px solid #e5e7eb" }
                  : {}
              }
            >
              <Typography>How do I track the status of my order?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The status of your order will be sent in an email after 3-5
                business days from the placing time. If you have not received
                it, please kindly send us an email via Contact page
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            disableGutters={true}
            sx={expanded === "panel4" ? {} : {}}
            className="border border-solid border-slate-200 border-b-0"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              sx={
                expanded === "panel4"
                  ? { borderBottom: "1px solid #e5e7eb" }
                  : {}
              }
            >
              <Typography>How secure is my personal information?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We adhere to the highest industry standards to protect your
                personal information when you checkout and purchase.
                <br />
                <p className="my-3"></p>
                Your credit card information is encrypted during transmission
                using secure socket layer &#40;SSL&#41; technology, which is
                widely used on the Internet for processing payments. Your credit
                card information is only used to complete the requested
                transaction and is not subsequently stored.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
            disableGutters={true}
            sx={expanded === "panel9" ? {} : {}}
            className="border border-solid border-slate-200 border-b-0"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel9bh-content"
              id="panel9bh-header"
              sx={
                expanded === "panel9"
                  ? { borderBottom: "1px solid #e5e7eb" }
                  : {}
              }
            >
              <Typography>Do you charge sales tax?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We are an international company, using an American payment
                processor called Stripe & PayPal. That results in some banks
                charging additional fees, while other banks do not. Sadly, this
                is outside of our control.
                <br />
                <p className="my-3"></p>
                Additionally, we have heard that those international payments
                are often routed through Canada and Singapore. Some banks will
                ask if this is intentional, which it is. The payment will remain
                secure as Stripe is PCI-compliant and handles the whole payment
                process for us.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
            disableGutters={true}
            sx={expanded === "panel10" ? {} : {}}
            className="border border-solid border-slate-200 border-b-0"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel10bh-content"
              id="panel10bh-header"
              sx={
                expanded === "panel10"
                  ? { borderBottom: "1px solid #e5e7eb" }
                  : {}
              }
            >
              <Typography>
                I provided an incorrect address and my package was returned to
                sender. Can you reship my order to the correct address and I'll
                just pay the shipping fee?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                For orders shipped to the wrong address due to a customer
                inputting the incorrect address:
                <p className="my-3"></p>&#8722; We are not responsible if your
                order gets delivered to the wrong address or returned to the
                sender (in this case, we just can support contacting the carrier
                for more information).
                <p className="my-3"></p>
                So please be extremely careful when entering your shipping
                address.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="pl-8 flex-1">
          <h6 className="uppercase text-slate-500 text-sm font-bold">
            If you need to swap an item
          </h6>
          <h3 className="text-2xl text-background font-bold mb-4 mt-2 uppercase">
            Returns and Exchanges
          </h3>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            disableGutters={true}
            sx={expanded === "panel5" ? {} : {}}
            className="border border-solid border-slate-200 border-b-0"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
              sx={
                expanded === "panel5"
                  ? { borderBottom: "1px solid #e5e7eb" }
                  : {}
              }
            >
              <Typography>What is your returns policy?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Please see our Return & Refund.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
            disableGutters={true}
            sx={expanded === "panel6" ? {} : {}}
            className="border border-solid border-slate-200 border-b-0"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
              sx={
                expanded === "panel6"
                  ? { borderBottom: "1px solid #e5e7eb" }
                  : {}
              }
            >
              <Typography>
                I ordered a wrong product. Can I return it and exchange it with
                the product that I want?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Since our products are custom-made and we only produce a product
                once we receive an order, we don&rsquo;t accept returns and
                exchange it for another product especially if it is due to the
                customer&rsquo;s mistake. It is very important to review your
                order carefully before check-out.
                <p className="my-3"></p>
                Please check our return policy here: Refund & Return
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
            disableGutters={true}
            sx={expanded === "panel7" ? {} : {}}
            className="border border-solid border-slate-200 border-b-0"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7bh-content"
              id="panel7bh-header"
              sx={
                expanded === "panel7"
                  ? { borderBottom: "1px solid #e5e7eb" }
                  : {}
              }
            >
              <Typography>My order arrived damaged</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Please contact our Customer Support team by sending an email via
                Contact Us page to start the complaint process. Please include
                the following information:
                <p className="my-3"></p>
                &#8722; Your order number &#8722; Video or photo of the faulty
                product (If your claim is in regards to a print size or
                placement issue, please include a measuring tape, stick, or
                ruler in the photographs of affected garments) &#8722; Your
                complete delivery address
                <p className="my-3"></p>
                Please note that we just support solving the problem and
                offering a full refund if you notify us the problem within 15
                days from receiving the order.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
            disableGutters={true}
            sx={expanded === "panel8" ? {} : {}}
            className="border border-solid border-slate-200 border-b-0"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel8bh-content"
              id="panel8bh-header"
              sx={
                expanded === "panel8"
                  ? { borderBottom: "1px solid #e5e7eb" }
                  : {}
              }
            >
              <Typography>
                What should I do in case of late, missing refunds?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If you haven&rsquo;t received a refund yet, first check your
                bank account again. Then contact your credit card company, it
                may take some time before your refund is officially posted.
                Next, contact your bank. There is often some processing time
                before a refund is posted. If you&rsquo;ve done all of this and
                you still have not received your refund yet, please contact us
                at{" "}
                <Link
                  className="text-black font-semibold"
                  to={RouterName.CONTACT}
                >
                  Contact page
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel11"}
            onChange={handleChange("panel11")}
            disableGutters={true}
            sx={expanded === "panel11" ? {} : {}}
            className="border border-solid border-slate-200 border-b-0"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel11bh-content"
              id="panel11bh-header"
              sx={
                expanded === "panel11"
                  ? { borderBottom: "1px solid #e5e7eb" }
                  : {}
              }
            >
              <Typography>
                Can I change or cancel an order after I've submitted it?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className="ml-4">
                  <li className="list-disc mb-2">
                    Your order is only eligible to be cancelled within 12 hours
                    of placing the order. After that time, the order is locked
                    for processing and can no longer be cancelled.{" "}
                  </li>
                  <li className="list-disc mb-2">
                    The cancellation can not be accepted if you change your
                    mind. We print on demand and therefore we cannot accept
                    returns with that inquiry.{" "}
                  </li>
                </ul>
                Kindly send us an email via{" "}
                <Link
                  className="text-black font-semibold"
                  to={RouterName.CONTACT}
                >
                  Contact page
                </Link>
                .
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel12"}
            onChange={handleChange("panel12")}
            disableGutters={true}
            sx={expanded === "panel12" ? {} : {}}
            className="border border-solid border-slate-200 border-b-0"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel12bh-content"
              id="panel12bh-header"
              sx={
                expanded === "panel12"
                  ? { borderBottom: "1px solid #e5e7eb" }
                  : {}
              }
            >
              <Typography>
                I'm unsatisfied with my product. What can I do?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Please email us at Contact page with a photo of the product you
                received along with detailed shots you wish to include. We will
                use this information to look into a replacement and prevent
                future errors. Our customer service team will review your claim.
                If your claim is approved, we will provide you with a
                replacement free of charge.
                <p className="my-3"></p>
                For all other requests please email us at Contact page. Our
                customer service team will review your claim. If your claim is
                approved, we will provide you with a return address. Customers
                are responsible for return and exchange shipping rates. Please
                allow 3-5 business days after your return is received for a
                refund to appear.
                <br />
                Any unauthorized returns or returns of items that are washed,
                worn, or damaged will not be eligible for a refund or
                replacement, and the item will be forfeited.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
