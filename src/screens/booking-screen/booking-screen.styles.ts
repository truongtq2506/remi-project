import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  container: ViewStyle;
  header: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    paddingVertical: 16,
    alignItems: 'center',
  },
});
export default styles;
