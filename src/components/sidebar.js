import React from "react";
import SidebarRow from "./sidebarrow";
import WhatShotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OnDemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";
function SideBar() {
  return (
    <div className="sidebar side responsive__side ">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatShotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OnDemandVideoIcon} title="Your videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
      <hr />
      <h3>Subscription</h3>
      <div className="subs">
        <img src="https://yt3.ggpht.com/ytc/AKedOLR6vCt7w4mOtpfn7dGVmobtUEuwBJdvlvBXGTr_iw=s88-c-k-c0x00ffffff-no-rj" />
        <p>Learn English with...</p>
      </div>
      <div className="subs">
        <img src="https://yt3.ggpht.com/ytc/AKedOLQNzoRWRDb8qjvzG8PwBiQfpJ-s5UbPIdSDxPX3=s88-c-k-c0x00ffffff-no-rj" />
        <p>Kadirov Dev</p>
      </div>
      <div className="subs">
        <img src="https://yt3.ggpht.com/ytc/AKedOLQGJzANzs2ymcXNw3LKBSpQj9EpJojb5a6JY6oPlQ=s88-c-k-c0x00ffffff-no-rj" />
        <p>Online Tutorials</p>
      </div>
      <div className="subs">
        <img src="https://yt3.ggpht.com/ytc/AKedOLQsQBOEYJH18b9JCwChN4KfOcQLPxitNatuPAlhGw=s88-c-k-c0x00ffffff-no-rj" />
        <p>Ivan Carmichael</p>
      </div>
      <div className="subs">
        <img src="https://yt3.ggpht.com/ytc/AKedOLR_TSw9vZm_MZJWL6i0GS8ToM4BFbfS-gh3epM5=s88-c-k-c0x00ffffff-no-rj" />
        <p>Mel's Thoughts</p>
      </div>
      <div className="subs">
        <img src="https://yt3.ggpht.com/ytc/AKedOLSeCnW2H8kPNLiFT2hSGvkdHzh2Hcxj-S8qVlHz=s88-c-k-c0x00ffffff-no-rj" />
        <p>Dare to Motivation</p>
      </div>
      <div className="subs">
        <img src="https://yt3.ggpht.com/ytc/AKedOLQaKVXROw4gmflww4LPNHPPdklQWlOfxIGbEo5B=s88-c-k-c0x00ffffff-no-rj" />
        <p>Saidbek Arislonov</p>
      </div>
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
      <hr />
      <h3>More From Youtube</h3>
      <SidebarRow Icon={SportsEsportsIcon} title="Gaming" />
      <SidebarRow Icon={LiveTvIcon} title="Live" />
      <SidebarRow Icon={LoyaltyIcon} title="Fashion & Beauty" />
      <SidebarRow Icon={EmojiObjectsIcon} title="Learning" />
      <div className="sidebarRow">
        <i className="fas fa-trophy sidebar__icon"></i>
        <h2 className="sidebar__title">Sports</h2>
      </div>
      <hr />
      <SidebarRow Icon={SettingsIcon} title="Settings" />
      <SidebarRow Icon={FlagIcon} title="Report history" />
      <SidebarRow Icon={HelpIcon} title="Help" />
      <SidebarRow Icon={FeedbackIcon} title="Send feedback" />
      <hr />
      <div className="footer">
        <div className="footer__link">
          <a href="">About</a>
          <a href="">Press</a>
          <a href="">Copyright</a>
        </div>
        <div className="footer__link">
          <a href="">Contact us</a>
          <a href="">Crators</a>
        </div>
        <div className="footer__link">
          <a href="">Advertise</a>
          <a href="">Developers</a>
        </div>
        <br />
        <br />
        <div className="footer__link">
          <a href="">Terms </a>
          <a href="">Privacy</a>
          <a href="">Policy & Safety</a>
        </div>
        <div className="footer__link">
          <a href="">How YouTube works</a>
          <br />
          <a href="">Test new features</a>
          <p>2021 Google LLC</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
