import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 60,
    lineHeight: 72,
    marginBottom: 6
  },
  paragraph: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 10
  },
  paragraphCenter: {
    textAlign: 'center'
  },
  paragraphUrgent: {
    color: '$red',
    fontFamily: 'bold'
  },
  subTitle: {
    color: '#fff',
    fontFamily: 'bold',
    fontSize: '.8rem',
    marginBottom: '.5rem'
  },
  content: {
    paddingVertical: '3rem',
    paddingHorizontal: '1rem',
    backgroundColor: '$greyLightest',
    borderTopWidth: 1,
    borderTopColor: '$greyLighter'
  }
});
