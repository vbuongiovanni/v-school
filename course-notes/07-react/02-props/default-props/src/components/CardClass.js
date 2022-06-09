import React from "react";
import PropTypes from "prop-types";

class CardClass extends React.Component {
    // in the case of class based components, defaultProps should be placed within the class declaration and should be designated as static.
    static defaultProps = {
        width: 150,
    };

    // this isn't a typical requirement... This is something that popped up from the modifications I made to this specific React App
    // However, this type of Typechecking is a great way to eliminate bugs and should be used.

    static propTypes = {
        cardColor: PropTypes.oneOf(["blue", "red"]).isRequired, // You can also make a prop required by appending .isRequired
        height: PropTypes.number.isRequired,
        width: PropTypes.number,
    };

    // Challenge: Add prop types for the height and width. Make at least one of them required.
    // Extra Challenge: Make it so your incoming cardColor is only valid if it is "blue" or "red".

    render() {
        const styles = {
            backgroundColor: this.props.cardColor,
            height: this.props.height,
            width: this.props.width,
        };

        return <div style={styles}></div>;
    }
}

export default CardClass;
