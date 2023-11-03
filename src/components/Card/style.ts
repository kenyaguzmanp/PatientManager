import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cover: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  titleContainer: {
    flex: 1,
    padding: 20,
  },
  centered: {
    textAlign: 'center',
  },
  description: {
    paddingBottom: 20,
  },
});

export default styles;
