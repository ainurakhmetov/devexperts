import React from "react";
import styled from "styled-components";

const StyledListItem = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    background-color: #fff;
    margin-bottom: 5px;
    padding: 15px;
`;

const StyledListItemTitle = styled.div`
    color: #f4511e;
    font-weight: 700;
    justify-content: center;
    text-transform: uppercase;
`;

const ListRowHeader = () => {
    return (
        <StyledListItem>
            <StyledListItemTitle>
                {'name'}
            </StyledListItemTitle>
            <StyledListItemTitle>
                {'description'}
            </StyledListItemTitle>
        </StyledListItem>
    )
};

export default ListRowHeader;