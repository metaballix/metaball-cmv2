import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: '100%',
    height: '256px',
    marginBottom: theme.spacing(2)
  },
}));

export default function Team(props) {
  const classes = useStyles();
  
  const content = {
    'badge': 'LOREM IPSUM',
    'header-p1': 'Donec lacinia',
    'header-p2': 'turpis non sapien lobortis pretium',
    'description': 'Integer feugiat massa sapien, vitae tristique metus suscipit nec.',
    '01_image': 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=500&ah=500&q=80',
    '01_name': 'Danny Bailey',
    '01_job': 'CEO & Founder',

    '02_image': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&w=500&ah=500&q=80',
    '02_name': 'Alice Bradley',
    '02_job': 'Head of Operations',

    '03_image': 'https://images.unsplash.com/photo-1560298803-1d998f6b5249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=500&ah=500&q=80',
    '03_name': 'Ian Brown',
    '03_job': 'Head of Development',

    '04_image': 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd91&w=500&ah=500&q=80',
    '04_name': 'Daisy Carter',
    '04_job': 'Sales Director',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={8}>
          <Box mb={9} textAlign="center">
            <Container maxWidth="sm">
            <Typography variant="overline" color="textSecondary" paragraph={true}>{content['badge']}</Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="primary">{content['header-p1']} </Typography>
                <Typography variant="h3" component="span">{content['header-p2']}</Typography>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
            </Container>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={3}>
              <Link href="#" color="inherit" underline="none">
                <Avatar alt="" variant="rounded" src={content['01_image']} className={classes.avatar} />
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6" component="h6" gutterBottom={true}>{content['01_name']}</Typography>
                  <ArrowRightAltIcon />
                </Box>
                <Typography variant="body1" color="textSecondary" component="span">{content['01_job']}</Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Link href="#" color="inherit" underline="none">
                <Avatar alt="" variant="rounded" src={content['02_image']} className={classes.avatar} />
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6" component="h6" gutterBottom={true}>{content['02_name']}</Typography>
                  <ArrowRightAltIcon />
                </Box>
                <Typography variant="body1" color="textSecondary" component="span">{content['02_job']}</Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Link href="#" color="inherit" underline="none">
                <Avatar alt="" variant="rounded" src={content['03_image']} className={classes.avatar} />
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6" component="h6" gutterBottom={true}>{content['03_name']}</Typography>
                  <ArrowRightAltIcon />
                </Box>
                <Typography variant="body1" color="textSecondary" component="span">{content['03_job']}</Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Link href="#" color="inherit" underline="none">                
                <Avatar alt="" variant="rounded" src={content['04_image']} className={classes.avatar} />
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6" component="h6" gutterBottom={true}>{content['04_name']}</Typography>
                  <ArrowRightAltIcon />
                </Box>
                <Typography variant="body1" color="textSecondary" component="span">{content['04_job']}</Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}