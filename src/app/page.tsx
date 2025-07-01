import AppPieChart from "@/components/Home/AppPieCharts";
import CardList from "@/components/Home/CardList";
import TodoList from "@/components/Home/TodoList";
import AppBarChart from "@/components/Home/AppBarCharts";
import AppAreaChart from "@/components/Home/AppAreaCharts";
const page = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
        <AppBarChart></AppBarChart>
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title={"Top Customers"}></CardList>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart></AppPieChart>
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <TodoList></TodoList>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg  ">
        <AppAreaChart></AppAreaChart>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg ">
        <CardList title="Popular Content"></CardList>
      </div>
    </div>
  );
};

export default page;
