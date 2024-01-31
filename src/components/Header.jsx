// react native imports
import { View, Text } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 8,
      }}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "Helvetica Neue",
          fontSize: 24,
          letterSpacing: 1,
          alignSelf: "center",
          textTransform: "uppercase",
        }}
      >
        Movie App
      </Text>
    </View>
  );
};

export default Header;
