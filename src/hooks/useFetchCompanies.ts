import {useEffect, useState} from "react";
import axios from 'axios';

import {ICompaniesListItem} from "../types";

export const useFetchCompanies = (): ICompaniesListItem[] => {
    const [companiesList, setCompanies] = useState<ICompaniesListItem[] | never>([]);

    const fetchData = async () => {
        const companies = await axios.get('https://api.jsonbin.io/b/625eb6da80883c3054e3915e/13')
            .then((response) => {
                return response?.data;
            })
            .catch((err) => console.error('Error: ' + err));

        if (companies) {
            setCompanies(companies);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return companiesList;
}