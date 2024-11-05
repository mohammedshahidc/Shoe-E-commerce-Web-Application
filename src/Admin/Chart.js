import React, { useContext } from 'react';
import { Admincontext } from './Admin context/AdminContext';
import { context } from '../context/Productcontext';
import {
    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
    Cell,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Area,
    CartesianGrid,
    LabelList,
} from 'recharts';

// Sample monthly revenue data
const revenueData = [
    { name: 'April', value: 16000 },
    { name: 'May', value: 29000 },
    { name: 'June', value: 27500 },
    { name: 'July', value: 29850 },
    { name: 'August', value: 49500 },
    { name: 'September', value: 60000 },
    { name: 'October', value: 61000 },
    { name: 'November', value: 71000 },
];

const COLORS = ['#0088FE', '#FFBB28'];

const CustomTooltipPie = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-gray-300 rounded-lg p-2 shadow-lg">
                <p>{`${payload[0].name}: ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

const CustomTooltipLine = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-gray-300 rounded-lg p-2 shadow-lg">
                <p>{`Month: ${payload[0].name}`}</p>
                <p>{`Revenue: $${payload[0].value.toLocaleString()}`}</p>
            </div>
        );
    }
    return null;
};

const Chart = () => {
    const { totalRevenue, adproduct, orders, users } = useContext(Admincontext);

    const sales = orders.filter((order) => order.paymentStatus === "completed")
    console.log("chart o:", sales);
    revenueData[revenueData.length - 1].value = totalRevenue;
    const men = adproduct.filter((product) => product.type === "men");
    const women = adproduct.filter((product) => product.type === "women");

    const productData = [
        { name: 'Men', value: men.length },
        { name: 'Women', value: women.length },
    ];

    return (
        <div className='h-screen w-screen'>
            <div className='flex ml-[240px]'>
                <div className='h-[150px] w-[350px] bg-gray-300 rounded-md mt-[10px] p-0 text-start'>
                    <h1 className='ml-[30px] mt-[30px] text-3xl'>Total sales:</h1>
                    <h1 className='ml-[180px] pt-4 text-3xl'>{sales.length}</h1>
                </div>
                <div className='h-[150px] w-[350px] bg-gray-300 rounded-md mt-[10px] ml-[10px]'>
                    <h1 className='ml-[-110px] mt-[30px] text-3xl'>Total Revanue:</h1>
                    <h1 className='ml-[40px] pt-4 text-3xl'>₹ {totalRevenue}</h1>
                </div>
                <div className='h-[150px] w-[350px] bg-gray-300 rounded-md mt-[10px] ml-[10px]'>
                    <h1 className='ml-[-110px] mt-[30px] text-3xl'>Total users:</h1>
                    <h1 className='ml-[40px] pt-4 text-3xl'>{users.length}</h1>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center">
                {/* Line Chart */}
                <div className="w-[550px] h-[400px] bg-gray-100 rounded-lg shadow-md p-4 mt-[50px] ml-[205px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#666' }} />
                            <YAxis tick={{ fontSize: 12, fill: '#666' }} />
                            <Tooltip content={<CustomTooltipLine />} />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="none"
                                fill="#e0f7fa"
                                fillOpacity={0.6}
                            />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#0088FE"
                                strokeWidth={3}
                                dot={{ stroke: '#0088FE', strokeWidth: 2, fill: '#fff' }}
                            >
                                <LabelList dataKey="value" position="top" style={{ fill: '#000', fontSize: 12 }} />
                            </Line>
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="w-[550px] h-[400px] bg-gray-100 rounded-lg shadow-md p-4 mt-[50px] ml-[50px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Tooltip content={<CustomTooltipPie />} />
                            <Pie
                                data={productData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                outerRadius={100}
                                fill="#8884d8"
                            >
                                {productData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Chart;
