import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import {ICompaniesListItem} from "../../types";

const StyledListItem = styled(Link)`
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    background-color: #fff;
    color: #000;
    margin-bottom: 5px;
    padding: 15px;
    text-decoration: none;
`;

const StyledListItemName = styled.div`
    color: #f4511e;
    font-weight: 700;
    justify-content: center;
`;

const ListRow = ({ itemData }: Record<`itemData`, ICompaniesListItem>) => {
    return (
        <StyledListItem to={`/${itemData?.name?.toLowerCase()}`}>
            <StyledListItemName>
                {itemData?.name}
            </StyledListItemName>
            <div>
                {itemData?.description}
            </div>
        </StyledListItem>
    )
};

export default ListRow;