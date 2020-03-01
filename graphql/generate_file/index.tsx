import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type City = {
   __typename?: 'City',
  id: Scalars['ID'],
  name: Scalars['String'],
  slug: Scalars['String'],
  country: Country,
  type: Scalars['String'],
  jobs?: Maybe<Array<Job>>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type CityJobsArgs = {
  where?: Maybe<JobWhereInput>,
  orderBy?: Maybe<JobOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum CityOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CityWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slug_not?: Maybe<Scalars['String']>,
  slug_in?: Maybe<Array<Scalars['String']>>,
  slug_not_in?: Maybe<Array<Scalars['String']>>,
  slug_lt?: Maybe<Scalars['String']>,
  slug_lte?: Maybe<Scalars['String']>,
  slug_gt?: Maybe<Scalars['String']>,
  slug_gte?: Maybe<Scalars['String']>,
  slug_contains?: Maybe<Scalars['String']>,
  slug_not_contains?: Maybe<Scalars['String']>,
  slug_starts_with?: Maybe<Scalars['String']>,
  slug_not_starts_with?: Maybe<Scalars['String']>,
  slug_ends_with?: Maybe<Scalars['String']>,
  slug_not_ends_with?: Maybe<Scalars['String']>,
  country?: Maybe<CountryWhereInput>,
  type?: Maybe<Scalars['String']>,
  type_not?: Maybe<Scalars['String']>,
  type_in?: Maybe<Array<Scalars['String']>>,
  type_not_in?: Maybe<Array<Scalars['String']>>,
  type_lt?: Maybe<Scalars['String']>,
  type_lte?: Maybe<Scalars['String']>,
  type_gt?: Maybe<Scalars['String']>,
  type_gte?: Maybe<Scalars['String']>,
  type_contains?: Maybe<Scalars['String']>,
  type_not_contains?: Maybe<Scalars['String']>,
  type_starts_with?: Maybe<Scalars['String']>,
  type_not_starts_with?: Maybe<Scalars['String']>,
  type_ends_with?: Maybe<Scalars['String']>,
  type_not_ends_with?: Maybe<Scalars['String']>,
  jobs_every?: Maybe<JobWhereInput>,
  jobs_some?: Maybe<JobWhereInput>,
  jobs_none?: Maybe<JobWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<CityWhereInput>>,
  OR?: Maybe<Array<CityWhereInput>>,
  NOT?: Maybe<Array<CityWhereInput>>,
};

export type Commitment = {
   __typename?: 'Commitment',
  id: Scalars['ID'],
  title: Scalars['String'],
  slug: Scalars['String'],
  jobs?: Maybe<Array<Job>>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type CommitmentJobsArgs = {
  where?: Maybe<JobWhereInput>,
  orderBy?: Maybe<JobOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type CommitmentWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slug_not?: Maybe<Scalars['String']>,
  slug_in?: Maybe<Array<Scalars['String']>>,
  slug_not_in?: Maybe<Array<Scalars['String']>>,
  slug_lt?: Maybe<Scalars['String']>,
  slug_lte?: Maybe<Scalars['String']>,
  slug_gt?: Maybe<Scalars['String']>,
  slug_gte?: Maybe<Scalars['String']>,
  slug_contains?: Maybe<Scalars['String']>,
  slug_not_contains?: Maybe<Scalars['String']>,
  slug_starts_with?: Maybe<Scalars['String']>,
  slug_not_starts_with?: Maybe<Scalars['String']>,
  slug_ends_with?: Maybe<Scalars['String']>,
  slug_not_ends_with?: Maybe<Scalars['String']>,
  jobs_every?: Maybe<JobWhereInput>,
  jobs_some?: Maybe<JobWhereInput>,
  jobs_none?: Maybe<JobWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<CommitmentWhereInput>>,
  OR?: Maybe<Array<CommitmentWhereInput>>,
  NOT?: Maybe<Array<CommitmentWhereInput>>,
};

export type Company = {
   __typename?: 'Company',
  id: Scalars['ID'],
  name: Scalars['String'],
  slug: Scalars['String'],
  websiteUrl: Scalars['String'],
  logoUrl?: Maybe<Scalars['String']>,
  jobs?: Maybe<Array<Job>>,
  twitter?: Maybe<Scalars['String']>,
  emailed?: Maybe<Scalars['Boolean']>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type CompanyJobsArgs = {
  where?: Maybe<JobWhereInput>,
  orderBy?: Maybe<JobOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type CompanyWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slug_not?: Maybe<Scalars['String']>,
  slug_in?: Maybe<Array<Scalars['String']>>,
  slug_not_in?: Maybe<Array<Scalars['String']>>,
  slug_lt?: Maybe<Scalars['String']>,
  slug_lte?: Maybe<Scalars['String']>,
  slug_gt?: Maybe<Scalars['String']>,
  slug_gte?: Maybe<Scalars['String']>,
  slug_contains?: Maybe<Scalars['String']>,
  slug_not_contains?: Maybe<Scalars['String']>,
  slug_starts_with?: Maybe<Scalars['String']>,
  slug_not_starts_with?: Maybe<Scalars['String']>,
  slug_ends_with?: Maybe<Scalars['String']>,
  slug_not_ends_with?: Maybe<Scalars['String']>,
  websiteUrl?: Maybe<Scalars['String']>,
  websiteUrl_not?: Maybe<Scalars['String']>,
  websiteUrl_in?: Maybe<Array<Scalars['String']>>,
  websiteUrl_not_in?: Maybe<Array<Scalars['String']>>,
  websiteUrl_lt?: Maybe<Scalars['String']>,
  websiteUrl_lte?: Maybe<Scalars['String']>,
  websiteUrl_gt?: Maybe<Scalars['String']>,
  websiteUrl_gte?: Maybe<Scalars['String']>,
  websiteUrl_contains?: Maybe<Scalars['String']>,
  websiteUrl_not_contains?: Maybe<Scalars['String']>,
  websiteUrl_starts_with?: Maybe<Scalars['String']>,
  websiteUrl_not_starts_with?: Maybe<Scalars['String']>,
  websiteUrl_ends_with?: Maybe<Scalars['String']>,
  websiteUrl_not_ends_with?: Maybe<Scalars['String']>,
  logoUrl?: Maybe<Scalars['String']>,
  logoUrl_not?: Maybe<Scalars['String']>,
  logoUrl_in?: Maybe<Array<Scalars['String']>>,
  logoUrl_not_in?: Maybe<Array<Scalars['String']>>,
  logoUrl_lt?: Maybe<Scalars['String']>,
  logoUrl_lte?: Maybe<Scalars['String']>,
  logoUrl_gt?: Maybe<Scalars['String']>,
  logoUrl_gte?: Maybe<Scalars['String']>,
  logoUrl_contains?: Maybe<Scalars['String']>,
  logoUrl_not_contains?: Maybe<Scalars['String']>,
  logoUrl_starts_with?: Maybe<Scalars['String']>,
  logoUrl_not_starts_with?: Maybe<Scalars['String']>,
  logoUrl_ends_with?: Maybe<Scalars['String']>,
  logoUrl_not_ends_with?: Maybe<Scalars['String']>,
  jobs_every?: Maybe<JobWhereInput>,
  jobs_some?: Maybe<JobWhereInput>,
  jobs_none?: Maybe<JobWhereInput>,
  twitter?: Maybe<Scalars['String']>,
  twitter_not?: Maybe<Scalars['String']>,
  twitter_in?: Maybe<Array<Scalars['String']>>,
  twitter_not_in?: Maybe<Array<Scalars['String']>>,
  twitter_lt?: Maybe<Scalars['String']>,
  twitter_lte?: Maybe<Scalars['String']>,
  twitter_gt?: Maybe<Scalars['String']>,
  twitter_gte?: Maybe<Scalars['String']>,
  twitter_contains?: Maybe<Scalars['String']>,
  twitter_not_contains?: Maybe<Scalars['String']>,
  twitter_starts_with?: Maybe<Scalars['String']>,
  twitter_not_starts_with?: Maybe<Scalars['String']>,
  twitter_ends_with?: Maybe<Scalars['String']>,
  twitter_not_ends_with?: Maybe<Scalars['String']>,
  emailed?: Maybe<Scalars['Boolean']>,
  emailed_not?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<CompanyWhereInput>>,
  OR?: Maybe<Array<CompanyWhereInput>>,
  NOT?: Maybe<Array<CompanyWhereInput>>,
};

export type Country = {
   __typename?: 'Country',
  id: Scalars['ID'],
  name: Scalars['String'],
  slug: Scalars['String'],
  type: Scalars['String'],
  isoCode?: Maybe<Scalars['String']>,
  cities?: Maybe<Array<City>>,
  jobs?: Maybe<Array<Job>>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type CountryCitiesArgs = {
  where?: Maybe<CityWhereInput>,
  orderBy?: Maybe<CityOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CountryJobsArgs = {
  where?: Maybe<JobWhereInput>,
  orderBy?: Maybe<JobOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum CountryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  IsoCodeAsc = 'isoCode_ASC',
  IsoCodeDesc = 'isoCode_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CountryWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slug_not?: Maybe<Scalars['String']>,
  slug_in?: Maybe<Array<Scalars['String']>>,
  slug_not_in?: Maybe<Array<Scalars['String']>>,
  slug_lt?: Maybe<Scalars['String']>,
  slug_lte?: Maybe<Scalars['String']>,
  slug_gt?: Maybe<Scalars['String']>,
  slug_gte?: Maybe<Scalars['String']>,
  slug_contains?: Maybe<Scalars['String']>,
  slug_not_contains?: Maybe<Scalars['String']>,
  slug_starts_with?: Maybe<Scalars['String']>,
  slug_not_starts_with?: Maybe<Scalars['String']>,
  slug_ends_with?: Maybe<Scalars['String']>,
  slug_not_ends_with?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  type_not?: Maybe<Scalars['String']>,
  type_in?: Maybe<Array<Scalars['String']>>,
  type_not_in?: Maybe<Array<Scalars['String']>>,
  type_lt?: Maybe<Scalars['String']>,
  type_lte?: Maybe<Scalars['String']>,
  type_gt?: Maybe<Scalars['String']>,
  type_gte?: Maybe<Scalars['String']>,
  type_contains?: Maybe<Scalars['String']>,
  type_not_contains?: Maybe<Scalars['String']>,
  type_starts_with?: Maybe<Scalars['String']>,
  type_not_starts_with?: Maybe<Scalars['String']>,
  type_ends_with?: Maybe<Scalars['String']>,
  type_not_ends_with?: Maybe<Scalars['String']>,
  isoCode?: Maybe<Scalars['String']>,
  isoCode_not?: Maybe<Scalars['String']>,
  isoCode_in?: Maybe<Array<Scalars['String']>>,
  isoCode_not_in?: Maybe<Array<Scalars['String']>>,
  isoCode_lt?: Maybe<Scalars['String']>,
  isoCode_lte?: Maybe<Scalars['String']>,
  isoCode_gt?: Maybe<Scalars['String']>,
  isoCode_gte?: Maybe<Scalars['String']>,
  isoCode_contains?: Maybe<Scalars['String']>,
  isoCode_not_contains?: Maybe<Scalars['String']>,
  isoCode_starts_with?: Maybe<Scalars['String']>,
  isoCode_not_starts_with?: Maybe<Scalars['String']>,
  isoCode_ends_with?: Maybe<Scalars['String']>,
  isoCode_not_ends_with?: Maybe<Scalars['String']>,
  cities_every?: Maybe<CityWhereInput>,
  cities_some?: Maybe<CityWhereInput>,
  cities_none?: Maybe<CityWhereInput>,
  jobs_every?: Maybe<JobWhereInput>,
  jobs_some?: Maybe<JobWhereInput>,
  jobs_none?: Maybe<JobWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<CountryWhereInput>>,
  OR?: Maybe<Array<CountryWhereInput>>,
  NOT?: Maybe<Array<CountryWhereInput>>,
};


export type Job = {
   __typename?: 'Job',
  id: Scalars['ID'],
  title: Scalars['String'],
  slug: Scalars['String'],
  commitment: Commitment,
  cities?: Maybe<Array<City>>,
  countries?: Maybe<Array<Country>>,
  remotes?: Maybe<Array<Remote>>,
  description?: Maybe<Scalars['String']>,
  applyUrl?: Maybe<Scalars['String']>,
  company?: Maybe<Company>,
  tags?: Maybe<Array<Tag>>,
  isPublished?: Maybe<Scalars['Boolean']>,
  isFeatured?: Maybe<Scalars['Boolean']>,
  locationNames?: Maybe<Scalars['String']>,
  userEmail?: Maybe<Scalars['String']>,
  postedAt: Scalars['DateTime'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type JobCitiesArgs = {
  where?: Maybe<CityWhereInput>,
  orderBy?: Maybe<CityOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type JobCountriesArgs = {
  where?: Maybe<CountryWhereInput>,
  orderBy?: Maybe<CountryOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type JobRemotesArgs = {
  where?: Maybe<RemoteWhereInput>,
  orderBy?: Maybe<RemoteOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type JobTagsArgs = {
  where?: Maybe<TagWhereInput>,
  orderBy?: Maybe<TagOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type JobInput = {
  companySlug: Scalars['String'],
  jobSlug: Scalars['String'],
};

export enum JobOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ApplyUrlAsc = 'applyUrl_ASC',
  ApplyUrlDesc = 'applyUrl_DESC',
  IsPublishedAsc = 'isPublished_ASC',
  IsPublishedDesc = 'isPublished_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  LocationNamesAsc = 'locationNames_ASC',
  LocationNamesDesc = 'locationNames_DESC',
  UserEmailAsc = 'userEmail_ASC',
  UserEmailDesc = 'userEmail_DESC',
  PostedAtAsc = 'postedAt_ASC',
  PostedAtDesc = 'postedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type JobsInput = {
  type?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type JobWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slug_not?: Maybe<Scalars['String']>,
  slug_in?: Maybe<Array<Scalars['String']>>,
  slug_not_in?: Maybe<Array<Scalars['String']>>,
  slug_lt?: Maybe<Scalars['String']>,
  slug_lte?: Maybe<Scalars['String']>,
  slug_gt?: Maybe<Scalars['String']>,
  slug_gte?: Maybe<Scalars['String']>,
  slug_contains?: Maybe<Scalars['String']>,
  slug_not_contains?: Maybe<Scalars['String']>,
  slug_starts_with?: Maybe<Scalars['String']>,
  slug_not_starts_with?: Maybe<Scalars['String']>,
  slug_ends_with?: Maybe<Scalars['String']>,
  slug_not_ends_with?: Maybe<Scalars['String']>,
  commitment?: Maybe<CommitmentWhereInput>,
  cities_every?: Maybe<CityWhereInput>,
  cities_some?: Maybe<CityWhereInput>,
  cities_none?: Maybe<CityWhereInput>,
  countries_every?: Maybe<CountryWhereInput>,
  countries_some?: Maybe<CountryWhereInput>,
  countries_none?: Maybe<CountryWhereInput>,
  remotes_every?: Maybe<RemoteWhereInput>,
  remotes_some?: Maybe<RemoteWhereInput>,
  remotes_none?: Maybe<RemoteWhereInput>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  applyUrl?: Maybe<Scalars['String']>,
  applyUrl_not?: Maybe<Scalars['String']>,
  applyUrl_in?: Maybe<Array<Scalars['String']>>,
  applyUrl_not_in?: Maybe<Array<Scalars['String']>>,
  applyUrl_lt?: Maybe<Scalars['String']>,
  applyUrl_lte?: Maybe<Scalars['String']>,
  applyUrl_gt?: Maybe<Scalars['String']>,
  applyUrl_gte?: Maybe<Scalars['String']>,
  applyUrl_contains?: Maybe<Scalars['String']>,
  applyUrl_not_contains?: Maybe<Scalars['String']>,
  applyUrl_starts_with?: Maybe<Scalars['String']>,
  applyUrl_not_starts_with?: Maybe<Scalars['String']>,
  applyUrl_ends_with?: Maybe<Scalars['String']>,
  applyUrl_not_ends_with?: Maybe<Scalars['String']>,
  company?: Maybe<CompanyWhereInput>,
  tags_every?: Maybe<TagWhereInput>,
  tags_some?: Maybe<TagWhereInput>,
  tags_none?: Maybe<TagWhereInput>,
  isPublished?: Maybe<Scalars['Boolean']>,
  isPublished_not?: Maybe<Scalars['Boolean']>,
  isFeatured?: Maybe<Scalars['Boolean']>,
  isFeatured_not?: Maybe<Scalars['Boolean']>,
  locationNames?: Maybe<Scalars['String']>,
  locationNames_not?: Maybe<Scalars['String']>,
  locationNames_in?: Maybe<Array<Scalars['String']>>,
  locationNames_not_in?: Maybe<Array<Scalars['String']>>,
  locationNames_lt?: Maybe<Scalars['String']>,
  locationNames_lte?: Maybe<Scalars['String']>,
  locationNames_gt?: Maybe<Scalars['String']>,
  locationNames_gte?: Maybe<Scalars['String']>,
  locationNames_contains?: Maybe<Scalars['String']>,
  locationNames_not_contains?: Maybe<Scalars['String']>,
  locationNames_starts_with?: Maybe<Scalars['String']>,
  locationNames_not_starts_with?: Maybe<Scalars['String']>,
  locationNames_ends_with?: Maybe<Scalars['String']>,
  locationNames_not_ends_with?: Maybe<Scalars['String']>,
  userEmail?: Maybe<Scalars['String']>,
  userEmail_not?: Maybe<Scalars['String']>,
  userEmail_in?: Maybe<Array<Scalars['String']>>,
  userEmail_not_in?: Maybe<Array<Scalars['String']>>,
  userEmail_lt?: Maybe<Scalars['String']>,
  userEmail_lte?: Maybe<Scalars['String']>,
  userEmail_gt?: Maybe<Scalars['String']>,
  userEmail_gte?: Maybe<Scalars['String']>,
  userEmail_contains?: Maybe<Scalars['String']>,
  userEmail_not_contains?: Maybe<Scalars['String']>,
  userEmail_starts_with?: Maybe<Scalars['String']>,
  userEmail_not_starts_with?: Maybe<Scalars['String']>,
  userEmail_ends_with?: Maybe<Scalars['String']>,
  userEmail_not_ends_with?: Maybe<Scalars['String']>,
  postedAt?: Maybe<Scalars['DateTime']>,
  postedAt_not?: Maybe<Scalars['DateTime']>,
  postedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  postedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  postedAt_lt?: Maybe<Scalars['DateTime']>,
  postedAt_lte?: Maybe<Scalars['DateTime']>,
  postedAt_gt?: Maybe<Scalars['DateTime']>,
  postedAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<JobWhereInput>>,
  OR?: Maybe<Array<JobWhereInput>>,
  NOT?: Maybe<Array<JobWhereInput>>,
};

export type Location = {
   __typename?: 'Location',
  id: Scalars['ID'],
  slug: Scalars['String'],
  name: Scalars['String'],
  type: Scalars['String'],
};

export type LocationInput = {
  slug: Scalars['String'],
};

export type LocationsInput = {
  value: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  subscribe: User,
  postJob: Job,
  updateJob: Job,
  updateCompany: Company,
};


export type MutationSubscribeArgs = {
  input: SubscribeInput
};


export type MutationPostJobArgs = {
  input: PostJobInput
};


export type MutationUpdateJobArgs = {
  input: UpdateJobInput,
  adminSecret: Scalars['String']
};


export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput,
  adminSecret: Scalars['String']
};

export type PostJobInput = {
  title: Scalars['String'],
  commitmentId: Scalars['ID'],
  companyName: Scalars['String'],
  locationNames: Scalars['String'],
  userEmail: Scalars['String'],
  description: Scalars['String'],
  applyUrl: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  jobs: Array<Job>,
  job: Job,
  locations: Array<Location>,
  city: City,
  country: Country,
  remote: Remote,
  commitments: Array<Commitment>,
  cities: Array<City>,
  countries: Array<Country>,
  remotes: Array<Remote>,
  companies: Array<Company>,
};


export type QueryJobsArgs = {
  input?: Maybe<JobsInput>
};


export type QueryJobArgs = {
  input: JobInput
};


export type QueryLocationsArgs = {
  input: LocationsInput
};


export type QueryCityArgs = {
  input: LocationInput
};


export type QueryCountryArgs = {
  input: LocationInput
};


export type QueryRemoteArgs = {
  input: LocationInput
};

export type Remote = {
   __typename?: 'Remote',
  id: Scalars['ID'],
  name: Scalars['String'],
  slug: Scalars['String'],
  type: Scalars['String'],
  jobs?: Maybe<Array<Job>>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type RemoteJobsArgs = {
  where?: Maybe<JobWhereInput>,
  orderBy?: Maybe<JobOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum RemoteOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type RemoteWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slug_not?: Maybe<Scalars['String']>,
  slug_in?: Maybe<Array<Scalars['String']>>,
  slug_not_in?: Maybe<Array<Scalars['String']>>,
  slug_lt?: Maybe<Scalars['String']>,
  slug_lte?: Maybe<Scalars['String']>,
  slug_gt?: Maybe<Scalars['String']>,
  slug_gte?: Maybe<Scalars['String']>,
  slug_contains?: Maybe<Scalars['String']>,
  slug_not_contains?: Maybe<Scalars['String']>,
  slug_starts_with?: Maybe<Scalars['String']>,
  slug_not_starts_with?: Maybe<Scalars['String']>,
  slug_ends_with?: Maybe<Scalars['String']>,
  slug_not_ends_with?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  type_not?: Maybe<Scalars['String']>,
  type_in?: Maybe<Array<Scalars['String']>>,
  type_not_in?: Maybe<Array<Scalars['String']>>,
  type_lt?: Maybe<Scalars['String']>,
  type_lte?: Maybe<Scalars['String']>,
  type_gt?: Maybe<Scalars['String']>,
  type_gte?: Maybe<Scalars['String']>,
  type_contains?: Maybe<Scalars['String']>,
  type_not_contains?: Maybe<Scalars['String']>,
  type_starts_with?: Maybe<Scalars['String']>,
  type_not_starts_with?: Maybe<Scalars['String']>,
  type_ends_with?: Maybe<Scalars['String']>,
  type_not_ends_with?: Maybe<Scalars['String']>,
  jobs_every?: Maybe<JobWhereInput>,
  jobs_some?: Maybe<JobWhereInput>,
  jobs_none?: Maybe<JobWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<RemoteWhereInput>>,
  OR?: Maybe<Array<RemoteWhereInput>>,
  NOT?: Maybe<Array<RemoteWhereInput>>,
};

export type SubscribeInput = {
  name: Scalars['String'],
  email: Scalars['String'],
};

export type Tag = {
   __typename?: 'Tag',
  id: Scalars['ID'],
  name: Scalars['String'],
  slug: Scalars['String'],
  jobs?: Maybe<Array<Job>>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type TagJobsArgs = {
  where?: Maybe<JobWhereInput>,
  orderBy?: Maybe<JobOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export enum TagOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TagWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  slug_not?: Maybe<Scalars['String']>,
  slug_in?: Maybe<Array<Scalars['String']>>,
  slug_not_in?: Maybe<Array<Scalars['String']>>,
  slug_lt?: Maybe<Scalars['String']>,
  slug_lte?: Maybe<Scalars['String']>,
  slug_gt?: Maybe<Scalars['String']>,
  slug_gte?: Maybe<Scalars['String']>,
  slug_contains?: Maybe<Scalars['String']>,
  slug_not_contains?: Maybe<Scalars['String']>,
  slug_starts_with?: Maybe<Scalars['String']>,
  slug_not_starts_with?: Maybe<Scalars['String']>,
  slug_ends_with?: Maybe<Scalars['String']>,
  slug_not_ends_with?: Maybe<Scalars['String']>,
  jobs_every?: Maybe<JobWhereInput>,
  jobs_some?: Maybe<JobWhereInput>,
  jobs_none?: Maybe<JobWhereInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  AND?: Maybe<Array<TagWhereInput>>,
  OR?: Maybe<Array<TagWhereInput>>,
  NOT?: Maybe<Array<TagWhereInput>>,
};

export type UpdateCompanyInput = {
  id: Scalars['ID'],
  logoUrl: Scalars['String'],
};

export type UpdateJobInput = {
  id: Scalars['ID'],
  description: Scalars['String'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  email: Scalars['String'],
  subscribe: Scalars['Boolean'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type GetAllQueryVariables = {};


export type GetAllQuery = (
  { __typename?: 'Query' }
  & { cities: Array<(
    { __typename?: 'City' }
    & CityFragment
  )> }
);

export type CityFragment = (
  { __typename?: 'City' }
  & Pick<City, 'id' | 'name' | 'slug' | 'type' | 'createdAt' | 'updatedAt'>
);

export type GetCitiesQueryVariables = {};


export type GetCitiesQuery = (
  { __typename?: 'Query' }
  & { cities: Array<(
    { __typename?: 'City' }
    & CityFragment
  )> }
);

export type CountryFragment = (
  { __typename?: 'Country' }
  & Pick<Country, 'id' | 'name' | 'slug' | 'type' | 'isoCode' | 'createdAt' | 'updatedAt'>
  & { cities: Maybe<Array<(
    { __typename?: 'City' }
    & CityFragment
  )>> }
);

export type CompanyFragment = (
  { __typename?: 'Company' }
  & Pick<Company, 'id' | 'name' | 'slug' | 'websiteUrl' | 'logoUrl' | 'twitter' | 'emailed' | 'createdAt' | 'updatedAt'>
);

export type TagFragment = (
  { __typename?: 'Tag' }
  & Pick<Tag, 'id' | 'name' | 'slug' | 'createdAt' | 'updatedAt'>
);

export type CommitmentFragment = (
  { __typename?: 'Commitment' }
  & Pick<Commitment, 'id' | 'title' | 'slug' | 'createdAt' | 'updatedAt'>
);

export type RemoteFragment = (
  { __typename?: 'Remote' }
  & Pick<Remote, 'id' | 'name' | 'slug' | 'type' | 'createdAt' | 'updatedAt'>
);

export type JobFragment = (
  { __typename?: 'Job' }
  & Pick<Job, 'id' | 'title' | 'slug' | 'description' | 'applyUrl' | 'isPublished' | 'isFeatured' | 'locationNames' | 'userEmail' | 'postedAt' | 'createdAt' | 'updatedAt'>
  & { commitment: (
    { __typename?: 'Commitment' }
    & CommitmentFragment
  ), cities: Maybe<Array<(
    { __typename?: 'City' }
    & CityFragment
  )>>, countries: Maybe<Array<(
    { __typename?: 'Country' }
    & CountryFragment
  )>>, remotes: Maybe<Array<(
    { __typename?: 'Remote' }
    & RemoteFragment
  )>>, company: Maybe<(
    { __typename?: 'Company' }
    & CompanyFragment
  )>, tags: Maybe<Array<(
    { __typename?: 'Tag' }
    & TagFragment
  )>> }
);

export type JobsFragment = (
  { __typename?: 'Job' }
  & Pick<Job, 'updatedAt' | 'title' | 'slug' | 'locationNames'>
  & { tags: Maybe<Array<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'name'>
  )>>, company: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'slug'>
  )> }
);

export type GetJobQueryVariables = {
  companySlug: Scalars['String'],
  jobSlug: Scalars['String']
};


export type GetJobQuery = (
  { __typename?: 'Query' }
  & { job: (
    { __typename?: 'Job' }
    & JobFragment
  ) }
);

export type GetJobsQueryVariables = {};


export type GetJobsQuery = (
  { __typename?: 'Query' }
  & { jobs: Array<(
    { __typename?: 'Job' }
    & JobsFragment
  )> }
);

export const CommitmentFragmentDoc = gql`
    fragment Commitment on Commitment {
  id
  title
  slug
  createdAt
  updatedAt
}
    `;
export const CityFragmentDoc = gql`
    fragment City on City {
  id
  name
  slug
  type
  createdAt
  updatedAt
}
    `;
export const CountryFragmentDoc = gql`
    fragment Country on Country {
  id
  name
  slug
  type
  isoCode
  cities {
    ...City
  }
  createdAt
  updatedAt
}
    ${CityFragmentDoc}`;
export const RemoteFragmentDoc = gql`
    fragment Remote on Remote {
  id
  name
  slug
  type
  createdAt
  updatedAt
}
    `;
export const CompanyFragmentDoc = gql`
    fragment Company on Company {
  id
  name
  slug
  websiteUrl
  logoUrl
  twitter
  emailed
  createdAt
  updatedAt
}
    `;
export const TagFragmentDoc = gql`
    fragment Tag on Tag {
  id
  name
  slug
  createdAt
  updatedAt
}
    `;
export const JobFragmentDoc = gql`
    fragment Job on Job {
  id
  title
  slug
  commitment {
    ...Commitment
  }
  cities {
    ...City
  }
  countries {
    ...Country
  }
  remotes {
    ...Remote
  }
  description
  applyUrl
  company {
    ...Company
  }
  tags {
    ...Tag
  }
  isPublished
  isFeatured
  locationNames
  userEmail
  postedAt
  createdAt
  updatedAt
}
    ${CommitmentFragmentDoc}
${CityFragmentDoc}
${CountryFragmentDoc}
${RemoteFragmentDoc}
${CompanyFragmentDoc}
${TagFragmentDoc}`;
export const JobsFragmentDoc = gql`
    fragment Jobs on Job {
  updatedAt
  title
  slug
  locationNames
  tags {
    name
  }
  company {
    slug
  }
}
    `;
export const GetAllDocument = gql`
    query GetAll {
  cities {
    ...City
  }
}
    ${CityFragmentDoc}`;
export type GetAllComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllQuery, GetAllQueryVariables>, 'query'>;

    export const GetAllComponent = (props: GetAllComponentProps) => (
      <ApolloReactComponents.Query<GetAllQuery, GetAllQueryVariables> query={GetAllDocument} {...props} />
    );
    
export type GetAllProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetAllQuery, GetAllQueryVariables> & TChildProps;
export function withGetAll<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllQuery,
  GetAllQueryVariables,
  GetAllProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllQuery, GetAllQueryVariables, GetAllProps<TChildProps>>(GetAllDocument, {
      alias: 'getAll',
      ...operationOptions
    });
};
export type GetAllQueryResult = ApolloReactCommon.QueryResult<GetAllQuery, GetAllQueryVariables>;
export const GetCitiesDocument = gql`
    query GetCities {
  cities {
    ...City
  }
}
    ${CityFragmentDoc}`;
export type GetCitiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCitiesQuery, GetCitiesQueryVariables>, 'query'>;

    export const GetCitiesComponent = (props: GetCitiesComponentProps) => (
      <ApolloReactComponents.Query<GetCitiesQuery, GetCitiesQueryVariables> query={GetCitiesDocument} {...props} />
    );
    
export type GetCitiesProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetCitiesQuery, GetCitiesQueryVariables> & TChildProps;
export function withGetCities<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCitiesQuery,
  GetCitiesQueryVariables,
  GetCitiesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetCitiesQuery, GetCitiesQueryVariables, GetCitiesProps<TChildProps>>(GetCitiesDocument, {
      alias: 'getCities',
      ...operationOptions
    });
};
export type GetCitiesQueryResult = ApolloReactCommon.QueryResult<GetCitiesQuery, GetCitiesQueryVariables>;
export const GetJobDocument = gql`
    query GetJob($companySlug: String!, $jobSlug: String!) {
  job(input: {companySlug: $companySlug, jobSlug: $jobSlug}) {
    ...Job
  }
}
    ${JobFragmentDoc}`;
export type GetJobComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetJobQuery, GetJobQueryVariables>, 'query'> & ({ variables: GetJobQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetJobComponent = (props: GetJobComponentProps) => (
      <ApolloReactComponents.Query<GetJobQuery, GetJobQueryVariables> query={GetJobDocument} {...props} />
    );
    
export type GetJobProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetJobQuery, GetJobQueryVariables> & TChildProps;
export function withGetJob<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetJobQuery,
  GetJobQueryVariables,
  GetJobProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetJobQuery, GetJobQueryVariables, GetJobProps<TChildProps>>(GetJobDocument, {
      alias: 'getJob',
      ...operationOptions
    });
};
export type GetJobQueryResult = ApolloReactCommon.QueryResult<GetJobQuery, GetJobQueryVariables>;
export const GetJobsDocument = gql`
    query GetJobs {
  jobs {
    ...Jobs
  }
}
    ${JobsFragmentDoc}`;
export type GetJobsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetJobsQuery, GetJobsQueryVariables>, 'query'>;

    export const GetJobsComponent = (props: GetJobsComponentProps) => (
      <ApolloReactComponents.Query<GetJobsQuery, GetJobsQueryVariables> query={GetJobsDocument} {...props} />
    );
    
export type GetJobsProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetJobsQuery, GetJobsQueryVariables> & TChildProps;
export function withGetJobs<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetJobsQuery,
  GetJobsQueryVariables,
  GetJobsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetJobsQuery, GetJobsQueryVariables, GetJobsProps<TChildProps>>(GetJobsDocument, {
      alias: 'getJobs',
      ...operationOptions
    });
};
export type GetJobsQueryResult = ApolloReactCommon.QueryResult<GetJobsQuery, GetJobsQueryVariables>;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  JobsInput: JobsInput,
  String: ResolverTypeWrapper<Scalars['String']>,
  Job: ResolverTypeWrapper<Job>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Commitment: ResolverTypeWrapper<Commitment>,
  JobWhereInput: JobWhereInput,
  CommitmentWhereInput: CommitmentWhereInput,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  CityWhereInput: CityWhereInput,
  CountryWhereInput: CountryWhereInput,
  RemoteWhereInput: RemoteWhereInput,
  CompanyWhereInput: CompanyWhereInput,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  TagWhereInput: TagWhereInput,
  JobOrderByInput: JobOrderByInput,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  CityOrderByInput: CityOrderByInput,
  City: ResolverTypeWrapper<City>,
  Country: ResolverTypeWrapper<Country>,
  CountryOrderByInput: CountryOrderByInput,
  RemoteOrderByInput: RemoteOrderByInput,
  Remote: ResolverTypeWrapper<Remote>,
  Company: ResolverTypeWrapper<Company>,
  TagOrderByInput: TagOrderByInput,
  Tag: ResolverTypeWrapper<Tag>,
  JobInput: JobInput,
  LocationsInput: LocationsInput,
  Location: ResolverTypeWrapper<Location>,
  LocationInput: LocationInput,
  Mutation: ResolverTypeWrapper<{}>,
  SubscribeInput: SubscribeInput,
  User: ResolverTypeWrapper<User>,
  PostJobInput: PostJobInput,
  UpdateJobInput: UpdateJobInput,
  UpdateCompanyInput: UpdateCompanyInput,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  JobsInput: JobsInput,
  String: Scalars['String'],
  Job: Job,
  ID: Scalars['ID'],
  Commitment: Commitment,
  JobWhereInput: JobWhereInput,
  CommitmentWhereInput: CommitmentWhereInput,
  DateTime: Scalars['DateTime'],
  CityWhereInput: CityWhereInput,
  CountryWhereInput: CountryWhereInput,
  RemoteWhereInput: RemoteWhereInput,
  CompanyWhereInput: CompanyWhereInput,
  Boolean: Scalars['Boolean'],
  TagWhereInput: TagWhereInput,
  JobOrderByInput: JobOrderByInput,
  Int: Scalars['Int'],
  CityOrderByInput: CityOrderByInput,
  City: City,
  Country: Country,
  CountryOrderByInput: CountryOrderByInput,
  RemoteOrderByInput: RemoteOrderByInput,
  Remote: Remote,
  Company: Company,
  TagOrderByInput: TagOrderByInput,
  Tag: Tag,
  JobInput: JobInput,
  LocationsInput: LocationsInput,
  Location: Location,
  LocationInput: LocationInput,
  Mutation: {},
  SubscribeInput: SubscribeInput,
  User: User,
  PostJobInput: PostJobInput,
  UpdateJobInput: UpdateJobInput,
  UpdateCompanyInput: UpdateCompanyInput,
};

export type CityResolvers<ContextType = any, ParentType extends ResolversParentTypes['City'] = ResolversParentTypes['City']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  country?: Resolver<ResolversTypes['Country'], ParentType, ContextType>,
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  jobs?: Resolver<Maybe<Array<ResolversTypes['Job']>>, ParentType, ContextType, CityJobsArgs>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CommitmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Commitment'] = ResolversParentTypes['Commitment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  jobs?: Resolver<Maybe<Array<ResolversTypes['Job']>>, ParentType, ContextType, CommitmentJobsArgs>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  websiteUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  logoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  jobs?: Resolver<Maybe<Array<ResolversTypes['Job']>>, ParentType, ContextType, CompanyJobsArgs>,
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  emailed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isoCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  cities?: Resolver<Maybe<Array<ResolversTypes['City']>>, ParentType, ContextType, CountryCitiesArgs>,
  jobs?: Resolver<Maybe<Array<ResolversTypes['Job']>>, ParentType, ContextType, CountryJobsArgs>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type JobResolvers<ContextType = any, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  commitment?: Resolver<ResolversTypes['Commitment'], ParentType, ContextType>,
  cities?: Resolver<Maybe<Array<ResolversTypes['City']>>, ParentType, ContextType, JobCitiesArgs>,
  countries?: Resolver<Maybe<Array<ResolversTypes['Country']>>, ParentType, ContextType, JobCountriesArgs>,
  remotes?: Resolver<Maybe<Array<ResolversTypes['Remote']>>, ParentType, ContextType, JobRemotesArgs>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  applyUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>,
  tags?: Resolver<Maybe<Array<ResolversTypes['Tag']>>, ParentType, ContextType, JobTagsArgs>,
  isPublished?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  isFeatured?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  locationNames?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  userEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  postedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  subscribe?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationSubscribeArgs, 'input'>>,
  postJob?: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationPostJobArgs, 'input'>>,
  updateJob?: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationUpdateJobArgs, 'input' | 'adminSecret'>>,
  updateCompany?: Resolver<ResolversTypes['Company'], ParentType, ContextType, RequireFields<MutationUpdateCompanyArgs, 'input' | 'adminSecret'>>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  jobs?: Resolver<Array<ResolversTypes['Job']>, ParentType, ContextType, QueryJobsArgs>,
  job?: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<QueryJobArgs, 'input'>>,
  locations?: Resolver<Array<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<QueryLocationsArgs, 'input'>>,
  city?: Resolver<ResolversTypes['City'], ParentType, ContextType, RequireFields<QueryCityArgs, 'input'>>,
  country?: Resolver<ResolversTypes['Country'], ParentType, ContextType, RequireFields<QueryCountryArgs, 'input'>>,
  remote?: Resolver<ResolversTypes['Remote'], ParentType, ContextType, RequireFields<QueryRemoteArgs, 'input'>>,
  commitments?: Resolver<Array<ResolversTypes['Commitment']>, ParentType, ContextType>,
  cities?: Resolver<Array<ResolversTypes['City']>, ParentType, ContextType>,
  countries?: Resolver<Array<ResolversTypes['Country']>, ParentType, ContextType>,
  remotes?: Resolver<Array<ResolversTypes['Remote']>, ParentType, ContextType>,
  companies?: Resolver<Array<ResolversTypes['Company']>, ParentType, ContextType>,
};

export type RemoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Remote'] = ResolversParentTypes['Remote']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  jobs?: Resolver<Maybe<Array<ResolversTypes['Job']>>, ParentType, ContextType, RemoteJobsArgs>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  jobs?: Resolver<Maybe<Array<ResolversTypes['Job']>>, ParentType, ContextType, TagJobsArgs>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  subscribe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  City?: CityResolvers<ContextType>,
  Commitment?: CommitmentResolvers<ContextType>,
  Company?: CompanyResolvers<ContextType>,
  Country?: CountryResolvers<ContextType>,
  DateTime?: GraphQLScalarType,
  Job?: JobResolvers<ContextType>,
  Location?: LocationResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Remote?: RemoteResolvers<ContextType>,
  Tag?: TagResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


// Generated in 2020-03-01T18:44:14+08:00

// Demo for nextjs with typescript graphql redux