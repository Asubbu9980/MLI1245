import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/HomeLayout/HomeLayout';
import FrontPage from './components/FrontPage/FrontPage';
import AddVideo from './components/AddVideo/AddVideo';
import VideoPlay from './components/VideoPlay/VideoPlay';




function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<FrontPage />}/>
            <Route path=':id' element={<VideoPlay />}/>
            <Route path='add' element={<AddVideo/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
