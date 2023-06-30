import { useQuery, gql } from "@apollo/client";
import {LocationQueryListResponse} from '../query/getLocationList.gql'

export const useGetLocationaList =  ( tenant:string )=>{
 
    const { data, loading, error } = useQuery(LocationQueryListResponse, {
        variables: { tenant: tenant },
      });

      return data

}