import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/responsive.css";
import Header from "./components/header";
import HeaderSearch from "./components/headerSearch";
import SideBar from "./components/sidebar";
import RecommendedVideos from "./components/recommendedVideos";
import WatchVideo from "./components/WatchVideo";
import SearchYoutube from "./components/SearchYoutube";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// material UI install npm i @material-ui/core
// material UI icon npm i @material-ui/icons
// react-router npm install react-router-dom
function App() {
  const [headerChange, setHeaderChange] = useState(false);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search:searchterm">
            <div className="app__page">
              <HeaderSearch
                headerChange={headerChange}
                setHeaderChange={setHeaderChange}
              />
              <SideBar />
              <SearchYoutube setHeaderChange={setHeaderChange} />
            </div>
          </Route>
          <Route path="/watch:watchvideo">
            <Header
              headerChange={headerChange}
              setHeaderChange={setHeaderChange}
            />
            <WatchVideo
              setHeaderChange={setHeaderChange}
              headerChange={headerChange}
            />
          </Route>
          <Route path="/">
            <Header
              setHeaderChange={setHeaderChange}
              headerChange={headerChange}
            />
            <div className="app__page">
              <SideBar />
              <RecommendedVideos setHeaderChange={setHeaderChange} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
