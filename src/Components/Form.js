import { Fragment } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
export default function Form(props) {
  const colorsArray = props.colorsArray;
  // save gradients colors to variables
  const leftColor = colorsArray[0];
  const middleColor = colorsArray[1];
  const rightColor = colorsArray[2];
  return (
    <Fragment>
      <div className="container flex flex-col mx-auto md:px-32">
        <div className="flex md:flex-row flex-col pt-10 p-10 pb-0">
          <FormInput placeholder="enter top text" />
          <FormInput placeholder="enter bottom text" />
        </div>
        <div className="mx-auto w-full md:px-20 px-16 btn">
          <Button
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
