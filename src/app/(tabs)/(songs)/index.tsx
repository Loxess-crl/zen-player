import { TrackList } from "@/components/TracksList";
import { defaultStyles } from "@/styles";
import { View, Text, ScrollView } from "react-native";

const SongsScreen = () => {
  return (
    <View style={defaultStyles.container}>
      <ScrollView>
        <TrackList scrollEnabled={false} />
      </ScrollView>
    </View>
  );
};

export default SongsScreen;
