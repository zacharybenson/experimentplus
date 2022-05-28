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

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React example components
import DefaultItem from "examples/Items/DefaultItem";

function UpcomingEvents() {
  return (
    <Card sx={{ height: "100%" }}>
      <SuiBox pt={2} px={2} lineHeight={1}>
        <SuiTypography variant="h6" fontWeight="medium">
          Upcoming events
        </SuiTypography>
        <SuiTypography variant="button" color="text" fontWeight="medium">
          Joined
        </SuiTypography>
      </SuiBox>
      <SuiBox p={2}>
        <DefaultItem icon="paid" title="Cyber Week" description="27 March 2020, at 12:30 PM" />
        <SuiBox mt={3.5}>
          <DefaultItem
            color="primary"
            icon="notifications"
            title="Meeting with Marry"
            description="24 March 2020, at 10:00 PM"
          />
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default UpcomingEvents;
