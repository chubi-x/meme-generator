import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
function App() {
  // tailwind gradient colors
  const colors = [
    ["from-[#00416a]", "via-[#799f0c]", "to-[#ffe000]"],
    ["from-[#22c1c3]", "via-[#87be7e]", "to-[#fdbb2d]"],
    ["from-[#833ab4]", "via-[#fd1d1d]", "to-[#fcb045]"],
    ["from-[#feac5e]", "via-[#c779d0]", "to-[#4bc0c8]"],
    ["from-[#5433ff]", "via-[#20bdff]", "to-[#a5fecb]"],
  ];
  // STATE
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "http://i.imgflip.com/1bij.jpg",
  });
  let [gradient, setGradient] = useState([
    "from-[#6422ad]",
    "via-[#094479]",
    "to-[#7700ff]",
  ]);
  let [colorIndex, setColorIndex] = useState(0);

  // METHODS
  const changeBg = () => {
    if (colorIndex < colors.length) {
      setGradient(colors[colorIndex]);
      if (colorIndex < colors.length - 1) setColorIndex(colorIndex + 1);
      else setColorIndex(0);
    }
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

