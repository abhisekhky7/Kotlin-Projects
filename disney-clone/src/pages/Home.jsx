import {React,useEffect} from "react";
import ImgSlider from "../components/ImgSlider";
import NewDisney from "../components/NewDisney";
import Originals from "../components/Originals";
import Trending from "../components/Trending";
import Recommends from "../components/Recommends";
import Viewer from "../components/Viewer";
import "./Home.css";
import {db} from '../firebase'
import { useSelector,useDispatch } from "react-redux";
import {selectUsername} from '../Slicer/UserSlice'
import { setMovies } from "../Slicer/MovieSlice";

const Home = () => {
const username = useSelector(selectUsername)
const dispatch = useDispatch();
let recommends = [];
let newDisneys = [];
let originals = [];
let trending = [];

useEffect(() => {
  db.collection("movies").onSnapshot((snapshot) => {
    snapshot.docs.map((doc) => {
      switch (doc.data().type) {
        case "recommend":
          recommends = [...recommends,{ id: doc.id, ...doc.data() }];
          break;

        case "new":
          newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
          break;

        case "original":
          originals = [...originals, { id: doc.id, ...doc.data() }];
          break;

        case "trending":
          trending = [...trending, { id: doc.id, ...doc.data() }];
          break;
      }
    });

    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      })
    );
  });
}, [username]);

  return (
    <div className="home">
      <div className="homeImg">
        <img src="/images/home-background.png" alt="" />
      </div>
      <ImgSlider />
       <Viewer/>
       <Recommends/>
       <NewDisney/>
       <Originals/>
       <Trending/> 
    </div>
  );
};

export default Home;
