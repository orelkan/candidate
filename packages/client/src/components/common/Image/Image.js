import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';

const Image = React.memo(props => {
    const [isLoaded, setLoaded] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        if (ref && ref.current) {
            if (ref.current.complete) {
                handleImageLoaded();
            } else {
                ref.current.addEventListener('load', handleImageLoaded);
            }

            return () => ref.current.removeEventListener('load', handleImageLoaded);
        }
    }, [props.src]);

    function handleImageLoaded() {
        setLoaded(true);
    }

    const { src, className, spinnerSize } = props;

    return (
        <div className={className} style={{ display: 'flex', width: '500px', height: '500px' }}>
            <img
                ref={ref}
                src={src}
                alt="Not Found"
                style={{ display: isLoaded ? 'block' : 'none', width: '100%', height: '100%' }}
            />
            {!isLoaded ? (
                <Spinner style={{ margin: 'auto', width: spinnerSize, height: spinnerSize }} color="info" />
            ) : null}
        </div>
    );
});

Image.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    spinnerSize: PropTypes.number,
};

export default Image;
