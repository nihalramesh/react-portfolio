import React, { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types';

const HeroCamera = ({ children, isMobile }) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

        if (!isMobile) {
            const maxRotationX = Math.PI / 6; // 30 degrees
            const maxRotationY = Math.PI / 6; // 30 degrees

            const targetRotationX = Math.max(-maxRotationX, Math.min(maxRotationX, -state.pointer.y));
            const targetRotationY = Math.max(-maxRotationY, Math.min(maxRotationY, -state.pointer.x / 5));

            easing.dampE(groupRef.current.rotation, [targetRotationX, targetRotationY, 0], 0.25, delta);
        }
    });

    return (
        <group ref={groupRef} scale={1.1}>{children}</group>
    );
};

HeroCamera.propTypes = {
    children: PropTypes.node.isRequired,
    isMobile: PropTypes.bool.isRequired,
};

export default HeroCamera;