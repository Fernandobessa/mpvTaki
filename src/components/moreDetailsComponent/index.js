import { Text, View, SafeAreaView, ScrollView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Input } from "react-native-elements";
import { Creators as TodoActions } from "../../store/Ducks/movie";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./Style";

export default function MoreDetails() {
  useEffect(() => {
    console.log(route.params.idMoovie);
    console.log(details);
    async function getAssyncFunction() {
      dispach(TodoActions.setProgressData(true));
      dispach(TodoActions.getAssyncDetails(route.params.idMoovie));
    }
    getAssyncFunction();
  }, [details]);
  const dispach = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const details = useSelector((state) => state.movie.datails);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.poster}
            source={{
              uri: details.response
                ? details.response.data.poster_path
                  ? "https://image.tmdb.org/t/p/w500" +
                    details.response.data.poster_path
                  : "https://kbimages.dreamhosters.com/images/Site_Not_Found_Dreambot.fw.png"
                : null,
            }}
          />
          <View style={styles.containerText}>
            <Text>
              <Text style={styles.textTitle}>Title:</Text>{" "}
              {details.response ? details.response.data.original_title : null}
            </Text>
            <Text>
              <Text style={styles.textTitle}>Release date:</Text>{" "}
              {details.response ? details.response.data.release_date : null}
            </Text>
            <Text>
              <Text style={styles.textTitle}>Popularity:</Text>{" "}
              {details.response ? details.response.data.popularity : null}
            </Text>
            <Text>
              <Text style={styles.textTitle}>Runtime:</Text>{" "}
              {details.response ? details.response.data.runtime : null}
            </Text>
            <Text>
              <Text style={styles.textTitle}>Vote average:</Text>{" "}
              {details.response ? details.response.data.vote_average : null}
            </Text>
            <Text>
              <Text style={styles.textTitle}>Vote count:</Text>{" "}
              {details.response ? details.response.data.vote_count : null}
            </Text>
          </View>
        </View>
        <View style={styles.containerText2}>
          <Text>
            <Text style={styles.textTitle}>Description:</Text>{" "}
            {details.response ? details.response.data.overview : null}
          </Text>
        </View>
        <View style={styles.containerText2}>
          <Text>
            <Text style={styles.textTitle}>Homepage:</Text>{" "}
            {details.response ? details.response.data.homepage : null}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
