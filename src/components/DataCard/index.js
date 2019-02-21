import PropTypes from "prop-types";
import React from "react";
import Icon from "../Icon";
import * as Card from "./style";

const DataCard = ({ color, heading, icon, subheading, footer }) => {
  return (
    <Card.Container>
      {icon && (
        <Card.TitlIcon color={color}>
          <Icon name={icon} />
        </Card.TitlIcon>
      )}
      <Card.Heading>{heading}</Card.Heading>
      <Card.SubHeading>{subheading}</Card.SubHeading>
      <Card.Footer>{footer}</Card.Footer>
    </Card.Container>
  );
};

DataCard.propTypes = {
  color: PropTypes.string,
  heading: PropTypes.string.isRequired,
  icon: PropTypes.string
  // subheading: PropTypes.string
};
export default DataCard;
