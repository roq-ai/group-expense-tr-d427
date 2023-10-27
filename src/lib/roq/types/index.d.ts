/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model expense
 *
 */
export type expense = $Result.DefaultSelection<Prisma.$expensePayload>;
/**
 * Model group
 *
 */
export type group = $Result.DefaultSelection<Prisma.$groupPayload>;
/**
 * Model membership
 *
 */
export type membership = $Result.DefaultSelection<Prisma.$membershipPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model payment
 *
 */
export type payment = $Result.DefaultSelection<Prisma.$paymentPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Expenses
 * const expenses = await prisma.expense.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Expenses
   * const expenses = await prisma.expense.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **expense** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Expenses
   * const expenses = await prisma.expense.findMany()
   * ```
   */
  get expense(): Prisma.expenseDelegate<ExtArgs>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **group** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Groups
   * const groups = await prisma.group.findMany()
   * ```
   */
  get group(): Prisma.groupDelegate<ExtArgs>;

  /**
   * `prisma.membership`: Exposes CRUD operations for the **membership** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Memberships
   * const memberships = await prisma.membership.findMany()
   * ```
   */
  get membership(): Prisma.membershipDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **payment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Payments
   * const payments = await prisma.payment.findMany()
   * ```
   */
  get payment(): Prisma.paymentDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    expense: 'expense';
    group: 'group';
    membership: 'membership';
    organization: 'organization';
    payment: 'payment';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'expense' | 'group' | 'membership' | 'organization' | 'payment' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      expense: {
        payload: Prisma.$expensePayload<ExtArgs>;
        fields: Prisma.expenseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.expenseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.expenseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          findFirst: {
            args: Prisma.expenseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.expenseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          findMany: {
            args: Prisma.expenseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>[];
          };
          create: {
            args: Prisma.expenseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          createMany: {
            args: Prisma.expenseCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.expenseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          update: {
            args: Prisma.expenseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          deleteMany: {
            args: Prisma.expenseDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.expenseUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.expenseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateExpense>;
          };
          groupBy: {
            args: Prisma.expenseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ExpenseGroupByOutputType>[];
          };
          count: {
            args: Prisma.expenseCountArgs<ExtArgs>;
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number;
          };
        };
      };
      group: {
        payload: Prisma.$groupPayload<ExtArgs>;
        fields: Prisma.groupFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.groupFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.groupFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload>;
          };
          findFirst: {
            args: Prisma.groupFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.groupFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload>;
          };
          findMany: {
            args: Prisma.groupFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload>[];
          };
          create: {
            args: Prisma.groupCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload>;
          };
          createMany: {
            args: Prisma.groupCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.groupDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload>;
          };
          update: {
            args: Prisma.groupUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload>;
          };
          deleteMany: {
            args: Prisma.groupDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.groupUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.groupUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload>;
          };
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGroup>;
          };
          groupBy: {
            args: Prisma.groupGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GroupGroupByOutputType>[];
          };
          count: {
            args: Prisma.groupCountArgs<ExtArgs>;
            result: $Utils.Optional<GroupCountAggregateOutputType> | number;
          };
        };
      };
      membership: {
        payload: Prisma.$membershipPayload<ExtArgs>;
        fields: Prisma.membershipFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.membershipFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$membershipPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.membershipFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$membershipPayload>;
          };
          findFirst: {
            args: Prisma.membershipFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$membershipPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.membershipFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$membershipPayload>;
          };
          findMany: {
            args: Prisma.membershipFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$membershipPayload>[];
          };
          create: {
            args: Prisma.membershipCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$membershipPayload>;
          };
          createMany: {
            args: Prisma.membershipCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.membershipDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$membershipPayload>;
          };
          update: {
            args: Prisma.membershipUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$membershipPayload>;
          };
          deleteMany: {
            args: Prisma.membershipDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.membershipUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.membershipUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$membershipPayload>;
          };
          aggregate: {
            args: Prisma.MembershipAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMembership>;
          };
          groupBy: {
            args: Prisma.membershipGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MembershipGroupByOutputType>[];
          };
          count: {
            args: Prisma.membershipCountArgs<ExtArgs>;
            result: $Utils.Optional<MembershipCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      payment: {
        payload: Prisma.$paymentPayload<ExtArgs>;
        fields: Prisma.paymentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.paymentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.paymentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          findFirst: {
            args: Prisma.paymentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.paymentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          findMany: {
            args: Prisma.paymentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[];
          };
          create: {
            args: Prisma.paymentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          createMany: {
            args: Prisma.paymentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.paymentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          update: {
            args: Prisma.paymentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          deleteMany: {
            args: Prisma.paymentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.paymentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.paymentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>;
          };
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePayment>;
          };
          groupBy: {
            args: Prisma.paymentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PaymentGroupByOutputType>[];
          };
          count: {
            args: Prisma.paymentCountArgs<ExtArgs>;
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ExpenseCountOutputType
   */

  export type ExpenseCountOutputType = {
    payment: number;
  };

  export type ExpenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | ExpenseCountOutputTypeCountPaymentArgs;
  };

  // Custom InputTypes

  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseCountOutputType
     */
    select?: ExpenseCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeCountPaymentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: paymentWhereInput;
  };

  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    membership: number;
  };

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membership?: boolean | GroupCountOutputTypeCountMembershipArgs;
  };

  // Custom InputTypes

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembershipArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: membershipWhereInput;
  };

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    expense: number;
    group: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | OrganizationCountOutputTypeCountExpenseArgs;
    group?: boolean | OrganizationCountOutputTypeCountGroupArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountExpenseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: expenseWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountGroupArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: groupWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    expense: number;
    membership: number;
    organization: number;
    payment: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | UserCountOutputTypeCountExpenseArgs;
    membership?: boolean | UserCountOutputTypeCountMembershipArgs;
    organization?: boolean | UserCountOutputTypeCountOrganizationArgs;
    payment?: boolean | UserCountOutputTypeCountPaymentArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: expenseWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: membershipWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: organizationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: paymentWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null;
    _avg: ExpenseAvgAggregateOutputType | null;
    _sum: ExpenseSumAggregateOutputType | null;
    _min: ExpenseMinAggregateOutputType | null;
    _max: ExpenseMaxAggregateOutputType | null;
  };

  export type ExpenseAvgAggregateOutputType = {
    amount: number | null;
  };

  export type ExpenseSumAggregateOutputType = {
    amount: number | null;
  };

  export type ExpenseMinAggregateOutputType = {
    id: string | null;
    amount: number | null;
    description: string | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ExpenseMaxAggregateOutputType = {
    id: string | null;
    amount: number | null;
    description: string | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ExpenseCountAggregateOutputType = {
    id: number;
    amount: number;
    description: number;
    user_id: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ExpenseAvgAggregateInputType = {
    amount?: true;
  };

  export type ExpenseSumAggregateInputType = {
    amount?: true;
  };

  export type ExpenseMinAggregateInputType = {
    id?: true;
    amount?: true;
    description?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ExpenseMaxAggregateInputType = {
    id?: true;
    amount?: true;
    description?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ExpenseCountAggregateInputType = {
    id?: true;
    amount?: true;
    description?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expense to aggregate.
     */
    where?: expenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: expenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned expenses
     **/
    _count?: true | ExpenseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ExpenseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ExpenseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ExpenseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ExpenseMaxAggregateInputType;
  };

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
    [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>;
  };

  export type expenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expenseWhereInput;
    orderBy?: expenseOrderByWithAggregationInput | expenseOrderByWithAggregationInput[];
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum;
    having?: expenseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExpenseCountAggregateInputType | true;
    _avg?: ExpenseAvgAggregateInputType;
    _sum?: ExpenseSumAggregateInputType;
    _min?: ExpenseMinAggregateInputType;
    _max?: ExpenseMaxAggregateInputType;
  };

  export type ExpenseGroupByOutputType = {
    id: string;
    amount: number;
    description: string | null;
    user_id: string;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ExpenseCountAggregateOutputType | null;
    _avg: ExpenseAvgAggregateOutputType | null;
    _sum: ExpenseSumAggregateOutputType | null;
    _min: ExpenseMinAggregateOutputType | null;
    _max: ExpenseMaxAggregateOutputType | null;
  };

  type GetExpenseGroupByPayload<T extends expenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ExpenseGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
          : GetScalarType<T[P], ExpenseGroupByOutputType[P]>;
      }
    >
  >;

  export type expenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      amount?: boolean;
      description?: boolean;
      user_id?: boolean;
      organization_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      organization?: boolean | organizationDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      payment?: boolean | expense$paymentArgs<ExtArgs>;
      _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['expense']
  >;

  export type expenseSelectScalar = {
    id?: boolean;
    amount?: boolean;
    description?: boolean;
    user_id?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type expenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    payment?: boolean | expense$paymentArgs<ExtArgs>;
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $expensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'expense';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      payment: Prisma.$paymentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        amount: number;
        description: string | null;
        user_id: string;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['expense']
    >;
    composites: {};
  };

  type expenseGetPayload<S extends boolean | null | undefined | expenseDefaultArgs> = $Result.GetResult<
    Prisma.$expensePayload,
    S
  >;

  type expenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    expenseFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ExpenseCountAggregateInputType | true;
  };

  export interface expenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expense']; meta: { name: 'expense' } };
    /**
     * Find zero or one Expense that matches the filter.
     * @param {expenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends expenseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, expenseFindUniqueArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Expense that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {expenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends expenseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__expenseClient<
      $Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends expenseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseFindFirstArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends expenseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     *
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends expenseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Expense.
     * @param {expenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     *
     **/
    create<T extends expenseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, expenseCreateArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Expenses.
     *     @param {expenseCreateManyArgs} args - Arguments to create many Expenses.
     *     @example
     *     // Create many Expenses
     *     const expense = await prisma.expense.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends expenseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Expense.
     * @param {expenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     *
     **/
    delete<T extends expenseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, expenseDeleteArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Expense.
     * @param {expenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends expenseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, expenseUpdateArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Expenses.
     * @param {expenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends expenseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends expenseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, expenseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Expense.
     * @param {expenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     **/
    upsert<T extends expenseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, expenseUpsertArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
     **/
    count<T extends expenseCountArgs>(
      args?: Subset<T, expenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ExpenseAggregateArgs>(
      args: Subset<T, ExpenseAggregateArgs>,
    ): Prisma.PrismaPromise<GetExpenseAggregateType<T>>;

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends expenseGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expenseGroupByArgs['orderBy'] }
        : { orderBy?: expenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, expenseGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the expense model
     */
    readonly fields: expenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expenseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    payment<T extends expense$paymentArgs<ExtArgs> = {}>(
      args?: Subset<T, expense$paymentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the expense model
   */
  interface expenseFieldRefs {
    readonly id: FieldRef<'expense', 'String'>;
    readonly amount: FieldRef<'expense', 'Int'>;
    readonly description: FieldRef<'expense', 'String'>;
    readonly user_id: FieldRef<'expense', 'String'>;
    readonly organization_id: FieldRef<'expense', 'String'>;
    readonly created_at: FieldRef<'expense', 'DateTime'>;
    readonly updated_at: FieldRef<'expense', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * expense findUnique
   */
  export type expenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter, which expense to fetch.
     */
    where: expenseWhereUniqueInput;
  };

  /**
   * expense findUniqueOrThrow
   */
  export type expenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter, which expense to fetch.
     */
    where: expenseWhereUniqueInput;
  };

  /**
   * expense findFirst
   */
  export type expenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter, which expense to fetch.
     */
    where?: expenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for expenses.
     */
    cursor?: expenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * expense findFirstOrThrow
   */
  export type expenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter, which expense to fetch.
     */
    where?: expenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for expenses.
     */
    cursor?: expenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * expense findMany
   */
  export type expenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter, which expenses to fetch.
     */
    where?: expenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing expenses.
     */
    cursor?: expenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` expenses.
     */
    skip?: number;
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * expense create
   */
  export type expenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * The data needed to create a expense.
     */
    data: XOR<expenseCreateInput, expenseUncheckedCreateInput>;
  };

  /**
   * expense createMany
   */
  export type expenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expenses.
     */
    data: expenseCreateManyInput | expenseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * expense update
   */
  export type expenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * The data needed to update a expense.
     */
    data: XOR<expenseUpdateInput, expenseUncheckedUpdateInput>;
    /**
     * Choose, which expense to update.
     */
    where: expenseWhereUniqueInput;
  };

  /**
   * expense updateMany
   */
  export type expenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expenses.
     */
    data: XOR<expenseUpdateManyMutationInput, expenseUncheckedUpdateManyInput>;
    /**
     * Filter which expenses to update
     */
    where?: expenseWhereInput;
  };

  /**
   * expense upsert
   */
  export type expenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * The filter to search for the expense to update in case it exists.
     */
    where: expenseWhereUniqueInput;
    /**
     * In case the expense found by the `where` argument doesn't exist, create a new expense with this data.
     */
    create: XOR<expenseCreateInput, expenseUncheckedCreateInput>;
    /**
     * In case the expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expenseUpdateInput, expenseUncheckedUpdateInput>;
  };

  /**
   * expense delete
   */
  export type expenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter which expense to delete.
     */
    where: expenseWhereUniqueInput;
  };

  /**
   * expense deleteMany
   */
  export type expenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to delete
     */
    where?: expenseWhereInput;
  };

  /**
   * expense.payment
   */
  export type expense$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    where?: paymentWhereInput;
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    cursor?: paymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * expense without action
   */
  export type expenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
  };

  /**
   * Model group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null;
    _min: GroupMinAggregateOutputType | null;
    _max: GroupMaxAggregateOutputType | null;
  };

  export type GroupMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GroupMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GroupCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type GroupMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GroupMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GroupCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group to aggregate.
     */
    where?: groupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of groups to fetch.
     */
    orderBy?: groupOrderByWithRelationInput | groupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: groupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` groups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` groups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned groups
     **/
    _count?: true | GroupCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GroupMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GroupMaxAggregateInputType;
  };

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
    [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>;
  };

  export type groupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupWhereInput;
    orderBy?: groupOrderByWithAggregationInput | groupOrderByWithAggregationInput[];
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum;
    having?: groupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GroupCountAggregateInputType | true;
    _min?: GroupMinAggregateInputType;
    _max?: GroupMaxAggregateInputType;
  };

  export type GroupGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: GroupCountAggregateOutputType | null;
    _min: GroupMinAggregateOutputType | null;
    _max: GroupMaxAggregateOutputType | null;
  };

  type GetGroupGroupByPayload<T extends groupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> & {
        [P in keyof T & keyof GroupGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
          : GetScalarType<T[P], GroupGroupByOutputType[P]>;
      }
    >
  >;

  export type groupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      organization_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      organization?: boolean | organizationDefaultArgs<ExtArgs>;
      membership?: boolean | group$membershipArgs<ExtArgs>;
      _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['group']
  >;

  export type groupSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type groupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    membership?: boolean | group$membershipArgs<ExtArgs>;
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $groupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'group';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      membership: Prisma.$membershipPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['group']
    >;
    composites: {};
  };

  type groupGetPayload<S extends boolean | null | undefined | groupDefaultArgs> = $Result.GetResult<
    Prisma.$groupPayload,
    S
  >;

  type groupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    groupFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: GroupCountAggregateInputType | true;
  };

  export interface groupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['group']; meta: { name: 'group' } };
    /**
     * Find zero or one Group that matches the filter.
     * @param {groupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends groupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, groupFindUniqueArgs<ExtArgs>>,
    ): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Group that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {groupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends groupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, groupFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends groupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, groupFindFirstArgs<ExtArgs>>,
    ): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends groupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, groupFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     *
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends groupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, groupFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Group.
     * @param {groupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     *
     **/
    create<T extends groupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, groupCreateArgs<ExtArgs>>,
    ): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Groups.
     *     @param {groupCreateManyArgs} args - Arguments to create many Groups.
     *     @example
     *     // Create many Groups
     *     const group = await prisma.group.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends groupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, groupCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Group.
     * @param {groupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     *
     **/
    delete<T extends groupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, groupDeleteArgs<ExtArgs>>,
    ): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Group.
     * @param {groupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends groupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, groupUpdateArgs<ExtArgs>>,
    ): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Groups.
     * @param {groupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends groupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, groupDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends groupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, groupUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Group.
     * @param {groupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     **/
    upsert<T extends groupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, groupUpsertArgs<ExtArgs>>,
    ): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
     **/
    count<T extends groupCountArgs>(
      args?: Subset<T, groupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends GroupAggregateArgs>(
      args: Subset<T, GroupAggregateArgs>,
    ): Prisma.PrismaPromise<GetGroupAggregateType<T>>;

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends groupGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: groupGroupByArgs['orderBy'] }
        : { orderBy?: groupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, groupGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the group model
     */
    readonly fields: groupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__groupClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    membership<T extends group$membershipArgs<ExtArgs> = {}>(
      args?: Subset<T, group$membershipArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membershipPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the group model
   */
  interface groupFieldRefs {
    readonly id: FieldRef<'group', 'String'>;
    readonly name: FieldRef<'group', 'String'>;
    readonly description: FieldRef<'group', 'String'>;
    readonly organization_id: FieldRef<'group', 'String'>;
    readonly created_at: FieldRef<'group', 'DateTime'>;
    readonly updated_at: FieldRef<'group', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * group findUnique
   */
  export type groupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * Filter, which group to fetch.
     */
    where: groupWhereUniqueInput;
  };

  /**
   * group findUniqueOrThrow
   */
  export type groupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * Filter, which group to fetch.
     */
    where: groupWhereUniqueInput;
  };

  /**
   * group findFirst
   */
  export type groupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * Filter, which group to fetch.
     */
    where?: groupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of groups to fetch.
     */
    orderBy?: groupOrderByWithRelationInput | groupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for groups.
     */
    cursor?: groupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` groups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` groups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[];
  };

  /**
   * group findFirstOrThrow
   */
  export type groupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * Filter, which group to fetch.
     */
    where?: groupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of groups to fetch.
     */
    orderBy?: groupOrderByWithRelationInput | groupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for groups.
     */
    cursor?: groupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` groups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` groups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[];
  };

  /**
   * group findMany
   */
  export type groupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * Filter, which groups to fetch.
     */
    where?: groupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of groups to fetch.
     */
    orderBy?: groupOrderByWithRelationInput | groupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing groups.
     */
    cursor?: groupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` groups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` groups.
     */
    skip?: number;
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[];
  };

  /**
   * group create
   */
  export type groupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * The data needed to create a group.
     */
    data: XOR<groupCreateInput, groupUncheckedCreateInput>;
  };

  /**
   * group createMany
   */
  export type groupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many groups.
     */
    data: groupCreateManyInput | groupCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * group update
   */
  export type groupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * The data needed to update a group.
     */
    data: XOR<groupUpdateInput, groupUncheckedUpdateInput>;
    /**
     * Choose, which group to update.
     */
    where: groupWhereUniqueInput;
  };

  /**
   * group updateMany
   */
  export type groupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update groups.
     */
    data: XOR<groupUpdateManyMutationInput, groupUncheckedUpdateManyInput>;
    /**
     * Filter which groups to update
     */
    where?: groupWhereInput;
  };

  /**
   * group upsert
   */
  export type groupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * The filter to search for the group to update in case it exists.
     */
    where: groupWhereUniqueInput;
    /**
     * In case the group found by the `where` argument doesn't exist, create a new group with this data.
     */
    create: XOR<groupCreateInput, groupUncheckedCreateInput>;
    /**
     * In case the group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<groupUpdateInput, groupUncheckedUpdateInput>;
  };

  /**
   * group delete
   */
  export type groupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * Filter which group to delete.
     */
    where: groupWhereUniqueInput;
  };

  /**
   * group deleteMany
   */
  export type groupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to delete
     */
    where?: groupWhereInput;
  };

  /**
   * group.membership
   */
  export type group$membershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membership
     */
    select?: membershipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membershipInclude<ExtArgs> | null;
    where?: membershipWhereInput;
    orderBy?: membershipOrderByWithRelationInput | membershipOrderByWithRelationInput[];
    cursor?: membershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[];
  };

  /**
   * group without action
   */
  export type groupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
  };

  /**
   * Model membership
   */

  export type AggregateMembership = {
    _count: MembershipCountAggregateOutputType | null;
    _min: MembershipMinAggregateOutputType | null;
    _max: MembershipMaxAggregateOutputType | null;
  };

  export type MembershipMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    group_id: string | null;
    joined_at: Date | null;
    left_at: Date | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MembershipMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    group_id: string | null;
    joined_at: Date | null;
    left_at: Date | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MembershipCountAggregateOutputType = {
    id: number;
    user_id: number;
    group_id: number;
    joined_at: number;
    left_at: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type MembershipMinAggregateInputType = {
    id?: true;
    user_id?: true;
    group_id?: true;
    joined_at?: true;
    left_at?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MembershipMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    group_id?: true;
    joined_at?: true;
    left_at?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MembershipCountAggregateInputType = {
    id?: true;
    user_id?: true;
    group_id?: true;
    joined_at?: true;
    left_at?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type MembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which membership to aggregate.
     */
    where?: membershipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of memberships to fetch.
     */
    orderBy?: membershipOrderByWithRelationInput | membershipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: membershipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` memberships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` memberships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned memberships
     **/
    _count?: true | MembershipCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MembershipMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MembershipMaxAggregateInputType;
  };

  export type GetMembershipAggregateType<T extends MembershipAggregateArgs> = {
    [P in keyof T & keyof AggregateMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembership[P]>
      : GetScalarType<T[P], AggregateMembership[P]>;
  };

  export type membershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: membershipWhereInput;
    orderBy?: membershipOrderByWithAggregationInput | membershipOrderByWithAggregationInput[];
    by: MembershipScalarFieldEnum[] | MembershipScalarFieldEnum;
    having?: membershipScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MembershipCountAggregateInputType | true;
    _min?: MembershipMinAggregateInputType;
    _max?: MembershipMaxAggregateInputType;
  };

  export type MembershipGroupByOutputType = {
    id: string;
    user_id: string;
    group_id: string;
    joined_at: Date;
    left_at: Date | null;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: MembershipCountAggregateOutputType | null;
    _min: MembershipMinAggregateOutputType | null;
    _max: MembershipMaxAggregateOutputType | null;
  };

  type GetMembershipGroupByPayload<T extends membershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MembershipGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MembershipGroupByOutputType[P]>
          : GetScalarType<T[P], MembershipGroupByOutputType[P]>;
      }
    >
  >;

  export type membershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        group_id?: boolean;
        joined_at?: boolean;
        left_at?: boolean;
        status?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        group?: boolean | groupDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['membership']
    >;

  export type membershipSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    group_id?: boolean;
    joined_at?: boolean;
    left_at?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type membershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | groupDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $membershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'membership';
    objects: {
      group: Prisma.$groupPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        group_id: string;
        joined_at: Date;
        left_at: Date | null;
        status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['membership']
    >;
    composites: {};
  };

  type membershipGetPayload<S extends boolean | null | undefined | membershipDefaultArgs> = $Result.GetResult<
    Prisma.$membershipPayload,
    S
  >;

  type membershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    membershipFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: MembershipCountAggregateInputType | true;
  };

  export interface membershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['membership']; meta: { name: 'membership' } };
    /**
     * Find zero or one Membership that matches the filter.
     * @param {membershipFindUniqueArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends membershipFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, membershipFindUniqueArgs<ExtArgs>>,
    ): Prisma__membershipClient<
      $Result.GetResult<Prisma.$membershipPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Membership that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {membershipFindUniqueOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends membershipFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, membershipFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__membershipClient<
      $Result.GetResult<Prisma.$membershipPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Membership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipFindFirstArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends membershipFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, membershipFindFirstArgs<ExtArgs>>,
    ): Prisma__membershipClient<
      $Result.GetResult<Prisma.$membershipPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Membership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipFindFirstOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends membershipFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, membershipFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__membershipClient<
      $Result.GetResult<Prisma.$membershipPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memberships
     * const memberships = await prisma.membership.findMany()
     *
     * // Get first 10 Memberships
     * const memberships = await prisma.membership.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const membershipWithIdOnly = await prisma.membership.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends membershipFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, membershipFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membershipPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Membership.
     * @param {membershipCreateArgs} args - Arguments to create a Membership.
     * @example
     * // Create one Membership
     * const Membership = await prisma.membership.create({
     *   data: {
     *     // ... data to create a Membership
     *   }
     * })
     *
     **/
    create<T extends membershipCreateArgs<ExtArgs>>(
      args: SelectSubset<T, membershipCreateArgs<ExtArgs>>,
    ): Prisma__membershipClient<$Result.GetResult<Prisma.$membershipPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Memberships.
     *     @param {membershipCreateManyArgs} args - Arguments to create many Memberships.
     *     @example
     *     // Create many Memberships
     *     const membership = await prisma.membership.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends membershipCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, membershipCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Membership.
     * @param {membershipDeleteArgs} args - Arguments to delete one Membership.
     * @example
     * // Delete one Membership
     * const Membership = await prisma.membership.delete({
     *   where: {
     *     // ... filter to delete one Membership
     *   }
     * })
     *
     **/
    delete<T extends membershipDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, membershipDeleteArgs<ExtArgs>>,
    ): Prisma__membershipClient<$Result.GetResult<Prisma.$membershipPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Membership.
     * @param {membershipUpdateArgs} args - Arguments to update one Membership.
     * @example
     * // Update one Membership
     * const membership = await prisma.membership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends membershipUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, membershipUpdateArgs<ExtArgs>>,
    ): Prisma__membershipClient<$Result.GetResult<Prisma.$membershipPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Memberships.
     * @param {membershipDeleteManyArgs} args - Arguments to filter Memberships to delete.
     * @example
     * // Delete a few Memberships
     * const { count } = await prisma.membership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends membershipDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, membershipDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memberships
     * const membership = await prisma.membership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends membershipUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, membershipUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Membership.
     * @param {membershipUpsertArgs} args - Arguments to update or create a Membership.
     * @example
     * // Update or create a Membership
     * const membership = await prisma.membership.upsert({
     *   create: {
     *     // ... data to create a Membership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Membership we want to update
     *   }
     * })
     **/
    upsert<T extends membershipUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, membershipUpsertArgs<ExtArgs>>,
    ): Prisma__membershipClient<$Result.GetResult<Prisma.$membershipPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipCountArgs} args - Arguments to filter Memberships to count.
     * @example
     * // Count the number of Memberships
     * const count = await prisma.membership.count({
     *   where: {
     *     // ... the filter for the Memberships we want to count
     *   }
     * })
     **/
    count<T extends membershipCountArgs>(
      args?: Subset<T, membershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MembershipAggregateArgs>(
      args: Subset<T, MembershipAggregateArgs>,
    ): Prisma.PrismaPromise<GetMembershipAggregateType<T>>;

    /**
     * Group by Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends membershipGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: membershipGroupByArgs['orderBy'] }
        : { orderBy?: membershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, membershipGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the membership model
     */
    readonly fields: membershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for membership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__membershipClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    group<T extends groupDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, groupDefaultArgs<ExtArgs>>,
    ): Prisma__groupClient<
      $Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the membership model
   */
  interface membershipFieldRefs {
    readonly id: FieldRef<'membership', 'String'>;
    readonly user_id: FieldRef<'membership', 'String'>;
    readonly group_id: FieldRef<'membership', 'String'>;
    readonly joined_at: FieldRef<'membership', 'DateTime'>;
    readonly left_at: FieldRef<'membership', 'DateTime'>;
    readonly status: FieldRef<'membership', 'String'>;
    readonly created_at: FieldRef<'membership', 'DateTime'>;
    readonly updated_at: FieldRef<'membership', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * membership findUnique
   */
  export type membershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membership
     */
    select?: membershipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membershipInclude<ExtArgs> | null;
    /**
     * Filter, which membership to fetch.
     */
    where: membershipWhereUniqueInput;
  };

  /**
   * membership findUniqueOrThrow
   */
  export type membershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membership
     */
    select?: membershipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membershipInclude<ExtArgs> | null;
    /**
     * Filter, which membership to fetch.
     */
    where: membershipWhereUniqueInput;
  };

  /**
   * membership findFirst
   */
  export type membershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membership
     */
    select?: membershipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membershipInclude<ExtArgs> | null;
    /**
     * Filter, which membership to fetch.
     */
    where?: membershipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of memberships to fetch.
     */
    orderBy?: membershipOrderByWithRelationInput | membershipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for memberships.
     */
    cursor?: membershipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` memberships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` memberships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[];
  };

  /**
   * membership findFirstOrThrow
   */
  export type membershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membership
     */
    select?: membershipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membershipInclude<ExtArgs> | null;
    /**
     * Filter, which membership to fetch.
     */
    where?: membershipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of memberships to fetch.
     */
    orderBy?: membershipOrderByWithRelationInput | membershipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for memberships.
     */
    cursor?: membershipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` memberships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` memberships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[];
  };

  /**
   * membership findMany
   */
  export type membershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membership
     */
    select?: membershipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membershipInclude<ExtArgs> | null;
    /**
     * Filter, which memberships to fetch.
     */
    where?: membershipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of memberships to fetch.
     */
    orderBy?: membershipOrderByWithRelationInput | membershipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing memberships.
     */
    cursor?: membershipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` memberships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` memberships.
     */
    skip?: number;
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[];
  };

  /**
   * membership create
   */
  export type membershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membership
     */
    select?: membershipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membershipInclude<ExtArgs> | null;
    /**
     * The data needed to create a membership.
     */
    data: XOR<membershipCreateInput, membershipUncheckedCreateInput>;
  };

  /**
   * membership createMany
   */
  export type membershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many memberships.
     */
    data: membershipCreateManyInput | membershipCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * membership update
   */
  export type membershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membership
     */
    select?: membershipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membershipInclude<ExtArgs> | null;
    /**
     * The data needed to update a membership.
     */
    data: XOR<membershipUpdateInput, membershipUncheckedUpdateInput>;
    /**
     * Choose, which membership to update.
     */
    where: membershipWhereUniqueInput;
  };

  /**
   * membership updateMany
   */
  export type membershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update memberships.
     */
    data: XOR<membershipUpdateManyMutationInput, membershipUncheckedUpdateManyInput>;
    /**
     * Filter which memberships to update
     */
    where?: membershipWhereInput;
  };

  /**
   * membership upsert
   */
  export type membershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membership
     */
    select?: membershipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membershipInclude<ExtArgs> | null;
    /**
     * The filter to search for the membership to update in case it exists.
     */
    where: membershipWhereUniqueInput;
    /**
     * In case the membership found by the `where` argument doesn't exist, create a new membership with this data.
     */
    create: XOR<membershipCreateInput, membershipUncheckedCreateInput>;
    /**
     * In case the membership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<membershipUpdateInput, membershipUncheckedUpdateInput>;
  };

  /**
   * membership delete
   */
  export type membershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membership
     */
    select?: membershipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membershipInclude<ExtArgs> | null;
    /**
     * Filter which membership to delete.
     */
    where: membershipWhereUniqueInput;
  };

  /**
   * membership deleteMany
   */
  export type membershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which memberships to delete
     */
    where?: membershipWhereInput;
  };

  /**
   * membership without action
   */
  export type membershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membership
     */
    select?: membershipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membershipInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        expense?: boolean | organization$expenseArgs<ExtArgs>;
        group?: boolean | organization$groupArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | organization$expenseArgs<ExtArgs>;
    group?: boolean | organization$groupArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      expense: Prisma.$expensePayload<ExtArgs>[];
      group: Prisma.$groupPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    expense<T extends organization$expenseArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$expenseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findMany'> | Null>;

    group<T extends organization$groupArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$groupArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
    readonly user_id: FieldRef<'organization', 'String'>;
    readonly tenant_id: FieldRef<'organization', 'String'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.expense
   */
  export type organization$expenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    where?: expenseWhereInput;
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[];
    cursor?: expenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * organization.group
   */
  export type organization$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    where?: groupWhereInput;
    orderBy?: groupOrderByWithRelationInput | groupOrderByWithRelationInput[];
    cursor?: groupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[];
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  export type PaymentAvgAggregateOutputType = {
    amount: number | null;
  };

  export type PaymentSumAggregateOutputType = {
    amount: number | null;
  };

  export type PaymentMinAggregateOutputType = {
    id: string | null;
    amount: number | null;
    user_id: string | null;
    expense_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PaymentMaxAggregateOutputType = {
    id: string | null;
    amount: number | null;
    user_id: string | null;
    expense_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PaymentCountAggregateOutputType = {
    id: number;
    amount: number;
    user_id: number;
    expense_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PaymentAvgAggregateInputType = {
    amount?: true;
  };

  export type PaymentSumAggregateInputType = {
    amount?: true;
  };

  export type PaymentMinAggregateInputType = {
    id?: true;
    amount?: true;
    user_id?: true;
    expense_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PaymentMaxAggregateInputType = {
    id?: true;
    amount?: true;
    user_id?: true;
    expense_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PaymentCountAggregateInputType = {
    id?: true;
    amount?: true;
    user_id?: true;
    expense_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment to aggregate.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned payments
     **/
    _count?: true | PaymentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PaymentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PaymentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PaymentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PaymentMaxAggregateInputType;
  };

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>;
  };

  export type paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput;
    orderBy?: paymentOrderByWithAggregationInput | paymentOrderByWithAggregationInput[];
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum;
    having?: paymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
  };

  export type PaymentGroupByOutputType = {
    id: string;
    amount: number;
    user_id: string;
    expense_id: string;
    created_at: Date;
    updated_at: Date;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  type GetPaymentGroupByPayload<T extends paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PaymentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
          : GetScalarType<T[P], PaymentGroupByOutputType[P]>;
      }
    >
  >;

  export type paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      amount?: boolean;
      user_id?: boolean;
      expense_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      expense?: boolean | expenseDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['payment']
  >;

  export type paymentSelectScalar = {
    id?: boolean;
    amount?: boolean;
    user_id?: boolean;
    expense_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type paymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | expenseDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'payment';
    objects: {
      expense: Prisma.$expensePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        amount: number;
        user_id: string;
        expense_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['payment']
    >;
    composites: {};
  };

  type paymentGetPayload<S extends boolean | null | undefined | paymentDefaultArgs> = $Result.GetResult<
    Prisma.$paymentPayload,
    S
  >;

  type paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    paymentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: PaymentCountAggregateInputType | true;
  };

  export interface paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment']; meta: { name: 'payment' } };
    /**
     * Find zero or one Payment that matches the filter.
     * @param {paymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends paymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, paymentFindUniqueArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Payment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {paymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__paymentClient<
      $Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends paymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindFirstArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     *
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends paymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Payment.
     * @param {paymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     *
     **/
    create<T extends paymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, paymentCreateArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Payments.
     *     @param {paymentCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payment = await prisma.payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends paymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Payment.
     * @param {paymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     *
     **/
    delete<T extends paymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, paymentDeleteArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Payment.
     * @param {paymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends paymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, paymentUpdateArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Payments.
     * @param {paymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends paymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends paymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, paymentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Payment.
     * @param {paymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     **/
    upsert<T extends paymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, paymentUpsertArgs<ExtArgs>>,
    ): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
     **/
    count<T extends paymentCountArgs>(
      args?: Subset<T, paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PaymentAggregateArgs>(
      args: Subset<T, PaymentAggregateArgs>,
    ): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends paymentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentGroupByArgs['orderBy'] }
        : { orderBy?: paymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, paymentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the payment model
     */
    readonly fields: paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    expense<T extends expenseDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, expenseDefaultArgs<ExtArgs>>,
    ): Prisma__expenseClient<
      $Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the payment model
   */
  interface paymentFieldRefs {
    readonly id: FieldRef<'payment', 'String'>;
    readonly amount: FieldRef<'payment', 'Int'>;
    readonly user_id: FieldRef<'payment', 'String'>;
    readonly expense_id: FieldRef<'payment', 'String'>;
    readonly created_at: FieldRef<'payment', 'DateTime'>;
    readonly updated_at: FieldRef<'payment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * payment findUnique
   */
  export type paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment findUniqueOrThrow
   */
  export type paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment findFirst
   */
  export type paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * payment findFirstOrThrow
   */
  export type paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * payment findMany
   */
  export type paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing payments.
     */
    cursor?: paymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payments.
     */
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * payment create
   */
  export type paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * The data needed to create a payment.
     */
    data: XOR<paymentCreateInput, paymentUncheckedCreateInput>;
  };

  /**
   * payment createMany
   */
  export type paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * payment update
   */
  export type paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * The data needed to update a payment.
     */
    data: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>;
    /**
     * Choose, which payment to update.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment updateMany
   */
  export type paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>;
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput;
  };

  /**
   * payment upsert
   */
  export type paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * The filter to search for the payment to update in case it exists.
     */
    where: paymentWhereUniqueInput;
    /**
     * In case the payment found by the `where` argument doesn't exist, create a new payment with this data.
     */
    create: XOR<paymentCreateInput, paymentUncheckedCreateInput>;
    /**
     * In case the payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>;
  };

  /**
   * payment delete
   */
  export type paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    /**
     * Filter which payment to delete.
     */
    where: paymentWhereUniqueInput;
  };

  /**
   * payment deleteMany
   */
  export type paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentWhereInput;
  };

  /**
   * payment without action
   */
  export type paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      expense?: boolean | user$expenseArgs<ExtArgs>;
      membership?: boolean | user$membershipArgs<ExtArgs>;
      organization?: boolean | user$organizationArgs<ExtArgs>;
      payment?: boolean | user$paymentArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | user$expenseArgs<ExtArgs>;
    membership?: boolean | user$membershipArgs<ExtArgs>;
    organization?: boolean | user$organizationArgs<ExtArgs>;
    payment?: boolean | user$paymentArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      expense: Prisma.$expensePayload<ExtArgs>[];
      membership: Prisma.$membershipPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>[];
      payment: Prisma.$paymentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    expense<T extends user$expenseArgs<ExtArgs> = {}>(
      args?: Subset<T, user$expenseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findMany'> | Null>;

    membership<T extends user$membershipArgs<ExtArgs> = {}>(
      args?: Subset<T, user$membershipArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membershipPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'> | Null>;

    payment<T extends user$paymentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$paymentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.expense
   */
  export type user$expenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    where?: expenseWhereInput;
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[];
    cursor?: expenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * user.membership
   */
  export type user$membershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membership
     */
    select?: membershipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: membershipInclude<ExtArgs> | null;
    where?: membershipWhereInput;
    orderBy?: membershipOrderByWithRelationInput | membershipOrderByWithRelationInput[];
    cursor?: membershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[];
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    cursor?: organizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * user.payment
   */
  export type user$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentInclude<ExtArgs> | null;
    where?: paymentWhereInput;
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[];
    cursor?: paymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ExpenseScalarFieldEnum: {
    id: 'id';
    amount: 'amount';
    description: 'description';
    user_id: 'user_id';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum];

  export const GroupScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum];

  export const MembershipScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    group_id: 'group_id';
    joined_at: 'joined_at';
    left_at: 'left_at';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type MembershipScalarFieldEnum = (typeof MembershipScalarFieldEnum)[keyof typeof MembershipScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const PaymentScalarFieldEnum: {
    id: 'id';
    amount: 'amount';
    user_id: 'user_id';
    expense_id: 'expense_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type expenseWhereInput = {
    AND?: expenseWhereInput | expenseWhereInput[];
    OR?: expenseWhereInput[];
    NOT?: expenseWhereInput | expenseWhereInput[];
    id?: UuidFilter<'expense'> | string;
    amount?: IntFilter<'expense'> | number;
    description?: StringNullableFilter<'expense'> | string | null;
    user_id?: UuidFilter<'expense'> | string;
    organization_id?: UuidFilter<'expense'> | string;
    created_at?: DateTimeFilter<'expense'> | Date | string;
    updated_at?: DateTimeFilter<'expense'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    payment?: PaymentListRelationFilter;
  };

  export type expenseOrderByWithRelationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    payment?: paymentOrderByRelationAggregateInput;
  };

  export type expenseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: expenseWhereInput | expenseWhereInput[];
      OR?: expenseWhereInput[];
      NOT?: expenseWhereInput | expenseWhereInput[];
      amount?: IntFilter<'expense'> | number;
      description?: StringNullableFilter<'expense'> | string | null;
      user_id?: UuidFilter<'expense'> | string;
      organization_id?: UuidFilter<'expense'> | string;
      created_at?: DateTimeFilter<'expense'> | Date | string;
      updated_at?: DateTimeFilter<'expense'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      payment?: PaymentListRelationFilter;
    },
    'id'
  >;

  export type expenseOrderByWithAggregationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: expenseCountOrderByAggregateInput;
    _avg?: expenseAvgOrderByAggregateInput;
    _max?: expenseMaxOrderByAggregateInput;
    _min?: expenseMinOrderByAggregateInput;
    _sum?: expenseSumOrderByAggregateInput;
  };

  export type expenseScalarWhereWithAggregatesInput = {
    AND?: expenseScalarWhereWithAggregatesInput | expenseScalarWhereWithAggregatesInput[];
    OR?: expenseScalarWhereWithAggregatesInput[];
    NOT?: expenseScalarWhereWithAggregatesInput | expenseScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'expense'> | string;
    amount?: IntWithAggregatesFilter<'expense'> | number;
    description?: StringNullableWithAggregatesFilter<'expense'> | string | null;
    user_id?: UuidWithAggregatesFilter<'expense'> | string;
    organization_id?: UuidWithAggregatesFilter<'expense'> | string;
    created_at?: DateTimeWithAggregatesFilter<'expense'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'expense'> | Date | string;
  };

  export type groupWhereInput = {
    AND?: groupWhereInput | groupWhereInput[];
    OR?: groupWhereInput[];
    NOT?: groupWhereInput | groupWhereInput[];
    id?: UuidFilter<'group'> | string;
    name?: StringFilter<'group'> | string;
    description?: StringNullableFilter<'group'> | string | null;
    organization_id?: UuidFilter<'group'> | string;
    created_at?: DateTimeFilter<'group'> | Date | string;
    updated_at?: DateTimeFilter<'group'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    membership?: MembershipListRelationFilter;
  };

  export type groupOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    membership?: membershipOrderByRelationAggregateInput;
  };

  export type groupWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: groupWhereInput | groupWhereInput[];
      OR?: groupWhereInput[];
      NOT?: groupWhereInput | groupWhereInput[];
      name?: StringFilter<'group'> | string;
      description?: StringNullableFilter<'group'> | string | null;
      organization_id?: UuidFilter<'group'> | string;
      created_at?: DateTimeFilter<'group'> | Date | string;
      updated_at?: DateTimeFilter<'group'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      membership?: MembershipListRelationFilter;
    },
    'id'
  >;

  export type groupOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: groupCountOrderByAggregateInput;
    _max?: groupMaxOrderByAggregateInput;
    _min?: groupMinOrderByAggregateInput;
  };

  export type groupScalarWhereWithAggregatesInput = {
    AND?: groupScalarWhereWithAggregatesInput | groupScalarWhereWithAggregatesInput[];
    OR?: groupScalarWhereWithAggregatesInput[];
    NOT?: groupScalarWhereWithAggregatesInput | groupScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'group'> | string;
    name?: StringWithAggregatesFilter<'group'> | string;
    description?: StringNullableWithAggregatesFilter<'group'> | string | null;
    organization_id?: UuidWithAggregatesFilter<'group'> | string;
    created_at?: DateTimeWithAggregatesFilter<'group'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'group'> | Date | string;
  };

  export type membershipWhereInput = {
    AND?: membershipWhereInput | membershipWhereInput[];
    OR?: membershipWhereInput[];
    NOT?: membershipWhereInput | membershipWhereInput[];
    id?: UuidFilter<'membership'> | string;
    user_id?: UuidFilter<'membership'> | string;
    group_id?: UuidFilter<'membership'> | string;
    joined_at?: DateTimeFilter<'membership'> | Date | string;
    left_at?: DateTimeNullableFilter<'membership'> | Date | string | null;
    status?: StringFilter<'membership'> | string;
    created_at?: DateTimeFilter<'membership'> | Date | string;
    updated_at?: DateTimeFilter<'membership'> | Date | string;
    group?: XOR<GroupRelationFilter, groupWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type membershipOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    group_id?: SortOrder;
    joined_at?: SortOrder;
    left_at?: SortOrderInput | SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    group?: groupOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type membershipWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: membershipWhereInput | membershipWhereInput[];
      OR?: membershipWhereInput[];
      NOT?: membershipWhereInput | membershipWhereInput[];
      user_id?: UuidFilter<'membership'> | string;
      group_id?: UuidFilter<'membership'> | string;
      joined_at?: DateTimeFilter<'membership'> | Date | string;
      left_at?: DateTimeNullableFilter<'membership'> | Date | string | null;
      status?: StringFilter<'membership'> | string;
      created_at?: DateTimeFilter<'membership'> | Date | string;
      updated_at?: DateTimeFilter<'membership'> | Date | string;
      group?: XOR<GroupRelationFilter, groupWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type membershipOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    group_id?: SortOrder;
    joined_at?: SortOrder;
    left_at?: SortOrderInput | SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: membershipCountOrderByAggregateInput;
    _max?: membershipMaxOrderByAggregateInput;
    _min?: membershipMinOrderByAggregateInput;
  };

  export type membershipScalarWhereWithAggregatesInput = {
    AND?: membershipScalarWhereWithAggregatesInput | membershipScalarWhereWithAggregatesInput[];
    OR?: membershipScalarWhereWithAggregatesInput[];
    NOT?: membershipScalarWhereWithAggregatesInput | membershipScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'membership'> | string;
    user_id?: UuidWithAggregatesFilter<'membership'> | string;
    group_id?: UuidWithAggregatesFilter<'membership'> | string;
    joined_at?: DateTimeWithAggregatesFilter<'membership'> | Date | string;
    left_at?: DateTimeNullableWithAggregatesFilter<'membership'> | Date | string | null;
    status?: StringWithAggregatesFilter<'membership'> | string;
    created_at?: DateTimeWithAggregatesFilter<'membership'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'membership'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
    expense?: ExpenseListRelationFilter;
    group?: GroupListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    expense?: expenseOrderByRelationAggregateInput;
    group?: groupOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      user_id?: UuidFilter<'organization'> | string;
      tenant_id?: StringFilter<'organization'> | string;
      expense?: ExpenseListRelationFilter;
      group?: GroupListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'organization'> | string;
    tenant_id?: StringWithAggregatesFilter<'organization'> | string;
  };

  export type paymentWhereInput = {
    AND?: paymentWhereInput | paymentWhereInput[];
    OR?: paymentWhereInput[];
    NOT?: paymentWhereInput | paymentWhereInput[];
    id?: UuidFilter<'payment'> | string;
    amount?: IntFilter<'payment'> | number;
    user_id?: UuidFilter<'payment'> | string;
    expense_id?: UuidFilter<'payment'> | string;
    created_at?: DateTimeFilter<'payment'> | Date | string;
    updated_at?: DateTimeFilter<'payment'> | Date | string;
    expense?: XOR<ExpenseRelationFilter, expenseWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type paymentOrderByWithRelationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    user_id?: SortOrder;
    expense_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    expense?: expenseOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type paymentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: paymentWhereInput | paymentWhereInput[];
      OR?: paymentWhereInput[];
      NOT?: paymentWhereInput | paymentWhereInput[];
      amount?: IntFilter<'payment'> | number;
      user_id?: UuidFilter<'payment'> | string;
      expense_id?: UuidFilter<'payment'> | string;
      created_at?: DateTimeFilter<'payment'> | Date | string;
      updated_at?: DateTimeFilter<'payment'> | Date | string;
      expense?: XOR<ExpenseRelationFilter, expenseWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type paymentOrderByWithAggregationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    user_id?: SortOrder;
    expense_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: paymentCountOrderByAggregateInput;
    _avg?: paymentAvgOrderByAggregateInput;
    _max?: paymentMaxOrderByAggregateInput;
    _min?: paymentMinOrderByAggregateInput;
    _sum?: paymentSumOrderByAggregateInput;
  };

  export type paymentScalarWhereWithAggregatesInput = {
    AND?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[];
    OR?: paymentScalarWhereWithAggregatesInput[];
    NOT?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'payment'> | string;
    amount?: IntWithAggregatesFilter<'payment'> | number;
    user_id?: UuidWithAggregatesFilter<'payment'> | string;
    expense_id?: UuidWithAggregatesFilter<'payment'> | string;
    created_at?: DateTimeWithAggregatesFilter<'payment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'payment'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    expense?: ExpenseListRelationFilter;
    membership?: MembershipListRelationFilter;
    organization?: OrganizationListRelationFilter;
    payment?: PaymentListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    expense?: expenseOrderByRelationAggregateInput;
    membership?: membershipOrderByRelationAggregateInput;
    organization?: organizationOrderByRelationAggregateInput;
    payment?: paymentOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      expense?: ExpenseListRelationFilter;
      membership?: MembershipListRelationFilter;
      organization?: OrganizationListRelationFilter;
      payment?: PaymentListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type expenseCreateInput = {
    id?: string;
    amount: number;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutExpenseInput;
    user: userCreateNestedOneWithoutExpenseInput;
    payment?: paymentCreateNestedManyWithoutExpenseInput;
  };

  export type expenseUncheckedCreateInput = {
    id?: string;
    amount: number;
    description?: string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutExpenseInput;
  };

  export type expenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutExpenseNestedInput;
    user?: userUpdateOneRequiredWithoutExpenseNestedInput;
    payment?: paymentUpdateManyWithoutExpenseNestedInput;
  };

  export type expenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutExpenseNestedInput;
  };

  export type expenseCreateManyInput = {
    id?: string;
    amount: number;
    description?: string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type expenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type expenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type groupCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutGroupInput;
    membership?: membershipCreateNestedManyWithoutGroupInput;
  };

  export type groupUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    membership?: membershipUncheckedCreateNestedManyWithoutGroupInput;
  };

  export type groupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutGroupNestedInput;
    membership?: membershipUpdateManyWithoutGroupNestedInput;
  };

  export type groupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: membershipUncheckedUpdateManyWithoutGroupNestedInput;
  };

  export type groupCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type groupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type groupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type membershipCreateInput = {
    id?: string;
    joined_at?: Date | string;
    left_at?: Date | string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: groupCreateNestedOneWithoutMembershipInput;
    user: userCreateNestedOneWithoutMembershipInput;
  };

  export type membershipUncheckedCreateInput = {
    id?: string;
    user_id: string;
    group_id: string;
    joined_at?: Date | string;
    left_at?: Date | string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type membershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group?: groupUpdateOneRequiredWithoutMembershipNestedInput;
    user?: userUpdateOneRequiredWithoutMembershipNestedInput;
  };

  export type membershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    group_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type membershipCreateManyInput = {
    id?: string;
    user_id: string;
    group_id: string;
    joined_at?: Date | string;
    left_at?: Date | string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type membershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type membershipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    group_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    expense?: expenseCreateNestedManyWithoutOrganizationInput;
    group?: groupCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    expense?: expenseUncheckedCreateNestedManyWithoutOrganizationInput;
    group?: groupUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    expense?: expenseUpdateManyWithoutOrganizationNestedInput;
    group?: groupUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    expense?: expenseUncheckedUpdateManyWithoutOrganizationNestedInput;
    group?: groupUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type paymentCreateInput = {
    id?: string;
    amount: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense: expenseCreateNestedOneWithoutPaymentInput;
    user: userCreateNestedOneWithoutPaymentInput;
  };

  export type paymentUncheckedCreateInput = {
    id?: string;
    amount: number;
    user_id: string;
    expense_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUpdateOneRequiredWithoutPaymentNestedInput;
    user?: userUpdateOneRequiredWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    expense_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentCreateManyInput = {
    id?: string;
    amount: number;
    user_id: string;
    expense_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    expense_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseCreateNestedManyWithoutUserInput;
    membership?: membershipCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    payment?: paymentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseUncheckedCreateNestedManyWithoutUserInput;
    membership?: membershipUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUpdateManyWithoutUserNestedInput;
    membership?: membershipUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    payment?: paymentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUncheckedUpdateManyWithoutUserNestedInput;
    membership?: membershipUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type OrganizationRelationFilter = {
    is?: organizationWhereInput;
    isNot?: organizationWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type PaymentListRelationFilter = {
    every?: paymentWhereInput;
    some?: paymentWhereInput;
    none?: paymentWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type paymentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type expenseCountOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type expenseAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type expenseMaxOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type expenseMinOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type expenseSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type MembershipListRelationFilter = {
    every?: membershipWhereInput;
    some?: membershipWhereInput;
    none?: membershipWhereInput;
  };

  export type membershipOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type groupCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type groupMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type groupMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type GroupRelationFilter = {
    is?: groupWhereInput;
    isNot?: groupWhereInput;
  };

  export type membershipCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    group_id?: SortOrder;
    joined_at?: SortOrder;
    left_at?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type membershipMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    group_id?: SortOrder;
    joined_at?: SortOrder;
    left_at?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type membershipMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    group_id?: SortOrder;
    joined_at?: SortOrder;
    left_at?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type ExpenseListRelationFilter = {
    every?: expenseWhereInput;
    some?: expenseWhereInput;
    none?: expenseWhereInput;
  };

  export type GroupListRelationFilter = {
    every?: groupWhereInput;
    some?: groupWhereInput;
    none?: groupWhereInput;
  };

  export type expenseOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type groupOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type ExpenseRelationFilter = {
    is?: expenseWhereInput;
    isNot?: expenseWhereInput;
  };

  export type paymentCountOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    user_id?: SortOrder;
    expense_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type paymentAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type paymentMaxOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    user_id?: SortOrder;
    expense_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type paymentMinOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    user_id?: SortOrder;
    expense_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type paymentSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type OrganizationListRelationFilter = {
    every?: organizationWhereInput;
    some?: organizationWhereInput;
    none?: organizationWhereInput;
  };

  export type organizationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationCreateNestedOneWithoutExpenseInput = {
    create?: XOR<organizationCreateWithoutExpenseInput, organizationUncheckedCreateWithoutExpenseInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutExpenseInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutExpenseInput = {
    create?: XOR<userCreateWithoutExpenseInput, userUncheckedCreateWithoutExpenseInput>;
    connectOrCreate?: userCreateOrConnectWithoutExpenseInput;
    connect?: userWhereUniqueInput;
  };

  export type paymentCreateNestedManyWithoutExpenseInput = {
    create?:
      | XOR<paymentCreateWithoutExpenseInput, paymentUncheckedCreateWithoutExpenseInput>
      | paymentCreateWithoutExpenseInput[]
      | paymentUncheckedCreateWithoutExpenseInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutExpenseInput | paymentCreateOrConnectWithoutExpenseInput[];
    createMany?: paymentCreateManyExpenseInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type paymentUncheckedCreateNestedManyWithoutExpenseInput = {
    create?:
      | XOR<paymentCreateWithoutExpenseInput, paymentUncheckedCreateWithoutExpenseInput>
      | paymentCreateWithoutExpenseInput[]
      | paymentUncheckedCreateWithoutExpenseInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutExpenseInput | paymentCreateOrConnectWithoutExpenseInput[];
    createMany?: paymentCreateManyExpenseInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type organizationUpdateOneRequiredWithoutExpenseNestedInput = {
    create?: XOR<organizationCreateWithoutExpenseInput, organizationUncheckedCreateWithoutExpenseInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutExpenseInput;
    upsert?: organizationUpsertWithoutExpenseInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutExpenseInput, organizationUpdateWithoutExpenseInput>,
      organizationUncheckedUpdateWithoutExpenseInput
    >;
  };

  export type userUpdateOneRequiredWithoutExpenseNestedInput = {
    create?: XOR<userCreateWithoutExpenseInput, userUncheckedCreateWithoutExpenseInput>;
    connectOrCreate?: userCreateOrConnectWithoutExpenseInput;
    upsert?: userUpsertWithoutExpenseInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutExpenseInput, userUpdateWithoutExpenseInput>,
      userUncheckedUpdateWithoutExpenseInput
    >;
  };

  export type paymentUpdateManyWithoutExpenseNestedInput = {
    create?:
      | XOR<paymentCreateWithoutExpenseInput, paymentUncheckedCreateWithoutExpenseInput>
      | paymentCreateWithoutExpenseInput[]
      | paymentUncheckedCreateWithoutExpenseInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutExpenseInput | paymentCreateOrConnectWithoutExpenseInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutExpenseInput | paymentUpsertWithWhereUniqueWithoutExpenseInput[];
    createMany?: paymentCreateManyExpenseInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutExpenseInput | paymentUpdateWithWhereUniqueWithoutExpenseInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutExpenseInput | paymentUpdateManyWithWhereWithoutExpenseInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type paymentUncheckedUpdateManyWithoutExpenseNestedInput = {
    create?:
      | XOR<paymentCreateWithoutExpenseInput, paymentUncheckedCreateWithoutExpenseInput>
      | paymentCreateWithoutExpenseInput[]
      | paymentUncheckedCreateWithoutExpenseInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutExpenseInput | paymentCreateOrConnectWithoutExpenseInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutExpenseInput | paymentUpsertWithWhereUniqueWithoutExpenseInput[];
    createMany?: paymentCreateManyExpenseInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutExpenseInput | paymentUpdateWithWhereUniqueWithoutExpenseInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutExpenseInput | paymentUpdateManyWithWhereWithoutExpenseInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type organizationCreateNestedOneWithoutGroupInput = {
    create?: XOR<organizationCreateWithoutGroupInput, organizationUncheckedCreateWithoutGroupInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutGroupInput;
    connect?: organizationWhereUniqueInput;
  };

  export type membershipCreateNestedManyWithoutGroupInput = {
    create?:
      | XOR<membershipCreateWithoutGroupInput, membershipUncheckedCreateWithoutGroupInput>
      | membershipCreateWithoutGroupInput[]
      | membershipUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: membershipCreateOrConnectWithoutGroupInput | membershipCreateOrConnectWithoutGroupInput[];
    createMany?: membershipCreateManyGroupInputEnvelope;
    connect?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
  };

  export type membershipUncheckedCreateNestedManyWithoutGroupInput = {
    create?:
      | XOR<membershipCreateWithoutGroupInput, membershipUncheckedCreateWithoutGroupInput>
      | membershipCreateWithoutGroupInput[]
      | membershipUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: membershipCreateOrConnectWithoutGroupInput | membershipCreateOrConnectWithoutGroupInput[];
    createMany?: membershipCreateManyGroupInputEnvelope;
    connect?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
  };

  export type organizationUpdateOneRequiredWithoutGroupNestedInput = {
    create?: XOR<organizationCreateWithoutGroupInput, organizationUncheckedCreateWithoutGroupInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutGroupInput;
    upsert?: organizationUpsertWithoutGroupInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutGroupInput, organizationUpdateWithoutGroupInput>,
      organizationUncheckedUpdateWithoutGroupInput
    >;
  };

  export type membershipUpdateManyWithoutGroupNestedInput = {
    create?:
      | XOR<membershipCreateWithoutGroupInput, membershipUncheckedCreateWithoutGroupInput>
      | membershipCreateWithoutGroupInput[]
      | membershipUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: membershipCreateOrConnectWithoutGroupInput | membershipCreateOrConnectWithoutGroupInput[];
    upsert?: membershipUpsertWithWhereUniqueWithoutGroupInput | membershipUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: membershipCreateManyGroupInputEnvelope;
    set?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
    disconnect?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
    delete?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
    connect?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
    update?: membershipUpdateWithWhereUniqueWithoutGroupInput | membershipUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: membershipUpdateManyWithWhereWithoutGroupInput | membershipUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: membershipScalarWhereInput | membershipScalarWhereInput[];
  };

  export type membershipUncheckedUpdateManyWithoutGroupNestedInput = {
    create?:
      | XOR<membershipCreateWithoutGroupInput, membershipUncheckedCreateWithoutGroupInput>
      | membershipCreateWithoutGroupInput[]
      | membershipUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: membershipCreateOrConnectWithoutGroupInput | membershipCreateOrConnectWithoutGroupInput[];
    upsert?: membershipUpsertWithWhereUniqueWithoutGroupInput | membershipUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: membershipCreateManyGroupInputEnvelope;
    set?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
    disconnect?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
    delete?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
    connect?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
    update?: membershipUpdateWithWhereUniqueWithoutGroupInput | membershipUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: membershipUpdateManyWithWhereWithoutGroupInput | membershipUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: membershipScalarWhereInput | membershipScalarWhereInput[];
  };

  export type groupCreateNestedOneWithoutMembershipInput = {
    create?: XOR<groupCreateWithoutMembershipInput, groupUncheckedCreateWithoutMembershipInput>;
    connectOrCreate?: groupCreateOrConnectWithoutMembershipInput;
    connect?: groupWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutMembershipInput = {
    create?: XOR<userCreateWithoutMembershipInput, userUncheckedCreateWithoutMembershipInput>;
    connectOrCreate?: userCreateOrConnectWithoutMembershipInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type groupUpdateOneRequiredWithoutMembershipNestedInput = {
    create?: XOR<groupCreateWithoutMembershipInput, groupUncheckedCreateWithoutMembershipInput>;
    connectOrCreate?: groupCreateOrConnectWithoutMembershipInput;
    upsert?: groupUpsertWithoutMembershipInput;
    connect?: groupWhereUniqueInput;
    update?: XOR<
      XOR<groupUpdateToOneWithWhereWithoutMembershipInput, groupUpdateWithoutMembershipInput>,
      groupUncheckedUpdateWithoutMembershipInput
    >;
  };

  export type userUpdateOneRequiredWithoutMembershipNestedInput = {
    create?: XOR<userCreateWithoutMembershipInput, userUncheckedCreateWithoutMembershipInput>;
    connectOrCreate?: userCreateOrConnectWithoutMembershipInput;
    upsert?: userUpsertWithoutMembershipInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutMembershipInput, userUpdateWithoutMembershipInput>,
      userUncheckedUpdateWithoutMembershipInput
    >;
  };

  export type expenseCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<expenseCreateWithoutOrganizationInput, expenseUncheckedCreateWithoutOrganizationInput>
      | expenseCreateWithoutOrganizationInput[]
      | expenseUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: expenseCreateOrConnectWithoutOrganizationInput | expenseCreateOrConnectWithoutOrganizationInput[];
    createMany?: expenseCreateManyOrganizationInputEnvelope;
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
  };

  export type groupCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<groupCreateWithoutOrganizationInput, groupUncheckedCreateWithoutOrganizationInput>
      | groupCreateWithoutOrganizationInput[]
      | groupUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: groupCreateOrConnectWithoutOrganizationInput | groupCreateOrConnectWithoutOrganizationInput[];
    createMany?: groupCreateManyOrganizationInputEnvelope;
    connect?: groupWhereUniqueInput | groupWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
  };

  export type expenseUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<expenseCreateWithoutOrganizationInput, expenseUncheckedCreateWithoutOrganizationInput>
      | expenseCreateWithoutOrganizationInput[]
      | expenseUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: expenseCreateOrConnectWithoutOrganizationInput | expenseCreateOrConnectWithoutOrganizationInput[];
    createMany?: expenseCreateManyOrganizationInputEnvelope;
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
  };

  export type groupUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<groupCreateWithoutOrganizationInput, groupUncheckedCreateWithoutOrganizationInput>
      | groupCreateWithoutOrganizationInput[]
      | groupUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: groupCreateOrConnectWithoutOrganizationInput | groupCreateOrConnectWithoutOrganizationInput[];
    createMany?: groupCreateManyOrganizationInputEnvelope;
    connect?: groupWhereUniqueInput | groupWhereUniqueInput[];
  };

  export type expenseUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<expenseCreateWithoutOrganizationInput, expenseUncheckedCreateWithoutOrganizationInput>
      | expenseCreateWithoutOrganizationInput[]
      | expenseUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: expenseCreateOrConnectWithoutOrganizationInput | expenseCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | expenseUpsertWithWhereUniqueWithoutOrganizationInput
      | expenseUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: expenseCreateManyOrganizationInputEnvelope;
    set?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    disconnect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    delete?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    update?:
      | expenseUpdateWithWhereUniqueWithoutOrganizationInput
      | expenseUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | expenseUpdateManyWithWhereWithoutOrganizationInput
      | expenseUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: expenseScalarWhereInput | expenseScalarWhereInput[];
  };

  export type groupUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<groupCreateWithoutOrganizationInput, groupUncheckedCreateWithoutOrganizationInput>
      | groupCreateWithoutOrganizationInput[]
      | groupUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: groupCreateOrConnectWithoutOrganizationInput | groupCreateOrConnectWithoutOrganizationInput[];
    upsert?: groupUpsertWithWhereUniqueWithoutOrganizationInput | groupUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: groupCreateManyOrganizationInputEnvelope;
    set?: groupWhereUniqueInput | groupWhereUniqueInput[];
    disconnect?: groupWhereUniqueInput | groupWhereUniqueInput[];
    delete?: groupWhereUniqueInput | groupWhereUniqueInput[];
    connect?: groupWhereUniqueInput | groupWhereUniqueInput[];
    update?: groupUpdateWithWhereUniqueWithoutOrganizationInput | groupUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: groupUpdateManyWithWhereWithoutOrganizationInput | groupUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: groupScalarWhereInput | groupScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    upsert?: userUpsertWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOrganizationInput, userUpdateWithoutOrganizationInput>,
      userUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type expenseUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<expenseCreateWithoutOrganizationInput, expenseUncheckedCreateWithoutOrganizationInput>
      | expenseCreateWithoutOrganizationInput[]
      | expenseUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: expenseCreateOrConnectWithoutOrganizationInput | expenseCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | expenseUpsertWithWhereUniqueWithoutOrganizationInput
      | expenseUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: expenseCreateManyOrganizationInputEnvelope;
    set?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    disconnect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    delete?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    update?:
      | expenseUpdateWithWhereUniqueWithoutOrganizationInput
      | expenseUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | expenseUpdateManyWithWhereWithoutOrganizationInput
      | expenseUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: expenseScalarWhereInput | expenseScalarWhereInput[];
  };

  export type groupUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<groupCreateWithoutOrganizationInput, groupUncheckedCreateWithoutOrganizationInput>
      | groupCreateWithoutOrganizationInput[]
      | groupUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: groupCreateOrConnectWithoutOrganizationInput | groupCreateOrConnectWithoutOrganizationInput[];
    upsert?: groupUpsertWithWhereUniqueWithoutOrganizationInput | groupUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: groupCreateManyOrganizationInputEnvelope;
    set?: groupWhereUniqueInput | groupWhereUniqueInput[];
    disconnect?: groupWhereUniqueInput | groupWhereUniqueInput[];
    delete?: groupWhereUniqueInput | groupWhereUniqueInput[];
    connect?: groupWhereUniqueInput | groupWhereUniqueInput[];
    update?: groupUpdateWithWhereUniqueWithoutOrganizationInput | groupUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: groupUpdateManyWithWhereWithoutOrganizationInput | groupUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: groupScalarWhereInput | groupScalarWhereInput[];
  };

  export type expenseCreateNestedOneWithoutPaymentInput = {
    create?: XOR<expenseCreateWithoutPaymentInput, expenseUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: expenseCreateOrConnectWithoutPaymentInput;
    connect?: expenseWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutPaymentInput = {
    create?: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: userCreateOrConnectWithoutPaymentInput;
    connect?: userWhereUniqueInput;
  };

  export type expenseUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<expenseCreateWithoutPaymentInput, expenseUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: expenseCreateOrConnectWithoutPaymentInput;
    upsert?: expenseUpsertWithoutPaymentInput;
    connect?: expenseWhereUniqueInput;
    update?: XOR<
      XOR<expenseUpdateToOneWithWhereWithoutPaymentInput, expenseUpdateWithoutPaymentInput>,
      expenseUncheckedUpdateWithoutPaymentInput
    >;
  };

  export type userUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: userCreateOrConnectWithoutPaymentInput;
    upsert?: userUpsertWithoutPaymentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutPaymentInput, userUpdateWithoutPaymentInput>,
      userUncheckedUpdateWithoutPaymentInput
    >;
  };

  export type expenseCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput>
      | expenseCreateWithoutUserInput[]
      | expenseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: expenseCreateOrConnectWithoutUserInput | expenseCreateOrConnectWithoutUserInput[];
    createMany?: expenseCreateManyUserInputEnvelope;
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
  };

  export type membershipCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<membershipCreateWithoutUserInput, membershipUncheckedCreateWithoutUserInput>
      | membershipCreateWithoutUserInput[]
      | membershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: membershipCreateOrConnectWithoutUserInput | membershipCreateOrConnectWithoutUserInput[];
    createMany?: membershipCreateManyUserInputEnvelope;
    connect?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
  };

  export type organizationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type paymentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type expenseUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput>
      | expenseCreateWithoutUserInput[]
      | expenseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: expenseCreateOrConnectWithoutUserInput | expenseCreateOrConnectWithoutUserInput[];
    createMany?: expenseCreateManyUserInputEnvelope;
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
  };

  export type membershipUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<membershipCreateWithoutUserInput, membershipUncheckedCreateWithoutUserInput>
      | membershipCreateWithoutUserInput[]
      | membershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: membershipCreateOrConnectWithoutUserInput | membershipCreateOrConnectWithoutUserInput[];
    createMany?: membershipCreateManyUserInputEnvelope;
    connect?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
  };

  export type organizationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type paymentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
  };

  export type expenseUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput>
      | expenseCreateWithoutUserInput[]
      | expenseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: expenseCreateOrConnectWithoutUserInput | expenseCreateOrConnectWithoutUserInput[];
    upsert?: expenseUpsertWithWhereUniqueWithoutUserInput | expenseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: expenseCreateManyUserInputEnvelope;
    set?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    disconnect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    delete?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    update?: expenseUpdateWithWhereUniqueWithoutUserInput | expenseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: expenseUpdateManyWithWhereWithoutUserInput | expenseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: expenseScalarWhereInput | expenseScalarWhereInput[];
  };

  export type membershipUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<membershipCreateWithoutUserInput, membershipUncheckedCreateWithoutUserInput>
      | membershipCreateWithoutUserInput[]
      | membershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: membershipCreateOrConnectWithoutUserInput | membershipCreateOrConnectWithoutUserInput[];
    upsert?: membershipUpsertWithWhereUniqueWithoutUserInput | membershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: membershipCreateManyUserInputEnvelope;
    set?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
    disconnect?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
    delete?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
    connect?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
    update?: membershipUpdateWithWhereUniqueWithoutUserInput | membershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: membershipUpdateManyWithWhereWithoutUserInput | membershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: membershipScalarWhereInput | membershipScalarWhereInput[];
  };

  export type organizationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type paymentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutUserInput | paymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutUserInput | paymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutUserInput | paymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type expenseUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput>
      | expenseCreateWithoutUserInput[]
      | expenseUncheckedCreateWithoutUserInput[];
    connectOrCreate?: expenseCreateOrConnectWithoutUserInput | expenseCreateOrConnectWithoutUserInput[];
    upsert?: expenseUpsertWithWhereUniqueWithoutUserInput | expenseUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: expenseCreateManyUserInputEnvelope;
    set?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    disconnect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    delete?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[];
    update?: expenseUpdateWithWhereUniqueWithoutUserInput | expenseUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: expenseUpdateManyWithWhereWithoutUserInput | expenseUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: expenseScalarWhereInput | expenseScalarWhereInput[];
  };

  export type membershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<membershipCreateWithoutUserInput, membershipUncheckedCreateWithoutUserInput>
      | membershipCreateWithoutUserInput[]
      | membershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: membershipCreateOrConnectWithoutUserInput | membershipCreateOrConnectWithoutUserInput[];
    upsert?: membershipUpsertWithWhereUniqueWithoutUserInput | membershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: membershipCreateManyUserInputEnvelope;
    set?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
    disconnect?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
    delete?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
    connect?: membershipWhereUniqueInput | membershipWhereUniqueInput[];
    update?: membershipUpdateWithWhereUniqueWithoutUserInput | membershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: membershipUpdateManyWithWhereWithoutUserInput | membershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: membershipScalarWhereInput | membershipScalarWhereInput[];
  };

  export type organizationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type paymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
      | paymentCreateWithoutUserInput[]
      | paymentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[];
    upsert?: paymentUpsertWithWhereUniqueWithoutUserInput | paymentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: paymentCreateManyUserInputEnvelope;
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[];
    update?: paymentUpdateWithWhereUniqueWithoutUserInput | paymentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: paymentUpdateManyWithWhereWithoutUserInput | paymentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type organizationCreateWithoutExpenseInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    group?: groupCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutExpenseInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    group?: groupUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutExpenseInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutExpenseInput, organizationUncheckedCreateWithoutExpenseInput>;
  };

  export type userCreateWithoutExpenseInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    membership?: membershipCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    payment?: paymentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutExpenseInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    membership?: membershipUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutExpenseInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutExpenseInput, userUncheckedCreateWithoutExpenseInput>;
  };

  export type paymentCreateWithoutExpenseInput = {
    id?: string;
    amount: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutPaymentInput;
  };

  export type paymentUncheckedCreateWithoutExpenseInput = {
    id?: string;
    amount: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentCreateOrConnectWithoutExpenseInput = {
    where: paymentWhereUniqueInput;
    create: XOR<paymentCreateWithoutExpenseInput, paymentUncheckedCreateWithoutExpenseInput>;
  };

  export type paymentCreateManyExpenseInputEnvelope = {
    data: paymentCreateManyExpenseInput | paymentCreateManyExpenseInput[];
    skipDuplicates?: boolean;
  };

  export type organizationUpsertWithoutExpenseInput = {
    update: XOR<organizationUpdateWithoutExpenseInput, organizationUncheckedUpdateWithoutExpenseInput>;
    create: XOR<organizationCreateWithoutExpenseInput, organizationUncheckedCreateWithoutExpenseInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutExpenseInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutExpenseInput, organizationUncheckedUpdateWithoutExpenseInput>;
  };

  export type organizationUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    group?: groupUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    group?: groupUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type userUpsertWithoutExpenseInput = {
    update: XOR<userUpdateWithoutExpenseInput, userUncheckedUpdateWithoutExpenseInput>;
    create: XOR<userCreateWithoutExpenseInput, userUncheckedCreateWithoutExpenseInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutExpenseInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutExpenseInput, userUncheckedUpdateWithoutExpenseInput>;
  };

  export type userUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: membershipUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    payment?: paymentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: membershipUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type paymentUpsertWithWhereUniqueWithoutExpenseInput = {
    where: paymentWhereUniqueInput;
    update: XOR<paymentUpdateWithoutExpenseInput, paymentUncheckedUpdateWithoutExpenseInput>;
    create: XOR<paymentCreateWithoutExpenseInput, paymentUncheckedCreateWithoutExpenseInput>;
  };

  export type paymentUpdateWithWhereUniqueWithoutExpenseInput = {
    where: paymentWhereUniqueInput;
    data: XOR<paymentUpdateWithoutExpenseInput, paymentUncheckedUpdateWithoutExpenseInput>;
  };

  export type paymentUpdateManyWithWhereWithoutExpenseInput = {
    where: paymentScalarWhereInput;
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutExpenseInput>;
  };

  export type paymentScalarWhereInput = {
    AND?: paymentScalarWhereInput | paymentScalarWhereInput[];
    OR?: paymentScalarWhereInput[];
    NOT?: paymentScalarWhereInput | paymentScalarWhereInput[];
    id?: UuidFilter<'payment'> | string;
    amount?: IntFilter<'payment'> | number;
    user_id?: UuidFilter<'payment'> | string;
    expense_id?: UuidFilter<'payment'> | string;
    created_at?: DateTimeFilter<'payment'> | Date | string;
    updated_at?: DateTimeFilter<'payment'> | Date | string;
  };

  export type organizationCreateWithoutGroupInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    expense?: expenseCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutGroupInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    expense?: expenseUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutGroupInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutGroupInput, organizationUncheckedCreateWithoutGroupInput>;
  };

  export type membershipCreateWithoutGroupInput = {
    id?: string;
    joined_at?: Date | string;
    left_at?: Date | string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutMembershipInput;
  };

  export type membershipUncheckedCreateWithoutGroupInput = {
    id?: string;
    user_id: string;
    joined_at?: Date | string;
    left_at?: Date | string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type membershipCreateOrConnectWithoutGroupInput = {
    where: membershipWhereUniqueInput;
    create: XOR<membershipCreateWithoutGroupInput, membershipUncheckedCreateWithoutGroupInput>;
  };

  export type membershipCreateManyGroupInputEnvelope = {
    data: membershipCreateManyGroupInput | membershipCreateManyGroupInput[];
    skipDuplicates?: boolean;
  };

  export type organizationUpsertWithoutGroupInput = {
    update: XOR<organizationUpdateWithoutGroupInput, organizationUncheckedUpdateWithoutGroupInput>;
    create: XOR<organizationCreateWithoutGroupInput, organizationUncheckedCreateWithoutGroupInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutGroupInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutGroupInput, organizationUncheckedUpdateWithoutGroupInput>;
  };

  export type organizationUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    expense?: expenseUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    expense?: expenseUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type membershipUpsertWithWhereUniqueWithoutGroupInput = {
    where: membershipWhereUniqueInput;
    update: XOR<membershipUpdateWithoutGroupInput, membershipUncheckedUpdateWithoutGroupInput>;
    create: XOR<membershipCreateWithoutGroupInput, membershipUncheckedCreateWithoutGroupInput>;
  };

  export type membershipUpdateWithWhereUniqueWithoutGroupInput = {
    where: membershipWhereUniqueInput;
    data: XOR<membershipUpdateWithoutGroupInput, membershipUncheckedUpdateWithoutGroupInput>;
  };

  export type membershipUpdateManyWithWhereWithoutGroupInput = {
    where: membershipScalarWhereInput;
    data: XOR<membershipUpdateManyMutationInput, membershipUncheckedUpdateManyWithoutGroupInput>;
  };

  export type membershipScalarWhereInput = {
    AND?: membershipScalarWhereInput | membershipScalarWhereInput[];
    OR?: membershipScalarWhereInput[];
    NOT?: membershipScalarWhereInput | membershipScalarWhereInput[];
    id?: UuidFilter<'membership'> | string;
    user_id?: UuidFilter<'membership'> | string;
    group_id?: UuidFilter<'membership'> | string;
    joined_at?: DateTimeFilter<'membership'> | Date | string;
    left_at?: DateTimeNullableFilter<'membership'> | Date | string | null;
    status?: StringFilter<'membership'> | string;
    created_at?: DateTimeFilter<'membership'> | Date | string;
    updated_at?: DateTimeFilter<'membership'> | Date | string;
  };

  export type groupCreateWithoutMembershipInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutGroupInput;
  };

  export type groupUncheckedCreateWithoutMembershipInput = {
    id?: string;
    name: string;
    description?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type groupCreateOrConnectWithoutMembershipInput = {
    where: groupWhereUniqueInput;
    create: XOR<groupCreateWithoutMembershipInput, groupUncheckedCreateWithoutMembershipInput>;
  };

  export type userCreateWithoutMembershipInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    payment?: paymentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutMembershipInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutMembershipInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutMembershipInput, userUncheckedCreateWithoutMembershipInput>;
  };

  export type groupUpsertWithoutMembershipInput = {
    update: XOR<groupUpdateWithoutMembershipInput, groupUncheckedUpdateWithoutMembershipInput>;
    create: XOR<groupCreateWithoutMembershipInput, groupUncheckedCreateWithoutMembershipInput>;
    where?: groupWhereInput;
  };

  export type groupUpdateToOneWithWhereWithoutMembershipInput = {
    where?: groupWhereInput;
    data: XOR<groupUpdateWithoutMembershipInput, groupUncheckedUpdateWithoutMembershipInput>;
  };

  export type groupUpdateWithoutMembershipInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutGroupNestedInput;
  };

  export type groupUncheckedUpdateWithoutMembershipInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutMembershipInput = {
    update: XOR<userUpdateWithoutMembershipInput, userUncheckedUpdateWithoutMembershipInput>;
    create: XOR<userCreateWithoutMembershipInput, userUncheckedCreateWithoutMembershipInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutMembershipInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutMembershipInput, userUncheckedUpdateWithoutMembershipInput>;
  };

  export type userUpdateWithoutMembershipInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    payment?: paymentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutMembershipInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type expenseCreateWithoutOrganizationInput = {
    id?: string;
    amount: number;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutExpenseInput;
    payment?: paymentCreateNestedManyWithoutExpenseInput;
  };

  export type expenseUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    amount: number;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutExpenseInput;
  };

  export type expenseCreateOrConnectWithoutOrganizationInput = {
    where: expenseWhereUniqueInput;
    create: XOR<expenseCreateWithoutOrganizationInput, expenseUncheckedCreateWithoutOrganizationInput>;
  };

  export type expenseCreateManyOrganizationInputEnvelope = {
    data: expenseCreateManyOrganizationInput | expenseCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type groupCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    membership?: membershipCreateNestedManyWithoutGroupInput;
  };

  export type groupUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    membership?: membershipUncheckedCreateNestedManyWithoutGroupInput;
  };

  export type groupCreateOrConnectWithoutOrganizationInput = {
    where: groupWhereUniqueInput;
    create: XOR<groupCreateWithoutOrganizationInput, groupUncheckedCreateWithoutOrganizationInput>;
  };

  export type groupCreateManyOrganizationInputEnvelope = {
    data: groupCreateManyOrganizationInput | groupCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseCreateNestedManyWithoutUserInput;
    membership?: membershipCreateNestedManyWithoutUserInput;
    payment?: paymentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseUncheckedCreateNestedManyWithoutUserInput;
    membership?: membershipUncheckedCreateNestedManyWithoutUserInput;
    payment?: paymentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type expenseUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: expenseWhereUniqueInput;
    update: XOR<expenseUpdateWithoutOrganizationInput, expenseUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<expenseCreateWithoutOrganizationInput, expenseUncheckedCreateWithoutOrganizationInput>;
  };

  export type expenseUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: expenseWhereUniqueInput;
    data: XOR<expenseUpdateWithoutOrganizationInput, expenseUncheckedUpdateWithoutOrganizationInput>;
  };

  export type expenseUpdateManyWithWhereWithoutOrganizationInput = {
    where: expenseScalarWhereInput;
    data: XOR<expenseUpdateManyMutationInput, expenseUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type expenseScalarWhereInput = {
    AND?: expenseScalarWhereInput | expenseScalarWhereInput[];
    OR?: expenseScalarWhereInput[];
    NOT?: expenseScalarWhereInput | expenseScalarWhereInput[];
    id?: UuidFilter<'expense'> | string;
    amount?: IntFilter<'expense'> | number;
    description?: StringNullableFilter<'expense'> | string | null;
    user_id?: UuidFilter<'expense'> | string;
    organization_id?: UuidFilter<'expense'> | string;
    created_at?: DateTimeFilter<'expense'> | Date | string;
    updated_at?: DateTimeFilter<'expense'> | Date | string;
  };

  export type groupUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: groupWhereUniqueInput;
    update: XOR<groupUpdateWithoutOrganizationInput, groupUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<groupCreateWithoutOrganizationInput, groupUncheckedCreateWithoutOrganizationInput>;
  };

  export type groupUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: groupWhereUniqueInput;
    data: XOR<groupUpdateWithoutOrganizationInput, groupUncheckedUpdateWithoutOrganizationInput>;
  };

  export type groupUpdateManyWithWhereWithoutOrganizationInput = {
    where: groupScalarWhereInput;
    data: XOR<groupUpdateManyMutationInput, groupUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type groupScalarWhereInput = {
    AND?: groupScalarWhereInput | groupScalarWhereInput[];
    OR?: groupScalarWhereInput[];
    NOT?: groupScalarWhereInput | groupScalarWhereInput[];
    id?: UuidFilter<'group'> | string;
    name?: StringFilter<'group'> | string;
    description?: StringNullableFilter<'group'> | string | null;
    organization_id?: UuidFilter<'group'> | string;
    created_at?: DateTimeFilter<'group'> | Date | string;
    updated_at?: DateTimeFilter<'group'> | Date | string;
  };

  export type userUpsertWithoutOrganizationInput = {
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUpdateManyWithoutUserNestedInput;
    membership?: membershipUpdateManyWithoutUserNestedInput;
    payment?: paymentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUncheckedUpdateManyWithoutUserNestedInput;
    membership?: membershipUncheckedUpdateManyWithoutUserNestedInput;
    payment?: paymentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type expenseCreateWithoutPaymentInput = {
    id?: string;
    amount: number;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutExpenseInput;
    user: userCreateNestedOneWithoutExpenseInput;
  };

  export type expenseUncheckedCreateWithoutPaymentInput = {
    id?: string;
    amount: number;
    description?: string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type expenseCreateOrConnectWithoutPaymentInput = {
    where: expenseWhereUniqueInput;
    create: XOR<expenseCreateWithoutPaymentInput, expenseUncheckedCreateWithoutPaymentInput>;
  };

  export type userCreateWithoutPaymentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseCreateNestedManyWithoutUserInput;
    membership?: membershipCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPaymentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense?: expenseUncheckedCreateNestedManyWithoutUserInput;
    membership?: membershipUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPaymentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
  };

  export type expenseUpsertWithoutPaymentInput = {
    update: XOR<expenseUpdateWithoutPaymentInput, expenseUncheckedUpdateWithoutPaymentInput>;
    create: XOR<expenseCreateWithoutPaymentInput, expenseUncheckedCreateWithoutPaymentInput>;
    where?: expenseWhereInput;
  };

  export type expenseUpdateToOneWithWhereWithoutPaymentInput = {
    where?: expenseWhereInput;
    data: XOR<expenseUpdateWithoutPaymentInput, expenseUncheckedUpdateWithoutPaymentInput>;
  };

  export type expenseUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutExpenseNestedInput;
    user?: userUpdateOneRequiredWithoutExpenseNestedInput;
  };

  export type expenseUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutPaymentInput = {
    update: XOR<userUpdateWithoutPaymentInput, userUncheckedUpdateWithoutPaymentInput>;
    create: XOR<userCreateWithoutPaymentInput, userUncheckedCreateWithoutPaymentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPaymentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutPaymentInput, userUncheckedUpdateWithoutPaymentInput>;
  };

  export type userUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUpdateManyWithoutUserNestedInput;
    membership?: membershipUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUncheckedUpdateManyWithoutUserNestedInput;
    membership?: membershipUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type expenseCreateWithoutUserInput = {
    id?: string;
    amount: number;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutExpenseInput;
    payment?: paymentCreateNestedManyWithoutExpenseInput;
  };

  export type expenseUncheckedCreateWithoutUserInput = {
    id?: string;
    amount: number;
    description?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment?: paymentUncheckedCreateNestedManyWithoutExpenseInput;
  };

  export type expenseCreateOrConnectWithoutUserInput = {
    where: expenseWhereUniqueInput;
    create: XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput>;
  };

  export type expenseCreateManyUserInputEnvelope = {
    data: expenseCreateManyUserInput | expenseCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type membershipCreateWithoutUserInput = {
    id?: string;
    joined_at?: Date | string;
    left_at?: Date | string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: groupCreateNestedOneWithoutMembershipInput;
  };

  export type membershipUncheckedCreateWithoutUserInput = {
    id?: string;
    group_id: string;
    joined_at?: Date | string;
    left_at?: Date | string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type membershipCreateOrConnectWithoutUserInput = {
    where: membershipWhereUniqueInput;
    create: XOR<membershipCreateWithoutUserInput, membershipUncheckedCreateWithoutUserInput>;
  };

  export type membershipCreateManyUserInputEnvelope = {
    data: membershipCreateManyUserInput | membershipCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    expense?: expenseCreateNestedManyWithoutOrganizationInput;
    group?: groupCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    expense?: expenseUncheckedCreateNestedManyWithoutOrganizationInput;
    group?: groupUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationCreateManyUserInputEnvelope = {
    data: organizationCreateManyUserInput | organizationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type paymentCreateWithoutUserInput = {
    id?: string;
    amount: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense: expenseCreateNestedOneWithoutPaymentInput;
  };

  export type paymentUncheckedCreateWithoutUserInput = {
    id?: string;
    amount: number;
    expense_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentCreateOrConnectWithoutUserInput = {
    where: paymentWhereUniqueInput;
    create: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>;
  };

  export type paymentCreateManyUserInputEnvelope = {
    data: paymentCreateManyUserInput | paymentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type expenseUpsertWithWhereUniqueWithoutUserInput = {
    where: expenseWhereUniqueInput;
    update: XOR<expenseUpdateWithoutUserInput, expenseUncheckedUpdateWithoutUserInput>;
    create: XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput>;
  };

  export type expenseUpdateWithWhereUniqueWithoutUserInput = {
    where: expenseWhereUniqueInput;
    data: XOR<expenseUpdateWithoutUserInput, expenseUncheckedUpdateWithoutUserInput>;
  };

  export type expenseUpdateManyWithWhereWithoutUserInput = {
    where: expenseScalarWhereInput;
    data: XOR<expenseUpdateManyMutationInput, expenseUncheckedUpdateManyWithoutUserInput>;
  };

  export type membershipUpsertWithWhereUniqueWithoutUserInput = {
    where: membershipWhereUniqueInput;
    update: XOR<membershipUpdateWithoutUserInput, membershipUncheckedUpdateWithoutUserInput>;
    create: XOR<membershipCreateWithoutUserInput, membershipUncheckedCreateWithoutUserInput>;
  };

  export type membershipUpdateWithWhereUniqueWithoutUserInput = {
    where: membershipWhereUniqueInput;
    data: XOR<membershipUpdateWithoutUserInput, membershipUncheckedUpdateWithoutUserInput>;
  };

  export type membershipUpdateManyWithWhereWithoutUserInput = {
    where: membershipScalarWhereInput;
    data: XOR<membershipUpdateManyMutationInput, membershipUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationUpsertWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationUpdateWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateManyWithWhereWithoutUserInput = {
    where: organizationScalarWhereInput;
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationScalarWhereInput = {
    AND?: organizationScalarWhereInput | organizationScalarWhereInput[];
    OR?: organizationScalarWhereInput[];
    NOT?: organizationScalarWhereInput | organizationScalarWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
  };

  export type paymentUpsertWithWhereUniqueWithoutUserInput = {
    where: paymentWhereUniqueInput;
    update: XOR<paymentUpdateWithoutUserInput, paymentUncheckedUpdateWithoutUserInput>;
    create: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>;
  };

  export type paymentUpdateWithWhereUniqueWithoutUserInput = {
    where: paymentWhereUniqueInput;
    data: XOR<paymentUpdateWithoutUserInput, paymentUncheckedUpdateWithoutUserInput>;
  };

  export type paymentUpdateManyWithWhereWithoutUserInput = {
    where: paymentScalarWhereInput;
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutUserInput>;
  };

  export type paymentCreateManyExpenseInput = {
    id?: string;
    amount: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type paymentUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentUncheckedUpdateManyWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type membershipCreateManyGroupInput = {
    id?: string;
    user_id: string;
    joined_at?: Date | string;
    left_at?: Date | string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type membershipUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutMembershipNestedInput;
  };

  export type membershipUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type membershipUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type expenseCreateManyOrganizationInput = {
    id?: string;
    amount: number;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type groupCreateManyOrganizationInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type expenseUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutExpenseNestedInput;
    payment?: paymentUpdateManyWithoutExpenseNestedInput;
  };

  export type expenseUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutExpenseNestedInput;
  };

  export type expenseUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type groupUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: membershipUpdateManyWithoutGroupNestedInput;
  };

  export type groupUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: membershipUncheckedUpdateManyWithoutGroupNestedInput;
  };

  export type groupUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type expenseCreateManyUserInput = {
    id?: string;
    amount: number;
    description?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type membershipCreateManyUserInput = {
    id?: string;
    group_id: string;
    joined_at?: Date | string;
    left_at?: Date | string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type paymentCreateManyUserInput = {
    id?: string;
    amount: number;
    expense_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type expenseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutExpenseNestedInput;
    payment?: paymentUpdateManyWithoutExpenseNestedInput;
  };

  export type expenseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: paymentUncheckedUpdateManyWithoutExpenseNestedInput;
  };

  export type expenseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type membershipUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group?: groupUpdateOneRequiredWithoutMembershipNestedInput;
  };

  export type membershipUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    group_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type membershipUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    group_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    expense?: expenseUpdateManyWithoutOrganizationNestedInput;
    group?: groupUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    expense?: expenseUncheckedUpdateManyWithoutOrganizationNestedInput;
    group?: groupUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type paymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUpdateOneRequiredWithoutPaymentNestedInput;
  };

  export type paymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    expense_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type paymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    expense_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use ExpenseCountOutputTypeDefaultArgs instead
   */
  export type ExpenseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ExpenseCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use GroupCountOutputTypeDefaultArgs instead
   */
  export type GroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    GroupCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use expenseDefaultArgs instead
   */
  export type expenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    expenseDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use groupDefaultArgs instead
   */
  export type groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = groupDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use membershipDefaultArgs instead
   */
  export type membershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    membershipDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use paymentDefaultArgs instead
   */
  export type paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    paymentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
