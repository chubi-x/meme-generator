export default function Button(props) {
  const leftColor = props.colors.leftColor;
  const middleColor = props.colors.middleColor;
  const rightColor = props.colors.rightColor;

  const bgGradient = `
        ${`from-[${leftColor}]`}

        ${`via-[${middleColor}]`}

        ${`to-[${rightColor}]`}
        `;

  const hoverGradient = `linear-gradient(20deg, ${rightColor} 20%, ${leftColor} 50%, ${middleColor} 80%`;

  return (
    <button
      onClick={props.handleClick}
      style={{ "--gradient": `${hoverGradient}` }}
      className={`w-full rounded p-5 bg-gradient-[40deg] 
              ${bgGradient}
               text-white text-lg`}
    >
      Generate meme
    </button>
  );
}
