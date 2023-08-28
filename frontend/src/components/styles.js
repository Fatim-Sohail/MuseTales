import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  ul: {
    justifyContent: 'center',
    left: '50%',
    marginTop: '30px',
    marginBottom: '30px',
    alignItems: 'center',
    alignSelf: 'center',
  },
  commentsOuterContainer: {
    display: 'flex',
    flexDirection: 'column', 
    marginLeft: '20px',
    maxWidth: '1000px',
  },
  InnerContainer: {
    // height: '200px',
    overflowY: 'auto',
    marginBottom: '10px',
  },
}));