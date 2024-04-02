import React, { useEffect } from "react";
import Title from "../components/Title";
import Teams from "../components/Teams";
import { CategoryType, FetchedData } from "../types";
import Gameboard from "../components/Gameboard";

const Home: React.FC = () => {
  const [data, setData] = React.useState<CategoryType[] | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:4000");
        const data: FetchedData = await response.json();
        setData(data.categories);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "An error occurred";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error !== null) return <div>{error}</div>;

  return (
    <div>
      {/* <Title /> */}
      <Gameboard categories={data!} />
      <Teams />
    </div>
  );
};

export default Home;
