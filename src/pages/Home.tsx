import React from 'react';
import styled from "styled-components";

import {StyledApp} from "../styles";
import ListRowHeader from "../components/listRowHeader";
import ListRow from "../components/listRow";
import Header from "../components/layout/Header";
import {useFetchCompanies} from "../hooks/useFetchCompanies";

const StyledHome = styled.div`
    margin: 50px auto;
    width: 65vw;
`;

const Home = () => {
    const companiesList = useFetchCompanies();

    return (
        <StyledApp>
            <Header />
            <StyledHome>
                <ListRowHeader />
                {companiesList?.map((itemData) => (
                    <ListRow itemData={itemData} key={itemData?.id} />
                ))}
            </StyledHome>
        </StyledApp>
    )
}

export default Home;