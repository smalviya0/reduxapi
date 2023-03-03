// import './App.css';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { increment} from './redux/demoSlice';
// import CardComponent from './CardComponent';
// function App() {
//   // const dispatch = useDispatch();
//   // const demo = useSelector(state=>state.demo.value)
//   // console.log(demo,"checkdemo")
//   // const handleIncrement=()=>{
//   //     dispatch(increment());
//   // }
//   return (
//     <div className="App">
//      <CardComponent/>
//     </div>
//   );
// }

// export default App;


import {  Routes, Route } from "react-router-dom";
// import demoS from './redux/demoSlice';
import PostDetails from "./Components/PostDetails";
import CardComponent from "./Components/CardComponent";

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={ <CardComponent/>} />
          <Route path="/post/:id" element={<PostDetails/>}/>
        </Routes>
      
    </div>
  );
}
export default App;
