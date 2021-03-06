import React from 'react';
import styled from "styled-components";

import {StyledApp} from "../styles";
import ListRowHeader from "../components/ListRowHeader";
import ListRow from "../components/ListRow";
import Header from "../components/Layout/Header";
import {useFetchCompanies} from "../hooks/useFetchCompanies";
import Loader from "../components/Loader";

const StyledHome = styled.div`
    margin: 50px auto;
    width: 65vw;
`;

const Home = () => {
    const { companiesList, isLoading } = useFetchCompanies();

    return (
        <StyledApp>
            <Header />
            {
                isLoading
                ? <Loader />
                : <StyledHome>
                    <ListRowHeader />
                    {companiesList?.map((itemData) => (
                        <ListRow itemData={itemData} key={itemData?.id} />
                    ))}
                </StyledHome>
            }
        </StyledApp>
    )
}

export default Home;