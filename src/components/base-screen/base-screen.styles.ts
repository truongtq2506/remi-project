import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  containerStyle: ViewStyle;
  keyboardAvoidingViewStyle: ViewStyle;
  innerStyle: ViewStyle;
  outerStyle: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  containerStyle: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  keyboardAvoidingViewStyle: {
    flex: 1,
  },
  outerStyle: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  innerStyle: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

export default styles;
