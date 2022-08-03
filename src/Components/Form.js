import { Fragment } from "react";
import FormInput from "./FormInput";
import meme from "../images/mem.jpg";
export default function Form() {
  return (
    <Fragment>
      <div className="container flex flex-col mx-auto md:px-32">
        <div className="flex md:flex-row flex-col pt-20 p-10">
          <FormInput placeholder="enter top text" />
          <FormInput placeholder="enter bottom text" />
        </div>
        <div className="mx-auto w-full md:px-20 px-16">
          <button className="w-full rounded p-5 bg-gradient-[40deg] from-purple1 via-blue to-purple2 text-white text-lg">
            Generate meme
          </button>
        </div>
        <div className="mx-auto p-16 md:px-20">
          <img src={meme} alt="" className="max-w-auto max-h-auto" />
        </div>
      </div>
    </Fragment>
  );
}
