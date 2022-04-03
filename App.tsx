import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
	  <Text style={styles.welcome}>Please enter your Session ID</Text>
    </View>
  );
}




// Styles
const colors = {
	"accent": "#ED2027",
	"background": "#36393f",
	"backgroundDark": "#2f3136",
	"backgroundDarker": "#202225",
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
	color: "white",

  }
});
