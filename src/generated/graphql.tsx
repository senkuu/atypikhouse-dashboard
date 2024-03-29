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

export type AddPlanningDataInput = {
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  ownerId?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
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
  touristTax: Scalars['Float'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  status: Scalars['String'];
  cancelReason: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type BookingResponse = {
  __typename?: 'BookingResponse';
  errors?: Maybe<Array<FieldError>>;
  booking?: Maybe<Booking>;
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

export type CreateBookingInput = {
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  offerId: Scalars['Float'];
  occupantId: Scalars['Float'];
  adults: Scalars['Float'];
  children: Scalars['Float'];
  priceHT: Scalars['Float'];
  priceTTC: Scalars['Float'];
  touristTax: Scalars['Float'];
  status: Scalars['String'];
  cancelReason?: Maybe<Scalars['String']>;
};

export type CreateCriteriaInput = {
  name: Scalars['String'];
  additional?: Maybe<Scalars['String']>;
  criteriaType: Scalars['String'];
  isGlobal: Scalars['Boolean'];
};

export type CreateOfferInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  coordinates?: Maybe<CoordinatesInput>;
  address?: Maybe<Scalars['String']>;
  touristTax: Scalars['Float'];
  priceHT: Scalars['Float'];
  priceTTC: Scalars['Float'];
  cityId: Scalars['Float'];
  ownerId: Scalars['Float'];
  offerTypeId: Scalars['Float'];
  deleteReason?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

export type CreateOfferTypeInput = {
  name: Scalars['String'];
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
};

export type CreateReviewInput = {
  bookingId: Scalars['Float'];
  text: Scalars['String'];
  rating: Scalars['Float'];
};

export type Criteria = {
  __typename?: 'Criteria';
  id: Scalars['Float'];
  name: Scalars['String'];
  additional?: Maybe<Scalars['String']>;
  isGlobal: Scalars['Boolean'];
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

export type CriteriaResponse = {
  __typename?: 'CriteriaResponse';
  errors?: Maybe<Array<FieldError>>;
  criteria?: Maybe<Criteria>;
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
  createOffer: OfferResponse;
  updateOffer: OfferResponse;
  addOfferCriterias?: Maybe<Offer>;
  removeOfferCriterias?: Maybe<Offer>;
  deleteOffer: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponse;
  updateUser?: Maybe<UserResponse>;
  deleteUser: Scalars['Boolean'];
  createBooking: BookingResponse;
  updateBooking?: Maybe<BookingResponse>;
  deleteBooking: Scalars['Boolean'];
  createCriteria: CriteriaResponse;
  updateCriteria?: Maybe<CriteriaResponse>;
  addCriteriaOfferTypes: CriteriaResponse;
  removeCriteriaOfferTypes: CriteriaResponse;
  deleteCriteria: Scalars['Boolean'];
  createOfferType: OfferTypeResponse;
  updateOfferType: OfferTypeResponse;
  addOfferTypeCriterias?: Maybe<OfferTypeResponse>;
  removeOfferTypeCriterias?: Maybe<OfferTypeResponse>;
  deleteOfferType: Scalars['Boolean'];
  addPlanningData: PlanningDataResponse;
  updatePlanningData?: Maybe<PlanningDataResponse>;
  removePlanningData: Scalars['Boolean'];
  createReview: ReviewResponse;
  updateReview?: Maybe<ReviewResponse>;
  deleteReview: Scalars['Boolean'];
};


export type MutationCreateOfferArgs = {
  options: CreateOfferInput;
};


export type MutationUpdateOfferArgs = {
  options: UpdateOfferInput;
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


export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};


export type MutationCreateBookingArgs = {
  options: CreateBookingInput;
};


export type MutationUpdateBookingArgs = {
  options: UpdateBookingInput;
  id: Scalars['Float'];
};


export type MutationDeleteBookingArgs = {
  id: Scalars['Float'];
};


export type MutationCreateCriteriaArgs = {
  options: CreateCriteriaInput;
};


export type MutationUpdateCriteriaArgs = {
  options: UpdateCriteriaInput;
  id: Scalars['Float'];
};


export type MutationAddCriteriaOfferTypesArgs = {
  offerTypeIds: Array<Scalars['Float']>;
  id: Scalars['Float'];
};


export type MutationRemoveCriteriaOfferTypesArgs = {
  offerTypeIds: Array<Scalars['Float']>;
  id: Scalars['Float'];
};


export type MutationDeleteCriteriaArgs = {
  id: Scalars['Float'];
};


export type MutationCreateOfferTypeArgs = {
  options: CreateOfferTypeInput;
};


export type MutationUpdateOfferTypeArgs = {
  options: UpdateOfferTypeInput;
  id: Scalars['Float'];
};


export type MutationAddOfferTypeCriteriasArgs = {
  criteriaIds: Array<Scalars['Float']>;
  id: Scalars['Float'];
};


export type MutationRemoveOfferTypeCriteriasArgs = {
  criteriaIds: Array<Scalars['Float']>;
  id: Scalars['Float'];
};


export type MutationDeleteOfferTypeArgs = {
  id: Scalars['Float'];
};


export type MutationAddPlanningDataArgs = {
  options: AddPlanningDataInput;
};


export type MutationUpdatePlanningDataArgs = {
  options: UpdatePlanningDataInput;
  id: Scalars['Float'];
};


export type MutationRemovePlanningDataArgs = {
  id: Scalars['Float'];
};


export type MutationCreateReviewArgs = {
  options: CreateReviewInput;
};


export type MutationUpdateReviewArgs = {
  options: UpdateReviewInput;
  id: Scalars['Float'];
};


export type MutationDeleteReviewArgs = {
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
  city?: Maybe<City>;
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

export type OfferResponse = {
  __typename?: 'OfferResponse';
  errors?: Maybe<Array<FieldError>>;
  offer?: Maybe<Offer>;
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
  filename: Scalars['String'];
  url: Scalars['String'];
  mimetype: Scalars['String'];
  offer?: Maybe<Offer>;
};

export type Planning = {
  __typename?: 'Planning';
  id: Scalars['Float'];
  offer?: Maybe<Offer>;
  owner?: Maybe<User>;
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PlanningDataResponse = {
  __typename?: 'PlanningDataResponse';
  errors?: Maybe<Array<FieldError>>;
  planningData?: Maybe<Planning>;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  offers: SearchOfferResponse;
  offer?: Maybe<Offer>;
  me?: Maybe<User>;
  users: Array<User>;
  user?: Maybe<User>;
  bookings?: Maybe<Array<Booking>>;
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
  plannings: Array<Planning>;
  reviews: Array<Review>;
  review?: Maybe<Review>;
};


export type QueryOffersArgs = {
  status?: Maybe<Scalars['String']>;
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


export type QueryBookingsArgs = {
  hideCancelled?: Maybe<Scalars['Boolean']>;
  ownerId?: Maybe<Scalars['Float']>;
  occupantId?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
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


export type QueryPlanningsArgs = {
  options: SearchPlanningDataInput;
};


export type QueryReviewsArgs = {
  occupantId?: Maybe<Scalars['Float']>;
  ownerId?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
};


export type QueryReviewArgs = {
  bookingId?: Maybe<Scalars['Float']>;
  id: Scalars['Float'];
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

export type ReviewResponse = {
  __typename?: 'ReviewResponse';
  errors?: Maybe<Array<FieldError>>;
  review?: Maybe<Review>;
};

export type SearchOfferResponse = {
  __typename?: 'SearchOfferResponse';
  offers: Array<Offer>;
};

export type SearchPlanningDataInput = {
  ownerId?: Maybe<Scalars['Float']>;
  offerId?: Maybe<Scalars['Float']>;
};

export type UpdateBookingInput = {
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  adults?: Maybe<Scalars['Float']>;
  children?: Maybe<Scalars['Float']>;
  priceHT?: Maybe<Scalars['Float']>;
  priceTTC?: Maybe<Scalars['Float']>;
  touristTax?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  cancelReason?: Maybe<Scalars['String']>;
};

export type UpdateCriteriaInput = {
  name?: Maybe<Scalars['String']>;
  additional?: Maybe<Scalars['String']>;
  isGlobal?: Maybe<Scalars['Boolean']>;
};

export type UpdateOfferInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  coordinates?: Maybe<CoordinatesInput>;
  address?: Maybe<Scalars['String']>;
  touristTax?: Maybe<Scalars['Float']>;
  priceHT?: Maybe<Scalars['Float']>;
  priceTTC?: Maybe<Scalars['Float']>;
  cityId?: Maybe<Scalars['Float']>;
  ownerId?: Maybe<Scalars['Float']>;
  offerTypeId?: Maybe<Scalars['Float']>;
  deleteReason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type UpdateOfferTypeInput = {
  name?: Maybe<Scalars['String']>;
  criteriaIds?: Maybe<Array<Scalars['Float']>>;
};

export type UpdatePlanningDataInput = {
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
};

export type UpdateReviewInput = {
  text?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
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
  planningData?: Maybe<Array<Planning>>;
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

export type BaseOfferFragment = { __typename?: 'Offer', id: number, title: string, description: string, distance?: Maybe<number>, sortScore?: Maybe<number>, averageRating?: Maybe<number>, latitude?: Maybe<number>, longitude?: Maybe<number>, priceTTC: number, status: string, deleteReason: string, createdAt: string, touristTax: number, address?: Maybe<string>, city?: Maybe<{ __typename?: 'City', name: string, id: number, departement: { __typename?: 'Departement', number: string } }>, photos?: Maybe<Array<{ __typename?: 'Photo', id: number, url: string }>>, offerType: { __typename?: 'OfferType', id: number, name: string }, owner: { __typename?: 'User', name: string } };

export type BasePlanningFragment = { __typename?: 'Planning', id: number, startDate: any, endDate: any };

export type BaseUserFragment = { __typename?: 'User', id: number, name: string, surname: string, email: string, description?: Maybe<string>, website?: Maybe<string>, userType: string, status: string };

export type BaseUserResponseFragment = { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, name: string, surname: string, email: string, description?: Maybe<string>, website?: Maybe<string>, userType: string, status: string }> };

export type AddPlanningDataMutationVariables = Exact<{
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  offerId?: Maybe<Scalars['Float']>;
  ownerId?: Maybe<Scalars['Float']>;
}>;


export type AddPlanningDataMutation = { __typename?: 'Mutation', addPlanningData: { __typename?: 'PlanningDataResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, planningData?: Maybe<{ __typename?: 'Planning', id: number, startDate: any, endDate: any }> } };

export type CreateBookingMutationVariables = Exact<{
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  adults: Scalars['Float'];
  children: Scalars['Float'];
  occupantId: Scalars['Float'];
  offerId: Scalars['Float'];
  priceTTC: Scalars['Float'];
  priceHT: Scalars['Float'];
  touristTax: Scalars['Float'];
  status: Scalars['String'];
  cancelReason: Scalars['String'];
}>;


export type CreateBookingMutation = { __typename?: 'Mutation', createBooking: { __typename?: 'BookingResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, booking?: Maybe<{ __typename?: 'Booking', id: number, status: string, startDate: any, endDate: any, adults: number, children: number, priceHT: number, priceTTC: number, touristTax: number, cancelReason: string, occupant: { __typename?: 'User', id: number, name: string, surname: string, email: string } }> } };

export type CreateCriteriaMutationVariables = Exact<{
  name: Scalars['String'];
  criteriaType: Scalars['String'];
  additional?: Maybe<Scalars['String']>;
  isGlobal: Scalars['Boolean'];
}>;


export type CreateCriteriaMutation = { __typename?: 'Mutation', createCriteria: { __typename?: 'CriteriaResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, criteria?: Maybe<{ __typename?: 'Criteria', id: number, name: string, criteriaType: string, additional?: Maybe<string>, isGlobal: boolean }> } };

export type CreateOfferMutationVariables = Exact<{
  status: Scalars['String'];
  deleteReason: Scalars['String'];
  offerTypeId: Scalars['Float'];
  ownerId: Scalars['Float'];
  cityId: Scalars['Float'];
  priceHT: Scalars['Float'];
  priceTTC: Scalars['Float'];
  touristTax: Scalars['Float'];
  description: Scalars['String'];
  title: Scalars['String'];
  address: Scalars['String'];
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
}>;


export type CreateOfferMutation = { __typename?: 'Mutation', createOffer: { __typename?: 'OfferResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, offer?: Maybe<{ __typename?: 'Offer', id: number, title: string, description: string, address?: Maybe<string>, touristTax: number, priceHT: number, priceTTC: number, deleteReason: string, owner: { __typename?: 'User', id: number, name: string, surname: string }, city?: Maybe<{ __typename?: 'City', id: number, name: string }> }> } };

export type DeleteCriteriaMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteCriteriaMutation = { __typename?: 'Mutation', deleteCriteria: boolean };

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

export type RemovePlanningDataMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type RemovePlanningDataMutation = { __typename?: 'Mutation', removePlanningData: boolean };

export type UpdateCriteriaMutationVariables = Exact<{
  id: Scalars['Float'];
  name: Scalars['String'];
  additional?: Maybe<Scalars['String']>;
  isGlobal: Scalars['Boolean'];
}>;


export type UpdateCriteriaMutation = { __typename?: 'Mutation', updateCriteria?: Maybe<{ __typename?: 'CriteriaResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, criteria?: Maybe<{ __typename?: 'Criteria', id: number, name: string, criteriaType: string, additional?: Maybe<string>, isGlobal: boolean }> }> };

export type UpdateOfferMutationVariables = Exact<{
  id: Scalars['Float'];
  status?: Maybe<Scalars['String']>;
  deleteReason?: Maybe<Scalars['String']>;
  offerTypeId?: Maybe<Scalars['Float']>;
  ownerId?: Maybe<Scalars['Float']>;
  priceHT?: Maybe<Scalars['Float']>;
  priceTTC?: Maybe<Scalars['Float']>;
  touristTax?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
}>;


export type UpdateOfferMutation = { __typename?: 'Mutation', updateOffer: { __typename?: 'OfferResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, offer?: Maybe<{ __typename?: 'Offer', id: number, title: string, description: string, address?: Maybe<string>, touristTax: number, priceHT: number, priceTTC: number, deleteReason: string, city?: Maybe<{ __typename?: 'City', id: number, name: string }> }> } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Float'];
  website?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: Maybe<{ __typename?: 'UserResponse', user?: Maybe<{ __typename?: 'User', id: number, website?: Maybe<string>, description?: Maybe<string>, name: string, surname: string, email: string, status: string }>, errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>> }> };

export type CriteriaQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type CriteriaQuery = { __typename?: 'Query', criteria?: Maybe<{ __typename?: 'Criteria', id: number, name: string, additional?: Maybe<string>, isGlobal: boolean, criteriaType: string }> };

export type CriteriasQueryVariables = Exact<{ [key: string]: never; }>;


export type CriteriasQuery = { __typename?: 'Query', criterias: Array<{ __typename?: 'Criteria', id: number, name: string, additional?: Maybe<string>, isGlobal: boolean, criteriaType: string }> };

export type UserQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type UserQuery = { __typename?: 'Query', user?: Maybe<{ __typename?: 'User', id: number, name: string, surname: string, email: string, description?: Maybe<string>, website?: Maybe<string>, userType: string, status: string }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, name: string, surname: string, email: string, description?: Maybe<string>, website?: Maybe<string>, userType: string, status: string }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'User', id: number, name: string, surname: string, email: string, description?: Maybe<string>, website?: Maybe<string>, userType: string, status: string }> };

export type OfferQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type OfferQuery = { __typename?: 'Query', offer?: Maybe<{ __typename?: 'Offer', id: number, title: string, description: string, distance?: Maybe<number>, sortScore?: Maybe<number>, averageRating?: Maybe<number>, latitude?: Maybe<number>, longitude?: Maybe<number>, priceTTC: number, status: string, deleteReason: string, createdAt: string, touristTax: number, address?: Maybe<string>, city?: Maybe<{ __typename?: 'City', name: string, id: number, departement: { __typename?: 'Departement', number: string } }>, photos?: Maybe<Array<{ __typename?: 'Photo', id: number, url: string }>>, offerType: { __typename?: 'OfferType', id: number, name: string }, owner: { __typename?: 'User', name: string } }> };

export type OffersQueryVariables = Exact<{
  cityId: Scalars['Float'];
  getCities: Scalars['Boolean'];
  getDepartements: Scalars['Boolean'];
  ownerId?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
}>;


export type OffersQuery = { __typename?: 'Query', offers: { __typename?: 'SearchOfferResponse', offers: Array<{ __typename?: 'Offer', id: number, title: string, description: string, distance?: Maybe<number>, sortScore?: Maybe<number>, averageRating?: Maybe<number>, latitude?: Maybe<number>, longitude?: Maybe<number>, priceTTC: number, status: string, deleteReason: string, createdAt: string, touristTax: number, address?: Maybe<string>, city?: Maybe<{ __typename?: 'City', name: string, id: number, departement: { __typename?: 'Departement', number: string } }>, photos?: Maybe<Array<{ __typename?: 'Photo', id: number, url: string }>>, offerType: { __typename?: 'OfferType', id: number, name: string }, owner: { __typename?: 'User', name: string } }> } };

export type PlanningsQueryVariables = Exact<{
  offerId?: Maybe<Scalars['Float']>;
  ownerId?: Maybe<Scalars['Float']>;
}>;


export type PlanningsQuery = { __typename?: 'Query', plannings: Array<{ __typename?: 'Planning', id: number, startDate: any, endDate: any }> };

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
  photos {
    id
    url
  }
  distance
  sortScore
  averageRating
  latitude
  longitude
  priceTTC
  status
  deleteReason
  createdAt
  touristTax
  offerType {
    id
    name
  }
  owner {
    name
  }
  address
}
    `;
export const BasePlanningFragmentDoc = gql`
    fragment BasePlanning on Planning {
  id
  startDate
  endDate
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
export const AddPlanningDataDocument = gql`
    mutation addPlanningData($startDate: DateTime!, $endDate: DateTime!, $offerId: Float, $ownerId: Float) {
  addPlanningData(
    options: {startDate: $startDate, endDate: $endDate, offerId: $offerId, ownerId: $ownerId}
  ) {
    errors {
      ...BaseError
    }
    planningData {
      ...BasePlanning
    }
  }
}
    ${BaseErrorFragmentDoc}
${BasePlanningFragmentDoc}`;
export type AddPlanningDataMutationFn = Apollo.MutationFunction<AddPlanningDataMutation, AddPlanningDataMutationVariables>;

/**
 * __useAddPlanningDataMutation__
 *
 * To run a mutation, you first call `useAddPlanningDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPlanningDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPlanningDataMutation, { data, loading, error }] = useAddPlanningDataMutation({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *      offerId: // value for 'offerId'
 *      ownerId: // value for 'ownerId'
 *   },
 * });
 */
export function useAddPlanningDataMutation(baseOptions?: Apollo.MutationHookOptions<AddPlanningDataMutation, AddPlanningDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPlanningDataMutation, AddPlanningDataMutationVariables>(AddPlanningDataDocument, options);
      }
export type AddPlanningDataMutationHookResult = ReturnType<typeof useAddPlanningDataMutation>;
export type AddPlanningDataMutationResult = Apollo.MutationResult<AddPlanningDataMutation>;
export type AddPlanningDataMutationOptions = Apollo.BaseMutationOptions<AddPlanningDataMutation, AddPlanningDataMutationVariables>;
export const CreateBookingDocument = gql`
    mutation createBooking($startDate: DateTime!, $endDate: DateTime!, $adults: Float!, $children: Float!, $occupantId: Float!, $offerId: Float!, $priceTTC: Float!, $priceHT: Float!, $touristTax: Float!, $status: String!, $cancelReason: String!) {
  createBooking(
    options: {startDate: $startDate, endDate: $endDate, adults: $adults, children: $children, occupantId: $occupantId, offerId: $offerId, priceTTC: $priceTTC, priceHT: $priceHT, touristTax: $touristTax, status: $status, cancelReason: $cancelReason}
  ) {
    errors {
      ...BaseError
    }
    booking {
      id
      status
      startDate
      endDate
      adults
      children
      priceHT
      priceTTC
      touristTax
      cancelReason
      occupant {
        id
        name
        surname
        email
      }
    }
  }
}
    ${BaseErrorFragmentDoc}`;
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
 *      touristTax: // value for 'touristTax'
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
export const CreateCriteriaDocument = gql`
    mutation createCriteria($name: String!, $criteriaType: String!, $additional: String, $isGlobal: Boolean!) {
  createCriteria(
    options: {name: $name, criteriaType: $criteriaType, additional: $additional, isGlobal: $isGlobal}
  ) {
    errors {
      ...BaseError
    }
    criteria {
      id
      name
      criteriaType
      additional
      isGlobal
    }
  }
}
    ${BaseErrorFragmentDoc}`;
export type CreateCriteriaMutationFn = Apollo.MutationFunction<CreateCriteriaMutation, CreateCriteriaMutationVariables>;

/**
 * __useCreateCriteriaMutation__
 *
 * To run a mutation, you first call `useCreateCriteriaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCriteriaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCriteriaMutation, { data, loading, error }] = useCreateCriteriaMutation({
 *   variables: {
 *      name: // value for 'name'
 *      criteriaType: // value for 'criteriaType'
 *      additional: // value for 'additional'
 *      isGlobal: // value for 'isGlobal'
 *   },
 * });
 */
export function useCreateCriteriaMutation(baseOptions?: Apollo.MutationHookOptions<CreateCriteriaMutation, CreateCriteriaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCriteriaMutation, CreateCriteriaMutationVariables>(CreateCriteriaDocument, options);
      }
export type CreateCriteriaMutationHookResult = ReturnType<typeof useCreateCriteriaMutation>;
export type CreateCriteriaMutationResult = Apollo.MutationResult<CreateCriteriaMutation>;
export type CreateCriteriaMutationOptions = Apollo.BaseMutationOptions<CreateCriteriaMutation, CreateCriteriaMutationVariables>;
export const CreateOfferDocument = gql`
    mutation createOffer($status: String!, $deleteReason: String!, $offerTypeId: Float!, $ownerId: Float!, $cityId: Float!, $priceHT: Float!, $priceTTC: Float!, $touristTax: Float!, $description: String!, $title: String!, $address: String!, $longitude: Float!, $latitude: Float!) {
  createOffer(
    options: {status: $status, deleteReason: $deleteReason, offerTypeId: $offerTypeId, ownerId: $ownerId, cityId: $cityId, priceHT: $priceHT, priceTTC: $priceTTC, touristTax: $touristTax, description: $description, title: $title, address: $address, coordinates: {longitude: $longitude, latitude: $latitude}}
  ) {
    errors {
      ...BaseError
    }
    offer {
      id
      title
      description
      address
      owner {
        id
        name
        surname
      }
      touristTax
      priceHT
      priceTTC
      deleteReason
      city {
        id
        name
      }
    }
  }
}
    ${BaseErrorFragmentDoc}`;
export type CreateOfferMutationFn = Apollo.MutationFunction<CreateOfferMutation, CreateOfferMutationVariables>;

/**
 * __useCreateOfferMutation__
 *
 * To run a mutation, you first call `useCreateOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOfferMutation, { data, loading, error }] = useCreateOfferMutation({
 *   variables: {
 *      status: // value for 'status'
 *      deleteReason: // value for 'deleteReason'
 *      offerTypeId: // value for 'offerTypeId'
 *      ownerId: // value for 'ownerId'
 *      cityId: // value for 'cityId'
 *      priceHT: // value for 'priceHT'
 *      priceTTC: // value for 'priceTTC'
 *      touristTax: // value for 'touristTax'
 *      description: // value for 'description'
 *      title: // value for 'title'
 *      address: // value for 'address'
 *      longitude: // value for 'longitude'
 *      latitude: // value for 'latitude'
 *   },
 * });
 */
export function useCreateOfferMutation(baseOptions?: Apollo.MutationHookOptions<CreateOfferMutation, CreateOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOfferMutation, CreateOfferMutationVariables>(CreateOfferDocument, options);
      }
export type CreateOfferMutationHookResult = ReturnType<typeof useCreateOfferMutation>;
export type CreateOfferMutationResult = Apollo.MutationResult<CreateOfferMutation>;
export type CreateOfferMutationOptions = Apollo.BaseMutationOptions<CreateOfferMutation, CreateOfferMutationVariables>;
export const DeleteCriteriaDocument = gql`
    mutation deleteCriteria($id: Float!) {
  deleteCriteria(id: $id)
}
    `;
export type DeleteCriteriaMutationFn = Apollo.MutationFunction<DeleteCriteriaMutation, DeleteCriteriaMutationVariables>;

/**
 * __useDeleteCriteriaMutation__
 *
 * To run a mutation, you first call `useDeleteCriteriaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCriteriaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCriteriaMutation, { data, loading, error }] = useDeleteCriteriaMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCriteriaMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCriteriaMutation, DeleteCriteriaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCriteriaMutation, DeleteCriteriaMutationVariables>(DeleteCriteriaDocument, options);
      }
export type DeleteCriteriaMutationHookResult = ReturnType<typeof useDeleteCriteriaMutation>;
export type DeleteCriteriaMutationResult = Apollo.MutationResult<DeleteCriteriaMutation>;
export type DeleteCriteriaMutationOptions = Apollo.BaseMutationOptions<DeleteCriteriaMutation, DeleteCriteriaMutationVariables>;
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
export const RemovePlanningDataDocument = gql`
    mutation removePlanningData($id: Float!) {
  removePlanningData(id: $id)
}
    `;
export type RemovePlanningDataMutationFn = Apollo.MutationFunction<RemovePlanningDataMutation, RemovePlanningDataMutationVariables>;

/**
 * __useRemovePlanningDataMutation__
 *
 * To run a mutation, you first call `useRemovePlanningDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePlanningDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePlanningDataMutation, { data, loading, error }] = useRemovePlanningDataMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemovePlanningDataMutation(baseOptions?: Apollo.MutationHookOptions<RemovePlanningDataMutation, RemovePlanningDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemovePlanningDataMutation, RemovePlanningDataMutationVariables>(RemovePlanningDataDocument, options);
      }
export type RemovePlanningDataMutationHookResult = ReturnType<typeof useRemovePlanningDataMutation>;
export type RemovePlanningDataMutationResult = Apollo.MutationResult<RemovePlanningDataMutation>;
export type RemovePlanningDataMutationOptions = Apollo.BaseMutationOptions<RemovePlanningDataMutation, RemovePlanningDataMutationVariables>;
export const UpdateCriteriaDocument = gql`
    mutation updateCriteria($id: Float!, $name: String!, $additional: String, $isGlobal: Boolean!) {
  updateCriteria(
    id: $id
    options: {name: $name, additional: $additional, isGlobal: $isGlobal}
  ) {
    errors {
      ...BaseError
    }
    criteria {
      id
      name
      criteriaType
      additional
      isGlobal
    }
  }
}
    ${BaseErrorFragmentDoc}`;
export type UpdateCriteriaMutationFn = Apollo.MutationFunction<UpdateCriteriaMutation, UpdateCriteriaMutationVariables>;

/**
 * __useUpdateCriteriaMutation__
 *
 * To run a mutation, you first call `useUpdateCriteriaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCriteriaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCriteriaMutation, { data, loading, error }] = useUpdateCriteriaMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      additional: // value for 'additional'
 *      isGlobal: // value for 'isGlobal'
 *   },
 * });
 */
export function useUpdateCriteriaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCriteriaMutation, UpdateCriteriaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCriteriaMutation, UpdateCriteriaMutationVariables>(UpdateCriteriaDocument, options);
      }
export type UpdateCriteriaMutationHookResult = ReturnType<typeof useUpdateCriteriaMutation>;
export type UpdateCriteriaMutationResult = Apollo.MutationResult<UpdateCriteriaMutation>;
export type UpdateCriteriaMutationOptions = Apollo.BaseMutationOptions<UpdateCriteriaMutation, UpdateCriteriaMutationVariables>;
export const UpdateOfferDocument = gql`
    mutation updateOffer($id: Float!, $status: String, $deleteReason: String, $offerTypeId: Float, $ownerId: Float, $priceHT: Float, $priceTTC: Float, $touristTax: Float, $description: String, $title: String, $address: String, $longitude: Float!, $latitude: Float!) {
  updateOffer(
    id: $id
    options: {status: $status, deleteReason: $deleteReason, offerTypeId: $offerTypeId, ownerId: $ownerId, priceHT: $priceHT, priceTTC: $priceTTC, touristTax: $touristTax, description: $description, title: $title, address: $address, coordinates: {longitude: $longitude, latitude: $latitude}}
  ) {
    errors {
      ...BaseError
    }
    offer {
      id
      title
      description
      address
      touristTax
      priceHT
      priceTTC
      deleteReason
      city {
        id
        name
      }
    }
  }
}
    ${BaseErrorFragmentDoc}`;
export type UpdateOfferMutationFn = Apollo.MutationFunction<UpdateOfferMutation, UpdateOfferMutationVariables>;

/**
 * __useUpdateOfferMutation__
 *
 * To run a mutation, you first call `useUpdateOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOfferMutation, { data, loading, error }] = useUpdateOfferMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *      deleteReason: // value for 'deleteReason'
 *      offerTypeId: // value for 'offerTypeId'
 *      ownerId: // value for 'ownerId'
 *      priceHT: // value for 'priceHT'
 *      priceTTC: // value for 'priceTTC'
 *      touristTax: // value for 'touristTax'
 *      description: // value for 'description'
 *      title: // value for 'title'
 *      address: // value for 'address'
 *      longitude: // value for 'longitude'
 *      latitude: // value for 'latitude'
 *   },
 * });
 */
export function useUpdateOfferMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOfferMutation, UpdateOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOfferMutation, UpdateOfferMutationVariables>(UpdateOfferDocument, options);
      }
export type UpdateOfferMutationHookResult = ReturnType<typeof useUpdateOfferMutation>;
export type UpdateOfferMutationResult = Apollo.MutationResult<UpdateOfferMutation>;
export type UpdateOfferMutationOptions = Apollo.BaseMutationOptions<UpdateOfferMutation, UpdateOfferMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($id: Float!, $website: String, $description: String, $name: String, $surname: String, $email: String, $status: String) {
  updateUser(
    id: $id
    website: $website
    description: $description
    name: $name
    surname: $surname
    email: $email
    status: $status
  ) {
    user {
      id
      website
      description
      name
      surname
      email
      status
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
 *      status: // value for 'status'
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
export const CriteriaDocument = gql`
    query criteria($id: Float!) {
  criteria(id: $id) {
    id
    name
    additional
    isGlobal
    criteriaType
  }
}
    `;

/**
 * __useCriteriaQuery__
 *
 * To run a query within a React component, call `useCriteriaQuery` and pass it any options that fit your needs.
 * When your component renders, `useCriteriaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCriteriaQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCriteriaQuery(baseOptions: Apollo.QueryHookOptions<CriteriaQuery, CriteriaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CriteriaQuery, CriteriaQueryVariables>(CriteriaDocument, options);
      }
export function useCriteriaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CriteriaQuery, CriteriaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CriteriaQuery, CriteriaQueryVariables>(CriteriaDocument, options);
        }
export type CriteriaQueryHookResult = ReturnType<typeof useCriteriaQuery>;
export type CriteriaLazyQueryHookResult = ReturnType<typeof useCriteriaLazyQuery>;
export type CriteriaQueryResult = Apollo.QueryResult<CriteriaQuery, CriteriaQueryVariables>;
export const CriteriasDocument = gql`
    query criterias {
  criterias {
    id
    name
    additional
    isGlobal
    criteriaType
  }
}
    `;

/**
 * __useCriteriasQuery__
 *
 * To run a query within a React component, call `useCriteriasQuery` and pass it any options that fit your needs.
 * When your component renders, `useCriteriasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCriteriasQuery({
 *   variables: {
 *   },
 * });
 */
export function useCriteriasQuery(baseOptions?: Apollo.QueryHookOptions<CriteriasQuery, CriteriasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CriteriasQuery, CriteriasQueryVariables>(CriteriasDocument, options);
      }
export function useCriteriasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CriteriasQuery, CriteriasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CriteriasQuery, CriteriasQueryVariables>(CriteriasDocument, options);
        }
export type CriteriasQueryHookResult = ReturnType<typeof useCriteriasQuery>;
export type CriteriasLazyQueryHookResult = ReturnType<typeof useCriteriasLazyQuery>;
export type CriteriasQueryResult = Apollo.QueryResult<CriteriasQuery, CriteriasQueryVariables>;
export const UserDocument = gql`
    query user($id: Float!) {
  user(id: $id) {
    ...BaseUser
  }
}
    ${BaseUserFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
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
    query Offers($cityId: Float!, $getCities: Boolean!, $getDepartements: Boolean!, $ownerId: Float, $status: String) {
  offers(
    cityId: $cityId
    getCities: $getCities
    getDepartements: $getDepartements
    ownerId: $ownerId
    status: $status
  ) {
    offers {
      ...BaseOffer
    }
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
 *      ownerId: // value for 'ownerId'
 *      status: // value for 'status'
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
export const PlanningsDocument = gql`
    query plannings($offerId: Float, $ownerId: Float) {
  plannings(options: {offerId: $offerId, ownerId: $ownerId}) {
    ...BasePlanning
  }
}
    ${BasePlanningFragmentDoc}`;

/**
 * __usePlanningsQuery__
 *
 * To run a query within a React component, call `usePlanningsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlanningsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlanningsQuery({
 *   variables: {
 *      offerId: // value for 'offerId'
 *      ownerId: // value for 'ownerId'
 *   },
 * });
 */
export function usePlanningsQuery(baseOptions?: Apollo.QueryHookOptions<PlanningsQuery, PlanningsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlanningsQuery, PlanningsQueryVariables>(PlanningsDocument, options);
      }
export function usePlanningsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlanningsQuery, PlanningsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlanningsQuery, PlanningsQueryVariables>(PlanningsDocument, options);
        }
export type PlanningsQueryHookResult = ReturnType<typeof usePlanningsQuery>;
export type PlanningsLazyQueryHookResult = ReturnType<typeof usePlanningsLazyQuery>;
export type PlanningsQueryResult = Apollo.QueryResult<PlanningsQuery, PlanningsQueryVariables>;