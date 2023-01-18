import React, { useState } from "react";
import BookNowButton from "../Component/BookNowButton";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

//src
import "./Homepage.scss";

export default function Homepage() {
  const [expanded, setExpanded] = useState(false);
  const [navExpand, setNavExpand] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [openCard, setOpenCard] = useState(1);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  window.addEventListener("resize", (e) =>
    setScreenWidth(e.target.screen.availWidth)
  );

  const overlayName = (id) => {
    switch (id) {
      case 0:
        return "Phone";

      case 1:
        return "Direction";

      case 2:
        return "Schedule";

      default:
        break;
    }
  };
  const closeCard = (id) => {
    document.getElementsByClassName(`open-${id}`)[0].style.display = "none";
  };
  const handleOverlay = (card, index) => {
    let cardId = document.getElementsByClassName(`open-${card}`)[0];
    let indexId = document.getElementsByClassName(`open-${card}-${card}`)[
      index
    ];

    cardId.style.display = "flex";
    cardId.style.transition = "1s";
    indexId.style.display = "flex";

    setOpenCard(overlayName(index));

    if (index === 0) {
      document.getElementsByClassName(`open-${card}-${card}`)[1].style.display =
        "none";
      document.getElementsByClassName(`open-${card}-${card}`)[2].style.display =
        "none";
    } else if (index === 1) {
      document.getElementsByClassName(`open-${card}-${card}`)[0].style.display =
        "none";
      document.getElementsByClassName(`open-${card}-${card}`)[2].style.display =
        "none";
    } else if (index === 2) {
      document.getElementsByClassName(`open-${card}-${card}`)[0].style.display =
        "none";
      document.getElementsByClassName(`open-${card}-${card}`)[1].style.display =
        "none";
    }
  };
  return (
    <div className="homepage-main">
      {screenWidth > 768 && (
        <div className="contact-line-main">
          <p></p>
          <p>info@Expertcentre.co.uk</p>
        </div>
      )}

      {screenWidth > 768 ? (
        <div className="home-section-1">
          <img src="/homepage/sec-1-banner.png" width="100%" />
          <div className="navbar-section-1">
            <img
              className="navbar-logo"
              src="/homepage/expert-logo.png"
              height={50}
            />

            <div className="navbar-right-menu">
              <p className="navbar-name">Laser Hair Removal</p>
              <ul>
                <li>
                  Skin <img src="/homepage/drop-down.png" />{" "}
                </li>
                <li>
                  Medical <img src="/homepage/drop-down.png" />
                </li>
                <li>Contact</li>
                <li>Offer</li>
                <li>Price</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <div className="sec-1-banner-text-main">
            <div className="sec-1-banner-text-inner">
              <div className="sec-1-side-text">
                <div className="first-sec-1">
                  <p className="head">
                    <span>LASER</span> HAIR REMOVAL
                  </p>
                  <p className="sub-head">FULL BODY</p>
                </div>
                <div className="second-sec-1">
                  <div className="first">
                    <p className="price">
                      <sup>£</sup>295
                    </p>
                    <p className="per-session">PER SESSION</p>
                  </div>
                  <div className="second">
                    <p className="enjoy">& ENJOY</p>
                    <p className="facial">FREE CLASSIC FACIAL</p>
                  </div>
                </div>
              </div>
              <div className="sec-1-form">
                <input placeholder="Name" />
                <input placeholder="Email Address" />
                <input placeholder="Contact Number" />
                <button>GET FREE CONSULTATION</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mob-home-section-1">
          <div className="mob-navbar">
            <img src="/homepage/expert-mob.png" width="auto" height="30px" />
            {!navExpand ? (
              <DehazeIcon
                onClick={() => setNavExpand(true)}
                sx={{ color: "white" }}
              />
            ) : (
              <div className="expanded-navbar">
                <CloseIcon
                  onClick={() => setNavExpand(false)}
                  style={{ alignItems: "flex-end" }}
                />
                <p>Contact</p>
                <p>Offers</p>
                <p>Prices</p>
                <p>Blog</p>
              </div>
            )}
          </div>
          <div className="mob-sec-1-banner">
            <div className="sec-1-banner-line1">
              <div className="line1-main-head">
                <p>Laser Hair Removal</p>{" "}
              </div>
              <div className="line1-option">
                <p>Skin</p>{" "}
              </div>
              <div className="line1-option">
                <p>Medical</p>{" "}
              </div>
            </div>

            <div className="mob-sec-1-inside">
              <div></div>
              <div className="sec-1-banner-line2">
                <p className="head">
                  <span>LASER</span> HAIR REMOVAL
                </p>
                <p className="sub">FULL BODY</p>
              </div>

              <div className="sec-1-banner-line3">
                <div className="first">
                  <p className="price">£295</p>
                  <p className="per-session">PER SESSION</p>
                </div>
                <div className="second">
                  <p className="enjoy">& ENJOY FREE </p>
                  <p className="facial">CLASSIC FACIAL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="home-section-2">
        {screenWidth < 769 && (
          <div className="sec-2-form">
            <input placeholder="Name" />
            <input placeholder="Email Address" />
            <input placeholder="Contact Number" />
            <button>GET FREE CONSULTATION</button>
          </div>
        )}
        <p className="sec-2-head">The Best Laser Hair Removal for Women </p>
        <p className="sec-2-sub-head">
          Don't just look great, feel great with the safe and medical-grade
          laser hair removal from our seasoned therapists at Expert Centre. We
          only use the best equipment and provide our clients with
          super-friendly customer service to set them up for a smooth journey.
        </p>
      </div>

      <div className="home-section-3">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          // infiniteLoop={true}
          // autoPlay={true}
        >
          <div className="sec-3-carousel">
            <div className="sec-3-carousel-1">
              <div className="sec-3-carousel-1-right">
                <p className="sec-3-carousel-1-text">
                  The most effective method of removing hair is laser hair
                  removal, which permanently reduces hair growth by up to 90%,
                  leaving the skin smooth & silky. It can be used on almost any
                  part of the body, even on sensitive areas like the face and
                  bikini line, so it is suitable for any skin tone. Gift
                  yourself with a luxurious flair of hair-free & care-free skin
                  with our laser hair removal treatment.
                </p>
                <div className="book-now-outlined">
                  <div className="hover-red"></div>
                  <p>Book Now</p>
                  <KeyboardArrowRightIcon />
                </div>
              </div>
              <div className="sec-3-carousel-1-head-main">
                <p className="sec-3-carousel-1-head">
                  Take Back Control of Your Skin
                </p>
                <div></div>
              </div>
            </div>
            {/* <img src="/homepage/sec-3-img1.png" /> */}
          </div>
          <div className="sec-3-carousel">
            <div className="sec-3-carousel-2">
              <div className="sec-3-carousel-2-text-main">
                <p className="sec-3-carousel-2-head">
                  Take Back Control of Your Skin
                </p>
                <p className="sec-3-carousel-2-text">
                  The most effective method of removing hair is laser hair
                  removal, which permanently reduces hair growth by up to 90%,
                  leaving the skin smooth & silky. It can be used on almost any
                  part of the body, even on sensitive areas like the face and
                  bikini line, so it is suitable for any skin tone. Gift
                  yourself with a luxurious flair of hair-free & care-free skin
                  with our laser hair removal treatment.
                </p>
                <div className="book-now-outlined">
                  <div className="hover-red"></div>
                  <p>Book Now</p>
                  <KeyboardArrowRightIcon />
                </div>
              </div>
            </div>
            {/* <img src="/homepage/sec-3-img2.png" /> */}
          </div>
        </Carousel>
      </div>

      <div className="home-section-4">
        <div className="sec-4-row-1">
          <img className="sec-4-img" src="/homepage/sec-4-img1.png" />
          <div className="row-1-right">
            <div className="row-1-right-inner">
              <img className="sec-4-icon" src="/homepage/sec-4-icon1.png" />
              <h2 className="head">Hire Specialists, Hire Us!</h2>
              <p className="sub-text">
                We possess a thorough expertise in women laser hair removal and
                are rightly known as the UK’s best hair removal clinic; thanks
                to our knowledge, diligence and expert staff.
              </p>
              <BookNowButton />
            </div>
          </div>
        </div>

        <div className="sec-4-row-2">
          <div className="row-2-left">
            <div className="row-2-left-inner">
              <img className="sec-4-icon" src="/homepage/sec-4-icon2.png" />
              <h2 className="head">Hire Specialists, Hire Us!</h2>
              <p className="sub-text">
                We possess a thorough expertise in women laser hair removal and
                are rightly known as the UK’s best hair removal clinic; thanks
                to our knowledge, diligence and expert staff.
              </p>

              <BookNowButton />
            </div>
          </div>
          <img className="sec-4-img" src="/homepage/sec-4-img2.png" />
        </div>
      </div>

      <div className="home-section-5">
        <div className="home-section-5-inner">
          <p className="sec-5-head">Can All Skin Colours Be Treated?</p>
          <p className="sec-5-sub-head">
            Our Advanced Laser Hair Removal systems can treat women of all skin
            types, including those with dark skin. Skin Types are classified
            into six categories in the Fitzpatrick table.
          </p>

          <div className="section-5-card-main">
            <div className="sec-5-card">
              <img src="/homepage/sec-5-icon1.png" />
              <h3>Identify</h3>
              <p className="sec-5-card-text">
                Type 1 is very pale with freckles and burns easily, while Type 6
                is black and does not burn easily.
              </p>
            </div>

            <div className="sec-5-card center-card">
              <img src="/homepage/sec-5-icon2.png" />
              <h3>Measure</h3>
              <p className="sec-5-card-text">
                Using the Fitzpatrick table, you can measure your genetic
                disposition and reaction to sun exposure.
              </p>
            </div>

            <div className="sec-5-card">
              <img src="/homepage/sec-5-icon3.png" />
              <h3>Let's laser</h3>
              <p className="sec-5-card-text">
                According to the table, we need to use the right laser equipment
                and parameters based on skin type.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="homepage-section-6">
        <div className="home-section-6-inner">
          <p className="sec-6-head">
            Features of Our Laser Hair Removal Service
          </p>
          <p className="sec-6-sub-head">
            By providing avant-garde services, your experience with Expert
            Centre includes:
          </p>

          <div className="section-6-card-main">
            <div className="sec-6-card">
              <img src="/homepage/sec-6-icon1.png" />
              <p className="sec-6-card-text">
                Pre- and post-treatment guidelines & aftercare provided by
                highly vetted and dedicated laser practitioners
              </p>
            </div>

            <div className="sec-6-card center-card">
              <img src="/homepage/sec-6-icon2.png" />
              <p className="sec-6-card-text">
                Patch test & consultation with medical experts to determine
                whether laser treatment is right for your skin type
              </p>
            </div>

            <div className="sec-6-card">
              <img src="/homepage/sec-6-icon3.png" />
              <p className="sec-6-card-text">
                Providing a tranquil & comfortable clinic environment.
                Satisfaction, privacy, & safety are our top priorities
              </p>
            </div>
          </div>

          <BookNowButton />
        </div>
      </div>

      <div className="homepage-section-7">
        <Carousel showThumbs={false} showStatus={false} showArrows={false}>
          <div className="sec-7-carousel">
            <div className="sec-7-carousel-text">
              <p className="sec-7-head">Treat Yourself to Better Skin</p>
              <p className="sec-7-sub">
                Your skin, your hair, and your choice. With Expert Centre, you
                can remain in control of your treatment without ever needing to
                deal with the hassle of harsh chemicals or uncomfortable waxing
                or shaving. The treatment gives maximum results by targeting
                different skin types. We make sure your skin type is not
                sensitive to lasers, and it can be used on any part of your
                body. Laser treatments are painless and effective. We provide
                regular maintenance to ensure lasting results.
              </p>
            </div>
            <img src="/homepage/sec-7-img1.png" />
          </div>
          <div className="sec-7-carousel">
            <div className="sec-7-carousel-text">
              <p className="sec-7-head">Treat Yourself to Better Skin</p>
              <p className="sec-7-sub">
                Your skin, your hair, and your choice. With Expert Centre, you
                can remain in control of your treatment without ever needing to
                deal with the hassle of harsh chemicals or uncomfortable waxing
                or shaving. The treatment gives maximum results by targeting
                different skin types. We make sure your skin type is not
                sensitive to lasers, and it can be used on any part of your
                body. Laser treatments are painless and effective. We provide
                regular maintenance to ensure lasting results.
              </p>
            </div>
            <img src="/homepage/sec-7-img2.png" />
          </div>
          <div className="sec-7-carousel">
            <div className="sec-7-carousel-text">
              <p className="sec-7-head">Unleash Your Inner Superwoman</p>
              <p className="sec-7-sub">
                We know daily shaving & painful waxing is a real drain of your
                money and time, and even then, regrowth of hairs after a couple
                of days could be very annoying. At Expert Centre, we provide our
                clients with a safe & lasting alternative to conventional hair
                removal methods and help you become an assertive person. Your
                inner superwoman will come to life.
              </p>
            </div>
            <img src="/homepage/sec-7-img3.png" />
          </div>
        </Carousel>
      </div>

      <div className="homepage-section-8">
        <p className="sec-8-main-heading">
          <span>How does</span> Laser Hair Removal work?
        </p>
        <div className="sec-8-text">
          <div>
            <p className="sec-8-head">Step 1</p>
            <p className="sec-8-sub-head">
              It is recommended to shave the hair before the treatment. For the
              treatment to be comfortable, the hair should be as short as
              possible.
            </p>
          </div>

          <div>
            <p className="sec-8-head">Step 1</p>
            <p className="sec-8-sub-head">
              It is recommended to shave the hair before the treatment. For the
              treatment to be comfortable, the hair should be as short as
              possible.
            </p>
          </div>

          <div>
            <p className="sec-8-head">Step 1</p>
            <p className="sec-8-sub-head">
              It is recommended to shave the hair before the treatment. For the
              treatment to be comfortable, the hair should be as short as
              possible.
            </p>
          </div>
        </div>
      </div>

      <div className="homepage-section-9">
        <div className="sec-9-heading">
          <p className="sec-9-head">
            Women's Laser Hair Removal <span>Results</span>
          </p>
          <p className="sec-9-sub-head">
            Tired of wearing jeans and full-length trousers even on the beach,
            pool and at parties? Now you don't need to! Here are the results of
            LHR for women:
          </p>
        </div>
        <div className="sec-9-services-card-main">
          <div className="sec-9-card purple">
            <img src="/homepage/sec-9-img1.png" />
            <div className="sec-9-service-name-1">
              <div className="sec-9-overlay-1"></div>
              <p>Hair Free Skin</p>
            </div>
          </div>

          <div className="sec-9-card yellow">
            <img src="/homepage/sec-9-img2.png" />
            <div className="sec-9-service-name-2">
              <div className="sec-9-overlay-2"></div>
              <p>No Ingrown Hairs</p>
            </div>
          </div>

          <div className="sec-9-card gray">
            <img src="/homepage/sec-9-img3.png" />
            <div className="sec-9-service-name-3">
              <div className="sec-9-overlay-3"></div>
              <p>Finer softer hair</p>
            </div>
          </div>

          <div className="sec-9-card blue">
            <img src="/homepage/sec-9-img4.png" />
            <div className="sec-9-service-name-4">
              <div className="sec-9-overlay-4"></div>
              <p>Baby soft skin</p>
            </div>
          </div>

          <div className="sec-9-card pink">
            <img src="/homepage/sec-9-img5.png" />
            <div className="sec-9-service-name-5">
              <div className="sec-9-overlay-5"></div>
              <p>Significant Hair Reduction</p>
            </div>
          </div>
        </div>

        <div className="book-now-outlined">
          <p>Book Now</p>
          <KeyboardArrowRightIcon />
        </div>
      </div>

      <div className="homepage-section-10">
        {/*  */}
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What can you expect?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="typo-inner">
              If you don’t like your dark body hair and want to remove them
              permanently, then you are an ideal candidate to receive this
              treatment.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Is there any aftercare?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you don’t like your dark body hair and want to remove them
              permanently, then you are an ideal candidate to receive this
              treatment.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>What is the frequency of my visits?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you don’t like your dark body hair and want to remove them
              permanently, then you are an ideal candidate to receive this
              treatment.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography>Am I suitable for this Treatment?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you don’t like your dark body hair and want to remove them
              permanently, then you are an ideal candidate to receive this
              treatment.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography>How many treatments will I require?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="typo-inner">
              If you don’t like your dark body hair and want to remove them
              permanently, then you are an ideal candidate to receive this
              treatment.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Typography>
              Why Choose Laser Hair Removal at Expert Centre?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you don’t like your dark body hair and want to remove them
              permanently, then you are an ideal candidate to receive this
              treatment.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7a-content"
            id="panel7a-header"
          >
            <Typography>How does Work laser Hair Removal for Women?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you don’t like your dark body hair and want to remove them
              permanently, then you are an ideal candidate to receive this
              treatment.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8a-content"
            id="panel8a-header"
          >
            <Typography>Is there any side effect?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you don’t like your dark body hair and want to remove them
              permanently, then you are an ideal candidate to receive this
              treatment.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="homepage-section-11">
        <iframe
          width="100%"
          height="350"
          src="https://www.youtube.com/embed/wd8a9FenEdo?autoplay=1&mute=1&loop=1"
          frameborder="0"
          allowfullscreen
        ></iframe>

        <button className="sec-11-btn">
          Schedule Your Call-Back For Laser Hair Removal
        </button>
      </div>

      <div className="homepage-section-12">
        <p className="sec-12-head">Don’t take our word for it.</p>
        <p className="sec-12-sub">
          Here’s What Our <span>Clients Have to Say!</span>{" "}
        </p>

        <div className="sec-12-cards">
          <div className="sec-12-card">
            <img src="/homepage/sec-12-img1.png" />
            <p className="sec-12-card-text">
              My first session alone made a real difference. I got my facial
              hairs treated, and at the end of the day, my stubble had almost
              gone. I’m sure the results will get better in the next sessions.
            </p>
            <p className="sec-12-card-name">Betty’s Story</p>
          </div>

          <div className="sec-12-card">
            <img src="/homepage/sec-12-img2.png" />
            <p className="sec-12-card-text">
              That was really annoying routine for me to shave my facial hair on
              a daily basis. After receiving a course of 8 sessions, my skin
              became smooth and hair-free with no ingrown hairs and stubble.
              Thumbs up to Expert Centre
            </p>
            <p className="sec-12-card-name">Erin’s Story</p>
          </div>

          <div className="sec-12-card">
            <img src="/homepage/sec-12-img3.png" />
            <p className="sec-12-card-text">
              An exceptional experience I have ever had with Expert Centre. They
              are professional enough to treat male laser hair removal
              treatment. I was treated with respect and discreet manner. I
              strongly recommend it.
            </p>
            <p className="sec-12-card-name">Amanda’s Story</p>
          </div>
        </div>
      </div>

      <div className="homepage-section-13">
        <div className="sec-13-inner">
          <p className="sec-13-head">
            Central <span>London</span>{" "}
          </p>
          <p className="sec-13-sub">
            {"(2 minutes Walk from Oxford Circus Station)"}
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.7037367062446!2d-0.13930247077708313!3d51.51661093328037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bab89e765f5%3A0x294646c76f1bb846!2sExpert%20Centre!5e0!3m2!1sen!2s!4v1673508689499!5m2!1sen!2s"
            width="100%"
            height="450"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="homepage-section-14">
        <div className="sec-14-inner">
          <p className="sec-14-head">
            Our <span>Clinics</span>{" "}
          </p>

          <div className="sec-14-cards">
            <div className="sec-14-row1">
              <div className="sec-14-card">
                <p className="sec-14-card-head">Central London</p>
                <p className="sec-14-card-sub">
                  Expert Centre, 31-32 Eastcastle Street, London W1W 8DL
                </p>
                <div className="sec-14-contact">
                  <div className="open-1">
                    <div></div>
                    <div className="open-1-1">
                      <img width="20px" src="/homepage/sec-14-icon1.png" />
                      <p>020 7099 7738</p>
                    </div>
                    <div className="open-1-1">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.7037367062446!2d-0.13930247077708313!3d51.51661093328037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bab89e765f5%3A0x294646c76f1bb846!2sExpert%20Centre!5e0!3m2!1sen!2s!4v1673508689499!5m2!1sen!2s"
                        width="100%"
                        height="190"
                        // style="border:0;"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="open-1-1">
                      <div className="open-1-1-3">
                        <p>Monday to Friday</p>
                        <p>10am to 4pm</p>
                      </div>
                    </div>
                    <div className="open-close" onClick={() => closeCard(1)}>
                      <ChevronLeftIcon /> <p>{openCard}</p>
                      <div></div>
                    </div>
                  </div>
                  <img
                    src="/homepage/sec-14-icon1.png"
                    onClick={() => handleOverlay(1, 0)}
                  />
                  <img
                    src="/homepage/sec-14-icon2.png"
                    onClick={() => handleOverlay(1, 1)}
                  />
                  <img
                    src="/homepage/sec-14-icon3.png"
                    onClick={() => handleOverlay(1, 2)}
                  />
                </div>
              </div>

              <div className="sec-14-card">
                <p className="sec-14-card-head">Central London</p>
                <p className="sec-14-card-sub">
                  Expert Centre, 31-32 Eastcastle Street, London W1W 8DL
                </p>
                <div className="sec-14-contact">
                  <div className="open-2">
                    <div></div>
                    <div className="open-2-2">
                      <img width="20px" src="/homepage/sec-14-icon1.png" />
                      <p>020 7099 7738</p>
                    </div>
                    <div className="open-2-2">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.7037367062446!2d-0.13930247077708313!3d51.51661093328037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bab89e765f5%3A0x294646c76f1bb846!2sExpert%20Centre!5e0!3m2!1sen!2s!4v1673508689499!5m2!1sen!2s"
                        width="100%"
                        height="190"
                        // style="border:0;"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="open-2-2">
                      <div className="open-2-2-3">
                        <p>Monday to Friday</p>
                        <p>10am to 4pm</p>
                      </div>
                    </div>
                    <div className="open-close" onClick={() => closeCard(2)}>
                      <ChevronLeftIcon /> <p>{openCard}</p>
                      <div></div>
                    </div>
                  </div>
                  <img
                    src="/homepage/sec-14-icon1.png"
                    onClick={() => handleOverlay(2, 0)}
                  />
                  <img
                    src="/homepage/sec-14-icon2.png"
                    onClick={() => handleOverlay(2, 1)}
                  />
                  <img
                    src="/homepage/sec-14-icon3.png"
                    onClick={() => handleOverlay(2, 2)}
                  />
                </div>
              </div>

              <div className="sec-14-card">
                <p className="sec-14-card-head">Central London</p>
                <p className="sec-14-card-sub">
                  Expert Centre, 31-32 Eastcastle Street, London W1W 8DL
                </p>
                <div className="sec-14-contact">
                  <div className="open-3">
                    <div></div>
                    <div className="open-3-3">
                      <img width="20px" src="/homepage/sec-14-icon1.png" />
                      <p>020 7099 7738</p>
                    </div>
                    <div className="open-3-3">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.7037367062446!2d-0.13930247077708313!3d51.51661093328037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bab89e765f5%3A0x294646c76f1bb846!2sExpert%20Centre!5e0!3m2!1sen!2s!4v1673508689499!5m2!1sen!2s"
                        width="100%"
                        height="190"
                        // style="border:0;"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="open-3-3">
                      <div className="open-3-3-3">
                        <p>Monday to Friday</p>
                        <p>10am to 4pm</p>
                      </div>
                    </div>
                    <div className="open-close" onClick={() => closeCard(3)}>
                      <ChevronLeftIcon /> <p>{openCard}</p>
                      <div></div>
                    </div>
                  </div>
                  <img
                    src="/homepage/sec-14-icon1.png"
                    onClick={() => handleOverlay(3, 0)}
                  />
                  <img
                    src="/homepage/sec-14-icon2.png"
                    onClick={() => handleOverlay(3, 1)}
                  />
                  <img
                    src="/homepage/sec-14-icon3.png"
                    onClick={() => handleOverlay(3, 2)}
                  />
                </div>
              </div>
            </div>
            <div className="sec-14-row1">
              <div className="sec-14-card">
                <p className="sec-14-card-head">Central London</p>
                <p className="sec-14-card-sub">
                  Expert Centre, 31-32 Eastcastle Street, London W1W 8DL
                </p>
                <div className="sec-14-contact">
                  <div className="open-4">
                    <div></div>
                    <div className="open-4-4">
                      <img width="20px" src="/homepage/sec-14-icon1.png" />
                      <p>020 7099 7738</p>
                    </div>
                    <div className="open-4-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.7037367062446!2d-0.13930247077708313!3d51.51661093328037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bab89e765f5%3A0x294646c76f1bb846!2sExpert%20Centre!5e0!3m2!1sen!2s!4v1673508689499!5m2!1sen!2s"
                        width="100%"
                        height="190"
                        // style="border:0;"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="open-4-4">
                      <div className="open-4-4-3">
                        <p>Monday to Friday</p>
                        <p>10am to 4pm</p>
                      </div>
                    </div>
                    <div className="open-close" onClick={() => closeCard(4)}>
                      <ChevronLeftIcon /> <p>{openCard}</p>
                      <div></div>
                    </div>
                  </div>
                  <img
                    src="/homepage/sec-14-icon1.png"
                    onClick={() => handleOverlay(4, 0)}
                  />
                  <img
                    src="/homepage/sec-14-icon2.png"
                    onClick={() => handleOverlay(4, 1)}
                  />
                  <img
                    src="/homepage/sec-14-icon3.png"
                    onClick={() => handleOverlay(4, 2)}
                  />
                </div>
              </div>

              <div className="sec-14-card">
                <p className="sec-14-card-head">Central London</p>
                <p className="sec-14-card-sub">
                  Expert Centre, 31-32 Eastcastle Street, London W1W 8DL
                </p>
                <div className="sec-14-contact">
                  <div className="open-5">
                    <div></div>
                    <div className="open-5-5">
                      <img width="20px" src="/homepage/sec-14-icon1.png" />
                      <p>020 7099 7738</p>
                    </div>
                    <div className="open-5-5">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.7037367062446!2d-0.13930247077708313!3d51.51661093328037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bab89e765f5%3A0x294646c76f1bb846!2sExpert%20Centre!5e0!3m2!1sen!2s!4v1673508689499!5m2!1sen!2s"
                        width="100%"
                        height="190"
                        // style="border:0;"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="open-5-5">
                      <div className="open-5-5-3">
                        <p>Monday to Friday</p>
                        <p>10am to 4pm</p>
                      </div>
                    </div>
                    <div className="open-close" onClick={() => closeCard(5)}>
                      <ChevronLeftIcon /> <p>{openCard}</p>
                      <div></div>
                    </div>
                  </div>
                  <img
                    src="/homepage/sec-14-icon1.png"
                    onClick={() => handleOverlay(5, 0)}
                  />
                  <img
                    src="/homepage/sec-14-icon2.png"
                    onClick={() => handleOverlay(5, 1)}
                  />
                  <img
                    src="/homepage/sec-14-icon3.png"
                    onClick={() => handleOverlay(5, 2)}
                  />
                </div>
              </div>

              <div className="sec-14-card">
                <p className="sec-14-card-head">Central London</p>
                <p className="sec-14-card-sub">
                  Expert Centre, 31-32 Eastcastle Street, London W1W 8DL
                </p>
                <div className="sec-14-contact">
                  <div className="open-6">
                    <div></div>
                    <div className="open-6-6">
                      <img width="20px" src="/homepage/sec-14-icon1.png" />
                      <p>020 7099 7738</p>
                    </div>
                    <div className="open-6-6">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.7037367062446!2d-0.13930247077708313!3d51.51661093328037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bab89e765f5%3A0x294646c76f1bb846!2sExpert%20Centre!5e0!3m2!1sen!2s!4v1673508689499!5m2!1sen!2s"
                        width="100%"
                        height="190"
                        // style="border:0;"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="open-6-6">
                      <div className="open-6-6-3">
                        <p>Monday to Friday</p>
                        <p>10am to 4pm</p>
                      </div>
                    </div>
                    <div className="open-close" onClick={() => closeCard(6)}>
                      <ChevronLeftIcon /> <p>{openCard}</p>
                      <div></div>
                    </div>
                  </div>
                  <img
                    src="/homepage/sec-14-icon1.png"
                    onClick={() => handleOverlay(6, 0)}
                  />
                  <img
                    src="/homepage/sec-14-icon2.png"
                    onClick={() => handleOverlay(6, 1)}
                  />
                  <img
                    src="/homepage/sec-14-icon3.png"
                    onClick={() => handleOverlay(6, 2)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
