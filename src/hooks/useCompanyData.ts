import {useEffect, useState} from "react";

import {useFetchCompanies} from "./useFetchCompanies";
import {ICompaniesListItem} from "../types";

interface ICompanyDataReturn {
    company: ICompaniesListItem;
    nearbyPlaces?: ICompaniesListItem[];
}

export const useCompanyData = (name: string): ICompanyDataReturn => {
    const [nearbyPlaces, setNearbyPlaces] = useState<ICompaniesListItem[]>([]);

    const companies = useFetchCompanies();
    const company = companies?.find((item) => item?.name.toLowerCase() === name ) as ICompaniesListItem

    useEffect(() => {
        const country = company?.address?.country;

        const nearbyList = companies?.filter((curCompany) => {
            return curCompany?.address?.country === country && curCompany?.id !== company?.id;
        });

        if (nearbyList?.length > 0) {
            setNearbyPlaces(nearbyList);
        }
    }, [company, companies]);

    return { company, nearbyPlaces };
}