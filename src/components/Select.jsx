// react native dropdown select list
import { View } from "react-native";

// react native dropdown select list
import { SelectList } from "react-native-dropdown-select-list";

// color constants
import { themeColors } from "../../utils/colors"

// icons
import { FontAwesome5 } from "@expo/vector-icons";

const Select = ({ defaultOption, placeholder, data, setSelected }) => {
  return (
    <View>
      <SelectList
        search={false}
        defaultOption={defaultOption}
        placeholder={placeholder}
        data={data}
        setSelected={setSelected}
        boxStyles={{
          borderColor: themeColors.primary,
          borderWidth: 2,
          backgroundColor: "white",
        }}
        dropdownTextStyles={{
          fontSize: 14,
          fontWeight: "bold",
          color: themeColors.primary,
          paddingVertical: 8,
        }}
        arrowicon={
          <FontAwesome5
            name="chevron-down"
            size={16}
            color={themeColors.primary}
          />
        }
      />
    </View>
  );
};

export default Select;
