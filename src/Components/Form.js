import { Fragment } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
export default function Form(props) {
  // save gradients colors to variables
  const colorsArray = props.colorsArray;
  const leftColor = colorsArray[0];
  const middleColor = colorsArray[1];
  const rightColor = colorsArray[2];

  // save meme to variable
  const meme = props.meme;

  return (
    <Fragment>
      <div className="container flex flex-col mx-auto md:px-32">
        <div className="flex md:flex-row flex-col pt-10 p-10 pb-0">
          <FormInput
            placeholder="enter top text"
            name="topText"
            value={meme.topText}
            setMemeText={props.setMemeText}
          />
          <FormInput
            placeholder="enter bottom text"
            name="bottomText"
            value={meme.bottomText}
            setMemeText={props.setMemeText}
          />
        </div>
        <div className="mx-auto w-full md:px-20 px-16 btn">
          <Button
            handleClick={props.handleClick}
            colors={{ leftColor, middleColor, rightColor }}
          />
        </div>
        <div className="mx-auto p-16 md:px-20 pt-5 relative">
          <h1 className="meme-text meme-text-top md:text-2xl">
            {meme.topText}
          </h1>
          <h1 className="meme-text meme-text-bottom md:text-2xl">
            {meme.bottomText}
          </h1>
          <img src={meme.image} alt="meme" className="max-w-full max-h-72" />
        </div>
      </div>
    </Fragment>
  );
}
