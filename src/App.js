import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Particles from "particlesjs";
function App() {
  window.onload = function () {
    Particles.init({
      selector: ".background",
      color: colorsArray,
      connectParticles: true,
    });
  };
  // tailwind gradient colors
  const colors = [
    ["from-[#00416a]", "via-[#799f0c]", "to-[#ffe000]"],
    ["from-[#22c1c3]", "via-[#87be7e]", "to-[#fdbb2d]"],
    ["from-[#833ab4]", "via-[#fd1d1d]", "to-[#fcb045]"],
    ["from-[#feac5e]", "via-[#c779d0]", "to-[#4bc0c8]"],
    ["from-[#5433ff]", "via-[#20bdff]", "to-[#a5fecb]"],
  ];

  // STATE
  const [allMemes, setAllMemes] = useState([]);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "https://i.imgflip.com/1bij.jpg",
  });

  const [gradient, setGradient] = useState([
    "from-[#6422ad]",
    "via-[#094479]",
    "to-[#7700ff]",
  ]);
  const [colorIndex, setColorIndex] = useState(0);

  // EFFECTS
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getAllMemes = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes", {
        signal: signal,
      });
      const dataResponse = await response.json();
      setAllMemes(dataResponse.data.memes);
    };

    getAllMemes();
  }, []);

  // METHODS
  const changeBg = () => {
    if (colorIndex < colors.length) {
      setGradient(colors[colorIndex]);
      if (colorIndex < colors.length - 1) setColorIndex(colorIndex + 1);
      else setColorIndex(0);
    }
  };
  const changeMeme = () => {
    const randomMemeIndex = Math.floor(Math.random() * allMemes.length);
    const memeUrl = allMemes[randomMemeIndex].url;

    return setMeme((prevMeme) => ({
      ...prevMeme,
      image: memeUrl,
    }));
  };

  const setMemeText = (event) => {
    const target = event.target;
    const { name, value } = target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  // create regex patterns to remove styling around colors
  const regexPatterns = [/from-\[|from-/, /via-\[|via-/, /to-\[|to-/, /]/];
  // create new array from props
  let colorsArray = gradient.map((color) => {
    // for each regex pattern
    regexPatterns.forEach((pattern) => {
      // check if it exist in the color
      if (pattern.test(color)) {
        // replace it with an empty string
        color = color.replace(pattern, "");
      }
    });
    return color;
  });

  return (
    <div className="App">
      <Header gradient={gradient} />
      <Form
        handleClick={() => {
          changeMeme();
          changeBg();
        }}
        meme={meme}
        colorsArray={colorsArray}
        setMemeText={setMemeText}
      />
    </div>
  );
}

export default App;

