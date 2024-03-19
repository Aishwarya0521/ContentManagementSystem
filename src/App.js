import { Route,Routes } from "react-router-dom";

import Navbar from './component/Navbar';
import Admin from './component/Admin';
import User from './component/User';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';
import { Auth } from "./component/Auth";
import Header from "./component/Header";

import Article from "./component/Article";
import Articledesign from "./component/Articledesign";

import Blog from "./component/Blog";
import Blogdesign from "./component/Blogdesign";

import Post from "./component/Post";
import Postdesign from "./component/Postdesign";

import Page from "./component/Page";
import Pagedesign from "./component/Pagedesign";
import Protect from "./component/Protect";
import Logout from "./component/Logout";

function App() {
  return (
    <div className="App">
      <Auth>
        <Header/>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/addarticledesign" element={<Article/>}/>
      <Route path="/articledesign" element={<Articledesign/>}/>
      <Route path="/addblogdesign" element={<Blog/>}/>
      <Route path="/blogdesign" element={<Blogdesign/>}/>
      <Route path="/addpostdesign" element={<Post/>}/>
      <Route path="/postdesign" element={<Postdesign/>}/>
      <Route path="/addpagedesign" element={<Page/>}/>
      <Route path="/pagedesign" element={<Pagedesign/>}/>
      <Route path="/admin" element={<Protect><Admin/></Protect>}/>
      <Route path="/user" element={<Protect><User/></Protect>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/logout" element={<Logout/>}/>
      </Routes>
      </Auth>
    </div>
  );
}

export default App;
