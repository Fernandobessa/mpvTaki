import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, Input } from "react-native-elements";
import { Creators as TodoActions } from "../../store/Ducks/movie";
import Spinner from "react-native-loading-spinner-overlay";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./Style";

export default function Movies() {
  //useEffect(() => dispach(TodoActions.getAssyncMoovie()), [moovies]);
  useEffect(() => {
    console.log(progress);
    async function getAssyncFunction() {
      dispach(TodoActions.setProgressData(true));
      dispach(TodoActions.getAssyncMoovie("a"));
    }
    getAssyncFunction();
  }, [moovies]);
  const navigation = useNavigation();
  const moovies = useSelector((state) => state.movie.listMoovie);
  const progress = useSelector((state) => state.movie.progress);
  const dispach = useDispatch();
  const [stringSearch, setValueStringSearch] = useState();

  function onChangeText(text) {
    setValueStringSearch(text);
  }
  async function searchMovie() {
    dispach(TodoActions.setProgressData(true));
    dispach(TodoActions.getAssyncMoovie(stringSearch));
  }
  async function getMoreDetails(idMoovie) {
    dispach(TodoActions.setProgressData(true));
    navigation.navigate("MoreDetails", { idMoovie: idMoovie });
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {console.log(progress)}
          <Spinner
            visible={progress.progress}
            textContent={"Loading..."}
            textStyle={styles.spinnerTextStyle}
            color={"white"}
            overlayColor={"rgb(0, 0, 102)"}
          />
          <View style={styles.rowContainer}>
            <Input
              containerStyle={styles.InputContainer}
              onChangeText={(text) => onChangeText(text)}
              value={stringSearch}
              placeholder="INPUT NAME OF YOUR MOVIE. "
              leftIcon={{ type: "font-awesome", name: "play-circle-o" }}
            />
            <Button
              buttonStyle={styles.button}
              onPress={() => searchMovie()}
              icon={<Icon name="search" size={20} color="white" />}
              title=""
            />
          </View>
          {moovies.response
            ? moovies.response.data.results.map((moovie) => (
                <TouchableOpacity onPress={() => getMoreDetails(moovie.id)}>
                  <View style={styles.rowContainer}>
                    <View style={styles.viewMovie}>
                      <Image
                        style={styles.poster}
                        source={{
                          uri: moovie.poster_path
                            ? "https://image.tmdb.org/t/p/w500" +
                              moovie.poster_path
                            : "https://kbimages.dreamhosters.com/images/Site_Not_Found_Dreambot.fw.png",
                        }}
                      />
                    </View>
                    <View style={styles.containerText}>
                      <Text>
                        <Text style={styles.textTitle}>Title:</Text>{" "}
                        {moovie.title}
                      </Text>
                      <Text numberOfLines={3}>
                        <Text style={styles.textTitle}>Description:</Text>{" "}
                        {moovie.overview}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
