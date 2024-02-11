import React from "react";
import Carousel from "../assests/Carousel";
import Card from "../assests/Card";
import data from "../../Data/categories.js";
import Banner from "../assests/banner.jsx";
import Filter from "../assests/Filter.jsx";

function Home(props) {
  return (
    <div>
      <Carousel />

      <div className="categories">
        <h4 style={{ textAlign: "center", fontSize: "32px" }}> Categories</h4>

        <div className="gridbox">
          {data.map((categories) => (
            <Card
              key={categories.id}
              category={categories.category}
              link={categories.link}
              img={categories.img}
            />
          ))}
        </div>
       
        <Banner />
      </div>

      <div className="sectionfour">
        <h3 style={{textAlign:"center", margin:"30px"}}> Find us at </h3>
        <div className="gridd my-5">
          <div className="itemm1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.2310313845596!2d151.205975274892!3d-33.88370331982951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae22272ba651%3A0xb798e8b256d14f74!2s302%20Elizabeth%20St%2C%20Surry%20Hills%20NSW%202010!5e0!3m2!1sen!2sau!4v1678529727561!5m2!1sen!2sau"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="item2 my-3">
              <p>
                <strong style={{ fontSize: "18px" }} className="tw">
                  302 Elizabeth St, Central
                </strong>
              </p>
              <p style={{ fontSize: "18px" }} className="fr">
                {" "}
                📞 +61 987654321
              </p>
              <p style={{ fontSize: "18px" }} className="fr">
                {" "}
                📩 UrbanFlutter.com.au
              </p>
            </div>
          </div>
          <div className="itemm2">
            <div className="timing"></div>
            <p style={{ fontSize: "18px" }}>
              <strong className="tw">Trading Hours</strong>
            </p>
            <p style={{ fontSize: "18px" }} className="fr">
              {" "}
              Monday :<span id="orange">8:00 AM - 6:00 PM </span>
            </p>
            <p style={{ fontSize: "18px" }} className="fr">
              {" "}
              Tuesday :<span id="orange">8:00 AM - 6:00 PM </span>
            </p>
            <p style={{ fontSize: "18px" }} className="fr">
              {" "}
              Wednesday :<span id="orange">8:00 AM - 6:00 PM </span>{" "}
            </p>
            <p style={{ fontSize: "18px" }} className="fr">
              {" "}
              Thursday :<span id="orange">8:00 AM - 6:00 PM </span>{" "}
            </p>
            <p style={{ fontSize: "18px" }} className="fr">
              {" "}
              Friday :<span id="orange">8:00 AM - 6:00 PM </span>
            </p>
            <p style={{ fontSize: "18px" }} className="fr">
              {" "}
              Saturday :<span id="orange">Closed </span>
            </p>
            <p style={{ fontSize: "18px" }} className="fr">
              {" "}
              Sunday :<span id="orange">Closed </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
