//import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '03/03/2021',
    infected: 4000,
    positive: 2400,
    deaths: 2400,
  },
  {
    name: '03/04/2021',
    infected: 3000,
    positive: 1398,
    deaths: 2210,
  },
  {
    name: '03/05/2021',
    infected: 2000,
    positive: 9800,
    deaths: 2290,
  },
  {
    name: '03/06/2021',
    infected: 2780,
    positive: 3908,
    deaths: 2000,
  },
  {
    name: '03/07/2021',
    infected: 1890,
    positive: 4800,
    deaths: 2181,
  },
  {
    name: '03/08/2021',
    infected: 2390,
    positive: 3800,
    deaths: 2500,
  },
  {
    name: '03/09/2021',
    infected: 3490,
    positive: 4300,
    deaths: 2100,
  },
];

export const SimpleAreaChart: React.FC = () => {
    return (
       //<div className="graf">
       <ResponsiveContainer width={'99%'} height={300}>
        <LineChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="positive" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="infected" stroke="#82ca9d" />
          <Line type="monotone" dataKey="deaths" stroke="#dc3545" />
        </LineChart>
        </ResponsiveContainer>
        //</div>
      
    );
  }


