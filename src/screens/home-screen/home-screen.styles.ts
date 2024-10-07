import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
