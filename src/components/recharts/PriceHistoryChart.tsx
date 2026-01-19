import {
  CartesianGrid,
  Line,
  LineChart,
  RenderableText,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { PriceHistoryResponseType } from '../../api/types/Bitcoin/queryType';

type Params = {
  data: PriceHistoryResponseType[];
};

export function PriceHistoryChart({ data }: Params) {
  return (
    <ResponsiveContainer width={1000} height={500}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="timestamp"
          tickFormatter={(value) => value.toLocaleDateString()}
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

            const row: PriceHistoryResponseType = payload[0].payload; // ← teljes rekord

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
                <p>Date: {row.timestamp.toLocaleDateString()}</p>
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
