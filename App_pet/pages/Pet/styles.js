import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFC125'
  },
  scroll: {
    width: '100%'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: '#444',
    borderBottomColor: '#999',
    borderBottomWidth: 1
  },
  itemtext: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    fontSize: 18
  },
  itemname: {
    alignSelf: 'center',
    color: '#444',
    fontSize: 16
  },
  itemcheck: {
    alignSelf: 'center',
    marginLeft: 20
  },
  remove: {
    alignSelf: 'center',
    marginRight: 10
  },
  add: {
    position: 'absolute',
    marginBottom: 90,
    marginRight: 30,
    right: 0,
    bottom: 0,
    backgroundColor: 'tomato'
  },
  exit: {
    position: 'absolute',
    marginBottom: 30,
    marginRight: 30,
    right: 0,
    bottom: 0,
    backgroundColor: 'tomato'
  },
  msg: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  msgtext: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 40
  },
  registercontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC125'
  },
  box: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 5
  },
  title: {
    color: '#444',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center'
  },
  label: {
    color: '#333',
    marginBottom: 5,
    width: '100%',
    fontSize: 12
  },
  input: {
    color: '#444',
    width: 250,
    borderWidth: 1,
    padding: 5,
    borderColor: '#555',
    borderRadius: 2,
    fontSize: 16
  },
  boxButton: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    width: 100,
    paddingVertical: 5,
    borderColor: '#111',
    backgroundColor: '#444',
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 5
  },
  buttonLabel: {
    color: '#FFC125',
    fontSize: 15,
    textAlign: 'center'
  }
});
