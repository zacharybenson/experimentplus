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

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";

function ProductCell({ image, name, orders }) {
  return (
    <SuiBox display="flex" alignItems="center" pr={2}>
      <SuiBox mr={2}>
        <SuiAvatar src={image} alt={name} variant="rounded" />
      </SuiBox>
      <SuiBox display="flex" flexDirection="column">
        <SuiTypography variant="button" fontWeight="medium">
          {name}
        </SuiTypography>
        <SuiTypography variant="button" fontWeight="medium" color="secondary">
          <SuiTypography component="span" variant="button" color="success">
            {orders}
          </SuiTypography>{" "}
          orders
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

// Typechecking props for the ProductCell
ProductCell.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  orders: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default ProductCell;
