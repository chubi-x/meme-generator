import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
function App() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "http://i.imgflip.com/1bij.jpg",
  });

  //create state for header
  // create an array of random bg gradients
  // on every click, choose a random color from the array and set it to the bg of header

  const colors = [
    ["from-[#eeaeca]", "via-[#c1b5da]", "to-[#94bbe9]"],
    ["from-[#22c1c3]", "via-[#87be7e]", "to-[#fdbb2d]"],
    ["from-[#833ab4]", "via-[#fd1d1d]", "to-[#fcb045]"],
  ];
  let [gradient, setGradient] = useState([
    "from-purple1",
    "via-blue",
    "to-purple2",
  ]);
  const changeBg = () => {
    const randomGradientIndex = Math.floor(Math.random() * colors.length);
    setGradient(colors[randomGradientIndex]);
  };

  const getMemes = async () => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const memesResponse = await response.json();
    const memes = memesResponse.data.memes;
    const randomMemeIndex = Math.floor(Math.random() * memes.length);
    const memeUrl = memes[randomMemeIndex].url;
    return setMeme((prevMeme) => ({
      ...prevMeme,
      image: memeUrl,
    }));
  };

  return (
    <div className="App">
      <Header gradient={gradient} />
      <Form
        handleClick={() => {
          getMemes();
          changeBg();
        }}
        meme={meme}
        gradient={gradient}
      />
    </div>
  );
}

export default App;

