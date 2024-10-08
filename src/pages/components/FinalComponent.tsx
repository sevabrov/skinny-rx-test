import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

type propType = {
  handleReset: () => void;
};

export const FinalComponent = (props: propType) => {
  const { handleReset } = props;
  return (
    <>
      <Typography sx={{ mt: 2, mb: 1 }}>
        All steps completed - you&apos;re finished
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button onClick={handleReset}>Reset</Button>
      </Box>
    </>
  );
};
