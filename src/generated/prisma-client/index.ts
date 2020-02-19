// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  groceryCategory: (where?: GroceryCategoryWhereInput) => Promise<boolean>;
  groceryItem: (where?: GroceryItemWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  groceryCategory: (
    where: GroceryCategoryWhereUniqueInput
  ) => GroceryCategoryNullablePromise;
  groceryCategories: (args?: {
    where?: GroceryCategoryWhereInput;
    orderBy?: GroceryCategoryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<GroceryCategory>;
  groceryCategoriesConnection: (args?: {
    where?: GroceryCategoryWhereInput;
    orderBy?: GroceryCategoryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => GroceryCategoryConnectionPromise;
  groceryItem: (
    where: GroceryItemWhereUniqueInput
  ) => GroceryItemNullablePromise;
  groceryItems: (args?: {
    where?: GroceryItemWhereInput;
    orderBy?: GroceryItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<GroceryItem>;
  groceryItemsConnection: (args?: {
    where?: GroceryItemWhereInput;
    orderBy?: GroceryItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => GroceryItemConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createGroceryCategory: (
    data: GroceryCategoryCreateInput
  ) => GroceryCategoryPromise;
  updateGroceryCategory: (args: {
    data: GroceryCategoryUpdateInput;
    where: GroceryCategoryWhereUniqueInput;
  }) => GroceryCategoryPromise;
  updateManyGroceryCategories: (args: {
    data: GroceryCategoryUpdateManyMutationInput;
    where?: GroceryCategoryWhereInput;
  }) => BatchPayloadPromise;
  upsertGroceryCategory: (args: {
    where: GroceryCategoryWhereUniqueInput;
    create: GroceryCategoryCreateInput;
    update: GroceryCategoryUpdateInput;
  }) => GroceryCategoryPromise;
  deleteGroceryCategory: (
    where: GroceryCategoryWhereUniqueInput
  ) => GroceryCategoryPromise;
  deleteManyGroceryCategories: (
    where?: GroceryCategoryWhereInput
  ) => BatchPayloadPromise;
  createGroceryItem: (data: GroceryItemCreateInput) => GroceryItemPromise;
  updateGroceryItem: (args: {
    data: GroceryItemUpdateInput;
    where: GroceryItemWhereUniqueInput;
  }) => GroceryItemPromise;
  updateManyGroceryItems: (args: {
    data: GroceryItemUpdateManyMutationInput;
    where?: GroceryItemWhereInput;
  }) => BatchPayloadPromise;
  upsertGroceryItem: (args: {
    where: GroceryItemWhereUniqueInput;
    create: GroceryItemCreateInput;
    update: GroceryItemUpdateInput;
  }) => GroceryItemPromise;
  deleteGroceryItem: (where: GroceryItemWhereUniqueInput) => GroceryItemPromise;
  deleteManyGroceryItems: (
    where?: GroceryItemWhereInput
  ) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  groceryCategory: (
    where?: GroceryCategorySubscriptionWhereInput
  ) => GroceryCategorySubscriptionPayloadSubscription;
  groceryItem: (
    where?: GroceryItemSubscriptionWhereInput
  ) => GroceryItemSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type GroceryCategoryOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC"
  | "units_ASC"
  | "units_DESC";

export type GroceryItemOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC"
  | "count_ASC"
  | "count_DESC"
  | "expiration_ASC"
  | "expiration_DESC"
  | "UPC_ASC"
  | "UPC_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type GroceryCategoryWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  name?: Maybe<String>;
}>;

export interface GroceryCategoryWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  units?: Maybe<String>;
  units_not?: Maybe<String>;
  units_in?: Maybe<String[] | String>;
  units_not_in?: Maybe<String[] | String>;
  units_lt?: Maybe<String>;
  units_lte?: Maybe<String>;
  units_gt?: Maybe<String>;
  units_gte?: Maybe<String>;
  units_contains?: Maybe<String>;
  units_not_contains?: Maybe<String>;
  units_starts_with?: Maybe<String>;
  units_not_starts_with?: Maybe<String>;
  units_ends_with?: Maybe<String>;
  units_not_ends_with?: Maybe<String>;
  AND?: Maybe<GroceryCategoryWhereInput[] | GroceryCategoryWhereInput>;
}

export type GroceryItemWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface GroceryItemWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  count?: Maybe<Float>;
  count_not?: Maybe<Float>;
  count_in?: Maybe<Float[] | Float>;
  count_not_in?: Maybe<Float[] | Float>;
  count_lt?: Maybe<Float>;
  count_lte?: Maybe<Float>;
  count_gt?: Maybe<Float>;
  count_gte?: Maybe<Float>;
  expiration?: Maybe<DateTimeInput>;
  expiration_not?: Maybe<DateTimeInput>;
  expiration_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  expiration_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  expiration_lt?: Maybe<DateTimeInput>;
  expiration_lte?: Maybe<DateTimeInput>;
  expiration_gt?: Maybe<DateTimeInput>;
  expiration_gte?: Maybe<DateTimeInput>;
  UPC?: Maybe<String>;
  UPC_not?: Maybe<String>;
  UPC_in?: Maybe<String[] | String>;
  UPC_not_in?: Maybe<String[] | String>;
  UPC_lt?: Maybe<String>;
  UPC_lte?: Maybe<String>;
  UPC_gt?: Maybe<String>;
  UPC_gte?: Maybe<String>;
  UPC_contains?: Maybe<String>;
  UPC_not_contains?: Maybe<String>;
  UPC_starts_with?: Maybe<String>;
  UPC_not_starts_with?: Maybe<String>;
  UPC_ends_with?: Maybe<String>;
  UPC_not_ends_with?: Maybe<String>;
  category?: Maybe<GroceryCategoryWhereInput>;
  AND?: Maybe<GroceryItemWhereInput[] | GroceryItemWhereInput>;
}

export interface GroceryCategoryCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  description?: Maybe<String>;
  units?: Maybe<String>;
}

export interface GroceryCategoryUpdateInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  units?: Maybe<String>;
}

export interface GroceryCategoryUpdateManyMutationInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  units?: Maybe<String>;
}

export interface GroceryItemCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  description?: Maybe<String>;
  count?: Maybe<Float>;
  expiration?: Maybe<DateTimeInput>;
  UPC?: Maybe<String>;
  category?: Maybe<GroceryCategoryCreateOneInput>;
}

export interface GroceryCategoryCreateOneInput {
  create?: Maybe<GroceryCategoryCreateInput>;
  connect?: Maybe<GroceryCategoryWhereUniqueInput>;
}

export interface GroceryItemUpdateInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  count?: Maybe<Float>;
  expiration?: Maybe<DateTimeInput>;
  UPC?: Maybe<String>;
  category?: Maybe<GroceryCategoryUpdateOneInput>;
}

export interface GroceryCategoryUpdateOneInput {
  create?: Maybe<GroceryCategoryCreateInput>;
  update?: Maybe<GroceryCategoryUpdateDataInput>;
  upsert?: Maybe<GroceryCategoryUpsertNestedInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<GroceryCategoryWhereUniqueInput>;
}

export interface GroceryCategoryUpdateDataInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  units?: Maybe<String>;
}

