import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #503dbe, #812399)',
    // background: 'linear-gradient(135deg, #ff5722, #f50057)',
    zIndex: -1,
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),   
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: '4.5%',
    marginRight: '15%',
    marginLeft: '15%',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Aref Ruqaa Ink', 
    fontSize: '34px',
    paddingBottom: '15px',
  },
  fileInput: {
    width: '97%',
    margin: '15px 0',
    marginBottom: '30px',
  },
  buttonSubmit: {
    width: '260px',
    fontFamily: 'Calibri',
    fontSize: '26px',
    height: '50px',
    // right: '18%',
    // left: '%',
  },
  button: {
    width: '260px',
    height: '50px',
    fontFamily: 'Calibri',
    fontSize: '26px',
    marginLeft: '30px',
    // marginTop: '60px',
  },
  ckeditor__editable_inline: {
    minHeight: '200px',
  }
}));