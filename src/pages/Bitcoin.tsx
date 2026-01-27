import { useNavigate } from 'react-router-dom';
import { Box, Grid, Paper, Button } from '@mui/material';
import { useBitcoinFetch } from '../hooks/FetchCalls';
import { PriceHistoryChart } from '../components/recharts/PriceHistoryChart';

export function Bitcoin() {
  const { data, isSuccess, isLoading, isError, error } = useBitcoinFetch();

  const navigate = useNavigate();
  return (
    <>
      {isLoading && <div>Loading Bitcoin data...</div>}
      {isError && <div>Error loading data: {error.message}</div>}
      {data && (
        <>
          <div> Bitcoin Data </div>
          <Box sx={{ p: 4 }}>
            <Box sx={{ p: 2 }}>
              <Button
                sx={{ flex: 2, alignSelf: 'flex-start' }}
                onClick={() => {
                  navigate('/');
                }}
              >
                Back
              </Button>
            </Box>
            <Grid container>
              <Grid size={12}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <PriceHistoryChart data={data} />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
}
