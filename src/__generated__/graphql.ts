/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateZellerCustomerInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

export type DeleteZellerCustomerInput = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createZellerCustomer?: Maybe<ZellerCustomer>;
  deleteZellerCustomer?: Maybe<ZellerCustomer>;
  updateZellerCustomer?: Maybe<ZellerCustomer>;
};


export type MutationCreateZellerCustomerArgs = {
  input: CreateZellerCustomerInput;
};


export type MutationDeleteZellerCustomerArgs = {
  input: DeleteZellerCustomerInput;
};


export type MutationUpdateZellerCustomerArgs = {
  input: UpdateZellerCustomerInput;
};

export type Query = {
  __typename?: 'Query';
  getZellerCustomer?: Maybe<ZellerCustomer>;
  listZellerCustomers?: Maybe<ZellerCustomerConnection>;
};


export type QueryGetZellerCustomerArgs = {
  id: Scalars['String'];
};


export type QueryListZellerCustomersArgs = {
  filter?: InputMaybe<TableZellerCustomerFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateZellerCustomer?: Maybe<ZellerCustomer>;
  onDeleteZellerCustomer?: Maybe<ZellerCustomer>;
  onUpdateZellerCustomer?: Maybe<ZellerCustomer>;
};


export type SubscriptionOnCreateZellerCustomerArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};


export type SubscriptionOnDeleteZellerCustomerArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};


export type SubscriptionOnUpdateZellerCustomerArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

export type TableBooleanFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type TableFloatFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  notContains?: InputMaybe<Scalars['Float']>;
};

export type TableIdFilterInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
};

export type TableIntFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  notContains?: InputMaybe<Scalars['Int']>;
};

export type TableStringFilterInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
};

export type TableZellerCustomerFilterInput = {
  email?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableStringFilterInput>;
  name?: InputMaybe<TableStringFilterInput>;
  role?: InputMaybe<TableStringFilterInput>;
};

export type UpdateZellerCustomerInput = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

export type ZellerCustomer = {
  __typename?: 'ZellerCustomer';
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type ZellerCustomerConnection = {
  __typename?: 'ZellerCustomerConnection';
  items?: Maybe<Array<Maybe<ZellerCustomer>>>;
  nextToken?: Maybe<Scalars['String']>;
};
