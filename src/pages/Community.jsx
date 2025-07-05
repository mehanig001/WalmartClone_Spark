import React, { useState } from "react";
import "./Educationsection.css";
import { Link } from "react-router-dom";

function Community() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "How can I join the Greenovation Community?",
      answer:
        "You can join by signing up with your Walmart account and visiting the Community page. Participate in eco-forums, discussions, and contribute ideas for sustainable living.",
    },
    {
      question: "What can I do in the community section?",
      answer:
        "You can engage with other like-minded users, share your sustainability efforts, post suggestions, participate in eco-challenges, and earn green points!",
    },
    {
      question: "Are there rewards for community participation?",
      answer:
        "Yes! Active contributors can earn green points, badges, and may even get featured on our homepage for outstanding eco-initiatives.",
    },
    {
      question: "How do I report inappropriate content?",
      answer:
        "Every post and comment has a report option. Our moderation team ensures the community remains respectful and safe for everyone.",
    },
  ];

  const handleItemClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0, { behavior: "instant" });
  };

  return (
    <>
      <div className="bar">
        <img src="../images/education_bar_image.png" alt="" />
        <ul>
          <li>
            <a href="/green">Home</a>
          </li>
          <li>
            <a href="#Activities">Activities</a>
          </li>
          <li>
            <a href="#FAQ">FAQS</a>
          </li>
        </ul>
      </div>

      <div className="midse">
        <h1>Welcome to the Greenovation Community</h1>
        <br />
        <p>
          This is your hub to collaborate, discuss, and build a sustainable future together. Share your eco-ideas, connect with others, and explore tips and solutions that promote low-impact living.
        </p>

        <video width="750" height="500" autoPlay loop>
          <source src="../images/community_intro.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="leftse">
        <video width="750" height="500" autoPlay loop>
          <source src="../images/community_tips.mp4" type="video/mp4" />
        </video>

        <h1>Eco-Tips Shared by the Community</h1>
        <p>
          Discover practical and innovative sustainability tips directly from users like you. Whether it's composting at home, plastic-free hacks, or DIY eco-friendly products — we’ve got ideas that make a difference.
        </p>
      </div>

      <div className="complete">
        <div className="Certificate" id="Activities">
          <img
            src="../images/eco_community_badges.png"
            alt=""
            width="100%"
          />
        </div>

        <div className="smallcer">
          <img src="../images/community_card1.png" alt="" width="100%" />
        </div>
        <div className="largecer">
          <img src="../images/community_card2.png" alt="" width="100%" />
        </div>

        <img
          src="../images/community_card3.png"
          alt=""
          width="100%"
          className="shopprod"
        />

        <div className="FaqEdu" id="FAQ">
          <h1>Frequently Asked Questions</h1>
          {faqItems.map((item, index) => (
            <div key={index} className="FaqItem">
              <div
                className="FaqQuestion"
                onClick={() => handleItemClick(index)}
              >
                <div>{item.question}</div>
                <span className="AccordionIcon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="FaqAnswer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="ecofriendimg">
          <Link
            style={{ textDecoration: "none" }}
            to="/green"
            onClick={handleLinkClick}
          >
            <img src="../images/shop eco frinedly.png" alt="" width="100%" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Community;
