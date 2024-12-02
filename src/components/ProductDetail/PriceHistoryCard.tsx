import colors from "@/theme/colors";
import { AccordeonCard } from "../common/Accordeon/AccordeonCard";
import { PresentationIcon } from "../icons/PresentationIcon";
import {
  Bar,
  ComposedChart,
  Dot,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const PriceHistoryCard = (): JSX.Element => {
  return (
    <AccordeonCard
      content={
        <div className="w-[500px] h-[150px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart width={500} height={150} data={data}>
              <XAxis
                dataKey="name"
                scale="point"
                interval="preserveStartEnd"
                tickLine={false}
                padding={{ left: 30, right: 30 }}
              />
              <YAxis tickLine={false} tickSize={20} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff40",
                  border: 0,
                  borderRadius: 16,
                }}
                allowEscapeViewBox={{ x: true, y: true }}
              />
              <Bar
                dataKey="uv"
                barSize={20}
                fill={colors.foreground}
                radius={[100, 100, 0, 0]}
              />
              <Line
                type="linear"
                dataKey="uv"
                stroke={colors.primary}
                strokeWidth={4}
                stopColor={colors.primary}
                dot={<Dot fill={colors.primary} />}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      }
      title="Price History"
      icon={<PresentationIcon color={colors.grayText} />}
    />
  );
};

const data = [
  {
    name: "Jan",
    uv: 120,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Feb",
    uv: 328,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Mar",
    uv: 397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Apr",
    uv: 380,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "May",
    uv: 520,
    pv: 208,
    amt: 1100,
  },
  {
    name: "Jun",
    uv: 400,
    pv: 680,
    amt: 1700,
  },
];
