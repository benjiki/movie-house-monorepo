
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model movies
 * 
 */
export type movies = $Result.DefaultSelection<Prisma.$moviesPayload>
/**
 * Model movieCategory
 * 
 */
export type movieCategory = $Result.DefaultSelection<Prisma.$movieCategoryPayload>
/**
 * Model series
 * 
 */
export type series = $Result.DefaultSelection<Prisma.$seriesPayload>
/**
 * Model seriesCategory
 * 
 */
export type seriesCategory = $Result.DefaultSelection<Prisma.$seriesCategoryPayload>
/**
 * Model otherProducts
 * 
 */
export type otherProducts = $Result.DefaultSelection<Prisma.$otherProductsPayload>
/**
 * Model otherProductCategory
 * 
 */
export type otherProductCategory = $Result.DefaultSelection<Prisma.$otherProductCategoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OtherProductType: {
  BRAND_NEW: 'BRAND_NEW',
  REFURBISHED: 'REFURBISHED',
  SLIGHTLY_USED: 'SLIGHTLY_USED',
  USED: 'USED',
  HEAVILY_USED: 'HEAVILY_USED',
  FOR_PARTS: 'FOR_PARTS'
};

export type OtherProductType = (typeof OtherProductType)[keyof typeof OtherProductType]

}

export type OtherProductType = $Enums.OtherProductType

