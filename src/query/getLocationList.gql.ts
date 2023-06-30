import { gql } from "@apollo/client";
export const LocationQueryListResponse = gql`
query LocationQueryListResponse($tenant:String!){
    locationList (tenant:$tenant){
       resources{
        address
        alias
        description
        id
        managingOrganization
        name
        npi
        partOf
        status
        tag
        taxId
        telecom{
          system
          rank
          use
          value
        }
        tenant
        type
        updatedAt
      }
    }
  }
`;
