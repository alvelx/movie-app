// react imports
import { useState, useEffect } from "react";

// react native imports
import { SafeAreaView, FlatList, View } from "react-native";

// fetching movies
import {
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchUpcomingMovies,
} from "../utils/helpers";

// data for the select list
import { data } from "../utils/constants";
// components
import Select from "../src/components/Select"
import Preview from "../src/components/Preview";
import Loader from "../src/components/Loader";

const MoviesScreen = () => {
  const [selected, setSelected] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch movies by type
  const fetchMoviesByType = async (selectedType) => {
    setLoading(true);
    let data = [];

    switch (selectedType) {
      case "popular":
        data = await fetchPopularMovies();
        break;
      case "top_rated":
        data = await fetchTopRatedMovies();
        break;
      case "now_playing":
        data = await fetchNowPlayingMovies();
        break;
      case "upcoming":
        data = await fetchUpcomingMovies();
        break;
      default:
        break;
    }

    setMovies(data?.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchMoviesByType(selected);
  }, [selected]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
        <Select
          defaultOption={{ key: "popular", value: "Popular" }}
          placeholder={"Select a Category"}
          data={data}
          setSelected={setSelected}
        />
        {loading ? (
          <Loader />
        ) : (
          <FlatList
            style={{ marginTop: 20 }}
            data={movies}
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) => (
              <Preview type={"movie"} item={item} />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default MoviesScreen;
