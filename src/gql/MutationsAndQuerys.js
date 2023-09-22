import { gql } from "@apollo/client";

export const LOGIN_COMPANY = gql`
  mutation loginCompany($input: LoginCompany) {
    companyLogin(input: $input) {
      token
    }
  }
`;

export const REGISTER_EMPLOYEE = gql`
  mutation ($input: RegisterEmployee) {
    registerEmployee(input: $input) {
      id
    }
  }
`;

export const LOGIN_EMPLOYEE = gql`
  mutation ($input: LoginEmployee) {
    employeeLogin(input: $input) {
      token
    }
  }
`;

export const GET_EMPLOYEE = gql`
  query getEmployees($idCompany: ID!) {
    getEmployees(idCompany: $idCompany) {
      id
      name
      userName
    }
  }
`;

export const GET_INFO_EMPLOYE = gql`
  query getInfoEmployee($userName: String!) {
    getInfoEmployee(userName: $userName) {
      id
      name
    }
  }
`;

export const GET_COMPANY = gql`
  query getCompanies($userName: String!) {
    getCompanies(userName: $userName) {
      userName
    }
  }
`;
