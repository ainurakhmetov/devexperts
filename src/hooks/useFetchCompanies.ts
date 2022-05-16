import {useEffect, useState} from "react";
import axios from 'axios';

import {ICompaniesListItem} from "../types";

interface IFetchCompaniesReturn {
    companiesList: ICompaniesListItem[];
    isLoading: boolean;
}

export const useFetchCompanies = (): IFetchCompaniesReturn => {
    const [companiesList, setCompanies] = useState<ICompaniesListItem[] | never>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = async () => {
        setIsLoading(true);
        const companies = await axios.get('https://api.jsonbin.io/b/625eb6da80883c3054e3915e/13')
            .then((response) => {
                return response?.data;
            })
            .catch((err) => console.error('Error: ' + err))
            .finally(() => setIsLoading(false));

        if (companies) {
            setCompanies(companies);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { companiesList, isLoading };
}