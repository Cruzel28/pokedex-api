import React,{useState,useEffect} from "react";
import ContentFetch from "./ContentFetch";

export default function Content() {
  const [repoData, setRepoData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const handleFetchClick = async () => {
    setLoading(true);
    try {
      const pokedexResponse = await ContentFetch();
      setRepoData(pokedexResponse);
    } catch {
      setError("There are something wrong, please try again later.");
    }
    setLoading(false);
  };

  useEffect(() => {
    handleFetchClick()
      },[]);
      

  return(
     <div className="content-container">
        {!isLoading && repoData && (
        <div className="content">
          {repoData.results.map( (item) => (
          <div>
            {item.name}
          </div>
        ))}
        </div>
      )}
     </div>
  )
}
