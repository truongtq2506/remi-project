import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  thumbnail: {
    borderRadius: 8,
    width: 200,
    height: 300,
  },
  wrapButtonContent: {
    flexDirection: 'row',
    marginTop: 8,
  },
  buttonFavourite: {
    marginRight: 8,
  },
  buttonBook: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default styles;
