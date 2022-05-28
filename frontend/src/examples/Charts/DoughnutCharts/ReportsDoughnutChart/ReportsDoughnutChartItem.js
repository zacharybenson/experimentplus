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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

function ReportsDoughnutChartItem({ color, title, percentage, hasBorder }) {
  const { borderWidth } = borders;
  const { light } = colors;

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        borderBottom: hasBorder ? `${borderWidth[1]} solid ${light.main}` : "none",
        lineHeight: 1.25,
      }}
    >
      <Grid item xs={10}>
        <SuiBox display="flex" py={0.8} px={2}>
          <SuiBox
            bgColor={color}
            width="1.35rem"
            height="1.35rem"
            borderRadius="md"
            mr={2}
            lineHeight={0}
            variant="gradient"
          />
          <SuiBox display="flex" flexDirection="column" justifyContent="center">
            <SuiTypography
              component="div"
              variant="button"
              textTransform="capitalize"
              fontWeight="medium"
            >
              {title}
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </Grid>
      <Grid item xs={2}>
        <SuiBox py={0.8} px={1} textAlign="center" width="100%">
          <SuiTypography
            variant="caption"
            color="text"
            fontWeight="medium"
            sx={{ display: "inline-block", width: "max-content" }}
          >
            {percentage}
          </SuiTypography>
        </SuiBox>
      </Grid>
    </Grid>
  );
}

// Setting default values for the props of ReportsDoughnutChartItem
ReportsDoughnutChartItem.defaultProps = {
  color: "info",
  hasBorder: false,
};

// Typechecking props for the ReportsDoughnutChartItem
ReportsDoughnutChartItem.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
};

export default ReportsDoughnutChartItem;
