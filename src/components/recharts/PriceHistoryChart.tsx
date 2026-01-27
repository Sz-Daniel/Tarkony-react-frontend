import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { HistoricalPrices } from '../../api/types/type';

//Helyett
type Params = {
  data: HistoricalPrices[];
};

export function PriceHistoryChart({ data }: Params) {
  return (
    <ResponsiveContainer width={1000} height={500}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="timestamp"
          tickFormatter={(value) =>
            new Date(Number(value)).toLocaleDateString()
          }
        />
        <YAxis dataKey="price" />

        <Line type="monotone" dataKey="price" stroke="#8884d8" name="Price" />
        <Line
          type="monotone"
          dataKey="priceMin"
          stroke="#0a00cf"
          name="Minimum Price"
        />
        <Tooltip
          content={({ label, payload }) => {
            if (!payload || !payload.length) return null;

            const row = payload[0].payload as HistoricalPrices;
            return (
              <div
                style={{
                  backgroundColor: 'white',
                  padding: '10px',
                  border: '1px solid #ccc',
                  color: 'black',
                }}
              >
                <p>Price: {row.price}</p>
                <p>Price Min: {row.priceMin}</p>
                <p>
                  Date:{' '}
                  {new Date(Number(row.timestamp)).toLocaleString('en-us', {
                    weekday: 'short',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
                <p>Offer Count: {row.offerCount}</p>
                <p>Offer Count Min: {row.offerCountMin}</p>
              </div>
            );
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
/**
 *
 */
