export default function Button(props) {
  const leftColor = props.colors.leftColor;
  const middleColor = props.colors.middleColor;
  const rightColor = props.colors.rightColor;

  const bgGradient = `
        ${`from-[${leftColor}]`}

        ${`via-[${middleColor}]`}

        ${`to-[${rightColor}]`}
        `;
  return (
    <button
      onClick={props.handleClick}
      style={{ "--gradient": `${props.gradient}` }}
      className={`w-full rounded p-5 bg-gradient-[40deg] 
              ${bgGradient}
               text-white text-lg`}
    >
      Generate meme
    </button>
  );
}
