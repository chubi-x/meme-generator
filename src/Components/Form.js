import { Fragment } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
export default function Form(props) {
  // create regex patterns to remove styling around colors
  const regexPatterns = [/from-\[|from-/, /via-\[|via-/, /to-\[|to-/, /]/];
  // create new array from props
  let colorsArray = props.gradient.map((color) => {
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
  // save gradients colors to variables
  const leftColor = colorsArray[0];
  console.log(leftColor);
  const middleColor = colorsArray[1];
  console.log(middleColor);

  const rightColor = colorsArray[2];
  console.log(rightColor);

  const gradient = `linear-gradient(10deg, ${rightColor} 20%, ${leftColor} 50%, ${middleColor} 80%`;
  return (
    <Fragment>
      <div className="container flex flex-col mx-auto md:px-32">
        <div className="flex md:flex-row flex-col pt-10 p-10 pb-0">
          <FormInput placeholder="enter top text" />
          <FormInput placeholder="enter bottom text" />
        </div>
        <div className="mx-auto w-full md:px-20 px-16 btn">
          <Button
            gradient={gradient}
            handleClick={props.handleClick}
            colors={{ leftColor, middleColor, rightColor }}
          />
        </div>
        <div className="mx-auto p-16 md:px-20 pt-5">
          <img src={props.meme.image} alt="" className="max-w-full max-h-72" />
        </div>
      </div>
    </Fragment>
  );
}
