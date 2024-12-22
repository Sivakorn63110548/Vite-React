import PropTypes from 'prop-types';
import { Component } from 'react';
import { Stack, Typography, TextField, Button, Link, Snackbar, Alert, InputAdornment } from '@mui/material';
import Background from '../assets/Background.jpg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GetAppIcon from '@mui/icons-material/GetApp';
import emailjs from 'emailjs-com';
import ErrorIcon from '@mui/icons-material/Error';
import Resume_pdf from '../assets/file/Resume_Sivakorn.pdf'

export default class SentMail extends Component {
  static propTypes = {
    email: PropTypes.string,
  };

  state = {
    email: '',
    openSnackbar: false,
    snackbarMessage: '',
    snackbarSeverity: 'success' as 'success' | 'error' | 'info' | 'warning',
    emailError: '',
  };

  handleChange = (event: { target: { value: any; }; }) => {
    const email = event.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailError = '';

    if (!emailRegex.test(email)) {
      emailError = 'invalid';
    }

    this.setState({ email, emailError });
  };

  handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const { email, emailError } = this.state;

    if (emailError) {
      this.setState({
        openSnackbar: true,
        snackbarMessage: 'อีเมลไม่ถูกต้อง!',
        snackbarSeverity: 'error',
      });
      return;
    }

    const templateParams = {
      to_email: email,
    };

    emailjs
      .send(
        'service_ft8c78n',
        'template_5fdp8af',
        templateParams,
        'CmH8HahY2YX79aEkN'
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          this.setState({
            openSnackbar: true,
            snackbarMessage: 'อีเมลถูกส่งสำเร็จ!',
            snackbarSeverity: 'success',
          });
        },
        (error) => {
          console.log('Error sending email:', error);
          this.setState({
            openSnackbar: true,
            snackbarMessage: 'การส่งอีเมลล้มเหลว.',
            snackbarSeverity: 'error',
          });
        }
      );
  };

  handleDownloadPDF = () => {
    const pdfPath = Resume_pdf;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Resume_Sivakorn.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Download started');
    this.setState({
      openSnackbar: true,
      snackbarMessage: 'ดาวน์โหลด PDF สำเร็จ!',
      snackbarSeverity: 'success',
    });
  };

  handleCloseSnackbar = () => {
    this.setState({ openSnackbar: false });
  };

  render() {
    const { email, openSnackbar, snackbarMessage, snackbarSeverity, emailError } = this.state;

    return (
      <>
        <div
          style={{
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            background: `url(${Background}) no-repeat center center`,
            backgroundSize: 'cover',
          }}
        >
          <div
            style={{
              width: '40%',
              padding: '20px',
              textAlign: 'center',
              borderRadius: '10px',
              marginTop: '8rem',
              marginBottom: '10rem',
              color: 'white',
            }}
          >
            <Stack spacing={3}>
              <Typography variant="h3">
                React&nbsp;<span style={{ color: 'blue', fontWeight: 'bold' }}>Sivakorn</span>
              </Typography>
              <Typography variant="body1">
                Made to be a real work that shows various information about me for everyone to get to know me in order to consider my abilities.
              </Typography>

              <Stack spacing={2}>
                <Typography variant="h6">Do you want to get my resume documents?</Typography>

                <TextField
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={this.handleChange}
                  fullWidth
                  sx={{
                    marginBottom: '15px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                  }}
                  error={Boolean(emailError)}
                  InputProps={{
                    endAdornment: emailError ? (
                      <InputAdornment position="end">
                        <ErrorIcon color="error" />
                      </InputAdornment>
                    ) : null,
                  }}
                />
                <div className="sent-btn">
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleSubmit}
                      sx={{ flex: 1 }}
                      startIcon={<MailOutlineIcon />}
                    >
                      Send Email
                    </Button>

                    <Button
                      variant="contained"
                      color="error"
                      onClick={this.handleDownloadPDF}
                      sx={{
                        flex: 1,
                        '&:hover': {
                          backgroundColor: 'red',
                        },
                      }}
                      startIcon={<GetAppIcon />}
                    >
                      Download PDF
                    </Button>
                  </Stack>

                  <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={this.handleCloseSnackbar}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <Alert onClose={this.handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                      {snackbarMessage}
                    </Alert>
                  </Snackbar>
                </div>

                <Typography variant="caption" sx={{ marginTop: '10px' }}>
                  By clicking "Start now" you agree to our&nbsp;
                  <Link href="#" underline="none" sx={{ color: 'blue' }}>Terms & Conditions</Link>.
                </Typography>
              </Stack>
            </Stack>
          </div>
        </div>
      </>
    );
  }
}