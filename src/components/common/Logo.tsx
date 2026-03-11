import { Box, Link, Typography } from '@mui/material';
import { rootPaths } from 'routes/paths';

interface LogoProps {
  showName?: boolean;
}

const Logo = ({ showName = true }: LogoProps) => {
  return (
    <Link
      href={rootPaths.root}
      underline="none"
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src="/assets/images/school-logo.png"
        alt="School Logo"
        sx={{
          height: 70,
          width: 'auto',
          maxWidth: 70,
          objectFit: 'contain',
        }}
      />
      {showName && (
        <Typography
          sx={{
            color: 'text.primary',
            fontWeight: 500,
            fontSize: 17,
            lineHeight: 1.2,
            margin: 1,
            marginLeft: 0.625,
            letterSpacing: 'normal',
            fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          }}
        >
          ID School Registration
        </Typography>
      )}
    </Link>
  );
};

export default Logo;
