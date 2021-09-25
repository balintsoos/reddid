import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as SvgLogo } from 'media/logo.svg';

export const Logo = () => {
  return (
    <SvgIcon sx={{ marginRight: '10px' }}>
      <SvgLogo />
    </SvgIcon>
  );
};
