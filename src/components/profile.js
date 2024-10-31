import React from "react";
import styl from "./css/prof.module.css";
import Forminp from "../components_elem/Forminp";
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

function Profile() {
  return (
    <div className={styl.base}>
      <div className={styl.flex}>
        <div className={styl.container}>
          <div className={styl.flexcont}>
            <div className={styl.containercomp}>
              <div className={styl.oval}></div>
              <div className={styl.labelcomp}>
                <Forminp placeholder="Account Name" type="text"></Forminp>
              </div>
            </div>
            <div className={styl.containercomp1}>
              <div className={styl.labelcomp}>
                <Label text="Settings" />
              </div>
              <div className={styl.setpar}>
                <Label1 text="Email"></Label1>
                <Formchan placeholder="Change Email" type="text"></Formchan>
                <Button>Change</Button>
              </div>
              <div className={styl.setpar}>
                <Label1 text="Password"></Label1>
                <Formchan placeholder="Change Password" type="text"></Formchan>
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
                <Label text="Personal Data" />
              </div>
              <div className={styl.setpar1}>
                <img src={phone} alt="Phone"></img>
                <Formchan
                  placeholder="Current Pnone Number"
                  type="text"
                ></Formchan>
                <img src={pen} alt="Phone"></img>
                <Formchan
                  placeholder="Current Name & Surname"
                  type="text"
                ></Formchan>
              </div>
            </div>
          </div>
        </div>
        <div className={styl.containermenu}>
          <div className={styl.containermenuup}>
            <div className={styl.containermenucolumn}>
              <Labelprofmenu text="Busket"></Labelprofmenu>
              <img src={trash} alt="Busket"></img>
            </div>
            <div className={styl.containermenucolumn}>
              <Labelprofmenu text="Main Screen"></Labelprofmenu>
              <img src={home} alt="Main Screen"></img>
            </div>
            <div className={styl.containermenucolumn}>
              <Labelprofmenu text="Wishlist"></Labelprofmenu>
              <img src={bookmark} alt="Wishlist"></img>
            </div>
            <div className={styl.containermenucolumn}>
              <Labelprofmenu text="Viewed"></Labelprofmenu>
              <img src={eye} alt="Viewed"></img>
            </div>
          </div>
          <div className={styl.containermenudown}>
            <div className={styl.containermenudown1}>
              <div className={styl.img2}></div>
            </div>
            <div className={styl.containermenudown2}>
              <Buttonred>EXIT</Buttonred>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
