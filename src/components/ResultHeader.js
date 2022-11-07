import React from 'react';

import styled from 'styled-components';

const ResultHeader = ({ total }) => {
    return (
        <TotalBox>
            ✅   Total Counts :  {total}
        </TotalBox>
    );
}

export default ResultHeader;

const TotalBox = styled.div`
    color: white;   
    font-size: 1rem;
`;