export interface GroceryCategoryUpsertNestedInput {
  update: GroceryCategoryUpdateDataInput;
  create: GroceryCategoryCreateInput;
}

export interface GroceryItemUpdateManyMutationInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  count?: Maybe<Float>;
  expiration?: Maybe<DateTimeInput>;
  UPC?: Maybe<String>;
}

export interface GroceryCategorySubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<GroceryCategoryWhereInput>;
  AND?: Maybe<
    | GroceryCategorySubscriptionWhereInput[]
    | GroceryCategorySubscriptionWhereInput
  >;
}

export interface GroceryItemSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<GroceryItemWhereInput>;
  AND?: Maybe<
    GroceryItemSubscriptionWhereInput[] | GroceryItemSubscriptionWhereInput
  >;
}

export interface NodeNode {
  id: ID_Output;
}

export interface GroceryCategory {
  id: ID_Output;
  name: String;
  description?: String;
  units?: String;
}

export interface GroceryCategoryPromise
  extends Promise<GroceryCategory>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  units: () => Promise<String>;
}

export interface GroceryCategorySubscription
  extends Promise<AsyncIterator<GroceryCategory>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  units: () => Promise<AsyncIterator<String>>;
}

export interface GroceryCategoryNullablePromise
  extends Promise<GroceryCategory | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  units: () => Promise<String>;
}

export interface GroceryCategoryConnection {
  pageInfo: PageInfo;
  edges: GroceryCategoryEdge[];
}

export interface GroceryCategoryConnectionPromise
  extends Promise<GroceryCategoryConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<GroceryCategoryEdge>>() => T;
  aggregate: <T = AggregateGroceryCategoryPromise>() => T;
}

export interface GroceryCategoryConnectionSubscription
  extends Promise<AsyncIterator<GroceryCategoryConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<GroceryCategoryEdgeSubscription>>>() => T;
  aggregate: <T = AggregateGroceryCategorySubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface GroceryCategoryEdge {
  node: GroceryCategory;
  cursor: String;
}

export interface GroceryCategoryEdgePromise
  extends Promise<GroceryCategoryEdge>,
    Fragmentable {
  node: <T = GroceryCategoryPromise>() => T;
  cursor: () => Promise<String>;
}

