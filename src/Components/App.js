// import { Switch, Route} from 'react-router-dom';
// import { Navbar, PostDetail, Home, CreatePost} from './';

// function App(){
//   return (
//     <div className="container">
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/post/:postId" component={PostDetail} />
//           <Route exact path="/create-post" component={CreatePost} />
//         </Switch>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
// import { Navbar, PostDetail, Home, CreatePost } from './';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetail/>} />
        <Route path="/create-post" element={<CreatePost/>} />
      </Routes>
    </div>
  );
}

export default App;
