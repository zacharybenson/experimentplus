/**
=========================================================
* Soft UI Dashboard PRO React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useMemo, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ProgressLineChart from "examples/Charts/LineCharts/ProgressLineChart";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MasterCard from "examples/Cards/MasterCard";
import MiniInfoCard from "examples/Cards/InfoCards/MiniInfoCard";
import ControllerCard from "examples/Cards/ControllerCard";
import CategoriesList from "examples/Lists/CategoriesList";

// Widgets page components
import Steps from "layouts/pages/widgets/components/Steps";
import FullBody from "layouts/pages/widgets/components/FullBody";
import MediaPlayer from "layouts/pages/widgets/components/MediaPlayer";
import OrdersOverview from "layouts/pages/widgets/components/OrdersOverview";
import UpcomingEvents from "layouts/pages/widgets/components/UpcomingEvents";
import Chart from "layouts/pages/widgets/components/Chart";

// Data
import progressLineChartData from "layouts/pages/widgets/data/progressLineChartData";

import categoriesListData from "layouts/pages/widgets/data/categoriesListData";
import incomeChartData from "layouts/pages/widgets/data/incomeChartData";
import caloriesChartData from "layouts/pages/widgets/data/caloriesChartData";

function Widgets() {
  const [lights, setLights] = useState(false);

  const handleSetLights = () => setLights(!lights);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox my={3}>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <SuiBox mb={3}>
                <MiniStatisticsCard
                  bgColor="info"
                  title={{ text: "battery health", fontWeight: "regular" }}
                  count="99 %"
                  icon={{ component: "sports_esports" }}
                />
              </SuiBox>
              <MiniStatisticsCard
                bgColor="info"
                title={{ text: "music volume", fontWeight: "regular" }}
                count="15/100"
                icon={{ color: "info", component: "music_note" }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Chart
                title="income"
                count="$130,832"
                percentage={{ color: "success", label: "+90%" }}
                chart={incomeChartData}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <ProgressLineChart
                icon="date_range"
                title="Tasks"
                count={480}
                progress={60}
                chart={progressLineChartData}
              />
            </Grid>
          </Grid>
        </SuiBox>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
              <UpcomingEvents />
            </Grid>
            <Grid item xs={12} sm={3} lg={2}>
              <DefaultInfoCard
                icon="account_balance"
                title="salary"
                description="Belong Interactive"
                value="+$2000"
              />
            </Grid>
            <Grid item xs={12} sm={3} lg={2}>
              <DefaultInfoCard
                icon="paypal"
                title="paypal"
                description="Freelance Payment"
                value="$455.00"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" />
            </Grid>
          </Grid>
        </SuiBox>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <FullBody />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <ControllerCard
                state={lights}
                icon={
                  <Icon className={lights ? "text-white" : "text-dark"} fontSize="large">
                    lightbulb
                  </Icon>
                }
                title="Lights"
                onChange={handleSetLights}
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Chart
                title="calories"
                count={97}
                percentage={{ color: "success", label: "+5%" }}
                chart={caloriesChartData}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <MiniInfoCard
                icon="shortcut"
                title={
                  <>
                    754&nbsp;
                    <SuiTypography variant="button" color="secondary" fontWeight="medium">
                      m
                    </SuiTypography>
                  </>
                }
                description="New York City"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Steps />
            </Grid>
          </Grid>
        </SuiBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>

          </Grid>
          <Grid item xs={12} lg={3}>
            <SuiBox mb={3}>
              <CategoriesList title="categories" categories={categoriesListData} />
            </SuiBox>
            <MediaPlayer />
          </Grid>
          <Grid item xs={12} lg={4}>
            <OrdersOverview />
          </Grid>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Widgets;
