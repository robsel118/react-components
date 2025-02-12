import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import ModalsContext from './modalsContext';
import ModalsChildrenContext from './childrenContext';
import createManager from './manager';

const ModalsProvider = ({ children }) => {
    const [modals, setModals] = useState([]);
    const managerRef = useRef();

    if (!managerRef.current) {
        managerRef.current = createManager(setModals);
    }

    return (
        <ModalsContext.Provider value={managerRef.current}>
            <ModalsChildrenContext.Provider value={modals}>{children}</ModalsChildrenContext.Provider>
        </ModalsContext.Provider>
    );
};

ModalsProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default ModalsProvider;
