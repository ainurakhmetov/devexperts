import {useEffect, useMemo, useState} from "react";

import {useFetchCompanies} from "./useFetchCompanies";
import {ICompaniesListItem} from "../types";

interface ICompanyDataReturn {
    company: ICompaniesListItem;
    nearbyPlaces?: ICompaniesListItem[];
    isLoading: boolean;
}

export const useCompanyData = (name: string): ICompanyDataReturn => {
    const [nearbyPlaces, setNearbyPlaces] = useState<ICompaniesListItem[]>([]);

    const { companiesList, isLoading } = useFetchCompanies();
    const company = useMemo(() =>
            companiesList?.find((item) => item?.name.toLowerCase() === name ) as ICompaniesListItem,
        [companiesList, name]);

    useEffect(() => {
        const country = company?.address?.country;

        const nearbyList = companiesList?.filter((curCompany) => {
            return curCompany?.address?.country === country && curCompany?.id !== company?.id;
        });

        if (nearbyList?.length > 0) {
            setNearbyPlaces(nearbyList);
        }
    }, [company, companiesList]);

    return { company, nearbyPlaces, isLoading };
}