// react imports
import { useState, useEffect } from "react";

// react native imports
import { View, SafeAreaView, FlatList } from "react-native";

// fetching movies
import {
  fetchAiringTodayTvShows,
  fetchOnTheAirTvShows,
  fetchPopularTvShows,
  fetchTopRatedTvShows,
} from "../utils/helpers";

// loader
import Loader from "../src/components/Loader"

// data for the select list
import { dataTv } from "../utils/constants";
import Select from "../src/components/Select"
import Preview from "../src/components/Preview";

const TVShowsScreen = () => {
  const [selected, setSelected] = useState("");
  const [tvshows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch movies by type
  const fetchTvShowsByType = async (selectedType) => {
    setLoading(true);
    let data = [];

    switch (selectedType) {
      case "popular":
        data = await fetchPopularTvShows();
        break;
      case "top_rated":
        data = await fetchTopRatedTvShows();
        break;
      case "on_the_air":
        data = await fetchOnTheAirTvShows();
        break;
      case "airing_today":
        data = await fetchAiringTodayTvShows();
        break;
      default:
        break;
    }

    setTvShows(data?.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchTvShowsByType(selected);
  }, [selected]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
        <Select
          defaultOption={{ key: "popular", value: "Popular" }}
          placeholder={"Select a Category"}
          data={dataTv}
          setSelected={setSelected}
        />
        {loading ? (
          <Loader />
        ) : (
          <FlatList
            style={{ marginTop: 20 }}
            data={tvshows}
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) => <Preview type={"tv"} item={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default TVShowsScreen;
