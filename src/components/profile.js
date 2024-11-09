import React, { useState, useEffect } from "react";
import styl from "./css/prof.module.css";
import Forminp from "../components_elem/Forminp";
import styles from "../components/css/labelmenuprof.module.css";
import Label from "../components_elem/Labelprof";
import Formchan from "../components_elem/Formchan";
import Label1 from "../components_elem/Labelprof1";
import Button from "../components_elem/Buttonprof";
import Buttonred from "../components_elem/Buttonred";
import Slider from "../components_elem/Slider";
import phone from "../assets/images/phone-call.png";
import pen from "../assets/images/pencil.png";
import Labelprofmenu from "../components_elem/Label3";
import trash from "../assets/images/trash.png";
import home from "../assets/images/home.png";
import bookmark from "../assets/images/bookmark.png";
import eye from "../assets/images/eye.png";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getUserFromDatabase } from "../UserDataBase";
import useAuthStatus from "../userStatus.js";
import { logoutUser } from "../AuthUser.js";
import { Link } from "react-router-dom";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const data = await getUserFromDatabase(user.uid);
        setUserData(data);
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const isLoggedIn = useAuthStatus();

  const handleLogout = () => {
    logoutUser();
  };

  if (loading) {
    return <p>Wait data is loading...</p>;
  }

  if (!userData) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f8f8f8",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
          }}
        >
          <h2 style={{ color: "#ff4d4d" }}>No User Data Available</h2>
          <p style={{ color: "#666", fontSize: "16px" }}>
            We couldn't find any information for this user.
          </p>
          <p style={{ color: "#666", fontSize: "16px" }}>
            Please make sure you're logged in or try reloading the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styl.base}>
      <div className={styl.flex}>
        <div className={styl.container}>
          <div className={styl.flexcont}>
            <div className={styl.containercomp}>
              <div className={styl.oval}></div>
              <div className={styl.labelcomp}>
                <Label text={userData.name}></Label>
              </div>
            </div>
            <div className={styl.containercomp1}>
              <div className={styl.labelcomp}>
                <Label text="Settings" />
              </div>
              <div className={styl.setpar}>
                <Label1 text="Email"></Label1>
                <Label type="text" text={userData.email}></Label>
                <Button>Change</Button>
              </div>
              <div className={styl.setpar}>
                <Label1 text="Surname"></Label1>
                <Label type="text" text={userData.surname}></Label>
                <Button>Change</Button>
              </div>
            </div>
          </div>
        </div>

        <div className={styl.container}>
          <div className={styl.flexcont}>
            <div className={styl.containercomp2}>
              <div>
                <Slider></Slider>
              </div>
            </div>
            <div className={styl.containercomp3}>
              <div className={styl.rov}>
                <Label text="Contact Center" />
              </div>
              <div className={styl.setpar1}>
                <img src={phone} alt="Phone"></img>
                <Label
                  placeholder="Current Name"
                  type="text"
                  text={"+380956210427"}
                ></Label>
                <img src={pen} alt="Phone"></img>
                <Label
                  placeholder="Current Surname"
                  type="text"
                  text={"contact@gmail.com"}
                ></Label>
              </div>
            </div>
          </div>
        </div>
        <div className={styl.containermenu}>
          <div className={styl.containermenuup}>
            <div className={styl.containermenucolumn}>
              <Link className={styles.label} to="/main_page/busket">
                Busket
              </Link>
              <img src={trash} alt="Busket"></img>
            </div>
            <div className={styl.containermenucolumn}>
              <Link className={styles.label} to="/main_page">
                Main Page
              </Link>
              <img src={home} alt="Main Screen"></img>
            </div>
            <div className={styl.containermenucolumn}>
              <Link className={styles.label} to="/">
                Login
              </Link>
              <img src={bookmark} alt="Wishlist"></img>
            </div>
            <div className={styl.containermenucolumn}>
              <Link className={styles.label} to="/main_page/promo">
                Promoactions
              </Link>
              <img src={eye} alt="Viewed"></img>
            </div>
          </div>
          <div className={styl.containermenudown}>
            <div className={styl.containermenudown1}>
              <div className={styl.img2}></div>
            </div>
            <div className={styl.containermenudown2}>
              <Buttonred functions={handleLogout}>EXIT</Buttonred>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
