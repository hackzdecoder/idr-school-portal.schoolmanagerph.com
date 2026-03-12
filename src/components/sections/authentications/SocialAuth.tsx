import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const SocialAuth = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        alignItems: 'center',
      }}
    >
      <Grid
        size={{
          xs: 12,
          lg: 12,
        }}
      >
        <Button
          fullWidth
          variant="contained"
          color="neutral"
          size="large"
          sx={{ flex: 1, whiteSpace: 'nowrap' }}
          startIcon={<Icon icon="flat-color-icons:google" width={21} height={21} />}
        >
          Sign in with Google
        </Button>
      </Grid>
    </Grid>
  );
};

export default SocialAuth;
