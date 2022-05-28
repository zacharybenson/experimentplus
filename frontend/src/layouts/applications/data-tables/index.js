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
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import dataTableData from "layouts/applications/data-tables/data/dataTableData";

function DataTables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox pt={6} pb={3}>
        <SuiBox mb={3}>
          <Card>
            <SuiBox p={3} lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                Datatable Simple
              </SuiTypography>
              <SuiTypography variant="button" fontWeight="regular" color="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </SuiTypography>
            </SuiBox>
            <DataTable table={dataTableData} />
          </Card>
        </SuiBox>
        <Card>
          <SuiBox p={3} lineHeight={1}>
            <SuiTypography variant="h5" fontWeight="medium">
              Datatable Search
            </SuiTypography>
            <SuiTypography variant="button" fontWeight="regular" color="text">
              A lightweight, extendable, dependency-free javascript HTML table plugin.
            </SuiTypography>
          </SuiBox>
          <DataTable table={dataTableData} canSearch />
        </Card>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DataTables;
