import React from "react";
import PropTypes from "prop-types";

const Card = props => {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width,
    };

    return <div style={styles}></div>;
};

// default props can be declared by setting the properties within 'defaultProps' of the component:

Card.defaultProps = {
    cardColor: "purple",
    height: 100,
    width: 100,
};

// this isn't a typical requirement... This is something that popped up from the modifications I made to this specific React App
// However, this type of Typechecking is a great way to eliminate bugs and should be used.
Card.propTypes = {
    cardColor: PropTypes.string.isRequired, // You can also make a prop required by appending .isRequired
    height: PropTypes.number,
    width: PropTypes.number,
};

export default Card;