export const OtherProductType: typeof $Enums.OtherProductType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Movies
 * const movies = await prisma.movies.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Movies
   * const movies = await prisma.movies.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.movies`: Exposes CRUD operations for the **movies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movies.findMany()
    * ```
    */
  get movies(): Prisma.moviesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movieCategory`: Exposes CRUD operations for the **movieCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieCategories
    * const movieCategories = await prisma.movieCategory.findMany()
    * ```
    */
  get movieCategory(): Prisma.movieCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.series`: Exposes CRUD operations for the **series** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Series
    * const series = await prisma.series.findMany()
    * ```
    */
  get series(): Prisma.seriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seriesCategory`: Exposes CRUD operations for the **seriesCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeriesCategories
    * const seriesCategories = await prisma.seriesCategory.findMany()
    * ```
    */
  get seriesCategory(): Prisma.seriesCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otherProducts`: Exposes CRUD operations for the **otherProducts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtherProducts
    * const otherProducts = await prisma.otherProducts.findMany()
    * ```
    */
  get otherProducts(): Prisma.otherProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otherProductCategory`: Exposes CRUD operations for the **otherProductCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtherProductCategories
    * const otherProductCategories = await prisma.otherProductCategory.findMany()
    * ```
    */
  get otherProductCategory(): Prisma.otherProductCategoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    movies: 'movies',
    movieCategory: 'movieCategory',
    series: 'series',
    seriesCategory: 'seriesCategory',
    otherProducts: 'otherProducts',
    otherProductCategory: 'otherProductCategory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "movies" | "movieCategory" | "series" | "seriesCategory" | "otherProducts" | "otherProductCategory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      movies: {
        payload: Prisma.$moviesPayload<ExtArgs>
        fields: Prisma.moviesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.moviesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.moviesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          findFirst: {
            args: Prisma.moviesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.moviesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          findMany: {
            args: Prisma.moviesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>[]
          }
          create: {
            args: Prisma.moviesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          createMany: {
            args: Prisma.moviesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.moviesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>[]
          }
          delete: {
            args: Prisma.moviesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          update: {
            args: Prisma.moviesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          deleteMany: {
            args: Prisma.moviesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.moviesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.moviesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>[]
          }
          upsert: {
            args: Prisma.moviesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          aggregate: {
            args: Prisma.MoviesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovies>
          }
          groupBy: {
            args: Prisma.moviesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoviesGroupByOutputType>[]
          }
          count: {
            args: Prisma.moviesCountArgs<ExtArgs>
            result: $Utils.Optional<MoviesCountAggregateOutputType> | number
          }
        }
      }
      movieCategory: {
        payload: Prisma.$movieCategoryPayload<ExtArgs>
        fields: Prisma.movieCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.movieCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.movieCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieCategoryPayload>
          }
          findFirst: {
            args: Prisma.movieCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.movieCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieCategoryPayload>
          }
          findMany: {
            args: Prisma.movieCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieCategoryPayload>[]
          }
          create: {
            args: Prisma.movieCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieCategoryPayload>
          }
          createMany: {
            args: Prisma.movieCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.movieCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieCategoryPayload>[]
          }
          delete: {
            args: Prisma.movieCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieCategoryPayload>
          }
          update: {
            args: Prisma.movieCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieCategoryPayload>
          }
          deleteMany: {
            args: Prisma.movieCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.movieCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.movieCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieCategoryPayload>[]
          }
          upsert: {
            args: Prisma.movieCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movieCategoryPayload>
          }
          aggregate: {
            args: Prisma.MovieCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovieCategory>
          }
          groupBy: {
            args: Prisma.movieCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.movieCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCategoryCountAggregateOutputType> | number
          }
        }
      }
      series: {
        payload: Prisma.$seriesPayload<ExtArgs>
        fields: Prisma.seriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.seriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.seriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesPayload>
          }
          findFirst: {
            args: Prisma.seriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.seriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesPayload>
          }
          findMany: {
            args: Prisma.seriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesPayload>[]
          }
          create: {
            args: Prisma.seriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesPayload>
          }
          createMany: {
            args: Prisma.seriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.seriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesPayload>[]
          }
          delete: {
            args: Prisma.seriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesPayload>
          }
          update: {
            args: Prisma.seriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesPayload>
          }
          deleteMany: {
            args: Prisma.seriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.seriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.seriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesPayload>[]
          }
          upsert: {
            args: Prisma.seriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesPayload>
          }
          aggregate: {
            args: Prisma.SeriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeries>
          }
          groupBy: {
            args: Prisma.seriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.seriesCountArgs<ExtArgs>
            result: $Utils.Optional<SeriesCountAggregateOutputType> | number
          }
        }
      }
      seriesCategory: {
        payload: Prisma.$seriesCategoryPayload<ExtArgs>
        fields: Prisma.seriesCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.seriesCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.seriesCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesCategoryPayload>
          }
          findFirst: {
            args: Prisma.seriesCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.seriesCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesCategoryPayload>
          }
          findMany: {
            args: Prisma.seriesCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesCategoryPayload>[]
          }
          create: {
            args: Prisma.seriesCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesCategoryPayload>
          }
          createMany: {
            args: Prisma.seriesCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.seriesCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesCategoryPayload>[]
          }
          delete: {
            args: Prisma.seriesCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesCategoryPayload>
          }
          update: {
            args: Prisma.seriesCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesCategoryPayload>
          }
          deleteMany: {
            args: Prisma.seriesCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.seriesCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.seriesCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesCategoryPayload>[]
          }
          upsert: {
            args: Prisma.seriesCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seriesCategoryPayload>
          }
          aggregate: {
            args: Prisma.SeriesCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeriesCategory>
          }
          groupBy: {
            args: Prisma.seriesCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeriesCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.seriesCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SeriesCategoryCountAggregateOutputType> | number
          }
        }
      }
      otherProducts: {
        payload: Prisma.$otherProductsPayload<ExtArgs>
        fields: Prisma.otherProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.otherProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.otherProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductsPayload>
          }
          findFirst: {
            args: Prisma.otherProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.otherProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductsPayload>
          }
          findMany: {
            args: Prisma.otherProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductsPayload>[]
          }
          create: {
            args: Prisma.otherProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductsPayload>
          }
          createMany: {
            args: Prisma.otherProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.otherProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductsPayload>[]
          }
          delete: {
            args: Prisma.otherProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductsPayload>
          }
          update: {
            args: Prisma.otherProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductsPayload>
          }
          deleteMany: {
            args: Prisma.otherProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.otherProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.otherProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductsPayload>[]
          }
          upsert: {
            args: Prisma.otherProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductsPayload>
          }
          aggregate: {
            args: Prisma.OtherProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtherProducts>
          }
          groupBy: {
            args: Prisma.otherProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtherProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.otherProductsCountArgs<ExtArgs>
            result: $Utils.Optional<OtherProductsCountAggregateOutputType> | number
          }
        }
      }
      otherProductCategory: {
        payload: Prisma.$otherProductCategoryPayload<ExtArgs>
        fields: Prisma.otherProductCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.otherProductCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.otherProductCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductCategoryPayload>
          }
          findFirst: {
            args: Prisma.otherProductCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.otherProductCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductCategoryPayload>
          }
          findMany: {
            args: Prisma.otherProductCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductCategoryPayload>[]
          }
          create: {
            args: Prisma.otherProductCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductCategoryPayload>
          }
          createMany: {
            args: Prisma.otherProductCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.otherProductCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductCategoryPayload>[]
          }
          delete: {
            args: Prisma.otherProductCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductCategoryPayload>
          }
          update: {
            args: Prisma.otherProductCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductCategoryPayload>
          }
          deleteMany: {
            args: Prisma.otherProductCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.otherProductCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.otherProductCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductCategoryPayload>[]
          }
          upsert: {
            args: Prisma.otherProductCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otherProductCategoryPayload>
          }
          aggregate: {
            args: Prisma.OtherProductCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtherProductCategory>
          }
          groupBy: {
            args: Prisma.otherProductCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtherProductCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.otherProductCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<OtherProductCategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    movies?: moviesOmit
    movieCategory?: movieCategoryOmit
    series?: seriesOmit
    seriesCategory?: seriesCategoryOmit
    otherProducts?: otherProductsOmit
    otherProductCategory?: otherProductCategoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MovieCategoryCountOutputType
   */

  export type MovieCategoryCountOutputType = {
    movies: number
  }

  export type MovieCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | MovieCategoryCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes
  /**
   * MovieCategoryCountOutputType without action
   */
  export type MovieCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCategoryCountOutputType
     */
    select?: MovieCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieCategoryCountOutputType without action
   */
  export type MovieCategoryCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moviesWhereInput
  }


  /**
   * Count Type SeriesCategoryCountOutputType
   */

  export type SeriesCategoryCountOutputType = {
    series: number
  }

  export type SeriesCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    series?: boolean | SeriesCategoryCountOutputTypeCountSeriesArgs
  }

  // Custom InputTypes
  /**
   * SeriesCategoryCountOutputType without action
   */
  export type SeriesCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCategoryCountOutputType
     */
    select?: SeriesCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeriesCategoryCountOutputType without action
   */
  export type SeriesCategoryCountOutputTypeCountSeriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seriesWhereInput
  }


  /**
   * Count Type OtherProductCategoryCountOutputType
   */

  export type OtherProductCategoryCountOutputType = {
    otherProducts: number
  }

  export type OtherProductCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otherProducts?: boolean | OtherProductCategoryCountOutputTypeCountOtherProductsArgs
  }

  // Custom InputTypes
  /**
   * OtherProductCategoryCountOutputType without action
   */
  export type OtherProductCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtherProductCategoryCountOutputType
     */
    select?: OtherProductCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OtherProductCategoryCountOutputType without action
   */
  export type OtherProductCategoryCountOutputTypeCountOtherProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: otherProductsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model movies
   */

  export type AggregateMovies = {
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  export type MoviesAvgAggregateOutputType = {
    id: number | null
    adminId: number | null
    movieCategoryId: number | null
  }

  export type MoviesSumAggregateOutputType = {
    id: number | null
    adminId: number | null
    movieCategoryId: number | null
  }

  export type MoviesMinAggregateOutputType = {
    id: number | null
    movieName: string | null
    movieImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    adminId: number | null
    movieCategoryId: number | null
  }

  export type MoviesMaxAggregateOutputType = {
    id: number | null
    movieName: string | null
    movieImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    adminId: number | null
    movieCategoryId: number | null
  }

  export type MoviesCountAggregateOutputType = {
    id: number
    movieName: number
    movieImage: number
    createdAt: number
    updatedAt: number
    adminId: number
    movieCategoryId: number
    _all: number
  }


  export type MoviesAvgAggregateInputType = {
    id?: true
    adminId?: true
    movieCategoryId?: true
  }

  export type MoviesSumAggregateInputType = {
    id?: true
    adminId?: true
    movieCategoryId?: true
  }

  export type MoviesMinAggregateInputType = {
    id?: true
    movieName?: true
    movieImage?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
    movieCategoryId?: true
  }

  export type MoviesMaxAggregateInputType = {
    id?: true
    movieName?: true
    movieImage?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
    movieCategoryId?: true
  }

  export type MoviesCountAggregateInputType = {
    id?: true
    movieName?: true
    movieImage?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
    movieCategoryId?: true
    _all?: true
  }

  export type MoviesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movies to aggregate.
     */
    where?: moviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: moviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned movies
    **/
    _count?: true | MoviesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoviesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoviesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoviesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoviesMaxAggregateInputType
  }

  export type GetMoviesAggregateType<T extends MoviesAggregateArgs> = {
        [P in keyof T & keyof AggregateMovies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovies[P]>
      : GetScalarType<T[P], AggregateMovies[P]>
  }




  export type moviesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moviesWhereInput
    orderBy?: moviesOrderByWithAggregationInput | moviesOrderByWithAggregationInput[]
    by: MoviesScalarFieldEnum[] | MoviesScalarFieldEnum
    having?: moviesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoviesCountAggregateInputType | true
    _avg?: MoviesAvgAggregateInputType
    _sum?: MoviesSumAggregateInputType
    _min?: MoviesMinAggregateInputType
    _max?: MoviesMaxAggregateInputType
  }

  export type MoviesGroupByOutputType = {
    id: number
    movieName: string
    movieImage: string
    createdAt: Date
    updatedAt: Date
    adminId: number
    movieCategoryId: number
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  type GetMoviesGroupByPayload<T extends moviesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoviesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoviesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoviesGroupByOutputType[P]>
            : GetScalarType<T[P], MoviesGroupByOutputType[P]>
        }
      >
    >


  export type moviesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieName?: boolean
    movieImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    movieCategoryId?: boolean
    movieCategory?: boolean | movieCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type moviesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieName?: boolean
    movieImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    movieCategoryId?: boolean
    movieCategory?: boolean | movieCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type moviesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieName?: boolean
    movieImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    movieCategoryId?: boolean
    movieCategory?: boolean | movieCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type moviesSelectScalar = {
    id?: boolean
    movieName?: boolean
    movieImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    movieCategoryId?: boolean
  }

  export type moviesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "movieName" | "movieImage" | "createdAt" | "updatedAt" | "adminId" | "movieCategoryId", ExtArgs["result"]["movies"]>
  export type moviesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieCategory?: boolean | movieCategoryDefaultArgs<ExtArgs>
  }
  export type moviesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieCategory?: boolean | movieCategoryDefaultArgs<ExtArgs>
  }
  export type moviesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieCategory?: boolean | movieCategoryDefaultArgs<ExtArgs>
  }

  export type $moviesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "movies"
    objects: {
      movieCategory: Prisma.$movieCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      movieName: string
      movieImage: string
      createdAt: Date
      updatedAt: Date
      adminId: number
      movieCategoryId: number
    }, ExtArgs["result"]["movies"]>
    composites: {}
  }

  type moviesGetPayload<S extends boolean | null | undefined | moviesDefaultArgs> = $Result.GetResult<Prisma.$moviesPayload, S>

  type moviesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<moviesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoviesCountAggregateInputType | true
    }

  export interface moviesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movies'], meta: { name: 'movies' } }
    /**
     * Find zero or one Movies that matches the filter.
     * @param {moviesFindUniqueArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends moviesFindUniqueArgs>(args: SelectSubset<T, moviesFindUniqueArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {moviesFindUniqueOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends moviesFindUniqueOrThrowArgs>(args: SelectSubset<T, moviesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesFindFirstArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends moviesFindFirstArgs>(args?: SelectSubset<T, moviesFindFirstArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesFindFirstOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends moviesFindFirstOrThrowArgs>(args?: SelectSubset<T, moviesFindFirstOrThrowArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movies.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moviesWithIdOnly = await prisma.movies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends moviesFindManyArgs>(args?: SelectSubset<T, moviesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movies.
     * @param {moviesCreateArgs} args - Arguments to create a Movies.
     * @example
     * // Create one Movies
     * const Movies = await prisma.movies.create({
     *   data: {
     *     // ... data to create a Movies
     *   }
     * })
     * 
     */
    create<T extends moviesCreateArgs>(args: SelectSubset<T, moviesCreateArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {moviesCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movies = await prisma.movies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends moviesCreateManyArgs>(args?: SelectSubset<T, moviesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {moviesCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movies = await prisma.movies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movies and only return the `id`
     * const moviesWithIdOnly = await prisma.movies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends moviesCreateManyAndReturnArgs>(args?: SelectSubset<T, moviesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movies.
     * @param {moviesDeleteArgs} args - Arguments to delete one Movies.
     * @example
     * // Delete one Movies
     * const Movies = await prisma.movies.delete({
     *   where: {
     *     // ... filter to delete one Movies
     *   }
     * })
     * 
     */
    delete<T extends moviesDeleteArgs>(args: SelectSubset<T, moviesDeleteArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movies.
     * @param {moviesUpdateArgs} args - Arguments to update one Movies.
     * @example
     * // Update one Movies
     * const movies = await prisma.movies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends moviesUpdateArgs>(args: SelectSubset<T, moviesUpdateArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {moviesDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends moviesDeleteManyArgs>(args?: SelectSubset<T, moviesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends moviesUpdateManyArgs>(args: SelectSubset<T, moviesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies and returns the data updated in the database.
     * @param {moviesUpdateManyAndReturnArgs} args - Arguments to update many Movies.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movies and only return the `id`
     * const moviesWithIdOnly = await prisma.movies.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends moviesUpdateManyAndReturnArgs>(args: SelectSubset<T, moviesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movies.
     * @param {moviesUpsertArgs} args - Arguments to update or create a Movies.
     * @example
     * // Update or create a Movies
     * const movies = await prisma.movies.upsert({
     *   create: {
     *     // ... data to create a Movies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movies we want to update
     *   }
     * })
     */
    upsert<T extends moviesUpsertArgs>(args: SelectSubset<T, moviesUpsertArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movies.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends moviesCountArgs>(
      args?: Subset<T, moviesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoviesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoviesAggregateArgs>(args: Subset<T, MoviesAggregateArgs>): Prisma.PrismaPromise<GetMoviesAggregateType<T>>

    /**
     * Group by Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesGroupByArgs} args - Group by arguments.
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
      T extends moviesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: moviesGroupByArgs['orderBy'] }
        : { orderBy?: moviesGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, moviesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoviesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the movies model
   */
  readonly fields: moviesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__moviesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movieCategory<T extends movieCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, movieCategoryDefaultArgs<ExtArgs>>): Prisma__movieCategoryClient<$Result.GetResult<Prisma.$movieCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the movies model
   */
  interface moviesFieldRefs {
    readonly id: FieldRef<"movies", 'Int'>
    readonly movieName: FieldRef<"movies", 'String'>
    readonly movieImage: FieldRef<"movies", 'String'>
    readonly createdAt: FieldRef<"movies", 'DateTime'>
    readonly updatedAt: FieldRef<"movies", 'DateTime'>
    readonly adminId: FieldRef<"movies", 'Int'>
    readonly movieCategoryId: FieldRef<"movies", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * movies findUnique
   */
  export type moviesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where: moviesWhereUniqueInput
  }

  /**
   * movies findUniqueOrThrow
   */
  export type moviesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where: moviesWhereUniqueInput
  }

  /**
   * movies findFirst
   */
  export type moviesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where?: moviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movies.
     */
    cursor?: moviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * movies findFirstOrThrow
   */
  export type moviesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where?: moviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movies.
     */
    cursor?: moviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * movies findMany
   */
  export type moviesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where?: moviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing movies.
     */
    cursor?: moviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * movies create
   */
  export type moviesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * The data needed to create a movies.
     */
    data: XOR<moviesCreateInput, moviesUncheckedCreateInput>
  }

  /**
   * movies createMany
   */
  export type moviesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movies.
     */
    data: moviesCreateManyInput | moviesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movies createManyAndReturn
   */
  export type moviesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * The data used to create many movies.
     */
    data: moviesCreateManyInput | moviesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * movies update
   */
  export type moviesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * The data needed to update a movies.
     */
    data: XOR<moviesUpdateInput, moviesUncheckedUpdateInput>
    /**
     * Choose, which movies to update.
     */
    where: moviesWhereUniqueInput
  }

  /**
   * movies updateMany
   */
  export type moviesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movies.
     */
    data: XOR<moviesUpdateManyMutationInput, moviesUncheckedUpdateManyInput>
    /**
     * Filter which movies to update
     */
    where?: moviesWhereInput
    /**
     * Limit how many movies to update.
     */
    limit?: number
  }

  /**
   * movies updateManyAndReturn
   */
  export type moviesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * The data used to update movies.
     */
    data: XOR<moviesUpdateManyMutationInput, moviesUncheckedUpdateManyInput>
    /**
     * Filter which movies to update
     */
    where?: moviesWhereInput
    /**
     * Limit how many movies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * movies upsert
   */
  export type moviesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * The filter to search for the movies to update in case it exists.
     */
    where: moviesWhereUniqueInput
    /**
     * In case the movies found by the `where` argument doesn't exist, create a new movies with this data.
     */
    create: XOR<moviesCreateInput, moviesUncheckedCreateInput>
    /**
     * In case the movies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<moviesUpdateInput, moviesUncheckedUpdateInput>
  }

  /**
   * movies delete
   */
  export type moviesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter which movies to delete.
     */
    where: moviesWhereUniqueInput
  }

  /**
   * movies deleteMany
   */
  export type moviesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movies to delete
     */
    where?: moviesWhereInput
    /**
     * Limit how many movies to delete.
     */
    limit?: number
  }

  /**
   * movies without action
   */
  export type moviesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
  }


  /**
   * Model movieCategory
   */

  export type AggregateMovieCategory = {
    _count: MovieCategoryCountAggregateOutputType | null
    _avg: MovieCategoryAvgAggregateOutputType | null
    _sum: MovieCategorySumAggregateOutputType | null
    _min: MovieCategoryMinAggregateOutputType | null
    _max: MovieCategoryMaxAggregateOutputType | null
  }

  export type MovieCategoryAvgAggregateOutputType = {
    id: number | null
    price: number | null
    adminId: number | null
  }

  export type MovieCategorySumAggregateOutputType = {
    id: number | null
    price: number | null
    adminId: number | null
  }

  export type MovieCategoryMinAggregateOutputType = {
    id: number | null
    movieCategoryName: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    adminId: number | null
  }

  export type MovieCategoryMaxAggregateOutputType = {
    id: number | null
    movieCategoryName: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    adminId: number | null
  }

  export type MovieCategoryCountAggregateOutputType = {
    id: number
    movieCategoryName: number
    price: number
    createdAt: number
    updatedAt: number
    adminId: number
    _all: number
  }


  export type MovieCategoryAvgAggregateInputType = {
    id?: true
    price?: true
    adminId?: true
  }

  export type MovieCategorySumAggregateInputType = {
    id?: true
    price?: true
    adminId?: true
  }

  export type MovieCategoryMinAggregateInputType = {
    id?: true
    movieCategoryName?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
  }

  export type MovieCategoryMaxAggregateInputType = {
    id?: true
    movieCategoryName?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
  }

  export type MovieCategoryCountAggregateInputType = {
    id?: true
    movieCategoryName?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
    _all?: true
  }

  export type MovieCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movieCategory to aggregate.
     */
    where?: movieCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movieCategories to fetch.
     */
    orderBy?: movieCategoryOrderByWithRelationInput | movieCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: movieCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movieCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movieCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned movieCategories
    **/
    _count?: true | MovieCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieCategoryMaxAggregateInputType
  }

  export type GetMovieCategoryAggregateType<T extends MovieCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieCategory[P]>
      : GetScalarType<T[P], AggregateMovieCategory[P]>
  }




  export type movieCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movieCategoryWhereInput
    orderBy?: movieCategoryOrderByWithAggregationInput | movieCategoryOrderByWithAggregationInput[]
    by: MovieCategoryScalarFieldEnum[] | MovieCategoryScalarFieldEnum
    having?: movieCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCategoryCountAggregateInputType | true
    _avg?: MovieCategoryAvgAggregateInputType
    _sum?: MovieCategorySumAggregateInputType
    _min?: MovieCategoryMinAggregateInputType
    _max?: MovieCategoryMaxAggregateInputType
  }

  export type MovieCategoryGroupByOutputType = {
    id: number
    movieCategoryName: string
    price: number
    createdAt: Date
    updatedAt: Date
    adminId: number
    _count: MovieCategoryCountAggregateOutputType | null
    _avg: MovieCategoryAvgAggregateOutputType | null
    _sum: MovieCategorySumAggregateOutputType | null
    _min: MovieCategoryMinAggregateOutputType | null
    _max: MovieCategoryMaxAggregateOutputType | null
  }

  type GetMovieCategoryGroupByPayload<T extends movieCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MovieCategoryGroupByOutputType[P]>
        }
      >
    >


  export type movieCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieCategoryName?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    movies?: boolean | movieCategory$moviesArgs<ExtArgs>
    _count?: boolean | MovieCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieCategory"]>

  export type movieCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieCategoryName?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
  }, ExtArgs["result"]["movieCategory"]>

  export type movieCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieCategoryName?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
  }, ExtArgs["result"]["movieCategory"]>

  export type movieCategorySelectScalar = {
    id?: boolean
    movieCategoryName?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
  }

  export type movieCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "movieCategoryName" | "price" | "createdAt" | "updatedAt" | "adminId", ExtArgs["result"]["movieCategory"]>
  export type movieCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | movieCategory$moviesArgs<ExtArgs>
    _count?: boolean | MovieCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type movieCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type movieCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $movieCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "movieCategory"
    objects: {
      movies: Prisma.$moviesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      movieCategoryName: string
      price: number
      createdAt: Date
      updatedAt: Date
      adminId: number
    }, ExtArgs["result"]["movieCategory"]>
    composites: {}
  }

  type movieCategoryGetPayload<S extends boolean | null | undefined | movieCategoryDefaultArgs> = $Result.GetResult<Prisma.$movieCategoryPayload, S>

  type movieCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<movieCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCategoryCountAggregateInputType | true
    }

  export interface movieCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movieCategory'], meta: { name: 'movieCategory' } }
    /**
     * Find zero or one MovieCategory that matches the filter.
     * @param {movieCategoryFindUniqueArgs} args - Arguments to find a MovieCategory
     * @example
     * // Get one MovieCategory
     * const movieCategory = await prisma.movieCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends movieCategoryFindUniqueArgs>(args: SelectSubset<T, movieCategoryFindUniqueArgs<ExtArgs>>): Prisma__movieCategoryClient<$Result.GetResult<Prisma.$movieCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovieCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {movieCategoryFindUniqueOrThrowArgs} args - Arguments to find a MovieCategory
     * @example
     * // Get one MovieCategory
     * const movieCategory = await prisma.movieCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends movieCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, movieCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__movieCategoryClient<$Result.GetResult<Prisma.$movieCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieCategoryFindFirstArgs} args - Arguments to find a MovieCategory
     * @example
     * // Get one MovieCategory
     * const movieCategory = await prisma.movieCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends movieCategoryFindFirstArgs>(args?: SelectSubset<T, movieCategoryFindFirstArgs<ExtArgs>>): Prisma__movieCategoryClient<$Result.GetResult<Prisma.$movieCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieCategoryFindFirstOrThrowArgs} args - Arguments to find a MovieCategory
     * @example
     * // Get one MovieCategory
     * const movieCategory = await prisma.movieCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends movieCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, movieCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__movieCategoryClient<$Result.GetResult<Prisma.$movieCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovieCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieCategories
     * const movieCategories = await prisma.movieCategory.findMany()
     * 
     * // Get first 10 MovieCategories
     * const movieCategories = await prisma.movieCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieCategoryWithIdOnly = await prisma.movieCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends movieCategoryFindManyArgs>(args?: SelectSubset<T, movieCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movieCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovieCategory.
     * @param {movieCategoryCreateArgs} args - Arguments to create a MovieCategory.
     * @example
     * // Create one MovieCategory
     * const MovieCategory = await prisma.movieCategory.create({
     *   data: {
     *     // ... data to create a MovieCategory
     *   }
     * })
     * 
     */
    create<T extends movieCategoryCreateArgs>(args: SelectSubset<T, movieCategoryCreateArgs<ExtArgs>>): Prisma__movieCategoryClient<$Result.GetResult<Prisma.$movieCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovieCategories.
     * @param {movieCategoryCreateManyArgs} args - Arguments to create many MovieCategories.
     * @example
     * // Create many MovieCategories
     * const movieCategory = await prisma.movieCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends movieCategoryCreateManyArgs>(args?: SelectSubset<T, movieCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovieCategories and returns the data saved in the database.
     * @param {movieCategoryCreateManyAndReturnArgs} args - Arguments to create many MovieCategories.
     * @example
     * // Create many MovieCategories
     * const movieCategory = await prisma.movieCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovieCategories and only return the `id`
     * const movieCategoryWithIdOnly = await prisma.movieCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends movieCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, movieCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movieCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovieCategory.
     * @param {movieCategoryDeleteArgs} args - Arguments to delete one MovieCategory.
     * @example
     * // Delete one MovieCategory
     * const MovieCategory = await prisma.movieCategory.delete({
     *   where: {
     *     // ... filter to delete one MovieCategory
     *   }
     * })
     * 
     */
    delete<T extends movieCategoryDeleteArgs>(args: SelectSubset<T, movieCategoryDeleteArgs<ExtArgs>>): Prisma__movieCategoryClient<$Result.GetResult<Prisma.$movieCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovieCategory.
     * @param {movieCategoryUpdateArgs} args - Arguments to update one MovieCategory.
     * @example
     * // Update one MovieCategory
     * const movieCategory = await prisma.movieCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends movieCategoryUpdateArgs>(args: SelectSubset<T, movieCategoryUpdateArgs<ExtArgs>>): Prisma__movieCategoryClient<$Result.GetResult<Prisma.$movieCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovieCategories.
     * @param {movieCategoryDeleteManyArgs} args - Arguments to filter MovieCategories to delete.
     * @example
     * // Delete a few MovieCategories
     * const { count } = await prisma.movieCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends movieCategoryDeleteManyArgs>(args?: SelectSubset<T, movieCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieCategories
     * const movieCategory = await prisma.movieCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends movieCategoryUpdateManyArgs>(args: SelectSubset<T, movieCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieCategories and returns the data updated in the database.
     * @param {movieCategoryUpdateManyAndReturnArgs} args - Arguments to update many MovieCategories.
     * @example
     * // Update many MovieCategories
     * const movieCategory = await prisma.movieCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovieCategories and only return the `id`
     * const movieCategoryWithIdOnly = await prisma.movieCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends movieCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, movieCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movieCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovieCategory.
     * @param {movieCategoryUpsertArgs} args - Arguments to update or create a MovieCategory.
     * @example
     * // Update or create a MovieCategory
     * const movieCategory = await prisma.movieCategory.upsert({
     *   create: {
     *     // ... data to create a MovieCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieCategory we want to update
     *   }
     * })
     */
    upsert<T extends movieCategoryUpsertArgs>(args: SelectSubset<T, movieCategoryUpsertArgs<ExtArgs>>): Prisma__movieCategoryClient<$Result.GetResult<Prisma.$movieCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovieCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieCategoryCountArgs} args - Arguments to filter MovieCategories to count.
     * @example
     * // Count the number of MovieCategories
     * const count = await prisma.movieCategory.count({
     *   where: {
     *     // ... the filter for the MovieCategories we want to count
     *   }
     * })
    **/
    count<T extends movieCategoryCountArgs>(
      args?: Subset<T, movieCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieCategoryAggregateArgs>(args: Subset<T, MovieCategoryAggregateArgs>): Prisma.PrismaPromise<GetMovieCategoryAggregateType<T>>

    /**
     * Group by MovieCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieCategoryGroupByArgs} args - Group by arguments.
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
      T extends movieCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: movieCategoryGroupByArgs['orderBy'] }
        : { orderBy?: movieCategoryGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, movieCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the movieCategory model
   */
  readonly fields: movieCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movieCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__movieCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends movieCategory$moviesArgs<ExtArgs> = {}>(args?: Subset<T, movieCategory$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the movieCategory model
   */
  interface movieCategoryFieldRefs {
    readonly id: FieldRef<"movieCategory", 'Int'>
    readonly movieCategoryName: FieldRef<"movieCategory", 'String'>
    readonly price: FieldRef<"movieCategory", 'Float'>
    readonly createdAt: FieldRef<"movieCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"movieCategory", 'DateTime'>
    readonly adminId: FieldRef<"movieCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * movieCategory findUnique
   */
  export type movieCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieCategory
     */
    select?: movieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the movieCategory
     */
    omit?: movieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieCategoryInclude<ExtArgs> | null
    /**
     * Filter, which movieCategory to fetch.
     */
    where: movieCategoryWhereUniqueInput
  }

  /**
   * movieCategory findUniqueOrThrow
   */
  export type movieCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieCategory
     */
    select?: movieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the movieCategory
     */
    omit?: movieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieCategoryInclude<ExtArgs> | null
    /**
     * Filter, which movieCategory to fetch.
     */
    where: movieCategoryWhereUniqueInput
  }

  /**
   * movieCategory findFirst
   */
  export type movieCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieCategory
     */
    select?: movieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the movieCategory
     */
    omit?: movieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieCategoryInclude<ExtArgs> | null
    /**
     * Filter, which movieCategory to fetch.
     */
    where?: movieCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movieCategories to fetch.
     */
    orderBy?: movieCategoryOrderByWithRelationInput | movieCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movieCategories.
     */
    cursor?: movieCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movieCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movieCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movieCategories.
     */
    distinct?: MovieCategoryScalarFieldEnum | MovieCategoryScalarFieldEnum[]
  }

  /**
   * movieCategory findFirstOrThrow
   */
  export type movieCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieCategory
     */
    select?: movieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the movieCategory
     */
    omit?: movieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieCategoryInclude<ExtArgs> | null
    /**
     * Filter, which movieCategory to fetch.
     */
    where?: movieCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movieCategories to fetch.
     */
    orderBy?: movieCategoryOrderByWithRelationInput | movieCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movieCategories.
     */
    cursor?: movieCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movieCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movieCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movieCategories.
     */
    distinct?: MovieCategoryScalarFieldEnum | MovieCategoryScalarFieldEnum[]
  }

  /**
   * movieCategory findMany
   */
  export type movieCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieCategory
     */
    select?: movieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the movieCategory
     */
    omit?: movieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieCategoryInclude<ExtArgs> | null
    /**
     * Filter, which movieCategories to fetch.
     */
    where?: movieCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movieCategories to fetch.
     */
    orderBy?: movieCategoryOrderByWithRelationInput | movieCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing movieCategories.
     */
    cursor?: movieCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movieCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movieCategories.
     */
    skip?: number
    distinct?: MovieCategoryScalarFieldEnum | MovieCategoryScalarFieldEnum[]
  }

  /**
   * movieCategory create
   */
  export type movieCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieCategory
     */
    select?: movieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the movieCategory
     */
    omit?: movieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a movieCategory.
     */
    data: XOR<movieCategoryCreateInput, movieCategoryUncheckedCreateInput>
  }

  /**
   * movieCategory createMany
   */
  export type movieCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movieCategories.
     */
    data: movieCategoryCreateManyInput | movieCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movieCategory createManyAndReturn
   */
  export type movieCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieCategory
     */
    select?: movieCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the movieCategory
     */
    omit?: movieCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many movieCategories.
     */
    data: movieCategoryCreateManyInput | movieCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movieCategory update
   */
  export type movieCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieCategory
     */
    select?: movieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the movieCategory
     */
    omit?: movieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a movieCategory.
     */
    data: XOR<movieCategoryUpdateInput, movieCategoryUncheckedUpdateInput>
    /**
     * Choose, which movieCategory to update.
     */
    where: movieCategoryWhereUniqueInput
  }

  /**
   * movieCategory updateMany
   */
  export type movieCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movieCategories.
     */
    data: XOR<movieCategoryUpdateManyMutationInput, movieCategoryUncheckedUpdateManyInput>
    /**
     * Filter which movieCategories to update
     */
    where?: movieCategoryWhereInput
    /**
     * Limit how many movieCategories to update.
     */
    limit?: number
  }

  /**
   * movieCategory updateManyAndReturn
   */
  export type movieCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieCategory
     */
    select?: movieCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the movieCategory
     */
    omit?: movieCategoryOmit<ExtArgs> | null
    /**
     * The data used to update movieCategories.
     */
    data: XOR<movieCategoryUpdateManyMutationInput, movieCategoryUncheckedUpdateManyInput>
    /**
     * Filter which movieCategories to update
     */
    where?: movieCategoryWhereInput
    /**
     * Limit how many movieCategories to update.
     */
    limit?: number
  }

  /**
   * movieCategory upsert
   */
  export type movieCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieCategory
     */
    select?: movieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the movieCategory
     */
    omit?: movieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the movieCategory to update in case it exists.
     */
    where: movieCategoryWhereUniqueInput
    /**
     * In case the movieCategory found by the `where` argument doesn't exist, create a new movieCategory with this data.
     */
    create: XOR<movieCategoryCreateInput, movieCategoryUncheckedCreateInput>
    /**
     * In case the movieCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<movieCategoryUpdateInput, movieCategoryUncheckedUpdateInput>
  }

  /**
   * movieCategory delete
   */
  export type movieCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieCategory
     */
    select?: movieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the movieCategory
     */
    omit?: movieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieCategoryInclude<ExtArgs> | null
    /**
     * Filter which movieCategory to delete.
     */
    where: movieCategoryWhereUniqueInput
  }

  /**
   * movieCategory deleteMany
   */
  export type movieCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movieCategories to delete
     */
    where?: movieCategoryWhereInput
    /**
     * Limit how many movieCategories to delete.
     */
    limit?: number
  }

  /**
   * movieCategory.movies
   */
  export type movieCategory$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    where?: moviesWhereInput
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    cursor?: moviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * movieCategory without action
   */
  export type movieCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movieCategory
     */
    select?: movieCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the movieCategory
     */
    omit?: movieCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movieCategoryInclude<ExtArgs> | null
  }


  /**
   * Model series
   */

  export type AggregateSeries = {
    _count: SeriesCountAggregateOutputType | null
    _avg: SeriesAvgAggregateOutputType | null
    _sum: SeriesSumAggregateOutputType | null
    _min: SeriesMinAggregateOutputType | null
    _max: SeriesMaxAggregateOutputType | null
  }

  export type SeriesAvgAggregateOutputType = {
    id: number | null
    seriesSeason: number | null
    seriesEpisode: number | null
    adminId: number | null
    seriesCategoryId: number | null
  }

  export type SeriesSumAggregateOutputType = {
    id: number | null
    seriesSeason: number | null
    seriesEpisode: number | null
    adminId: number | null
    seriesCategoryId: number | null
  }

  export type SeriesMinAggregateOutputType = {
    id: number | null
    seriesName: string | null
    seriesDis: string | null
    seriesImage: string | null
    seriesSeason: number | null
    seriesEpisode: number | null
    createdAt: Date | null
    updatedAt: Date | null
    adminId: number | null
    seriesCategoryId: number | null
  }

  export type SeriesMaxAggregateOutputType = {
    id: number | null
    seriesName: string | null
    seriesDis: string | null
    seriesImage: string | null
    seriesSeason: number | null
    seriesEpisode: number | null
    createdAt: Date | null
    updatedAt: Date | null
    adminId: number | null
    seriesCategoryId: number | null
  }

  export type SeriesCountAggregateOutputType = {
    id: number
    seriesName: number
    seriesDis: number
    seriesImage: number
    seriesSeason: number
    seriesEpisode: number
    createdAt: number
    updatedAt: number
    adminId: number
    seriesCategoryId: number
    _all: number
  }


  export type SeriesAvgAggregateInputType = {
    id?: true
    seriesSeason?: true
    seriesEpisode?: true
    adminId?: true
    seriesCategoryId?: true
  }

  export type SeriesSumAggregateInputType = {
    id?: true
    seriesSeason?: true
    seriesEpisode?: true
    adminId?: true
    seriesCategoryId?: true
  }

  export type SeriesMinAggregateInputType = {
    id?: true
    seriesName?: true
    seriesDis?: true
    seriesImage?: true
    seriesSeason?: true
    seriesEpisode?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
    seriesCategoryId?: true
  }

  export type SeriesMaxAggregateInputType = {
    id?: true
    seriesName?: true
    seriesDis?: true
    seriesImage?: true
    seriesSeason?: true
    seriesEpisode?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
    seriesCategoryId?: true
  }

  export type SeriesCountAggregateInputType = {
    id?: true
    seriesName?: true
    seriesDis?: true
    seriesImage?: true
    seriesSeason?: true
    seriesEpisode?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
    seriesCategoryId?: true
    _all?: true
  }

  export type SeriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which series to aggregate.
     */
    where?: seriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of series to fetch.
     */
    orderBy?: seriesOrderByWithRelationInput | seriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: seriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned series
    **/
    _count?: true | SeriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeriesMaxAggregateInputType
  }

  export type GetSeriesAggregateType<T extends SeriesAggregateArgs> = {
        [P in keyof T & keyof AggregateSeries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeries[P]>
      : GetScalarType<T[P], AggregateSeries[P]>
  }




  export type seriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seriesWhereInput
    orderBy?: seriesOrderByWithAggregationInput | seriesOrderByWithAggregationInput[]
    by: SeriesScalarFieldEnum[] | SeriesScalarFieldEnum
    having?: seriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeriesCountAggregateInputType | true
    _avg?: SeriesAvgAggregateInputType
    _sum?: SeriesSumAggregateInputType
    _min?: SeriesMinAggregateInputType
    _max?: SeriesMaxAggregateInputType
  }

  export type SeriesGroupByOutputType = {
    id: number
    seriesName: string
    seriesDis: string
    seriesImage: string
    seriesSeason: number
    seriesEpisode: number
    createdAt: Date
    updatedAt: Date
    adminId: number
    seriesCategoryId: number
    _count: SeriesCountAggregateOutputType | null
    _avg: SeriesAvgAggregateOutputType | null
    _sum: SeriesSumAggregateOutputType | null
    _min: SeriesMinAggregateOutputType | null
    _max: SeriesMaxAggregateOutputType | null
  }

  type GetSeriesGroupByPayload<T extends seriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeriesGroupByOutputType[P]>
            : GetScalarType<T[P], SeriesGroupByOutputType[P]>
        }
      >
    >


  export type seriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seriesName?: boolean
    seriesDis?: boolean
    seriesImage?: boolean
    seriesSeason?: boolean
    seriesEpisode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    seriesCategoryId?: boolean
    seriesCategory?: boolean | seriesCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["series"]>

  export type seriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seriesName?: boolean
    seriesDis?: boolean
    seriesImage?: boolean
    seriesSeason?: boolean
    seriesEpisode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    seriesCategoryId?: boolean
    seriesCategory?: boolean | seriesCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["series"]>

  export type seriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seriesName?: boolean
    seriesDis?: boolean
    seriesImage?: boolean
    seriesSeason?: boolean
    seriesEpisode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    seriesCategoryId?: boolean
    seriesCategory?: boolean | seriesCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["series"]>

  export type seriesSelectScalar = {
    id?: boolean
    seriesName?: boolean
    seriesDis?: boolean
    seriesImage?: boolean
    seriesSeason?: boolean
    seriesEpisode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    seriesCategoryId?: boolean
  }

  export type seriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seriesName" | "seriesDis" | "seriesImage" | "seriesSeason" | "seriesEpisode" | "createdAt" | "updatedAt" | "adminId" | "seriesCategoryId", ExtArgs["result"]["series"]>
  export type seriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seriesCategory?: boolean | seriesCategoryDefaultArgs<ExtArgs>
  }
  export type seriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seriesCategory?: boolean | seriesCategoryDefaultArgs<ExtArgs>
  }
  export type seriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seriesCategory?: boolean | seriesCategoryDefaultArgs<ExtArgs>
  }

  export type $seriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "series"
    objects: {
      seriesCategory: Prisma.$seriesCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seriesName: string
      seriesDis: string
      seriesImage: string
      seriesSeason: number
      seriesEpisode: number
      createdAt: Date
      updatedAt: Date
      adminId: number
      seriesCategoryId: number
    }, ExtArgs["result"]["series"]>
    composites: {}
  }

  type seriesGetPayload<S extends boolean | null | undefined | seriesDefaultArgs> = $Result.GetResult<Prisma.$seriesPayload, S>

  type seriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<seriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeriesCountAggregateInputType | true
    }

  export interface seriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['series'], meta: { name: 'series' } }
    /**
     * Find zero or one Series that matches the filter.
     * @param {seriesFindUniqueArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends seriesFindUniqueArgs>(args: SelectSubset<T, seriesFindUniqueArgs<ExtArgs>>): Prisma__seriesClient<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Series that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {seriesFindUniqueOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends seriesFindUniqueOrThrowArgs>(args: SelectSubset<T, seriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__seriesClient<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesFindFirstArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends seriesFindFirstArgs>(args?: SelectSubset<T, seriesFindFirstArgs<ExtArgs>>): Prisma__seriesClient<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Series that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesFindFirstOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends seriesFindFirstOrThrowArgs>(args?: SelectSubset<T, seriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__seriesClient<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Series
     * const series = await prisma.series.findMany()
     * 
     * // Get first 10 Series
     * const series = await prisma.series.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seriesWithIdOnly = await prisma.series.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends seriesFindManyArgs>(args?: SelectSubset<T, seriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Series.
     * @param {seriesCreateArgs} args - Arguments to create a Series.
     * @example
     * // Create one Series
     * const Series = await prisma.series.create({
     *   data: {
     *     // ... data to create a Series
     *   }
     * })
     * 
     */
    create<T extends seriesCreateArgs>(args: SelectSubset<T, seriesCreateArgs<ExtArgs>>): Prisma__seriesClient<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Series.
     * @param {seriesCreateManyArgs} args - Arguments to create many Series.
     * @example
     * // Create many Series
     * const series = await prisma.series.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends seriesCreateManyArgs>(args?: SelectSubset<T, seriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Series and returns the data saved in the database.
     * @param {seriesCreateManyAndReturnArgs} args - Arguments to create many Series.
     * @example
     * // Create many Series
     * const series = await prisma.series.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Series and only return the `id`
     * const seriesWithIdOnly = await prisma.series.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends seriesCreateManyAndReturnArgs>(args?: SelectSubset<T, seriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Series.
     * @param {seriesDeleteArgs} args - Arguments to delete one Series.
     * @example
     * // Delete one Series
     * const Series = await prisma.series.delete({
     *   where: {
     *     // ... filter to delete one Series
     *   }
     * })
     * 
     */
    delete<T extends seriesDeleteArgs>(args: SelectSubset<T, seriesDeleteArgs<ExtArgs>>): Prisma__seriesClient<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Series.
     * @param {seriesUpdateArgs} args - Arguments to update one Series.
     * @example
     * // Update one Series
     * const series = await prisma.series.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends seriesUpdateArgs>(args: SelectSubset<T, seriesUpdateArgs<ExtArgs>>): Prisma__seriesClient<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Series.
     * @param {seriesDeleteManyArgs} args - Arguments to filter Series to delete.
     * @example
     * // Delete a few Series
     * const { count } = await prisma.series.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends seriesDeleteManyArgs>(args?: SelectSubset<T, seriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Series
     * const series = await prisma.series.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends seriesUpdateManyArgs>(args: SelectSubset<T, seriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series and returns the data updated in the database.
     * @param {seriesUpdateManyAndReturnArgs} args - Arguments to update many Series.
     * @example
     * // Update many Series
     * const series = await prisma.series.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Series and only return the `id`
     * const seriesWithIdOnly = await prisma.series.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends seriesUpdateManyAndReturnArgs>(args: SelectSubset<T, seriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Series.
     * @param {seriesUpsertArgs} args - Arguments to update or create a Series.
     * @example
     * // Update or create a Series
     * const series = await prisma.series.upsert({
     *   create: {
     *     // ... data to create a Series
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Series we want to update
     *   }
     * })
     */
    upsert<T extends seriesUpsertArgs>(args: SelectSubset<T, seriesUpsertArgs<ExtArgs>>): Prisma__seriesClient<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesCountArgs} args - Arguments to filter Series to count.
     * @example
     * // Count the number of Series
     * const count = await prisma.series.count({
     *   where: {
     *     // ... the filter for the Series we want to count
     *   }
     * })
    **/
    count<T extends seriesCountArgs>(
      args?: Subset<T, seriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeriesAggregateArgs>(args: Subset<T, SeriesAggregateArgs>): Prisma.PrismaPromise<GetSeriesAggregateType<T>>

    /**
     * Group by Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesGroupByArgs} args - Group by arguments.
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
      T extends seriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: seriesGroupByArgs['orderBy'] }
        : { orderBy?: seriesGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, seriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the series model
   */
  readonly fields: seriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for series.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__seriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seriesCategory<T extends seriesCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, seriesCategoryDefaultArgs<ExtArgs>>): Prisma__seriesCategoryClient<$Result.GetResult<Prisma.$seriesCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the series model
   */
  interface seriesFieldRefs {
    readonly id: FieldRef<"series", 'Int'>
    readonly seriesName: FieldRef<"series", 'String'>
    readonly seriesDis: FieldRef<"series", 'String'>
    readonly seriesImage: FieldRef<"series", 'String'>
    readonly seriesSeason: FieldRef<"series", 'Int'>
    readonly seriesEpisode: FieldRef<"series", 'Int'>
    readonly createdAt: FieldRef<"series", 'DateTime'>
    readonly updatedAt: FieldRef<"series", 'DateTime'>
    readonly adminId: FieldRef<"series", 'Int'>
    readonly seriesCategoryId: FieldRef<"series", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * series findUnique
   */
  export type seriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the series
     */
    omit?: seriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesInclude<ExtArgs> | null
    /**
     * Filter, which series to fetch.
     */
    where: seriesWhereUniqueInput
  }

  /**
   * series findUniqueOrThrow
   */
  export type seriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the series
     */
    omit?: seriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesInclude<ExtArgs> | null
    /**
     * Filter, which series to fetch.
     */
    where: seriesWhereUniqueInput
  }

  /**
   * series findFirst
   */
  export type seriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the series
     */
    omit?: seriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesInclude<ExtArgs> | null
    /**
     * Filter, which series to fetch.
     */
    where?: seriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of series to fetch.
     */
    orderBy?: seriesOrderByWithRelationInput | seriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for series.
     */
    cursor?: seriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * series findFirstOrThrow
   */
  export type seriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the series
     */
    omit?: seriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesInclude<ExtArgs> | null
    /**
     * Filter, which series to fetch.
     */
    where?: seriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of series to fetch.
     */
    orderBy?: seriesOrderByWithRelationInput | seriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for series.
     */
    cursor?: seriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * series findMany
   */
  export type seriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the series
     */
    omit?: seriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesInclude<ExtArgs> | null
    /**
     * Filter, which series to fetch.
     */
    where?: seriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of series to fetch.
     */
    orderBy?: seriesOrderByWithRelationInput | seriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing series.
     */
    cursor?: seriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` series.
     */
    skip?: number
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * series create
   */
  export type seriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the series
     */
    omit?: seriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesInclude<ExtArgs> | null
    /**
     * The data needed to create a series.
     */
    data: XOR<seriesCreateInput, seriesUncheckedCreateInput>
  }

  /**
   * series createMany
   */
  export type seriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many series.
     */
    data: seriesCreateManyInput | seriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * series createManyAndReturn
   */
  export type seriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the series
     */
    omit?: seriesOmit<ExtArgs> | null
    /**
     * The data used to create many series.
     */
    data: seriesCreateManyInput | seriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * series update
   */
  export type seriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the series
     */
    omit?: seriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesInclude<ExtArgs> | null
    /**
     * The data needed to update a series.
     */
    data: XOR<seriesUpdateInput, seriesUncheckedUpdateInput>
    /**
     * Choose, which series to update.
     */
    where: seriesWhereUniqueInput
  }

  /**
   * series updateMany
   */
  export type seriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update series.
     */
    data: XOR<seriesUpdateManyMutationInput, seriesUncheckedUpdateManyInput>
    /**
     * Filter which series to update
     */
    where?: seriesWhereInput
    /**
     * Limit how many series to update.
     */
    limit?: number
  }

  /**
   * series updateManyAndReturn
   */
  export type seriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the series
     */
    omit?: seriesOmit<ExtArgs> | null
    /**
     * The data used to update series.
     */
    data: XOR<seriesUpdateManyMutationInput, seriesUncheckedUpdateManyInput>
    /**
     * Filter which series to update
     */
    where?: seriesWhereInput
    /**
     * Limit how many series to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * series upsert
   */
  export type seriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the series
     */
    omit?: seriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesInclude<ExtArgs> | null
    /**
     * The filter to search for the series to update in case it exists.
     */
    where: seriesWhereUniqueInput
    /**
     * In case the series found by the `where` argument doesn't exist, create a new series with this data.
     */
    create: XOR<seriesCreateInput, seriesUncheckedCreateInput>
    /**
     * In case the series was found with the provided `where` argument, update it with this data.
     */
    update: XOR<seriesUpdateInput, seriesUncheckedUpdateInput>
  }

  /**
   * series delete
   */
  export type seriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the series
     */
    omit?: seriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesInclude<ExtArgs> | null
    /**
     * Filter which series to delete.
     */
    where: seriesWhereUniqueInput
  }

  /**
   * series deleteMany
   */
  export type seriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which series to delete
     */
    where?: seriesWhereInput
    /**
     * Limit how many series to delete.
     */
    limit?: number
  }

  /**
   * series without action
   */
  export type seriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the series
     */
    omit?: seriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesInclude<ExtArgs> | null
  }


  /**
   * Model seriesCategory
   */

  export type AggregateSeriesCategory = {
    _count: SeriesCategoryCountAggregateOutputType | null
    _avg: SeriesCategoryAvgAggregateOutputType | null
    _sum: SeriesCategorySumAggregateOutputType | null
    _min: SeriesCategoryMinAggregateOutputType | null
    _max: SeriesCategoryMaxAggregateOutputType | null
  }

  export type SeriesCategoryAvgAggregateOutputType = {
    id: number | null
    price: number | null
    adminId: number | null
  }

  export type SeriesCategorySumAggregateOutputType = {
    id: number | null
    price: number | null
    adminId: number | null
  }

  export type SeriesCategoryMinAggregateOutputType = {
    id: number | null
    seriesCategoryName: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    adminId: number | null
  }

  export type SeriesCategoryMaxAggregateOutputType = {
    id: number | null
    seriesCategoryName: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    adminId: number | null
  }

  export type SeriesCategoryCountAggregateOutputType = {
    id: number
    seriesCategoryName: number
    price: number
    createdAt: number
    updatedAt: number
    adminId: number
    _all: number
  }


  export type SeriesCategoryAvgAggregateInputType = {
    id?: true
    price?: true
    adminId?: true
  }

  export type SeriesCategorySumAggregateInputType = {
    id?: true
    price?: true
    adminId?: true
  }

  export type SeriesCategoryMinAggregateInputType = {
    id?: true
    seriesCategoryName?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
  }

  export type SeriesCategoryMaxAggregateInputType = {
    id?: true
    seriesCategoryName?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
  }

  export type SeriesCategoryCountAggregateInputType = {
    id?: true
    seriesCategoryName?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
    _all?: true
  }

  export type SeriesCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seriesCategory to aggregate.
     */
    where?: seriesCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seriesCategories to fetch.
     */
    orderBy?: seriesCategoryOrderByWithRelationInput | seriesCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: seriesCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seriesCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seriesCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned seriesCategories
    **/
    _count?: true | SeriesCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeriesCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeriesCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeriesCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeriesCategoryMaxAggregateInputType
  }

  export type GetSeriesCategoryAggregateType<T extends SeriesCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSeriesCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeriesCategory[P]>
      : GetScalarType<T[P], AggregateSeriesCategory[P]>
  }




  export type seriesCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seriesCategoryWhereInput
    orderBy?: seriesCategoryOrderByWithAggregationInput | seriesCategoryOrderByWithAggregationInput[]
    by: SeriesCategoryScalarFieldEnum[] | SeriesCategoryScalarFieldEnum
    having?: seriesCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeriesCategoryCountAggregateInputType | true
    _avg?: SeriesCategoryAvgAggregateInputType
    _sum?: SeriesCategorySumAggregateInputType
    _min?: SeriesCategoryMinAggregateInputType
    _max?: SeriesCategoryMaxAggregateInputType
  }

  export type SeriesCategoryGroupByOutputType = {
    id: number
    seriesCategoryName: string
    price: number
    createdAt: Date
    updatedAt: Date
    adminId: number
    _count: SeriesCategoryCountAggregateOutputType | null
    _avg: SeriesCategoryAvgAggregateOutputType | null
    _sum: SeriesCategorySumAggregateOutputType | null
    _min: SeriesCategoryMinAggregateOutputType | null
    _max: SeriesCategoryMaxAggregateOutputType | null
  }

  type GetSeriesCategoryGroupByPayload<T extends seriesCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeriesCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeriesCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeriesCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SeriesCategoryGroupByOutputType[P]>
        }
      >
    >


  export type seriesCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seriesCategoryName?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    series?: boolean | seriesCategory$seriesArgs<ExtArgs>
    _count?: boolean | SeriesCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seriesCategory"]>

  export type seriesCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seriesCategoryName?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
  }, ExtArgs["result"]["seriesCategory"]>

  export type seriesCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seriesCategoryName?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
  }, ExtArgs["result"]["seriesCategory"]>

  export type seriesCategorySelectScalar = {
    id?: boolean
    seriesCategoryName?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
  }

  export type seriesCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seriesCategoryName" | "price" | "createdAt" | "updatedAt" | "adminId", ExtArgs["result"]["seriesCategory"]>
  export type seriesCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    series?: boolean | seriesCategory$seriesArgs<ExtArgs>
    _count?: boolean | SeriesCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type seriesCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type seriesCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $seriesCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "seriesCategory"
    objects: {
      series: Prisma.$seriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seriesCategoryName: string
      price: number
      createdAt: Date
      updatedAt: Date
      adminId: number
    }, ExtArgs["result"]["seriesCategory"]>
    composites: {}
  }

  type seriesCategoryGetPayload<S extends boolean | null | undefined | seriesCategoryDefaultArgs> = $Result.GetResult<Prisma.$seriesCategoryPayload, S>

  type seriesCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<seriesCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeriesCategoryCountAggregateInputType | true
    }

  export interface seriesCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['seriesCategory'], meta: { name: 'seriesCategory' } }
    /**
     * Find zero or one SeriesCategory that matches the filter.
     * @param {seriesCategoryFindUniqueArgs} args - Arguments to find a SeriesCategory
     * @example
     * // Get one SeriesCategory
     * const seriesCategory = await prisma.seriesCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends seriesCategoryFindUniqueArgs>(args: SelectSubset<T, seriesCategoryFindUniqueArgs<ExtArgs>>): Prisma__seriesCategoryClient<$Result.GetResult<Prisma.$seriesCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeriesCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {seriesCategoryFindUniqueOrThrowArgs} args - Arguments to find a SeriesCategory
     * @example
     * // Get one SeriesCategory
     * const seriesCategory = await prisma.seriesCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends seriesCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, seriesCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__seriesCategoryClient<$Result.GetResult<Prisma.$seriesCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeriesCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesCategoryFindFirstArgs} args - Arguments to find a SeriesCategory
     * @example
     * // Get one SeriesCategory
     * const seriesCategory = await prisma.seriesCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends seriesCategoryFindFirstArgs>(args?: SelectSubset<T, seriesCategoryFindFirstArgs<ExtArgs>>): Prisma__seriesCategoryClient<$Result.GetResult<Prisma.$seriesCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeriesCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesCategoryFindFirstOrThrowArgs} args - Arguments to find a SeriesCategory
     * @example
     * // Get one SeriesCategory
     * const seriesCategory = await prisma.seriesCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends seriesCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, seriesCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__seriesCategoryClient<$Result.GetResult<Prisma.$seriesCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeriesCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeriesCategories
     * const seriesCategories = await prisma.seriesCategory.findMany()
     * 
     * // Get first 10 SeriesCategories
     * const seriesCategories = await prisma.seriesCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seriesCategoryWithIdOnly = await prisma.seriesCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends seriesCategoryFindManyArgs>(args?: SelectSubset<T, seriesCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seriesCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeriesCategory.
     * @param {seriesCategoryCreateArgs} args - Arguments to create a SeriesCategory.
     * @example
     * // Create one SeriesCategory
     * const SeriesCategory = await prisma.seriesCategory.create({
     *   data: {
     *     // ... data to create a SeriesCategory
     *   }
     * })
     * 
     */
    create<T extends seriesCategoryCreateArgs>(args: SelectSubset<T, seriesCategoryCreateArgs<ExtArgs>>): Prisma__seriesCategoryClient<$Result.GetResult<Prisma.$seriesCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeriesCategories.
     * @param {seriesCategoryCreateManyArgs} args - Arguments to create many SeriesCategories.
     * @example
     * // Create many SeriesCategories
     * const seriesCategory = await prisma.seriesCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends seriesCategoryCreateManyArgs>(args?: SelectSubset<T, seriesCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeriesCategories and returns the data saved in the database.
     * @param {seriesCategoryCreateManyAndReturnArgs} args - Arguments to create many SeriesCategories.
     * @example
     * // Create many SeriesCategories
     * const seriesCategory = await prisma.seriesCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeriesCategories and only return the `id`
     * const seriesCategoryWithIdOnly = await prisma.seriesCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends seriesCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, seriesCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seriesCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeriesCategory.
     * @param {seriesCategoryDeleteArgs} args - Arguments to delete one SeriesCategory.
     * @example
     * // Delete one SeriesCategory
     * const SeriesCategory = await prisma.seriesCategory.delete({
     *   where: {
     *     // ... filter to delete one SeriesCategory
     *   }
     * })
     * 
     */
    delete<T extends seriesCategoryDeleteArgs>(args: SelectSubset<T, seriesCategoryDeleteArgs<ExtArgs>>): Prisma__seriesCategoryClient<$Result.GetResult<Prisma.$seriesCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeriesCategory.
     * @param {seriesCategoryUpdateArgs} args - Arguments to update one SeriesCategory.
     * @example
     * // Update one SeriesCategory
     * const seriesCategory = await prisma.seriesCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends seriesCategoryUpdateArgs>(args: SelectSubset<T, seriesCategoryUpdateArgs<ExtArgs>>): Prisma__seriesCategoryClient<$Result.GetResult<Prisma.$seriesCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeriesCategories.
     * @param {seriesCategoryDeleteManyArgs} args - Arguments to filter SeriesCategories to delete.
     * @example
     * // Delete a few SeriesCategories
     * const { count } = await prisma.seriesCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends seriesCategoryDeleteManyArgs>(args?: SelectSubset<T, seriesCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeriesCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeriesCategories
     * const seriesCategory = await prisma.seriesCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends seriesCategoryUpdateManyArgs>(args: SelectSubset<T, seriesCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeriesCategories and returns the data updated in the database.
     * @param {seriesCategoryUpdateManyAndReturnArgs} args - Arguments to update many SeriesCategories.
     * @example
     * // Update many SeriesCategories
     * const seriesCategory = await prisma.seriesCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeriesCategories and only return the `id`
     * const seriesCategoryWithIdOnly = await prisma.seriesCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends seriesCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, seriesCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seriesCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeriesCategory.
     * @param {seriesCategoryUpsertArgs} args - Arguments to update or create a SeriesCategory.
     * @example
     * // Update or create a SeriesCategory
     * const seriesCategory = await prisma.seriesCategory.upsert({
     *   create: {
     *     // ... data to create a SeriesCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeriesCategory we want to update
     *   }
     * })
     */
    upsert<T extends seriesCategoryUpsertArgs>(args: SelectSubset<T, seriesCategoryUpsertArgs<ExtArgs>>): Prisma__seriesCategoryClient<$Result.GetResult<Prisma.$seriesCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeriesCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesCategoryCountArgs} args - Arguments to filter SeriesCategories to count.
     * @example
     * // Count the number of SeriesCategories
     * const count = await prisma.seriesCategory.count({
     *   where: {
     *     // ... the filter for the SeriesCategories we want to count
     *   }
     * })
    **/
    count<T extends seriesCategoryCountArgs>(
      args?: Subset<T, seriesCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeriesCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeriesCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeriesCategoryAggregateArgs>(args: Subset<T, SeriesCategoryAggregateArgs>): Prisma.PrismaPromise<GetSeriesCategoryAggregateType<T>>

    /**
     * Group by SeriesCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seriesCategoryGroupByArgs} args - Group by arguments.
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
      T extends seriesCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: seriesCategoryGroupByArgs['orderBy'] }
        : { orderBy?: seriesCategoryGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, seriesCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeriesCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the seriesCategory model
   */
  readonly fields: seriesCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for seriesCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__seriesCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    series<T extends seriesCategory$seriesArgs<ExtArgs> = {}>(args?: Subset<T, seriesCategory$seriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the seriesCategory model
   */
  interface seriesCategoryFieldRefs {
    readonly id: FieldRef<"seriesCategory", 'Int'>
    readonly seriesCategoryName: FieldRef<"seriesCategory", 'String'>
    readonly price: FieldRef<"seriesCategory", 'Float'>
    readonly createdAt: FieldRef<"seriesCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"seriesCategory", 'DateTime'>
    readonly adminId: FieldRef<"seriesCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * seriesCategory findUnique
   */
  export type seriesCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seriesCategory
     */
    select?: seriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the seriesCategory
     */
    omit?: seriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesCategoryInclude<ExtArgs> | null
    /**
     * Filter, which seriesCategory to fetch.
     */
    where: seriesCategoryWhereUniqueInput
  }

  /**
   * seriesCategory findUniqueOrThrow
   */
  export type seriesCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seriesCategory
     */
    select?: seriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the seriesCategory
     */
    omit?: seriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesCategoryInclude<ExtArgs> | null
    /**
     * Filter, which seriesCategory to fetch.
     */
    where: seriesCategoryWhereUniqueInput
  }

  /**
   * seriesCategory findFirst
   */
  export type seriesCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seriesCategory
     */
    select?: seriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the seriesCategory
     */
    omit?: seriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesCategoryInclude<ExtArgs> | null
    /**
     * Filter, which seriesCategory to fetch.
     */
    where?: seriesCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seriesCategories to fetch.
     */
    orderBy?: seriesCategoryOrderByWithRelationInput | seriesCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seriesCategories.
     */
    cursor?: seriesCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seriesCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seriesCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seriesCategories.
     */
    distinct?: SeriesCategoryScalarFieldEnum | SeriesCategoryScalarFieldEnum[]
  }

  /**
   * seriesCategory findFirstOrThrow
   */
  export type seriesCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seriesCategory
     */
    select?: seriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the seriesCategory
     */
    omit?: seriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesCategoryInclude<ExtArgs> | null
    /**
     * Filter, which seriesCategory to fetch.
     */
    where?: seriesCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seriesCategories to fetch.
     */
    orderBy?: seriesCategoryOrderByWithRelationInput | seriesCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seriesCategories.
     */
    cursor?: seriesCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seriesCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seriesCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seriesCategories.
     */
    distinct?: SeriesCategoryScalarFieldEnum | SeriesCategoryScalarFieldEnum[]
  }

  /**
   * seriesCategory findMany
   */
  export type seriesCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seriesCategory
     */
    select?: seriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the seriesCategory
     */
    omit?: seriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesCategoryInclude<ExtArgs> | null
    /**
     * Filter, which seriesCategories to fetch.
     */
    where?: seriesCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seriesCategories to fetch.
     */
    orderBy?: seriesCategoryOrderByWithRelationInput | seriesCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing seriesCategories.
     */
    cursor?: seriesCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seriesCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seriesCategories.
     */
    skip?: number
    distinct?: SeriesCategoryScalarFieldEnum | SeriesCategoryScalarFieldEnum[]
  }

  /**
   * seriesCategory create
   */
  export type seriesCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seriesCategory
     */
    select?: seriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the seriesCategory
     */
    omit?: seriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a seriesCategory.
     */
    data: XOR<seriesCategoryCreateInput, seriesCategoryUncheckedCreateInput>
  }

  /**
   * seriesCategory createMany
   */
  export type seriesCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many seriesCategories.
     */
    data: seriesCategoryCreateManyInput | seriesCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * seriesCategory createManyAndReturn
   */
  export type seriesCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seriesCategory
     */
    select?: seriesCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the seriesCategory
     */
    omit?: seriesCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many seriesCategories.
     */
    data: seriesCategoryCreateManyInput | seriesCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * seriesCategory update
   */
  export type seriesCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seriesCategory
     */
    select?: seriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the seriesCategory
     */
    omit?: seriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a seriesCategory.
     */
    data: XOR<seriesCategoryUpdateInput, seriesCategoryUncheckedUpdateInput>
    /**
     * Choose, which seriesCategory to update.
     */
    where: seriesCategoryWhereUniqueInput
  }

  /**
   * seriesCategory updateMany
   */
  export type seriesCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update seriesCategories.
     */
    data: XOR<seriesCategoryUpdateManyMutationInput, seriesCategoryUncheckedUpdateManyInput>
    /**
     * Filter which seriesCategories to update
     */
    where?: seriesCategoryWhereInput
    /**
     * Limit how many seriesCategories to update.
     */
    limit?: number
  }

  /**
   * seriesCategory updateManyAndReturn
   */
  export type seriesCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seriesCategory
     */
    select?: seriesCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the seriesCategory
     */
    omit?: seriesCategoryOmit<ExtArgs> | null
    /**
     * The data used to update seriesCategories.
     */
    data: XOR<seriesCategoryUpdateManyMutationInput, seriesCategoryUncheckedUpdateManyInput>
    /**
     * Filter which seriesCategories to update
     */
    where?: seriesCategoryWhereInput
    /**
     * Limit how many seriesCategories to update.
     */
    limit?: number
  }

  /**
   * seriesCategory upsert
   */
  export type seriesCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seriesCategory
     */
    select?: seriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the seriesCategory
     */
    omit?: seriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the seriesCategory to update in case it exists.
     */
    where: seriesCategoryWhereUniqueInput
    /**
     * In case the seriesCategory found by the `where` argument doesn't exist, create a new seriesCategory with this data.
     */
    create: XOR<seriesCategoryCreateInput, seriesCategoryUncheckedCreateInput>
    /**
     * In case the seriesCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<seriesCategoryUpdateInput, seriesCategoryUncheckedUpdateInput>
  }

  /**
   * seriesCategory delete
   */
  export type seriesCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seriesCategory
     */
    select?: seriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the seriesCategory
     */
    omit?: seriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesCategoryInclude<ExtArgs> | null
    /**
     * Filter which seriesCategory to delete.
     */
    where: seriesCategoryWhereUniqueInput
  }

  /**
   * seriesCategory deleteMany
   */
  export type seriesCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seriesCategories to delete
     */
    where?: seriesCategoryWhereInput
    /**
     * Limit how many seriesCategories to delete.
     */
    limit?: number
  }

  /**
   * seriesCategory.series
   */
  export type seriesCategory$seriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the series
     */
    select?: seriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the series
     */
    omit?: seriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesInclude<ExtArgs> | null
    where?: seriesWhereInput
    orderBy?: seriesOrderByWithRelationInput | seriesOrderByWithRelationInput[]
    cursor?: seriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * seriesCategory without action
   */
  export type seriesCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seriesCategory
     */
    select?: seriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the seriesCategory
     */
    omit?: seriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seriesCategoryInclude<ExtArgs> | null
  }


  /**
   * Model otherProducts
   */

  export type AggregateOtherProducts = {
    _count: OtherProductsCountAggregateOutputType | null
    _avg: OtherProductsAvgAggregateOutputType | null
    _sum: OtherProductsSumAggregateOutputType | null
    _min: OtherProductsMinAggregateOutputType | null
    _max: OtherProductsMaxAggregateOutputType | null
  }

  export type OtherProductsAvgAggregateOutputType = {
    id: number | null
    price: number | null
    adminId: number | null
    otherProductCategoryId: number | null
  }

  export type OtherProductsSumAggregateOutputType = {
    id: number | null
    price: number | null
    adminId: number | null
    otherProductCategoryId: number | null
  }

  export type OtherProductsMinAggregateOutputType = {
    id: number | null
    productName: string | null
    productImage: string | null
    otherProductType: $Enums.OtherProductType | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    adminId: number | null
    otherProductCategoryId: number | null
  }

  export type OtherProductsMaxAggregateOutputType = {
    id: number | null
    productName: string | null
    productImage: string | null
    otherProductType: $Enums.OtherProductType | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    adminId: number | null
    otherProductCategoryId: number | null
  }

  export type OtherProductsCountAggregateOutputType = {
    id: number
    productName: number
    productImage: number
    otherProductType: number
    price: number
    createdAt: number
    updatedAt: number
    adminId: number
    otherProductCategoryId: number
    _all: number
  }


  export type OtherProductsAvgAggregateInputType = {
    id?: true
    price?: true
    adminId?: true
    otherProductCategoryId?: true
  }

  export type OtherProductsSumAggregateInputType = {
    id?: true
    price?: true
    adminId?: true
    otherProductCategoryId?: true
  }

  export type OtherProductsMinAggregateInputType = {
    id?: true
    productName?: true
    productImage?: true
    otherProductType?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
    otherProductCategoryId?: true
  }

  export type OtherProductsMaxAggregateInputType = {
    id?: true
    productName?: true
    productImage?: true
    otherProductType?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
    otherProductCategoryId?: true
  }

  export type OtherProductsCountAggregateInputType = {
    id?: true
    productName?: true
    productImage?: true
    otherProductType?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
    otherProductCategoryId?: true
    _all?: true
  }

  export type OtherProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otherProducts to aggregate.
     */
    where?: otherProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otherProducts to fetch.
     */
    orderBy?: otherProductsOrderByWithRelationInput | otherProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: otherProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otherProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otherProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned otherProducts
    **/
    _count?: true | OtherProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtherProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtherProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtherProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtherProductsMaxAggregateInputType
  }

  export type GetOtherProductsAggregateType<T extends OtherProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateOtherProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtherProducts[P]>
      : GetScalarType<T[P], AggregateOtherProducts[P]>
  }




  export type otherProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: otherProductsWhereInput
    orderBy?: otherProductsOrderByWithAggregationInput | otherProductsOrderByWithAggregationInput[]
    by: OtherProductsScalarFieldEnum[] | OtherProductsScalarFieldEnum
    having?: otherProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtherProductsCountAggregateInputType | true
    _avg?: OtherProductsAvgAggregateInputType
    _sum?: OtherProductsSumAggregateInputType
    _min?: OtherProductsMinAggregateInputType
    _max?: OtherProductsMaxAggregateInputType
  }

  export type OtherProductsGroupByOutputType = {
    id: number
    productName: string
    productImage: string
    otherProductType: $Enums.OtherProductType
    price: number
    createdAt: Date
    updatedAt: Date
    adminId: number
    otherProductCategoryId: number
    _count: OtherProductsCountAggregateOutputType | null
    _avg: OtherProductsAvgAggregateOutputType | null
    _sum: OtherProductsSumAggregateOutputType | null
    _min: OtherProductsMinAggregateOutputType | null
    _max: OtherProductsMaxAggregateOutputType | null
  }

  type GetOtherProductsGroupByPayload<T extends otherProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtherProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtherProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtherProductsGroupByOutputType[P]>
            : GetScalarType<T[P], OtherProductsGroupByOutputType[P]>
        }
      >
    >


  export type otherProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    productImage?: boolean
    otherProductType?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    otherProductCategoryId?: boolean
    otherProductCategory?: boolean | otherProductCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherProducts"]>

  export type otherProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    productImage?: boolean
    otherProductType?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    otherProductCategoryId?: boolean
    otherProductCategory?: boolean | otherProductCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherProducts"]>

  export type otherProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    productImage?: boolean
    otherProductType?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    otherProductCategoryId?: boolean
    otherProductCategory?: boolean | otherProductCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherProducts"]>

  export type otherProductsSelectScalar = {
    id?: boolean
    productName?: boolean
    productImage?: boolean
    otherProductType?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    otherProductCategoryId?: boolean
  }

  export type otherProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productName" | "productImage" | "otherProductType" | "price" | "createdAt" | "updatedAt" | "adminId" | "otherProductCategoryId", ExtArgs["result"]["otherProducts"]>
  export type otherProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otherProductCategory?: boolean | otherProductCategoryDefaultArgs<ExtArgs>
  }
  export type otherProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otherProductCategory?: boolean | otherProductCategoryDefaultArgs<ExtArgs>
  }
  export type otherProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otherProductCategory?: boolean | otherProductCategoryDefaultArgs<ExtArgs>
  }

  export type $otherProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "otherProducts"
    objects: {
      otherProductCategory: Prisma.$otherProductCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productName: string
      productImage: string
      otherProductType: $Enums.OtherProductType
      price: number
      createdAt: Date
      updatedAt: Date
      adminId: number
      otherProductCategoryId: number
    }, ExtArgs["result"]["otherProducts"]>
    composites: {}
  }

  type otherProductsGetPayload<S extends boolean | null | undefined | otherProductsDefaultArgs> = $Result.GetResult<Prisma.$otherProductsPayload, S>

  type otherProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<otherProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtherProductsCountAggregateInputType | true
    }

  export interface otherProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['otherProducts'], meta: { name: 'otherProducts' } }
    /**
     * Find zero or one OtherProducts that matches the filter.
     * @param {otherProductsFindUniqueArgs} args - Arguments to find a OtherProducts
     * @example
     * // Get one OtherProducts
     * const otherProducts = await prisma.otherProducts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends otherProductsFindUniqueArgs>(args: SelectSubset<T, otherProductsFindUniqueArgs<ExtArgs>>): Prisma__otherProductsClient<$Result.GetResult<Prisma.$otherProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtherProducts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {otherProductsFindUniqueOrThrowArgs} args - Arguments to find a OtherProducts
     * @example
     * // Get one OtherProducts
     * const otherProducts = await prisma.otherProducts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends otherProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, otherProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__otherProductsClient<$Result.GetResult<Prisma.$otherProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otherProductsFindFirstArgs} args - Arguments to find a OtherProducts
     * @example
     * // Get one OtherProducts
     * const otherProducts = await prisma.otherProducts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends otherProductsFindFirstArgs>(args?: SelectSubset<T, otherProductsFindFirstArgs<ExtArgs>>): Prisma__otherProductsClient<$Result.GetResult<Prisma.$otherProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherProducts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otherProductsFindFirstOrThrowArgs} args - Arguments to find a OtherProducts
     * @example
     * // Get one OtherProducts
     * const otherProducts = await prisma.otherProducts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends otherProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, otherProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__otherProductsClient<$Result.GetResult<Prisma.$otherProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtherProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otherProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtherProducts
     * const otherProducts = await prisma.otherProducts.findMany()
     * 
     * // Get first 10 OtherProducts
     * const otherProducts = await prisma.otherProducts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otherProductsWithIdOnly = await prisma.otherProducts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends otherProductsFindManyArgs>(args?: SelectSubset<T, otherProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otherProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtherProducts.
     * @param {otherProductsCreateArgs} args - Arguments to create a OtherProducts.
     * @example
     * // Create one OtherProducts
     * const OtherProducts = await prisma.otherProducts.create({
     *   data: {
     *     // ... data to create a OtherProducts
     *   }
     * })
     * 
     */
    create<T extends otherProductsCreateArgs>(args: SelectSubset<T, otherProductsCreateArgs<ExtArgs>>): Prisma__otherProductsClient<$Result.GetResult<Prisma.$otherProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtherProducts.
     * @param {otherProductsCreateManyArgs} args - Arguments to create many OtherProducts.
     * @example
     * // Create many OtherProducts
     * const otherProducts = await prisma.otherProducts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends otherProductsCreateManyArgs>(args?: SelectSubset<T, otherProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtherProducts and returns the data saved in the database.
     * @param {otherProductsCreateManyAndReturnArgs} args - Arguments to create many OtherProducts.
     * @example
     * // Create many OtherProducts
     * const otherProducts = await prisma.otherProducts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtherProducts and only return the `id`
     * const otherProductsWithIdOnly = await prisma.otherProducts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends otherProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, otherProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otherProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OtherProducts.
     * @param {otherProductsDeleteArgs} args - Arguments to delete one OtherProducts.
     * @example
     * // Delete one OtherProducts
     * const OtherProducts = await prisma.otherProducts.delete({
     *   where: {
     *     // ... filter to delete one OtherProducts
     *   }
     * })
     * 
     */
    delete<T extends otherProductsDeleteArgs>(args: SelectSubset<T, otherProductsDeleteArgs<ExtArgs>>): Prisma__otherProductsClient<$Result.GetResult<Prisma.$otherProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtherProducts.
     * @param {otherProductsUpdateArgs} args - Arguments to update one OtherProducts.
     * @example
     * // Update one OtherProducts
     * const otherProducts = await prisma.otherProducts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends otherProductsUpdateArgs>(args: SelectSubset<T, otherProductsUpdateArgs<ExtArgs>>): Prisma__otherProductsClient<$Result.GetResult<Prisma.$otherProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtherProducts.
     * @param {otherProductsDeleteManyArgs} args - Arguments to filter OtherProducts to delete.
     * @example
     * // Delete a few OtherProducts
     * const { count } = await prisma.otherProducts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends otherProductsDeleteManyArgs>(args?: SelectSubset<T, otherProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtherProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otherProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtherProducts
     * const otherProducts = await prisma.otherProducts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends otherProductsUpdateManyArgs>(args: SelectSubset<T, otherProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtherProducts and returns the data updated in the database.
     * @param {otherProductsUpdateManyAndReturnArgs} args - Arguments to update many OtherProducts.
     * @example
     * // Update many OtherProducts
     * const otherProducts = await prisma.otherProducts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OtherProducts and only return the `id`
     * const otherProductsWithIdOnly = await prisma.otherProducts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends otherProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, otherProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otherProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OtherProducts.
     * @param {otherProductsUpsertArgs} args - Arguments to update or create a OtherProducts.
     * @example
     * // Update or create a OtherProducts
     * const otherProducts = await prisma.otherProducts.upsert({
     *   create: {
     *     // ... data to create a OtherProducts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtherProducts we want to update
     *   }
     * })
     */
    upsert<T extends otherProductsUpsertArgs>(args: SelectSubset<T, otherProductsUpsertArgs<ExtArgs>>): Prisma__otherProductsClient<$Result.GetResult<Prisma.$otherProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtherProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otherProductsCountArgs} args - Arguments to filter OtherProducts to count.
     * @example
     * // Count the number of OtherProducts
     * const count = await prisma.otherProducts.count({
     *   where: {
     *     // ... the filter for the OtherProducts we want to count
     *   }
     * })
    **/
    count<T extends otherProductsCountArgs>(
      args?: Subset<T, otherProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtherProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtherProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtherProductsAggregateArgs>(args: Subset<T, OtherProductsAggregateArgs>): Prisma.PrismaPromise<GetOtherProductsAggregateType<T>>

    /**
     * Group by OtherProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otherProductsGroupByArgs} args - Group by arguments.
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
      T extends otherProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: otherProductsGroupByArgs['orderBy'] }
        : { orderBy?: otherProductsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, otherProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtherProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the otherProducts model
   */
  readonly fields: otherProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for otherProducts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__otherProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    otherProductCategory<T extends otherProductCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, otherProductCategoryDefaultArgs<ExtArgs>>): Prisma__otherProductCategoryClient<$Result.GetResult<Prisma.$otherProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the otherProducts model
   */
  interface otherProductsFieldRefs {
    readonly id: FieldRef<"otherProducts", 'Int'>
    readonly productName: FieldRef<"otherProducts", 'String'>
    readonly productImage: FieldRef<"otherProducts", 'String'>
    readonly otherProductType: FieldRef<"otherProducts", 'OtherProductType'>
    readonly price: FieldRef<"otherProducts", 'Float'>
    readonly createdAt: FieldRef<"otherProducts", 'DateTime'>
    readonly updatedAt: FieldRef<"otherProducts", 'DateTime'>
    readonly adminId: FieldRef<"otherProducts", 'Int'>
    readonly otherProductCategoryId: FieldRef<"otherProducts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * otherProducts findUnique
   */
  export type otherProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProducts
     */
    select?: otherProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProducts
     */
    omit?: otherProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductsInclude<ExtArgs> | null
    /**
     * Filter, which otherProducts to fetch.
     */
    where: otherProductsWhereUniqueInput
  }

  /**
   * otherProducts findUniqueOrThrow
   */
  export type otherProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProducts
     */
    select?: otherProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProducts
     */
    omit?: otherProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductsInclude<ExtArgs> | null
    /**
     * Filter, which otherProducts to fetch.
     */
    where: otherProductsWhereUniqueInput
  }

  /**
   * otherProducts findFirst
   */
  export type otherProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProducts
     */
    select?: otherProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProducts
     */
    omit?: otherProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductsInclude<ExtArgs> | null
    /**
     * Filter, which otherProducts to fetch.
     */
    where?: otherProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otherProducts to fetch.
     */
    orderBy?: otherProductsOrderByWithRelationInput | otherProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otherProducts.
     */
    cursor?: otherProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otherProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otherProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otherProducts.
     */
    distinct?: OtherProductsScalarFieldEnum | OtherProductsScalarFieldEnum[]
  }

  /**
   * otherProducts findFirstOrThrow
   */
  export type otherProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProducts
     */
    select?: otherProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProducts
     */
    omit?: otherProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductsInclude<ExtArgs> | null
    /**
     * Filter, which otherProducts to fetch.
     */
    where?: otherProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otherProducts to fetch.
     */
    orderBy?: otherProductsOrderByWithRelationInput | otherProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otherProducts.
     */
    cursor?: otherProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otherProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otherProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otherProducts.
     */
    distinct?: OtherProductsScalarFieldEnum | OtherProductsScalarFieldEnum[]
  }

  /**
   * otherProducts findMany
   */
  export type otherProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProducts
     */
    select?: otherProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProducts
     */
    omit?: otherProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductsInclude<ExtArgs> | null
    /**
     * Filter, which otherProducts to fetch.
     */
    where?: otherProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otherProducts to fetch.
     */
    orderBy?: otherProductsOrderByWithRelationInput | otherProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing otherProducts.
     */
    cursor?: otherProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otherProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otherProducts.
     */
    skip?: number
    distinct?: OtherProductsScalarFieldEnum | OtherProductsScalarFieldEnum[]
  }

  /**
   * otherProducts create
   */
  export type otherProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProducts
     */
    select?: otherProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProducts
     */
    omit?: otherProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a otherProducts.
     */
    data: XOR<otherProductsCreateInput, otherProductsUncheckedCreateInput>
  }

  /**
   * otherProducts createMany
   */
  export type otherProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many otherProducts.
     */
    data: otherProductsCreateManyInput | otherProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * otherProducts createManyAndReturn
   */
  export type otherProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProducts
     */
    select?: otherProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the otherProducts
     */
    omit?: otherProductsOmit<ExtArgs> | null
    /**
     * The data used to create many otherProducts.
     */
    data: otherProductsCreateManyInput | otherProductsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * otherProducts update
   */
  export type otherProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProducts
     */
    select?: otherProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProducts
     */
    omit?: otherProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a otherProducts.
     */
    data: XOR<otherProductsUpdateInput, otherProductsUncheckedUpdateInput>
    /**
     * Choose, which otherProducts to update.
     */
    where: otherProductsWhereUniqueInput
  }

  /**
   * otherProducts updateMany
   */
  export type otherProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update otherProducts.
     */
    data: XOR<otherProductsUpdateManyMutationInput, otherProductsUncheckedUpdateManyInput>
    /**
     * Filter which otherProducts to update
     */
    where?: otherProductsWhereInput
    /**
     * Limit how many otherProducts to update.
     */
    limit?: number
  }

  /**
   * otherProducts updateManyAndReturn
   */
  export type otherProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProducts
     */
    select?: otherProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the otherProducts
     */
    omit?: otherProductsOmit<ExtArgs> | null
    /**
     * The data used to update otherProducts.
     */
    data: XOR<otherProductsUpdateManyMutationInput, otherProductsUncheckedUpdateManyInput>
    /**
     * Filter which otherProducts to update
     */
    where?: otherProductsWhereInput
    /**
     * Limit how many otherProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * otherProducts upsert
   */
  export type otherProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProducts
     */
    select?: otherProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProducts
     */
    omit?: otherProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the otherProducts to update in case it exists.
     */
    where: otherProductsWhereUniqueInput
    /**
     * In case the otherProducts found by the `where` argument doesn't exist, create a new otherProducts with this data.
     */
    create: XOR<otherProductsCreateInput, otherProductsUncheckedCreateInput>
    /**
     * In case the otherProducts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<otherProductsUpdateInput, otherProductsUncheckedUpdateInput>
  }

  /**
   * otherProducts delete
   */
  export type otherProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProducts
     */
    select?: otherProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProducts
     */
    omit?: otherProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductsInclude<ExtArgs> | null
    /**
     * Filter which otherProducts to delete.
     */
    where: otherProductsWhereUniqueInput
  }

  /**
   * otherProducts deleteMany
   */
  export type otherProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otherProducts to delete
     */
    where?: otherProductsWhereInput
    /**
     * Limit how many otherProducts to delete.
     */
    limit?: number
  }

  /**
   * otherProducts without action
   */
  export type otherProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProducts
     */
    select?: otherProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProducts
     */
    omit?: otherProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductsInclude<ExtArgs> | null
  }


  /**
   * Model otherProductCategory
   */

  export type AggregateOtherProductCategory = {
    _count: OtherProductCategoryCountAggregateOutputType | null
    _avg: OtherProductCategoryAvgAggregateOutputType | null
    _sum: OtherProductCategorySumAggregateOutputType | null
    _min: OtherProductCategoryMinAggregateOutputType | null
    _max: OtherProductCategoryMaxAggregateOutputType | null
  }

  export type OtherProductCategoryAvgAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type OtherProductCategorySumAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type OtherProductCategoryMinAggregateOutputType = {
    id: number | null
    otherProductCategoryName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    adminId: number | null
  }

  export type OtherProductCategoryMaxAggregateOutputType = {
    id: number | null
    otherProductCategoryName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    adminId: number | null
  }

  export type OtherProductCategoryCountAggregateOutputType = {
    id: number
    otherProductCategoryName: number
    createdAt: number
    updatedAt: number
    adminId: number
    _all: number
  }


  export type OtherProductCategoryAvgAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type OtherProductCategorySumAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type OtherProductCategoryMinAggregateInputType = {
    id?: true
    otherProductCategoryName?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
  }

  export type OtherProductCategoryMaxAggregateInputType = {
    id?: true
    otherProductCategoryName?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
  }

  export type OtherProductCategoryCountAggregateInputType = {
    id?: true
    otherProductCategoryName?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
    _all?: true
  }

  export type OtherProductCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otherProductCategory to aggregate.
     */
    where?: otherProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otherProductCategories to fetch.
     */
    orderBy?: otherProductCategoryOrderByWithRelationInput | otherProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: otherProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otherProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otherProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned otherProductCategories
    **/
    _count?: true | OtherProductCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtherProductCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtherProductCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtherProductCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtherProductCategoryMaxAggregateInputType
  }

  export type GetOtherProductCategoryAggregateType<T extends OtherProductCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateOtherProductCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtherProductCategory[P]>
      : GetScalarType<T[P], AggregateOtherProductCategory[P]>
  }




  export type otherProductCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: otherProductCategoryWhereInput
    orderBy?: otherProductCategoryOrderByWithAggregationInput | otherProductCategoryOrderByWithAggregationInput[]
    by: OtherProductCategoryScalarFieldEnum[] | OtherProductCategoryScalarFieldEnum
    having?: otherProductCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtherProductCategoryCountAggregateInputType | true
    _avg?: OtherProductCategoryAvgAggregateInputType
    _sum?: OtherProductCategorySumAggregateInputType
    _min?: OtherProductCategoryMinAggregateInputType
    _max?: OtherProductCategoryMaxAggregateInputType
  }

  export type OtherProductCategoryGroupByOutputType = {
    id: number
    otherProductCategoryName: string
    createdAt: Date
    updatedAt: Date
    adminId: number
    _count: OtherProductCategoryCountAggregateOutputType | null
    _avg: OtherProductCategoryAvgAggregateOutputType | null
    _sum: OtherProductCategorySumAggregateOutputType | null
    _min: OtherProductCategoryMinAggregateOutputType | null
    _max: OtherProductCategoryMaxAggregateOutputType | null
  }

  type GetOtherProductCategoryGroupByPayload<T extends otherProductCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtherProductCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtherProductCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtherProductCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], OtherProductCategoryGroupByOutputType[P]>
        }
      >
    >


  export type otherProductCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    otherProductCategoryName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    otherProducts?: boolean | otherProductCategory$otherProductsArgs<ExtArgs>
    _count?: boolean | OtherProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otherProductCategory"]>

  export type otherProductCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    otherProductCategoryName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
  }, ExtArgs["result"]["otherProductCategory"]>

  export type otherProductCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    otherProductCategoryName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
  }, ExtArgs["result"]["otherProductCategory"]>

  export type otherProductCategorySelectScalar = {
    id?: boolean
    otherProductCategoryName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
  }

  export type otherProductCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "otherProductCategoryName" | "createdAt" | "updatedAt" | "adminId", ExtArgs["result"]["otherProductCategory"]>
  export type otherProductCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otherProducts?: boolean | otherProductCategory$otherProductsArgs<ExtArgs>
    _count?: boolean | OtherProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type otherProductCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type otherProductCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $otherProductCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "otherProductCategory"
    objects: {
      otherProducts: Prisma.$otherProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      otherProductCategoryName: string
      createdAt: Date
      updatedAt: Date
      adminId: number
    }, ExtArgs["result"]["otherProductCategory"]>
    composites: {}
  }

  type otherProductCategoryGetPayload<S extends boolean | null | undefined | otherProductCategoryDefaultArgs> = $Result.GetResult<Prisma.$otherProductCategoryPayload, S>

  type otherProductCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<otherProductCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtherProductCategoryCountAggregateInputType | true
    }

  export interface otherProductCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['otherProductCategory'], meta: { name: 'otherProductCategory' } }
    /**
     * Find zero or one OtherProductCategory that matches the filter.
     * @param {otherProductCategoryFindUniqueArgs} args - Arguments to find a OtherProductCategory
     * @example
     * // Get one OtherProductCategory
     * const otherProductCategory = await prisma.otherProductCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends otherProductCategoryFindUniqueArgs>(args: SelectSubset<T, otherProductCategoryFindUniqueArgs<ExtArgs>>): Prisma__otherProductCategoryClient<$Result.GetResult<Prisma.$otherProductCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtherProductCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {otherProductCategoryFindUniqueOrThrowArgs} args - Arguments to find a OtherProductCategory
     * @example
     * // Get one OtherProductCategory
     * const otherProductCategory = await prisma.otherProductCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends otherProductCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, otherProductCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__otherProductCategoryClient<$Result.GetResult<Prisma.$otherProductCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherProductCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otherProductCategoryFindFirstArgs} args - Arguments to find a OtherProductCategory
     * @example
     * // Get one OtherProductCategory
     * const otherProductCategory = await prisma.otherProductCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends otherProductCategoryFindFirstArgs>(args?: SelectSubset<T, otherProductCategoryFindFirstArgs<ExtArgs>>): Prisma__otherProductCategoryClient<$Result.GetResult<Prisma.$otherProductCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtherProductCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otherProductCategoryFindFirstOrThrowArgs} args - Arguments to find a OtherProductCategory
     * @example
     * // Get one OtherProductCategory
     * const otherProductCategory = await prisma.otherProductCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends otherProductCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, otherProductCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__otherProductCategoryClient<$Result.GetResult<Prisma.$otherProductCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtherProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otherProductCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtherProductCategories
     * const otherProductCategories = await prisma.otherProductCategory.findMany()
     * 
     * // Get first 10 OtherProductCategories
     * const otherProductCategories = await prisma.otherProductCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otherProductCategoryWithIdOnly = await prisma.otherProductCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends otherProductCategoryFindManyArgs>(args?: SelectSubset<T, otherProductCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otherProductCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtherProductCategory.
     * @param {otherProductCategoryCreateArgs} args - Arguments to create a OtherProductCategory.
     * @example
     * // Create one OtherProductCategory
     * const OtherProductCategory = await prisma.otherProductCategory.create({
     *   data: {
     *     // ... data to create a OtherProductCategory
     *   }
     * })
     * 
     */
    create<T extends otherProductCategoryCreateArgs>(args: SelectSubset<T, otherProductCategoryCreateArgs<ExtArgs>>): Prisma__otherProductCategoryClient<$Result.GetResult<Prisma.$otherProductCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtherProductCategories.
     * @param {otherProductCategoryCreateManyArgs} args - Arguments to create many OtherProductCategories.
     * @example
     * // Create many OtherProductCategories
     * const otherProductCategory = await prisma.otherProductCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends otherProductCategoryCreateManyArgs>(args?: SelectSubset<T, otherProductCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtherProductCategories and returns the data saved in the database.
     * @param {otherProductCategoryCreateManyAndReturnArgs} args - Arguments to create many OtherProductCategories.
     * @example
     * // Create many OtherProductCategories
     * const otherProductCategory = await prisma.otherProductCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtherProductCategories and only return the `id`
     * const otherProductCategoryWithIdOnly = await prisma.otherProductCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends otherProductCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, otherProductCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otherProductCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OtherProductCategory.
     * @param {otherProductCategoryDeleteArgs} args - Arguments to delete one OtherProductCategory.
     * @example
     * // Delete one OtherProductCategory
     * const OtherProductCategory = await prisma.otherProductCategory.delete({
     *   where: {
     *     // ... filter to delete one OtherProductCategory
     *   }
     * })
     * 
     */
    delete<T extends otherProductCategoryDeleteArgs>(args: SelectSubset<T, otherProductCategoryDeleteArgs<ExtArgs>>): Prisma__otherProductCategoryClient<$Result.GetResult<Prisma.$otherProductCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtherProductCategory.
     * @param {otherProductCategoryUpdateArgs} args - Arguments to update one OtherProductCategory.
     * @example
     * // Update one OtherProductCategory
     * const otherProductCategory = await prisma.otherProductCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends otherProductCategoryUpdateArgs>(args: SelectSubset<T, otherProductCategoryUpdateArgs<ExtArgs>>): Prisma__otherProductCategoryClient<$Result.GetResult<Prisma.$otherProductCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtherProductCategories.
     * @param {otherProductCategoryDeleteManyArgs} args - Arguments to filter OtherProductCategories to delete.
     * @example
     * // Delete a few OtherProductCategories
     * const { count } = await prisma.otherProductCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends otherProductCategoryDeleteManyArgs>(args?: SelectSubset<T, otherProductCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtherProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otherProductCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtherProductCategories
     * const otherProductCategory = await prisma.otherProductCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends otherProductCategoryUpdateManyArgs>(args: SelectSubset<T, otherProductCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtherProductCategories and returns the data updated in the database.
     * @param {otherProductCategoryUpdateManyAndReturnArgs} args - Arguments to update many OtherProductCategories.
     * @example
     * // Update many OtherProductCategories
     * const otherProductCategory = await prisma.otherProductCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OtherProductCategories and only return the `id`
     * const otherProductCategoryWithIdOnly = await prisma.otherProductCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends otherProductCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, otherProductCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otherProductCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OtherProductCategory.
     * @param {otherProductCategoryUpsertArgs} args - Arguments to update or create a OtherProductCategory.
     * @example
     * // Update or create a OtherProductCategory
     * const otherProductCategory = await prisma.otherProductCategory.upsert({
     *   create: {
     *     // ... data to create a OtherProductCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtherProductCategory we want to update
     *   }
     * })
     */
    upsert<T extends otherProductCategoryUpsertArgs>(args: SelectSubset<T, otherProductCategoryUpsertArgs<ExtArgs>>): Prisma__otherProductCategoryClient<$Result.GetResult<Prisma.$otherProductCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtherProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otherProductCategoryCountArgs} args - Arguments to filter OtherProductCategories to count.
     * @example
     * // Count the number of OtherProductCategories
     * const count = await prisma.otherProductCategory.count({
     *   where: {
     *     // ... the filter for the OtherProductCategories we want to count
     *   }
     * })
    **/
    count<T extends otherProductCategoryCountArgs>(
      args?: Subset<T, otherProductCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtherProductCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtherProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtherProductCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtherProductCategoryAggregateArgs>(args: Subset<T, OtherProductCategoryAggregateArgs>): Prisma.PrismaPromise<GetOtherProductCategoryAggregateType<T>>

    /**
     * Group by OtherProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otherProductCategoryGroupByArgs} args - Group by arguments.
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
      T extends otherProductCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: otherProductCategoryGroupByArgs['orderBy'] }
        : { orderBy?: otherProductCategoryGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, otherProductCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtherProductCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the otherProductCategory model
   */
  readonly fields: otherProductCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for otherProductCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__otherProductCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    otherProducts<T extends otherProductCategory$otherProductsArgs<ExtArgs> = {}>(args?: Subset<T, otherProductCategory$otherProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otherProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the otherProductCategory model
   */
  interface otherProductCategoryFieldRefs {
    readonly id: FieldRef<"otherProductCategory", 'Int'>
    readonly otherProductCategoryName: FieldRef<"otherProductCategory", 'String'>
    readonly createdAt: FieldRef<"otherProductCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"otherProductCategory", 'DateTime'>
    readonly adminId: FieldRef<"otherProductCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * otherProductCategory findUnique
   */
  export type otherProductCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProductCategory
     */
    select?: otherProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProductCategory
     */
    omit?: otherProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which otherProductCategory to fetch.
     */
    where: otherProductCategoryWhereUniqueInput
  }

  /**
   * otherProductCategory findUniqueOrThrow
   */
  export type otherProductCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProductCategory
     */
    select?: otherProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProductCategory
     */
    omit?: otherProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which otherProductCategory to fetch.
     */
    where: otherProductCategoryWhereUniqueInput
  }

  /**
   * otherProductCategory findFirst
   */
  export type otherProductCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProductCategory
     */
    select?: otherProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProductCategory
     */
    omit?: otherProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which otherProductCategory to fetch.
     */
    where?: otherProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otherProductCategories to fetch.
     */
    orderBy?: otherProductCategoryOrderByWithRelationInput | otherProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otherProductCategories.
     */
    cursor?: otherProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otherProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otherProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otherProductCategories.
     */
    distinct?: OtherProductCategoryScalarFieldEnum | OtherProductCategoryScalarFieldEnum[]
  }

  /**
   * otherProductCategory findFirstOrThrow
   */
  export type otherProductCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProductCategory
     */
    select?: otherProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProductCategory
     */
    omit?: otherProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which otherProductCategory to fetch.
     */
    where?: otherProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otherProductCategories to fetch.
     */
    orderBy?: otherProductCategoryOrderByWithRelationInput | otherProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otherProductCategories.
     */
    cursor?: otherProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otherProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otherProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otherProductCategories.
     */
    distinct?: OtherProductCategoryScalarFieldEnum | OtherProductCategoryScalarFieldEnum[]
  }

  /**
   * otherProductCategory findMany
   */
  export type otherProductCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProductCategory
     */
    select?: otherProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProductCategory
     */
    omit?: otherProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which otherProductCategories to fetch.
     */
    where?: otherProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otherProductCategories to fetch.
     */
    orderBy?: otherProductCategoryOrderByWithRelationInput | otherProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing otherProductCategories.
     */
    cursor?: otherProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otherProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otherProductCategories.
     */
    skip?: number
    distinct?: OtherProductCategoryScalarFieldEnum | OtherProductCategoryScalarFieldEnum[]
  }

  /**
   * otherProductCategory create
   */
  export type otherProductCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProductCategory
     */
    select?: otherProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProductCategory
     */
    omit?: otherProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a otherProductCategory.
     */
    data: XOR<otherProductCategoryCreateInput, otherProductCategoryUncheckedCreateInput>
  }

  /**
   * otherProductCategory createMany
   */
  export type otherProductCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many otherProductCategories.
     */
    data: otherProductCategoryCreateManyInput | otherProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * otherProductCategory createManyAndReturn
   */
  export type otherProductCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProductCategory
     */
    select?: otherProductCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the otherProductCategory
     */
    omit?: otherProductCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many otherProductCategories.
     */
    data: otherProductCategoryCreateManyInput | otherProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * otherProductCategory update
   */
  export type otherProductCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProductCategory
     */
    select?: otherProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProductCategory
     */
    omit?: otherProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a otherProductCategory.
     */
    data: XOR<otherProductCategoryUpdateInput, otherProductCategoryUncheckedUpdateInput>
    /**
     * Choose, which otherProductCategory to update.
     */
    where: otherProductCategoryWhereUniqueInput
  }

  /**
   * otherProductCategory updateMany
   */
  export type otherProductCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update otherProductCategories.
     */
    data: XOR<otherProductCategoryUpdateManyMutationInput, otherProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which otherProductCategories to update
     */
    where?: otherProductCategoryWhereInput
    /**
     * Limit how many otherProductCategories to update.
     */
    limit?: number
  }

  /**
   * otherProductCategory updateManyAndReturn
   */
  export type otherProductCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProductCategory
     */
    select?: otherProductCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the otherProductCategory
     */
    omit?: otherProductCategoryOmit<ExtArgs> | null
    /**
     * The data used to update otherProductCategories.
     */
    data: XOR<otherProductCategoryUpdateManyMutationInput, otherProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which otherProductCategories to update
     */
    where?: otherProductCategoryWhereInput
    /**
     * Limit how many otherProductCategories to update.
     */
    limit?: number
  }

  /**
   * otherProductCategory upsert
   */
  export type otherProductCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProductCategory
     */
    select?: otherProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProductCategory
     */
    omit?: otherProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the otherProductCategory to update in case it exists.
     */
    where: otherProductCategoryWhereUniqueInput
    /**
     * In case the otherProductCategory found by the `where` argument doesn't exist, create a new otherProductCategory with this data.
     */
    create: XOR<otherProductCategoryCreateInput, otherProductCategoryUncheckedCreateInput>
    /**
     * In case the otherProductCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<otherProductCategoryUpdateInput, otherProductCategoryUncheckedUpdateInput>
  }

  /**
   * otherProductCategory delete
   */
  export type otherProductCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProductCategory
     */
    select?: otherProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProductCategory
     */
    omit?: otherProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductCategoryInclude<ExtArgs> | null
    /**
     * Filter which otherProductCategory to delete.
     */
    where: otherProductCategoryWhereUniqueInput
  }

  /**
   * otherProductCategory deleteMany
   */
  export type otherProductCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otherProductCategories to delete
     */
    where?: otherProductCategoryWhereInput
    /**
     * Limit how many otherProductCategories to delete.
     */
    limit?: number
  }

  /**
   * otherProductCategory.otherProducts
   */
  export type otherProductCategory$otherProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProducts
     */
    select?: otherProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProducts
     */
    omit?: otherProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductsInclude<ExtArgs> | null
    where?: otherProductsWhereInput
    orderBy?: otherProductsOrderByWithRelationInput | otherProductsOrderByWithRelationInput[]
    cursor?: otherProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtherProductsScalarFieldEnum | OtherProductsScalarFieldEnum[]
  }

  /**
   * otherProductCategory without action
   */
  export type otherProductCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otherProductCategory
     */
    select?: otherProductCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the otherProductCategory
     */
    omit?: otherProductCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otherProductCategoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MoviesScalarFieldEnum: {
    id: 'id',
    movieName: 'movieName',
    movieImage: 'movieImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    adminId: 'adminId',
    movieCategoryId: 'movieCategoryId'
  };

  export type MoviesScalarFieldEnum = (typeof MoviesScalarFieldEnum)[keyof typeof MoviesScalarFieldEnum]


  export const MovieCategoryScalarFieldEnum: {
    id: 'id',
    movieCategoryName: 'movieCategoryName',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    adminId: 'adminId'
  };

  export type MovieCategoryScalarFieldEnum = (typeof MovieCategoryScalarFieldEnum)[keyof typeof MovieCategoryScalarFieldEnum]


  export const SeriesScalarFieldEnum: {
    id: 'id',
    seriesName: 'seriesName',
    seriesDis: 'seriesDis',
    seriesImage: 'seriesImage',
    seriesSeason: 'seriesSeason',
    seriesEpisode: 'seriesEpisode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    adminId: 'adminId',
    seriesCategoryId: 'seriesCategoryId'
  };

  export type SeriesScalarFieldEnum = (typeof SeriesScalarFieldEnum)[keyof typeof SeriesScalarFieldEnum]


  export const SeriesCategoryScalarFieldEnum: {
    id: 'id',
    seriesCategoryName: 'seriesCategoryName',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    adminId: 'adminId'
  };

  export type SeriesCategoryScalarFieldEnum = (typeof SeriesCategoryScalarFieldEnum)[keyof typeof SeriesCategoryScalarFieldEnum]


  export const OtherProductsScalarFieldEnum: {
    id: 'id',
    productName: 'productName',
    productImage: 'productImage',
    otherProductType: 'otherProductType',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    adminId: 'adminId',
    otherProductCategoryId: 'otherProductCategoryId'
  };

  export type OtherProductsScalarFieldEnum = (typeof OtherProductsScalarFieldEnum)[keyof typeof OtherProductsScalarFieldEnum]


  export const OtherProductCategoryScalarFieldEnum: {
    id: 'id',
    otherProductCategoryName: 'otherProductCategoryName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    adminId: 'adminId'
  };

  export type OtherProductCategoryScalarFieldEnum = (typeof OtherProductCategoryScalarFieldEnum)[keyof typeof OtherProductCategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'OtherProductType'
   */
  export type EnumOtherProductTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtherProductType'>
    


  /**
   * Reference to a field of type 'OtherProductType[]'
   */
  export type ListEnumOtherProductTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtherProductType[]'>
    
  /**
   * Deep Input Types
   */


  export type moviesWhereInput = {
    AND?: moviesWhereInput | moviesWhereInput[]
    OR?: moviesWhereInput[]
    NOT?: moviesWhereInput | moviesWhereInput[]
    id?: IntFilter<"movies"> | number
    movieName?: StringFilter<"movies"> | string
    movieImage?: StringFilter<"movies"> | string
    createdAt?: DateTimeFilter<"movies"> | Date | string
    updatedAt?: DateTimeFilter<"movies"> | Date | string
    adminId?: IntFilter<"movies"> | number
    movieCategoryId?: IntFilter<"movies"> | number
    movieCategory?: XOR<MovieCategoryScalarRelationFilter, movieCategoryWhereInput>
  }

  export type moviesOrderByWithRelationInput = {
    id?: SortOrder
    movieName?: SortOrder
    movieImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    movieCategoryId?: SortOrder
    movieCategory?: movieCategoryOrderByWithRelationInput
  }

  export type moviesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: moviesWhereInput | moviesWhereInput[]
    OR?: moviesWhereInput[]
    NOT?: moviesWhereInput | moviesWhereInput[]
    movieName?: StringFilter<"movies"> | string
    movieImage?: StringFilter<"movies"> | string
    createdAt?: DateTimeFilter<"movies"> | Date | string
    updatedAt?: DateTimeFilter<"movies"> | Date | string
    adminId?: IntFilter<"movies"> | number
    movieCategoryId?: IntFilter<"movies"> | number
    movieCategory?: XOR<MovieCategoryScalarRelationFilter, movieCategoryWhereInput>
  }, "id">

  export type moviesOrderByWithAggregationInput = {
    id?: SortOrder
    movieName?: SortOrder
    movieImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    movieCategoryId?: SortOrder
    _count?: moviesCountOrderByAggregateInput
    _avg?: moviesAvgOrderByAggregateInput
    _max?: moviesMaxOrderByAggregateInput
    _min?: moviesMinOrderByAggregateInput
    _sum?: moviesSumOrderByAggregateInput
  }

  export type moviesScalarWhereWithAggregatesInput = {
    AND?: moviesScalarWhereWithAggregatesInput | moviesScalarWhereWithAggregatesInput[]
    OR?: moviesScalarWhereWithAggregatesInput[]
    NOT?: moviesScalarWhereWithAggregatesInput | moviesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"movies"> | number
    movieName?: StringWithAggregatesFilter<"movies"> | string
    movieImage?: StringWithAggregatesFilter<"movies"> | string
    createdAt?: DateTimeWithAggregatesFilter<"movies"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"movies"> | Date | string
    adminId?: IntWithAggregatesFilter<"movies"> | number
    movieCategoryId?: IntWithAggregatesFilter<"movies"> | number
  }

  export type movieCategoryWhereInput = {
    AND?: movieCategoryWhereInput | movieCategoryWhereInput[]
    OR?: movieCategoryWhereInput[]
    NOT?: movieCategoryWhereInput | movieCategoryWhereInput[]
    id?: IntFilter<"movieCategory"> | number
    movieCategoryName?: StringFilter<"movieCategory"> | string
    price?: FloatFilter<"movieCategory"> | number
    createdAt?: DateTimeFilter<"movieCategory"> | Date | string
    updatedAt?: DateTimeFilter<"movieCategory"> | Date | string
    adminId?: IntFilter<"movieCategory"> | number
    movies?: MoviesListRelationFilter
  }

  export type movieCategoryOrderByWithRelationInput = {
    id?: SortOrder
    movieCategoryName?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    movies?: moviesOrderByRelationAggregateInput
  }

  export type movieCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: movieCategoryWhereInput | movieCategoryWhereInput[]
    OR?: movieCategoryWhereInput[]
    NOT?: movieCategoryWhereInput | movieCategoryWhereInput[]
    movieCategoryName?: StringFilter<"movieCategory"> | string
    price?: FloatFilter<"movieCategory"> | number
    createdAt?: DateTimeFilter<"movieCategory"> | Date | string
    updatedAt?: DateTimeFilter<"movieCategory"> | Date | string
    adminId?: IntFilter<"movieCategory"> | number
    movies?: MoviesListRelationFilter
  }, "id">

  export type movieCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    movieCategoryName?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    _count?: movieCategoryCountOrderByAggregateInput
    _avg?: movieCategoryAvgOrderByAggregateInput
    _max?: movieCategoryMaxOrderByAggregateInput
    _min?: movieCategoryMinOrderByAggregateInput
    _sum?: movieCategorySumOrderByAggregateInput
  }

  export type movieCategoryScalarWhereWithAggregatesInput = {
    AND?: movieCategoryScalarWhereWithAggregatesInput | movieCategoryScalarWhereWithAggregatesInput[]
    OR?: movieCategoryScalarWhereWithAggregatesInput[]
    NOT?: movieCategoryScalarWhereWithAggregatesInput | movieCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"movieCategory"> | number
    movieCategoryName?: StringWithAggregatesFilter<"movieCategory"> | string
    price?: FloatWithAggregatesFilter<"movieCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"movieCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"movieCategory"> | Date | string
    adminId?: IntWithAggregatesFilter<"movieCategory"> | number
  }

  export type seriesWhereInput = {
    AND?: seriesWhereInput | seriesWhereInput[]
    OR?: seriesWhereInput[]
    NOT?: seriesWhereInput | seriesWhereInput[]
    id?: IntFilter<"series"> | number
    seriesName?: StringFilter<"series"> | string
    seriesDis?: StringFilter<"series"> | string
    seriesImage?: StringFilter<"series"> | string
    seriesSeason?: IntFilter<"series"> | number
    seriesEpisode?: IntFilter<"series"> | number
    createdAt?: DateTimeFilter<"series"> | Date | string
    updatedAt?: DateTimeFilter<"series"> | Date | string
    adminId?: IntFilter<"series"> | number
    seriesCategoryId?: IntFilter<"series"> | number
    seriesCategory?: XOR<SeriesCategoryScalarRelationFilter, seriesCategoryWhereInput>
  }

  export type seriesOrderByWithRelationInput = {
    id?: SortOrder
    seriesName?: SortOrder
    seriesDis?: SortOrder
    seriesImage?: SortOrder
    seriesSeason?: SortOrder
    seriesEpisode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    seriesCategoryId?: SortOrder
    seriesCategory?: seriesCategoryOrderByWithRelationInput
  }

  export type seriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: seriesWhereInput | seriesWhereInput[]
    OR?: seriesWhereInput[]
    NOT?: seriesWhereInput | seriesWhereInput[]
    seriesName?: StringFilter<"series"> | string
    seriesDis?: StringFilter<"series"> | string
    seriesImage?: StringFilter<"series"> | string
    seriesSeason?: IntFilter<"series"> | number
    seriesEpisode?: IntFilter<"series"> | number
    createdAt?: DateTimeFilter<"series"> | Date | string
    updatedAt?: DateTimeFilter<"series"> | Date | string
    adminId?: IntFilter<"series"> | number
    seriesCategoryId?: IntFilter<"series"> | number
    seriesCategory?: XOR<SeriesCategoryScalarRelationFilter, seriesCategoryWhereInput>
  }, "id">

  export type seriesOrderByWithAggregationInput = {
    id?: SortOrder
    seriesName?: SortOrder
    seriesDis?: SortOrder
    seriesImage?: SortOrder
    seriesSeason?: SortOrder
    seriesEpisode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    seriesCategoryId?: SortOrder
    _count?: seriesCountOrderByAggregateInput
    _avg?: seriesAvgOrderByAggregateInput
    _max?: seriesMaxOrderByAggregateInput
    _min?: seriesMinOrderByAggregateInput
    _sum?: seriesSumOrderByAggregateInput
  }

  export type seriesScalarWhereWithAggregatesInput = {
    AND?: seriesScalarWhereWithAggregatesInput | seriesScalarWhereWithAggregatesInput[]
    OR?: seriesScalarWhereWithAggregatesInput[]
    NOT?: seriesScalarWhereWithAggregatesInput | seriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"series"> | number
    seriesName?: StringWithAggregatesFilter<"series"> | string
    seriesDis?: StringWithAggregatesFilter<"series"> | string
    seriesImage?: StringWithAggregatesFilter<"series"> | string
    seriesSeason?: IntWithAggregatesFilter<"series"> | number
    seriesEpisode?: IntWithAggregatesFilter<"series"> | number
    createdAt?: DateTimeWithAggregatesFilter<"series"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"series"> | Date | string
    adminId?: IntWithAggregatesFilter<"series"> | number
    seriesCategoryId?: IntWithAggregatesFilter<"series"> | number
  }

  export type seriesCategoryWhereInput = {
    AND?: seriesCategoryWhereInput | seriesCategoryWhereInput[]
    OR?: seriesCategoryWhereInput[]
    NOT?: seriesCategoryWhereInput | seriesCategoryWhereInput[]
    id?: IntFilter<"seriesCategory"> | number
    seriesCategoryName?: StringFilter<"seriesCategory"> | string
    price?: FloatFilter<"seriesCategory"> | number
    createdAt?: DateTimeFilter<"seriesCategory"> | Date | string
    updatedAt?: DateTimeFilter<"seriesCategory"> | Date | string
    adminId?: IntFilter<"seriesCategory"> | number
    series?: SeriesListRelationFilter
  }

  export type seriesCategoryOrderByWithRelationInput = {
    id?: SortOrder
    seriesCategoryName?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    series?: seriesOrderByRelationAggregateInput
  }

  export type seriesCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: seriesCategoryWhereInput | seriesCategoryWhereInput[]
    OR?: seriesCategoryWhereInput[]
    NOT?: seriesCategoryWhereInput | seriesCategoryWhereInput[]
    seriesCategoryName?: StringFilter<"seriesCategory"> | string
    price?: FloatFilter<"seriesCategory"> | number
    createdAt?: DateTimeFilter<"seriesCategory"> | Date | string
    updatedAt?: DateTimeFilter<"seriesCategory"> | Date | string
    adminId?: IntFilter<"seriesCategory"> | number
    series?: SeriesListRelationFilter
  }, "id">

  export type seriesCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    seriesCategoryName?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    _count?: seriesCategoryCountOrderByAggregateInput
    _avg?: seriesCategoryAvgOrderByAggregateInput
    _max?: seriesCategoryMaxOrderByAggregateInput
    _min?: seriesCategoryMinOrderByAggregateInput
    _sum?: seriesCategorySumOrderByAggregateInput
  }

  export type seriesCategoryScalarWhereWithAggregatesInput = {
    AND?: seriesCategoryScalarWhereWithAggregatesInput | seriesCategoryScalarWhereWithAggregatesInput[]
    OR?: seriesCategoryScalarWhereWithAggregatesInput[]
    NOT?: seriesCategoryScalarWhereWithAggregatesInput | seriesCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"seriesCategory"> | number
    seriesCategoryName?: StringWithAggregatesFilter<"seriesCategory"> | string
    price?: FloatWithAggregatesFilter<"seriesCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"seriesCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"seriesCategory"> | Date | string
    adminId?: IntWithAggregatesFilter<"seriesCategory"> | number
  }

  export type otherProductsWhereInput = {
    AND?: otherProductsWhereInput | otherProductsWhereInput[]
    OR?: otherProductsWhereInput[]
    NOT?: otherProductsWhereInput | otherProductsWhereInput[]
    id?: IntFilter<"otherProducts"> | number
    productName?: StringFilter<"otherProducts"> | string
    productImage?: StringFilter<"otherProducts"> | string
    otherProductType?: EnumOtherProductTypeFilter<"otherProducts"> | $Enums.OtherProductType
    price?: FloatFilter<"otherProducts"> | number
    createdAt?: DateTimeFilter<"otherProducts"> | Date | string
    updatedAt?: DateTimeFilter<"otherProducts"> | Date | string
    adminId?: IntFilter<"otherProducts"> | number
    otherProductCategoryId?: IntFilter<"otherProducts"> | number
    otherProductCategory?: XOR<OtherProductCategoryScalarRelationFilter, otherProductCategoryWhereInput>
  }

  export type otherProductsOrderByWithRelationInput = {
    id?: SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    otherProductType?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    otherProductCategoryId?: SortOrder
    otherProductCategory?: otherProductCategoryOrderByWithRelationInput
  }

  export type otherProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: otherProductsWhereInput | otherProductsWhereInput[]
    OR?: otherProductsWhereInput[]
    NOT?: otherProductsWhereInput | otherProductsWhereInput[]
    productName?: StringFilter<"otherProducts"> | string
    productImage?: StringFilter<"otherProducts"> | string
    otherProductType?: EnumOtherProductTypeFilter<"otherProducts"> | $Enums.OtherProductType
    price?: FloatFilter<"otherProducts"> | number
    createdAt?: DateTimeFilter<"otherProducts"> | Date | string
    updatedAt?: DateTimeFilter<"otherProducts"> | Date | string
    adminId?: IntFilter<"otherProducts"> | number
    otherProductCategoryId?: IntFilter<"otherProducts"> | number
    otherProductCategory?: XOR<OtherProductCategoryScalarRelationFilter, otherProductCategoryWhereInput>
  }, "id">

  export type otherProductsOrderByWithAggregationInput = {
    id?: SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    otherProductType?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    otherProductCategoryId?: SortOrder
    _count?: otherProductsCountOrderByAggregateInput
    _avg?: otherProductsAvgOrderByAggregateInput
    _max?: otherProductsMaxOrderByAggregateInput
    _min?: otherProductsMinOrderByAggregateInput
    _sum?: otherProductsSumOrderByAggregateInput
  }

  export type otherProductsScalarWhereWithAggregatesInput = {
    AND?: otherProductsScalarWhereWithAggregatesInput | otherProductsScalarWhereWithAggregatesInput[]
    OR?: otherProductsScalarWhereWithAggregatesInput[]
    NOT?: otherProductsScalarWhereWithAggregatesInput | otherProductsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"otherProducts"> | number
    productName?: StringWithAggregatesFilter<"otherProducts"> | string
    productImage?: StringWithAggregatesFilter<"otherProducts"> | string
    otherProductType?: EnumOtherProductTypeWithAggregatesFilter<"otherProducts"> | $Enums.OtherProductType
    price?: FloatWithAggregatesFilter<"otherProducts"> | number
    createdAt?: DateTimeWithAggregatesFilter<"otherProducts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"otherProducts"> | Date | string
    adminId?: IntWithAggregatesFilter<"otherProducts"> | number
    otherProductCategoryId?: IntWithAggregatesFilter<"otherProducts"> | number
  }

  export type otherProductCategoryWhereInput = {
    AND?: otherProductCategoryWhereInput | otherProductCategoryWhereInput[]
    OR?: otherProductCategoryWhereInput[]
    NOT?: otherProductCategoryWhereInput | otherProductCategoryWhereInput[]
    id?: IntFilter<"otherProductCategory"> | number
    otherProductCategoryName?: StringFilter<"otherProductCategory"> | string
    createdAt?: DateTimeFilter<"otherProductCategory"> | Date | string
    updatedAt?: DateTimeFilter<"otherProductCategory"> | Date | string
    adminId?: IntFilter<"otherProductCategory"> | number
    otherProducts?: OtherProductsListRelationFilter
  }

  export type otherProductCategoryOrderByWithRelationInput = {
    id?: SortOrder
    otherProductCategoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    otherProducts?: otherProductsOrderByRelationAggregateInput
  }

  export type otherProductCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: otherProductCategoryWhereInput | otherProductCategoryWhereInput[]
    OR?: otherProductCategoryWhereInput[]
    NOT?: otherProductCategoryWhereInput | otherProductCategoryWhereInput[]
    otherProductCategoryName?: StringFilter<"otherProductCategory"> | string
    createdAt?: DateTimeFilter<"otherProductCategory"> | Date | string
    updatedAt?: DateTimeFilter<"otherProductCategory"> | Date | string
    adminId?: IntFilter<"otherProductCategory"> | number
    otherProducts?: OtherProductsListRelationFilter
  }, "id">

  export type otherProductCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    otherProductCategoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    _count?: otherProductCategoryCountOrderByAggregateInput
    _avg?: otherProductCategoryAvgOrderByAggregateInput
    _max?: otherProductCategoryMaxOrderByAggregateInput
    _min?: otherProductCategoryMinOrderByAggregateInput
    _sum?: otherProductCategorySumOrderByAggregateInput
  }

  export type otherProductCategoryScalarWhereWithAggregatesInput = {
    AND?: otherProductCategoryScalarWhereWithAggregatesInput | otherProductCategoryScalarWhereWithAggregatesInput[]
    OR?: otherProductCategoryScalarWhereWithAggregatesInput[]
    NOT?: otherProductCategoryScalarWhereWithAggregatesInput | otherProductCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"otherProductCategory"> | number
    otherProductCategoryName?: StringWithAggregatesFilter<"otherProductCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"otherProductCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"otherProductCategory"> | Date | string
    adminId?: IntWithAggregatesFilter<"otherProductCategory"> | number
  }

  export type moviesCreateInput = {
    movieName: string
    movieImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
    movieCategory: movieCategoryCreateNestedOneWithoutMoviesInput
  }

  export type moviesUncheckedCreateInput = {
    id?: number
    movieName: string
    movieImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
    movieCategoryId: number
  }

  export type moviesUpdateInput = {
    movieName?: StringFieldUpdateOperationsInput | string
    movieImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    movieCategory?: movieCategoryUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type moviesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieName?: StringFieldUpdateOperationsInput | string
    movieImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    movieCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type moviesCreateManyInput = {
    id?: number
    movieName: string
    movieImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
    movieCategoryId: number
  }

  export type moviesUpdateManyMutationInput = {
    movieName?: StringFieldUpdateOperationsInput | string
    movieImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type moviesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieName?: StringFieldUpdateOperationsInput | string
    movieImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    movieCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type movieCategoryCreateInput = {
    movieCategoryName: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
    movies?: moviesCreateNestedManyWithoutMovieCategoryInput
  }

  export type movieCategoryUncheckedCreateInput = {
    id?: number
    movieCategoryName: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
    movies?: moviesUncheckedCreateNestedManyWithoutMovieCategoryInput
  }

  export type movieCategoryUpdateInput = {
    movieCategoryName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    movies?: moviesUpdateManyWithoutMovieCategoryNestedInput
  }

  export type movieCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieCategoryName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    movies?: moviesUncheckedUpdateManyWithoutMovieCategoryNestedInput
  }

  export type movieCategoryCreateManyInput = {
    id?: number
    movieCategoryName: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type movieCategoryUpdateManyMutationInput = {
    movieCategoryName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type movieCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieCategoryName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type seriesCreateInput = {
    seriesName: string
    seriesDis: string
    seriesImage: string
    seriesSeason: number
    seriesEpisode: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
    seriesCategory: seriesCategoryCreateNestedOneWithoutSeriesInput
  }

  export type seriesUncheckedCreateInput = {
    id?: number
    seriesName: string
    seriesDis: string
    seriesImage: string
    seriesSeason: number
    seriesEpisode: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
    seriesCategoryId: number
  }

  export type seriesUpdateInput = {
    seriesName?: StringFieldUpdateOperationsInput | string
    seriesDis?: StringFieldUpdateOperationsInput | string
    seriesImage?: StringFieldUpdateOperationsInput | string
    seriesSeason?: IntFieldUpdateOperationsInput | number
    seriesEpisode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    seriesCategory?: seriesCategoryUpdateOneRequiredWithoutSeriesNestedInput
  }

  export type seriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seriesName?: StringFieldUpdateOperationsInput | string
    seriesDis?: StringFieldUpdateOperationsInput | string
    seriesImage?: StringFieldUpdateOperationsInput | string
    seriesSeason?: IntFieldUpdateOperationsInput | number
    seriesEpisode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    seriesCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type seriesCreateManyInput = {
    id?: number
    seriesName: string
    seriesDis: string
    seriesImage: string
    seriesSeason: number
    seriesEpisode: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
    seriesCategoryId: number
  }

  export type seriesUpdateManyMutationInput = {
    seriesName?: StringFieldUpdateOperationsInput | string
    seriesDis?: StringFieldUpdateOperationsInput | string
    seriesImage?: StringFieldUpdateOperationsInput | string
    seriesSeason?: IntFieldUpdateOperationsInput | number
    seriesEpisode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type seriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seriesName?: StringFieldUpdateOperationsInput | string
    seriesDis?: StringFieldUpdateOperationsInput | string
    seriesImage?: StringFieldUpdateOperationsInput | string
    seriesSeason?: IntFieldUpdateOperationsInput | number
    seriesEpisode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    seriesCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type seriesCategoryCreateInput = {
    seriesCategoryName: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
    series?: seriesCreateNestedManyWithoutSeriesCategoryInput
  }

  export type seriesCategoryUncheckedCreateInput = {
    id?: number
    seriesCategoryName: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
    series?: seriesUncheckedCreateNestedManyWithoutSeriesCategoryInput
  }

  export type seriesCategoryUpdateInput = {
    seriesCategoryName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    series?: seriesUpdateManyWithoutSeriesCategoryNestedInput
  }

  export type seriesCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seriesCategoryName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    series?: seriesUncheckedUpdateManyWithoutSeriesCategoryNestedInput
  }

  export type seriesCategoryCreateManyInput = {
    id?: number
    seriesCategoryName: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type seriesCategoryUpdateManyMutationInput = {
    seriesCategoryName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type seriesCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seriesCategoryName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type otherProductsCreateInput = {
    productName: string
    productImage: string
    otherProductType?: $Enums.OtherProductType
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
    otherProductCategory: otherProductCategoryCreateNestedOneWithoutOtherProductsInput
  }

  export type otherProductsUncheckedCreateInput = {
    id?: number
    productName: string
    productImage: string
    otherProductType?: $Enums.OtherProductType
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
    otherProductCategoryId: number
  }

  export type otherProductsUpdateInput = {
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    otherProductType?: EnumOtherProductTypeFieldUpdateOperationsInput | $Enums.OtherProductType
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    otherProductCategory?: otherProductCategoryUpdateOneRequiredWithoutOtherProductsNestedInput
  }

  export type otherProductsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    otherProductType?: EnumOtherProductTypeFieldUpdateOperationsInput | $Enums.OtherProductType
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    otherProductCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type otherProductsCreateManyInput = {
    id?: number
    productName: string
    productImage: string
    otherProductType?: $Enums.OtherProductType
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
    otherProductCategoryId: number
  }

  export type otherProductsUpdateManyMutationInput = {
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    otherProductType?: EnumOtherProductTypeFieldUpdateOperationsInput | $Enums.OtherProductType
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type otherProductsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    otherProductType?: EnumOtherProductTypeFieldUpdateOperationsInput | $Enums.OtherProductType
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    otherProductCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type otherProductCategoryCreateInput = {
    otherProductCategoryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
    otherProducts?: otherProductsCreateNestedManyWithoutOtherProductCategoryInput
  }

  export type otherProductCategoryUncheckedCreateInput = {
    id?: number
    otherProductCategoryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
    otherProducts?: otherProductsUncheckedCreateNestedManyWithoutOtherProductCategoryInput
  }

  export type otherProductCategoryUpdateInput = {
    otherProductCategoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    otherProducts?: otherProductsUpdateManyWithoutOtherProductCategoryNestedInput
  }

  export type otherProductCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    otherProductCategoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    otherProducts?: otherProductsUncheckedUpdateManyWithoutOtherProductCategoryNestedInput
  }

  export type otherProductCategoryCreateManyInput = {
    id?: number
    otherProductCategoryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type otherProductCategoryUpdateManyMutationInput = {
    otherProductCategoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type otherProductCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    otherProductCategoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MovieCategoryScalarRelationFilter = {
    is?: movieCategoryWhereInput
    isNot?: movieCategoryWhereInput
  }

  export type moviesCountOrderByAggregateInput = {
    id?: SortOrder
    movieName?: SortOrder
    movieImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    movieCategoryId?: SortOrder
  }

  export type moviesAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    movieCategoryId?: SortOrder
  }

  export type moviesMaxOrderByAggregateInput = {
    id?: SortOrder
    movieName?: SortOrder
    movieImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    movieCategoryId?: SortOrder
  }

  export type moviesMinOrderByAggregateInput = {
    id?: SortOrder
    movieName?: SortOrder
    movieImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    movieCategoryId?: SortOrder
  }

  export type moviesSumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    movieCategoryId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MoviesListRelationFilter = {
    every?: moviesWhereInput
    some?: moviesWhereInput
    none?: moviesWhereInput
  }

  export type moviesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type movieCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    movieCategoryName?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
  }

  export type movieCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    adminId?: SortOrder
  }

  export type movieCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    movieCategoryName?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
  }

  export type movieCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    movieCategoryName?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
  }

  export type movieCategorySumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    adminId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SeriesCategoryScalarRelationFilter = {
    is?: seriesCategoryWhereInput
    isNot?: seriesCategoryWhereInput
  }

  export type seriesCountOrderByAggregateInput = {
    id?: SortOrder
    seriesName?: SortOrder
    seriesDis?: SortOrder
    seriesImage?: SortOrder
    seriesSeason?: SortOrder
    seriesEpisode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    seriesCategoryId?: SortOrder
  }

  export type seriesAvgOrderByAggregateInput = {
    id?: SortOrder
    seriesSeason?: SortOrder
    seriesEpisode?: SortOrder
    adminId?: SortOrder
    seriesCategoryId?: SortOrder
  }

  export type seriesMaxOrderByAggregateInput = {
    id?: SortOrder
    seriesName?: SortOrder
    seriesDis?: SortOrder
    seriesImage?: SortOrder
    seriesSeason?: SortOrder
    seriesEpisode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    seriesCategoryId?: SortOrder
  }

  export type seriesMinOrderByAggregateInput = {
    id?: SortOrder
    seriesName?: SortOrder
    seriesDis?: SortOrder
    seriesImage?: SortOrder
    seriesSeason?: SortOrder
    seriesEpisode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    seriesCategoryId?: SortOrder
  }

  export type seriesSumOrderByAggregateInput = {
    id?: SortOrder
    seriesSeason?: SortOrder
    seriesEpisode?: SortOrder
    adminId?: SortOrder
    seriesCategoryId?: SortOrder
  }

  export type SeriesListRelationFilter = {
    every?: seriesWhereInput
    some?: seriesWhereInput
    none?: seriesWhereInput
  }

  export type seriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type seriesCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    seriesCategoryName?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
  }

  export type seriesCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    adminId?: SortOrder
  }

  export type seriesCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    seriesCategoryName?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
  }

  export type seriesCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    seriesCategoryName?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
  }

  export type seriesCategorySumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    adminId?: SortOrder
  }

  export type EnumOtherProductTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OtherProductType | EnumOtherProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtherProductType[] | ListEnumOtherProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtherProductType[] | ListEnumOtherProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtherProductTypeFilter<$PrismaModel> | $Enums.OtherProductType
  }

  export type OtherProductCategoryScalarRelationFilter = {
    is?: otherProductCategoryWhereInput
    isNot?: otherProductCategoryWhereInput
  }

  export type otherProductsCountOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    otherProductType?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    otherProductCategoryId?: SortOrder
  }

  export type otherProductsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    adminId?: SortOrder
    otherProductCategoryId?: SortOrder
  }

  export type otherProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    otherProductType?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    otherProductCategoryId?: SortOrder
  }

  export type otherProductsMinOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    otherProductType?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
    otherProductCategoryId?: SortOrder
  }

  export type otherProductsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    adminId?: SortOrder
    otherProductCategoryId?: SortOrder
  }

  export type EnumOtherProductTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OtherProductType | EnumOtherProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtherProductType[] | ListEnumOtherProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtherProductType[] | ListEnumOtherProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtherProductTypeWithAggregatesFilter<$PrismaModel> | $Enums.OtherProductType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOtherProductTypeFilter<$PrismaModel>
    _max?: NestedEnumOtherProductTypeFilter<$PrismaModel>
  }

  export type OtherProductsListRelationFilter = {
    every?: otherProductsWhereInput
    some?: otherProductsWhereInput
    none?: otherProductsWhereInput
  }

  export type otherProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type otherProductCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    otherProductCategoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
  }

  export type otherProductCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type otherProductCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    otherProductCategoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
  }

  export type otherProductCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    otherProductCategoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
  }

  export type otherProductCategorySumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type movieCategoryCreateNestedOneWithoutMoviesInput = {
    create?: XOR<movieCategoryCreateWithoutMoviesInput, movieCategoryUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: movieCategoryCreateOrConnectWithoutMoviesInput
    connect?: movieCategoryWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type movieCategoryUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<movieCategoryCreateWithoutMoviesInput, movieCategoryUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: movieCategoryCreateOrConnectWithoutMoviesInput
    upsert?: movieCategoryUpsertWithoutMoviesInput
    connect?: movieCategoryWhereUniqueInput
    update?: XOR<XOR<movieCategoryUpdateToOneWithWhereWithoutMoviesInput, movieCategoryUpdateWithoutMoviesInput>, movieCategoryUncheckedUpdateWithoutMoviesInput>
  }

  export type moviesCreateNestedManyWithoutMovieCategoryInput = {
    create?: XOR<moviesCreateWithoutMovieCategoryInput, moviesUncheckedCreateWithoutMovieCategoryInput> | moviesCreateWithoutMovieCategoryInput[] | moviesUncheckedCreateWithoutMovieCategoryInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutMovieCategoryInput | moviesCreateOrConnectWithoutMovieCategoryInput[]
    createMany?: moviesCreateManyMovieCategoryInputEnvelope
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
  }

  export type moviesUncheckedCreateNestedManyWithoutMovieCategoryInput = {
    create?: XOR<moviesCreateWithoutMovieCategoryInput, moviesUncheckedCreateWithoutMovieCategoryInput> | moviesCreateWithoutMovieCategoryInput[] | moviesUncheckedCreateWithoutMovieCategoryInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutMovieCategoryInput | moviesCreateOrConnectWithoutMovieCategoryInput[]
    createMany?: moviesCreateManyMovieCategoryInputEnvelope
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type moviesUpdateManyWithoutMovieCategoryNestedInput = {
    create?: XOR<moviesCreateWithoutMovieCategoryInput, moviesUncheckedCreateWithoutMovieCategoryInput> | moviesCreateWithoutMovieCategoryInput[] | moviesUncheckedCreateWithoutMovieCategoryInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutMovieCategoryInput | moviesCreateOrConnectWithoutMovieCategoryInput[]
    upsert?: moviesUpsertWithWhereUniqueWithoutMovieCategoryInput | moviesUpsertWithWhereUniqueWithoutMovieCategoryInput[]
    createMany?: moviesCreateManyMovieCategoryInputEnvelope
    set?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    disconnect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    delete?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    update?: moviesUpdateWithWhereUniqueWithoutMovieCategoryInput | moviesUpdateWithWhereUniqueWithoutMovieCategoryInput[]
    updateMany?: moviesUpdateManyWithWhereWithoutMovieCategoryInput | moviesUpdateManyWithWhereWithoutMovieCategoryInput[]
    deleteMany?: moviesScalarWhereInput | moviesScalarWhereInput[]
  }

  export type moviesUncheckedUpdateManyWithoutMovieCategoryNestedInput = {
    create?: XOR<moviesCreateWithoutMovieCategoryInput, moviesUncheckedCreateWithoutMovieCategoryInput> | moviesCreateWithoutMovieCategoryInput[] | moviesUncheckedCreateWithoutMovieCategoryInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutMovieCategoryInput | moviesCreateOrConnectWithoutMovieCategoryInput[]
    upsert?: moviesUpsertWithWhereUniqueWithoutMovieCategoryInput | moviesUpsertWithWhereUniqueWithoutMovieCategoryInput[]
    createMany?: moviesCreateManyMovieCategoryInputEnvelope
    set?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    disconnect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    delete?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    update?: moviesUpdateWithWhereUniqueWithoutMovieCategoryInput | moviesUpdateWithWhereUniqueWithoutMovieCategoryInput[]
    updateMany?: moviesUpdateManyWithWhereWithoutMovieCategoryInput | moviesUpdateManyWithWhereWithoutMovieCategoryInput[]
    deleteMany?: moviesScalarWhereInput | moviesScalarWhereInput[]
  }

  export type seriesCategoryCreateNestedOneWithoutSeriesInput = {
    create?: XOR<seriesCategoryCreateWithoutSeriesInput, seriesCategoryUncheckedCreateWithoutSeriesInput>
    connectOrCreate?: seriesCategoryCreateOrConnectWithoutSeriesInput
    connect?: seriesCategoryWhereUniqueInput
  }

  export type seriesCategoryUpdateOneRequiredWithoutSeriesNestedInput = {
    create?: XOR<seriesCategoryCreateWithoutSeriesInput, seriesCategoryUncheckedCreateWithoutSeriesInput>
    connectOrCreate?: seriesCategoryCreateOrConnectWithoutSeriesInput
    upsert?: seriesCategoryUpsertWithoutSeriesInput
    connect?: seriesCategoryWhereUniqueInput
    update?: XOR<XOR<seriesCategoryUpdateToOneWithWhereWithoutSeriesInput, seriesCategoryUpdateWithoutSeriesInput>, seriesCategoryUncheckedUpdateWithoutSeriesInput>
  }

  export type seriesCreateNestedManyWithoutSeriesCategoryInput = {
    create?: XOR<seriesCreateWithoutSeriesCategoryInput, seriesUncheckedCreateWithoutSeriesCategoryInput> | seriesCreateWithoutSeriesCategoryInput[] | seriesUncheckedCreateWithoutSeriesCategoryInput[]
    connectOrCreate?: seriesCreateOrConnectWithoutSeriesCategoryInput | seriesCreateOrConnectWithoutSeriesCategoryInput[]
    createMany?: seriesCreateManySeriesCategoryInputEnvelope
    connect?: seriesWhereUniqueInput | seriesWhereUniqueInput[]
  }

  export type seriesUncheckedCreateNestedManyWithoutSeriesCategoryInput = {
    create?: XOR<seriesCreateWithoutSeriesCategoryInput, seriesUncheckedCreateWithoutSeriesCategoryInput> | seriesCreateWithoutSeriesCategoryInput[] | seriesUncheckedCreateWithoutSeriesCategoryInput[]
    connectOrCreate?: seriesCreateOrConnectWithoutSeriesCategoryInput | seriesCreateOrConnectWithoutSeriesCategoryInput[]
    createMany?: seriesCreateManySeriesCategoryInputEnvelope
    connect?: seriesWhereUniqueInput | seriesWhereUniqueInput[]
  }

  export type seriesUpdateManyWithoutSeriesCategoryNestedInput = {
    create?: XOR<seriesCreateWithoutSeriesCategoryInput, seriesUncheckedCreateWithoutSeriesCategoryInput> | seriesCreateWithoutSeriesCategoryInput[] | seriesUncheckedCreateWithoutSeriesCategoryInput[]
    connectOrCreate?: seriesCreateOrConnectWithoutSeriesCategoryInput | seriesCreateOrConnectWithoutSeriesCategoryInput[]
    upsert?: seriesUpsertWithWhereUniqueWithoutSeriesCategoryInput | seriesUpsertWithWhereUniqueWithoutSeriesCategoryInput[]
    createMany?: seriesCreateManySeriesCategoryInputEnvelope
    set?: seriesWhereUniqueInput | seriesWhereUniqueInput[]
    disconnect?: seriesWhereUniqueInput | seriesWhereUniqueInput[]
    delete?: seriesWhereUniqueInput | seriesWhereUniqueInput[]
    connect?: seriesWhereUniqueInput | seriesWhereUniqueInput[]
    update?: seriesUpdateWithWhereUniqueWithoutSeriesCategoryInput | seriesUpdateWithWhereUniqueWithoutSeriesCategoryInput[]
    updateMany?: seriesUpdateManyWithWhereWithoutSeriesCategoryInput | seriesUpdateManyWithWhereWithoutSeriesCategoryInput[]
    deleteMany?: seriesScalarWhereInput | seriesScalarWhereInput[]
  }

  export type seriesUncheckedUpdateManyWithoutSeriesCategoryNestedInput = {
    create?: XOR<seriesCreateWithoutSeriesCategoryInput, seriesUncheckedCreateWithoutSeriesCategoryInput> | seriesCreateWithoutSeriesCategoryInput[] | seriesUncheckedCreateWithoutSeriesCategoryInput[]
    connectOrCreate?: seriesCreateOrConnectWithoutSeriesCategoryInput | seriesCreateOrConnectWithoutSeriesCategoryInput[]
    upsert?: seriesUpsertWithWhereUniqueWithoutSeriesCategoryInput | seriesUpsertWithWhereUniqueWithoutSeriesCategoryInput[]
    createMany?: seriesCreateManySeriesCategoryInputEnvelope
    set?: seriesWhereUniqueInput | seriesWhereUniqueInput[]
    disconnect?: seriesWhereUniqueInput | seriesWhereUniqueInput[]
    delete?: seriesWhereUniqueInput | seriesWhereUniqueInput[]
    connect?: seriesWhereUniqueInput | seriesWhereUniqueInput[]
    update?: seriesUpdateWithWhereUniqueWithoutSeriesCategoryInput | seriesUpdateWithWhereUniqueWithoutSeriesCategoryInput[]
    updateMany?: seriesUpdateManyWithWhereWithoutSeriesCategoryInput | seriesUpdateManyWithWhereWithoutSeriesCategoryInput[]
    deleteMany?: seriesScalarWhereInput | seriesScalarWhereInput[]
  }

  export type otherProductCategoryCreateNestedOneWithoutOtherProductsInput = {
    create?: XOR<otherProductCategoryCreateWithoutOtherProductsInput, otherProductCategoryUncheckedCreateWithoutOtherProductsInput>
    connectOrCreate?: otherProductCategoryCreateOrConnectWithoutOtherProductsInput
    connect?: otherProductCategoryWhereUniqueInput
  }

  export type EnumOtherProductTypeFieldUpdateOperationsInput = {
    set?: $Enums.OtherProductType
  }

  export type otherProductCategoryUpdateOneRequiredWithoutOtherProductsNestedInput = {
    create?: XOR<otherProductCategoryCreateWithoutOtherProductsInput, otherProductCategoryUncheckedCreateWithoutOtherProductsInput>
    connectOrCreate?: otherProductCategoryCreateOrConnectWithoutOtherProductsInput
    upsert?: otherProductCategoryUpsertWithoutOtherProductsInput
    connect?: otherProductCategoryWhereUniqueInput
    update?: XOR<XOR<otherProductCategoryUpdateToOneWithWhereWithoutOtherProductsInput, otherProductCategoryUpdateWithoutOtherProductsInput>, otherProductCategoryUncheckedUpdateWithoutOtherProductsInput>
  }

  export type otherProductsCreateNestedManyWithoutOtherProductCategoryInput = {
    create?: XOR<otherProductsCreateWithoutOtherProductCategoryInput, otherProductsUncheckedCreateWithoutOtherProductCategoryInput> | otherProductsCreateWithoutOtherProductCategoryInput[] | otherProductsUncheckedCreateWithoutOtherProductCategoryInput[]
    connectOrCreate?: otherProductsCreateOrConnectWithoutOtherProductCategoryInput | otherProductsCreateOrConnectWithoutOtherProductCategoryInput[]
    createMany?: otherProductsCreateManyOtherProductCategoryInputEnvelope
    connect?: otherProductsWhereUniqueInput | otherProductsWhereUniqueInput[]
  }

  export type otherProductsUncheckedCreateNestedManyWithoutOtherProductCategoryInput = {
    create?: XOR<otherProductsCreateWithoutOtherProductCategoryInput, otherProductsUncheckedCreateWithoutOtherProductCategoryInput> | otherProductsCreateWithoutOtherProductCategoryInput[] | otherProductsUncheckedCreateWithoutOtherProductCategoryInput[]
    connectOrCreate?: otherProductsCreateOrConnectWithoutOtherProductCategoryInput | otherProductsCreateOrConnectWithoutOtherProductCategoryInput[]
    createMany?: otherProductsCreateManyOtherProductCategoryInputEnvelope
    connect?: otherProductsWhereUniqueInput | otherProductsWhereUniqueInput[]
  }

  export type otherProductsUpdateManyWithoutOtherProductCategoryNestedInput = {
    create?: XOR<otherProductsCreateWithoutOtherProductCategoryInput, otherProductsUncheckedCreateWithoutOtherProductCategoryInput> | otherProductsCreateWithoutOtherProductCategoryInput[] | otherProductsUncheckedCreateWithoutOtherProductCategoryInput[]
    connectOrCreate?: otherProductsCreateOrConnectWithoutOtherProductCategoryInput | otherProductsCreateOrConnectWithoutOtherProductCategoryInput[]
    upsert?: otherProductsUpsertWithWhereUniqueWithoutOtherProductCategoryInput | otherProductsUpsertWithWhereUniqueWithoutOtherProductCategoryInput[]
    createMany?: otherProductsCreateManyOtherProductCategoryInputEnvelope
    set?: otherProductsWhereUniqueInput | otherProductsWhereUniqueInput[]
    disconnect?: otherProductsWhereUniqueInput | otherProductsWhereUniqueInput[]
    delete?: otherProductsWhereUniqueInput | otherProductsWhereUniqueInput[]
    connect?: otherProductsWhereUniqueInput | otherProductsWhereUniqueInput[]
    update?: otherProductsUpdateWithWhereUniqueWithoutOtherProductCategoryInput | otherProductsUpdateWithWhereUniqueWithoutOtherProductCategoryInput[]
    updateMany?: otherProductsUpdateManyWithWhereWithoutOtherProductCategoryInput | otherProductsUpdateManyWithWhereWithoutOtherProductCategoryInput[]
    deleteMany?: otherProductsScalarWhereInput | otherProductsScalarWhereInput[]
  }

  export type otherProductsUncheckedUpdateManyWithoutOtherProductCategoryNestedInput = {
    create?: XOR<otherProductsCreateWithoutOtherProductCategoryInput, otherProductsUncheckedCreateWithoutOtherProductCategoryInput> | otherProductsCreateWithoutOtherProductCategoryInput[] | otherProductsUncheckedCreateWithoutOtherProductCategoryInput[]
    connectOrCreate?: otherProductsCreateOrConnectWithoutOtherProductCategoryInput | otherProductsCreateOrConnectWithoutOtherProductCategoryInput[]
    upsert?: otherProductsUpsertWithWhereUniqueWithoutOtherProductCategoryInput | otherProductsUpsertWithWhereUniqueWithoutOtherProductCategoryInput[]
    createMany?: otherProductsCreateManyOtherProductCategoryInputEnvelope
    set?: otherProductsWhereUniqueInput | otherProductsWhereUniqueInput[]
    disconnect?: otherProductsWhereUniqueInput | otherProductsWhereUniqueInput[]
    delete?: otherProductsWhereUniqueInput | otherProductsWhereUniqueInput[]
    connect?: otherProductsWhereUniqueInput | otherProductsWhereUniqueInput[]
    update?: otherProductsUpdateWithWhereUniqueWithoutOtherProductCategoryInput | otherProductsUpdateWithWhereUniqueWithoutOtherProductCategoryInput[]
    updateMany?: otherProductsUpdateManyWithWhereWithoutOtherProductCategoryInput | otherProductsUpdateManyWithWhereWithoutOtherProductCategoryInput[]
    deleteMany?: otherProductsScalarWhereInput | otherProductsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumOtherProductTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OtherProductType | EnumOtherProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtherProductType[] | ListEnumOtherProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtherProductType[] | ListEnumOtherProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtherProductTypeFilter<$PrismaModel> | $Enums.OtherProductType
  }

  export type NestedEnumOtherProductTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OtherProductType | EnumOtherProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtherProductType[] | ListEnumOtherProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtherProductType[] | ListEnumOtherProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtherProductTypeWithAggregatesFilter<$PrismaModel> | $Enums.OtherProductType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOtherProductTypeFilter<$PrismaModel>
    _max?: NestedEnumOtherProductTypeFilter<$PrismaModel>
  }

  export type movieCategoryCreateWithoutMoviesInput = {
    movieCategoryName: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type movieCategoryUncheckedCreateWithoutMoviesInput = {
    id?: number
    movieCategoryName: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type movieCategoryCreateOrConnectWithoutMoviesInput = {
    where: movieCategoryWhereUniqueInput
    create: XOR<movieCategoryCreateWithoutMoviesInput, movieCategoryUncheckedCreateWithoutMoviesInput>
  }

  export type movieCategoryUpsertWithoutMoviesInput = {
    update: XOR<movieCategoryUpdateWithoutMoviesInput, movieCategoryUncheckedUpdateWithoutMoviesInput>
    create: XOR<movieCategoryCreateWithoutMoviesInput, movieCategoryUncheckedCreateWithoutMoviesInput>
    where?: movieCategoryWhereInput
  }

  export type movieCategoryUpdateToOneWithWhereWithoutMoviesInput = {
    where?: movieCategoryWhereInput
    data: XOR<movieCategoryUpdateWithoutMoviesInput, movieCategoryUncheckedUpdateWithoutMoviesInput>
  }

  export type movieCategoryUpdateWithoutMoviesInput = {
    movieCategoryName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type movieCategoryUncheckedUpdateWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieCategoryName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type moviesCreateWithoutMovieCategoryInput = {
    movieName: string
    movieImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type moviesUncheckedCreateWithoutMovieCategoryInput = {
    id?: number
    movieName: string
    movieImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type moviesCreateOrConnectWithoutMovieCategoryInput = {
    where: moviesWhereUniqueInput
    create: XOR<moviesCreateWithoutMovieCategoryInput, moviesUncheckedCreateWithoutMovieCategoryInput>
  }

  export type moviesCreateManyMovieCategoryInputEnvelope = {
    data: moviesCreateManyMovieCategoryInput | moviesCreateManyMovieCategoryInput[]
    skipDuplicates?: boolean
  }

  export type moviesUpsertWithWhereUniqueWithoutMovieCategoryInput = {
    where: moviesWhereUniqueInput
    update: XOR<moviesUpdateWithoutMovieCategoryInput, moviesUncheckedUpdateWithoutMovieCategoryInput>
    create: XOR<moviesCreateWithoutMovieCategoryInput, moviesUncheckedCreateWithoutMovieCategoryInput>
  }

  export type moviesUpdateWithWhereUniqueWithoutMovieCategoryInput = {
    where: moviesWhereUniqueInput
    data: XOR<moviesUpdateWithoutMovieCategoryInput, moviesUncheckedUpdateWithoutMovieCategoryInput>
  }

  export type moviesUpdateManyWithWhereWithoutMovieCategoryInput = {
    where: moviesScalarWhereInput
    data: XOR<moviesUpdateManyMutationInput, moviesUncheckedUpdateManyWithoutMovieCategoryInput>
  }

  export type moviesScalarWhereInput = {
    AND?: moviesScalarWhereInput | moviesScalarWhereInput[]
    OR?: moviesScalarWhereInput[]
    NOT?: moviesScalarWhereInput | moviesScalarWhereInput[]
    id?: IntFilter<"movies"> | number
    movieName?: StringFilter<"movies"> | string
    movieImage?: StringFilter<"movies"> | string
    createdAt?: DateTimeFilter<"movies"> | Date | string
    updatedAt?: DateTimeFilter<"movies"> | Date | string
    adminId?: IntFilter<"movies"> | number
    movieCategoryId?: IntFilter<"movies"> | number
  }

  export type seriesCategoryCreateWithoutSeriesInput = {
    seriesCategoryName: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type seriesCategoryUncheckedCreateWithoutSeriesInput = {
    id?: number
    seriesCategoryName: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type seriesCategoryCreateOrConnectWithoutSeriesInput = {
    where: seriesCategoryWhereUniqueInput
    create: XOR<seriesCategoryCreateWithoutSeriesInput, seriesCategoryUncheckedCreateWithoutSeriesInput>
  }

  export type seriesCategoryUpsertWithoutSeriesInput = {
    update: XOR<seriesCategoryUpdateWithoutSeriesInput, seriesCategoryUncheckedUpdateWithoutSeriesInput>
    create: XOR<seriesCategoryCreateWithoutSeriesInput, seriesCategoryUncheckedCreateWithoutSeriesInput>
    where?: seriesCategoryWhereInput
  }

  export type seriesCategoryUpdateToOneWithWhereWithoutSeriesInput = {
    where?: seriesCategoryWhereInput
    data: XOR<seriesCategoryUpdateWithoutSeriesInput, seriesCategoryUncheckedUpdateWithoutSeriesInput>
  }

  export type seriesCategoryUpdateWithoutSeriesInput = {
    seriesCategoryName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type seriesCategoryUncheckedUpdateWithoutSeriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    seriesCategoryName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type seriesCreateWithoutSeriesCategoryInput = {
    seriesName: string
    seriesDis: string
    seriesImage: string
    seriesSeason: number
    seriesEpisode: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type seriesUncheckedCreateWithoutSeriesCategoryInput = {
    id?: number
    seriesName: string
    seriesDis: string
    seriesImage: string
    seriesSeason: number
    seriesEpisode: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type seriesCreateOrConnectWithoutSeriesCategoryInput = {
    where: seriesWhereUniqueInput
    create: XOR<seriesCreateWithoutSeriesCategoryInput, seriesUncheckedCreateWithoutSeriesCategoryInput>
  }

  export type seriesCreateManySeriesCategoryInputEnvelope = {
    data: seriesCreateManySeriesCategoryInput | seriesCreateManySeriesCategoryInput[]
    skipDuplicates?: boolean
  }

  export type seriesUpsertWithWhereUniqueWithoutSeriesCategoryInput = {
    where: seriesWhereUniqueInput
    update: XOR<seriesUpdateWithoutSeriesCategoryInput, seriesUncheckedUpdateWithoutSeriesCategoryInput>
    create: XOR<seriesCreateWithoutSeriesCategoryInput, seriesUncheckedCreateWithoutSeriesCategoryInput>
  }

  export type seriesUpdateWithWhereUniqueWithoutSeriesCategoryInput = {
    where: seriesWhereUniqueInput
    data: XOR<seriesUpdateWithoutSeriesCategoryInput, seriesUncheckedUpdateWithoutSeriesCategoryInput>
  }

  export type seriesUpdateManyWithWhereWithoutSeriesCategoryInput = {
    where: seriesScalarWhereInput
    data: XOR<seriesUpdateManyMutationInput, seriesUncheckedUpdateManyWithoutSeriesCategoryInput>
  }

  export type seriesScalarWhereInput = {
    AND?: seriesScalarWhereInput | seriesScalarWhereInput[]
    OR?: seriesScalarWhereInput[]
    NOT?: seriesScalarWhereInput | seriesScalarWhereInput[]
    id?: IntFilter<"series"> | number
    seriesName?: StringFilter<"series"> | string
    seriesDis?: StringFilter<"series"> | string
    seriesImage?: StringFilter<"series"> | string
    seriesSeason?: IntFilter<"series"> | number
    seriesEpisode?: IntFilter<"series"> | number
    createdAt?: DateTimeFilter<"series"> | Date | string
    updatedAt?: DateTimeFilter<"series"> | Date | string
    adminId?: IntFilter<"series"> | number
    seriesCategoryId?: IntFilter<"series"> | number
  }

  export type otherProductCategoryCreateWithoutOtherProductsInput = {
    otherProductCategoryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type otherProductCategoryUncheckedCreateWithoutOtherProductsInput = {
    id?: number
    otherProductCategoryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type otherProductCategoryCreateOrConnectWithoutOtherProductsInput = {
    where: otherProductCategoryWhereUniqueInput
    create: XOR<otherProductCategoryCreateWithoutOtherProductsInput, otherProductCategoryUncheckedCreateWithoutOtherProductsInput>
  }

  export type otherProductCategoryUpsertWithoutOtherProductsInput = {
    update: XOR<otherProductCategoryUpdateWithoutOtherProductsInput, otherProductCategoryUncheckedUpdateWithoutOtherProductsInput>
    create: XOR<otherProductCategoryCreateWithoutOtherProductsInput, otherProductCategoryUncheckedCreateWithoutOtherProductsInput>
    where?: otherProductCategoryWhereInput
  }

  export type otherProductCategoryUpdateToOneWithWhereWithoutOtherProductsInput = {
    where?: otherProductCategoryWhereInput
    data: XOR<otherProductCategoryUpdateWithoutOtherProductsInput, otherProductCategoryUncheckedUpdateWithoutOtherProductsInput>
  }

  export type otherProductCategoryUpdateWithoutOtherProductsInput = {
    otherProductCategoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type otherProductCategoryUncheckedUpdateWithoutOtherProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    otherProductCategoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type otherProductsCreateWithoutOtherProductCategoryInput = {
    productName: string
    productImage: string
    otherProductType?: $Enums.OtherProductType
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type otherProductsUncheckedCreateWithoutOtherProductCategoryInput = {
    id?: number
    productName: string
    productImage: string
    otherProductType?: $Enums.OtherProductType
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type otherProductsCreateOrConnectWithoutOtherProductCategoryInput = {
    where: otherProductsWhereUniqueInput
    create: XOR<otherProductsCreateWithoutOtherProductCategoryInput, otherProductsUncheckedCreateWithoutOtherProductCategoryInput>
  }

  export type otherProductsCreateManyOtherProductCategoryInputEnvelope = {
    data: otherProductsCreateManyOtherProductCategoryInput | otherProductsCreateManyOtherProductCategoryInput[]
    skipDuplicates?: boolean
  }

  export type otherProductsUpsertWithWhereUniqueWithoutOtherProductCategoryInput = {
    where: otherProductsWhereUniqueInput
    update: XOR<otherProductsUpdateWithoutOtherProductCategoryInput, otherProductsUncheckedUpdateWithoutOtherProductCategoryInput>
    create: XOR<otherProductsCreateWithoutOtherProductCategoryInput, otherProductsUncheckedCreateWithoutOtherProductCategoryInput>
  }

  export type otherProductsUpdateWithWhereUniqueWithoutOtherProductCategoryInput = {
    where: otherProductsWhereUniqueInput
    data: XOR<otherProductsUpdateWithoutOtherProductCategoryInput, otherProductsUncheckedUpdateWithoutOtherProductCategoryInput>
  }

  export type otherProductsUpdateManyWithWhereWithoutOtherProductCategoryInput = {
    where: otherProductsScalarWhereInput
    data: XOR<otherProductsUpdateManyMutationInput, otherProductsUncheckedUpdateManyWithoutOtherProductCategoryInput>
  }

  export type otherProductsScalarWhereInput = {
    AND?: otherProductsScalarWhereInput | otherProductsScalarWhereInput[]
    OR?: otherProductsScalarWhereInput[]
    NOT?: otherProductsScalarWhereInput | otherProductsScalarWhereInput[]
    id?: IntFilter<"otherProducts"> | number
    productName?: StringFilter<"otherProducts"> | string
    productImage?: StringFilter<"otherProducts"> | string
    otherProductType?: EnumOtherProductTypeFilter<"otherProducts"> | $Enums.OtherProductType
    price?: FloatFilter<"otherProducts"> | number
    createdAt?: DateTimeFilter<"otherProducts"> | Date | string
    updatedAt?: DateTimeFilter<"otherProducts"> | Date | string
    adminId?: IntFilter<"otherProducts"> | number
    otherProductCategoryId?: IntFilter<"otherProducts"> | number
  }

  export type moviesCreateManyMovieCategoryInput = {
    id?: number
    movieName: string
    movieImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type moviesUpdateWithoutMovieCategoryInput = {
    movieName?: StringFieldUpdateOperationsInput | string
    movieImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type moviesUncheckedUpdateWithoutMovieCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieName?: StringFieldUpdateOperationsInput | string
    movieImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type moviesUncheckedUpdateManyWithoutMovieCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieName?: StringFieldUpdateOperationsInput | string
    movieImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type seriesCreateManySeriesCategoryInput = {
    id?: number
    seriesName: string
    seriesDis: string
    seriesImage: string
    seriesSeason: number
    seriesEpisode: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type seriesUpdateWithoutSeriesCategoryInput = {
    seriesName?: StringFieldUpdateOperationsInput | string
    seriesDis?: StringFieldUpdateOperationsInput | string
    seriesImage?: StringFieldUpdateOperationsInput | string
    seriesSeason?: IntFieldUpdateOperationsInput | number
    seriesEpisode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type seriesUncheckedUpdateWithoutSeriesCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    seriesName?: StringFieldUpdateOperationsInput | string
    seriesDis?: StringFieldUpdateOperationsInput | string
    seriesImage?: StringFieldUpdateOperationsInput | string
    seriesSeason?: IntFieldUpdateOperationsInput | number
    seriesEpisode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type seriesUncheckedUpdateManyWithoutSeriesCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    seriesName?: StringFieldUpdateOperationsInput | string
    seriesDis?: StringFieldUpdateOperationsInput | string
    seriesImage?: StringFieldUpdateOperationsInput | string
    seriesSeason?: IntFieldUpdateOperationsInput | number
    seriesEpisode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type otherProductsCreateManyOtherProductCategoryInput = {
    id?: number
    productName: string
    productImage: string
    otherProductType?: $Enums.OtherProductType
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId: number
  }

  export type otherProductsUpdateWithoutOtherProductCategoryInput = {
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    otherProductType?: EnumOtherProductTypeFieldUpdateOperationsInput | $Enums.OtherProductType
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type otherProductsUncheckedUpdateWithoutOtherProductCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    otherProductType?: EnumOtherProductTypeFieldUpdateOperationsInput | $Enums.OtherProductType
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type otherProductsUncheckedUpdateManyWithoutOtherProductCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    otherProductType?: EnumOtherProductTypeFieldUpdateOperationsInput | $Enums.OtherProductType
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}