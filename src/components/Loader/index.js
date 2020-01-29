import React from 'react';

import { LoadingContainer, Spinner } from './styles';

function Loader() {
    return <LoadingContainer>
        <Spinner />
    </LoadingContainer>
}

export default Loader;