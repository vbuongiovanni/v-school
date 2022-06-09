import React from "react";
import PropTypes from "prop-types";

export default function RoundedImage(props) {

    /**
     * Challenge: Here's a component meant to take an image (`src` prop) and round the edges.
     * It has some styling applied with CSS to ensure it isn't too large on the page, but
     * we want this component to allow for any image source and any kind of border radius to be applied
     * 
     * 1. The component should always receive a `src` prop, and it should always be a string
     * 2. The component should be able to accept only a string or a number for the `borderRadius` prop
     *      (https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes)
     * 3. If it doesn't receive a `borderRadius` prop at all, it should default it to "50%"
     */
        
    const styles = {
        borderRadius : props.borderRadius,
    }

    return (
        <img 
            style={styles}
            src={props.src}
        />
    )
}

RoundedImage.defaultProps = {
    borderRadius : "50%"
}

RoundedImage.propTypes = {
    src : PropTypes.string.isRequired,
    borderRadius : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}