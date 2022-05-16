import React from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";

import {StyledApp} from "../styles";
import Header from "../components/layout/Header";
import {useCompanyData} from "../hooks/useCompanyData";

const StyledCompanyTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 2.5fr 1fr;
    margin: 15px 75px;
    grid-column-gap: 25px;
`;

const StyledColumn = styled.div`
    display: grid;
    grid-template-rows: 40px 1fr;
    background-color: #fff;
    padding: 15px;
`;

const StyledImg = styled.img`
    height: 300px;
    object-fit: cover;
    filter: contrast(0.4);
`;

const StyledColumnTitle = styled.h3`
    margin: 0;
`;

const StyledColumnBody = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledColumnNearby = styled.div`
  background-color: #f3f3f3;
  padding: 10px;
  margin-bottom: 5px;
`;

const Company = () => {
    const { name } = useParams();
    const { company, nearbyPlaces } = useCompanyData(name as string);

    return (
        <StyledApp>
            <Header />
            <StyledImg src={company?.image} alt={'img'} />
            <StyledCompanyTable>
                <StyledColumn>
                    <StyledColumnTitle>Address</StyledColumnTitle>
                    <StyledColumnBody>
                        <span>{`${company?.address?.zip} ${company?.address?.street}`}</span>
                        <span>{`${company?.address?.country}, ${company?.address?.number}`}</span>
                    </StyledColumnBody>
                </StyledColumn>
                <StyledColumn>
                    <StyledColumnTitle>Nearby Places</StyledColumnTitle>
                    {nearbyPlaces?.map(item =>
                        <StyledColumnNearby key={item?.id}>
                            {item?.description}
                        </StyledColumnNearby>
                    )}
                </StyledColumn>
                <StyledColumn>
                    <StyledColumnTitle>Contact</StyledColumnTitle>
                    <StyledColumnBody>
                        <span>{company?.phone}</span>
                        <span>{company?.email}</span>
                    </StyledColumnBody>
                </StyledColumn>
            </StyledCompanyTable>
        </StyledApp>
    )
}

export default Company;

