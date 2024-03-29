import { useCatImage } from "../hooks/useCatImage";


export function Otro(fact) {
  const { imageUrl } = useCatImage({ fact: "Random fact" });

  return <>{imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`}/>}</>;
}
