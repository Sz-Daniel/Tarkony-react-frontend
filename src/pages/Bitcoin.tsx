import { useNavigate } from 'react-router-dom';
import { PriceHistoryResponseType } from '../api/types/Bitcoin/queryType';
import { PriceHistoryChart } from '../components/recharts/PriceHistoryChart';
import { useBitcoinFetch } from '../hooks/FetchCalls';
import { Box, Grid, Paper, Button } from '@mui/material';

export function Bitcoin() {
  const { data, isSuccess, isLoading, isError, error } = useBitcoinFetch();
  const bitcoinDataList =
    isSuccess && data ? (data as PriceHistoryResponseType[]) : undefined;

  const navigate = useNavigate();
  return (
    <>
      {isLoading && <div>Loading Bitcoin data...</div>}
      {isError && <div>Error loading data: {error.message}</div>}
      {bitcoinDataList && (
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
              {/* First section - Pic, Meta Info*/}
              <Grid size={12}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <PriceHistoryChart data={bitcoinDataList} />
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
