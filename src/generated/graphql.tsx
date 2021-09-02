import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Booking = {
  __typename?: 'Booking';
  id: Scalars['Float'];
  offer: Offer;
  occupant: User;
  review?: Maybe<Review>;
  adults: Scalars['Float'];
  children: Scalars['Float'];
  priceHT: Scalars['Float'];
  priceTTC: Scalars['Float'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  status: Scalars['String'];
  cancelReason: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type City = {
  __typename?: 'City';
  id: Scalars['Float'];
  name: Scalars['String'];
  departement: Departement;
  offers?: Maybe<Array<Offer>>;
  population: Scalars['Float'];
  users?: Maybe<Array<User>>;
};

export type CoordinatesInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Criteria = {
  __typename?: 'Criteria';
  id: Scalars['Float'];
  name: Scalars['String'];
  additional?: Maybe<Scalars['String']>;
  criteriaType: Scalars['String'];
  offerTypes?: Maybe<Array<OfferType>>;
  offerCriterias?: Maybe<Array<OfferCriteria>>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type CriteriaInput = {
  id: Scalars['Float'];
  value: Scalars['String'];
};


export type Departement = {
  __typename?: 'Departement';
  id: Scalars['Float'];
  name: Scalars['String'];
  number: Scalars['String'];
  region: Region;
  cities: Array<City>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOffer: Offer;
  updateOffer?: Maybe<Offer>;
  addOfferCriterias?: Maybe<Offer>;
  removeOfferCriterias?: Maybe<Offer>;
  deleteOffer: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponse;
  updateUser?: Maybe<UserResponse>;
  createBooking: Booking;
  updateBooking?: Maybe<Booking>;
  deleteBooking: Scalars['Boolean'];
  createCriteria: Criteria;
  updateCriteria?: Maybe<Criteria>;
  addCriteriaOfferTypes?: Maybe<Criteria>;
  removeCriteriaOfferTypes?: Maybe<Criteria>;
  deleteCriteria: Scalars['Boolean'];
  createOfferType: OfferTypeResponse;
  updateOfferType?: Maybe<OfferType>;
  addOfferTypeCriterias?: Maybe<OfferType>;
  removeOfferTypeCriterias?: Maybe<OfferType>;
  deleteOfferType: Scalars['Boolean'];
};


export type MutationCreateOfferArgs = {
  status: Scalars['String'];
  deleteReason: Scalars['String'];
  offerTypeId: Scalars['Float'];
  ownerId: Scalars['Float'];
  cityId: Scalars['Float'];
  priceTTC: Scalars['Float'];
  priceHT: Scalars['Float'];
  touristTax: Scalars['Float'];
  address?: Maybe<Scalars['String']>;
  coordinates?: Maybe<CoordinatesInput>;
  description: Scalars['String'];
  title: Scalars['String'];
};


export type MutationUpdateOfferArgs = {
  deleteReason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  offerTypeId?: Maybe<Scalars['Float']>;
  ownerId?: Maybe<Scalars['Float']>;
  priceTTC?: Maybe<Scalars['Float']>;
  priceHT?: Maybe<Scalars['Float']>;
  touristTax?: Maybe<Scalars['Float']>;
  address?: Maybe<Scalars['String']>;
  coordinates?: Maybe<CoordinatesInput>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationAddOfferCriteriasArgs = {
  criterias?: Maybe<Array<CriteriaInput>>;
  offerId: Scalars['Float'];
};


export type MutationRemoveOfferCriteriasArgs = {
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
  offerId: Scalars['Float'];
};


export type MutationDeleteOfferArgs = {
  id: Scalars['Float'];
};


export type MutationRegisterArgs = {
  options: RegisterInput;
};


export type MutationLoginArgs = {
  options: LoginInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  newPasswordConfirm: Scalars['String'];
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  status?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['Float']>;
  website?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationCreateBookingArgs = {
  cancelReason: Scalars['String'];
  status: Scalars['String'];
  endDate: Scalars['DateTime'];
  startDate: Scalars['DateTime'];
  priceTTC: Scalars['Float'];
  priceHT: Scalars['Float'];
  children: Scalars['Float'];
  adults: Scalars['Float'];
  occupantId: Scalars['Float'];
  offerId: Scalars['Float'];
};


export type MutationUpdateBookingArgs = {
  cancelReason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Float'];
};


export type MutationDeleteBookingArgs = {
  id: Scalars['Float'];
};


export type MutationCreateCriteriaArgs = {
  criteriaType: Scalars['String'];
  offerTypeIds?: Maybe<Array<Scalars['Float']>>;
  additional?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationUpdateCriteriaArgs = {
  criteriaType?: Maybe<Scalars['String']>;
  offerTypeIds?: Maybe<Array<Scalars['Float']>>;
  additional?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationAddCriteriaOfferTypesArgs = {
  offerTypeIds?: Maybe<Array<Scalars['Float']>>;
  id: Scalars['Float'];
};


export type MutationRemoveCriteriaOfferTypesArgs = {
  offerTypeIds?: Maybe<Array<Scalars['Float']>>;
  id: Scalars['Float'];
};


export type MutationDeleteCriteriaArgs = {
  id: Scalars['Float'];
};


export type MutationCreateOfferTypeArgs = {
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
  name: Scalars['String'];
};


export type MutationUpdateOfferTypeArgs = {
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
  name?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationAddOfferTypeCriteriasArgs = {
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
  id: Scalars['Float'];
};


export type MutationRemoveOfferTypeCriteriasArgs = {
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
  id: Scalars['Float'];
};


export type MutationDeleteOfferTypeArgs = {
  id: Scalars['Float'];
};

export type Notice = {
  __typename?: 'Notice';
  id: Scalars['Float'];
  user: User;
  linkedUser?: Maybe<User>;
  placeholder1?: Maybe<Scalars['String']>;
  placeholder2?: Maybe<Scalars['String']>;
  placeholder3?: Maybe<Scalars['String']>;
  placeholder4?: Maybe<Scalars['String']>;
  placeholder5?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  urlType: Scalars['String'];
  noticeType: NoticeType;
  createdAt: Scalars['String'];
};

export type NoticeType = {
  __typename?: 'NoticeType';
  id: Scalars['Float'];
  name: Scalars['String'];
  defaultText: Scalars['String'];
  notices?: Maybe<Array<Notice>>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Offer = {
  __typename?: 'Offer';
  id: Scalars['Float'];
  title: Scalars['String'];
  description: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  touristTax: Scalars['Float'];
  priceHT: Scalars['Float'];
  priceTTC: Scalars['Float'];
  distance?: Maybe<Scalars['Float']>;
  sortScore?: Maybe<Scalars['Float']>;
  averageRating?: Maybe<Scalars['Float']>;
  city: City;
  owner: User;
  offerType: OfferType;
  bookings?: Maybe<Array<Booking>>;
  photos?: Maybe<Array<Photo>>;
  offerCriterias?: Maybe<Array<OfferCriteria>>;
  planningData?: Maybe<Array<Planning>>;
  status: Scalars['String'];
  deleteReason: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type OfferCriteria = {
  __typename?: 'OfferCriteria';
  id: Scalars['Float'];
  value: Scalars['String'];
  offer: Offer;
  criteria: Criteria;
};

export type OfferType = {
  __typename?: 'OfferType';
  id: Scalars['Float'];
  name: Scalars['String'];
  offers?: Maybe<Array<Offer>>;
  criterias?: Maybe<Array<Criteria>>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type OfferTypeResponse = {
  __typename?: 'OfferTypeResponse';
  errors?: Maybe<Array<FieldError>>;
  offerType?: Maybe<OfferType>;
};

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['Float'];
  url: Scalars['String'];
  user?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  booking?: Maybe<Booking>;
  offer?: Maybe<Offer>;
  photoType: PhotoType;
};

export type PhotoType = {
  __typename?: 'PhotoType';
  id: Scalars['Float'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Planning = {
  __typename?: 'Planning';
  id: Scalars['Float'];
  offer: Offer;
  name: Scalars['String'];
  description: Scalars['String'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  offers: Array<Offer>;
  offer?: Maybe<Offer>;
  me?: Maybe<User>;
  users: Array<User>;
  user?: Maybe<User>;
  bookings: Array<Booking>;
  booking?: Maybe<Booking>;
  criterias: Array<Criteria>;
  criteria?: Maybe<Criteria>;
  offerTypes: Array<OfferType>;
  offerType?: Maybe<OfferType>;
  cities?: Maybe<Array<City>>;
  city?: Maybe<City>;
  regions?: Maybe<Array<Region>>;
  region?: Maybe<Region>;
  departements?: Maybe<Array<Departement>>;
  departement?: Maybe<Departement>;
};


export type QueryOffersArgs = {
  ownerId?: Maybe<Scalars['Float']>;
  getDepartements?: Maybe<Scalars['Boolean']>;
  getCities?: Maybe<Scalars['Boolean']>;
  cityId?: Maybe<Scalars['Float']>;
  coordinates?: Maybe<CoordinatesInput>;
};


export type QueryOfferArgs = {
  id: Scalars['Float'];
};


export type QueryUsersArgs = {
  relations?: Maybe<Array<Scalars['String']>>;
};


export type QueryUserArgs = {
  id: Scalars['Float'];
};


export type QueryBookingArgs = {
  id: Scalars['Float'];
};


export type QueryCriteriaArgs = {
  id: Scalars['Float'];
};


export type QueryOfferTypeArgs = {
  id: Scalars['Float'];
};


export type QueryCitiesArgs = {
  regions?: Maybe<Array<Scalars['Float']>>;
  departements?: Maybe<Array<Scalars['Float']>>;
  orderBy?: Maybe<Scalars['String']>;
  getOffers?: Maybe<Scalars['Boolean']>;
  getRegions?: Maybe<Scalars['Boolean']>;
  getDepartements?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryCityArgs = {
  getUsers?: Maybe<Scalars['Boolean']>;
  getOffers?: Maybe<Scalars['Boolean']>;
  getRegion?: Maybe<Scalars['Boolean']>;
  getDepartement?: Maybe<Scalars['Boolean']>;
  id: Scalars['Float'];
};


export type QueryRegionsArgs = {
  getOffers?: Maybe<Scalars['Boolean']>;
  getCities?: Maybe<Scalars['Boolean']>;
  getDepartements?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryRegionArgs = {
  getUsers?: Maybe<Scalars['Boolean']>;
  getOffers?: Maybe<Scalars['Boolean']>;
  getCities?: Maybe<Scalars['Boolean']>;
  getDepartements?: Maybe<Scalars['Boolean']>;
  id: Scalars['Float'];
};


export type QueryDepartementsArgs = {
  orderBy?: Maybe<Scalars['String']>;
  getOffers?: Maybe<Scalars['Boolean']>;
  getCities?: Maybe<Scalars['Boolean']>;
  getRegions?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryDepartementArgs = {
  getUsers?: Maybe<Scalars['Boolean']>;
  getOffers?: Maybe<Scalars['Boolean']>;
  getCities?: Maybe<Scalars['Boolean']>;
  getRegion?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
};

export type Region = {
  __typename?: 'Region';
  id: Scalars['Float'];
  name: Scalars['String'];
  departements?: Maybe<Array<Departement>>;
};

export type RegisterInput = {
  name: Scalars['String'];
  surname: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  userType?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['Float'];
  text: Scalars['String'];
  booking: Booking;
  rating: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  email: Scalars['String'];
  name: Scalars['String'];
  surname: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  offers?: Maybe<Array<Offer>>;
  bookings?: Maybe<Array<Booking>>;
  city?: Maybe<City>;
  notices?: Maybe<Array<Notice>>;
  linkedNotices?: Maybe<Array<Notice>>;
  photo?: Maybe<Photo>;
  userType: Scalars['String'];
  status: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type BaseErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type BaseOfferFragment = { __typename?: 'Offer', id: number, title: string, description: string, distance?: Maybe<number>, sortScore?: Maybe<number>, averageRating?: Maybe<number>, latitude?: Maybe<number>, longitude?: Maybe<number>, priceTTC: number, city: { __typename?: 'City', name: string, id: number, departement: { __typename?: 'Departement', number: string } }, offerType: { __typename?: 'OfferType', id: number, name: string }, owner: { __typename?: 'User', name: string } };

export type BaseUserFragment = { __typename?: 'User', id: number, name: string, surname: string, email: string, description?: Maybe<string>, website?: Maybe<string>, userType: string, status: string };

export type BaseUserResponseFragment = { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, name: string, surname: string, email: string, description?: Maybe<string>, website?: Maybe<string>, userType: string, status: string }> };

export type CreateBookingMutationVariables = Exact<{
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  adults: Scalars['Float'];
  children: Scalars['Float'];
  occupantId: Scalars['Float'];
  offerId: Scalars['Float'];
  priceTTC: Scalars['Float'];
  priceHT: Scalars['Float'];
  status: Scalars['String'];
  cancelReason: Scalars['String'];
}>;


export type CreateBookingMutation = { __typename?: 'Mutation', createBooking: { __typename?: 'Booking', id: number, status: string, startDate: any, endDate: any, adults: number, children: number, priceHT: number, priceTTC: number, cancelReason: string, occupant: { __typename?: 'User', id: number, name: string, surname: string, email: string } } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, name: string, surname: string, email: string, description?: Maybe<string>, website?: Maybe<string>, userType: string, status: string }> } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  surname: Scalars['String'];
  password: Scalars['String'];
  userType: Scalars['String'];
  status: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, name: string, surname: string, email: string, description?: Maybe<string>, website?: Maybe<string>, userType: string, status: string }> } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Float'];
  website: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  surname: Scalars['String'];
  email: Scalars['String'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: Maybe<{ __typename?: 'UserResponse', user?: Maybe<{ __typename?: 'User', id: number, website?: Maybe<string>, description?: Maybe<string>, name: string, surname: string, email: string }>, errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>> }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, name: string, surname: string, email: string, description?: Maybe<string>, website?: Maybe<string>, userType: string, status: string }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'User', id: number, name: string, surname: string, email: string, description?: Maybe<string>, website?: Maybe<string>, userType: string, status: string }> };

export type OfferQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type OfferQuery = { __typename?: 'Query', offer?: Maybe<{ __typename?: 'Offer', id: number, title: string, description: string, distance?: Maybe<number>, sortScore?: Maybe<number>, averageRating?: Maybe<number>, latitude?: Maybe<number>, longitude?: Maybe<number>, priceTTC: number, city: { __typename?: 'City', name: string, id: number, departement: { __typename?: 'Departement', number: string } }, offerType: { __typename?: 'OfferType', id: number, name: string }, owner: { __typename?: 'User', name: string } }> };

export type OffersQueryVariables = Exact<{
  cityId: Scalars['Float'];
  getCities: Scalars['Boolean'];
  getDepartements: Scalars['Boolean'];
}>;


export type OffersQuery = { __typename?: 'Query', offers: Array<{ __typename?: 'Offer', id: number, title: string, description: string, distance?: Maybe<number>, sortScore?: Maybe<number>, averageRating?: Maybe<number>, latitude?: Maybe<number>, longitude?: Maybe<number>, priceTTC: number, city: { __typename?: 'City', name: string, id: number, departement: { __typename?: 'Departement', number: string } }, offerType: { __typename?: 'OfferType', id: number, name: string }, owner: { __typename?: 'User', name: string } }> };

export const BaseOfferFragmentDoc = gql`
    fragment BaseOffer on Offer {
  id
  title
  description
  city {
    name
    id
    departement {
      number
    }
  }
  distance
  sortScore
  averageRating
  latitude
  longitude
  priceTTC
  offerType {
    id
    name
  }
  owner {
    name
  }
}
    `;
export const BaseErrorFragmentDoc = gql`
    fragment BaseError on FieldError {
  field
  message
}
    `;
export const BaseUserFragmentDoc = gql`
    fragment BaseUser on User {
  id
  name
  surname
  email
  description
  website
  userType
  status
}
    `;
export const BaseUserResponseFragmentDoc = gql`
    fragment BaseUserResponse on UserResponse {
  errors {
    ...BaseError
  }
  user {
    ...BaseUser
  }
}
    ${BaseErrorFragmentDoc}
${BaseUserFragmentDoc}`;
export const CreateBookingDocument = gql`
    mutation createBooking($startDate: DateTime!, $endDate: DateTime!, $adults: Float!, $children: Float!, $occupantId: Float!, $offerId: Float!, $priceTTC: Float!, $priceHT: Float!, $status: String!, $cancelReason: String!) {
  createBooking(
    startDate: $startDate
    endDate: $endDate
    adults: $adults
    children: $children
    occupantId: $occupantId
    offerId: $offerId
    priceTTC: $priceTTC
    priceHT: $priceHT
    status: $status
    cancelReason: $cancelReason
  ) {
    id
    status
    startDate
    endDate
    adults
    children
    priceHT
    priceTTC
    cancelReason
    occupant {
      id
      name
      surname
      email
    }
  }
}
    `;
export type CreateBookingMutationFn = Apollo.MutationFunction<CreateBookingMutation, CreateBookingMutationVariables>;

/**
 * __useCreateBookingMutation__
 *
 * To run a mutation, you first call `useCreateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookingMutation, { data, loading, error }] = useCreateBookingMutation({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *      adults: // value for 'adults'
 *      children: // value for 'children'
 *      occupantId: // value for 'occupantId'
 *      offerId: // value for 'offerId'
 *      priceTTC: // value for 'priceTTC'
 *      priceHT: // value for 'priceHT'
 *      status: // value for 'status'
 *      cancelReason: // value for 'cancelReason'
 *   },
 * });
 */
export function useCreateBookingMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookingMutation, CreateBookingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookingMutation, CreateBookingMutationVariables>(CreateBookingDocument, options);
      }
export type CreateBookingMutationHookResult = ReturnType<typeof useCreateBookingMutation>;
export type CreateBookingMutationResult = Apollo.MutationResult<CreateBookingMutation>;
export type CreateBookingMutationOptions = Apollo.BaseMutationOptions<CreateBookingMutation, CreateBookingMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(options: {email: $email, password: $password}) {
    errors {
      ...BaseError
    }
    user {
      ...BaseUser
    }
  }
}
    ${BaseErrorFragmentDoc}
${BaseUserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $name: String!, $surname: String!, $password: String!, $userType: String!, $status: String!) {
  register(
    options: {name: $name, email: $email, surname: $surname, password: $password, userType: $userType, status: $status}
  ) {
    errors {
      ...BaseError
    }
    user {
      ...BaseUser
    }
  }
}
    ${BaseErrorFragmentDoc}
${BaseUserFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      surname: // value for 'surname'
 *      password: // value for 'password'
 *      userType: // value for 'userType'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($id: Float!, $website: String!, $description: String!, $name: String!, $surname: String!, $email: String!) {
  updateUser(
    id: $id
    website: $website
    description: $description
    name: $name
    surname: $surname
    email: $email
  ) {
    user {
      id
      website
      description
      name
      surname
      email
    }
    errors {
      field
      message
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      website: // value for 'website'
 *      description: // value for 'description'
 *      name: // value for 'name'
 *      surname: // value for 'surname'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    ...BaseUser
  }
}
    ${BaseUserFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...BaseUser
  }
}
    ${BaseUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const OfferDocument = gql`
    query Offer($id: Float!) {
  offer(id: $id) {
    ...BaseOffer
  }
}
    ${BaseOfferFragmentDoc}`;

/**
 * __useOfferQuery__
 *
 * To run a query within a React component, call `useOfferQuery` and pass it any options that fit your needs.
 * When your component renders, `useOfferQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOfferQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOfferQuery(baseOptions: Apollo.QueryHookOptions<OfferQuery, OfferQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OfferQuery, OfferQueryVariables>(OfferDocument, options);
      }
export function useOfferLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OfferQuery, OfferQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OfferQuery, OfferQueryVariables>(OfferDocument, options);
        }
export type OfferQueryHookResult = ReturnType<typeof useOfferQuery>;
export type OfferLazyQueryHookResult = ReturnType<typeof useOfferLazyQuery>;
export type OfferQueryResult = Apollo.QueryResult<OfferQuery, OfferQueryVariables>;
export const OffersDocument = gql`
    query Offers($cityId: Float!, $getCities: Boolean!, $getDepartements: Boolean!) {
  offers(
    cityId: $cityId
    getCities: $getCities
    getDepartements: $getDepartements
  ) {
    ...BaseOffer
  }
}
    ${BaseOfferFragmentDoc}`;

/**
 * __useOffersQuery__
 *
 * To run a query within a React component, call `useOffersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOffersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOffersQuery({
 *   variables: {
 *      cityId: // value for 'cityId'
 *      getCities: // value for 'getCities'
 *      getDepartements: // value for 'getDepartements'
 *   },
 * });
 */
export function useOffersQuery(baseOptions: Apollo.QueryHookOptions<OffersQuery, OffersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OffersQuery, OffersQueryVariables>(OffersDocument, options);
      }
export function useOffersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OffersQuery, OffersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OffersQuery, OffersQueryVariables>(OffersDocument, options);
        }
export type OffersQueryHookResult = ReturnType<typeof useOffersQuery>;
export type OffersLazyQueryHookResult = ReturnType<typeof useOffersLazyQuery>;
export type OffersQueryResult = Apollo.QueryResult<OffersQuery, OffersQueryVariables>;