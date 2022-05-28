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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function ComplexBackgroundCard({ color, image, description, action }) {
  const cardActionStyles = ({ palette: { white }, typography: { size } }) => ({
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    color: `${white.main} !important`,

    "& .material-icons": {
      ml: 0.5,
      fontSize: size.md,
      transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons": {
      transform: "translateX(5px)",
    },
  });

  return (
    <Card
      sx={({
        functions: { rgba, linearGradient },
        palette: { gradients },
        borders: { borderRadius },
      }) => ({
        backgroundImage: gradients[color]
          ? `${linearGradient(
              rgba(gradients[color].main, 0.6),
              rgba(gradients[color].state, 0.6)
            )}, url(${image})`
          : `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image})`,
        backgroundSize: "cover",
        borderRadius: borderRadius.lg,
      })}
    >
      <SuiBox textAlign="center" p={2}>
        <SuiBox display="flex" flexDirection="column" mt={6} p={3}>
          <SuiBox mb={2}>
            <SuiTypography variant="body2" color="white" fontWeight="bold">
              {description}
            </SuiTypography>
          </SuiBox>
          {action.type === "internal" ? (
            <SuiBox mt={3}>
              <SuiTypography
                component={Link}
                to={action.route}
                variant="button"
                color="white"
                textTransform="capitalize"
                fontWeight="medium"
                sx={cardActionStyles}
              >
                {action.label} <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </SuiTypography>
            </SuiBox>
          ) : (
            <SuiBox mt={3}>
              <SuiTypography
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="button"
                color="white"
                textTransform="capitalize"
                fontWeight="medium"
                sx={cardActionStyles}
              >
                {action.label} <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </SuiTypography>
            </SuiBox>
          )}
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

// Setting default values for the props of ComplexBackgroundCard
ComplexBackgroundCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the ComplexBackgroundCard
ComplexBackgroundCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  image: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default ComplexBackgroundCard;
