import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { fetchMoreDetails, image500 } from "../utils/helpers";
import { themeColors } from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const DetailScreen = () => {
  const route = useRoute();
  const [movieDetails, setMovieDetails] = useState({});
  const { id, type } = route.params;
  const navigation = useNavigation();

  const getMovieDetails = async () => {
    const data = await fetchMoreDetails(type, id);
    setMovieDetails(data);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: themeColors.primary }}>
      <SafeAreaView
        style={{
          position: "absolute",
          zIndex: 10,
          width: "100%",
          marginLeft: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            borderRadius: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
          }}
        >
          <Ionicons
            name="chevron-back-outline"
            size={40}
            color={themeColors.primary}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Image
          source={{ uri: image500(movieDetails?.poster_path) }}
          style={{ width: width * 0.8, height: width * 1.2 }}
          resizeMode="contain"
        />
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={styles.title}>
          {movieDetails?.title || movieDetails?.name}
        </Text>
        <View style={styles.subWrapper}>
          <View style={styles.popularity}>
            <Text style={styles.statsText}>Popularity</Text>
            <Text style={styles.statsSubText}>{movieDetails?.popularity}</Text>
          </View>
          <AntDesign name="star" size={24} color={themeColors.secondary} />
          <View style={styles.releaseDate}>
            <Text style={styles.statsText}>Released Date</Text>
            <Text style={styles.statsSubText}>
              {movieDetails?.release_date || movieDetails?.first_air_date}
            </Text>
          </View>
        </View>
        <Text style={styles.overview}>{movieDetails?.overview}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 2,
    color: "white",
    marginBottom: 20,
  },
  overview: {
    fontSize: 20,
    color: "white",
    marginVertical: 20,
    lineHeight: 30,
    textAlign: "justify",
  },
  popularity: {
    display: "flex",
    flexDirection: "column",
  },
  releaseDate: {
    display: "flex",
    flexDirection: "column",
  },
  subWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    alignItems: "center",
  },
  statsText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  statsSubText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
});

export default DetailScreen;