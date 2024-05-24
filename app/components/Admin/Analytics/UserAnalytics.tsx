/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";
import Loader from "../../Loader/Loader";
import { useGetUsersAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
import { styles } from "@/app/styles/style";


type Props = {
    isDashboard?: boolean;
}


const analyticsData = [
        { name: 'Jun 2023', count: 440 },
        { name: 'July 2023', count: 540 },
        { name: 'August 2023', count: 640 },
        { name: 'Sept 2023', count: 440 },
        { name: 'October 2023', count: 840 },
        { name: 'Nov 2023', count: 340 },
        { name: 'December 2023', count: 40 },
      ];
  

const UserAnalytics = ({isDashboard}: Props) => {
const { data, isLoading } = useGetUsersAnalyticsQuery({});

// const analyticsData: any = [];

// data &&
//   data.users.last12Months.forEach((item: any) => {
//     analyticsData.push({ name: item.month, uv: item.count });
//   });

// const minValue = 0;

  return (
    <>
    {
    isLoading ? (
        <Loader />
      ) : (
      
      <div className={`${isDashboard ? "mt-[90px]" : "h-screen shadow-sm pb-5 rounded-sm"}`}>
        <div className={`${isDashboard ? "!ml-8 mb-5" : ""}`}>
          <h1 className={`${styles.title} ${isDashboard && '!text-[20px]'} px-5 !text-start`}>
            Users Analytics
          </h1>
          {isDashboard && (
            <p className={`* ${styles.label} px-5'}`}>
              Last 12 months analytics data{" "}
            </p>
         )}
        </div>
      
        <div className={`w-full ${isDashboard ? 'h-[40vh]' : 'h-screen'} flex items-center justify-center`}>
          <ResponsiveContainer width={isDashboard ? '100%' : '90%'} height={!isDashboard ? "50%" : '100%'}>
            <AreaChart
              data={analyticsData}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area 
            type="monotone"
            dataKey="count"
            stroke="#4d62d9"
            fill="#4d62d9"
            />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      )}
      </>
  )
}

export default UserAnalytics