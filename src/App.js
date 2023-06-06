// import logo from './logo.svg';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import CuratedForYou from './Components/CuratedForYou/CuratedForYou';
import Divs from './Components/Divs';
import Category from './Components/Explore By Categories/Category';
import ExploreNewCategories from './Components/Explore New Categories/ExploreNewCategories';
import LateNightSweetness from './Components/LateNightSweetness/LateNightSweetness';
import NavBar from './Components/NavBar';
import Div2 from './Components/Div2';
// import Modules from './Components/BacktoSchool/Modules';
import BackToSchool from './Components/BacktoSchool/BackToSchool';
import SummerSplash from './Components/Summer Splash/SummerSplash';
import PaanCorner from './PaanCorner';
import SummerSplashLists from './Components/Summer Splash/SummerSplashLists';
import SoftDrinks from './Components/Summer Splash/SoftDrinks/SoftDrinks';
import SummerFruits from './Components/Summer Splash/SummerFruits/SummerFruits';
import JuicesMilkshakesMore from './Components/Summer Splash/Juices-Milkshakes-More/JuicesMilkshakesMore';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <NavBar></NavBar>
   <PaanCorner></PaanCorner>
   <BackToSchool></BackToSchool>
   <SummerSplash></SummerSplash>
   <Category></Category>
   <ExploreNewCategories></ExploreNewCategories>
   <Divs></Divs>
   <LateNightSweetness></LateNightSweetness>
   <Div2></Div2>
   <CuratedForYou></CuratedForYou>
   <SummerSplashLists></SummerSplashLists>
   <Routes>
    <Route path='/SoftDrinks' element={<SoftDrinks></SoftDrinks>}></Route>
    <Route path='/SummerFruits' element={<SummerFruits></SummerFruits>}></Route>
    <Route path='/juices-milkshakes-more' element={<JuicesMilkshakesMore></JuicesMilkshakesMore>}>
    </Route>
   </Routes>
   </BrowserRouter>
   
    </div>
  );
}
export default App;