export interface GroceryCategoryEdgeSubscription
  extends Promise<AsyncIterator<GroceryCategoryEdge>>,
    Fragmentable {
  node: <T = GroceryCategorySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateGroceryCategory {
  count: Int;
}

export interface AggregateGroceryCategoryPromise
  extends Promise<AggregateGroceryCategory>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateGroceryCategorySubscription
  extends Promise<AsyncIterator<AggregateGroceryCategory>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface GroceryItem {
  id: ID_Output;
  name: String;
  description?: String;
  count: Float;
  expiration?: DateTimeOutput;
  UPC?: String;
}

export interface GroceryItemPromise extends Promise<GroceryItem>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  count: () => Promise<Float>;
  expiration: () => Promise<DateTimeOutput>;
  UPC: () => Promise<String>;
  category: <T = GroceryCategoryPromise>() => T;
}

export interface GroceryItemSubscription
  extends Promise<AsyncIterator<GroceryItem>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  count: () => Promise<AsyncIterator<Float>>;
  expiration: () => Promise<AsyncIterator<DateTimeOutput>>;
  UPC: () => Promise<AsyncIterator<String>>;
  category: <T = GroceryCategorySubscription>() => T;
}

export interface GroceryItemNullablePromise
  extends Promise<GroceryItem | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  count: () => Promise<Float>;
  expiration: () => Promise<DateTimeOutput>;
  UPC: () => Promise<String>;
  category: <T = GroceryCategoryPromise>() => T;
}

export interface GroceryItemConnection {
  pageInfo: PageInfo;
  edges: GroceryItemEdge[];
}

export interface GroceryItemConnectionPromise
  extends Promise<GroceryItemConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<GroceryItemEdge>>() => T;
  aggregate: <T = AggregateGroceryItemPromise>() => T;
}

export interface GroceryItemConnectionSubscription
  extends Promise<AsyncIterator<GroceryItemConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<GroceryItemEdgeSubscription>>>() => T;
  aggregate: <T = AggregateGroceryItemSubscription>() => T;
}

export interface GroceryItemEdge {
  node: GroceryItem;
  cursor: String;
}

export interface GroceryItemEdgePromise
  extends Promise<GroceryItemEdge>,
    Fragmentable {
  node: <T = GroceryItemPromise>() => T;
  cursor: () => Promise<String>;
}

export interface GroceryItemEdgeSubscription
  extends Promise<AsyncIterator<GroceryItemEdge>>,
    Fragmentable {
  node: <T = GroceryItemSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateGroceryItem {
  count: Int;
}

export interface AggregateGroceryItemPromise
  extends Promise<AggregateGroceryItem>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateGroceryItemSubscription
  extends Promise<AsyncIterator<AggregateGroceryItem>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface GroceryCategorySubscriptionPayload {
  mutation: MutationType;
  node: GroceryCategory;
  updatedFields: String[];
  previousValues: GroceryCategoryPreviousValues;
}

export interface GroceryCategorySubscriptionPayloadPromise
  extends Promise<GroceryCategorySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = GroceryCategoryPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = GroceryCategoryPreviousValuesPromise>() => T;
}

export interface GroceryCategorySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<GroceryCategorySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = GroceryCategorySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = GroceryCategoryPreviousValuesSubscription>() => T;
}

export interface GroceryCategoryPreviousValues {
  id: ID_Output;
  name: String;
  description?: String;
  units?: String;
}

export interface GroceryCategoryPreviousValuesPromise
  extends Promise<GroceryCategoryPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  units: () => Promise<String>;
}

export interface GroceryCategoryPreviousValuesSubscription
  extends Promise<AsyncIterator<GroceryCategoryPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  units: () => Promise<AsyncIterator<String>>;
}

export interface GroceryItemSubscriptionPayload {
  mutation: MutationType;
  node: GroceryItem;
  updatedFields: String[];
  previousValues: GroceryItemPreviousValues;
}

export interface GroceryItemSubscriptionPayloadPromise
  extends Promise<GroceryItemSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = GroceryItemPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = GroceryItemPreviousValuesPromise>() => T;
}

export interface GroceryItemSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<GroceryItemSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = GroceryItemSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = GroceryItemPreviousValuesSubscription>() => T;
}

export interface GroceryItemPreviousValues {
  id: ID_Output;
  name: String;
  description?: String;
  count: Float;
  expiration?: DateTimeOutput;
  UPC?: String;
}

export interface GroceryItemPreviousValuesPromise
  extends Promise<GroceryItemPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  count: () => Promise<Float>;
  expiration: () => Promise<DateTimeOutput>;
  UPC: () => Promise<String>;
}

export interface GroceryItemPreviousValuesSubscription
  extends Promise<AsyncIterator<GroceryItemPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  count: () => Promise<AsyncIterator<Float>>;
  expiration: () => Promise<AsyncIterator<DateTimeOutput>>;
  UPC: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "GroceryItem",
    embedded: false
  },
  {
    name: "GroceryCategory",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466/groceries/dev`
});
export const prisma = new Prisma();
