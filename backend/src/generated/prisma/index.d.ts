
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PlantNomenclature
 * 
 */
export type PlantNomenclature = $Result.DefaultSelection<Prisma.$PlantNomenclaturePayload>
/**
 * Model PlantTaxonomy
 * 
 */
export type PlantTaxonomy = $Result.DefaultSelection<Prisma.$PlantTaxonomyPayload>
/**
 * Model PlantSynonym
 * 
 */
export type PlantSynonym = $Result.DefaultSelection<Prisma.$PlantSynonymPayload>
/**
 * Model PlantMorphology
 * 
 */
export type PlantMorphology = $Result.DefaultSelection<Prisma.$PlantMorphologyPayload>
/**
 * Model PlantEcologyDistribution
 * 
 */
export type PlantEcologyDistribution = $Result.DefaultSelection<Prisma.$PlantEcologyDistributionPayload>
/**
 * Model PlantConservation
 * 
 */
export type PlantConservation = $Result.DefaultSelection<Prisma.$PlantConservationPayload>
/**
 * Model BotanicalGarden
 * 
 */
export type BotanicalGarden = $Result.DefaultSelection<Prisma.$BotanicalGardenPayload>
/**
 * Model MedicinalProperties
 * 
 */
export type MedicinalProperties = $Result.DefaultSelection<Prisma.$MedicinalPropertiesPayload>
/**
 * Model HerbalDrugBackground
 * 
 */
export type HerbalDrugBackground = $Result.DefaultSelection<Prisma.$HerbalDrugBackgroundPayload>
/**
 * Model SourcingBackground
 * 
 */
export type SourcingBackground = $Result.DefaultSelection<Prisma.$SourcingBackgroundPayload>
/**
 * Model Ethnobotany
 * 
 */
export type Ethnobotany = $Result.DefaultSelection<Prisma.$EthnobotanyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Lifecycle: {
  ANNUAL: 'ANNUAL',
  BIENNIAL: 'BIENNIAL',
  PERENNIAL: 'PERENNIAL'
};

export type Lifecycle = (typeof Lifecycle)[keyof typeof Lifecycle]


export const Month: {
  JANUARY: 'JANUARY',
  FEBRUARY: 'FEBRUARY',
  MARCH: 'MARCH',
  APRIL: 'APRIL',
  MAY: 'MAY',
  JUNE: 'JUNE',
  JULY: 'JULY',
  AUGUST: 'AUGUST',
  SEPTEMBER: 'SEPTEMBER',
  OCTOBER: 'OCTOBER',
  NOVEMBER: 'NOVEMBER',
  DECEMBER: 'DECEMBER'
};

export type Month = (typeof Month)[keyof typeof Month]


export const Season: {
  SPRING: 'SPRING',
  SUMMER: 'SUMMER',
  AUTUMN: 'AUTUMN',
  WINTER: 'WINTER'
};

export type Season = (typeof Season)[keyof typeof Season]


export const Taste: {
  ACRID: 'ACRID',
  ASTRINGENT: 'ASTRINGENT',
  BITTER: 'BITTER',
  BLAND: 'BLAND',
  PUNGENT: 'PUNGENT',
  SALTY: 'SALTY',
  SOUR: 'SOUR',
  SWEET: 'SWEET'
};

export type Taste = (typeof Taste)[keyof typeof Taste]


export const EnergyFlow: {
  SLIGHTLY_COLD: 'SLIGHTLY_COLD',
  COLD: 'COLD',
  NEUTRAL: 'NEUTRAL',
  SLIGHTLY_WARM: 'SLIGHTLY_WARM',
  WARM: 'WARM',
  HOT: 'HOT'
};

export type EnergyFlow = (typeof EnergyFlow)[keyof typeof EnergyFlow]


export const Meridian: {
  BLADDER: 'BLADDER',
  GALLBLADDER: 'GALLBLADDER',
  HEART: 'HEART',
  INTESTINE: 'INTESTINE',
  KIDNEY: 'KIDNEY',
  LARGE_INTESTINE: 'LARGE_INTESTINE',
  LIVER: 'LIVER',
  LUNG: 'LUNG',
  PERICARDIUM: 'PERICARDIUM',
  SAN_JIAO: 'SAN_JIAO',
  SMALL_INTESTINE: 'SMALL_INTESTINE',
  SPLEEN: 'SPLEEN',
  STOMACH: 'STOMACH'
};

export type Meridian = (typeof Meridian)[keyof typeof Meridian]


export const GlobalConservationStatus: {
  CRITICALLY_ENDANGERED: 'CRITICALLY_ENDANGERED',
  ENDANGERED: 'ENDANGERED',
  VULNERABLE: 'VULNERABLE',
  NEAR_THREATENED: 'NEAR_THREATENED',
  LEAST_CONCERN: 'LEAST_CONCERN',
  DATA_DEFICIENT: 'DATA_DEFICIENT',
  NOT_EVALUATED: 'NOT_EVALUATED'
};

export type GlobalConservationStatus = (typeof GlobalConservationStatus)[keyof typeof GlobalConservationStatus]


export const InvasiveStatus: {
  NON_INVASIVE: 'NON_INVASIVE',
  POSSIBLY_INVASIVE: 'POSSIBLY_INVASIVE',
  INVASIVE: 'INVASIVE'
};

export type InvasiveStatus = (typeof InvasiveStatus)[keyof typeof InvasiveStatus]


export const HarvestingPractice: {
  CULTIVATED: 'CULTIVATED',
  WILD_HARVESTED: 'WILD_HARVESTED'
};

export type HarvestingPractice = (typeof HarvestingPractice)[keyof typeof HarvestingPractice]

}

export type Lifecycle = $Enums.Lifecycle

export const Lifecycle: typeof $Enums.Lifecycle

export type Month = $Enums.Month

export const Month: typeof $Enums.Month

export type Season = $Enums.Season

export const Season: typeof $Enums.Season

export type Taste = $Enums.Taste

export const Taste: typeof $Enums.Taste

export type EnergyFlow = $Enums.EnergyFlow

export const EnergyFlow: typeof $Enums.EnergyFlow

export type Meridian = $Enums.Meridian

export const Meridian: typeof $Enums.Meridian

export type GlobalConservationStatus = $Enums.GlobalConservationStatus

export const GlobalConservationStatus: typeof $Enums.GlobalConservationStatus

export type InvasiveStatus = $Enums.InvasiveStatus

export const InvasiveStatus: typeof $Enums.InvasiveStatus

export type HarvestingPractice = $Enums.HarvestingPractice

export const HarvestingPractice: typeof $Enums.HarvestingPractice

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plantNomenclature`: Exposes CRUD operations for the **PlantNomenclature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlantNomenclatures
    * const plantNomenclatures = await prisma.plantNomenclature.findMany()
    * ```
    */
  get plantNomenclature(): Prisma.PlantNomenclatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plantTaxonomy`: Exposes CRUD operations for the **PlantTaxonomy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlantTaxonomies
    * const plantTaxonomies = await prisma.plantTaxonomy.findMany()
    * ```
    */
  get plantTaxonomy(): Prisma.PlantTaxonomyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plantSynonym`: Exposes CRUD operations for the **PlantSynonym** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlantSynonyms
    * const plantSynonyms = await prisma.plantSynonym.findMany()
    * ```
    */
  get plantSynonym(): Prisma.PlantSynonymDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plantMorphology`: Exposes CRUD operations for the **PlantMorphology** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlantMorphologies
    * const plantMorphologies = await prisma.plantMorphology.findMany()
    * ```
    */
  get plantMorphology(): Prisma.PlantMorphologyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plantEcologyDistribution`: Exposes CRUD operations for the **PlantEcologyDistribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlantEcologyDistributions
    * const plantEcologyDistributions = await prisma.plantEcologyDistribution.findMany()
    * ```
    */
  get plantEcologyDistribution(): Prisma.PlantEcologyDistributionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plantConservation`: Exposes CRUD operations for the **PlantConservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlantConservations
    * const plantConservations = await prisma.plantConservation.findMany()
    * ```
    */
  get plantConservation(): Prisma.PlantConservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.botanicalGarden`: Exposes CRUD operations for the **BotanicalGarden** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BotanicalGardens
    * const botanicalGardens = await prisma.botanicalGarden.findMany()
    * ```
    */
  get botanicalGarden(): Prisma.BotanicalGardenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicinalProperties`: Exposes CRUD operations for the **MedicinalProperties** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicinalProperties
    * const medicinalProperties = await prisma.medicinalProperties.findMany()
    * ```
    */
  get medicinalProperties(): Prisma.MedicinalPropertiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.herbalDrugBackground`: Exposes CRUD operations for the **HerbalDrugBackground** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HerbalDrugBackgrounds
    * const herbalDrugBackgrounds = await prisma.herbalDrugBackground.findMany()
    * ```
    */
  get herbalDrugBackground(): Prisma.HerbalDrugBackgroundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sourcingBackground`: Exposes CRUD operations for the **SourcingBackground** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SourcingBackgrounds
    * const sourcingBackgrounds = await prisma.sourcingBackground.findMany()
    * ```
    */
  get sourcingBackground(): Prisma.SourcingBackgroundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ethnobotany`: Exposes CRUD operations for the **Ethnobotany** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ethnobotanies
    * const ethnobotanies = await prisma.ethnobotany.findMany()
    * ```
    */
  get ethnobotany(): Prisma.EthnobotanyDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    PlantNomenclature: 'PlantNomenclature',
    PlantTaxonomy: 'PlantTaxonomy',
    PlantSynonym: 'PlantSynonym',
    PlantMorphology: 'PlantMorphology',
    PlantEcologyDistribution: 'PlantEcologyDistribution',
    PlantConservation: 'PlantConservation',
    BotanicalGarden: 'BotanicalGarden',
    MedicinalProperties: 'MedicinalProperties',
    HerbalDrugBackground: 'HerbalDrugBackground',
    SourcingBackground: 'SourcingBackground',
    Ethnobotany: 'Ethnobotany'
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
      modelProps: "user" | "plantNomenclature" | "plantTaxonomy" | "plantSynonym" | "plantMorphology" | "plantEcologyDistribution" | "plantConservation" | "botanicalGarden" | "medicinalProperties" | "herbalDrugBackground" | "sourcingBackground" | "ethnobotany"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PlantNomenclature: {
        payload: Prisma.$PlantNomenclaturePayload<ExtArgs>
        fields: Prisma.PlantNomenclatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantNomenclatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantNomenclaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantNomenclatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantNomenclaturePayload>
          }
          findFirst: {
            args: Prisma.PlantNomenclatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantNomenclaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantNomenclatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantNomenclaturePayload>
          }
          findMany: {
            args: Prisma.PlantNomenclatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantNomenclaturePayload>[]
          }
          create: {
            args: Prisma.PlantNomenclatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantNomenclaturePayload>
          }
          createMany: {
            args: Prisma.PlantNomenclatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlantNomenclatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantNomenclaturePayload>[]
          }
          delete: {
            args: Prisma.PlantNomenclatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantNomenclaturePayload>
          }
          update: {
            args: Prisma.PlantNomenclatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantNomenclaturePayload>
          }
          deleteMany: {
            args: Prisma.PlantNomenclatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantNomenclatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlantNomenclatureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantNomenclaturePayload>[]
          }
          upsert: {
            args: Prisma.PlantNomenclatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantNomenclaturePayload>
          }
          aggregate: {
            args: Prisma.PlantNomenclatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlantNomenclature>
          }
          groupBy: {
            args: Prisma.PlantNomenclatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantNomenclatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantNomenclatureCountArgs<ExtArgs>
            result: $Utils.Optional<PlantNomenclatureCountAggregateOutputType> | number
          }
        }
      }
      PlantTaxonomy: {
        payload: Prisma.$PlantTaxonomyPayload<ExtArgs>
        fields: Prisma.PlantTaxonomyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantTaxonomyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTaxonomyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantTaxonomyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTaxonomyPayload>
          }
          findFirst: {
            args: Prisma.PlantTaxonomyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTaxonomyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantTaxonomyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTaxonomyPayload>
          }
          findMany: {
            args: Prisma.PlantTaxonomyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTaxonomyPayload>[]
          }
          create: {
            args: Prisma.PlantTaxonomyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTaxonomyPayload>
          }
          createMany: {
            args: Prisma.PlantTaxonomyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlantTaxonomyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTaxonomyPayload>[]
          }
          delete: {
            args: Prisma.PlantTaxonomyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTaxonomyPayload>
          }
          update: {
            args: Prisma.PlantTaxonomyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTaxonomyPayload>
          }
          deleteMany: {
            args: Prisma.PlantTaxonomyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantTaxonomyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlantTaxonomyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTaxonomyPayload>[]
          }
          upsert: {
            args: Prisma.PlantTaxonomyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTaxonomyPayload>
          }
          aggregate: {
            args: Prisma.PlantTaxonomyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlantTaxonomy>
          }
          groupBy: {
            args: Prisma.PlantTaxonomyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantTaxonomyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantTaxonomyCountArgs<ExtArgs>
            result: $Utils.Optional<PlantTaxonomyCountAggregateOutputType> | number
          }
        }
      }
      PlantSynonym: {
        payload: Prisma.$PlantSynonymPayload<ExtArgs>
        fields: Prisma.PlantSynonymFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantSynonymFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantSynonymPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantSynonymFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantSynonymPayload>
          }
          findFirst: {
            args: Prisma.PlantSynonymFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantSynonymPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantSynonymFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantSynonymPayload>
          }
          findMany: {
            args: Prisma.PlantSynonymFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantSynonymPayload>[]
          }
          create: {
            args: Prisma.PlantSynonymCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantSynonymPayload>
          }
          createMany: {
            args: Prisma.PlantSynonymCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlantSynonymCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantSynonymPayload>[]
          }
          delete: {
            args: Prisma.PlantSynonymDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantSynonymPayload>
          }
          update: {
            args: Prisma.PlantSynonymUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantSynonymPayload>
          }
          deleteMany: {
            args: Prisma.PlantSynonymDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantSynonymUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlantSynonymUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantSynonymPayload>[]
          }
          upsert: {
            args: Prisma.PlantSynonymUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantSynonymPayload>
          }
          aggregate: {
            args: Prisma.PlantSynonymAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlantSynonym>
          }
          groupBy: {
            args: Prisma.PlantSynonymGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantSynonymGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantSynonymCountArgs<ExtArgs>
            result: $Utils.Optional<PlantSynonymCountAggregateOutputType> | number
          }
        }
      }
      PlantMorphology: {
        payload: Prisma.$PlantMorphologyPayload<ExtArgs>
        fields: Prisma.PlantMorphologyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantMorphologyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantMorphologyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantMorphologyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantMorphologyPayload>
          }
          findFirst: {
            args: Prisma.PlantMorphologyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantMorphologyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantMorphologyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantMorphologyPayload>
          }
          findMany: {
            args: Prisma.PlantMorphologyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantMorphologyPayload>[]
          }
          create: {
            args: Prisma.PlantMorphologyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantMorphologyPayload>
          }
          createMany: {
            args: Prisma.PlantMorphologyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlantMorphologyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantMorphologyPayload>[]
          }
          delete: {
            args: Prisma.PlantMorphologyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantMorphologyPayload>
          }
          update: {
            args: Prisma.PlantMorphologyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantMorphologyPayload>
          }
          deleteMany: {
            args: Prisma.PlantMorphologyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantMorphologyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlantMorphologyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantMorphologyPayload>[]
          }
          upsert: {
            args: Prisma.PlantMorphologyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantMorphologyPayload>
          }
          aggregate: {
            args: Prisma.PlantMorphologyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlantMorphology>
          }
          groupBy: {
            args: Prisma.PlantMorphologyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantMorphologyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantMorphologyCountArgs<ExtArgs>
            result: $Utils.Optional<PlantMorphologyCountAggregateOutputType> | number
          }
        }
      }
      PlantEcologyDistribution: {
        payload: Prisma.$PlantEcologyDistributionPayload<ExtArgs>
        fields: Prisma.PlantEcologyDistributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantEcologyDistributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantEcologyDistributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantEcologyDistributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantEcologyDistributionPayload>
          }
          findFirst: {
            args: Prisma.PlantEcologyDistributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantEcologyDistributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantEcologyDistributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantEcologyDistributionPayload>
          }
          findMany: {
            args: Prisma.PlantEcologyDistributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantEcologyDistributionPayload>[]
          }
          create: {
            args: Prisma.PlantEcologyDistributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantEcologyDistributionPayload>
          }
          createMany: {
            args: Prisma.PlantEcologyDistributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlantEcologyDistributionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantEcologyDistributionPayload>[]
          }
          delete: {
            args: Prisma.PlantEcologyDistributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantEcologyDistributionPayload>
          }
          update: {
            args: Prisma.PlantEcologyDistributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantEcologyDistributionPayload>
          }
          deleteMany: {
            args: Prisma.PlantEcologyDistributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantEcologyDistributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlantEcologyDistributionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantEcologyDistributionPayload>[]
          }
          upsert: {
            args: Prisma.PlantEcologyDistributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantEcologyDistributionPayload>
          }
          aggregate: {
            args: Prisma.PlantEcologyDistributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlantEcologyDistribution>
          }
          groupBy: {
            args: Prisma.PlantEcologyDistributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantEcologyDistributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantEcologyDistributionCountArgs<ExtArgs>
            result: $Utils.Optional<PlantEcologyDistributionCountAggregateOutputType> | number
          }
        }
      }
      PlantConservation: {
        payload: Prisma.$PlantConservationPayload<ExtArgs>
        fields: Prisma.PlantConservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantConservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantConservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantConservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantConservationPayload>
          }
          findFirst: {
            args: Prisma.PlantConservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantConservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantConservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantConservationPayload>
          }
          findMany: {
            args: Prisma.PlantConservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantConservationPayload>[]
          }
          create: {
            args: Prisma.PlantConservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantConservationPayload>
          }
          createMany: {
            args: Prisma.PlantConservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlantConservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantConservationPayload>[]
          }
          delete: {
            args: Prisma.PlantConservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantConservationPayload>
          }
          update: {
            args: Prisma.PlantConservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantConservationPayload>
          }
          deleteMany: {
            args: Prisma.PlantConservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantConservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlantConservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantConservationPayload>[]
          }
          upsert: {
            args: Prisma.PlantConservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantConservationPayload>
          }
          aggregate: {
            args: Prisma.PlantConservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlantConservation>
          }
          groupBy: {
            args: Prisma.PlantConservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantConservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantConservationCountArgs<ExtArgs>
            result: $Utils.Optional<PlantConservationCountAggregateOutputType> | number
          }
        }
      }
      BotanicalGarden: {
        payload: Prisma.$BotanicalGardenPayload<ExtArgs>
        fields: Prisma.BotanicalGardenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BotanicalGardenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotanicalGardenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BotanicalGardenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotanicalGardenPayload>
          }
          findFirst: {
            args: Prisma.BotanicalGardenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotanicalGardenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BotanicalGardenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotanicalGardenPayload>
          }
          findMany: {
            args: Prisma.BotanicalGardenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotanicalGardenPayload>[]
          }
          create: {
            args: Prisma.BotanicalGardenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotanicalGardenPayload>
          }
          createMany: {
            args: Prisma.BotanicalGardenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BotanicalGardenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotanicalGardenPayload>[]
          }
          delete: {
            args: Prisma.BotanicalGardenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotanicalGardenPayload>
          }
          update: {
            args: Prisma.BotanicalGardenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotanicalGardenPayload>
          }
          deleteMany: {
            args: Prisma.BotanicalGardenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BotanicalGardenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BotanicalGardenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotanicalGardenPayload>[]
          }
          upsert: {
            args: Prisma.BotanicalGardenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotanicalGardenPayload>
          }
          aggregate: {
            args: Prisma.BotanicalGardenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBotanicalGarden>
          }
          groupBy: {
            args: Prisma.BotanicalGardenGroupByArgs<ExtArgs>
            result: $Utils.Optional<BotanicalGardenGroupByOutputType>[]
          }
          count: {
            args: Prisma.BotanicalGardenCountArgs<ExtArgs>
            result: $Utils.Optional<BotanicalGardenCountAggregateOutputType> | number
          }
        }
      }
      MedicinalProperties: {
        payload: Prisma.$MedicinalPropertiesPayload<ExtArgs>
        fields: Prisma.MedicinalPropertiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicinalPropertiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinalPropertiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicinalPropertiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinalPropertiesPayload>
          }
          findFirst: {
            args: Prisma.MedicinalPropertiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinalPropertiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicinalPropertiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinalPropertiesPayload>
          }
          findMany: {
            args: Prisma.MedicinalPropertiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinalPropertiesPayload>[]
          }
          create: {
            args: Prisma.MedicinalPropertiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinalPropertiesPayload>
          }
          createMany: {
            args: Prisma.MedicinalPropertiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicinalPropertiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinalPropertiesPayload>[]
          }
          delete: {
            args: Prisma.MedicinalPropertiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinalPropertiesPayload>
          }
          update: {
            args: Prisma.MedicinalPropertiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinalPropertiesPayload>
          }
          deleteMany: {
            args: Prisma.MedicinalPropertiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicinalPropertiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicinalPropertiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinalPropertiesPayload>[]
          }
          upsert: {
            args: Prisma.MedicinalPropertiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinalPropertiesPayload>
          }
          aggregate: {
            args: Prisma.MedicinalPropertiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicinalProperties>
          }
          groupBy: {
            args: Prisma.MedicinalPropertiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicinalPropertiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicinalPropertiesCountArgs<ExtArgs>
            result: $Utils.Optional<MedicinalPropertiesCountAggregateOutputType> | number
          }
        }
      }
      HerbalDrugBackground: {
        payload: Prisma.$HerbalDrugBackgroundPayload<ExtArgs>
        fields: Prisma.HerbalDrugBackgroundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HerbalDrugBackgroundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbalDrugBackgroundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HerbalDrugBackgroundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbalDrugBackgroundPayload>
          }
          findFirst: {
            args: Prisma.HerbalDrugBackgroundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbalDrugBackgroundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HerbalDrugBackgroundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbalDrugBackgroundPayload>
          }
          findMany: {
            args: Prisma.HerbalDrugBackgroundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbalDrugBackgroundPayload>[]
          }
          create: {
            args: Prisma.HerbalDrugBackgroundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbalDrugBackgroundPayload>
          }
          createMany: {
            args: Prisma.HerbalDrugBackgroundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HerbalDrugBackgroundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbalDrugBackgroundPayload>[]
          }
          delete: {
            args: Prisma.HerbalDrugBackgroundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbalDrugBackgroundPayload>
          }
          update: {
            args: Prisma.HerbalDrugBackgroundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbalDrugBackgroundPayload>
          }
          deleteMany: {
            args: Prisma.HerbalDrugBackgroundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HerbalDrugBackgroundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HerbalDrugBackgroundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbalDrugBackgroundPayload>[]
          }
          upsert: {
            args: Prisma.HerbalDrugBackgroundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HerbalDrugBackgroundPayload>
          }
          aggregate: {
            args: Prisma.HerbalDrugBackgroundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHerbalDrugBackground>
          }
          groupBy: {
            args: Prisma.HerbalDrugBackgroundGroupByArgs<ExtArgs>
            result: $Utils.Optional<HerbalDrugBackgroundGroupByOutputType>[]
          }
          count: {
            args: Prisma.HerbalDrugBackgroundCountArgs<ExtArgs>
            result: $Utils.Optional<HerbalDrugBackgroundCountAggregateOutputType> | number
          }
        }
      }
      SourcingBackground: {
        payload: Prisma.$SourcingBackgroundPayload<ExtArgs>
        fields: Prisma.SourcingBackgroundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourcingBackgroundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingBackgroundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourcingBackgroundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingBackgroundPayload>
          }
          findFirst: {
            args: Prisma.SourcingBackgroundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingBackgroundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourcingBackgroundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingBackgroundPayload>
          }
          findMany: {
            args: Prisma.SourcingBackgroundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingBackgroundPayload>[]
          }
          create: {
            args: Prisma.SourcingBackgroundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingBackgroundPayload>
          }
          createMany: {
            args: Prisma.SourcingBackgroundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourcingBackgroundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingBackgroundPayload>[]
          }
          delete: {
            args: Prisma.SourcingBackgroundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingBackgroundPayload>
          }
          update: {
            args: Prisma.SourcingBackgroundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingBackgroundPayload>
          }
          deleteMany: {
            args: Prisma.SourcingBackgroundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourcingBackgroundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourcingBackgroundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingBackgroundPayload>[]
          }
          upsert: {
            args: Prisma.SourcingBackgroundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingBackgroundPayload>
          }
          aggregate: {
            args: Prisma.SourcingBackgroundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSourcingBackground>
          }
          groupBy: {
            args: Prisma.SourcingBackgroundGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourcingBackgroundGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourcingBackgroundCountArgs<ExtArgs>
            result: $Utils.Optional<SourcingBackgroundCountAggregateOutputType> | number
          }
        }
      }
      Ethnobotany: {
        payload: Prisma.$EthnobotanyPayload<ExtArgs>
        fields: Prisma.EthnobotanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EthnobotanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EthnobotanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EthnobotanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EthnobotanyPayload>
          }
          findFirst: {
            args: Prisma.EthnobotanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EthnobotanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EthnobotanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EthnobotanyPayload>
          }
          findMany: {
            args: Prisma.EthnobotanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EthnobotanyPayload>[]
          }
          create: {
            args: Prisma.EthnobotanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EthnobotanyPayload>
          }
          createMany: {
            args: Prisma.EthnobotanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EthnobotanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EthnobotanyPayload>[]
          }
          delete: {
            args: Prisma.EthnobotanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EthnobotanyPayload>
          }
          update: {
            args: Prisma.EthnobotanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EthnobotanyPayload>
          }
          deleteMany: {
            args: Prisma.EthnobotanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EthnobotanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EthnobotanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EthnobotanyPayload>[]
          }
          upsert: {
            args: Prisma.EthnobotanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EthnobotanyPayload>
          }
          aggregate: {
            args: Prisma.EthnobotanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEthnobotany>
          }
          groupBy: {
            args: Prisma.EthnobotanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<EthnobotanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.EthnobotanyCountArgs<ExtArgs>
            result: $Utils.Optional<EthnobotanyCountAggregateOutputType> | number
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
    user?: UserOmit
    plantNomenclature?: PlantNomenclatureOmit
    plantTaxonomy?: PlantTaxonomyOmit
    plantSynonym?: PlantSynonymOmit
    plantMorphology?: PlantMorphologyOmit
    plantEcologyDistribution?: PlantEcologyDistributionOmit
    plantConservation?: PlantConservationOmit
    botanicalGarden?: BotanicalGardenOmit
    medicinalProperties?: MedicinalPropertiesOmit
    herbalDrugBackground?: HerbalDrugBackgroundOmit
    sourcingBackground?: SourcingBackgroundOmit
    ethnobotany?: EthnobotanyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type PlantNomenclatureCountOutputType
   */

  export type PlantNomenclatureCountOutputType = {
    botanicalGardenList: number
    synonyms: number
    morphologies: number
    herbalDrugs: number
  }

  export type PlantNomenclatureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    botanicalGardenList?: boolean | PlantNomenclatureCountOutputTypeCountBotanicalGardenListArgs
    synonyms?: boolean | PlantNomenclatureCountOutputTypeCountSynonymsArgs
    morphologies?: boolean | PlantNomenclatureCountOutputTypeCountMorphologiesArgs
    herbalDrugs?: boolean | PlantNomenclatureCountOutputTypeCountHerbalDrugsArgs
  }

  // Custom InputTypes
  /**
   * PlantNomenclatureCountOutputType without action
   */
  export type PlantNomenclatureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantNomenclatureCountOutputType
     */
    select?: PlantNomenclatureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlantNomenclatureCountOutputType without action
   */
  export type PlantNomenclatureCountOutputTypeCountBotanicalGardenListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BotanicalGardenWhereInput
  }

  /**
   * PlantNomenclatureCountOutputType without action
   */
  export type PlantNomenclatureCountOutputTypeCountSynonymsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantSynonymWhereInput
  }

  /**
   * PlantNomenclatureCountOutputType without action
   */
  export type PlantNomenclatureCountOutputTypeCountMorphologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantMorphologyWhereInput
  }

  /**
   * PlantNomenclatureCountOutputType without action
   */
  export type PlantNomenclatureCountOutputTypeCountHerbalDrugsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HerbalDrugBackgroundWhereInput
  }


  /**
   * Count Type PlantTaxonomyCountOutputType
   */

  export type PlantTaxonomyCountOutputType = {
    plants: number
  }

  export type PlantTaxonomyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plants?: boolean | PlantTaxonomyCountOutputTypeCountPlantsArgs
  }

  // Custom InputTypes
  /**
   * PlantTaxonomyCountOutputType without action
   */
  export type PlantTaxonomyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTaxonomyCountOutputType
     */
    select?: PlantTaxonomyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlantTaxonomyCountOutputType without action
   */
  export type PlantTaxonomyCountOutputTypeCountPlantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantNomenclatureWhereInput
  }


  /**
   * Count Type PlantMorphologyCountOutputType
   */

  export type PlantMorphologyCountOutputType = {
    plants: number
  }

  export type PlantMorphologyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plants?: boolean | PlantMorphologyCountOutputTypeCountPlantsArgs
  }

  // Custom InputTypes
  /**
   * PlantMorphologyCountOutputType without action
   */
  export type PlantMorphologyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantMorphologyCountOutputType
     */
    select?: PlantMorphologyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlantMorphologyCountOutputType without action
   */
  export type PlantMorphologyCountOutputTypeCountPlantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantNomenclatureWhereInput
  }


  /**
   * Count Type BotanicalGardenCountOutputType
   */

  export type BotanicalGardenCountOutputType = {
    plants: number
  }

  export type BotanicalGardenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plants?: boolean | BotanicalGardenCountOutputTypeCountPlantsArgs
  }

  // Custom InputTypes
  /**
   * BotanicalGardenCountOutputType without action
   */
  export type BotanicalGardenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotanicalGardenCountOutputType
     */
    select?: BotanicalGardenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BotanicalGardenCountOutputType without action
   */
  export type BotanicalGardenCountOutputTypeCountPlantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantNomenclatureWhereInput
  }


  /**
   * Count Type MedicinalPropertiesCountOutputType
   */

  export type MedicinalPropertiesCountOutputType = {
    herbalDrugs: number
  }

  export type MedicinalPropertiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    herbalDrugs?: boolean | MedicinalPropertiesCountOutputTypeCountHerbalDrugsArgs
  }

  // Custom InputTypes
  /**
   * MedicinalPropertiesCountOutputType without action
   */
  export type MedicinalPropertiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinalPropertiesCountOutputType
     */
    select?: MedicinalPropertiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicinalPropertiesCountOutputType without action
   */
  export type MedicinalPropertiesCountOutputTypeCountHerbalDrugsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HerbalDrugBackgroundWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model PlantNomenclature
   */

  export type AggregatePlantNomenclature = {
    _count: PlantNomenclatureCountAggregateOutputType | null
    _avg: PlantNomenclatureAvgAggregateOutputType | null
    _sum: PlantNomenclatureSumAggregateOutputType | null
    _min: PlantNomenclatureMinAggregateOutputType | null
    _max: PlantNomenclatureMaxAggregateOutputType | null
  }

  export type PlantNomenclatureAvgAggregateOutputType = {
    internalId: number | null
    taxonomyId: number | null
  }

  export type PlantNomenclatureSumAggregateOutputType = {
    internalId: number | null
    taxonomyId: number | null
  }

  export type PlantNomenclatureMinAggregateOutputType = {
    internalId: number | null
    plantScientificName: string | null
    plantPinyin: string | null
    plantChineseName: string | null
    taxonomyId: number | null
  }

  export type PlantNomenclatureMaxAggregateOutputType = {
    internalId: number | null
    plantScientificName: string | null
    plantPinyin: string | null
    plantChineseName: string | null
    taxonomyId: number | null
  }

  export type PlantNomenclatureCountAggregateOutputType = {
    internalId: number
    plantScientificName: number
    plantCommonName: number
    plantPinyin: number
    plantChineseName: number
    taxonomyId: number
    links: number
    _all: number
  }


  export type PlantNomenclatureAvgAggregateInputType = {
    internalId?: true
    taxonomyId?: true
  }

  export type PlantNomenclatureSumAggregateInputType = {
    internalId?: true
    taxonomyId?: true
  }

  export type PlantNomenclatureMinAggregateInputType = {
    internalId?: true
    plantScientificName?: true
    plantPinyin?: true
    plantChineseName?: true
    taxonomyId?: true
  }

  export type PlantNomenclatureMaxAggregateInputType = {
    internalId?: true
    plantScientificName?: true
    plantPinyin?: true
    plantChineseName?: true
    taxonomyId?: true
  }

  export type PlantNomenclatureCountAggregateInputType = {
    internalId?: true
    plantScientificName?: true
    plantCommonName?: true
    plantPinyin?: true
    plantChineseName?: true
    taxonomyId?: true
    links?: true
    _all?: true
  }

  export type PlantNomenclatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantNomenclature to aggregate.
     */
    where?: PlantNomenclatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantNomenclatures to fetch.
     */
    orderBy?: PlantNomenclatureOrderByWithRelationInput | PlantNomenclatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantNomenclatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantNomenclatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantNomenclatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlantNomenclatures
    **/
    _count?: true | PlantNomenclatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlantNomenclatureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlantNomenclatureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantNomenclatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantNomenclatureMaxAggregateInputType
  }

  export type GetPlantNomenclatureAggregateType<T extends PlantNomenclatureAggregateArgs> = {
        [P in keyof T & keyof AggregatePlantNomenclature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlantNomenclature[P]>
      : GetScalarType<T[P], AggregatePlantNomenclature[P]>
  }




  export type PlantNomenclatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantNomenclatureWhereInput
    orderBy?: PlantNomenclatureOrderByWithAggregationInput | PlantNomenclatureOrderByWithAggregationInput[]
    by: PlantNomenclatureScalarFieldEnum[] | PlantNomenclatureScalarFieldEnum
    having?: PlantNomenclatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantNomenclatureCountAggregateInputType | true
    _avg?: PlantNomenclatureAvgAggregateInputType
    _sum?: PlantNomenclatureSumAggregateInputType
    _min?: PlantNomenclatureMinAggregateInputType
    _max?: PlantNomenclatureMaxAggregateInputType
  }

  export type PlantNomenclatureGroupByOutputType = {
    internalId: number
    plantScientificName: string
    plantCommonName: string[]
    plantPinyin: string | null
    plantChineseName: string | null
    taxonomyId: number
    links: string[]
    _count: PlantNomenclatureCountAggregateOutputType | null
    _avg: PlantNomenclatureAvgAggregateOutputType | null
    _sum: PlantNomenclatureSumAggregateOutputType | null
    _min: PlantNomenclatureMinAggregateOutputType | null
    _max: PlantNomenclatureMaxAggregateOutputType | null
  }

  type GetPlantNomenclatureGroupByPayload<T extends PlantNomenclatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantNomenclatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantNomenclatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantNomenclatureGroupByOutputType[P]>
            : GetScalarType<T[P], PlantNomenclatureGroupByOutputType[P]>
        }
      >
    >


  export type PlantNomenclatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    internalId?: boolean
    plantScientificName?: boolean
    plantCommonName?: boolean
    plantPinyin?: boolean
    plantChineseName?: boolean
    taxonomyId?: boolean
    links?: boolean
    taxonomy?: boolean | PlantTaxonomyDefaultArgs<ExtArgs>
    botanicalGardenList?: boolean | PlantNomenclature$botanicalGardenListArgs<ExtArgs>
    synonyms?: boolean | PlantNomenclature$synonymsArgs<ExtArgs>
    morphologies?: boolean | PlantNomenclature$morphologiesArgs<ExtArgs>
    ecologyDistributions?: boolean | PlantNomenclature$ecologyDistributionsArgs<ExtArgs>
    conservation?: boolean | PlantNomenclature$conservationArgs<ExtArgs>
    herbalDrugs?: boolean | PlantNomenclature$herbalDrugsArgs<ExtArgs>
    ethnobotanies?: boolean | PlantNomenclature$ethnobotaniesArgs<ExtArgs>
    _count?: boolean | PlantNomenclatureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantNomenclature"]>

  export type PlantNomenclatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    internalId?: boolean
    plantScientificName?: boolean
    plantCommonName?: boolean
    plantPinyin?: boolean
    plantChineseName?: boolean
    taxonomyId?: boolean
    links?: boolean
    taxonomy?: boolean | PlantTaxonomyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantNomenclature"]>

  export type PlantNomenclatureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    internalId?: boolean
    plantScientificName?: boolean
    plantCommonName?: boolean
    plantPinyin?: boolean
    plantChineseName?: boolean
    taxonomyId?: boolean
    links?: boolean
    taxonomy?: boolean | PlantTaxonomyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantNomenclature"]>

  export type PlantNomenclatureSelectScalar = {
    internalId?: boolean
    plantScientificName?: boolean
    plantCommonName?: boolean
    plantPinyin?: boolean
    plantChineseName?: boolean
    taxonomyId?: boolean
    links?: boolean
  }

  export type PlantNomenclatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"internalId" | "plantScientificName" | "plantCommonName" | "plantPinyin" | "plantChineseName" | "taxonomyId" | "links", ExtArgs["result"]["plantNomenclature"]>
  export type PlantNomenclatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxonomy?: boolean | PlantTaxonomyDefaultArgs<ExtArgs>
    botanicalGardenList?: boolean | PlantNomenclature$botanicalGardenListArgs<ExtArgs>
    synonyms?: boolean | PlantNomenclature$synonymsArgs<ExtArgs>
    morphologies?: boolean | PlantNomenclature$morphologiesArgs<ExtArgs>
    ecologyDistributions?: boolean | PlantNomenclature$ecologyDistributionsArgs<ExtArgs>
    conservation?: boolean | PlantNomenclature$conservationArgs<ExtArgs>
    herbalDrugs?: boolean | PlantNomenclature$herbalDrugsArgs<ExtArgs>
    ethnobotanies?: boolean | PlantNomenclature$ethnobotaniesArgs<ExtArgs>
    _count?: boolean | PlantNomenclatureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlantNomenclatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxonomy?: boolean | PlantTaxonomyDefaultArgs<ExtArgs>
  }
  export type PlantNomenclatureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxonomy?: boolean | PlantTaxonomyDefaultArgs<ExtArgs>
  }

  export type $PlantNomenclaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlantNomenclature"
    objects: {
      taxonomy: Prisma.$PlantTaxonomyPayload<ExtArgs>
      botanicalGardenList: Prisma.$BotanicalGardenPayload<ExtArgs>[]
      synonyms: Prisma.$PlantSynonymPayload<ExtArgs>[]
      morphologies: Prisma.$PlantMorphologyPayload<ExtArgs>[]
      ecologyDistributions: Prisma.$PlantEcologyDistributionPayload<ExtArgs> | null
      conservation: Prisma.$PlantConservationPayload<ExtArgs> | null
      herbalDrugs: Prisma.$HerbalDrugBackgroundPayload<ExtArgs>[]
      ethnobotanies: Prisma.$EthnobotanyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      internalId: number
      plantScientificName: string
      plantCommonName: string[]
      plantPinyin: string | null
      plantChineseName: string | null
      taxonomyId: number
      links: string[]
    }, ExtArgs["result"]["plantNomenclature"]>
    composites: {}
  }

  type PlantNomenclatureGetPayload<S extends boolean | null | undefined | PlantNomenclatureDefaultArgs> = $Result.GetResult<Prisma.$PlantNomenclaturePayload, S>

  type PlantNomenclatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlantNomenclatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlantNomenclatureCountAggregateInputType | true
    }

  export interface PlantNomenclatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlantNomenclature'], meta: { name: 'PlantNomenclature' } }
    /**
     * Find zero or one PlantNomenclature that matches the filter.
     * @param {PlantNomenclatureFindUniqueArgs} args - Arguments to find a PlantNomenclature
     * @example
     * // Get one PlantNomenclature
     * const plantNomenclature = await prisma.plantNomenclature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantNomenclatureFindUniqueArgs>(args: SelectSubset<T, PlantNomenclatureFindUniqueArgs<ExtArgs>>): Prisma__PlantNomenclatureClient<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlantNomenclature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlantNomenclatureFindUniqueOrThrowArgs} args - Arguments to find a PlantNomenclature
     * @example
     * // Get one PlantNomenclature
     * const plantNomenclature = await prisma.plantNomenclature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantNomenclatureFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantNomenclatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantNomenclatureClient<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlantNomenclature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantNomenclatureFindFirstArgs} args - Arguments to find a PlantNomenclature
     * @example
     * // Get one PlantNomenclature
     * const plantNomenclature = await prisma.plantNomenclature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantNomenclatureFindFirstArgs>(args?: SelectSubset<T, PlantNomenclatureFindFirstArgs<ExtArgs>>): Prisma__PlantNomenclatureClient<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlantNomenclature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantNomenclatureFindFirstOrThrowArgs} args - Arguments to find a PlantNomenclature
     * @example
     * // Get one PlantNomenclature
     * const plantNomenclature = await prisma.plantNomenclature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantNomenclatureFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantNomenclatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantNomenclatureClient<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlantNomenclatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantNomenclatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlantNomenclatures
     * const plantNomenclatures = await prisma.plantNomenclature.findMany()
     * 
     * // Get first 10 PlantNomenclatures
     * const plantNomenclatures = await prisma.plantNomenclature.findMany({ take: 10 })
     * 
     * // Only select the `internalId`
     * const plantNomenclatureWithInternalIdOnly = await prisma.plantNomenclature.findMany({ select: { internalId: true } })
     * 
     */
    findMany<T extends PlantNomenclatureFindManyArgs>(args?: SelectSubset<T, PlantNomenclatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlantNomenclature.
     * @param {PlantNomenclatureCreateArgs} args - Arguments to create a PlantNomenclature.
     * @example
     * // Create one PlantNomenclature
     * const PlantNomenclature = await prisma.plantNomenclature.create({
     *   data: {
     *     // ... data to create a PlantNomenclature
     *   }
     * })
     * 
     */
    create<T extends PlantNomenclatureCreateArgs>(args: SelectSubset<T, PlantNomenclatureCreateArgs<ExtArgs>>): Prisma__PlantNomenclatureClient<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlantNomenclatures.
     * @param {PlantNomenclatureCreateManyArgs} args - Arguments to create many PlantNomenclatures.
     * @example
     * // Create many PlantNomenclatures
     * const plantNomenclature = await prisma.plantNomenclature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantNomenclatureCreateManyArgs>(args?: SelectSubset<T, PlantNomenclatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlantNomenclatures and returns the data saved in the database.
     * @param {PlantNomenclatureCreateManyAndReturnArgs} args - Arguments to create many PlantNomenclatures.
     * @example
     * // Create many PlantNomenclatures
     * const plantNomenclature = await prisma.plantNomenclature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlantNomenclatures and only return the `internalId`
     * const plantNomenclatureWithInternalIdOnly = await prisma.plantNomenclature.createManyAndReturn({
     *   select: { internalId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlantNomenclatureCreateManyAndReturnArgs>(args?: SelectSubset<T, PlantNomenclatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlantNomenclature.
     * @param {PlantNomenclatureDeleteArgs} args - Arguments to delete one PlantNomenclature.
     * @example
     * // Delete one PlantNomenclature
     * const PlantNomenclature = await prisma.plantNomenclature.delete({
     *   where: {
     *     // ... filter to delete one PlantNomenclature
     *   }
     * })
     * 
     */
    delete<T extends PlantNomenclatureDeleteArgs>(args: SelectSubset<T, PlantNomenclatureDeleteArgs<ExtArgs>>): Prisma__PlantNomenclatureClient<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlantNomenclature.
     * @param {PlantNomenclatureUpdateArgs} args - Arguments to update one PlantNomenclature.
     * @example
     * // Update one PlantNomenclature
     * const plantNomenclature = await prisma.plantNomenclature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantNomenclatureUpdateArgs>(args: SelectSubset<T, PlantNomenclatureUpdateArgs<ExtArgs>>): Prisma__PlantNomenclatureClient<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlantNomenclatures.
     * @param {PlantNomenclatureDeleteManyArgs} args - Arguments to filter PlantNomenclatures to delete.
     * @example
     * // Delete a few PlantNomenclatures
     * const { count } = await prisma.plantNomenclature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantNomenclatureDeleteManyArgs>(args?: SelectSubset<T, PlantNomenclatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlantNomenclatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantNomenclatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlantNomenclatures
     * const plantNomenclature = await prisma.plantNomenclature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantNomenclatureUpdateManyArgs>(args: SelectSubset<T, PlantNomenclatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlantNomenclatures and returns the data updated in the database.
     * @param {PlantNomenclatureUpdateManyAndReturnArgs} args - Arguments to update many PlantNomenclatures.
     * @example
     * // Update many PlantNomenclatures
     * const plantNomenclature = await prisma.plantNomenclature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlantNomenclatures and only return the `internalId`
     * const plantNomenclatureWithInternalIdOnly = await prisma.plantNomenclature.updateManyAndReturn({
     *   select: { internalId: true },
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
    updateManyAndReturn<T extends PlantNomenclatureUpdateManyAndReturnArgs>(args: SelectSubset<T, PlantNomenclatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlantNomenclature.
     * @param {PlantNomenclatureUpsertArgs} args - Arguments to update or create a PlantNomenclature.
     * @example
     * // Update or create a PlantNomenclature
     * const plantNomenclature = await prisma.plantNomenclature.upsert({
     *   create: {
     *     // ... data to create a PlantNomenclature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlantNomenclature we want to update
     *   }
     * })
     */
    upsert<T extends PlantNomenclatureUpsertArgs>(args: SelectSubset<T, PlantNomenclatureUpsertArgs<ExtArgs>>): Prisma__PlantNomenclatureClient<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlantNomenclatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantNomenclatureCountArgs} args - Arguments to filter PlantNomenclatures to count.
     * @example
     * // Count the number of PlantNomenclatures
     * const count = await prisma.plantNomenclature.count({
     *   where: {
     *     // ... the filter for the PlantNomenclatures we want to count
     *   }
     * })
    **/
    count<T extends PlantNomenclatureCountArgs>(
      args?: Subset<T, PlantNomenclatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantNomenclatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlantNomenclature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantNomenclatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlantNomenclatureAggregateArgs>(args: Subset<T, PlantNomenclatureAggregateArgs>): Prisma.PrismaPromise<GetPlantNomenclatureAggregateType<T>>

    /**
     * Group by PlantNomenclature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantNomenclatureGroupByArgs} args - Group by arguments.
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
      T extends PlantNomenclatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantNomenclatureGroupByArgs['orderBy'] }
        : { orderBy?: PlantNomenclatureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlantNomenclatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantNomenclatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlantNomenclature model
   */
  readonly fields: PlantNomenclatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlantNomenclature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantNomenclatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taxonomy<T extends PlantTaxonomyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantTaxonomyDefaultArgs<ExtArgs>>): Prisma__PlantTaxonomyClient<$Result.GetResult<Prisma.$PlantTaxonomyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    botanicalGardenList<T extends PlantNomenclature$botanicalGardenListArgs<ExtArgs> = {}>(args?: Subset<T, PlantNomenclature$botanicalGardenListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotanicalGardenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    synonyms<T extends PlantNomenclature$synonymsArgs<ExtArgs> = {}>(args?: Subset<T, PlantNomenclature$synonymsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantSynonymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    morphologies<T extends PlantNomenclature$morphologiesArgs<ExtArgs> = {}>(args?: Subset<T, PlantNomenclature$morphologiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantMorphologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ecologyDistributions<T extends PlantNomenclature$ecologyDistributionsArgs<ExtArgs> = {}>(args?: Subset<T, PlantNomenclature$ecologyDistributionsArgs<ExtArgs>>): Prisma__PlantEcologyDistributionClient<$Result.GetResult<Prisma.$PlantEcologyDistributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    conservation<T extends PlantNomenclature$conservationArgs<ExtArgs> = {}>(args?: Subset<T, PlantNomenclature$conservationArgs<ExtArgs>>): Prisma__PlantConservationClient<$Result.GetResult<Prisma.$PlantConservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    herbalDrugs<T extends PlantNomenclature$herbalDrugsArgs<ExtArgs> = {}>(args?: Subset<T, PlantNomenclature$herbalDrugsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HerbalDrugBackgroundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ethnobotanies<T extends PlantNomenclature$ethnobotaniesArgs<ExtArgs> = {}>(args?: Subset<T, PlantNomenclature$ethnobotaniesArgs<ExtArgs>>): Prisma__EthnobotanyClient<$Result.GetResult<Prisma.$EthnobotanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlantNomenclature model
   */
  interface PlantNomenclatureFieldRefs {
    readonly internalId: FieldRef<"PlantNomenclature", 'Int'>
    readonly plantScientificName: FieldRef<"PlantNomenclature", 'String'>
    readonly plantCommonName: FieldRef<"PlantNomenclature", 'String[]'>
    readonly plantPinyin: FieldRef<"PlantNomenclature", 'String'>
    readonly plantChineseName: FieldRef<"PlantNomenclature", 'String'>
    readonly taxonomyId: FieldRef<"PlantNomenclature", 'Int'>
    readonly links: FieldRef<"PlantNomenclature", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * PlantNomenclature findUnique
   */
  export type PlantNomenclatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantNomenclature
     */
    select?: PlantNomenclatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantNomenclature
     */
    omit?: PlantNomenclatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantNomenclatureInclude<ExtArgs> | null
    /**
     * Filter, which PlantNomenclature to fetch.
     */
    where: PlantNomenclatureWhereUniqueInput
  }

  /**
   * PlantNomenclature findUniqueOrThrow
   */
  export type PlantNomenclatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantNomenclature
     */
    select?: PlantNomenclatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantNomenclature
     */
    omit?: PlantNomenclatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantNomenclatureInclude<ExtArgs> | null
    /**
     * Filter, which PlantNomenclature to fetch.
     */
    where: PlantNomenclatureWhereUniqueInput
  }

  /**
   * PlantNomenclature findFirst
   */
  export type PlantNomenclatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantNomenclature
     */
    select?: PlantNomenclatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantNomenclature
     */
    omit?: PlantNomenclatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantNomenclatureInclude<ExtArgs> | null
    /**
     * Filter, which PlantNomenclature to fetch.
     */
    where?: PlantNomenclatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantNomenclatures to fetch.
     */
    orderBy?: PlantNomenclatureOrderByWithRelationInput | PlantNomenclatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantNomenclatures.
     */
    cursor?: PlantNomenclatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantNomenclatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantNomenclatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantNomenclatures.
     */
    distinct?: PlantNomenclatureScalarFieldEnum | PlantNomenclatureScalarFieldEnum[]
  }

  /**
   * PlantNomenclature findFirstOrThrow
   */
  export type PlantNomenclatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantNomenclature
     */
    select?: PlantNomenclatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantNomenclature
     */
    omit?: PlantNomenclatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantNomenclatureInclude<ExtArgs> | null
    /**
     * Filter, which PlantNomenclature to fetch.
     */
    where?: PlantNomenclatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantNomenclatures to fetch.
     */
    orderBy?: PlantNomenclatureOrderByWithRelationInput | PlantNomenclatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantNomenclatures.
     */
    cursor?: PlantNomenclatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantNomenclatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantNomenclatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantNomenclatures.
     */
    distinct?: PlantNomenclatureScalarFieldEnum | PlantNomenclatureScalarFieldEnum[]
  }

  /**
   * PlantNomenclature findMany
   */
  export type PlantNomenclatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantNomenclature
     */
    select?: PlantNomenclatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantNomenclature
     */
    omit?: PlantNomenclatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantNomenclatureInclude<ExtArgs> | null
    /**
     * Filter, which PlantNomenclatures to fetch.
     */
    where?: PlantNomenclatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantNomenclatures to fetch.
     */
    orderBy?: PlantNomenclatureOrderByWithRelationInput | PlantNomenclatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlantNomenclatures.
     */
    cursor?: PlantNomenclatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantNomenclatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantNomenclatures.
     */
    skip?: number
    distinct?: PlantNomenclatureScalarFieldEnum | PlantNomenclatureScalarFieldEnum[]
  }

  /**
   * PlantNomenclature create
   */
  export type PlantNomenclatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantNomenclature
     */
    select?: PlantNomenclatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantNomenclature
     */
    omit?: PlantNomenclatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantNomenclatureInclude<ExtArgs> | null
    /**
     * The data needed to create a PlantNomenclature.
     */
    data: XOR<PlantNomenclatureCreateInput, PlantNomenclatureUncheckedCreateInput>
  }

  /**
   * PlantNomenclature createMany
   */
  export type PlantNomenclatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlantNomenclatures.
     */
    data: PlantNomenclatureCreateManyInput | PlantNomenclatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlantNomenclature createManyAndReturn
   */
  export type PlantNomenclatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantNomenclature
     */
    select?: PlantNomenclatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlantNomenclature
     */
    omit?: PlantNomenclatureOmit<ExtArgs> | null
    /**
     * The data used to create many PlantNomenclatures.
     */
    data: PlantNomenclatureCreateManyInput | PlantNomenclatureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantNomenclatureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlantNomenclature update
   */
  export type PlantNomenclatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantNomenclature
     */
    select?: PlantNomenclatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantNomenclature
     */
    omit?: PlantNomenclatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantNomenclatureInclude<ExtArgs> | null
    /**
     * The data needed to update a PlantNomenclature.
     */
    data: XOR<PlantNomenclatureUpdateInput, PlantNomenclatureUncheckedUpdateInput>
    /**
     * Choose, which PlantNomenclature to update.
     */
    where: PlantNomenclatureWhereUniqueInput
  }

  /**
   * PlantNomenclature updateMany
   */
  export type PlantNomenclatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlantNomenclatures.
     */
    data: XOR<PlantNomenclatureUpdateManyMutationInput, PlantNomenclatureUncheckedUpdateManyInput>
    /**
     * Filter which PlantNomenclatures to update
     */
    where?: PlantNomenclatureWhereInput
    /**
     * Limit how many PlantNomenclatures to update.
     */
    limit?: number
  }

  /**
   * PlantNomenclature updateManyAndReturn
   */
  export type PlantNomenclatureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantNomenclature
     */
    select?: PlantNomenclatureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlantNomenclature
     */
    omit?: PlantNomenclatureOmit<ExtArgs> | null
    /**
     * The data used to update PlantNomenclatures.
     */
    data: XOR<PlantNomenclatureUpdateManyMutationInput, PlantNomenclatureUncheckedUpdateManyInput>
    /**
     * Filter which PlantNomenclatures to update
     */
    where?: PlantNomenclatureWhereInput
    /**
     * Limit how many PlantNomenclatures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantNomenclatureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlantNomenclature upsert
   */
  export type PlantNomenclatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantNomenclature
     */
    select?: PlantNomenclatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantNomenclature
     */
    omit?: PlantNomenclatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantNomenclatureInclude<ExtArgs> | null
    /**
     * The filter to search for the PlantNomenclature to update in case it exists.
     */
    where: PlantNomenclatureWhereUniqueInput
    /**
     * In case the PlantNomenclature found by the `where` argument doesn't exist, create a new PlantNomenclature with this data.
     */
    create: XOR<PlantNomenclatureCreateInput, PlantNomenclatureUncheckedCreateInput>
    /**
     * In case the PlantNomenclature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantNomenclatureUpdateInput, PlantNomenclatureUncheckedUpdateInput>
  }

  /**
   * PlantNomenclature delete
   */
  export type PlantNomenclatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantNomenclature
     */
    select?: PlantNomenclatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantNomenclature
     */
    omit?: PlantNomenclatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantNomenclatureInclude<ExtArgs> | null
    /**
     * Filter which PlantNomenclature to delete.
     */
    where: PlantNomenclatureWhereUniqueInput
  }

  /**
   * PlantNomenclature deleteMany
   */
  export type PlantNomenclatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantNomenclatures to delete
     */
    where?: PlantNomenclatureWhereInput
    /**
     * Limit how many PlantNomenclatures to delete.
     */
    limit?: number
  }

  /**
   * PlantNomenclature.botanicalGardenList
   */
  export type PlantNomenclature$botanicalGardenListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotanicalGarden
     */
    select?: BotanicalGardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotanicalGarden
     */
    omit?: BotanicalGardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotanicalGardenInclude<ExtArgs> | null
    where?: BotanicalGardenWhereInput
    orderBy?: BotanicalGardenOrderByWithRelationInput | BotanicalGardenOrderByWithRelationInput[]
    cursor?: BotanicalGardenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BotanicalGardenScalarFieldEnum | BotanicalGardenScalarFieldEnum[]
  }

  /**
   * PlantNomenclature.synonyms
   */
  export type PlantNomenclature$synonymsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantSynonym
     */
    select?: PlantSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantSynonym
     */
    omit?: PlantSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantSynonymInclude<ExtArgs> | null
    where?: PlantSynonymWhereInput
    orderBy?: PlantSynonymOrderByWithRelationInput | PlantSynonymOrderByWithRelationInput[]
    cursor?: PlantSynonymWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlantSynonymScalarFieldEnum | PlantSynonymScalarFieldEnum[]
  }

  /**
   * PlantNomenclature.morphologies
   */
  export type PlantNomenclature$morphologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantMorphology
     */
    select?: PlantMorphologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantMorphology
     */
    omit?: PlantMorphologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantMorphologyInclude<ExtArgs> | null
    where?: PlantMorphologyWhereInput
    orderBy?: PlantMorphologyOrderByWithRelationInput | PlantMorphologyOrderByWithRelationInput[]
    cursor?: PlantMorphologyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlantMorphologyScalarFieldEnum | PlantMorphologyScalarFieldEnum[]
  }

  /**
   * PlantNomenclature.ecologyDistributions
   */
  export type PlantNomenclature$ecologyDistributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantEcologyDistribution
     */
    select?: PlantEcologyDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantEcologyDistribution
     */
    omit?: PlantEcologyDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantEcologyDistributionInclude<ExtArgs> | null
    where?: PlantEcologyDistributionWhereInput
  }

  /**
   * PlantNomenclature.conservation
   */
  export type PlantNomenclature$conservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantConservation
     */
    select?: PlantConservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantConservation
     */
    omit?: PlantConservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantConservationInclude<ExtArgs> | null
    where?: PlantConservationWhereInput
  }

  /**
   * PlantNomenclature.herbalDrugs
   */
  export type PlantNomenclature$herbalDrugsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbalDrugBackground
     */
    select?: HerbalDrugBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbalDrugBackground
     */
    omit?: HerbalDrugBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HerbalDrugBackgroundInclude<ExtArgs> | null
    where?: HerbalDrugBackgroundWhereInput
    orderBy?: HerbalDrugBackgroundOrderByWithRelationInput | HerbalDrugBackgroundOrderByWithRelationInput[]
    cursor?: HerbalDrugBackgroundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HerbalDrugBackgroundScalarFieldEnum | HerbalDrugBackgroundScalarFieldEnum[]
  }

  /**
   * PlantNomenclature.ethnobotanies
   */
  export type PlantNomenclature$ethnobotaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ethnobotany
     */
    select?: EthnobotanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ethnobotany
     */
    omit?: EthnobotanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EthnobotanyInclude<ExtArgs> | null
    where?: EthnobotanyWhereInput
  }

  /**
   * PlantNomenclature without action
   */
  export type PlantNomenclatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantNomenclature
     */
    select?: PlantNomenclatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantNomenclature
     */
    omit?: PlantNomenclatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantNomenclatureInclude<ExtArgs> | null
  }


  /**
   * Model PlantTaxonomy
   */

  export type AggregatePlantTaxonomy = {
    _count: PlantTaxonomyCountAggregateOutputType | null
    _avg: PlantTaxonomyAvgAggregateOutputType | null
    _sum: PlantTaxonomySumAggregateOutputType | null
    _min: PlantTaxonomyMinAggregateOutputType | null
    _max: PlantTaxonomyMaxAggregateOutputType | null
  }

  export type PlantTaxonomyAvgAggregateOutputType = {
    id: number | null
  }

  export type PlantTaxonomySumAggregateOutputType = {
    id: number | null
  }

  export type PlantTaxonomyMinAggregateOutputType = {
    id: number | null
    class: string | null
    family: string | null
    vascular: boolean | null
  }

  export type PlantTaxonomyMaxAggregateOutputType = {
    id: number | null
    class: string | null
    family: string | null
    vascular: boolean | null
  }

  export type PlantTaxonomyCountAggregateOutputType = {
    id: number
    class: number
    family: number
    vascular: number
    _all: number
  }


  export type PlantTaxonomyAvgAggregateInputType = {
    id?: true
  }

  export type PlantTaxonomySumAggregateInputType = {
    id?: true
  }

  export type PlantTaxonomyMinAggregateInputType = {
    id?: true
    class?: true
    family?: true
    vascular?: true
  }

  export type PlantTaxonomyMaxAggregateInputType = {
    id?: true
    class?: true
    family?: true
    vascular?: true
  }

  export type PlantTaxonomyCountAggregateInputType = {
    id?: true
    class?: true
    family?: true
    vascular?: true
    _all?: true
  }

  export type PlantTaxonomyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantTaxonomy to aggregate.
     */
    where?: PlantTaxonomyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantTaxonomies to fetch.
     */
    orderBy?: PlantTaxonomyOrderByWithRelationInput | PlantTaxonomyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantTaxonomyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantTaxonomies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantTaxonomies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlantTaxonomies
    **/
    _count?: true | PlantTaxonomyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlantTaxonomyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlantTaxonomySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantTaxonomyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantTaxonomyMaxAggregateInputType
  }

  export type GetPlantTaxonomyAggregateType<T extends PlantTaxonomyAggregateArgs> = {
        [P in keyof T & keyof AggregatePlantTaxonomy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlantTaxonomy[P]>
      : GetScalarType<T[P], AggregatePlantTaxonomy[P]>
  }




  export type PlantTaxonomyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantTaxonomyWhereInput
    orderBy?: PlantTaxonomyOrderByWithAggregationInput | PlantTaxonomyOrderByWithAggregationInput[]
    by: PlantTaxonomyScalarFieldEnum[] | PlantTaxonomyScalarFieldEnum
    having?: PlantTaxonomyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantTaxonomyCountAggregateInputType | true
    _avg?: PlantTaxonomyAvgAggregateInputType
    _sum?: PlantTaxonomySumAggregateInputType
    _min?: PlantTaxonomyMinAggregateInputType
    _max?: PlantTaxonomyMaxAggregateInputType
  }

  export type PlantTaxonomyGroupByOutputType = {
    id: number
    class: string | null
    family: string
    vascular: boolean | null
    _count: PlantTaxonomyCountAggregateOutputType | null
    _avg: PlantTaxonomyAvgAggregateOutputType | null
    _sum: PlantTaxonomySumAggregateOutputType | null
    _min: PlantTaxonomyMinAggregateOutputType | null
    _max: PlantTaxonomyMaxAggregateOutputType | null
  }

  type GetPlantTaxonomyGroupByPayload<T extends PlantTaxonomyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantTaxonomyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantTaxonomyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantTaxonomyGroupByOutputType[P]>
            : GetScalarType<T[P], PlantTaxonomyGroupByOutputType[P]>
        }
      >
    >


  export type PlantTaxonomySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class?: boolean
    family?: boolean
    vascular?: boolean
    plants?: boolean | PlantTaxonomy$plantsArgs<ExtArgs>
    _count?: boolean | PlantTaxonomyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantTaxonomy"]>

  export type PlantTaxonomySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class?: boolean
    family?: boolean
    vascular?: boolean
  }, ExtArgs["result"]["plantTaxonomy"]>

  export type PlantTaxonomySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class?: boolean
    family?: boolean
    vascular?: boolean
  }, ExtArgs["result"]["plantTaxonomy"]>

  export type PlantTaxonomySelectScalar = {
    id?: boolean
    class?: boolean
    family?: boolean
    vascular?: boolean
  }

  export type PlantTaxonomyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "class" | "family" | "vascular", ExtArgs["result"]["plantTaxonomy"]>
  export type PlantTaxonomyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plants?: boolean | PlantTaxonomy$plantsArgs<ExtArgs>
    _count?: boolean | PlantTaxonomyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlantTaxonomyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlantTaxonomyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlantTaxonomyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlantTaxonomy"
    objects: {
      plants: Prisma.$PlantNomenclaturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      class: string | null
      family: string
      vascular: boolean | null
    }, ExtArgs["result"]["plantTaxonomy"]>
    composites: {}
  }

  type PlantTaxonomyGetPayload<S extends boolean | null | undefined | PlantTaxonomyDefaultArgs> = $Result.GetResult<Prisma.$PlantTaxonomyPayload, S>

  type PlantTaxonomyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlantTaxonomyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlantTaxonomyCountAggregateInputType | true
    }

  export interface PlantTaxonomyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlantTaxonomy'], meta: { name: 'PlantTaxonomy' } }
    /**
     * Find zero or one PlantTaxonomy that matches the filter.
     * @param {PlantTaxonomyFindUniqueArgs} args - Arguments to find a PlantTaxonomy
     * @example
     * // Get one PlantTaxonomy
     * const plantTaxonomy = await prisma.plantTaxonomy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantTaxonomyFindUniqueArgs>(args: SelectSubset<T, PlantTaxonomyFindUniqueArgs<ExtArgs>>): Prisma__PlantTaxonomyClient<$Result.GetResult<Prisma.$PlantTaxonomyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlantTaxonomy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlantTaxonomyFindUniqueOrThrowArgs} args - Arguments to find a PlantTaxonomy
     * @example
     * // Get one PlantTaxonomy
     * const plantTaxonomy = await prisma.plantTaxonomy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantTaxonomyFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantTaxonomyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantTaxonomyClient<$Result.GetResult<Prisma.$PlantTaxonomyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlantTaxonomy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantTaxonomyFindFirstArgs} args - Arguments to find a PlantTaxonomy
     * @example
     * // Get one PlantTaxonomy
     * const plantTaxonomy = await prisma.plantTaxonomy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantTaxonomyFindFirstArgs>(args?: SelectSubset<T, PlantTaxonomyFindFirstArgs<ExtArgs>>): Prisma__PlantTaxonomyClient<$Result.GetResult<Prisma.$PlantTaxonomyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlantTaxonomy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantTaxonomyFindFirstOrThrowArgs} args - Arguments to find a PlantTaxonomy
     * @example
     * // Get one PlantTaxonomy
     * const plantTaxonomy = await prisma.plantTaxonomy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantTaxonomyFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantTaxonomyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantTaxonomyClient<$Result.GetResult<Prisma.$PlantTaxonomyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlantTaxonomies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantTaxonomyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlantTaxonomies
     * const plantTaxonomies = await prisma.plantTaxonomy.findMany()
     * 
     * // Get first 10 PlantTaxonomies
     * const plantTaxonomies = await prisma.plantTaxonomy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantTaxonomyWithIdOnly = await prisma.plantTaxonomy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlantTaxonomyFindManyArgs>(args?: SelectSubset<T, PlantTaxonomyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantTaxonomyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlantTaxonomy.
     * @param {PlantTaxonomyCreateArgs} args - Arguments to create a PlantTaxonomy.
     * @example
     * // Create one PlantTaxonomy
     * const PlantTaxonomy = await prisma.plantTaxonomy.create({
     *   data: {
     *     // ... data to create a PlantTaxonomy
     *   }
     * })
     * 
     */
    create<T extends PlantTaxonomyCreateArgs>(args: SelectSubset<T, PlantTaxonomyCreateArgs<ExtArgs>>): Prisma__PlantTaxonomyClient<$Result.GetResult<Prisma.$PlantTaxonomyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlantTaxonomies.
     * @param {PlantTaxonomyCreateManyArgs} args - Arguments to create many PlantTaxonomies.
     * @example
     * // Create many PlantTaxonomies
     * const plantTaxonomy = await prisma.plantTaxonomy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantTaxonomyCreateManyArgs>(args?: SelectSubset<T, PlantTaxonomyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlantTaxonomies and returns the data saved in the database.
     * @param {PlantTaxonomyCreateManyAndReturnArgs} args - Arguments to create many PlantTaxonomies.
     * @example
     * // Create many PlantTaxonomies
     * const plantTaxonomy = await prisma.plantTaxonomy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlantTaxonomies and only return the `id`
     * const plantTaxonomyWithIdOnly = await prisma.plantTaxonomy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlantTaxonomyCreateManyAndReturnArgs>(args?: SelectSubset<T, PlantTaxonomyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantTaxonomyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlantTaxonomy.
     * @param {PlantTaxonomyDeleteArgs} args - Arguments to delete one PlantTaxonomy.
     * @example
     * // Delete one PlantTaxonomy
     * const PlantTaxonomy = await prisma.plantTaxonomy.delete({
     *   where: {
     *     // ... filter to delete one PlantTaxonomy
     *   }
     * })
     * 
     */
    delete<T extends PlantTaxonomyDeleteArgs>(args: SelectSubset<T, PlantTaxonomyDeleteArgs<ExtArgs>>): Prisma__PlantTaxonomyClient<$Result.GetResult<Prisma.$PlantTaxonomyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlantTaxonomy.
     * @param {PlantTaxonomyUpdateArgs} args - Arguments to update one PlantTaxonomy.
     * @example
     * // Update one PlantTaxonomy
     * const plantTaxonomy = await prisma.plantTaxonomy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantTaxonomyUpdateArgs>(args: SelectSubset<T, PlantTaxonomyUpdateArgs<ExtArgs>>): Prisma__PlantTaxonomyClient<$Result.GetResult<Prisma.$PlantTaxonomyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlantTaxonomies.
     * @param {PlantTaxonomyDeleteManyArgs} args - Arguments to filter PlantTaxonomies to delete.
     * @example
     * // Delete a few PlantTaxonomies
     * const { count } = await prisma.plantTaxonomy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantTaxonomyDeleteManyArgs>(args?: SelectSubset<T, PlantTaxonomyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlantTaxonomies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantTaxonomyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlantTaxonomies
     * const plantTaxonomy = await prisma.plantTaxonomy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantTaxonomyUpdateManyArgs>(args: SelectSubset<T, PlantTaxonomyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlantTaxonomies and returns the data updated in the database.
     * @param {PlantTaxonomyUpdateManyAndReturnArgs} args - Arguments to update many PlantTaxonomies.
     * @example
     * // Update many PlantTaxonomies
     * const plantTaxonomy = await prisma.plantTaxonomy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlantTaxonomies and only return the `id`
     * const plantTaxonomyWithIdOnly = await prisma.plantTaxonomy.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlantTaxonomyUpdateManyAndReturnArgs>(args: SelectSubset<T, PlantTaxonomyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantTaxonomyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlantTaxonomy.
     * @param {PlantTaxonomyUpsertArgs} args - Arguments to update or create a PlantTaxonomy.
     * @example
     * // Update or create a PlantTaxonomy
     * const plantTaxonomy = await prisma.plantTaxonomy.upsert({
     *   create: {
     *     // ... data to create a PlantTaxonomy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlantTaxonomy we want to update
     *   }
     * })
     */
    upsert<T extends PlantTaxonomyUpsertArgs>(args: SelectSubset<T, PlantTaxonomyUpsertArgs<ExtArgs>>): Prisma__PlantTaxonomyClient<$Result.GetResult<Prisma.$PlantTaxonomyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlantTaxonomies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantTaxonomyCountArgs} args - Arguments to filter PlantTaxonomies to count.
     * @example
     * // Count the number of PlantTaxonomies
     * const count = await prisma.plantTaxonomy.count({
     *   where: {
     *     // ... the filter for the PlantTaxonomies we want to count
     *   }
     * })
    **/
    count<T extends PlantTaxonomyCountArgs>(
      args?: Subset<T, PlantTaxonomyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantTaxonomyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlantTaxonomy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantTaxonomyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlantTaxonomyAggregateArgs>(args: Subset<T, PlantTaxonomyAggregateArgs>): Prisma.PrismaPromise<GetPlantTaxonomyAggregateType<T>>

    /**
     * Group by PlantTaxonomy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantTaxonomyGroupByArgs} args - Group by arguments.
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
      T extends PlantTaxonomyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantTaxonomyGroupByArgs['orderBy'] }
        : { orderBy?: PlantTaxonomyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlantTaxonomyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantTaxonomyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlantTaxonomy model
   */
  readonly fields: PlantTaxonomyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlantTaxonomy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantTaxonomyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plants<T extends PlantTaxonomy$plantsArgs<ExtArgs> = {}>(args?: Subset<T, PlantTaxonomy$plantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PlantTaxonomy model
   */
  interface PlantTaxonomyFieldRefs {
    readonly id: FieldRef<"PlantTaxonomy", 'Int'>
    readonly class: FieldRef<"PlantTaxonomy", 'String'>
    readonly family: FieldRef<"PlantTaxonomy", 'String'>
    readonly vascular: FieldRef<"PlantTaxonomy", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PlantTaxonomy findUnique
   */
  export type PlantTaxonomyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTaxonomy
     */
    select?: PlantTaxonomySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantTaxonomy
     */
    omit?: PlantTaxonomyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTaxonomyInclude<ExtArgs> | null
    /**
     * Filter, which PlantTaxonomy to fetch.
     */
    where: PlantTaxonomyWhereUniqueInput
  }

  /**
   * PlantTaxonomy findUniqueOrThrow
   */
  export type PlantTaxonomyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTaxonomy
     */
    select?: PlantTaxonomySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantTaxonomy
     */
    omit?: PlantTaxonomyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTaxonomyInclude<ExtArgs> | null
    /**
     * Filter, which PlantTaxonomy to fetch.
     */
    where: PlantTaxonomyWhereUniqueInput
  }

  /**
   * PlantTaxonomy findFirst
   */
  export type PlantTaxonomyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTaxonomy
     */
    select?: PlantTaxonomySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantTaxonomy
     */
    omit?: PlantTaxonomyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTaxonomyInclude<ExtArgs> | null
    /**
     * Filter, which PlantTaxonomy to fetch.
     */
    where?: PlantTaxonomyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantTaxonomies to fetch.
     */
    orderBy?: PlantTaxonomyOrderByWithRelationInput | PlantTaxonomyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantTaxonomies.
     */
    cursor?: PlantTaxonomyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantTaxonomies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantTaxonomies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantTaxonomies.
     */
    distinct?: PlantTaxonomyScalarFieldEnum | PlantTaxonomyScalarFieldEnum[]
  }

  /**
   * PlantTaxonomy findFirstOrThrow
   */
  export type PlantTaxonomyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTaxonomy
     */
    select?: PlantTaxonomySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantTaxonomy
     */
    omit?: PlantTaxonomyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTaxonomyInclude<ExtArgs> | null
    /**
     * Filter, which PlantTaxonomy to fetch.
     */
    where?: PlantTaxonomyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantTaxonomies to fetch.
     */
    orderBy?: PlantTaxonomyOrderByWithRelationInput | PlantTaxonomyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantTaxonomies.
     */
    cursor?: PlantTaxonomyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantTaxonomies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantTaxonomies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantTaxonomies.
     */
    distinct?: PlantTaxonomyScalarFieldEnum | PlantTaxonomyScalarFieldEnum[]
  }

  /**
   * PlantTaxonomy findMany
   */
  export type PlantTaxonomyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTaxonomy
     */
    select?: PlantTaxonomySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantTaxonomy
     */
    omit?: PlantTaxonomyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTaxonomyInclude<ExtArgs> | null
    /**
     * Filter, which PlantTaxonomies to fetch.
     */
    where?: PlantTaxonomyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantTaxonomies to fetch.
     */
    orderBy?: PlantTaxonomyOrderByWithRelationInput | PlantTaxonomyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlantTaxonomies.
     */
    cursor?: PlantTaxonomyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantTaxonomies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantTaxonomies.
     */
    skip?: number
    distinct?: PlantTaxonomyScalarFieldEnum | PlantTaxonomyScalarFieldEnum[]
  }

  /**
   * PlantTaxonomy create
   */
  export type PlantTaxonomyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTaxonomy
     */
    select?: PlantTaxonomySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantTaxonomy
     */
    omit?: PlantTaxonomyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTaxonomyInclude<ExtArgs> | null
    /**
     * The data needed to create a PlantTaxonomy.
     */
    data: XOR<PlantTaxonomyCreateInput, PlantTaxonomyUncheckedCreateInput>
  }

  /**
   * PlantTaxonomy createMany
   */
  export type PlantTaxonomyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlantTaxonomies.
     */
    data: PlantTaxonomyCreateManyInput | PlantTaxonomyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlantTaxonomy createManyAndReturn
   */
  export type PlantTaxonomyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTaxonomy
     */
    select?: PlantTaxonomySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlantTaxonomy
     */
    omit?: PlantTaxonomyOmit<ExtArgs> | null
    /**
     * The data used to create many PlantTaxonomies.
     */
    data: PlantTaxonomyCreateManyInput | PlantTaxonomyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlantTaxonomy update
   */
  export type PlantTaxonomyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTaxonomy
     */
    select?: PlantTaxonomySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantTaxonomy
     */
    omit?: PlantTaxonomyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTaxonomyInclude<ExtArgs> | null
    /**
     * The data needed to update a PlantTaxonomy.
     */
    data: XOR<PlantTaxonomyUpdateInput, PlantTaxonomyUncheckedUpdateInput>
    /**
     * Choose, which PlantTaxonomy to update.
     */
    where: PlantTaxonomyWhereUniqueInput
  }

  /**
   * PlantTaxonomy updateMany
   */
  export type PlantTaxonomyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlantTaxonomies.
     */
    data: XOR<PlantTaxonomyUpdateManyMutationInput, PlantTaxonomyUncheckedUpdateManyInput>
    /**
     * Filter which PlantTaxonomies to update
     */
    where?: PlantTaxonomyWhereInput
    /**
     * Limit how many PlantTaxonomies to update.
     */
    limit?: number
  }

  /**
   * PlantTaxonomy updateManyAndReturn
   */
  export type PlantTaxonomyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTaxonomy
     */
    select?: PlantTaxonomySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlantTaxonomy
     */
    omit?: PlantTaxonomyOmit<ExtArgs> | null
    /**
     * The data used to update PlantTaxonomies.
     */
    data: XOR<PlantTaxonomyUpdateManyMutationInput, PlantTaxonomyUncheckedUpdateManyInput>
    /**
     * Filter which PlantTaxonomies to update
     */
    where?: PlantTaxonomyWhereInput
    /**
     * Limit how many PlantTaxonomies to update.
     */
    limit?: number
  }

  /**
   * PlantTaxonomy upsert
   */
  export type PlantTaxonomyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTaxonomy
     */
    select?: PlantTaxonomySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantTaxonomy
     */
    omit?: PlantTaxonomyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTaxonomyInclude<ExtArgs> | null
    /**
     * The filter to search for the PlantTaxonomy to update in case it exists.
     */
    where: PlantTaxonomyWhereUniqueInput
    /**
     * In case the PlantTaxonomy found by the `where` argument doesn't exist, create a new PlantTaxonomy with this data.
     */
    create: XOR<PlantTaxonomyCreateInput, PlantTaxonomyUncheckedCreateInput>
    /**
     * In case the PlantTaxonomy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantTaxonomyUpdateInput, PlantTaxonomyUncheckedUpdateInput>
  }

  /**
   * PlantTaxonomy delete
   */
  export type PlantTaxonomyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTaxonomy
     */
    select?: PlantTaxonomySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantTaxonomy
     */
    omit?: PlantTaxonomyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTaxonomyInclude<ExtArgs> | null
    /**
     * Filter which PlantTaxonomy to delete.
     */
    where: PlantTaxonomyWhereUniqueInput
  }

  /**
   * PlantTaxonomy deleteMany
   */
  export type PlantTaxonomyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantTaxonomies to delete
     */
    where?: PlantTaxonomyWhereInput
    /**
     * Limit how many PlantTaxonomies to delete.
     */
    limit?: number
  }

  /**
   * PlantTaxonomy.plants
   */
  export type PlantTaxonomy$plantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantNomenclature
     */
    select?: PlantNomenclatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantNomenclature
     */
    omit?: PlantNomenclatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantNomenclatureInclude<ExtArgs> | null
    where?: PlantNomenclatureWhereInput
    orderBy?: PlantNomenclatureOrderByWithRelationInput | PlantNomenclatureOrderByWithRelationInput[]
    cursor?: PlantNomenclatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlantNomenclatureScalarFieldEnum | PlantNomenclatureScalarFieldEnum[]
  }

  /**
   * PlantTaxonomy without action
   */
  export type PlantTaxonomyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTaxonomy
     */
    select?: PlantTaxonomySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantTaxonomy
     */
    omit?: PlantTaxonomyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTaxonomyInclude<ExtArgs> | null
  }


  /**
   * Model PlantSynonym
   */

  export type AggregatePlantSynonym = {
    _count: PlantSynonymCountAggregateOutputType | null
    _avg: PlantSynonymAvgAggregateOutputType | null
    _sum: PlantSynonymSumAggregateOutputType | null
    _min: PlantSynonymMinAggregateOutputType | null
    _max: PlantSynonymMaxAggregateOutputType | null
  }

  export type PlantSynonymAvgAggregateOutputType = {
    id: number | null
    plantId: number | null
  }

  export type PlantSynonymSumAggregateOutputType = {
    id: number | null
    plantId: number | null
  }

  export type PlantSynonymMinAggregateOutputType = {
    id: number | null
    plantId: number | null
    name: string | null
  }

  export type PlantSynonymMaxAggregateOutputType = {
    id: number | null
    plantId: number | null
    name: string | null
  }

  export type PlantSynonymCountAggregateOutputType = {
    id: number
    plantId: number
    name: number
    _all: number
  }


  export type PlantSynonymAvgAggregateInputType = {
    id?: true
    plantId?: true
  }

  export type PlantSynonymSumAggregateInputType = {
    id?: true
    plantId?: true
  }

  export type PlantSynonymMinAggregateInputType = {
    id?: true
    plantId?: true
    name?: true
  }

  export type PlantSynonymMaxAggregateInputType = {
    id?: true
    plantId?: true
    name?: true
  }

  export type PlantSynonymCountAggregateInputType = {
    id?: true
    plantId?: true
    name?: true
    _all?: true
  }

  export type PlantSynonymAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantSynonym to aggregate.
     */
    where?: PlantSynonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantSynonyms to fetch.
     */
    orderBy?: PlantSynonymOrderByWithRelationInput | PlantSynonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantSynonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantSynonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantSynonyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlantSynonyms
    **/
    _count?: true | PlantSynonymCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlantSynonymAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlantSynonymSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantSynonymMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantSynonymMaxAggregateInputType
  }

  export type GetPlantSynonymAggregateType<T extends PlantSynonymAggregateArgs> = {
        [P in keyof T & keyof AggregatePlantSynonym]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlantSynonym[P]>
      : GetScalarType<T[P], AggregatePlantSynonym[P]>
  }




  export type PlantSynonymGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantSynonymWhereInput
    orderBy?: PlantSynonymOrderByWithAggregationInput | PlantSynonymOrderByWithAggregationInput[]
    by: PlantSynonymScalarFieldEnum[] | PlantSynonymScalarFieldEnum
    having?: PlantSynonymScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantSynonymCountAggregateInputType | true
    _avg?: PlantSynonymAvgAggregateInputType
    _sum?: PlantSynonymSumAggregateInputType
    _min?: PlantSynonymMinAggregateInputType
    _max?: PlantSynonymMaxAggregateInputType
  }

  export type PlantSynonymGroupByOutputType = {
    id: number
    plantId: number
    name: string | null
    _count: PlantSynonymCountAggregateOutputType | null
    _avg: PlantSynonymAvgAggregateOutputType | null
    _sum: PlantSynonymSumAggregateOutputType | null
    _min: PlantSynonymMinAggregateOutputType | null
    _max: PlantSynonymMaxAggregateOutputType | null
  }

  type GetPlantSynonymGroupByPayload<T extends PlantSynonymGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantSynonymGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantSynonymGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantSynonymGroupByOutputType[P]>
            : GetScalarType<T[P], PlantSynonymGroupByOutputType[P]>
        }
      >
    >


  export type PlantSynonymSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plantId?: boolean
    name?: boolean
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantSynonym"]>

  export type PlantSynonymSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plantId?: boolean
    name?: boolean
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantSynonym"]>

  export type PlantSynonymSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plantId?: boolean
    name?: boolean
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantSynonym"]>

  export type PlantSynonymSelectScalar = {
    id?: boolean
    plantId?: boolean
    name?: boolean
  }

  export type PlantSynonymOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plantId" | "name", ExtArgs["result"]["plantSynonym"]>
  export type PlantSynonymInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }
  export type PlantSynonymIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }
  export type PlantSynonymIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }

  export type $PlantSynonymPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlantSynonym"
    objects: {
      plant: Prisma.$PlantNomenclaturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      plantId: number
      name: string | null
    }, ExtArgs["result"]["plantSynonym"]>
    composites: {}
  }

  type PlantSynonymGetPayload<S extends boolean | null | undefined | PlantSynonymDefaultArgs> = $Result.GetResult<Prisma.$PlantSynonymPayload, S>

  type PlantSynonymCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlantSynonymFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlantSynonymCountAggregateInputType | true
    }

  export interface PlantSynonymDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlantSynonym'], meta: { name: 'PlantSynonym' } }
    /**
     * Find zero or one PlantSynonym that matches the filter.
     * @param {PlantSynonymFindUniqueArgs} args - Arguments to find a PlantSynonym
     * @example
     * // Get one PlantSynonym
     * const plantSynonym = await prisma.plantSynonym.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantSynonymFindUniqueArgs>(args: SelectSubset<T, PlantSynonymFindUniqueArgs<ExtArgs>>): Prisma__PlantSynonymClient<$Result.GetResult<Prisma.$PlantSynonymPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlantSynonym that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlantSynonymFindUniqueOrThrowArgs} args - Arguments to find a PlantSynonym
     * @example
     * // Get one PlantSynonym
     * const plantSynonym = await prisma.plantSynonym.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantSynonymFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantSynonymFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantSynonymClient<$Result.GetResult<Prisma.$PlantSynonymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlantSynonym that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantSynonymFindFirstArgs} args - Arguments to find a PlantSynonym
     * @example
     * // Get one PlantSynonym
     * const plantSynonym = await prisma.plantSynonym.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantSynonymFindFirstArgs>(args?: SelectSubset<T, PlantSynonymFindFirstArgs<ExtArgs>>): Prisma__PlantSynonymClient<$Result.GetResult<Prisma.$PlantSynonymPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlantSynonym that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantSynonymFindFirstOrThrowArgs} args - Arguments to find a PlantSynonym
     * @example
     * // Get one PlantSynonym
     * const plantSynonym = await prisma.plantSynonym.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantSynonymFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantSynonymFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantSynonymClient<$Result.GetResult<Prisma.$PlantSynonymPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlantSynonyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantSynonymFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlantSynonyms
     * const plantSynonyms = await prisma.plantSynonym.findMany()
     * 
     * // Get first 10 PlantSynonyms
     * const plantSynonyms = await prisma.plantSynonym.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantSynonymWithIdOnly = await prisma.plantSynonym.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlantSynonymFindManyArgs>(args?: SelectSubset<T, PlantSynonymFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantSynonymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlantSynonym.
     * @param {PlantSynonymCreateArgs} args - Arguments to create a PlantSynonym.
     * @example
     * // Create one PlantSynonym
     * const PlantSynonym = await prisma.plantSynonym.create({
     *   data: {
     *     // ... data to create a PlantSynonym
     *   }
     * })
     * 
     */
    create<T extends PlantSynonymCreateArgs>(args: SelectSubset<T, PlantSynonymCreateArgs<ExtArgs>>): Prisma__PlantSynonymClient<$Result.GetResult<Prisma.$PlantSynonymPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlantSynonyms.
     * @param {PlantSynonymCreateManyArgs} args - Arguments to create many PlantSynonyms.
     * @example
     * // Create many PlantSynonyms
     * const plantSynonym = await prisma.plantSynonym.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantSynonymCreateManyArgs>(args?: SelectSubset<T, PlantSynonymCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlantSynonyms and returns the data saved in the database.
     * @param {PlantSynonymCreateManyAndReturnArgs} args - Arguments to create many PlantSynonyms.
     * @example
     * // Create many PlantSynonyms
     * const plantSynonym = await prisma.plantSynonym.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlantSynonyms and only return the `id`
     * const plantSynonymWithIdOnly = await prisma.plantSynonym.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlantSynonymCreateManyAndReturnArgs>(args?: SelectSubset<T, PlantSynonymCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantSynonymPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlantSynonym.
     * @param {PlantSynonymDeleteArgs} args - Arguments to delete one PlantSynonym.
     * @example
     * // Delete one PlantSynonym
     * const PlantSynonym = await prisma.plantSynonym.delete({
     *   where: {
     *     // ... filter to delete one PlantSynonym
     *   }
     * })
     * 
     */
    delete<T extends PlantSynonymDeleteArgs>(args: SelectSubset<T, PlantSynonymDeleteArgs<ExtArgs>>): Prisma__PlantSynonymClient<$Result.GetResult<Prisma.$PlantSynonymPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlantSynonym.
     * @param {PlantSynonymUpdateArgs} args - Arguments to update one PlantSynonym.
     * @example
     * // Update one PlantSynonym
     * const plantSynonym = await prisma.plantSynonym.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantSynonymUpdateArgs>(args: SelectSubset<T, PlantSynonymUpdateArgs<ExtArgs>>): Prisma__PlantSynonymClient<$Result.GetResult<Prisma.$PlantSynonymPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlantSynonyms.
     * @param {PlantSynonymDeleteManyArgs} args - Arguments to filter PlantSynonyms to delete.
     * @example
     * // Delete a few PlantSynonyms
     * const { count } = await prisma.plantSynonym.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantSynonymDeleteManyArgs>(args?: SelectSubset<T, PlantSynonymDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlantSynonyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantSynonymUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlantSynonyms
     * const plantSynonym = await prisma.plantSynonym.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantSynonymUpdateManyArgs>(args: SelectSubset<T, PlantSynonymUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlantSynonyms and returns the data updated in the database.
     * @param {PlantSynonymUpdateManyAndReturnArgs} args - Arguments to update many PlantSynonyms.
     * @example
     * // Update many PlantSynonyms
     * const plantSynonym = await prisma.plantSynonym.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlantSynonyms and only return the `id`
     * const plantSynonymWithIdOnly = await prisma.plantSynonym.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlantSynonymUpdateManyAndReturnArgs>(args: SelectSubset<T, PlantSynonymUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantSynonymPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlantSynonym.
     * @param {PlantSynonymUpsertArgs} args - Arguments to update or create a PlantSynonym.
     * @example
     * // Update or create a PlantSynonym
     * const plantSynonym = await prisma.plantSynonym.upsert({
     *   create: {
     *     // ... data to create a PlantSynonym
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlantSynonym we want to update
     *   }
     * })
     */
    upsert<T extends PlantSynonymUpsertArgs>(args: SelectSubset<T, PlantSynonymUpsertArgs<ExtArgs>>): Prisma__PlantSynonymClient<$Result.GetResult<Prisma.$PlantSynonymPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlantSynonyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantSynonymCountArgs} args - Arguments to filter PlantSynonyms to count.
     * @example
     * // Count the number of PlantSynonyms
     * const count = await prisma.plantSynonym.count({
     *   where: {
     *     // ... the filter for the PlantSynonyms we want to count
     *   }
     * })
    **/
    count<T extends PlantSynonymCountArgs>(
      args?: Subset<T, PlantSynonymCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantSynonymCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlantSynonym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantSynonymAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlantSynonymAggregateArgs>(args: Subset<T, PlantSynonymAggregateArgs>): Prisma.PrismaPromise<GetPlantSynonymAggregateType<T>>

    /**
     * Group by PlantSynonym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantSynonymGroupByArgs} args - Group by arguments.
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
      T extends PlantSynonymGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantSynonymGroupByArgs['orderBy'] }
        : { orderBy?: PlantSynonymGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlantSynonymGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantSynonymGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlantSynonym model
   */
  readonly fields: PlantSynonymFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlantSynonym.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantSynonymClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plant<T extends PlantNomenclatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantNomenclatureDefaultArgs<ExtArgs>>): Prisma__PlantNomenclatureClient<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlantSynonym model
   */
  interface PlantSynonymFieldRefs {
    readonly id: FieldRef<"PlantSynonym", 'Int'>
    readonly plantId: FieldRef<"PlantSynonym", 'Int'>
    readonly name: FieldRef<"PlantSynonym", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlantSynonym findUnique
   */
  export type PlantSynonymFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantSynonym
     */
    select?: PlantSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantSynonym
     */
    omit?: PlantSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantSynonymInclude<ExtArgs> | null
    /**
     * Filter, which PlantSynonym to fetch.
     */
    where: PlantSynonymWhereUniqueInput
  }

  /**
   * PlantSynonym findUniqueOrThrow
   */
  export type PlantSynonymFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantSynonym
     */
    select?: PlantSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantSynonym
     */
    omit?: PlantSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantSynonymInclude<ExtArgs> | null
    /**
     * Filter, which PlantSynonym to fetch.
     */
    where: PlantSynonymWhereUniqueInput
  }

  /**
   * PlantSynonym findFirst
   */
  export type PlantSynonymFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantSynonym
     */
    select?: PlantSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantSynonym
     */
    omit?: PlantSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantSynonymInclude<ExtArgs> | null
    /**
     * Filter, which PlantSynonym to fetch.
     */
    where?: PlantSynonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantSynonyms to fetch.
     */
    orderBy?: PlantSynonymOrderByWithRelationInput | PlantSynonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantSynonyms.
     */
    cursor?: PlantSynonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantSynonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantSynonyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantSynonyms.
     */
    distinct?: PlantSynonymScalarFieldEnum | PlantSynonymScalarFieldEnum[]
  }

  /**
   * PlantSynonym findFirstOrThrow
   */
  export type PlantSynonymFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantSynonym
     */
    select?: PlantSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantSynonym
     */
    omit?: PlantSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantSynonymInclude<ExtArgs> | null
    /**
     * Filter, which PlantSynonym to fetch.
     */
    where?: PlantSynonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantSynonyms to fetch.
     */
    orderBy?: PlantSynonymOrderByWithRelationInput | PlantSynonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantSynonyms.
     */
    cursor?: PlantSynonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantSynonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantSynonyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantSynonyms.
     */
    distinct?: PlantSynonymScalarFieldEnum | PlantSynonymScalarFieldEnum[]
  }

  /**
   * PlantSynonym findMany
   */
  export type PlantSynonymFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantSynonym
     */
    select?: PlantSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantSynonym
     */
    omit?: PlantSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantSynonymInclude<ExtArgs> | null
    /**
     * Filter, which PlantSynonyms to fetch.
     */
    where?: PlantSynonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantSynonyms to fetch.
     */
    orderBy?: PlantSynonymOrderByWithRelationInput | PlantSynonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlantSynonyms.
     */
    cursor?: PlantSynonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantSynonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantSynonyms.
     */
    skip?: number
    distinct?: PlantSynonymScalarFieldEnum | PlantSynonymScalarFieldEnum[]
  }

  /**
   * PlantSynonym create
   */
  export type PlantSynonymCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantSynonym
     */
    select?: PlantSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantSynonym
     */
    omit?: PlantSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantSynonymInclude<ExtArgs> | null
    /**
     * The data needed to create a PlantSynonym.
     */
    data: XOR<PlantSynonymCreateInput, PlantSynonymUncheckedCreateInput>
  }

  /**
   * PlantSynonym createMany
   */
  export type PlantSynonymCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlantSynonyms.
     */
    data: PlantSynonymCreateManyInput | PlantSynonymCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlantSynonym createManyAndReturn
   */
  export type PlantSynonymCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantSynonym
     */
    select?: PlantSynonymSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlantSynonym
     */
    omit?: PlantSynonymOmit<ExtArgs> | null
    /**
     * The data used to create many PlantSynonyms.
     */
    data: PlantSynonymCreateManyInput | PlantSynonymCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantSynonymIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlantSynonym update
   */
  export type PlantSynonymUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantSynonym
     */
    select?: PlantSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantSynonym
     */
    omit?: PlantSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantSynonymInclude<ExtArgs> | null
    /**
     * The data needed to update a PlantSynonym.
     */
    data: XOR<PlantSynonymUpdateInput, PlantSynonymUncheckedUpdateInput>
    /**
     * Choose, which PlantSynonym to update.
     */
    where: PlantSynonymWhereUniqueInput
  }

  /**
   * PlantSynonym updateMany
   */
  export type PlantSynonymUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlantSynonyms.
     */
    data: XOR<PlantSynonymUpdateManyMutationInput, PlantSynonymUncheckedUpdateManyInput>
    /**
     * Filter which PlantSynonyms to update
     */
    where?: PlantSynonymWhereInput
    /**
     * Limit how many PlantSynonyms to update.
     */
    limit?: number
  }

  /**
   * PlantSynonym updateManyAndReturn
   */
  export type PlantSynonymUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantSynonym
     */
    select?: PlantSynonymSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlantSynonym
     */
    omit?: PlantSynonymOmit<ExtArgs> | null
    /**
     * The data used to update PlantSynonyms.
     */
    data: XOR<PlantSynonymUpdateManyMutationInput, PlantSynonymUncheckedUpdateManyInput>
    /**
     * Filter which PlantSynonyms to update
     */
    where?: PlantSynonymWhereInput
    /**
     * Limit how many PlantSynonyms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantSynonymIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlantSynonym upsert
   */
  export type PlantSynonymUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantSynonym
     */
    select?: PlantSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantSynonym
     */
    omit?: PlantSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantSynonymInclude<ExtArgs> | null
    /**
     * The filter to search for the PlantSynonym to update in case it exists.
     */
    where: PlantSynonymWhereUniqueInput
    /**
     * In case the PlantSynonym found by the `where` argument doesn't exist, create a new PlantSynonym with this data.
     */
    create: XOR<PlantSynonymCreateInput, PlantSynonymUncheckedCreateInput>
    /**
     * In case the PlantSynonym was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantSynonymUpdateInput, PlantSynonymUncheckedUpdateInput>
  }

  /**
   * PlantSynonym delete
   */
  export type PlantSynonymDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantSynonym
     */
    select?: PlantSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantSynonym
     */
    omit?: PlantSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantSynonymInclude<ExtArgs> | null
    /**
     * Filter which PlantSynonym to delete.
     */
    where: PlantSynonymWhereUniqueInput
  }

  /**
   * PlantSynonym deleteMany
   */
  export type PlantSynonymDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantSynonyms to delete
     */
    where?: PlantSynonymWhereInput
    /**
     * Limit how many PlantSynonyms to delete.
     */
    limit?: number
  }

  /**
   * PlantSynonym without action
   */
  export type PlantSynonymDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantSynonym
     */
    select?: PlantSynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantSynonym
     */
    omit?: PlantSynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantSynonymInclude<ExtArgs> | null
  }


  /**
   * Model PlantMorphology
   */

  export type AggregatePlantMorphology = {
    _count: PlantMorphologyCountAggregateOutputType | null
    _avg: PlantMorphologyAvgAggregateOutputType | null
    _sum: PlantMorphologySumAggregateOutputType | null
    _min: PlantMorphologyMinAggregateOutputType | null
    _max: PlantMorphologyMaxAggregateOutputType | null
  }

  export type PlantMorphologyAvgAggregateOutputType = {
    id: number | null
  }

  export type PlantMorphologySumAggregateOutputType = {
    id: number | null
  }

  export type PlantMorphologyMinAggregateOutputType = {
    id: number | null
    isTerrestrial: boolean | null
    growthHabit: string | null
    isDeciduous: boolean | null
    isDeciduousNote: string | null
    reproductiveSystem: string | null
    floweringPeriodNote: string | null
    fruitingPeriodNote: string | null
  }

  export type PlantMorphologyMaxAggregateOutputType = {
    id: number | null
    isTerrestrial: boolean | null
    growthHabit: string | null
    isDeciduous: boolean | null
    isDeciduousNote: string | null
    reproductiveSystem: string | null
    floweringPeriodNote: string | null
    fruitingPeriodNote: string | null
  }

  export type PlantMorphologyCountAggregateOutputType = {
    id: number
    lifecycle: number
    isTerrestrial: number
    growthHabit: number
    isDeciduous: number
    isDeciduousNote: number
    reproductiveSystem: number
    floweringPeriod: number
    fruitingPeriod: number
    floweringPeriodNote: number
    fruitingPeriodNote: number
    _all: number
  }


  export type PlantMorphologyAvgAggregateInputType = {
    id?: true
  }

  export type PlantMorphologySumAggregateInputType = {
    id?: true
  }

  export type PlantMorphologyMinAggregateInputType = {
    id?: true
    isTerrestrial?: true
    growthHabit?: true
    isDeciduous?: true
    isDeciduousNote?: true
    reproductiveSystem?: true
    floweringPeriodNote?: true
    fruitingPeriodNote?: true
  }

  export type PlantMorphologyMaxAggregateInputType = {
    id?: true
    isTerrestrial?: true
    growthHabit?: true
    isDeciduous?: true
    isDeciduousNote?: true
    reproductiveSystem?: true
    floweringPeriodNote?: true
    fruitingPeriodNote?: true
  }

  export type PlantMorphologyCountAggregateInputType = {
    id?: true
    lifecycle?: true
    isTerrestrial?: true
    growthHabit?: true
    isDeciduous?: true
    isDeciduousNote?: true
    reproductiveSystem?: true
    floweringPeriod?: true
    fruitingPeriod?: true
    floweringPeriodNote?: true
    fruitingPeriodNote?: true
    _all?: true
  }

  export type PlantMorphologyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantMorphology to aggregate.
     */
    where?: PlantMorphologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantMorphologies to fetch.
     */
    orderBy?: PlantMorphologyOrderByWithRelationInput | PlantMorphologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantMorphologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantMorphologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantMorphologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlantMorphologies
    **/
    _count?: true | PlantMorphologyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlantMorphologyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlantMorphologySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantMorphologyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantMorphologyMaxAggregateInputType
  }

  export type GetPlantMorphologyAggregateType<T extends PlantMorphologyAggregateArgs> = {
        [P in keyof T & keyof AggregatePlantMorphology]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlantMorphology[P]>
      : GetScalarType<T[P], AggregatePlantMorphology[P]>
  }




  export type PlantMorphologyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantMorphologyWhereInput
    orderBy?: PlantMorphologyOrderByWithAggregationInput | PlantMorphologyOrderByWithAggregationInput[]
    by: PlantMorphologyScalarFieldEnum[] | PlantMorphologyScalarFieldEnum
    having?: PlantMorphologyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantMorphologyCountAggregateInputType | true
    _avg?: PlantMorphologyAvgAggregateInputType
    _sum?: PlantMorphologySumAggregateInputType
    _min?: PlantMorphologyMinAggregateInputType
    _max?: PlantMorphologyMaxAggregateInputType
  }

  export type PlantMorphologyGroupByOutputType = {
    id: number
    lifecycle: $Enums.Lifecycle[]
    isTerrestrial: boolean | null
    growthHabit: string | null
    isDeciduous: boolean | null
    isDeciduousNote: string | null
    reproductiveSystem: string | null
    floweringPeriod: $Enums.Month[]
    fruitingPeriod: $Enums.Month[]
    floweringPeriodNote: string | null
    fruitingPeriodNote: string | null
    _count: PlantMorphologyCountAggregateOutputType | null
    _avg: PlantMorphologyAvgAggregateOutputType | null
    _sum: PlantMorphologySumAggregateOutputType | null
    _min: PlantMorphologyMinAggregateOutputType | null
    _max: PlantMorphologyMaxAggregateOutputType | null
  }

  type GetPlantMorphologyGroupByPayload<T extends PlantMorphologyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantMorphologyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantMorphologyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantMorphologyGroupByOutputType[P]>
            : GetScalarType<T[P], PlantMorphologyGroupByOutputType[P]>
        }
      >
    >


  export type PlantMorphologySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lifecycle?: boolean
    isTerrestrial?: boolean
    growthHabit?: boolean
    isDeciduous?: boolean
    isDeciduousNote?: boolean
    reproductiveSystem?: boolean
    floweringPeriod?: boolean
    fruitingPeriod?: boolean
    floweringPeriodNote?: boolean
    fruitingPeriodNote?: boolean
    plants?: boolean | PlantMorphology$plantsArgs<ExtArgs>
    _count?: boolean | PlantMorphologyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantMorphology"]>

  export type PlantMorphologySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lifecycle?: boolean
    isTerrestrial?: boolean
    growthHabit?: boolean
    isDeciduous?: boolean
    isDeciduousNote?: boolean
    reproductiveSystem?: boolean
    floweringPeriod?: boolean
    fruitingPeriod?: boolean
    floweringPeriodNote?: boolean
    fruitingPeriodNote?: boolean
  }, ExtArgs["result"]["plantMorphology"]>

  export type PlantMorphologySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lifecycle?: boolean
    isTerrestrial?: boolean
    growthHabit?: boolean
    isDeciduous?: boolean
    isDeciduousNote?: boolean
    reproductiveSystem?: boolean
    floweringPeriod?: boolean
    fruitingPeriod?: boolean
    floweringPeriodNote?: boolean
    fruitingPeriodNote?: boolean
  }, ExtArgs["result"]["plantMorphology"]>

  export type PlantMorphologySelectScalar = {
    id?: boolean
    lifecycle?: boolean
    isTerrestrial?: boolean
    growthHabit?: boolean
    isDeciduous?: boolean
    isDeciduousNote?: boolean
    reproductiveSystem?: boolean
    floweringPeriod?: boolean
    fruitingPeriod?: boolean
    floweringPeriodNote?: boolean
    fruitingPeriodNote?: boolean
  }

  export type PlantMorphologyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lifecycle" | "isTerrestrial" | "growthHabit" | "isDeciduous" | "isDeciduousNote" | "reproductiveSystem" | "floweringPeriod" | "fruitingPeriod" | "floweringPeriodNote" | "fruitingPeriodNote", ExtArgs["result"]["plantMorphology"]>
  export type PlantMorphologyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plants?: boolean | PlantMorphology$plantsArgs<ExtArgs>
    _count?: boolean | PlantMorphologyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlantMorphologyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlantMorphologyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlantMorphologyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlantMorphology"
    objects: {
      plants: Prisma.$PlantNomenclaturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lifecycle: $Enums.Lifecycle[]
      isTerrestrial: boolean | null
      growthHabit: string | null
      isDeciduous: boolean | null
      isDeciduousNote: string | null
      reproductiveSystem: string | null
      floweringPeriod: $Enums.Month[]
      fruitingPeriod: $Enums.Month[]
      floweringPeriodNote: string | null
      fruitingPeriodNote: string | null
    }, ExtArgs["result"]["plantMorphology"]>
    composites: {}
  }

  type PlantMorphologyGetPayload<S extends boolean | null | undefined | PlantMorphologyDefaultArgs> = $Result.GetResult<Prisma.$PlantMorphologyPayload, S>

  type PlantMorphologyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlantMorphologyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlantMorphologyCountAggregateInputType | true
    }

  export interface PlantMorphologyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlantMorphology'], meta: { name: 'PlantMorphology' } }
    /**
     * Find zero or one PlantMorphology that matches the filter.
     * @param {PlantMorphologyFindUniqueArgs} args - Arguments to find a PlantMorphology
     * @example
     * // Get one PlantMorphology
     * const plantMorphology = await prisma.plantMorphology.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantMorphologyFindUniqueArgs>(args: SelectSubset<T, PlantMorphologyFindUniqueArgs<ExtArgs>>): Prisma__PlantMorphologyClient<$Result.GetResult<Prisma.$PlantMorphologyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlantMorphology that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlantMorphologyFindUniqueOrThrowArgs} args - Arguments to find a PlantMorphology
     * @example
     * // Get one PlantMorphology
     * const plantMorphology = await prisma.plantMorphology.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantMorphologyFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantMorphologyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantMorphologyClient<$Result.GetResult<Prisma.$PlantMorphologyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlantMorphology that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantMorphologyFindFirstArgs} args - Arguments to find a PlantMorphology
     * @example
     * // Get one PlantMorphology
     * const plantMorphology = await prisma.plantMorphology.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantMorphologyFindFirstArgs>(args?: SelectSubset<T, PlantMorphologyFindFirstArgs<ExtArgs>>): Prisma__PlantMorphologyClient<$Result.GetResult<Prisma.$PlantMorphologyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlantMorphology that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantMorphologyFindFirstOrThrowArgs} args - Arguments to find a PlantMorphology
     * @example
     * // Get one PlantMorphology
     * const plantMorphology = await prisma.plantMorphology.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantMorphologyFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantMorphologyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantMorphologyClient<$Result.GetResult<Prisma.$PlantMorphologyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlantMorphologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantMorphologyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlantMorphologies
     * const plantMorphologies = await prisma.plantMorphology.findMany()
     * 
     * // Get first 10 PlantMorphologies
     * const plantMorphologies = await prisma.plantMorphology.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantMorphologyWithIdOnly = await prisma.plantMorphology.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlantMorphologyFindManyArgs>(args?: SelectSubset<T, PlantMorphologyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantMorphologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlantMorphology.
     * @param {PlantMorphologyCreateArgs} args - Arguments to create a PlantMorphology.
     * @example
     * // Create one PlantMorphology
     * const PlantMorphology = await prisma.plantMorphology.create({
     *   data: {
     *     // ... data to create a PlantMorphology
     *   }
     * })
     * 
     */
    create<T extends PlantMorphologyCreateArgs>(args: SelectSubset<T, PlantMorphologyCreateArgs<ExtArgs>>): Prisma__PlantMorphologyClient<$Result.GetResult<Prisma.$PlantMorphologyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlantMorphologies.
     * @param {PlantMorphologyCreateManyArgs} args - Arguments to create many PlantMorphologies.
     * @example
     * // Create many PlantMorphologies
     * const plantMorphology = await prisma.plantMorphology.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantMorphologyCreateManyArgs>(args?: SelectSubset<T, PlantMorphologyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlantMorphologies and returns the data saved in the database.
     * @param {PlantMorphologyCreateManyAndReturnArgs} args - Arguments to create many PlantMorphologies.
     * @example
     * // Create many PlantMorphologies
     * const plantMorphology = await prisma.plantMorphology.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlantMorphologies and only return the `id`
     * const plantMorphologyWithIdOnly = await prisma.plantMorphology.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlantMorphologyCreateManyAndReturnArgs>(args?: SelectSubset<T, PlantMorphologyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantMorphologyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlantMorphology.
     * @param {PlantMorphologyDeleteArgs} args - Arguments to delete one PlantMorphology.
     * @example
     * // Delete one PlantMorphology
     * const PlantMorphology = await prisma.plantMorphology.delete({
     *   where: {
     *     // ... filter to delete one PlantMorphology
     *   }
     * })
     * 
     */
    delete<T extends PlantMorphologyDeleteArgs>(args: SelectSubset<T, PlantMorphologyDeleteArgs<ExtArgs>>): Prisma__PlantMorphologyClient<$Result.GetResult<Prisma.$PlantMorphologyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlantMorphology.
     * @param {PlantMorphologyUpdateArgs} args - Arguments to update one PlantMorphology.
     * @example
     * // Update one PlantMorphology
     * const plantMorphology = await prisma.plantMorphology.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantMorphologyUpdateArgs>(args: SelectSubset<T, PlantMorphologyUpdateArgs<ExtArgs>>): Prisma__PlantMorphologyClient<$Result.GetResult<Prisma.$PlantMorphologyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlantMorphologies.
     * @param {PlantMorphologyDeleteManyArgs} args - Arguments to filter PlantMorphologies to delete.
     * @example
     * // Delete a few PlantMorphologies
     * const { count } = await prisma.plantMorphology.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantMorphologyDeleteManyArgs>(args?: SelectSubset<T, PlantMorphologyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlantMorphologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantMorphologyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlantMorphologies
     * const plantMorphology = await prisma.plantMorphology.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantMorphologyUpdateManyArgs>(args: SelectSubset<T, PlantMorphologyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlantMorphologies and returns the data updated in the database.
     * @param {PlantMorphologyUpdateManyAndReturnArgs} args - Arguments to update many PlantMorphologies.
     * @example
     * // Update many PlantMorphologies
     * const plantMorphology = await prisma.plantMorphology.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlantMorphologies and only return the `id`
     * const plantMorphologyWithIdOnly = await prisma.plantMorphology.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlantMorphologyUpdateManyAndReturnArgs>(args: SelectSubset<T, PlantMorphologyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantMorphologyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlantMorphology.
     * @param {PlantMorphologyUpsertArgs} args - Arguments to update or create a PlantMorphology.
     * @example
     * // Update or create a PlantMorphology
     * const plantMorphology = await prisma.plantMorphology.upsert({
     *   create: {
     *     // ... data to create a PlantMorphology
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlantMorphology we want to update
     *   }
     * })
     */
    upsert<T extends PlantMorphologyUpsertArgs>(args: SelectSubset<T, PlantMorphologyUpsertArgs<ExtArgs>>): Prisma__PlantMorphologyClient<$Result.GetResult<Prisma.$PlantMorphologyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlantMorphologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantMorphologyCountArgs} args - Arguments to filter PlantMorphologies to count.
     * @example
     * // Count the number of PlantMorphologies
     * const count = await prisma.plantMorphology.count({
     *   where: {
     *     // ... the filter for the PlantMorphologies we want to count
     *   }
     * })
    **/
    count<T extends PlantMorphologyCountArgs>(
      args?: Subset<T, PlantMorphologyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantMorphologyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlantMorphology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantMorphologyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlantMorphologyAggregateArgs>(args: Subset<T, PlantMorphologyAggregateArgs>): Prisma.PrismaPromise<GetPlantMorphologyAggregateType<T>>

    /**
     * Group by PlantMorphology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantMorphologyGroupByArgs} args - Group by arguments.
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
      T extends PlantMorphologyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantMorphologyGroupByArgs['orderBy'] }
        : { orderBy?: PlantMorphologyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlantMorphologyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantMorphologyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlantMorphology model
   */
  readonly fields: PlantMorphologyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlantMorphology.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantMorphologyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plants<T extends PlantMorphology$plantsArgs<ExtArgs> = {}>(args?: Subset<T, PlantMorphology$plantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PlantMorphology model
   */
  interface PlantMorphologyFieldRefs {
    readonly id: FieldRef<"PlantMorphology", 'Int'>
    readonly lifecycle: FieldRef<"PlantMorphology", 'Lifecycle[]'>
    readonly isTerrestrial: FieldRef<"PlantMorphology", 'Boolean'>
    readonly growthHabit: FieldRef<"PlantMorphology", 'String'>
    readonly isDeciduous: FieldRef<"PlantMorphology", 'Boolean'>
    readonly isDeciduousNote: FieldRef<"PlantMorphology", 'String'>
    readonly reproductiveSystem: FieldRef<"PlantMorphology", 'String'>
    readonly floweringPeriod: FieldRef<"PlantMorphology", 'Month[]'>
    readonly fruitingPeriod: FieldRef<"PlantMorphology", 'Month[]'>
    readonly floweringPeriodNote: FieldRef<"PlantMorphology", 'String'>
    readonly fruitingPeriodNote: FieldRef<"PlantMorphology", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlantMorphology findUnique
   */
  export type PlantMorphologyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantMorphology
     */
    select?: PlantMorphologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantMorphology
     */
    omit?: PlantMorphologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantMorphologyInclude<ExtArgs> | null
    /**
     * Filter, which PlantMorphology to fetch.
     */
    where: PlantMorphologyWhereUniqueInput
  }

  /**
   * PlantMorphology findUniqueOrThrow
   */
  export type PlantMorphologyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantMorphology
     */
    select?: PlantMorphologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantMorphology
     */
    omit?: PlantMorphologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantMorphologyInclude<ExtArgs> | null
    /**
     * Filter, which PlantMorphology to fetch.
     */
    where: PlantMorphologyWhereUniqueInput
  }

  /**
   * PlantMorphology findFirst
   */
  export type PlantMorphologyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantMorphology
     */
    select?: PlantMorphologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantMorphology
     */
    omit?: PlantMorphologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantMorphologyInclude<ExtArgs> | null
    /**
     * Filter, which PlantMorphology to fetch.
     */
    where?: PlantMorphologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantMorphologies to fetch.
     */
    orderBy?: PlantMorphologyOrderByWithRelationInput | PlantMorphologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantMorphologies.
     */
    cursor?: PlantMorphologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantMorphologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantMorphologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantMorphologies.
     */
    distinct?: PlantMorphologyScalarFieldEnum | PlantMorphologyScalarFieldEnum[]
  }

  /**
   * PlantMorphology findFirstOrThrow
   */
  export type PlantMorphologyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantMorphology
     */
    select?: PlantMorphologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantMorphology
     */
    omit?: PlantMorphologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantMorphologyInclude<ExtArgs> | null
    /**
     * Filter, which PlantMorphology to fetch.
     */
    where?: PlantMorphologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantMorphologies to fetch.
     */
    orderBy?: PlantMorphologyOrderByWithRelationInput | PlantMorphologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantMorphologies.
     */
    cursor?: PlantMorphologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantMorphologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantMorphologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantMorphologies.
     */
    distinct?: PlantMorphologyScalarFieldEnum | PlantMorphologyScalarFieldEnum[]
  }

  /**
   * PlantMorphology findMany
   */
  export type PlantMorphologyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantMorphology
     */
    select?: PlantMorphologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantMorphology
     */
    omit?: PlantMorphologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantMorphologyInclude<ExtArgs> | null
    /**
     * Filter, which PlantMorphologies to fetch.
     */
    where?: PlantMorphologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantMorphologies to fetch.
     */
    orderBy?: PlantMorphologyOrderByWithRelationInput | PlantMorphologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlantMorphologies.
     */
    cursor?: PlantMorphologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantMorphologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantMorphologies.
     */
    skip?: number
    distinct?: PlantMorphologyScalarFieldEnum | PlantMorphologyScalarFieldEnum[]
  }

  /**
   * PlantMorphology create
   */
  export type PlantMorphologyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantMorphology
     */
    select?: PlantMorphologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantMorphology
     */
    omit?: PlantMorphologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantMorphologyInclude<ExtArgs> | null
    /**
     * The data needed to create a PlantMorphology.
     */
    data?: XOR<PlantMorphologyCreateInput, PlantMorphologyUncheckedCreateInput>
  }

  /**
   * PlantMorphology createMany
   */
  export type PlantMorphologyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlantMorphologies.
     */
    data: PlantMorphologyCreateManyInput | PlantMorphologyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlantMorphology createManyAndReturn
   */
  export type PlantMorphologyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantMorphology
     */
    select?: PlantMorphologySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlantMorphology
     */
    omit?: PlantMorphologyOmit<ExtArgs> | null
    /**
     * The data used to create many PlantMorphologies.
     */
    data: PlantMorphologyCreateManyInput | PlantMorphologyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlantMorphology update
   */
  export type PlantMorphologyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantMorphology
     */
    select?: PlantMorphologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantMorphology
     */
    omit?: PlantMorphologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantMorphologyInclude<ExtArgs> | null
    /**
     * The data needed to update a PlantMorphology.
     */
    data: XOR<PlantMorphologyUpdateInput, PlantMorphologyUncheckedUpdateInput>
    /**
     * Choose, which PlantMorphology to update.
     */
    where: PlantMorphologyWhereUniqueInput
  }

  /**
   * PlantMorphology updateMany
   */
  export type PlantMorphologyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlantMorphologies.
     */
    data: XOR<PlantMorphologyUpdateManyMutationInput, PlantMorphologyUncheckedUpdateManyInput>
    /**
     * Filter which PlantMorphologies to update
     */
    where?: PlantMorphologyWhereInput
    /**
     * Limit how many PlantMorphologies to update.
     */
    limit?: number
  }

  /**
   * PlantMorphology updateManyAndReturn
   */
  export type PlantMorphologyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantMorphology
     */
    select?: PlantMorphologySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlantMorphology
     */
    omit?: PlantMorphologyOmit<ExtArgs> | null
    /**
     * The data used to update PlantMorphologies.
     */
    data: XOR<PlantMorphologyUpdateManyMutationInput, PlantMorphologyUncheckedUpdateManyInput>
    /**
     * Filter which PlantMorphologies to update
     */
    where?: PlantMorphologyWhereInput
    /**
     * Limit how many PlantMorphologies to update.
     */
    limit?: number
  }

  /**
   * PlantMorphology upsert
   */
  export type PlantMorphologyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantMorphology
     */
    select?: PlantMorphologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantMorphology
     */
    omit?: PlantMorphologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantMorphologyInclude<ExtArgs> | null
    /**
     * The filter to search for the PlantMorphology to update in case it exists.
     */
    where: PlantMorphologyWhereUniqueInput
    /**
     * In case the PlantMorphology found by the `where` argument doesn't exist, create a new PlantMorphology with this data.
     */
    create: XOR<PlantMorphologyCreateInput, PlantMorphologyUncheckedCreateInput>
    /**
     * In case the PlantMorphology was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantMorphologyUpdateInput, PlantMorphologyUncheckedUpdateInput>
  }

  /**
   * PlantMorphology delete
   */
  export type PlantMorphologyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantMorphology
     */
    select?: PlantMorphologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantMorphology
     */
    omit?: PlantMorphologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantMorphologyInclude<ExtArgs> | null
    /**
     * Filter which PlantMorphology to delete.
     */
    where: PlantMorphologyWhereUniqueInput
  }

  /**
   * PlantMorphology deleteMany
   */
  export type PlantMorphologyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantMorphologies to delete
     */
    where?: PlantMorphologyWhereInput
    /**
     * Limit how many PlantMorphologies to delete.
     */
    limit?: number
  }

  /**
   * PlantMorphology.plants
   */
  export type PlantMorphology$plantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantNomenclature
     */
    select?: PlantNomenclatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantNomenclature
     */
    omit?: PlantNomenclatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantNomenclatureInclude<ExtArgs> | null
    where?: PlantNomenclatureWhereInput
    orderBy?: PlantNomenclatureOrderByWithRelationInput | PlantNomenclatureOrderByWithRelationInput[]
    cursor?: PlantNomenclatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlantNomenclatureScalarFieldEnum | PlantNomenclatureScalarFieldEnum[]
  }

  /**
   * PlantMorphology without action
   */
  export type PlantMorphologyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantMorphology
     */
    select?: PlantMorphologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantMorphology
     */
    omit?: PlantMorphologyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantMorphologyInclude<ExtArgs> | null
  }


  /**
   * Model PlantEcologyDistribution
   */

  export type AggregatePlantEcologyDistribution = {
    _count: PlantEcologyDistributionCountAggregateOutputType | null
    _avg: PlantEcologyDistributionAvgAggregateOutputType | null
    _sum: PlantEcologyDistributionSumAggregateOutputType | null
    _min: PlantEcologyDistributionMinAggregateOutputType | null
    _max: PlantEcologyDistributionMaxAggregateOutputType | null
  }

  export type PlantEcologyDistributionAvgAggregateOutputType = {
    id: number | null
    plantId: number | null
  }

  export type PlantEcologyDistributionSumAggregateOutputType = {
    id: number | null
    plantId: number | null
  }

  export type PlantEcologyDistributionMinAggregateOutputType = {
    id: number | null
    habitat: string | null
    plantOrigin: string | null
    globalRange: string | null
    chinaRange: string | null
    endemic: string | null
    plantId: number | null
  }

  export type PlantEcologyDistributionMaxAggregateOutputType = {
    id: number | null
    habitat: string | null
    plantOrigin: string | null
    globalRange: string | null
    chinaRange: string | null
    endemic: string | null
    plantId: number | null
  }

  export type PlantEcologyDistributionCountAggregateOutputType = {
    id: number
    habitat: number
    plantOrigin: number
    globalRange: number
    chinaRange: number
    endemic: number
    plantId: number
    _all: number
  }


  export type PlantEcologyDistributionAvgAggregateInputType = {
    id?: true
    plantId?: true
  }

  export type PlantEcologyDistributionSumAggregateInputType = {
    id?: true
    plantId?: true
  }

  export type PlantEcologyDistributionMinAggregateInputType = {
    id?: true
    habitat?: true
    plantOrigin?: true
    globalRange?: true
    chinaRange?: true
    endemic?: true
    plantId?: true
  }

  export type PlantEcologyDistributionMaxAggregateInputType = {
    id?: true
    habitat?: true
    plantOrigin?: true
    globalRange?: true
    chinaRange?: true
    endemic?: true
    plantId?: true
  }

  export type PlantEcologyDistributionCountAggregateInputType = {
    id?: true
    habitat?: true
    plantOrigin?: true
    globalRange?: true
    chinaRange?: true
    endemic?: true
    plantId?: true
    _all?: true
  }

  export type PlantEcologyDistributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantEcologyDistribution to aggregate.
     */
    where?: PlantEcologyDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantEcologyDistributions to fetch.
     */
    orderBy?: PlantEcologyDistributionOrderByWithRelationInput | PlantEcologyDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantEcologyDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantEcologyDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantEcologyDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlantEcologyDistributions
    **/
    _count?: true | PlantEcologyDistributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlantEcologyDistributionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlantEcologyDistributionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantEcologyDistributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantEcologyDistributionMaxAggregateInputType
  }

  export type GetPlantEcologyDistributionAggregateType<T extends PlantEcologyDistributionAggregateArgs> = {
        [P in keyof T & keyof AggregatePlantEcologyDistribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlantEcologyDistribution[P]>
      : GetScalarType<T[P], AggregatePlantEcologyDistribution[P]>
  }




  export type PlantEcologyDistributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantEcologyDistributionWhereInput
    orderBy?: PlantEcologyDistributionOrderByWithAggregationInput | PlantEcologyDistributionOrderByWithAggregationInput[]
    by: PlantEcologyDistributionScalarFieldEnum[] | PlantEcologyDistributionScalarFieldEnum
    having?: PlantEcologyDistributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantEcologyDistributionCountAggregateInputType | true
    _avg?: PlantEcologyDistributionAvgAggregateInputType
    _sum?: PlantEcologyDistributionSumAggregateInputType
    _min?: PlantEcologyDistributionMinAggregateInputType
    _max?: PlantEcologyDistributionMaxAggregateInputType
  }

  export type PlantEcologyDistributionGroupByOutputType = {
    id: number
    habitat: string | null
    plantOrigin: string | null
    globalRange: string | null
    chinaRange: string | null
    endemic: string | null
    plantId: number
    _count: PlantEcologyDistributionCountAggregateOutputType | null
    _avg: PlantEcologyDistributionAvgAggregateOutputType | null
    _sum: PlantEcologyDistributionSumAggregateOutputType | null
    _min: PlantEcologyDistributionMinAggregateOutputType | null
    _max: PlantEcologyDistributionMaxAggregateOutputType | null
  }

  type GetPlantEcologyDistributionGroupByPayload<T extends PlantEcologyDistributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantEcologyDistributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantEcologyDistributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantEcologyDistributionGroupByOutputType[P]>
            : GetScalarType<T[P], PlantEcologyDistributionGroupByOutputType[P]>
        }
      >
    >


  export type PlantEcologyDistributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitat?: boolean
    plantOrigin?: boolean
    globalRange?: boolean
    chinaRange?: boolean
    endemic?: boolean
    plantId?: boolean
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantEcologyDistribution"]>

  export type PlantEcologyDistributionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitat?: boolean
    plantOrigin?: boolean
    globalRange?: boolean
    chinaRange?: boolean
    endemic?: boolean
    plantId?: boolean
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantEcologyDistribution"]>

  export type PlantEcologyDistributionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitat?: boolean
    plantOrigin?: boolean
    globalRange?: boolean
    chinaRange?: boolean
    endemic?: boolean
    plantId?: boolean
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantEcologyDistribution"]>

  export type PlantEcologyDistributionSelectScalar = {
    id?: boolean
    habitat?: boolean
    plantOrigin?: boolean
    globalRange?: boolean
    chinaRange?: boolean
    endemic?: boolean
    plantId?: boolean
  }

  export type PlantEcologyDistributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "habitat" | "plantOrigin" | "globalRange" | "chinaRange" | "endemic" | "plantId", ExtArgs["result"]["plantEcologyDistribution"]>
  export type PlantEcologyDistributionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }
  export type PlantEcologyDistributionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }
  export type PlantEcologyDistributionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }

  export type $PlantEcologyDistributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlantEcologyDistribution"
    objects: {
      plant: Prisma.$PlantNomenclaturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      habitat: string | null
      plantOrigin: string | null
      globalRange: string | null
      chinaRange: string | null
      endemic: string | null
      plantId: number
    }, ExtArgs["result"]["plantEcologyDistribution"]>
    composites: {}
  }

  type PlantEcologyDistributionGetPayload<S extends boolean | null | undefined | PlantEcologyDistributionDefaultArgs> = $Result.GetResult<Prisma.$PlantEcologyDistributionPayload, S>

  type PlantEcologyDistributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlantEcologyDistributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlantEcologyDistributionCountAggregateInputType | true
    }

  export interface PlantEcologyDistributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlantEcologyDistribution'], meta: { name: 'PlantEcologyDistribution' } }
    /**
     * Find zero or one PlantEcologyDistribution that matches the filter.
     * @param {PlantEcologyDistributionFindUniqueArgs} args - Arguments to find a PlantEcologyDistribution
     * @example
     * // Get one PlantEcologyDistribution
     * const plantEcologyDistribution = await prisma.plantEcologyDistribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantEcologyDistributionFindUniqueArgs>(args: SelectSubset<T, PlantEcologyDistributionFindUniqueArgs<ExtArgs>>): Prisma__PlantEcologyDistributionClient<$Result.GetResult<Prisma.$PlantEcologyDistributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlantEcologyDistribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlantEcologyDistributionFindUniqueOrThrowArgs} args - Arguments to find a PlantEcologyDistribution
     * @example
     * // Get one PlantEcologyDistribution
     * const plantEcologyDistribution = await prisma.plantEcologyDistribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantEcologyDistributionFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantEcologyDistributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantEcologyDistributionClient<$Result.GetResult<Prisma.$PlantEcologyDistributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlantEcologyDistribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantEcologyDistributionFindFirstArgs} args - Arguments to find a PlantEcologyDistribution
     * @example
     * // Get one PlantEcologyDistribution
     * const plantEcologyDistribution = await prisma.plantEcologyDistribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantEcologyDistributionFindFirstArgs>(args?: SelectSubset<T, PlantEcologyDistributionFindFirstArgs<ExtArgs>>): Prisma__PlantEcologyDistributionClient<$Result.GetResult<Prisma.$PlantEcologyDistributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlantEcologyDistribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantEcologyDistributionFindFirstOrThrowArgs} args - Arguments to find a PlantEcologyDistribution
     * @example
     * // Get one PlantEcologyDistribution
     * const plantEcologyDistribution = await prisma.plantEcologyDistribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantEcologyDistributionFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantEcologyDistributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantEcologyDistributionClient<$Result.GetResult<Prisma.$PlantEcologyDistributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlantEcologyDistributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantEcologyDistributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlantEcologyDistributions
     * const plantEcologyDistributions = await prisma.plantEcologyDistribution.findMany()
     * 
     * // Get first 10 PlantEcologyDistributions
     * const plantEcologyDistributions = await prisma.plantEcologyDistribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantEcologyDistributionWithIdOnly = await prisma.plantEcologyDistribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlantEcologyDistributionFindManyArgs>(args?: SelectSubset<T, PlantEcologyDistributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantEcologyDistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlantEcologyDistribution.
     * @param {PlantEcologyDistributionCreateArgs} args - Arguments to create a PlantEcologyDistribution.
     * @example
     * // Create one PlantEcologyDistribution
     * const PlantEcologyDistribution = await prisma.plantEcologyDistribution.create({
     *   data: {
     *     // ... data to create a PlantEcologyDistribution
     *   }
     * })
     * 
     */
    create<T extends PlantEcologyDistributionCreateArgs>(args: SelectSubset<T, PlantEcologyDistributionCreateArgs<ExtArgs>>): Prisma__PlantEcologyDistributionClient<$Result.GetResult<Prisma.$PlantEcologyDistributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlantEcologyDistributions.
     * @param {PlantEcologyDistributionCreateManyArgs} args - Arguments to create many PlantEcologyDistributions.
     * @example
     * // Create many PlantEcologyDistributions
     * const plantEcologyDistribution = await prisma.plantEcologyDistribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantEcologyDistributionCreateManyArgs>(args?: SelectSubset<T, PlantEcologyDistributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlantEcologyDistributions and returns the data saved in the database.
     * @param {PlantEcologyDistributionCreateManyAndReturnArgs} args - Arguments to create many PlantEcologyDistributions.
     * @example
     * // Create many PlantEcologyDistributions
     * const plantEcologyDistribution = await prisma.plantEcologyDistribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlantEcologyDistributions and only return the `id`
     * const plantEcologyDistributionWithIdOnly = await prisma.plantEcologyDistribution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlantEcologyDistributionCreateManyAndReturnArgs>(args?: SelectSubset<T, PlantEcologyDistributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantEcologyDistributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlantEcologyDistribution.
     * @param {PlantEcologyDistributionDeleteArgs} args - Arguments to delete one PlantEcologyDistribution.
     * @example
     * // Delete one PlantEcologyDistribution
     * const PlantEcologyDistribution = await prisma.plantEcologyDistribution.delete({
     *   where: {
     *     // ... filter to delete one PlantEcologyDistribution
     *   }
     * })
     * 
     */
    delete<T extends PlantEcologyDistributionDeleteArgs>(args: SelectSubset<T, PlantEcologyDistributionDeleteArgs<ExtArgs>>): Prisma__PlantEcologyDistributionClient<$Result.GetResult<Prisma.$PlantEcologyDistributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlantEcologyDistribution.
     * @param {PlantEcologyDistributionUpdateArgs} args - Arguments to update one PlantEcologyDistribution.
     * @example
     * // Update one PlantEcologyDistribution
     * const plantEcologyDistribution = await prisma.plantEcologyDistribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantEcologyDistributionUpdateArgs>(args: SelectSubset<T, PlantEcologyDistributionUpdateArgs<ExtArgs>>): Prisma__PlantEcologyDistributionClient<$Result.GetResult<Prisma.$PlantEcologyDistributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlantEcologyDistributions.
     * @param {PlantEcologyDistributionDeleteManyArgs} args - Arguments to filter PlantEcologyDistributions to delete.
     * @example
     * // Delete a few PlantEcologyDistributions
     * const { count } = await prisma.plantEcologyDistribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantEcologyDistributionDeleteManyArgs>(args?: SelectSubset<T, PlantEcologyDistributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlantEcologyDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantEcologyDistributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlantEcologyDistributions
     * const plantEcologyDistribution = await prisma.plantEcologyDistribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantEcologyDistributionUpdateManyArgs>(args: SelectSubset<T, PlantEcologyDistributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlantEcologyDistributions and returns the data updated in the database.
     * @param {PlantEcologyDistributionUpdateManyAndReturnArgs} args - Arguments to update many PlantEcologyDistributions.
     * @example
     * // Update many PlantEcologyDistributions
     * const plantEcologyDistribution = await prisma.plantEcologyDistribution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlantEcologyDistributions and only return the `id`
     * const plantEcologyDistributionWithIdOnly = await prisma.plantEcologyDistribution.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlantEcologyDistributionUpdateManyAndReturnArgs>(args: SelectSubset<T, PlantEcologyDistributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantEcologyDistributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlantEcologyDistribution.
     * @param {PlantEcologyDistributionUpsertArgs} args - Arguments to update or create a PlantEcologyDistribution.
     * @example
     * // Update or create a PlantEcologyDistribution
     * const plantEcologyDistribution = await prisma.plantEcologyDistribution.upsert({
     *   create: {
     *     // ... data to create a PlantEcologyDistribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlantEcologyDistribution we want to update
     *   }
     * })
     */
    upsert<T extends PlantEcologyDistributionUpsertArgs>(args: SelectSubset<T, PlantEcologyDistributionUpsertArgs<ExtArgs>>): Prisma__PlantEcologyDistributionClient<$Result.GetResult<Prisma.$PlantEcologyDistributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlantEcologyDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantEcologyDistributionCountArgs} args - Arguments to filter PlantEcologyDistributions to count.
     * @example
     * // Count the number of PlantEcologyDistributions
     * const count = await prisma.plantEcologyDistribution.count({
     *   where: {
     *     // ... the filter for the PlantEcologyDistributions we want to count
     *   }
     * })
    **/
    count<T extends PlantEcologyDistributionCountArgs>(
      args?: Subset<T, PlantEcologyDistributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantEcologyDistributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlantEcologyDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantEcologyDistributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlantEcologyDistributionAggregateArgs>(args: Subset<T, PlantEcologyDistributionAggregateArgs>): Prisma.PrismaPromise<GetPlantEcologyDistributionAggregateType<T>>

    /**
     * Group by PlantEcologyDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantEcologyDistributionGroupByArgs} args - Group by arguments.
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
      T extends PlantEcologyDistributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantEcologyDistributionGroupByArgs['orderBy'] }
        : { orderBy?: PlantEcologyDistributionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlantEcologyDistributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantEcologyDistributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlantEcologyDistribution model
   */
  readonly fields: PlantEcologyDistributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlantEcologyDistribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantEcologyDistributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plant<T extends PlantNomenclatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantNomenclatureDefaultArgs<ExtArgs>>): Prisma__PlantNomenclatureClient<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlantEcologyDistribution model
   */
  interface PlantEcologyDistributionFieldRefs {
    readonly id: FieldRef<"PlantEcologyDistribution", 'Int'>
    readonly habitat: FieldRef<"PlantEcologyDistribution", 'String'>
    readonly plantOrigin: FieldRef<"PlantEcologyDistribution", 'String'>
    readonly globalRange: FieldRef<"PlantEcologyDistribution", 'String'>
    readonly chinaRange: FieldRef<"PlantEcologyDistribution", 'String'>
    readonly endemic: FieldRef<"PlantEcologyDistribution", 'String'>
    readonly plantId: FieldRef<"PlantEcologyDistribution", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlantEcologyDistribution findUnique
   */
  export type PlantEcologyDistributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantEcologyDistribution
     */
    select?: PlantEcologyDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantEcologyDistribution
     */
    omit?: PlantEcologyDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantEcologyDistributionInclude<ExtArgs> | null
    /**
     * Filter, which PlantEcologyDistribution to fetch.
     */
    where: PlantEcologyDistributionWhereUniqueInput
  }

  /**
   * PlantEcologyDistribution findUniqueOrThrow
   */
  export type PlantEcologyDistributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantEcologyDistribution
     */
    select?: PlantEcologyDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantEcologyDistribution
     */
    omit?: PlantEcologyDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantEcologyDistributionInclude<ExtArgs> | null
    /**
     * Filter, which PlantEcologyDistribution to fetch.
     */
    where: PlantEcologyDistributionWhereUniqueInput
  }

  /**
   * PlantEcologyDistribution findFirst
   */
  export type PlantEcologyDistributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantEcologyDistribution
     */
    select?: PlantEcologyDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantEcologyDistribution
     */
    omit?: PlantEcologyDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantEcologyDistributionInclude<ExtArgs> | null
    /**
     * Filter, which PlantEcologyDistribution to fetch.
     */
    where?: PlantEcologyDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantEcologyDistributions to fetch.
     */
    orderBy?: PlantEcologyDistributionOrderByWithRelationInput | PlantEcologyDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantEcologyDistributions.
     */
    cursor?: PlantEcologyDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantEcologyDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantEcologyDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantEcologyDistributions.
     */
    distinct?: PlantEcologyDistributionScalarFieldEnum | PlantEcologyDistributionScalarFieldEnum[]
  }

  /**
   * PlantEcologyDistribution findFirstOrThrow
   */
  export type PlantEcologyDistributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantEcologyDistribution
     */
    select?: PlantEcologyDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantEcologyDistribution
     */
    omit?: PlantEcologyDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantEcologyDistributionInclude<ExtArgs> | null
    /**
     * Filter, which PlantEcologyDistribution to fetch.
     */
    where?: PlantEcologyDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantEcologyDistributions to fetch.
     */
    orderBy?: PlantEcologyDistributionOrderByWithRelationInput | PlantEcologyDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantEcologyDistributions.
     */
    cursor?: PlantEcologyDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantEcologyDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantEcologyDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantEcologyDistributions.
     */
    distinct?: PlantEcologyDistributionScalarFieldEnum | PlantEcologyDistributionScalarFieldEnum[]
  }

  /**
   * PlantEcologyDistribution findMany
   */
  export type PlantEcologyDistributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantEcologyDistribution
     */
    select?: PlantEcologyDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantEcologyDistribution
     */
    omit?: PlantEcologyDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantEcologyDistributionInclude<ExtArgs> | null
    /**
     * Filter, which PlantEcologyDistributions to fetch.
     */
    where?: PlantEcologyDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantEcologyDistributions to fetch.
     */
    orderBy?: PlantEcologyDistributionOrderByWithRelationInput | PlantEcologyDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlantEcologyDistributions.
     */
    cursor?: PlantEcologyDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantEcologyDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantEcologyDistributions.
     */
    skip?: number
    distinct?: PlantEcologyDistributionScalarFieldEnum | PlantEcologyDistributionScalarFieldEnum[]
  }

  /**
   * PlantEcologyDistribution create
   */
  export type PlantEcologyDistributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantEcologyDistribution
     */
    select?: PlantEcologyDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantEcologyDistribution
     */
    omit?: PlantEcologyDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantEcologyDistributionInclude<ExtArgs> | null
    /**
     * The data needed to create a PlantEcologyDistribution.
     */
    data: XOR<PlantEcologyDistributionCreateInput, PlantEcologyDistributionUncheckedCreateInput>
  }

  /**
   * PlantEcologyDistribution createMany
   */
  export type PlantEcologyDistributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlantEcologyDistributions.
     */
    data: PlantEcologyDistributionCreateManyInput | PlantEcologyDistributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlantEcologyDistribution createManyAndReturn
   */
  export type PlantEcologyDistributionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantEcologyDistribution
     */
    select?: PlantEcologyDistributionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlantEcologyDistribution
     */
    omit?: PlantEcologyDistributionOmit<ExtArgs> | null
    /**
     * The data used to create many PlantEcologyDistributions.
     */
    data: PlantEcologyDistributionCreateManyInput | PlantEcologyDistributionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantEcologyDistributionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlantEcologyDistribution update
   */
  export type PlantEcologyDistributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantEcologyDistribution
     */
    select?: PlantEcologyDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantEcologyDistribution
     */
    omit?: PlantEcologyDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantEcologyDistributionInclude<ExtArgs> | null
    /**
     * The data needed to update a PlantEcologyDistribution.
     */
    data: XOR<PlantEcologyDistributionUpdateInput, PlantEcologyDistributionUncheckedUpdateInput>
    /**
     * Choose, which PlantEcologyDistribution to update.
     */
    where: PlantEcologyDistributionWhereUniqueInput
  }

  /**
   * PlantEcologyDistribution updateMany
   */
  export type PlantEcologyDistributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlantEcologyDistributions.
     */
    data: XOR<PlantEcologyDistributionUpdateManyMutationInput, PlantEcologyDistributionUncheckedUpdateManyInput>
    /**
     * Filter which PlantEcologyDistributions to update
     */
    where?: PlantEcologyDistributionWhereInput
    /**
     * Limit how many PlantEcologyDistributions to update.
     */
    limit?: number
  }

  /**
   * PlantEcologyDistribution updateManyAndReturn
   */
  export type PlantEcologyDistributionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantEcologyDistribution
     */
    select?: PlantEcologyDistributionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlantEcologyDistribution
     */
    omit?: PlantEcologyDistributionOmit<ExtArgs> | null
    /**
     * The data used to update PlantEcologyDistributions.
     */
    data: XOR<PlantEcologyDistributionUpdateManyMutationInput, PlantEcologyDistributionUncheckedUpdateManyInput>
    /**
     * Filter which PlantEcologyDistributions to update
     */
    where?: PlantEcologyDistributionWhereInput
    /**
     * Limit how many PlantEcologyDistributions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantEcologyDistributionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlantEcologyDistribution upsert
   */
  export type PlantEcologyDistributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantEcologyDistribution
     */
    select?: PlantEcologyDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantEcologyDistribution
     */
    omit?: PlantEcologyDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantEcologyDistributionInclude<ExtArgs> | null
    /**
     * The filter to search for the PlantEcologyDistribution to update in case it exists.
     */
    where: PlantEcologyDistributionWhereUniqueInput
    /**
     * In case the PlantEcologyDistribution found by the `where` argument doesn't exist, create a new PlantEcologyDistribution with this data.
     */
    create: XOR<PlantEcologyDistributionCreateInput, PlantEcologyDistributionUncheckedCreateInput>
    /**
     * In case the PlantEcologyDistribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantEcologyDistributionUpdateInput, PlantEcologyDistributionUncheckedUpdateInput>
  }

  /**
   * PlantEcologyDistribution delete
   */
  export type PlantEcologyDistributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantEcologyDistribution
     */
    select?: PlantEcologyDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantEcologyDistribution
     */
    omit?: PlantEcologyDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantEcologyDistributionInclude<ExtArgs> | null
    /**
     * Filter which PlantEcologyDistribution to delete.
     */
    where: PlantEcologyDistributionWhereUniqueInput
  }

  /**
   * PlantEcologyDistribution deleteMany
   */
  export type PlantEcologyDistributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantEcologyDistributions to delete
     */
    where?: PlantEcologyDistributionWhereInput
    /**
     * Limit how many PlantEcologyDistributions to delete.
     */
    limit?: number
  }

  /**
   * PlantEcologyDistribution without action
   */
  export type PlantEcologyDistributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantEcologyDistribution
     */
    select?: PlantEcologyDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantEcologyDistribution
     */
    omit?: PlantEcologyDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantEcologyDistributionInclude<ExtArgs> | null
  }


  /**
   * Model PlantConservation
   */

  export type AggregatePlantConservation = {
    _count: PlantConservationCountAggregateOutputType | null
    _avg: PlantConservationAvgAggregateOutputType | null
    _sum: PlantConservationSumAggregateOutputType | null
    _min: PlantConservationMinAggregateOutputType | null
    _max: PlantConservationMaxAggregateOutputType | null
  }

  export type PlantConservationAvgAggregateOutputType = {
    id: number | null
    plantId: number | null
  }

  export type PlantConservationSumAggregateOutputType = {
    id: number | null
    plantId: number | null
  }

  export type PlantConservationMinAggregateOutputType = {
    id: number | null
    globalConservationStatus: $Enums.GlobalConservationStatus | null
    chinaConservationStatus: string | null
    protectedStatus: string | null
    invasiveStatus: $Enums.InvasiveStatus | null
    invasiveRange: string | null
    plantId: number | null
  }

  export type PlantConservationMaxAggregateOutputType = {
    id: number | null
    globalConservationStatus: $Enums.GlobalConservationStatus | null
    chinaConservationStatus: string | null
    protectedStatus: string | null
    invasiveStatus: $Enums.InvasiveStatus | null
    invasiveRange: string | null
    plantId: number | null
  }

  export type PlantConservationCountAggregateOutputType = {
    id: number
    globalConservationStatus: number
    chinaConservationStatus: number
    protectedStatus: number
    invasiveStatus: number
    invasiveRange: number
    plantId: number
    _all: number
  }


  export type PlantConservationAvgAggregateInputType = {
    id?: true
    plantId?: true
  }

  export type PlantConservationSumAggregateInputType = {
    id?: true
    plantId?: true
  }

  export type PlantConservationMinAggregateInputType = {
    id?: true
    globalConservationStatus?: true
    chinaConservationStatus?: true
    protectedStatus?: true
    invasiveStatus?: true
    invasiveRange?: true
    plantId?: true
  }

  export type PlantConservationMaxAggregateInputType = {
    id?: true
    globalConservationStatus?: true
    chinaConservationStatus?: true
    protectedStatus?: true
    invasiveStatus?: true
    invasiveRange?: true
    plantId?: true
  }

  export type PlantConservationCountAggregateInputType = {
    id?: true
    globalConservationStatus?: true
    chinaConservationStatus?: true
    protectedStatus?: true
    invasiveStatus?: true
    invasiveRange?: true
    plantId?: true
    _all?: true
  }

  export type PlantConservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantConservation to aggregate.
     */
    where?: PlantConservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantConservations to fetch.
     */
    orderBy?: PlantConservationOrderByWithRelationInput | PlantConservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantConservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantConservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantConservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlantConservations
    **/
    _count?: true | PlantConservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlantConservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlantConservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantConservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantConservationMaxAggregateInputType
  }

  export type GetPlantConservationAggregateType<T extends PlantConservationAggregateArgs> = {
        [P in keyof T & keyof AggregatePlantConservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlantConservation[P]>
      : GetScalarType<T[P], AggregatePlantConservation[P]>
  }




  export type PlantConservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantConservationWhereInput
    orderBy?: PlantConservationOrderByWithAggregationInput | PlantConservationOrderByWithAggregationInput[]
    by: PlantConservationScalarFieldEnum[] | PlantConservationScalarFieldEnum
    having?: PlantConservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantConservationCountAggregateInputType | true
    _avg?: PlantConservationAvgAggregateInputType
    _sum?: PlantConservationSumAggregateInputType
    _min?: PlantConservationMinAggregateInputType
    _max?: PlantConservationMaxAggregateInputType
  }

  export type PlantConservationGroupByOutputType = {
    id: number
    globalConservationStatus: $Enums.GlobalConservationStatus | null
    chinaConservationStatus: string | null
    protectedStatus: string | null
    invasiveStatus: $Enums.InvasiveStatus | null
    invasiveRange: string | null
    plantId: number
    _count: PlantConservationCountAggregateOutputType | null
    _avg: PlantConservationAvgAggregateOutputType | null
    _sum: PlantConservationSumAggregateOutputType | null
    _min: PlantConservationMinAggregateOutputType | null
    _max: PlantConservationMaxAggregateOutputType | null
  }

  type GetPlantConservationGroupByPayload<T extends PlantConservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantConservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantConservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantConservationGroupByOutputType[P]>
            : GetScalarType<T[P], PlantConservationGroupByOutputType[P]>
        }
      >
    >


  export type PlantConservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    globalConservationStatus?: boolean
    chinaConservationStatus?: boolean
    protectedStatus?: boolean
    invasiveStatus?: boolean
    invasiveRange?: boolean
    plantId?: boolean
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantConservation"]>

  export type PlantConservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    globalConservationStatus?: boolean
    chinaConservationStatus?: boolean
    protectedStatus?: boolean
    invasiveStatus?: boolean
    invasiveRange?: boolean
    plantId?: boolean
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantConservation"]>

  export type PlantConservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    globalConservationStatus?: boolean
    chinaConservationStatus?: boolean
    protectedStatus?: boolean
    invasiveStatus?: boolean
    invasiveRange?: boolean
    plantId?: boolean
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantConservation"]>

  export type PlantConservationSelectScalar = {
    id?: boolean
    globalConservationStatus?: boolean
    chinaConservationStatus?: boolean
    protectedStatus?: boolean
    invasiveStatus?: boolean
    invasiveRange?: boolean
    plantId?: boolean
  }

  export type PlantConservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "globalConservationStatus" | "chinaConservationStatus" | "protectedStatus" | "invasiveStatus" | "invasiveRange" | "plantId", ExtArgs["result"]["plantConservation"]>
  export type PlantConservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }
  export type PlantConservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }
  export type PlantConservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }

  export type $PlantConservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlantConservation"
    objects: {
      plant: Prisma.$PlantNomenclaturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      globalConservationStatus: $Enums.GlobalConservationStatus | null
      chinaConservationStatus: string | null
      protectedStatus: string | null
      invasiveStatus: $Enums.InvasiveStatus | null
      invasiveRange: string | null
      plantId: number
    }, ExtArgs["result"]["plantConservation"]>
    composites: {}
  }

  type PlantConservationGetPayload<S extends boolean | null | undefined | PlantConservationDefaultArgs> = $Result.GetResult<Prisma.$PlantConservationPayload, S>

  type PlantConservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlantConservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlantConservationCountAggregateInputType | true
    }

  export interface PlantConservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlantConservation'], meta: { name: 'PlantConservation' } }
    /**
     * Find zero or one PlantConservation that matches the filter.
     * @param {PlantConservationFindUniqueArgs} args - Arguments to find a PlantConservation
     * @example
     * // Get one PlantConservation
     * const plantConservation = await prisma.plantConservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantConservationFindUniqueArgs>(args: SelectSubset<T, PlantConservationFindUniqueArgs<ExtArgs>>): Prisma__PlantConservationClient<$Result.GetResult<Prisma.$PlantConservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlantConservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlantConservationFindUniqueOrThrowArgs} args - Arguments to find a PlantConservation
     * @example
     * // Get one PlantConservation
     * const plantConservation = await prisma.plantConservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantConservationFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantConservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantConservationClient<$Result.GetResult<Prisma.$PlantConservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlantConservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantConservationFindFirstArgs} args - Arguments to find a PlantConservation
     * @example
     * // Get one PlantConservation
     * const plantConservation = await prisma.plantConservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantConservationFindFirstArgs>(args?: SelectSubset<T, PlantConservationFindFirstArgs<ExtArgs>>): Prisma__PlantConservationClient<$Result.GetResult<Prisma.$PlantConservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlantConservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantConservationFindFirstOrThrowArgs} args - Arguments to find a PlantConservation
     * @example
     * // Get one PlantConservation
     * const plantConservation = await prisma.plantConservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantConservationFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantConservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantConservationClient<$Result.GetResult<Prisma.$PlantConservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlantConservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantConservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlantConservations
     * const plantConservations = await prisma.plantConservation.findMany()
     * 
     * // Get first 10 PlantConservations
     * const plantConservations = await prisma.plantConservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantConservationWithIdOnly = await prisma.plantConservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlantConservationFindManyArgs>(args?: SelectSubset<T, PlantConservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantConservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlantConservation.
     * @param {PlantConservationCreateArgs} args - Arguments to create a PlantConservation.
     * @example
     * // Create one PlantConservation
     * const PlantConservation = await prisma.plantConservation.create({
     *   data: {
     *     // ... data to create a PlantConservation
     *   }
     * })
     * 
     */
    create<T extends PlantConservationCreateArgs>(args: SelectSubset<T, PlantConservationCreateArgs<ExtArgs>>): Prisma__PlantConservationClient<$Result.GetResult<Prisma.$PlantConservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlantConservations.
     * @param {PlantConservationCreateManyArgs} args - Arguments to create many PlantConservations.
     * @example
     * // Create many PlantConservations
     * const plantConservation = await prisma.plantConservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantConservationCreateManyArgs>(args?: SelectSubset<T, PlantConservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlantConservations and returns the data saved in the database.
     * @param {PlantConservationCreateManyAndReturnArgs} args - Arguments to create many PlantConservations.
     * @example
     * // Create many PlantConservations
     * const plantConservation = await prisma.plantConservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlantConservations and only return the `id`
     * const plantConservationWithIdOnly = await prisma.plantConservation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlantConservationCreateManyAndReturnArgs>(args?: SelectSubset<T, PlantConservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantConservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlantConservation.
     * @param {PlantConservationDeleteArgs} args - Arguments to delete one PlantConservation.
     * @example
     * // Delete one PlantConservation
     * const PlantConservation = await prisma.plantConservation.delete({
     *   where: {
     *     // ... filter to delete one PlantConservation
     *   }
     * })
     * 
     */
    delete<T extends PlantConservationDeleteArgs>(args: SelectSubset<T, PlantConservationDeleteArgs<ExtArgs>>): Prisma__PlantConservationClient<$Result.GetResult<Prisma.$PlantConservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlantConservation.
     * @param {PlantConservationUpdateArgs} args - Arguments to update one PlantConservation.
     * @example
     * // Update one PlantConservation
     * const plantConservation = await prisma.plantConservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantConservationUpdateArgs>(args: SelectSubset<T, PlantConservationUpdateArgs<ExtArgs>>): Prisma__PlantConservationClient<$Result.GetResult<Prisma.$PlantConservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlantConservations.
     * @param {PlantConservationDeleteManyArgs} args - Arguments to filter PlantConservations to delete.
     * @example
     * // Delete a few PlantConservations
     * const { count } = await prisma.plantConservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantConservationDeleteManyArgs>(args?: SelectSubset<T, PlantConservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlantConservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantConservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlantConservations
     * const plantConservation = await prisma.plantConservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantConservationUpdateManyArgs>(args: SelectSubset<T, PlantConservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlantConservations and returns the data updated in the database.
     * @param {PlantConservationUpdateManyAndReturnArgs} args - Arguments to update many PlantConservations.
     * @example
     * // Update many PlantConservations
     * const plantConservation = await prisma.plantConservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlantConservations and only return the `id`
     * const plantConservationWithIdOnly = await prisma.plantConservation.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlantConservationUpdateManyAndReturnArgs>(args: SelectSubset<T, PlantConservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantConservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlantConservation.
     * @param {PlantConservationUpsertArgs} args - Arguments to update or create a PlantConservation.
     * @example
     * // Update or create a PlantConservation
     * const plantConservation = await prisma.plantConservation.upsert({
     *   create: {
     *     // ... data to create a PlantConservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlantConservation we want to update
     *   }
     * })
     */
    upsert<T extends PlantConservationUpsertArgs>(args: SelectSubset<T, PlantConservationUpsertArgs<ExtArgs>>): Prisma__PlantConservationClient<$Result.GetResult<Prisma.$PlantConservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlantConservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantConservationCountArgs} args - Arguments to filter PlantConservations to count.
     * @example
     * // Count the number of PlantConservations
     * const count = await prisma.plantConservation.count({
     *   where: {
     *     // ... the filter for the PlantConservations we want to count
     *   }
     * })
    **/
    count<T extends PlantConservationCountArgs>(
      args?: Subset<T, PlantConservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantConservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlantConservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantConservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlantConservationAggregateArgs>(args: Subset<T, PlantConservationAggregateArgs>): Prisma.PrismaPromise<GetPlantConservationAggregateType<T>>

    /**
     * Group by PlantConservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantConservationGroupByArgs} args - Group by arguments.
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
      T extends PlantConservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantConservationGroupByArgs['orderBy'] }
        : { orderBy?: PlantConservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlantConservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantConservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlantConservation model
   */
  readonly fields: PlantConservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlantConservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantConservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plant<T extends PlantNomenclatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantNomenclatureDefaultArgs<ExtArgs>>): Prisma__PlantNomenclatureClient<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlantConservation model
   */
  interface PlantConservationFieldRefs {
    readonly id: FieldRef<"PlantConservation", 'Int'>
    readonly globalConservationStatus: FieldRef<"PlantConservation", 'GlobalConservationStatus'>
    readonly chinaConservationStatus: FieldRef<"PlantConservation", 'String'>
    readonly protectedStatus: FieldRef<"PlantConservation", 'String'>
    readonly invasiveStatus: FieldRef<"PlantConservation", 'InvasiveStatus'>
    readonly invasiveRange: FieldRef<"PlantConservation", 'String'>
    readonly plantId: FieldRef<"PlantConservation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlantConservation findUnique
   */
  export type PlantConservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantConservation
     */
    select?: PlantConservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantConservation
     */
    omit?: PlantConservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantConservationInclude<ExtArgs> | null
    /**
     * Filter, which PlantConservation to fetch.
     */
    where: PlantConservationWhereUniqueInput
  }

  /**
   * PlantConservation findUniqueOrThrow
   */
  export type PlantConservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantConservation
     */
    select?: PlantConservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantConservation
     */
    omit?: PlantConservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantConservationInclude<ExtArgs> | null
    /**
     * Filter, which PlantConservation to fetch.
     */
    where: PlantConservationWhereUniqueInput
  }

  /**
   * PlantConservation findFirst
   */
  export type PlantConservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantConservation
     */
    select?: PlantConservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantConservation
     */
    omit?: PlantConservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantConservationInclude<ExtArgs> | null
    /**
     * Filter, which PlantConservation to fetch.
     */
    where?: PlantConservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantConservations to fetch.
     */
    orderBy?: PlantConservationOrderByWithRelationInput | PlantConservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantConservations.
     */
    cursor?: PlantConservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantConservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantConservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantConservations.
     */
    distinct?: PlantConservationScalarFieldEnum | PlantConservationScalarFieldEnum[]
  }

  /**
   * PlantConservation findFirstOrThrow
   */
  export type PlantConservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantConservation
     */
    select?: PlantConservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantConservation
     */
    omit?: PlantConservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantConservationInclude<ExtArgs> | null
    /**
     * Filter, which PlantConservation to fetch.
     */
    where?: PlantConservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantConservations to fetch.
     */
    orderBy?: PlantConservationOrderByWithRelationInput | PlantConservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantConservations.
     */
    cursor?: PlantConservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantConservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantConservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantConservations.
     */
    distinct?: PlantConservationScalarFieldEnum | PlantConservationScalarFieldEnum[]
  }

  /**
   * PlantConservation findMany
   */
  export type PlantConservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantConservation
     */
    select?: PlantConservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantConservation
     */
    omit?: PlantConservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantConservationInclude<ExtArgs> | null
    /**
     * Filter, which PlantConservations to fetch.
     */
    where?: PlantConservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantConservations to fetch.
     */
    orderBy?: PlantConservationOrderByWithRelationInput | PlantConservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlantConservations.
     */
    cursor?: PlantConservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantConservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantConservations.
     */
    skip?: number
    distinct?: PlantConservationScalarFieldEnum | PlantConservationScalarFieldEnum[]
  }

  /**
   * PlantConservation create
   */
  export type PlantConservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantConservation
     */
    select?: PlantConservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantConservation
     */
    omit?: PlantConservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantConservationInclude<ExtArgs> | null
    /**
     * The data needed to create a PlantConservation.
     */
    data: XOR<PlantConservationCreateInput, PlantConservationUncheckedCreateInput>
  }

  /**
   * PlantConservation createMany
   */
  export type PlantConservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlantConservations.
     */
    data: PlantConservationCreateManyInput | PlantConservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlantConservation createManyAndReturn
   */
  export type PlantConservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantConservation
     */
    select?: PlantConservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlantConservation
     */
    omit?: PlantConservationOmit<ExtArgs> | null
    /**
     * The data used to create many PlantConservations.
     */
    data: PlantConservationCreateManyInput | PlantConservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantConservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlantConservation update
   */
  export type PlantConservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantConservation
     */
    select?: PlantConservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantConservation
     */
    omit?: PlantConservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantConservationInclude<ExtArgs> | null
    /**
     * The data needed to update a PlantConservation.
     */
    data: XOR<PlantConservationUpdateInput, PlantConservationUncheckedUpdateInput>
    /**
     * Choose, which PlantConservation to update.
     */
    where: PlantConservationWhereUniqueInput
  }

  /**
   * PlantConservation updateMany
   */
  export type PlantConservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlantConservations.
     */
    data: XOR<PlantConservationUpdateManyMutationInput, PlantConservationUncheckedUpdateManyInput>
    /**
     * Filter which PlantConservations to update
     */
    where?: PlantConservationWhereInput
    /**
     * Limit how many PlantConservations to update.
     */
    limit?: number
  }

  /**
   * PlantConservation updateManyAndReturn
   */
  export type PlantConservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantConservation
     */
    select?: PlantConservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlantConservation
     */
    omit?: PlantConservationOmit<ExtArgs> | null
    /**
     * The data used to update PlantConservations.
     */
    data: XOR<PlantConservationUpdateManyMutationInput, PlantConservationUncheckedUpdateManyInput>
    /**
     * Filter which PlantConservations to update
     */
    where?: PlantConservationWhereInput
    /**
     * Limit how many PlantConservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantConservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlantConservation upsert
   */
  export type PlantConservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantConservation
     */
    select?: PlantConservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantConservation
     */
    omit?: PlantConservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantConservationInclude<ExtArgs> | null
    /**
     * The filter to search for the PlantConservation to update in case it exists.
     */
    where: PlantConservationWhereUniqueInput
    /**
     * In case the PlantConservation found by the `where` argument doesn't exist, create a new PlantConservation with this data.
     */
    create: XOR<PlantConservationCreateInput, PlantConservationUncheckedCreateInput>
    /**
     * In case the PlantConservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantConservationUpdateInput, PlantConservationUncheckedUpdateInput>
  }

  /**
   * PlantConservation delete
   */
  export type PlantConservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantConservation
     */
    select?: PlantConservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantConservation
     */
    omit?: PlantConservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantConservationInclude<ExtArgs> | null
    /**
     * Filter which PlantConservation to delete.
     */
    where: PlantConservationWhereUniqueInput
  }

  /**
   * PlantConservation deleteMany
   */
  export type PlantConservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantConservations to delete
     */
    where?: PlantConservationWhereInput
    /**
     * Limit how many PlantConservations to delete.
     */
    limit?: number
  }

  /**
   * PlantConservation without action
   */
  export type PlantConservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantConservation
     */
    select?: PlantConservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantConservation
     */
    omit?: PlantConservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantConservationInclude<ExtArgs> | null
  }


  /**
   * Model BotanicalGarden
   */

  export type AggregateBotanicalGarden = {
    _count: BotanicalGardenCountAggregateOutputType | null
    _avg: BotanicalGardenAvgAggregateOutputType | null
    _sum: BotanicalGardenSumAggregateOutputType | null
    _min: BotanicalGardenMinAggregateOutputType | null
    _max: BotanicalGardenMaxAggregateOutputType | null
  }

  export type BotanicalGardenAvgAggregateOutputType = {
    id: number | null
  }

  export type BotanicalGardenSumAggregateOutputType = {
    id: number | null
  }

  export type BotanicalGardenMinAggregateOutputType = {
    id: number | null
    botanicalGardenName: string | null
  }

  export type BotanicalGardenMaxAggregateOutputType = {
    id: number | null
    botanicalGardenName: string | null
  }

  export type BotanicalGardenCountAggregateOutputType = {
    id: number
    botanicalGardenName: number
    _all: number
  }


  export type BotanicalGardenAvgAggregateInputType = {
    id?: true
  }

  export type BotanicalGardenSumAggregateInputType = {
    id?: true
  }

  export type BotanicalGardenMinAggregateInputType = {
    id?: true
    botanicalGardenName?: true
  }

  export type BotanicalGardenMaxAggregateInputType = {
    id?: true
    botanicalGardenName?: true
  }

  export type BotanicalGardenCountAggregateInputType = {
    id?: true
    botanicalGardenName?: true
    _all?: true
  }

  export type BotanicalGardenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BotanicalGarden to aggregate.
     */
    where?: BotanicalGardenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotanicalGardens to fetch.
     */
    orderBy?: BotanicalGardenOrderByWithRelationInput | BotanicalGardenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BotanicalGardenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotanicalGardens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotanicalGardens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BotanicalGardens
    **/
    _count?: true | BotanicalGardenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BotanicalGardenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BotanicalGardenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BotanicalGardenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BotanicalGardenMaxAggregateInputType
  }

  export type GetBotanicalGardenAggregateType<T extends BotanicalGardenAggregateArgs> = {
        [P in keyof T & keyof AggregateBotanicalGarden]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBotanicalGarden[P]>
      : GetScalarType<T[P], AggregateBotanicalGarden[P]>
  }




  export type BotanicalGardenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BotanicalGardenWhereInput
    orderBy?: BotanicalGardenOrderByWithAggregationInput | BotanicalGardenOrderByWithAggregationInput[]
    by: BotanicalGardenScalarFieldEnum[] | BotanicalGardenScalarFieldEnum
    having?: BotanicalGardenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BotanicalGardenCountAggregateInputType | true
    _avg?: BotanicalGardenAvgAggregateInputType
    _sum?: BotanicalGardenSumAggregateInputType
    _min?: BotanicalGardenMinAggregateInputType
    _max?: BotanicalGardenMaxAggregateInputType
  }

  export type BotanicalGardenGroupByOutputType = {
    id: number
    botanicalGardenName: string
    _count: BotanicalGardenCountAggregateOutputType | null
    _avg: BotanicalGardenAvgAggregateOutputType | null
    _sum: BotanicalGardenSumAggregateOutputType | null
    _min: BotanicalGardenMinAggregateOutputType | null
    _max: BotanicalGardenMaxAggregateOutputType | null
  }

  type GetBotanicalGardenGroupByPayload<T extends BotanicalGardenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BotanicalGardenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BotanicalGardenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BotanicalGardenGroupByOutputType[P]>
            : GetScalarType<T[P], BotanicalGardenGroupByOutputType[P]>
        }
      >
    >


  export type BotanicalGardenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    botanicalGardenName?: boolean
    plants?: boolean | BotanicalGarden$plantsArgs<ExtArgs>
    _count?: boolean | BotanicalGardenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["botanicalGarden"]>

  export type BotanicalGardenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    botanicalGardenName?: boolean
  }, ExtArgs["result"]["botanicalGarden"]>

  export type BotanicalGardenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    botanicalGardenName?: boolean
  }, ExtArgs["result"]["botanicalGarden"]>

  export type BotanicalGardenSelectScalar = {
    id?: boolean
    botanicalGardenName?: boolean
  }

  export type BotanicalGardenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "botanicalGardenName", ExtArgs["result"]["botanicalGarden"]>
  export type BotanicalGardenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plants?: boolean | BotanicalGarden$plantsArgs<ExtArgs>
    _count?: boolean | BotanicalGardenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BotanicalGardenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BotanicalGardenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BotanicalGardenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BotanicalGarden"
    objects: {
      plants: Prisma.$PlantNomenclaturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      botanicalGardenName: string
    }, ExtArgs["result"]["botanicalGarden"]>
    composites: {}
  }

  type BotanicalGardenGetPayload<S extends boolean | null | undefined | BotanicalGardenDefaultArgs> = $Result.GetResult<Prisma.$BotanicalGardenPayload, S>

  type BotanicalGardenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BotanicalGardenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BotanicalGardenCountAggregateInputType | true
    }

  export interface BotanicalGardenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BotanicalGarden'], meta: { name: 'BotanicalGarden' } }
    /**
     * Find zero or one BotanicalGarden that matches the filter.
     * @param {BotanicalGardenFindUniqueArgs} args - Arguments to find a BotanicalGarden
     * @example
     * // Get one BotanicalGarden
     * const botanicalGarden = await prisma.botanicalGarden.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BotanicalGardenFindUniqueArgs>(args: SelectSubset<T, BotanicalGardenFindUniqueArgs<ExtArgs>>): Prisma__BotanicalGardenClient<$Result.GetResult<Prisma.$BotanicalGardenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BotanicalGarden that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BotanicalGardenFindUniqueOrThrowArgs} args - Arguments to find a BotanicalGarden
     * @example
     * // Get one BotanicalGarden
     * const botanicalGarden = await prisma.botanicalGarden.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BotanicalGardenFindUniqueOrThrowArgs>(args: SelectSubset<T, BotanicalGardenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BotanicalGardenClient<$Result.GetResult<Prisma.$BotanicalGardenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BotanicalGarden that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotanicalGardenFindFirstArgs} args - Arguments to find a BotanicalGarden
     * @example
     * // Get one BotanicalGarden
     * const botanicalGarden = await prisma.botanicalGarden.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BotanicalGardenFindFirstArgs>(args?: SelectSubset<T, BotanicalGardenFindFirstArgs<ExtArgs>>): Prisma__BotanicalGardenClient<$Result.GetResult<Prisma.$BotanicalGardenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BotanicalGarden that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotanicalGardenFindFirstOrThrowArgs} args - Arguments to find a BotanicalGarden
     * @example
     * // Get one BotanicalGarden
     * const botanicalGarden = await prisma.botanicalGarden.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BotanicalGardenFindFirstOrThrowArgs>(args?: SelectSubset<T, BotanicalGardenFindFirstOrThrowArgs<ExtArgs>>): Prisma__BotanicalGardenClient<$Result.GetResult<Prisma.$BotanicalGardenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BotanicalGardens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotanicalGardenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BotanicalGardens
     * const botanicalGardens = await prisma.botanicalGarden.findMany()
     * 
     * // Get first 10 BotanicalGardens
     * const botanicalGardens = await prisma.botanicalGarden.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const botanicalGardenWithIdOnly = await prisma.botanicalGarden.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BotanicalGardenFindManyArgs>(args?: SelectSubset<T, BotanicalGardenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotanicalGardenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BotanicalGarden.
     * @param {BotanicalGardenCreateArgs} args - Arguments to create a BotanicalGarden.
     * @example
     * // Create one BotanicalGarden
     * const BotanicalGarden = await prisma.botanicalGarden.create({
     *   data: {
     *     // ... data to create a BotanicalGarden
     *   }
     * })
     * 
     */
    create<T extends BotanicalGardenCreateArgs>(args: SelectSubset<T, BotanicalGardenCreateArgs<ExtArgs>>): Prisma__BotanicalGardenClient<$Result.GetResult<Prisma.$BotanicalGardenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BotanicalGardens.
     * @param {BotanicalGardenCreateManyArgs} args - Arguments to create many BotanicalGardens.
     * @example
     * // Create many BotanicalGardens
     * const botanicalGarden = await prisma.botanicalGarden.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BotanicalGardenCreateManyArgs>(args?: SelectSubset<T, BotanicalGardenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BotanicalGardens and returns the data saved in the database.
     * @param {BotanicalGardenCreateManyAndReturnArgs} args - Arguments to create many BotanicalGardens.
     * @example
     * // Create many BotanicalGardens
     * const botanicalGarden = await prisma.botanicalGarden.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BotanicalGardens and only return the `id`
     * const botanicalGardenWithIdOnly = await prisma.botanicalGarden.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BotanicalGardenCreateManyAndReturnArgs>(args?: SelectSubset<T, BotanicalGardenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotanicalGardenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BotanicalGarden.
     * @param {BotanicalGardenDeleteArgs} args - Arguments to delete one BotanicalGarden.
     * @example
     * // Delete one BotanicalGarden
     * const BotanicalGarden = await prisma.botanicalGarden.delete({
     *   where: {
     *     // ... filter to delete one BotanicalGarden
     *   }
     * })
     * 
     */
    delete<T extends BotanicalGardenDeleteArgs>(args: SelectSubset<T, BotanicalGardenDeleteArgs<ExtArgs>>): Prisma__BotanicalGardenClient<$Result.GetResult<Prisma.$BotanicalGardenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BotanicalGarden.
     * @param {BotanicalGardenUpdateArgs} args - Arguments to update one BotanicalGarden.
     * @example
     * // Update one BotanicalGarden
     * const botanicalGarden = await prisma.botanicalGarden.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BotanicalGardenUpdateArgs>(args: SelectSubset<T, BotanicalGardenUpdateArgs<ExtArgs>>): Prisma__BotanicalGardenClient<$Result.GetResult<Prisma.$BotanicalGardenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BotanicalGardens.
     * @param {BotanicalGardenDeleteManyArgs} args - Arguments to filter BotanicalGardens to delete.
     * @example
     * // Delete a few BotanicalGardens
     * const { count } = await prisma.botanicalGarden.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BotanicalGardenDeleteManyArgs>(args?: SelectSubset<T, BotanicalGardenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BotanicalGardens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotanicalGardenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BotanicalGardens
     * const botanicalGarden = await prisma.botanicalGarden.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BotanicalGardenUpdateManyArgs>(args: SelectSubset<T, BotanicalGardenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BotanicalGardens and returns the data updated in the database.
     * @param {BotanicalGardenUpdateManyAndReturnArgs} args - Arguments to update many BotanicalGardens.
     * @example
     * // Update many BotanicalGardens
     * const botanicalGarden = await prisma.botanicalGarden.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BotanicalGardens and only return the `id`
     * const botanicalGardenWithIdOnly = await prisma.botanicalGarden.updateManyAndReturn({
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
    updateManyAndReturn<T extends BotanicalGardenUpdateManyAndReturnArgs>(args: SelectSubset<T, BotanicalGardenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotanicalGardenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BotanicalGarden.
     * @param {BotanicalGardenUpsertArgs} args - Arguments to update or create a BotanicalGarden.
     * @example
     * // Update or create a BotanicalGarden
     * const botanicalGarden = await prisma.botanicalGarden.upsert({
     *   create: {
     *     // ... data to create a BotanicalGarden
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BotanicalGarden we want to update
     *   }
     * })
     */
    upsert<T extends BotanicalGardenUpsertArgs>(args: SelectSubset<T, BotanicalGardenUpsertArgs<ExtArgs>>): Prisma__BotanicalGardenClient<$Result.GetResult<Prisma.$BotanicalGardenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BotanicalGardens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotanicalGardenCountArgs} args - Arguments to filter BotanicalGardens to count.
     * @example
     * // Count the number of BotanicalGardens
     * const count = await prisma.botanicalGarden.count({
     *   where: {
     *     // ... the filter for the BotanicalGardens we want to count
     *   }
     * })
    **/
    count<T extends BotanicalGardenCountArgs>(
      args?: Subset<T, BotanicalGardenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BotanicalGardenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BotanicalGarden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotanicalGardenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BotanicalGardenAggregateArgs>(args: Subset<T, BotanicalGardenAggregateArgs>): Prisma.PrismaPromise<GetBotanicalGardenAggregateType<T>>

    /**
     * Group by BotanicalGarden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotanicalGardenGroupByArgs} args - Group by arguments.
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
      T extends BotanicalGardenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BotanicalGardenGroupByArgs['orderBy'] }
        : { orderBy?: BotanicalGardenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BotanicalGardenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBotanicalGardenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BotanicalGarden model
   */
  readonly fields: BotanicalGardenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BotanicalGarden.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BotanicalGardenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plants<T extends BotanicalGarden$plantsArgs<ExtArgs> = {}>(args?: Subset<T, BotanicalGarden$plantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BotanicalGarden model
   */
  interface BotanicalGardenFieldRefs {
    readonly id: FieldRef<"BotanicalGarden", 'Int'>
    readonly botanicalGardenName: FieldRef<"BotanicalGarden", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BotanicalGarden findUnique
   */
  export type BotanicalGardenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotanicalGarden
     */
    select?: BotanicalGardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotanicalGarden
     */
    omit?: BotanicalGardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotanicalGardenInclude<ExtArgs> | null
    /**
     * Filter, which BotanicalGarden to fetch.
     */
    where: BotanicalGardenWhereUniqueInput
  }

  /**
   * BotanicalGarden findUniqueOrThrow
   */
  export type BotanicalGardenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotanicalGarden
     */
    select?: BotanicalGardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotanicalGarden
     */
    omit?: BotanicalGardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotanicalGardenInclude<ExtArgs> | null
    /**
     * Filter, which BotanicalGarden to fetch.
     */
    where: BotanicalGardenWhereUniqueInput
  }

  /**
   * BotanicalGarden findFirst
   */
  export type BotanicalGardenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotanicalGarden
     */
    select?: BotanicalGardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotanicalGarden
     */
    omit?: BotanicalGardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotanicalGardenInclude<ExtArgs> | null
    /**
     * Filter, which BotanicalGarden to fetch.
     */
    where?: BotanicalGardenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotanicalGardens to fetch.
     */
    orderBy?: BotanicalGardenOrderByWithRelationInput | BotanicalGardenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BotanicalGardens.
     */
    cursor?: BotanicalGardenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotanicalGardens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotanicalGardens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotanicalGardens.
     */
    distinct?: BotanicalGardenScalarFieldEnum | BotanicalGardenScalarFieldEnum[]
  }

  /**
   * BotanicalGarden findFirstOrThrow
   */
  export type BotanicalGardenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotanicalGarden
     */
    select?: BotanicalGardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotanicalGarden
     */
    omit?: BotanicalGardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotanicalGardenInclude<ExtArgs> | null
    /**
     * Filter, which BotanicalGarden to fetch.
     */
    where?: BotanicalGardenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotanicalGardens to fetch.
     */
    orderBy?: BotanicalGardenOrderByWithRelationInput | BotanicalGardenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BotanicalGardens.
     */
    cursor?: BotanicalGardenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotanicalGardens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotanicalGardens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotanicalGardens.
     */
    distinct?: BotanicalGardenScalarFieldEnum | BotanicalGardenScalarFieldEnum[]
  }

  /**
   * BotanicalGarden findMany
   */
  export type BotanicalGardenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotanicalGarden
     */
    select?: BotanicalGardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotanicalGarden
     */
    omit?: BotanicalGardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotanicalGardenInclude<ExtArgs> | null
    /**
     * Filter, which BotanicalGardens to fetch.
     */
    where?: BotanicalGardenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotanicalGardens to fetch.
     */
    orderBy?: BotanicalGardenOrderByWithRelationInput | BotanicalGardenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BotanicalGardens.
     */
    cursor?: BotanicalGardenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotanicalGardens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotanicalGardens.
     */
    skip?: number
    distinct?: BotanicalGardenScalarFieldEnum | BotanicalGardenScalarFieldEnum[]
  }

  /**
   * BotanicalGarden create
   */
  export type BotanicalGardenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotanicalGarden
     */
    select?: BotanicalGardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotanicalGarden
     */
    omit?: BotanicalGardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotanicalGardenInclude<ExtArgs> | null
    /**
     * The data needed to create a BotanicalGarden.
     */
    data: XOR<BotanicalGardenCreateInput, BotanicalGardenUncheckedCreateInput>
  }

  /**
   * BotanicalGarden createMany
   */
  export type BotanicalGardenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BotanicalGardens.
     */
    data: BotanicalGardenCreateManyInput | BotanicalGardenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BotanicalGarden createManyAndReturn
   */
  export type BotanicalGardenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotanicalGarden
     */
    select?: BotanicalGardenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BotanicalGarden
     */
    omit?: BotanicalGardenOmit<ExtArgs> | null
    /**
     * The data used to create many BotanicalGardens.
     */
    data: BotanicalGardenCreateManyInput | BotanicalGardenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BotanicalGarden update
   */
  export type BotanicalGardenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotanicalGarden
     */
    select?: BotanicalGardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotanicalGarden
     */
    omit?: BotanicalGardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotanicalGardenInclude<ExtArgs> | null
    /**
     * The data needed to update a BotanicalGarden.
     */
    data: XOR<BotanicalGardenUpdateInput, BotanicalGardenUncheckedUpdateInput>
    /**
     * Choose, which BotanicalGarden to update.
     */
    where: BotanicalGardenWhereUniqueInput
  }

  /**
   * BotanicalGarden updateMany
   */
  export type BotanicalGardenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BotanicalGardens.
     */
    data: XOR<BotanicalGardenUpdateManyMutationInput, BotanicalGardenUncheckedUpdateManyInput>
    /**
     * Filter which BotanicalGardens to update
     */
    where?: BotanicalGardenWhereInput
    /**
     * Limit how many BotanicalGardens to update.
     */
    limit?: number
  }

  /**
   * BotanicalGarden updateManyAndReturn
   */
  export type BotanicalGardenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotanicalGarden
     */
    select?: BotanicalGardenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BotanicalGarden
     */
    omit?: BotanicalGardenOmit<ExtArgs> | null
    /**
     * The data used to update BotanicalGardens.
     */
    data: XOR<BotanicalGardenUpdateManyMutationInput, BotanicalGardenUncheckedUpdateManyInput>
    /**
     * Filter which BotanicalGardens to update
     */
    where?: BotanicalGardenWhereInput
    /**
     * Limit how many BotanicalGardens to update.
     */
    limit?: number
  }

  /**
   * BotanicalGarden upsert
   */
  export type BotanicalGardenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotanicalGarden
     */
    select?: BotanicalGardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotanicalGarden
     */
    omit?: BotanicalGardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotanicalGardenInclude<ExtArgs> | null
    /**
     * The filter to search for the BotanicalGarden to update in case it exists.
     */
    where: BotanicalGardenWhereUniqueInput
    /**
     * In case the BotanicalGarden found by the `where` argument doesn't exist, create a new BotanicalGarden with this data.
     */
    create: XOR<BotanicalGardenCreateInput, BotanicalGardenUncheckedCreateInput>
    /**
     * In case the BotanicalGarden was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BotanicalGardenUpdateInput, BotanicalGardenUncheckedUpdateInput>
  }

  /**
   * BotanicalGarden delete
   */
  export type BotanicalGardenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotanicalGarden
     */
    select?: BotanicalGardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotanicalGarden
     */
    omit?: BotanicalGardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotanicalGardenInclude<ExtArgs> | null
    /**
     * Filter which BotanicalGarden to delete.
     */
    where: BotanicalGardenWhereUniqueInput
  }

  /**
   * BotanicalGarden deleteMany
   */
  export type BotanicalGardenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BotanicalGardens to delete
     */
    where?: BotanicalGardenWhereInput
    /**
     * Limit how many BotanicalGardens to delete.
     */
    limit?: number
  }

  /**
   * BotanicalGarden.plants
   */
  export type BotanicalGarden$plantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantNomenclature
     */
    select?: PlantNomenclatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlantNomenclature
     */
    omit?: PlantNomenclatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantNomenclatureInclude<ExtArgs> | null
    where?: PlantNomenclatureWhereInput
    orderBy?: PlantNomenclatureOrderByWithRelationInput | PlantNomenclatureOrderByWithRelationInput[]
    cursor?: PlantNomenclatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlantNomenclatureScalarFieldEnum | PlantNomenclatureScalarFieldEnum[]
  }

  /**
   * BotanicalGarden without action
   */
  export type BotanicalGardenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotanicalGarden
     */
    select?: BotanicalGardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotanicalGarden
     */
    omit?: BotanicalGardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BotanicalGardenInclude<ExtArgs> | null
  }


  /**
   * Model MedicinalProperties
   */

  export type AggregateMedicinalProperties = {
    _count: MedicinalPropertiesCountAggregateOutputType | null
    _avg: MedicinalPropertiesAvgAggregateOutputType | null
    _sum: MedicinalPropertiesSumAggregateOutputType | null
    _min: MedicinalPropertiesMinAggregateOutputType | null
    _max: MedicinalPropertiesMaxAggregateOutputType | null
  }

  export type MedicinalPropertiesAvgAggregateOutputType = {
    id: number | null
  }

  export type MedicinalPropertiesSumAggregateOutputType = {
    id: number | null
  }

  export type MedicinalPropertiesMinAggregateOutputType = {
    id: number | null
    pharmaceuticalName: string | null
    herbalDrugPinyin: string | null
    actions: string | null
    toxicity: string | null
    secondaryMetabolites: string | null
  }

  export type MedicinalPropertiesMaxAggregateOutputType = {
    id: number | null
    pharmaceuticalName: string | null
    herbalDrugPinyin: string | null
    actions: string | null
    toxicity: string | null
    secondaryMetabolites: string | null
  }

  export type MedicinalPropertiesCountAggregateOutputType = {
    id: number
    pharmaceuticalName: number
    herbalDrugPinyin: number
    taste: number
    energyFlow: number
    meridians: number
    actions: number
    pharmacologicalProperties: number
    indications: number
    toxicity: number
    secondaryMetabolites: number
    _all: number
  }


  export type MedicinalPropertiesAvgAggregateInputType = {
    id?: true
  }

  export type MedicinalPropertiesSumAggregateInputType = {
    id?: true
  }

  export type MedicinalPropertiesMinAggregateInputType = {
    id?: true
    pharmaceuticalName?: true
    herbalDrugPinyin?: true
    actions?: true
    toxicity?: true
    secondaryMetabolites?: true
  }

  export type MedicinalPropertiesMaxAggregateInputType = {
    id?: true
    pharmaceuticalName?: true
    herbalDrugPinyin?: true
    actions?: true
    toxicity?: true
    secondaryMetabolites?: true
  }

  export type MedicinalPropertiesCountAggregateInputType = {
    id?: true
    pharmaceuticalName?: true
    herbalDrugPinyin?: true
    taste?: true
    energyFlow?: true
    meridians?: true
    actions?: true
    pharmacologicalProperties?: true
    indications?: true
    toxicity?: true
    secondaryMetabolites?: true
    _all?: true
  }

  export type MedicinalPropertiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicinalProperties to aggregate.
     */
    where?: MedicinalPropertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicinalProperties to fetch.
     */
    orderBy?: MedicinalPropertiesOrderByWithRelationInput | MedicinalPropertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicinalPropertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicinalProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicinalProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicinalProperties
    **/
    _count?: true | MedicinalPropertiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicinalPropertiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicinalPropertiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicinalPropertiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicinalPropertiesMaxAggregateInputType
  }

  export type GetMedicinalPropertiesAggregateType<T extends MedicinalPropertiesAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicinalProperties]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicinalProperties[P]>
      : GetScalarType<T[P], AggregateMedicinalProperties[P]>
  }




  export type MedicinalPropertiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicinalPropertiesWhereInput
    orderBy?: MedicinalPropertiesOrderByWithAggregationInput | MedicinalPropertiesOrderByWithAggregationInput[]
    by: MedicinalPropertiesScalarFieldEnum[] | MedicinalPropertiesScalarFieldEnum
    having?: MedicinalPropertiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicinalPropertiesCountAggregateInputType | true
    _avg?: MedicinalPropertiesAvgAggregateInputType
    _sum?: MedicinalPropertiesSumAggregateInputType
    _min?: MedicinalPropertiesMinAggregateInputType
    _max?: MedicinalPropertiesMaxAggregateInputType
  }

  export type MedicinalPropertiesGroupByOutputType = {
    id: number
    pharmaceuticalName: string | null
    herbalDrugPinyin: string | null
    taste: $Enums.Taste[]
    energyFlow: $Enums.EnergyFlow[]
    meridians: $Enums.Meridian[]
    actions: string | null
    pharmacologicalProperties: string[]
    indications: string[]
    toxicity: string | null
    secondaryMetabolites: string | null
    _count: MedicinalPropertiesCountAggregateOutputType | null
    _avg: MedicinalPropertiesAvgAggregateOutputType | null
    _sum: MedicinalPropertiesSumAggregateOutputType | null
    _min: MedicinalPropertiesMinAggregateOutputType | null
    _max: MedicinalPropertiesMaxAggregateOutputType | null
  }

  type GetMedicinalPropertiesGroupByPayload<T extends MedicinalPropertiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicinalPropertiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicinalPropertiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicinalPropertiesGroupByOutputType[P]>
            : GetScalarType<T[P], MedicinalPropertiesGroupByOutputType[P]>
        }
      >
    >


  export type MedicinalPropertiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmaceuticalName?: boolean
    herbalDrugPinyin?: boolean
    taste?: boolean
    energyFlow?: boolean
    meridians?: boolean
    actions?: boolean
    pharmacologicalProperties?: boolean
    indications?: boolean
    toxicity?: boolean
    secondaryMetabolites?: boolean
    herbalDrugs?: boolean | MedicinalProperties$herbalDrugsArgs<ExtArgs>
    _count?: boolean | MedicinalPropertiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicinalProperties"]>

  export type MedicinalPropertiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmaceuticalName?: boolean
    herbalDrugPinyin?: boolean
    taste?: boolean
    energyFlow?: boolean
    meridians?: boolean
    actions?: boolean
    pharmacologicalProperties?: boolean
    indications?: boolean
    toxicity?: boolean
    secondaryMetabolites?: boolean
  }, ExtArgs["result"]["medicinalProperties"]>

  export type MedicinalPropertiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmaceuticalName?: boolean
    herbalDrugPinyin?: boolean
    taste?: boolean
    energyFlow?: boolean
    meridians?: boolean
    actions?: boolean
    pharmacologicalProperties?: boolean
    indications?: boolean
    toxicity?: boolean
    secondaryMetabolites?: boolean
  }, ExtArgs["result"]["medicinalProperties"]>

  export type MedicinalPropertiesSelectScalar = {
    id?: boolean
    pharmaceuticalName?: boolean
    herbalDrugPinyin?: boolean
    taste?: boolean
    energyFlow?: boolean
    meridians?: boolean
    actions?: boolean
    pharmacologicalProperties?: boolean
    indications?: boolean
    toxicity?: boolean
    secondaryMetabolites?: boolean
  }

  export type MedicinalPropertiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pharmaceuticalName" | "herbalDrugPinyin" | "taste" | "energyFlow" | "meridians" | "actions" | "pharmacologicalProperties" | "indications" | "toxicity" | "secondaryMetabolites", ExtArgs["result"]["medicinalProperties"]>
  export type MedicinalPropertiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    herbalDrugs?: boolean | MedicinalProperties$herbalDrugsArgs<ExtArgs>
    _count?: boolean | MedicinalPropertiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicinalPropertiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MedicinalPropertiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicinalPropertiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicinalProperties"
    objects: {
      herbalDrugs: Prisma.$HerbalDrugBackgroundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pharmaceuticalName: string | null
      herbalDrugPinyin: string | null
      taste: $Enums.Taste[]
      energyFlow: $Enums.EnergyFlow[]
      meridians: $Enums.Meridian[]
      actions: string | null
      pharmacologicalProperties: string[]
      indications: string[]
      toxicity: string | null
      secondaryMetabolites: string | null
    }, ExtArgs["result"]["medicinalProperties"]>
    composites: {}
  }

  type MedicinalPropertiesGetPayload<S extends boolean | null | undefined | MedicinalPropertiesDefaultArgs> = $Result.GetResult<Prisma.$MedicinalPropertiesPayload, S>

  type MedicinalPropertiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicinalPropertiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicinalPropertiesCountAggregateInputType | true
    }

  export interface MedicinalPropertiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicinalProperties'], meta: { name: 'MedicinalProperties' } }
    /**
     * Find zero or one MedicinalProperties that matches the filter.
     * @param {MedicinalPropertiesFindUniqueArgs} args - Arguments to find a MedicinalProperties
     * @example
     * // Get one MedicinalProperties
     * const medicinalProperties = await prisma.medicinalProperties.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicinalPropertiesFindUniqueArgs>(args: SelectSubset<T, MedicinalPropertiesFindUniqueArgs<ExtArgs>>): Prisma__MedicinalPropertiesClient<$Result.GetResult<Prisma.$MedicinalPropertiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicinalProperties that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicinalPropertiesFindUniqueOrThrowArgs} args - Arguments to find a MedicinalProperties
     * @example
     * // Get one MedicinalProperties
     * const medicinalProperties = await prisma.medicinalProperties.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicinalPropertiesFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicinalPropertiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicinalPropertiesClient<$Result.GetResult<Prisma.$MedicinalPropertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicinalProperties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinalPropertiesFindFirstArgs} args - Arguments to find a MedicinalProperties
     * @example
     * // Get one MedicinalProperties
     * const medicinalProperties = await prisma.medicinalProperties.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicinalPropertiesFindFirstArgs>(args?: SelectSubset<T, MedicinalPropertiesFindFirstArgs<ExtArgs>>): Prisma__MedicinalPropertiesClient<$Result.GetResult<Prisma.$MedicinalPropertiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicinalProperties that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinalPropertiesFindFirstOrThrowArgs} args - Arguments to find a MedicinalProperties
     * @example
     * // Get one MedicinalProperties
     * const medicinalProperties = await prisma.medicinalProperties.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicinalPropertiesFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicinalPropertiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicinalPropertiesClient<$Result.GetResult<Prisma.$MedicinalPropertiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicinalProperties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinalPropertiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicinalProperties
     * const medicinalProperties = await prisma.medicinalProperties.findMany()
     * 
     * // Get first 10 MedicinalProperties
     * const medicinalProperties = await prisma.medicinalProperties.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicinalPropertiesWithIdOnly = await prisma.medicinalProperties.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicinalPropertiesFindManyArgs>(args?: SelectSubset<T, MedicinalPropertiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinalPropertiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicinalProperties.
     * @param {MedicinalPropertiesCreateArgs} args - Arguments to create a MedicinalProperties.
     * @example
     * // Create one MedicinalProperties
     * const MedicinalProperties = await prisma.medicinalProperties.create({
     *   data: {
     *     // ... data to create a MedicinalProperties
     *   }
     * })
     * 
     */
    create<T extends MedicinalPropertiesCreateArgs>(args: SelectSubset<T, MedicinalPropertiesCreateArgs<ExtArgs>>): Prisma__MedicinalPropertiesClient<$Result.GetResult<Prisma.$MedicinalPropertiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicinalProperties.
     * @param {MedicinalPropertiesCreateManyArgs} args - Arguments to create many MedicinalProperties.
     * @example
     * // Create many MedicinalProperties
     * const medicinalProperties = await prisma.medicinalProperties.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicinalPropertiesCreateManyArgs>(args?: SelectSubset<T, MedicinalPropertiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicinalProperties and returns the data saved in the database.
     * @param {MedicinalPropertiesCreateManyAndReturnArgs} args - Arguments to create many MedicinalProperties.
     * @example
     * // Create many MedicinalProperties
     * const medicinalProperties = await prisma.medicinalProperties.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicinalProperties and only return the `id`
     * const medicinalPropertiesWithIdOnly = await prisma.medicinalProperties.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicinalPropertiesCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicinalPropertiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinalPropertiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicinalProperties.
     * @param {MedicinalPropertiesDeleteArgs} args - Arguments to delete one MedicinalProperties.
     * @example
     * // Delete one MedicinalProperties
     * const MedicinalProperties = await prisma.medicinalProperties.delete({
     *   where: {
     *     // ... filter to delete one MedicinalProperties
     *   }
     * })
     * 
     */
    delete<T extends MedicinalPropertiesDeleteArgs>(args: SelectSubset<T, MedicinalPropertiesDeleteArgs<ExtArgs>>): Prisma__MedicinalPropertiesClient<$Result.GetResult<Prisma.$MedicinalPropertiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicinalProperties.
     * @param {MedicinalPropertiesUpdateArgs} args - Arguments to update one MedicinalProperties.
     * @example
     * // Update one MedicinalProperties
     * const medicinalProperties = await prisma.medicinalProperties.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicinalPropertiesUpdateArgs>(args: SelectSubset<T, MedicinalPropertiesUpdateArgs<ExtArgs>>): Prisma__MedicinalPropertiesClient<$Result.GetResult<Prisma.$MedicinalPropertiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicinalProperties.
     * @param {MedicinalPropertiesDeleteManyArgs} args - Arguments to filter MedicinalProperties to delete.
     * @example
     * // Delete a few MedicinalProperties
     * const { count } = await prisma.medicinalProperties.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicinalPropertiesDeleteManyArgs>(args?: SelectSubset<T, MedicinalPropertiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicinalProperties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinalPropertiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicinalProperties
     * const medicinalProperties = await prisma.medicinalProperties.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicinalPropertiesUpdateManyArgs>(args: SelectSubset<T, MedicinalPropertiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicinalProperties and returns the data updated in the database.
     * @param {MedicinalPropertiesUpdateManyAndReturnArgs} args - Arguments to update many MedicinalProperties.
     * @example
     * // Update many MedicinalProperties
     * const medicinalProperties = await prisma.medicinalProperties.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicinalProperties and only return the `id`
     * const medicinalPropertiesWithIdOnly = await prisma.medicinalProperties.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicinalPropertiesUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicinalPropertiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinalPropertiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicinalProperties.
     * @param {MedicinalPropertiesUpsertArgs} args - Arguments to update or create a MedicinalProperties.
     * @example
     * // Update or create a MedicinalProperties
     * const medicinalProperties = await prisma.medicinalProperties.upsert({
     *   create: {
     *     // ... data to create a MedicinalProperties
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicinalProperties we want to update
     *   }
     * })
     */
    upsert<T extends MedicinalPropertiesUpsertArgs>(args: SelectSubset<T, MedicinalPropertiesUpsertArgs<ExtArgs>>): Prisma__MedicinalPropertiesClient<$Result.GetResult<Prisma.$MedicinalPropertiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicinalProperties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinalPropertiesCountArgs} args - Arguments to filter MedicinalProperties to count.
     * @example
     * // Count the number of MedicinalProperties
     * const count = await prisma.medicinalProperties.count({
     *   where: {
     *     // ... the filter for the MedicinalProperties we want to count
     *   }
     * })
    **/
    count<T extends MedicinalPropertiesCountArgs>(
      args?: Subset<T, MedicinalPropertiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicinalPropertiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicinalProperties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinalPropertiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicinalPropertiesAggregateArgs>(args: Subset<T, MedicinalPropertiesAggregateArgs>): Prisma.PrismaPromise<GetMedicinalPropertiesAggregateType<T>>

    /**
     * Group by MedicinalProperties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinalPropertiesGroupByArgs} args - Group by arguments.
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
      T extends MedicinalPropertiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicinalPropertiesGroupByArgs['orderBy'] }
        : { orderBy?: MedicinalPropertiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicinalPropertiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicinalPropertiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicinalProperties model
   */
  readonly fields: MedicinalPropertiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicinalProperties.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicinalPropertiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    herbalDrugs<T extends MedicinalProperties$herbalDrugsArgs<ExtArgs> = {}>(args?: Subset<T, MedicinalProperties$herbalDrugsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HerbalDrugBackgroundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MedicinalProperties model
   */
  interface MedicinalPropertiesFieldRefs {
    readonly id: FieldRef<"MedicinalProperties", 'Int'>
    readonly pharmaceuticalName: FieldRef<"MedicinalProperties", 'String'>
    readonly herbalDrugPinyin: FieldRef<"MedicinalProperties", 'String'>
    readonly taste: FieldRef<"MedicinalProperties", 'Taste[]'>
    readonly energyFlow: FieldRef<"MedicinalProperties", 'EnergyFlow[]'>
    readonly meridians: FieldRef<"MedicinalProperties", 'Meridian[]'>
    readonly actions: FieldRef<"MedicinalProperties", 'String'>
    readonly pharmacologicalProperties: FieldRef<"MedicinalProperties", 'String[]'>
    readonly indications: FieldRef<"MedicinalProperties", 'String[]'>
    readonly toxicity: FieldRef<"MedicinalProperties", 'String'>
    readonly secondaryMetabolites: FieldRef<"MedicinalProperties", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MedicinalProperties findUnique
   */
  export type MedicinalPropertiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinalProperties
     */
    select?: MedicinalPropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinalProperties
     */
    omit?: MedicinalPropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinalPropertiesInclude<ExtArgs> | null
    /**
     * Filter, which MedicinalProperties to fetch.
     */
    where: MedicinalPropertiesWhereUniqueInput
  }

  /**
   * MedicinalProperties findUniqueOrThrow
   */
  export type MedicinalPropertiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinalProperties
     */
    select?: MedicinalPropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinalProperties
     */
    omit?: MedicinalPropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinalPropertiesInclude<ExtArgs> | null
    /**
     * Filter, which MedicinalProperties to fetch.
     */
    where: MedicinalPropertiesWhereUniqueInput
  }

  /**
   * MedicinalProperties findFirst
   */
  export type MedicinalPropertiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinalProperties
     */
    select?: MedicinalPropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinalProperties
     */
    omit?: MedicinalPropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinalPropertiesInclude<ExtArgs> | null
    /**
     * Filter, which MedicinalProperties to fetch.
     */
    where?: MedicinalPropertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicinalProperties to fetch.
     */
    orderBy?: MedicinalPropertiesOrderByWithRelationInput | MedicinalPropertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicinalProperties.
     */
    cursor?: MedicinalPropertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicinalProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicinalProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicinalProperties.
     */
    distinct?: MedicinalPropertiesScalarFieldEnum | MedicinalPropertiesScalarFieldEnum[]
  }

  /**
   * MedicinalProperties findFirstOrThrow
   */
  export type MedicinalPropertiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinalProperties
     */
    select?: MedicinalPropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinalProperties
     */
    omit?: MedicinalPropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinalPropertiesInclude<ExtArgs> | null
    /**
     * Filter, which MedicinalProperties to fetch.
     */
    where?: MedicinalPropertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicinalProperties to fetch.
     */
    orderBy?: MedicinalPropertiesOrderByWithRelationInput | MedicinalPropertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicinalProperties.
     */
    cursor?: MedicinalPropertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicinalProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicinalProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicinalProperties.
     */
    distinct?: MedicinalPropertiesScalarFieldEnum | MedicinalPropertiesScalarFieldEnum[]
  }

  /**
   * MedicinalProperties findMany
   */
  export type MedicinalPropertiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinalProperties
     */
    select?: MedicinalPropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinalProperties
     */
    omit?: MedicinalPropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinalPropertiesInclude<ExtArgs> | null
    /**
     * Filter, which MedicinalProperties to fetch.
     */
    where?: MedicinalPropertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicinalProperties to fetch.
     */
    orderBy?: MedicinalPropertiesOrderByWithRelationInput | MedicinalPropertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicinalProperties.
     */
    cursor?: MedicinalPropertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicinalProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicinalProperties.
     */
    skip?: number
    distinct?: MedicinalPropertiesScalarFieldEnum | MedicinalPropertiesScalarFieldEnum[]
  }

  /**
   * MedicinalProperties create
   */
  export type MedicinalPropertiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinalProperties
     */
    select?: MedicinalPropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinalProperties
     */
    omit?: MedicinalPropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinalPropertiesInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicinalProperties.
     */
    data?: XOR<MedicinalPropertiesCreateInput, MedicinalPropertiesUncheckedCreateInput>
  }

  /**
   * MedicinalProperties createMany
   */
  export type MedicinalPropertiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicinalProperties.
     */
    data: MedicinalPropertiesCreateManyInput | MedicinalPropertiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicinalProperties createManyAndReturn
   */
  export type MedicinalPropertiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinalProperties
     */
    select?: MedicinalPropertiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinalProperties
     */
    omit?: MedicinalPropertiesOmit<ExtArgs> | null
    /**
     * The data used to create many MedicinalProperties.
     */
    data: MedicinalPropertiesCreateManyInput | MedicinalPropertiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicinalProperties update
   */
  export type MedicinalPropertiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinalProperties
     */
    select?: MedicinalPropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinalProperties
     */
    omit?: MedicinalPropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinalPropertiesInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicinalProperties.
     */
    data: XOR<MedicinalPropertiesUpdateInput, MedicinalPropertiesUncheckedUpdateInput>
    /**
     * Choose, which MedicinalProperties to update.
     */
    where: MedicinalPropertiesWhereUniqueInput
  }

  /**
   * MedicinalProperties updateMany
   */
  export type MedicinalPropertiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicinalProperties.
     */
    data: XOR<MedicinalPropertiesUpdateManyMutationInput, MedicinalPropertiesUncheckedUpdateManyInput>
    /**
     * Filter which MedicinalProperties to update
     */
    where?: MedicinalPropertiesWhereInput
    /**
     * Limit how many MedicinalProperties to update.
     */
    limit?: number
  }

  /**
   * MedicinalProperties updateManyAndReturn
   */
  export type MedicinalPropertiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinalProperties
     */
    select?: MedicinalPropertiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinalProperties
     */
    omit?: MedicinalPropertiesOmit<ExtArgs> | null
    /**
     * The data used to update MedicinalProperties.
     */
    data: XOR<MedicinalPropertiesUpdateManyMutationInput, MedicinalPropertiesUncheckedUpdateManyInput>
    /**
     * Filter which MedicinalProperties to update
     */
    where?: MedicinalPropertiesWhereInput
    /**
     * Limit how many MedicinalProperties to update.
     */
    limit?: number
  }

  /**
   * MedicinalProperties upsert
   */
  export type MedicinalPropertiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinalProperties
     */
    select?: MedicinalPropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinalProperties
     */
    omit?: MedicinalPropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinalPropertiesInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicinalProperties to update in case it exists.
     */
    where: MedicinalPropertiesWhereUniqueInput
    /**
     * In case the MedicinalProperties found by the `where` argument doesn't exist, create a new MedicinalProperties with this data.
     */
    create: XOR<MedicinalPropertiesCreateInput, MedicinalPropertiesUncheckedCreateInput>
    /**
     * In case the MedicinalProperties was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicinalPropertiesUpdateInput, MedicinalPropertiesUncheckedUpdateInput>
  }

  /**
   * MedicinalProperties delete
   */
  export type MedicinalPropertiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinalProperties
     */
    select?: MedicinalPropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinalProperties
     */
    omit?: MedicinalPropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinalPropertiesInclude<ExtArgs> | null
    /**
     * Filter which MedicinalProperties to delete.
     */
    where: MedicinalPropertiesWhereUniqueInput
  }

  /**
   * MedicinalProperties deleteMany
   */
  export type MedicinalPropertiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicinalProperties to delete
     */
    where?: MedicinalPropertiesWhereInput
    /**
     * Limit how many MedicinalProperties to delete.
     */
    limit?: number
  }

  /**
   * MedicinalProperties.herbalDrugs
   */
  export type MedicinalProperties$herbalDrugsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbalDrugBackground
     */
    select?: HerbalDrugBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbalDrugBackground
     */
    omit?: HerbalDrugBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HerbalDrugBackgroundInclude<ExtArgs> | null
    where?: HerbalDrugBackgroundWhereInput
    orderBy?: HerbalDrugBackgroundOrderByWithRelationInput | HerbalDrugBackgroundOrderByWithRelationInput[]
    cursor?: HerbalDrugBackgroundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HerbalDrugBackgroundScalarFieldEnum | HerbalDrugBackgroundScalarFieldEnum[]
  }

  /**
   * MedicinalProperties without action
   */
  export type MedicinalPropertiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinalProperties
     */
    select?: MedicinalPropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinalProperties
     */
    omit?: MedicinalPropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinalPropertiesInclude<ExtArgs> | null
  }


  /**
   * Model HerbalDrugBackground
   */

  export type AggregateHerbalDrugBackground = {
    _count: HerbalDrugBackgroundCountAggregateOutputType | null
    _avg: HerbalDrugBackgroundAvgAggregateOutputType | null
    _sum: HerbalDrugBackgroundSumAggregateOutputType | null
    _min: HerbalDrugBackgroundMinAggregateOutputType | null
    _max: HerbalDrugBackgroundMaxAggregateOutputType | null
  }

  export type HerbalDrugBackgroundAvgAggregateOutputType = {
    id: number | null
  }

  export type HerbalDrugBackgroundSumAggregateOutputType = {
    id: number | null
  }

  export type HerbalDrugBackgroundMinAggregateOutputType = {
    id: number | null
    herbalDrugPinyin: string | null
    plantPartUsed: string | null
    officialStatus: boolean | null
    harvestingTimeNote: string | null
    primaryProcessing: string | null
    secondaryProcessing: string | null
    herbalDruglImage: string | null
    plantScientificName: string | null
    pharmaceuticalName: string | null
  }

  export type HerbalDrugBackgroundMaxAggregateOutputType = {
    id: number | null
    herbalDrugPinyin: string | null
    plantPartUsed: string | null
    officialStatus: boolean | null
    harvestingTimeNote: string | null
    primaryProcessing: string | null
    secondaryProcessing: string | null
    herbalDruglImage: string | null
    plantScientificName: string | null
    pharmaceuticalName: string | null
  }

  export type HerbalDrugBackgroundCountAggregateOutputType = {
    id: number
    herbalDrugPinyin: number
    plantPartUsed: number
    officialStatus: number
    harvestingTime: number
    harvestingTimeNote: number
    primaryProcessing: number
    secondaryProcessing: number
    herbalDruglImage: number
    plantScientificName: number
    pharmaceuticalName: number
    _all: number
  }


  export type HerbalDrugBackgroundAvgAggregateInputType = {
    id?: true
  }

  export type HerbalDrugBackgroundSumAggregateInputType = {
    id?: true
  }

  export type HerbalDrugBackgroundMinAggregateInputType = {
    id?: true
    herbalDrugPinyin?: true
    plantPartUsed?: true
    officialStatus?: true
    harvestingTimeNote?: true
    primaryProcessing?: true
    secondaryProcessing?: true
    herbalDruglImage?: true
    plantScientificName?: true
    pharmaceuticalName?: true
  }

  export type HerbalDrugBackgroundMaxAggregateInputType = {
    id?: true
    herbalDrugPinyin?: true
    plantPartUsed?: true
    officialStatus?: true
    harvestingTimeNote?: true
    primaryProcessing?: true
    secondaryProcessing?: true
    herbalDruglImage?: true
    plantScientificName?: true
    pharmaceuticalName?: true
  }

  export type HerbalDrugBackgroundCountAggregateInputType = {
    id?: true
    herbalDrugPinyin?: true
    plantPartUsed?: true
    officialStatus?: true
    harvestingTime?: true
    harvestingTimeNote?: true
    primaryProcessing?: true
    secondaryProcessing?: true
    herbalDruglImage?: true
    plantScientificName?: true
    pharmaceuticalName?: true
    _all?: true
  }

  export type HerbalDrugBackgroundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HerbalDrugBackground to aggregate.
     */
    where?: HerbalDrugBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HerbalDrugBackgrounds to fetch.
     */
    orderBy?: HerbalDrugBackgroundOrderByWithRelationInput | HerbalDrugBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HerbalDrugBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HerbalDrugBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HerbalDrugBackgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HerbalDrugBackgrounds
    **/
    _count?: true | HerbalDrugBackgroundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HerbalDrugBackgroundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HerbalDrugBackgroundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HerbalDrugBackgroundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HerbalDrugBackgroundMaxAggregateInputType
  }

  export type GetHerbalDrugBackgroundAggregateType<T extends HerbalDrugBackgroundAggregateArgs> = {
        [P in keyof T & keyof AggregateHerbalDrugBackground]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHerbalDrugBackground[P]>
      : GetScalarType<T[P], AggregateHerbalDrugBackground[P]>
  }




  export type HerbalDrugBackgroundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HerbalDrugBackgroundWhereInput
    orderBy?: HerbalDrugBackgroundOrderByWithAggregationInput | HerbalDrugBackgroundOrderByWithAggregationInput[]
    by: HerbalDrugBackgroundScalarFieldEnum[] | HerbalDrugBackgroundScalarFieldEnum
    having?: HerbalDrugBackgroundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HerbalDrugBackgroundCountAggregateInputType | true
    _avg?: HerbalDrugBackgroundAvgAggregateInputType
    _sum?: HerbalDrugBackgroundSumAggregateInputType
    _min?: HerbalDrugBackgroundMinAggregateInputType
    _max?: HerbalDrugBackgroundMaxAggregateInputType
  }

  export type HerbalDrugBackgroundGroupByOutputType = {
    id: number
    herbalDrugPinyin: string
    plantPartUsed: string | null
    officialStatus: boolean | null
    harvestingTime: $Enums.Month[]
    harvestingTimeNote: string | null
    primaryProcessing: string | null
    secondaryProcessing: string | null
    herbalDruglImage: string | null
    plantScientificName: string
    pharmaceuticalName: string
    _count: HerbalDrugBackgroundCountAggregateOutputType | null
    _avg: HerbalDrugBackgroundAvgAggregateOutputType | null
    _sum: HerbalDrugBackgroundSumAggregateOutputType | null
    _min: HerbalDrugBackgroundMinAggregateOutputType | null
    _max: HerbalDrugBackgroundMaxAggregateOutputType | null
  }

  type GetHerbalDrugBackgroundGroupByPayload<T extends HerbalDrugBackgroundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HerbalDrugBackgroundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HerbalDrugBackgroundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HerbalDrugBackgroundGroupByOutputType[P]>
            : GetScalarType<T[P], HerbalDrugBackgroundGroupByOutputType[P]>
        }
      >
    >


  export type HerbalDrugBackgroundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    herbalDrugPinyin?: boolean
    plantPartUsed?: boolean
    officialStatus?: boolean
    harvestingTime?: boolean
    harvestingTimeNote?: boolean
    primaryProcessing?: boolean
    secondaryProcessing?: boolean
    herbalDruglImage?: boolean
    plantScientificName?: boolean
    pharmaceuticalName?: boolean
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
    medicinalProperty?: boolean | MedicinalPropertiesDefaultArgs<ExtArgs>
    sourcingBackgrounds?: boolean | HerbalDrugBackground$sourcingBackgroundsArgs<ExtArgs>
  }, ExtArgs["result"]["herbalDrugBackground"]>

  export type HerbalDrugBackgroundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    herbalDrugPinyin?: boolean
    plantPartUsed?: boolean
    officialStatus?: boolean
    harvestingTime?: boolean
    harvestingTimeNote?: boolean
    primaryProcessing?: boolean
    secondaryProcessing?: boolean
    herbalDruglImage?: boolean
    plantScientificName?: boolean
    pharmaceuticalName?: boolean
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
    medicinalProperty?: boolean | MedicinalPropertiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["herbalDrugBackground"]>

  export type HerbalDrugBackgroundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    herbalDrugPinyin?: boolean
    plantPartUsed?: boolean
    officialStatus?: boolean
    harvestingTime?: boolean
    harvestingTimeNote?: boolean
    primaryProcessing?: boolean
    secondaryProcessing?: boolean
    herbalDruglImage?: boolean
    plantScientificName?: boolean
    pharmaceuticalName?: boolean
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
    medicinalProperty?: boolean | MedicinalPropertiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["herbalDrugBackground"]>

  export type HerbalDrugBackgroundSelectScalar = {
    id?: boolean
    herbalDrugPinyin?: boolean
    plantPartUsed?: boolean
    officialStatus?: boolean
    harvestingTime?: boolean
    harvestingTimeNote?: boolean
    primaryProcessing?: boolean
    secondaryProcessing?: boolean
    herbalDruglImage?: boolean
    plantScientificName?: boolean
    pharmaceuticalName?: boolean
  }

  export type HerbalDrugBackgroundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "herbalDrugPinyin" | "plantPartUsed" | "officialStatus" | "harvestingTime" | "harvestingTimeNote" | "primaryProcessing" | "secondaryProcessing" | "herbalDruglImage" | "plantScientificName" | "pharmaceuticalName", ExtArgs["result"]["herbalDrugBackground"]>
  export type HerbalDrugBackgroundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
    medicinalProperty?: boolean | MedicinalPropertiesDefaultArgs<ExtArgs>
    sourcingBackgrounds?: boolean | HerbalDrugBackground$sourcingBackgroundsArgs<ExtArgs>
  }
  export type HerbalDrugBackgroundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
    medicinalProperty?: boolean | MedicinalPropertiesDefaultArgs<ExtArgs>
  }
  export type HerbalDrugBackgroundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
    medicinalProperty?: boolean | MedicinalPropertiesDefaultArgs<ExtArgs>
  }

  export type $HerbalDrugBackgroundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HerbalDrugBackground"
    objects: {
      plant: Prisma.$PlantNomenclaturePayload<ExtArgs>
      medicinalProperty: Prisma.$MedicinalPropertiesPayload<ExtArgs>
      sourcingBackgrounds: Prisma.$SourcingBackgroundPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      herbalDrugPinyin: string
      plantPartUsed: string | null
      officialStatus: boolean | null
      harvestingTime: $Enums.Month[]
      harvestingTimeNote: string | null
      primaryProcessing: string | null
      secondaryProcessing: string | null
      herbalDruglImage: string | null
      plantScientificName: string
      pharmaceuticalName: string
    }, ExtArgs["result"]["herbalDrugBackground"]>
    composites: {}
  }

  type HerbalDrugBackgroundGetPayload<S extends boolean | null | undefined | HerbalDrugBackgroundDefaultArgs> = $Result.GetResult<Prisma.$HerbalDrugBackgroundPayload, S>

  type HerbalDrugBackgroundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HerbalDrugBackgroundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HerbalDrugBackgroundCountAggregateInputType | true
    }

  export interface HerbalDrugBackgroundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HerbalDrugBackground'], meta: { name: 'HerbalDrugBackground' } }
    /**
     * Find zero or one HerbalDrugBackground that matches the filter.
     * @param {HerbalDrugBackgroundFindUniqueArgs} args - Arguments to find a HerbalDrugBackground
     * @example
     * // Get one HerbalDrugBackground
     * const herbalDrugBackground = await prisma.herbalDrugBackground.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HerbalDrugBackgroundFindUniqueArgs>(args: SelectSubset<T, HerbalDrugBackgroundFindUniqueArgs<ExtArgs>>): Prisma__HerbalDrugBackgroundClient<$Result.GetResult<Prisma.$HerbalDrugBackgroundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HerbalDrugBackground that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HerbalDrugBackgroundFindUniqueOrThrowArgs} args - Arguments to find a HerbalDrugBackground
     * @example
     * // Get one HerbalDrugBackground
     * const herbalDrugBackground = await prisma.herbalDrugBackground.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HerbalDrugBackgroundFindUniqueOrThrowArgs>(args: SelectSubset<T, HerbalDrugBackgroundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HerbalDrugBackgroundClient<$Result.GetResult<Prisma.$HerbalDrugBackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HerbalDrugBackground that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbalDrugBackgroundFindFirstArgs} args - Arguments to find a HerbalDrugBackground
     * @example
     * // Get one HerbalDrugBackground
     * const herbalDrugBackground = await prisma.herbalDrugBackground.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HerbalDrugBackgroundFindFirstArgs>(args?: SelectSubset<T, HerbalDrugBackgroundFindFirstArgs<ExtArgs>>): Prisma__HerbalDrugBackgroundClient<$Result.GetResult<Prisma.$HerbalDrugBackgroundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HerbalDrugBackground that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbalDrugBackgroundFindFirstOrThrowArgs} args - Arguments to find a HerbalDrugBackground
     * @example
     * // Get one HerbalDrugBackground
     * const herbalDrugBackground = await prisma.herbalDrugBackground.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HerbalDrugBackgroundFindFirstOrThrowArgs>(args?: SelectSubset<T, HerbalDrugBackgroundFindFirstOrThrowArgs<ExtArgs>>): Prisma__HerbalDrugBackgroundClient<$Result.GetResult<Prisma.$HerbalDrugBackgroundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HerbalDrugBackgrounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbalDrugBackgroundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HerbalDrugBackgrounds
     * const herbalDrugBackgrounds = await prisma.herbalDrugBackground.findMany()
     * 
     * // Get first 10 HerbalDrugBackgrounds
     * const herbalDrugBackgrounds = await prisma.herbalDrugBackground.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const herbalDrugBackgroundWithIdOnly = await prisma.herbalDrugBackground.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HerbalDrugBackgroundFindManyArgs>(args?: SelectSubset<T, HerbalDrugBackgroundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HerbalDrugBackgroundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HerbalDrugBackground.
     * @param {HerbalDrugBackgroundCreateArgs} args - Arguments to create a HerbalDrugBackground.
     * @example
     * // Create one HerbalDrugBackground
     * const HerbalDrugBackground = await prisma.herbalDrugBackground.create({
     *   data: {
     *     // ... data to create a HerbalDrugBackground
     *   }
     * })
     * 
     */
    create<T extends HerbalDrugBackgroundCreateArgs>(args: SelectSubset<T, HerbalDrugBackgroundCreateArgs<ExtArgs>>): Prisma__HerbalDrugBackgroundClient<$Result.GetResult<Prisma.$HerbalDrugBackgroundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HerbalDrugBackgrounds.
     * @param {HerbalDrugBackgroundCreateManyArgs} args - Arguments to create many HerbalDrugBackgrounds.
     * @example
     * // Create many HerbalDrugBackgrounds
     * const herbalDrugBackground = await prisma.herbalDrugBackground.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HerbalDrugBackgroundCreateManyArgs>(args?: SelectSubset<T, HerbalDrugBackgroundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HerbalDrugBackgrounds and returns the data saved in the database.
     * @param {HerbalDrugBackgroundCreateManyAndReturnArgs} args - Arguments to create many HerbalDrugBackgrounds.
     * @example
     * // Create many HerbalDrugBackgrounds
     * const herbalDrugBackground = await prisma.herbalDrugBackground.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HerbalDrugBackgrounds and only return the `id`
     * const herbalDrugBackgroundWithIdOnly = await prisma.herbalDrugBackground.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HerbalDrugBackgroundCreateManyAndReturnArgs>(args?: SelectSubset<T, HerbalDrugBackgroundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HerbalDrugBackgroundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HerbalDrugBackground.
     * @param {HerbalDrugBackgroundDeleteArgs} args - Arguments to delete one HerbalDrugBackground.
     * @example
     * // Delete one HerbalDrugBackground
     * const HerbalDrugBackground = await prisma.herbalDrugBackground.delete({
     *   where: {
     *     // ... filter to delete one HerbalDrugBackground
     *   }
     * })
     * 
     */
    delete<T extends HerbalDrugBackgroundDeleteArgs>(args: SelectSubset<T, HerbalDrugBackgroundDeleteArgs<ExtArgs>>): Prisma__HerbalDrugBackgroundClient<$Result.GetResult<Prisma.$HerbalDrugBackgroundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HerbalDrugBackground.
     * @param {HerbalDrugBackgroundUpdateArgs} args - Arguments to update one HerbalDrugBackground.
     * @example
     * // Update one HerbalDrugBackground
     * const herbalDrugBackground = await prisma.herbalDrugBackground.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HerbalDrugBackgroundUpdateArgs>(args: SelectSubset<T, HerbalDrugBackgroundUpdateArgs<ExtArgs>>): Prisma__HerbalDrugBackgroundClient<$Result.GetResult<Prisma.$HerbalDrugBackgroundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HerbalDrugBackgrounds.
     * @param {HerbalDrugBackgroundDeleteManyArgs} args - Arguments to filter HerbalDrugBackgrounds to delete.
     * @example
     * // Delete a few HerbalDrugBackgrounds
     * const { count } = await prisma.herbalDrugBackground.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HerbalDrugBackgroundDeleteManyArgs>(args?: SelectSubset<T, HerbalDrugBackgroundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HerbalDrugBackgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbalDrugBackgroundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HerbalDrugBackgrounds
     * const herbalDrugBackground = await prisma.herbalDrugBackground.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HerbalDrugBackgroundUpdateManyArgs>(args: SelectSubset<T, HerbalDrugBackgroundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HerbalDrugBackgrounds and returns the data updated in the database.
     * @param {HerbalDrugBackgroundUpdateManyAndReturnArgs} args - Arguments to update many HerbalDrugBackgrounds.
     * @example
     * // Update many HerbalDrugBackgrounds
     * const herbalDrugBackground = await prisma.herbalDrugBackground.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HerbalDrugBackgrounds and only return the `id`
     * const herbalDrugBackgroundWithIdOnly = await prisma.herbalDrugBackground.updateManyAndReturn({
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
    updateManyAndReturn<T extends HerbalDrugBackgroundUpdateManyAndReturnArgs>(args: SelectSubset<T, HerbalDrugBackgroundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HerbalDrugBackgroundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HerbalDrugBackground.
     * @param {HerbalDrugBackgroundUpsertArgs} args - Arguments to update or create a HerbalDrugBackground.
     * @example
     * // Update or create a HerbalDrugBackground
     * const herbalDrugBackground = await prisma.herbalDrugBackground.upsert({
     *   create: {
     *     // ... data to create a HerbalDrugBackground
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HerbalDrugBackground we want to update
     *   }
     * })
     */
    upsert<T extends HerbalDrugBackgroundUpsertArgs>(args: SelectSubset<T, HerbalDrugBackgroundUpsertArgs<ExtArgs>>): Prisma__HerbalDrugBackgroundClient<$Result.GetResult<Prisma.$HerbalDrugBackgroundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HerbalDrugBackgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbalDrugBackgroundCountArgs} args - Arguments to filter HerbalDrugBackgrounds to count.
     * @example
     * // Count the number of HerbalDrugBackgrounds
     * const count = await prisma.herbalDrugBackground.count({
     *   where: {
     *     // ... the filter for the HerbalDrugBackgrounds we want to count
     *   }
     * })
    **/
    count<T extends HerbalDrugBackgroundCountArgs>(
      args?: Subset<T, HerbalDrugBackgroundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HerbalDrugBackgroundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HerbalDrugBackground.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbalDrugBackgroundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HerbalDrugBackgroundAggregateArgs>(args: Subset<T, HerbalDrugBackgroundAggregateArgs>): Prisma.PrismaPromise<GetHerbalDrugBackgroundAggregateType<T>>

    /**
     * Group by HerbalDrugBackground.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HerbalDrugBackgroundGroupByArgs} args - Group by arguments.
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
      T extends HerbalDrugBackgroundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HerbalDrugBackgroundGroupByArgs['orderBy'] }
        : { orderBy?: HerbalDrugBackgroundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HerbalDrugBackgroundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHerbalDrugBackgroundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HerbalDrugBackground model
   */
  readonly fields: HerbalDrugBackgroundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HerbalDrugBackground.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HerbalDrugBackgroundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plant<T extends PlantNomenclatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantNomenclatureDefaultArgs<ExtArgs>>): Prisma__PlantNomenclatureClient<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicinalProperty<T extends MedicinalPropertiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicinalPropertiesDefaultArgs<ExtArgs>>): Prisma__MedicinalPropertiesClient<$Result.GetResult<Prisma.$MedicinalPropertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sourcingBackgrounds<T extends HerbalDrugBackground$sourcingBackgroundsArgs<ExtArgs> = {}>(args?: Subset<T, HerbalDrugBackground$sourcingBackgroundsArgs<ExtArgs>>): Prisma__SourcingBackgroundClient<$Result.GetResult<Prisma.$SourcingBackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HerbalDrugBackground model
   */
  interface HerbalDrugBackgroundFieldRefs {
    readonly id: FieldRef<"HerbalDrugBackground", 'Int'>
    readonly herbalDrugPinyin: FieldRef<"HerbalDrugBackground", 'String'>
    readonly plantPartUsed: FieldRef<"HerbalDrugBackground", 'String'>
    readonly officialStatus: FieldRef<"HerbalDrugBackground", 'Boolean'>
    readonly harvestingTime: FieldRef<"HerbalDrugBackground", 'Month[]'>
    readonly harvestingTimeNote: FieldRef<"HerbalDrugBackground", 'String'>
    readonly primaryProcessing: FieldRef<"HerbalDrugBackground", 'String'>
    readonly secondaryProcessing: FieldRef<"HerbalDrugBackground", 'String'>
    readonly herbalDruglImage: FieldRef<"HerbalDrugBackground", 'String'>
    readonly plantScientificName: FieldRef<"HerbalDrugBackground", 'String'>
    readonly pharmaceuticalName: FieldRef<"HerbalDrugBackground", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HerbalDrugBackground findUnique
   */
  export type HerbalDrugBackgroundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbalDrugBackground
     */
    select?: HerbalDrugBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbalDrugBackground
     */
    omit?: HerbalDrugBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HerbalDrugBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which HerbalDrugBackground to fetch.
     */
    where: HerbalDrugBackgroundWhereUniqueInput
  }

  /**
   * HerbalDrugBackground findUniqueOrThrow
   */
  export type HerbalDrugBackgroundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbalDrugBackground
     */
    select?: HerbalDrugBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbalDrugBackground
     */
    omit?: HerbalDrugBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HerbalDrugBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which HerbalDrugBackground to fetch.
     */
    where: HerbalDrugBackgroundWhereUniqueInput
  }

  /**
   * HerbalDrugBackground findFirst
   */
  export type HerbalDrugBackgroundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbalDrugBackground
     */
    select?: HerbalDrugBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbalDrugBackground
     */
    omit?: HerbalDrugBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HerbalDrugBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which HerbalDrugBackground to fetch.
     */
    where?: HerbalDrugBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HerbalDrugBackgrounds to fetch.
     */
    orderBy?: HerbalDrugBackgroundOrderByWithRelationInput | HerbalDrugBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HerbalDrugBackgrounds.
     */
    cursor?: HerbalDrugBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HerbalDrugBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HerbalDrugBackgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HerbalDrugBackgrounds.
     */
    distinct?: HerbalDrugBackgroundScalarFieldEnum | HerbalDrugBackgroundScalarFieldEnum[]
  }

  /**
   * HerbalDrugBackground findFirstOrThrow
   */
  export type HerbalDrugBackgroundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbalDrugBackground
     */
    select?: HerbalDrugBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbalDrugBackground
     */
    omit?: HerbalDrugBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HerbalDrugBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which HerbalDrugBackground to fetch.
     */
    where?: HerbalDrugBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HerbalDrugBackgrounds to fetch.
     */
    orderBy?: HerbalDrugBackgroundOrderByWithRelationInput | HerbalDrugBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HerbalDrugBackgrounds.
     */
    cursor?: HerbalDrugBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HerbalDrugBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HerbalDrugBackgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HerbalDrugBackgrounds.
     */
    distinct?: HerbalDrugBackgroundScalarFieldEnum | HerbalDrugBackgroundScalarFieldEnum[]
  }

  /**
   * HerbalDrugBackground findMany
   */
  export type HerbalDrugBackgroundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbalDrugBackground
     */
    select?: HerbalDrugBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbalDrugBackground
     */
    omit?: HerbalDrugBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HerbalDrugBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which HerbalDrugBackgrounds to fetch.
     */
    where?: HerbalDrugBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HerbalDrugBackgrounds to fetch.
     */
    orderBy?: HerbalDrugBackgroundOrderByWithRelationInput | HerbalDrugBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HerbalDrugBackgrounds.
     */
    cursor?: HerbalDrugBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HerbalDrugBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HerbalDrugBackgrounds.
     */
    skip?: number
    distinct?: HerbalDrugBackgroundScalarFieldEnum | HerbalDrugBackgroundScalarFieldEnum[]
  }

  /**
   * HerbalDrugBackground create
   */
  export type HerbalDrugBackgroundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbalDrugBackground
     */
    select?: HerbalDrugBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbalDrugBackground
     */
    omit?: HerbalDrugBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HerbalDrugBackgroundInclude<ExtArgs> | null
    /**
     * The data needed to create a HerbalDrugBackground.
     */
    data: XOR<HerbalDrugBackgroundCreateInput, HerbalDrugBackgroundUncheckedCreateInput>
  }

  /**
   * HerbalDrugBackground createMany
   */
  export type HerbalDrugBackgroundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HerbalDrugBackgrounds.
     */
    data: HerbalDrugBackgroundCreateManyInput | HerbalDrugBackgroundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HerbalDrugBackground createManyAndReturn
   */
  export type HerbalDrugBackgroundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbalDrugBackground
     */
    select?: HerbalDrugBackgroundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HerbalDrugBackground
     */
    omit?: HerbalDrugBackgroundOmit<ExtArgs> | null
    /**
     * The data used to create many HerbalDrugBackgrounds.
     */
    data: HerbalDrugBackgroundCreateManyInput | HerbalDrugBackgroundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HerbalDrugBackgroundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HerbalDrugBackground update
   */
  export type HerbalDrugBackgroundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbalDrugBackground
     */
    select?: HerbalDrugBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbalDrugBackground
     */
    omit?: HerbalDrugBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HerbalDrugBackgroundInclude<ExtArgs> | null
    /**
     * The data needed to update a HerbalDrugBackground.
     */
    data: XOR<HerbalDrugBackgroundUpdateInput, HerbalDrugBackgroundUncheckedUpdateInput>
    /**
     * Choose, which HerbalDrugBackground to update.
     */
    where: HerbalDrugBackgroundWhereUniqueInput
  }

  /**
   * HerbalDrugBackground updateMany
   */
  export type HerbalDrugBackgroundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HerbalDrugBackgrounds.
     */
    data: XOR<HerbalDrugBackgroundUpdateManyMutationInput, HerbalDrugBackgroundUncheckedUpdateManyInput>
    /**
     * Filter which HerbalDrugBackgrounds to update
     */
    where?: HerbalDrugBackgroundWhereInput
    /**
     * Limit how many HerbalDrugBackgrounds to update.
     */
    limit?: number
  }

  /**
   * HerbalDrugBackground updateManyAndReturn
   */
  export type HerbalDrugBackgroundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbalDrugBackground
     */
    select?: HerbalDrugBackgroundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HerbalDrugBackground
     */
    omit?: HerbalDrugBackgroundOmit<ExtArgs> | null
    /**
     * The data used to update HerbalDrugBackgrounds.
     */
    data: XOR<HerbalDrugBackgroundUpdateManyMutationInput, HerbalDrugBackgroundUncheckedUpdateManyInput>
    /**
     * Filter which HerbalDrugBackgrounds to update
     */
    where?: HerbalDrugBackgroundWhereInput
    /**
     * Limit how many HerbalDrugBackgrounds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HerbalDrugBackgroundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HerbalDrugBackground upsert
   */
  export type HerbalDrugBackgroundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbalDrugBackground
     */
    select?: HerbalDrugBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbalDrugBackground
     */
    omit?: HerbalDrugBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HerbalDrugBackgroundInclude<ExtArgs> | null
    /**
     * The filter to search for the HerbalDrugBackground to update in case it exists.
     */
    where: HerbalDrugBackgroundWhereUniqueInput
    /**
     * In case the HerbalDrugBackground found by the `where` argument doesn't exist, create a new HerbalDrugBackground with this data.
     */
    create: XOR<HerbalDrugBackgroundCreateInput, HerbalDrugBackgroundUncheckedCreateInput>
    /**
     * In case the HerbalDrugBackground was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HerbalDrugBackgroundUpdateInput, HerbalDrugBackgroundUncheckedUpdateInput>
  }

  /**
   * HerbalDrugBackground delete
   */
  export type HerbalDrugBackgroundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbalDrugBackground
     */
    select?: HerbalDrugBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbalDrugBackground
     */
    omit?: HerbalDrugBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HerbalDrugBackgroundInclude<ExtArgs> | null
    /**
     * Filter which HerbalDrugBackground to delete.
     */
    where: HerbalDrugBackgroundWhereUniqueInput
  }

  /**
   * HerbalDrugBackground deleteMany
   */
  export type HerbalDrugBackgroundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HerbalDrugBackgrounds to delete
     */
    where?: HerbalDrugBackgroundWhereInput
    /**
     * Limit how many HerbalDrugBackgrounds to delete.
     */
    limit?: number
  }

  /**
   * HerbalDrugBackground.sourcingBackgrounds
   */
  export type HerbalDrugBackground$sourcingBackgroundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingBackground
     */
    select?: SourcingBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourcingBackground
     */
    omit?: SourcingBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourcingBackgroundInclude<ExtArgs> | null
    where?: SourcingBackgroundWhereInput
  }

  /**
   * HerbalDrugBackground without action
   */
  export type HerbalDrugBackgroundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HerbalDrugBackground
     */
    select?: HerbalDrugBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HerbalDrugBackground
     */
    omit?: HerbalDrugBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HerbalDrugBackgroundInclude<ExtArgs> | null
  }


  /**
   * Model SourcingBackground
   */

  export type AggregateSourcingBackground = {
    _count: SourcingBackgroundCountAggregateOutputType | null
    _avg: SourcingBackgroundAvgAggregateOutputType | null
    _sum: SourcingBackgroundSumAggregateOutputType | null
    _min: SourcingBackgroundMinAggregateOutputType | null
    _max: SourcingBackgroundMaxAggregateOutputType | null
  }

  export type SourcingBackgroundAvgAggregateOutputType = {
    id: number | null
    herbalDrugId: number | null
  }

  export type SourcingBackgroundSumAggregateOutputType = {
    id: number | null
    herbalDrugId: number | null
  }

  export type SourcingBackgroundMinAggregateOutputType = {
    id: number | null
    herbalDrugId: number | null
    cultivationStatus: boolean | null
    cultivationRegions: string | null
    wildHarvestingRegions: string | null
    harvestingPracticeNote: string | null
    daodiStatus: boolean | null
    daodiRegions: string | null
    productionRegions: string | null
  }

  export type SourcingBackgroundMaxAggregateOutputType = {
    id: number | null
    herbalDrugId: number | null
    cultivationStatus: boolean | null
    cultivationRegions: string | null
    wildHarvestingRegions: string | null
    harvestingPracticeNote: string | null
    daodiStatus: boolean | null
    daodiRegions: string | null
    productionRegions: string | null
  }

  export type SourcingBackgroundCountAggregateOutputType = {
    id: number
    herbalDrugId: number
    cultivationStatus: number
    cultivationRegions: number
    wildHarvestingRegions: number
    harvestingPractice: number
    harvestingPracticeNote: number
    daodiStatus: number
    daodiRegions: number
    productionRegions: number
    _all: number
  }


  export type SourcingBackgroundAvgAggregateInputType = {
    id?: true
    herbalDrugId?: true
  }

  export type SourcingBackgroundSumAggregateInputType = {
    id?: true
    herbalDrugId?: true
  }

  export type SourcingBackgroundMinAggregateInputType = {
    id?: true
    herbalDrugId?: true
    cultivationStatus?: true
    cultivationRegions?: true
    wildHarvestingRegions?: true
    harvestingPracticeNote?: true
    daodiStatus?: true
    daodiRegions?: true
    productionRegions?: true
  }

  export type SourcingBackgroundMaxAggregateInputType = {
    id?: true
    herbalDrugId?: true
    cultivationStatus?: true
    cultivationRegions?: true
    wildHarvestingRegions?: true
    harvestingPracticeNote?: true
    daodiStatus?: true
    daodiRegions?: true
    productionRegions?: true
  }

  export type SourcingBackgroundCountAggregateInputType = {
    id?: true
    herbalDrugId?: true
    cultivationStatus?: true
    cultivationRegions?: true
    wildHarvestingRegions?: true
    harvestingPractice?: true
    harvestingPracticeNote?: true
    daodiStatus?: true
    daodiRegions?: true
    productionRegions?: true
    _all?: true
  }

  export type SourcingBackgroundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourcingBackground to aggregate.
     */
    where?: SourcingBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourcingBackgrounds to fetch.
     */
    orderBy?: SourcingBackgroundOrderByWithRelationInput | SourcingBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourcingBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourcingBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourcingBackgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SourcingBackgrounds
    **/
    _count?: true | SourcingBackgroundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SourcingBackgroundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SourcingBackgroundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourcingBackgroundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourcingBackgroundMaxAggregateInputType
  }

  export type GetSourcingBackgroundAggregateType<T extends SourcingBackgroundAggregateArgs> = {
        [P in keyof T & keyof AggregateSourcingBackground]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSourcingBackground[P]>
      : GetScalarType<T[P], AggregateSourcingBackground[P]>
  }




  export type SourcingBackgroundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourcingBackgroundWhereInput
    orderBy?: SourcingBackgroundOrderByWithAggregationInput | SourcingBackgroundOrderByWithAggregationInput[]
    by: SourcingBackgroundScalarFieldEnum[] | SourcingBackgroundScalarFieldEnum
    having?: SourcingBackgroundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourcingBackgroundCountAggregateInputType | true
    _avg?: SourcingBackgroundAvgAggregateInputType
    _sum?: SourcingBackgroundSumAggregateInputType
    _min?: SourcingBackgroundMinAggregateInputType
    _max?: SourcingBackgroundMaxAggregateInputType
  }

  export type SourcingBackgroundGroupByOutputType = {
    id: number
    herbalDrugId: number
    cultivationStatus: boolean | null
    cultivationRegions: string | null
    wildHarvestingRegions: string | null
    harvestingPractice: $Enums.HarvestingPractice[]
    harvestingPracticeNote: string | null
    daodiStatus: boolean | null
    daodiRegions: string | null
    productionRegions: string | null
    _count: SourcingBackgroundCountAggregateOutputType | null
    _avg: SourcingBackgroundAvgAggregateOutputType | null
    _sum: SourcingBackgroundSumAggregateOutputType | null
    _min: SourcingBackgroundMinAggregateOutputType | null
    _max: SourcingBackgroundMaxAggregateOutputType | null
  }

  type GetSourcingBackgroundGroupByPayload<T extends SourcingBackgroundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourcingBackgroundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourcingBackgroundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourcingBackgroundGroupByOutputType[P]>
            : GetScalarType<T[P], SourcingBackgroundGroupByOutputType[P]>
        }
      >
    >


  export type SourcingBackgroundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    herbalDrugId?: boolean
    cultivationStatus?: boolean
    cultivationRegions?: boolean
    wildHarvestingRegions?: boolean
    harvestingPractice?: boolean
    harvestingPracticeNote?: boolean
    daodiStatus?: boolean
    daodiRegions?: boolean
    productionRegions?: boolean
    herbalDrug?: boolean | HerbalDrugBackgroundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourcingBackground"]>

  export type SourcingBackgroundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    herbalDrugId?: boolean
    cultivationStatus?: boolean
    cultivationRegions?: boolean
    wildHarvestingRegions?: boolean
    harvestingPractice?: boolean
    harvestingPracticeNote?: boolean
    daodiStatus?: boolean
    daodiRegions?: boolean
    productionRegions?: boolean
    herbalDrug?: boolean | HerbalDrugBackgroundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourcingBackground"]>

  export type SourcingBackgroundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    herbalDrugId?: boolean
    cultivationStatus?: boolean
    cultivationRegions?: boolean
    wildHarvestingRegions?: boolean
    harvestingPractice?: boolean
    harvestingPracticeNote?: boolean
    daodiStatus?: boolean
    daodiRegions?: boolean
    productionRegions?: boolean
    herbalDrug?: boolean | HerbalDrugBackgroundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourcingBackground"]>

  export type SourcingBackgroundSelectScalar = {
    id?: boolean
    herbalDrugId?: boolean
    cultivationStatus?: boolean
    cultivationRegions?: boolean
    wildHarvestingRegions?: boolean
    harvestingPractice?: boolean
    harvestingPracticeNote?: boolean
    daodiStatus?: boolean
    daodiRegions?: boolean
    productionRegions?: boolean
  }

  export type SourcingBackgroundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "herbalDrugId" | "cultivationStatus" | "cultivationRegions" | "wildHarvestingRegions" | "harvestingPractice" | "harvestingPracticeNote" | "daodiStatus" | "daodiRegions" | "productionRegions", ExtArgs["result"]["sourcingBackground"]>
  export type SourcingBackgroundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    herbalDrug?: boolean | HerbalDrugBackgroundDefaultArgs<ExtArgs>
  }
  export type SourcingBackgroundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    herbalDrug?: boolean | HerbalDrugBackgroundDefaultArgs<ExtArgs>
  }
  export type SourcingBackgroundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    herbalDrug?: boolean | HerbalDrugBackgroundDefaultArgs<ExtArgs>
  }

  export type $SourcingBackgroundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SourcingBackground"
    objects: {
      herbalDrug: Prisma.$HerbalDrugBackgroundPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      herbalDrugId: number
      cultivationStatus: boolean | null
      cultivationRegions: string | null
      wildHarvestingRegions: string | null
      harvestingPractice: $Enums.HarvestingPractice[]
      harvestingPracticeNote: string | null
      daodiStatus: boolean | null
      daodiRegions: string | null
      productionRegions: string | null
    }, ExtArgs["result"]["sourcingBackground"]>
    composites: {}
  }

  type SourcingBackgroundGetPayload<S extends boolean | null | undefined | SourcingBackgroundDefaultArgs> = $Result.GetResult<Prisma.$SourcingBackgroundPayload, S>

  type SourcingBackgroundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourcingBackgroundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourcingBackgroundCountAggregateInputType | true
    }

  export interface SourcingBackgroundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SourcingBackground'], meta: { name: 'SourcingBackground' } }
    /**
     * Find zero or one SourcingBackground that matches the filter.
     * @param {SourcingBackgroundFindUniqueArgs} args - Arguments to find a SourcingBackground
     * @example
     * // Get one SourcingBackground
     * const sourcingBackground = await prisma.sourcingBackground.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourcingBackgroundFindUniqueArgs>(args: SelectSubset<T, SourcingBackgroundFindUniqueArgs<ExtArgs>>): Prisma__SourcingBackgroundClient<$Result.GetResult<Prisma.$SourcingBackgroundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SourcingBackground that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourcingBackgroundFindUniqueOrThrowArgs} args - Arguments to find a SourcingBackground
     * @example
     * // Get one SourcingBackground
     * const sourcingBackground = await prisma.sourcingBackground.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourcingBackgroundFindUniqueOrThrowArgs>(args: SelectSubset<T, SourcingBackgroundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourcingBackgroundClient<$Result.GetResult<Prisma.$SourcingBackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourcingBackground that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourcingBackgroundFindFirstArgs} args - Arguments to find a SourcingBackground
     * @example
     * // Get one SourcingBackground
     * const sourcingBackground = await prisma.sourcingBackground.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourcingBackgroundFindFirstArgs>(args?: SelectSubset<T, SourcingBackgroundFindFirstArgs<ExtArgs>>): Prisma__SourcingBackgroundClient<$Result.GetResult<Prisma.$SourcingBackgroundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourcingBackground that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourcingBackgroundFindFirstOrThrowArgs} args - Arguments to find a SourcingBackground
     * @example
     * // Get one SourcingBackground
     * const sourcingBackground = await prisma.sourcingBackground.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourcingBackgroundFindFirstOrThrowArgs>(args?: SelectSubset<T, SourcingBackgroundFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourcingBackgroundClient<$Result.GetResult<Prisma.$SourcingBackgroundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SourcingBackgrounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourcingBackgroundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SourcingBackgrounds
     * const sourcingBackgrounds = await prisma.sourcingBackground.findMany()
     * 
     * // Get first 10 SourcingBackgrounds
     * const sourcingBackgrounds = await prisma.sourcingBackground.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourcingBackgroundWithIdOnly = await prisma.sourcingBackground.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourcingBackgroundFindManyArgs>(args?: SelectSubset<T, SourcingBackgroundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcingBackgroundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SourcingBackground.
     * @param {SourcingBackgroundCreateArgs} args - Arguments to create a SourcingBackground.
     * @example
     * // Create one SourcingBackground
     * const SourcingBackground = await prisma.sourcingBackground.create({
     *   data: {
     *     // ... data to create a SourcingBackground
     *   }
     * })
     * 
     */
    create<T extends SourcingBackgroundCreateArgs>(args: SelectSubset<T, SourcingBackgroundCreateArgs<ExtArgs>>): Prisma__SourcingBackgroundClient<$Result.GetResult<Prisma.$SourcingBackgroundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SourcingBackgrounds.
     * @param {SourcingBackgroundCreateManyArgs} args - Arguments to create many SourcingBackgrounds.
     * @example
     * // Create many SourcingBackgrounds
     * const sourcingBackground = await prisma.sourcingBackground.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourcingBackgroundCreateManyArgs>(args?: SelectSubset<T, SourcingBackgroundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SourcingBackgrounds and returns the data saved in the database.
     * @param {SourcingBackgroundCreateManyAndReturnArgs} args - Arguments to create many SourcingBackgrounds.
     * @example
     * // Create many SourcingBackgrounds
     * const sourcingBackground = await prisma.sourcingBackground.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SourcingBackgrounds and only return the `id`
     * const sourcingBackgroundWithIdOnly = await prisma.sourcingBackground.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourcingBackgroundCreateManyAndReturnArgs>(args?: SelectSubset<T, SourcingBackgroundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcingBackgroundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SourcingBackground.
     * @param {SourcingBackgroundDeleteArgs} args - Arguments to delete one SourcingBackground.
     * @example
     * // Delete one SourcingBackground
     * const SourcingBackground = await prisma.sourcingBackground.delete({
     *   where: {
     *     // ... filter to delete one SourcingBackground
     *   }
     * })
     * 
     */
    delete<T extends SourcingBackgroundDeleteArgs>(args: SelectSubset<T, SourcingBackgroundDeleteArgs<ExtArgs>>): Prisma__SourcingBackgroundClient<$Result.GetResult<Prisma.$SourcingBackgroundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SourcingBackground.
     * @param {SourcingBackgroundUpdateArgs} args - Arguments to update one SourcingBackground.
     * @example
     * // Update one SourcingBackground
     * const sourcingBackground = await prisma.sourcingBackground.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourcingBackgroundUpdateArgs>(args: SelectSubset<T, SourcingBackgroundUpdateArgs<ExtArgs>>): Prisma__SourcingBackgroundClient<$Result.GetResult<Prisma.$SourcingBackgroundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SourcingBackgrounds.
     * @param {SourcingBackgroundDeleteManyArgs} args - Arguments to filter SourcingBackgrounds to delete.
     * @example
     * // Delete a few SourcingBackgrounds
     * const { count } = await prisma.sourcingBackground.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourcingBackgroundDeleteManyArgs>(args?: SelectSubset<T, SourcingBackgroundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourcingBackgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourcingBackgroundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SourcingBackgrounds
     * const sourcingBackground = await prisma.sourcingBackground.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourcingBackgroundUpdateManyArgs>(args: SelectSubset<T, SourcingBackgroundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourcingBackgrounds and returns the data updated in the database.
     * @param {SourcingBackgroundUpdateManyAndReturnArgs} args - Arguments to update many SourcingBackgrounds.
     * @example
     * // Update many SourcingBackgrounds
     * const sourcingBackground = await prisma.sourcingBackground.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SourcingBackgrounds and only return the `id`
     * const sourcingBackgroundWithIdOnly = await prisma.sourcingBackground.updateManyAndReturn({
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
    updateManyAndReturn<T extends SourcingBackgroundUpdateManyAndReturnArgs>(args: SelectSubset<T, SourcingBackgroundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcingBackgroundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SourcingBackground.
     * @param {SourcingBackgroundUpsertArgs} args - Arguments to update or create a SourcingBackground.
     * @example
     * // Update or create a SourcingBackground
     * const sourcingBackground = await prisma.sourcingBackground.upsert({
     *   create: {
     *     // ... data to create a SourcingBackground
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SourcingBackground we want to update
     *   }
     * })
     */
    upsert<T extends SourcingBackgroundUpsertArgs>(args: SelectSubset<T, SourcingBackgroundUpsertArgs<ExtArgs>>): Prisma__SourcingBackgroundClient<$Result.GetResult<Prisma.$SourcingBackgroundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SourcingBackgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourcingBackgroundCountArgs} args - Arguments to filter SourcingBackgrounds to count.
     * @example
     * // Count the number of SourcingBackgrounds
     * const count = await prisma.sourcingBackground.count({
     *   where: {
     *     // ... the filter for the SourcingBackgrounds we want to count
     *   }
     * })
    **/
    count<T extends SourcingBackgroundCountArgs>(
      args?: Subset<T, SourcingBackgroundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourcingBackgroundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SourcingBackground.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourcingBackgroundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SourcingBackgroundAggregateArgs>(args: Subset<T, SourcingBackgroundAggregateArgs>): Prisma.PrismaPromise<GetSourcingBackgroundAggregateType<T>>

    /**
     * Group by SourcingBackground.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourcingBackgroundGroupByArgs} args - Group by arguments.
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
      T extends SourcingBackgroundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourcingBackgroundGroupByArgs['orderBy'] }
        : { orderBy?: SourcingBackgroundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SourcingBackgroundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourcingBackgroundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SourcingBackground model
   */
  readonly fields: SourcingBackgroundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SourcingBackground.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourcingBackgroundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    herbalDrug<T extends HerbalDrugBackgroundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HerbalDrugBackgroundDefaultArgs<ExtArgs>>): Prisma__HerbalDrugBackgroundClient<$Result.GetResult<Prisma.$HerbalDrugBackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SourcingBackground model
   */
  interface SourcingBackgroundFieldRefs {
    readonly id: FieldRef<"SourcingBackground", 'Int'>
    readonly herbalDrugId: FieldRef<"SourcingBackground", 'Int'>
    readonly cultivationStatus: FieldRef<"SourcingBackground", 'Boolean'>
    readonly cultivationRegions: FieldRef<"SourcingBackground", 'String'>
    readonly wildHarvestingRegions: FieldRef<"SourcingBackground", 'String'>
    readonly harvestingPractice: FieldRef<"SourcingBackground", 'HarvestingPractice[]'>
    readonly harvestingPracticeNote: FieldRef<"SourcingBackground", 'String'>
    readonly daodiStatus: FieldRef<"SourcingBackground", 'Boolean'>
    readonly daodiRegions: FieldRef<"SourcingBackground", 'String'>
    readonly productionRegions: FieldRef<"SourcingBackground", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SourcingBackground findUnique
   */
  export type SourcingBackgroundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingBackground
     */
    select?: SourcingBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourcingBackground
     */
    omit?: SourcingBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourcingBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which SourcingBackground to fetch.
     */
    where: SourcingBackgroundWhereUniqueInput
  }

  /**
   * SourcingBackground findUniqueOrThrow
   */
  export type SourcingBackgroundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingBackground
     */
    select?: SourcingBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourcingBackground
     */
    omit?: SourcingBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourcingBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which SourcingBackground to fetch.
     */
    where: SourcingBackgroundWhereUniqueInput
  }

  /**
   * SourcingBackground findFirst
   */
  export type SourcingBackgroundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingBackground
     */
    select?: SourcingBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourcingBackground
     */
    omit?: SourcingBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourcingBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which SourcingBackground to fetch.
     */
    where?: SourcingBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourcingBackgrounds to fetch.
     */
    orderBy?: SourcingBackgroundOrderByWithRelationInput | SourcingBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourcingBackgrounds.
     */
    cursor?: SourcingBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourcingBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourcingBackgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourcingBackgrounds.
     */
    distinct?: SourcingBackgroundScalarFieldEnum | SourcingBackgroundScalarFieldEnum[]
  }

  /**
   * SourcingBackground findFirstOrThrow
   */
  export type SourcingBackgroundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingBackground
     */
    select?: SourcingBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourcingBackground
     */
    omit?: SourcingBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourcingBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which SourcingBackground to fetch.
     */
    where?: SourcingBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourcingBackgrounds to fetch.
     */
    orderBy?: SourcingBackgroundOrderByWithRelationInput | SourcingBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourcingBackgrounds.
     */
    cursor?: SourcingBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourcingBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourcingBackgrounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourcingBackgrounds.
     */
    distinct?: SourcingBackgroundScalarFieldEnum | SourcingBackgroundScalarFieldEnum[]
  }

  /**
   * SourcingBackground findMany
   */
  export type SourcingBackgroundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingBackground
     */
    select?: SourcingBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourcingBackground
     */
    omit?: SourcingBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourcingBackgroundInclude<ExtArgs> | null
    /**
     * Filter, which SourcingBackgrounds to fetch.
     */
    where?: SourcingBackgroundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourcingBackgrounds to fetch.
     */
    orderBy?: SourcingBackgroundOrderByWithRelationInput | SourcingBackgroundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SourcingBackgrounds.
     */
    cursor?: SourcingBackgroundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourcingBackgrounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourcingBackgrounds.
     */
    skip?: number
    distinct?: SourcingBackgroundScalarFieldEnum | SourcingBackgroundScalarFieldEnum[]
  }

  /**
   * SourcingBackground create
   */
  export type SourcingBackgroundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingBackground
     */
    select?: SourcingBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourcingBackground
     */
    omit?: SourcingBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourcingBackgroundInclude<ExtArgs> | null
    /**
     * The data needed to create a SourcingBackground.
     */
    data: XOR<SourcingBackgroundCreateInput, SourcingBackgroundUncheckedCreateInput>
  }

  /**
   * SourcingBackground createMany
   */
  export type SourcingBackgroundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SourcingBackgrounds.
     */
    data: SourcingBackgroundCreateManyInput | SourcingBackgroundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourcingBackground createManyAndReturn
   */
  export type SourcingBackgroundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingBackground
     */
    select?: SourcingBackgroundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourcingBackground
     */
    omit?: SourcingBackgroundOmit<ExtArgs> | null
    /**
     * The data used to create many SourcingBackgrounds.
     */
    data: SourcingBackgroundCreateManyInput | SourcingBackgroundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourcingBackgroundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SourcingBackground update
   */
  export type SourcingBackgroundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingBackground
     */
    select?: SourcingBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourcingBackground
     */
    omit?: SourcingBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourcingBackgroundInclude<ExtArgs> | null
    /**
     * The data needed to update a SourcingBackground.
     */
    data: XOR<SourcingBackgroundUpdateInput, SourcingBackgroundUncheckedUpdateInput>
    /**
     * Choose, which SourcingBackground to update.
     */
    where: SourcingBackgroundWhereUniqueInput
  }

  /**
   * SourcingBackground updateMany
   */
  export type SourcingBackgroundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SourcingBackgrounds.
     */
    data: XOR<SourcingBackgroundUpdateManyMutationInput, SourcingBackgroundUncheckedUpdateManyInput>
    /**
     * Filter which SourcingBackgrounds to update
     */
    where?: SourcingBackgroundWhereInput
    /**
     * Limit how many SourcingBackgrounds to update.
     */
    limit?: number
  }

  /**
   * SourcingBackground updateManyAndReturn
   */
  export type SourcingBackgroundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingBackground
     */
    select?: SourcingBackgroundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourcingBackground
     */
    omit?: SourcingBackgroundOmit<ExtArgs> | null
    /**
     * The data used to update SourcingBackgrounds.
     */
    data: XOR<SourcingBackgroundUpdateManyMutationInput, SourcingBackgroundUncheckedUpdateManyInput>
    /**
     * Filter which SourcingBackgrounds to update
     */
    where?: SourcingBackgroundWhereInput
    /**
     * Limit how many SourcingBackgrounds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourcingBackgroundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SourcingBackground upsert
   */
  export type SourcingBackgroundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingBackground
     */
    select?: SourcingBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourcingBackground
     */
    omit?: SourcingBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourcingBackgroundInclude<ExtArgs> | null
    /**
     * The filter to search for the SourcingBackground to update in case it exists.
     */
    where: SourcingBackgroundWhereUniqueInput
    /**
     * In case the SourcingBackground found by the `where` argument doesn't exist, create a new SourcingBackground with this data.
     */
    create: XOR<SourcingBackgroundCreateInput, SourcingBackgroundUncheckedCreateInput>
    /**
     * In case the SourcingBackground was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourcingBackgroundUpdateInput, SourcingBackgroundUncheckedUpdateInput>
  }

  /**
   * SourcingBackground delete
   */
  export type SourcingBackgroundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingBackground
     */
    select?: SourcingBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourcingBackground
     */
    omit?: SourcingBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourcingBackgroundInclude<ExtArgs> | null
    /**
     * Filter which SourcingBackground to delete.
     */
    where: SourcingBackgroundWhereUniqueInput
  }

  /**
   * SourcingBackground deleteMany
   */
  export type SourcingBackgroundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourcingBackgrounds to delete
     */
    where?: SourcingBackgroundWhereInput
    /**
     * Limit how many SourcingBackgrounds to delete.
     */
    limit?: number
  }

  /**
   * SourcingBackground without action
   */
  export type SourcingBackgroundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingBackground
     */
    select?: SourcingBackgroundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourcingBackground
     */
    omit?: SourcingBackgroundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourcingBackgroundInclude<ExtArgs> | null
  }


  /**
   * Model Ethnobotany
   */

  export type AggregateEthnobotany = {
    _count: EthnobotanyCountAggregateOutputType | null
    _avg: EthnobotanyAvgAggregateOutputType | null
    _sum: EthnobotanySumAggregateOutputType | null
    _min: EthnobotanyMinAggregateOutputType | null
    _max: EthnobotanyMaxAggregateOutputType | null
  }

  export type EthnobotanyAvgAggregateOutputType = {
    id: number | null
    plantId: number | null
  }

  export type EthnobotanySumAggregateOutputType = {
    id: number | null
    plantId: number | null
  }

  export type EthnobotanyMinAggregateOutputType = {
    id: number | null
    plantId: number | null
    folkMedicinalUses: string | null
    references: string | null
  }

  export type EthnobotanyMaxAggregateOutputType = {
    id: number | null
    plantId: number | null
    folkMedicinalUses: string | null
    references: string | null
  }

  export type EthnobotanyCountAggregateOutputType = {
    id: number
    plantId: number
    folkMedicinalUses: number
    otherCulturalUses: number
    references: number
    _all: number
  }


  export type EthnobotanyAvgAggregateInputType = {
    id?: true
    plantId?: true
  }

  export type EthnobotanySumAggregateInputType = {
    id?: true
    plantId?: true
  }

  export type EthnobotanyMinAggregateInputType = {
    id?: true
    plantId?: true
    folkMedicinalUses?: true
    references?: true
  }

  export type EthnobotanyMaxAggregateInputType = {
    id?: true
    plantId?: true
    folkMedicinalUses?: true
    references?: true
  }

  export type EthnobotanyCountAggregateInputType = {
    id?: true
    plantId?: true
    folkMedicinalUses?: true
    otherCulturalUses?: true
    references?: true
    _all?: true
  }

  export type EthnobotanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ethnobotany to aggregate.
     */
    where?: EthnobotanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ethnobotanies to fetch.
     */
    orderBy?: EthnobotanyOrderByWithRelationInput | EthnobotanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EthnobotanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ethnobotanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ethnobotanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ethnobotanies
    **/
    _count?: true | EthnobotanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EthnobotanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EthnobotanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EthnobotanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EthnobotanyMaxAggregateInputType
  }

  export type GetEthnobotanyAggregateType<T extends EthnobotanyAggregateArgs> = {
        [P in keyof T & keyof AggregateEthnobotany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEthnobotany[P]>
      : GetScalarType<T[P], AggregateEthnobotany[P]>
  }




  export type EthnobotanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EthnobotanyWhereInput
    orderBy?: EthnobotanyOrderByWithAggregationInput | EthnobotanyOrderByWithAggregationInput[]
    by: EthnobotanyScalarFieldEnum[] | EthnobotanyScalarFieldEnum
    having?: EthnobotanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EthnobotanyCountAggregateInputType | true
    _avg?: EthnobotanyAvgAggregateInputType
    _sum?: EthnobotanySumAggregateInputType
    _min?: EthnobotanyMinAggregateInputType
    _max?: EthnobotanyMaxAggregateInputType
  }

  export type EthnobotanyGroupByOutputType = {
    id: number
    plantId: number
    folkMedicinalUses: string | null
    otherCulturalUses: string[]
    references: string | null
    _count: EthnobotanyCountAggregateOutputType | null
    _avg: EthnobotanyAvgAggregateOutputType | null
    _sum: EthnobotanySumAggregateOutputType | null
    _min: EthnobotanyMinAggregateOutputType | null
    _max: EthnobotanyMaxAggregateOutputType | null
  }

  type GetEthnobotanyGroupByPayload<T extends EthnobotanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EthnobotanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EthnobotanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EthnobotanyGroupByOutputType[P]>
            : GetScalarType<T[P], EthnobotanyGroupByOutputType[P]>
        }
      >
    >


  export type EthnobotanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plantId?: boolean
    folkMedicinalUses?: boolean
    otherCulturalUses?: boolean
    references?: boolean
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ethnobotany"]>

  export type EthnobotanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plantId?: boolean
    folkMedicinalUses?: boolean
    otherCulturalUses?: boolean
    references?: boolean
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ethnobotany"]>

  export type EthnobotanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plantId?: boolean
    folkMedicinalUses?: boolean
    otherCulturalUses?: boolean
    references?: boolean
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ethnobotany"]>

  export type EthnobotanySelectScalar = {
    id?: boolean
    plantId?: boolean
    folkMedicinalUses?: boolean
    otherCulturalUses?: boolean
    references?: boolean
  }

  export type EthnobotanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plantId" | "folkMedicinalUses" | "otherCulturalUses" | "references", ExtArgs["result"]["ethnobotany"]>
  export type EthnobotanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }
  export type EthnobotanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }
  export type EthnobotanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantNomenclatureDefaultArgs<ExtArgs>
  }

  export type $EthnobotanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ethnobotany"
    objects: {
      plant: Prisma.$PlantNomenclaturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      plantId: number
      folkMedicinalUses: string | null
      otherCulturalUses: string[]
      references: string | null
    }, ExtArgs["result"]["ethnobotany"]>
    composites: {}
  }

  type EthnobotanyGetPayload<S extends boolean | null | undefined | EthnobotanyDefaultArgs> = $Result.GetResult<Prisma.$EthnobotanyPayload, S>

  type EthnobotanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EthnobotanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EthnobotanyCountAggregateInputType | true
    }

  export interface EthnobotanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ethnobotany'], meta: { name: 'Ethnobotany' } }
    /**
     * Find zero or one Ethnobotany that matches the filter.
     * @param {EthnobotanyFindUniqueArgs} args - Arguments to find a Ethnobotany
     * @example
     * // Get one Ethnobotany
     * const ethnobotany = await prisma.ethnobotany.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EthnobotanyFindUniqueArgs>(args: SelectSubset<T, EthnobotanyFindUniqueArgs<ExtArgs>>): Prisma__EthnobotanyClient<$Result.GetResult<Prisma.$EthnobotanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ethnobotany that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EthnobotanyFindUniqueOrThrowArgs} args - Arguments to find a Ethnobotany
     * @example
     * // Get one Ethnobotany
     * const ethnobotany = await prisma.ethnobotany.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EthnobotanyFindUniqueOrThrowArgs>(args: SelectSubset<T, EthnobotanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EthnobotanyClient<$Result.GetResult<Prisma.$EthnobotanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ethnobotany that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EthnobotanyFindFirstArgs} args - Arguments to find a Ethnobotany
     * @example
     * // Get one Ethnobotany
     * const ethnobotany = await prisma.ethnobotany.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EthnobotanyFindFirstArgs>(args?: SelectSubset<T, EthnobotanyFindFirstArgs<ExtArgs>>): Prisma__EthnobotanyClient<$Result.GetResult<Prisma.$EthnobotanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ethnobotany that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EthnobotanyFindFirstOrThrowArgs} args - Arguments to find a Ethnobotany
     * @example
     * // Get one Ethnobotany
     * const ethnobotany = await prisma.ethnobotany.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EthnobotanyFindFirstOrThrowArgs>(args?: SelectSubset<T, EthnobotanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__EthnobotanyClient<$Result.GetResult<Prisma.$EthnobotanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ethnobotanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EthnobotanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ethnobotanies
     * const ethnobotanies = await prisma.ethnobotany.findMany()
     * 
     * // Get first 10 Ethnobotanies
     * const ethnobotanies = await prisma.ethnobotany.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ethnobotanyWithIdOnly = await prisma.ethnobotany.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EthnobotanyFindManyArgs>(args?: SelectSubset<T, EthnobotanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EthnobotanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ethnobotany.
     * @param {EthnobotanyCreateArgs} args - Arguments to create a Ethnobotany.
     * @example
     * // Create one Ethnobotany
     * const Ethnobotany = await prisma.ethnobotany.create({
     *   data: {
     *     // ... data to create a Ethnobotany
     *   }
     * })
     * 
     */
    create<T extends EthnobotanyCreateArgs>(args: SelectSubset<T, EthnobotanyCreateArgs<ExtArgs>>): Prisma__EthnobotanyClient<$Result.GetResult<Prisma.$EthnobotanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ethnobotanies.
     * @param {EthnobotanyCreateManyArgs} args - Arguments to create many Ethnobotanies.
     * @example
     * // Create many Ethnobotanies
     * const ethnobotany = await prisma.ethnobotany.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EthnobotanyCreateManyArgs>(args?: SelectSubset<T, EthnobotanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ethnobotanies and returns the data saved in the database.
     * @param {EthnobotanyCreateManyAndReturnArgs} args - Arguments to create many Ethnobotanies.
     * @example
     * // Create many Ethnobotanies
     * const ethnobotany = await prisma.ethnobotany.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ethnobotanies and only return the `id`
     * const ethnobotanyWithIdOnly = await prisma.ethnobotany.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EthnobotanyCreateManyAndReturnArgs>(args?: SelectSubset<T, EthnobotanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EthnobotanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ethnobotany.
     * @param {EthnobotanyDeleteArgs} args - Arguments to delete one Ethnobotany.
     * @example
     * // Delete one Ethnobotany
     * const Ethnobotany = await prisma.ethnobotany.delete({
     *   where: {
     *     // ... filter to delete one Ethnobotany
     *   }
     * })
     * 
     */
    delete<T extends EthnobotanyDeleteArgs>(args: SelectSubset<T, EthnobotanyDeleteArgs<ExtArgs>>): Prisma__EthnobotanyClient<$Result.GetResult<Prisma.$EthnobotanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ethnobotany.
     * @param {EthnobotanyUpdateArgs} args - Arguments to update one Ethnobotany.
     * @example
     * // Update one Ethnobotany
     * const ethnobotany = await prisma.ethnobotany.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EthnobotanyUpdateArgs>(args: SelectSubset<T, EthnobotanyUpdateArgs<ExtArgs>>): Prisma__EthnobotanyClient<$Result.GetResult<Prisma.$EthnobotanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ethnobotanies.
     * @param {EthnobotanyDeleteManyArgs} args - Arguments to filter Ethnobotanies to delete.
     * @example
     * // Delete a few Ethnobotanies
     * const { count } = await prisma.ethnobotany.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EthnobotanyDeleteManyArgs>(args?: SelectSubset<T, EthnobotanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ethnobotanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EthnobotanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ethnobotanies
     * const ethnobotany = await prisma.ethnobotany.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EthnobotanyUpdateManyArgs>(args: SelectSubset<T, EthnobotanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ethnobotanies and returns the data updated in the database.
     * @param {EthnobotanyUpdateManyAndReturnArgs} args - Arguments to update many Ethnobotanies.
     * @example
     * // Update many Ethnobotanies
     * const ethnobotany = await prisma.ethnobotany.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ethnobotanies and only return the `id`
     * const ethnobotanyWithIdOnly = await prisma.ethnobotany.updateManyAndReturn({
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
    updateManyAndReturn<T extends EthnobotanyUpdateManyAndReturnArgs>(args: SelectSubset<T, EthnobotanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EthnobotanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ethnobotany.
     * @param {EthnobotanyUpsertArgs} args - Arguments to update or create a Ethnobotany.
     * @example
     * // Update or create a Ethnobotany
     * const ethnobotany = await prisma.ethnobotany.upsert({
     *   create: {
     *     // ... data to create a Ethnobotany
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ethnobotany we want to update
     *   }
     * })
     */
    upsert<T extends EthnobotanyUpsertArgs>(args: SelectSubset<T, EthnobotanyUpsertArgs<ExtArgs>>): Prisma__EthnobotanyClient<$Result.GetResult<Prisma.$EthnobotanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ethnobotanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EthnobotanyCountArgs} args - Arguments to filter Ethnobotanies to count.
     * @example
     * // Count the number of Ethnobotanies
     * const count = await prisma.ethnobotany.count({
     *   where: {
     *     // ... the filter for the Ethnobotanies we want to count
     *   }
     * })
    **/
    count<T extends EthnobotanyCountArgs>(
      args?: Subset<T, EthnobotanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EthnobotanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ethnobotany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EthnobotanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EthnobotanyAggregateArgs>(args: Subset<T, EthnobotanyAggregateArgs>): Prisma.PrismaPromise<GetEthnobotanyAggregateType<T>>

    /**
     * Group by Ethnobotany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EthnobotanyGroupByArgs} args - Group by arguments.
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
      T extends EthnobotanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EthnobotanyGroupByArgs['orderBy'] }
        : { orderBy?: EthnobotanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EthnobotanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEthnobotanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ethnobotany model
   */
  readonly fields: EthnobotanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ethnobotany.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EthnobotanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plant<T extends PlantNomenclatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantNomenclatureDefaultArgs<ExtArgs>>): Prisma__PlantNomenclatureClient<$Result.GetResult<Prisma.$PlantNomenclaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ethnobotany model
   */
  interface EthnobotanyFieldRefs {
    readonly id: FieldRef<"Ethnobotany", 'Int'>
    readonly plantId: FieldRef<"Ethnobotany", 'Int'>
    readonly folkMedicinalUses: FieldRef<"Ethnobotany", 'String'>
    readonly otherCulturalUses: FieldRef<"Ethnobotany", 'String[]'>
    readonly references: FieldRef<"Ethnobotany", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ethnobotany findUnique
   */
  export type EthnobotanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ethnobotany
     */
    select?: EthnobotanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ethnobotany
     */
    omit?: EthnobotanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EthnobotanyInclude<ExtArgs> | null
    /**
     * Filter, which Ethnobotany to fetch.
     */
    where: EthnobotanyWhereUniqueInput
  }

  /**
   * Ethnobotany findUniqueOrThrow
   */
  export type EthnobotanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ethnobotany
     */
    select?: EthnobotanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ethnobotany
     */
    omit?: EthnobotanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EthnobotanyInclude<ExtArgs> | null
    /**
     * Filter, which Ethnobotany to fetch.
     */
    where: EthnobotanyWhereUniqueInput
  }

  /**
   * Ethnobotany findFirst
   */
  export type EthnobotanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ethnobotany
     */
    select?: EthnobotanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ethnobotany
     */
    omit?: EthnobotanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EthnobotanyInclude<ExtArgs> | null
    /**
     * Filter, which Ethnobotany to fetch.
     */
    where?: EthnobotanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ethnobotanies to fetch.
     */
    orderBy?: EthnobotanyOrderByWithRelationInput | EthnobotanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ethnobotanies.
     */
    cursor?: EthnobotanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ethnobotanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ethnobotanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ethnobotanies.
     */
    distinct?: EthnobotanyScalarFieldEnum | EthnobotanyScalarFieldEnum[]
  }

  /**
   * Ethnobotany findFirstOrThrow
   */
  export type EthnobotanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ethnobotany
     */
    select?: EthnobotanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ethnobotany
     */
    omit?: EthnobotanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EthnobotanyInclude<ExtArgs> | null
    /**
     * Filter, which Ethnobotany to fetch.
     */
    where?: EthnobotanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ethnobotanies to fetch.
     */
    orderBy?: EthnobotanyOrderByWithRelationInput | EthnobotanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ethnobotanies.
     */
    cursor?: EthnobotanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ethnobotanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ethnobotanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ethnobotanies.
     */
    distinct?: EthnobotanyScalarFieldEnum | EthnobotanyScalarFieldEnum[]
  }

  /**
   * Ethnobotany findMany
   */
  export type EthnobotanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ethnobotany
     */
    select?: EthnobotanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ethnobotany
     */
    omit?: EthnobotanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EthnobotanyInclude<ExtArgs> | null
    /**
     * Filter, which Ethnobotanies to fetch.
     */
    where?: EthnobotanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ethnobotanies to fetch.
     */
    orderBy?: EthnobotanyOrderByWithRelationInput | EthnobotanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ethnobotanies.
     */
    cursor?: EthnobotanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ethnobotanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ethnobotanies.
     */
    skip?: number
    distinct?: EthnobotanyScalarFieldEnum | EthnobotanyScalarFieldEnum[]
  }

  /**
   * Ethnobotany create
   */
  export type EthnobotanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ethnobotany
     */
    select?: EthnobotanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ethnobotany
     */
    omit?: EthnobotanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EthnobotanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Ethnobotany.
     */
    data: XOR<EthnobotanyCreateInput, EthnobotanyUncheckedCreateInput>
  }

  /**
   * Ethnobotany createMany
   */
  export type EthnobotanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ethnobotanies.
     */
    data: EthnobotanyCreateManyInput | EthnobotanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ethnobotany createManyAndReturn
   */
  export type EthnobotanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ethnobotany
     */
    select?: EthnobotanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ethnobotany
     */
    omit?: EthnobotanyOmit<ExtArgs> | null
    /**
     * The data used to create many Ethnobotanies.
     */
    data: EthnobotanyCreateManyInput | EthnobotanyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EthnobotanyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ethnobotany update
   */
  export type EthnobotanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ethnobotany
     */
    select?: EthnobotanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ethnobotany
     */
    omit?: EthnobotanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EthnobotanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Ethnobotany.
     */
    data: XOR<EthnobotanyUpdateInput, EthnobotanyUncheckedUpdateInput>
    /**
     * Choose, which Ethnobotany to update.
     */
    where: EthnobotanyWhereUniqueInput
  }

  /**
   * Ethnobotany updateMany
   */
  export type EthnobotanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ethnobotanies.
     */
    data: XOR<EthnobotanyUpdateManyMutationInput, EthnobotanyUncheckedUpdateManyInput>
    /**
     * Filter which Ethnobotanies to update
     */
    where?: EthnobotanyWhereInput
    /**
     * Limit how many Ethnobotanies to update.
     */
    limit?: number
  }

  /**
   * Ethnobotany updateManyAndReturn
   */
  export type EthnobotanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ethnobotany
     */
    select?: EthnobotanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ethnobotany
     */
    omit?: EthnobotanyOmit<ExtArgs> | null
    /**
     * The data used to update Ethnobotanies.
     */
    data: XOR<EthnobotanyUpdateManyMutationInput, EthnobotanyUncheckedUpdateManyInput>
    /**
     * Filter which Ethnobotanies to update
     */
    where?: EthnobotanyWhereInput
    /**
     * Limit how many Ethnobotanies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EthnobotanyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ethnobotany upsert
   */
  export type EthnobotanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ethnobotany
     */
    select?: EthnobotanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ethnobotany
     */
    omit?: EthnobotanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EthnobotanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Ethnobotany to update in case it exists.
     */
    where: EthnobotanyWhereUniqueInput
    /**
     * In case the Ethnobotany found by the `where` argument doesn't exist, create a new Ethnobotany with this data.
     */
    create: XOR<EthnobotanyCreateInput, EthnobotanyUncheckedCreateInput>
    /**
     * In case the Ethnobotany was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EthnobotanyUpdateInput, EthnobotanyUncheckedUpdateInput>
  }

  /**
   * Ethnobotany delete
   */
  export type EthnobotanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ethnobotany
     */
    select?: EthnobotanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ethnobotany
     */
    omit?: EthnobotanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EthnobotanyInclude<ExtArgs> | null
    /**
     * Filter which Ethnobotany to delete.
     */
    where: EthnobotanyWhereUniqueInput
  }

  /**
   * Ethnobotany deleteMany
   */
  export type EthnobotanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ethnobotanies to delete
     */
    where?: EthnobotanyWhereInput
    /**
     * Limit how many Ethnobotanies to delete.
     */
    limit?: number
  }

  /**
   * Ethnobotany without action
   */
  export type EthnobotanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ethnobotany
     */
    select?: EthnobotanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ethnobotany
     */
    omit?: EthnobotanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EthnobotanyInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PlantNomenclatureScalarFieldEnum: {
    internalId: 'internalId',
    plantScientificName: 'plantScientificName',
    plantCommonName: 'plantCommonName',
    plantPinyin: 'plantPinyin',
    plantChineseName: 'plantChineseName',
    taxonomyId: 'taxonomyId',
    links: 'links'
  };

  export type PlantNomenclatureScalarFieldEnum = (typeof PlantNomenclatureScalarFieldEnum)[keyof typeof PlantNomenclatureScalarFieldEnum]


  export const PlantTaxonomyScalarFieldEnum: {
    id: 'id',
    class: 'class',
    family: 'family',
    vascular: 'vascular'
  };

  export type PlantTaxonomyScalarFieldEnum = (typeof PlantTaxonomyScalarFieldEnum)[keyof typeof PlantTaxonomyScalarFieldEnum]


  export const PlantSynonymScalarFieldEnum: {
    id: 'id',
    plantId: 'plantId',
    name: 'name'
  };

  export type PlantSynonymScalarFieldEnum = (typeof PlantSynonymScalarFieldEnum)[keyof typeof PlantSynonymScalarFieldEnum]


  export const PlantMorphologyScalarFieldEnum: {
    id: 'id',
    lifecycle: 'lifecycle',
    isTerrestrial: 'isTerrestrial',
    growthHabit: 'growthHabit',
    isDeciduous: 'isDeciduous',
    isDeciduousNote: 'isDeciduousNote',
    reproductiveSystem: 'reproductiveSystem',
    floweringPeriod: 'floweringPeriod',
    fruitingPeriod: 'fruitingPeriod',
    floweringPeriodNote: 'floweringPeriodNote',
    fruitingPeriodNote: 'fruitingPeriodNote'
  };

  export type PlantMorphologyScalarFieldEnum = (typeof PlantMorphologyScalarFieldEnum)[keyof typeof PlantMorphologyScalarFieldEnum]


  export const PlantEcologyDistributionScalarFieldEnum: {
    id: 'id',
    habitat: 'habitat',
    plantOrigin: 'plantOrigin',
    globalRange: 'globalRange',
    chinaRange: 'chinaRange',
    endemic: 'endemic',
    plantId: 'plantId'
  };

  export type PlantEcologyDistributionScalarFieldEnum = (typeof PlantEcologyDistributionScalarFieldEnum)[keyof typeof PlantEcologyDistributionScalarFieldEnum]


  export const PlantConservationScalarFieldEnum: {
    id: 'id',
    globalConservationStatus: 'globalConservationStatus',
    chinaConservationStatus: 'chinaConservationStatus',
    protectedStatus: 'protectedStatus',
    invasiveStatus: 'invasiveStatus',
    invasiveRange: 'invasiveRange',
    plantId: 'plantId'
  };

  export type PlantConservationScalarFieldEnum = (typeof PlantConservationScalarFieldEnum)[keyof typeof PlantConservationScalarFieldEnum]


  export const BotanicalGardenScalarFieldEnum: {
    id: 'id',
    botanicalGardenName: 'botanicalGardenName'
  };

  export type BotanicalGardenScalarFieldEnum = (typeof BotanicalGardenScalarFieldEnum)[keyof typeof BotanicalGardenScalarFieldEnum]


  export const MedicinalPropertiesScalarFieldEnum: {
    id: 'id',
    pharmaceuticalName: 'pharmaceuticalName',
    herbalDrugPinyin: 'herbalDrugPinyin',
    taste: 'taste',
    energyFlow: 'energyFlow',
    meridians: 'meridians',
    actions: 'actions',
    pharmacologicalProperties: 'pharmacologicalProperties',
    indications: 'indications',
    toxicity: 'toxicity',
    secondaryMetabolites: 'secondaryMetabolites'
  };

  export type MedicinalPropertiesScalarFieldEnum = (typeof MedicinalPropertiesScalarFieldEnum)[keyof typeof MedicinalPropertiesScalarFieldEnum]


  export const HerbalDrugBackgroundScalarFieldEnum: {
    id: 'id',
    herbalDrugPinyin: 'herbalDrugPinyin',
    plantPartUsed: 'plantPartUsed',
    officialStatus: 'officialStatus',
    harvestingTime: 'harvestingTime',
    harvestingTimeNote: 'harvestingTimeNote',
    primaryProcessing: 'primaryProcessing',
    secondaryProcessing: 'secondaryProcessing',
    herbalDruglImage: 'herbalDruglImage',
    plantScientificName: 'plantScientificName',
    pharmaceuticalName: 'pharmaceuticalName'
  };

  export type HerbalDrugBackgroundScalarFieldEnum = (typeof HerbalDrugBackgroundScalarFieldEnum)[keyof typeof HerbalDrugBackgroundScalarFieldEnum]


  export const SourcingBackgroundScalarFieldEnum: {
    id: 'id',
    herbalDrugId: 'herbalDrugId',
    cultivationStatus: 'cultivationStatus',
    cultivationRegions: 'cultivationRegions',
    wildHarvestingRegions: 'wildHarvestingRegions',
    harvestingPractice: 'harvestingPractice',
    harvestingPracticeNote: 'harvestingPracticeNote',
    daodiStatus: 'daodiStatus',
    daodiRegions: 'daodiRegions',
    productionRegions: 'productionRegions'
  };

  export type SourcingBackgroundScalarFieldEnum = (typeof SourcingBackgroundScalarFieldEnum)[keyof typeof SourcingBackgroundScalarFieldEnum]


  export const EthnobotanyScalarFieldEnum: {
    id: 'id',
    plantId: 'plantId',
    folkMedicinalUses: 'folkMedicinalUses',
    otherCulturalUses: 'otherCulturalUses',
    references: 'references'
  };

  export type EthnobotanyScalarFieldEnum = (typeof EthnobotanyScalarFieldEnum)[keyof typeof EthnobotanyScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Lifecycle[]'
   */
  export type ListEnumLifecycleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Lifecycle[]'>
    


  /**
   * Reference to a field of type 'Lifecycle'
   */
  export type EnumLifecycleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Lifecycle'>
    


  /**
   * Reference to a field of type 'Month[]'
   */
  export type ListEnumMonthFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Month[]'>
    


  /**
   * Reference to a field of type 'Month'
   */
  export type EnumMonthFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Month'>
    


  /**
   * Reference to a field of type 'GlobalConservationStatus'
   */
  export type EnumGlobalConservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GlobalConservationStatus'>
    


  /**
   * Reference to a field of type 'GlobalConservationStatus[]'
   */
  export type ListEnumGlobalConservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GlobalConservationStatus[]'>
    


  /**
   * Reference to a field of type 'InvasiveStatus'
   */
  export type EnumInvasiveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvasiveStatus'>
    


  /**
   * Reference to a field of type 'InvasiveStatus[]'
   */
  export type ListEnumInvasiveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvasiveStatus[]'>
    


  /**
   * Reference to a field of type 'Taste[]'
   */
  export type ListEnumTasteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Taste[]'>
    


  /**
   * Reference to a field of type 'Taste'
   */
  export type EnumTasteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Taste'>
    


  /**
   * Reference to a field of type 'EnergyFlow[]'
   */
  export type ListEnumEnergyFlowFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnergyFlow[]'>
    


  /**
   * Reference to a field of type 'EnergyFlow'
   */
  export type EnumEnergyFlowFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnergyFlow'>
    


  /**
   * Reference to a field of type 'Meridian[]'
   */
  export type ListEnumMeridianFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Meridian[]'>
    


  /**
   * Reference to a field of type 'Meridian'
   */
  export type EnumMeridianFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Meridian'>
    


  /**
   * Reference to a field of type 'HarvestingPractice[]'
   */
  export type ListEnumHarvestingPracticeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HarvestingPractice[]'>
    


  /**
   * Reference to a field of type 'HarvestingPractice'
   */
  export type EnumHarvestingPracticeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HarvestingPractice'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PlantNomenclatureWhereInput = {
    AND?: PlantNomenclatureWhereInput | PlantNomenclatureWhereInput[]
    OR?: PlantNomenclatureWhereInput[]
    NOT?: PlantNomenclatureWhereInput | PlantNomenclatureWhereInput[]
    internalId?: IntFilter<"PlantNomenclature"> | number
    plantScientificName?: StringFilter<"PlantNomenclature"> | string
    plantCommonName?: StringNullableListFilter<"PlantNomenclature">
    plantPinyin?: StringNullableFilter<"PlantNomenclature"> | string | null
    plantChineseName?: StringNullableFilter<"PlantNomenclature"> | string | null
    taxonomyId?: IntFilter<"PlantNomenclature"> | number
    links?: StringNullableListFilter<"PlantNomenclature">
    taxonomy?: XOR<PlantTaxonomyScalarRelationFilter, PlantTaxonomyWhereInput>
    botanicalGardenList?: BotanicalGardenListRelationFilter
    synonyms?: PlantSynonymListRelationFilter
    morphologies?: PlantMorphologyListRelationFilter
    ecologyDistributions?: XOR<PlantEcologyDistributionNullableScalarRelationFilter, PlantEcologyDistributionWhereInput> | null
    conservation?: XOR<PlantConservationNullableScalarRelationFilter, PlantConservationWhereInput> | null
    herbalDrugs?: HerbalDrugBackgroundListRelationFilter
    ethnobotanies?: XOR<EthnobotanyNullableScalarRelationFilter, EthnobotanyWhereInput> | null
  }

  export type PlantNomenclatureOrderByWithRelationInput = {
    internalId?: SortOrder
    plantScientificName?: SortOrder
    plantCommonName?: SortOrder
    plantPinyin?: SortOrderInput | SortOrder
    plantChineseName?: SortOrderInput | SortOrder
    taxonomyId?: SortOrder
    links?: SortOrder
    taxonomy?: PlantTaxonomyOrderByWithRelationInput
    botanicalGardenList?: BotanicalGardenOrderByRelationAggregateInput
    synonyms?: PlantSynonymOrderByRelationAggregateInput
    morphologies?: PlantMorphologyOrderByRelationAggregateInput
    ecologyDistributions?: PlantEcologyDistributionOrderByWithRelationInput
    conservation?: PlantConservationOrderByWithRelationInput
    herbalDrugs?: HerbalDrugBackgroundOrderByRelationAggregateInput
    ethnobotanies?: EthnobotanyOrderByWithRelationInput
  }

  export type PlantNomenclatureWhereUniqueInput = Prisma.AtLeast<{
    internalId?: number
    plantScientificName?: string
    AND?: PlantNomenclatureWhereInput | PlantNomenclatureWhereInput[]
    OR?: PlantNomenclatureWhereInput[]
    NOT?: PlantNomenclatureWhereInput | PlantNomenclatureWhereInput[]
    plantCommonName?: StringNullableListFilter<"PlantNomenclature">
    plantPinyin?: StringNullableFilter<"PlantNomenclature"> | string | null
    plantChineseName?: StringNullableFilter<"PlantNomenclature"> | string | null
    taxonomyId?: IntFilter<"PlantNomenclature"> | number
    links?: StringNullableListFilter<"PlantNomenclature">
    taxonomy?: XOR<PlantTaxonomyScalarRelationFilter, PlantTaxonomyWhereInput>
    botanicalGardenList?: BotanicalGardenListRelationFilter
    synonyms?: PlantSynonymListRelationFilter
    morphologies?: PlantMorphologyListRelationFilter
    ecologyDistributions?: XOR<PlantEcologyDistributionNullableScalarRelationFilter, PlantEcologyDistributionWhereInput> | null
    conservation?: XOR<PlantConservationNullableScalarRelationFilter, PlantConservationWhereInput> | null
    herbalDrugs?: HerbalDrugBackgroundListRelationFilter
    ethnobotanies?: XOR<EthnobotanyNullableScalarRelationFilter, EthnobotanyWhereInput> | null
  }, "internalId" | "plantScientificName">

  export type PlantNomenclatureOrderByWithAggregationInput = {
    internalId?: SortOrder
    plantScientificName?: SortOrder
    plantCommonName?: SortOrder
    plantPinyin?: SortOrderInput | SortOrder
    plantChineseName?: SortOrderInput | SortOrder
    taxonomyId?: SortOrder
    links?: SortOrder
    _count?: PlantNomenclatureCountOrderByAggregateInput
    _avg?: PlantNomenclatureAvgOrderByAggregateInput
    _max?: PlantNomenclatureMaxOrderByAggregateInput
    _min?: PlantNomenclatureMinOrderByAggregateInput
    _sum?: PlantNomenclatureSumOrderByAggregateInput
  }

  export type PlantNomenclatureScalarWhereWithAggregatesInput = {
    AND?: PlantNomenclatureScalarWhereWithAggregatesInput | PlantNomenclatureScalarWhereWithAggregatesInput[]
    OR?: PlantNomenclatureScalarWhereWithAggregatesInput[]
    NOT?: PlantNomenclatureScalarWhereWithAggregatesInput | PlantNomenclatureScalarWhereWithAggregatesInput[]
    internalId?: IntWithAggregatesFilter<"PlantNomenclature"> | number
    plantScientificName?: StringWithAggregatesFilter<"PlantNomenclature"> | string
    plantCommonName?: StringNullableListFilter<"PlantNomenclature">
    plantPinyin?: StringNullableWithAggregatesFilter<"PlantNomenclature"> | string | null
    plantChineseName?: StringNullableWithAggregatesFilter<"PlantNomenclature"> | string | null
    taxonomyId?: IntWithAggregatesFilter<"PlantNomenclature"> | number
    links?: StringNullableListFilter<"PlantNomenclature">
  }

  export type PlantTaxonomyWhereInput = {
    AND?: PlantTaxonomyWhereInput | PlantTaxonomyWhereInput[]
    OR?: PlantTaxonomyWhereInput[]
    NOT?: PlantTaxonomyWhereInput | PlantTaxonomyWhereInput[]
    id?: IntFilter<"PlantTaxonomy"> | number
    class?: StringNullableFilter<"PlantTaxonomy"> | string | null
    family?: StringFilter<"PlantTaxonomy"> | string
    vascular?: BoolNullableFilter<"PlantTaxonomy"> | boolean | null
    plants?: PlantNomenclatureListRelationFilter
  }

  export type PlantTaxonomyOrderByWithRelationInput = {
    id?: SortOrder
    class?: SortOrderInput | SortOrder
    family?: SortOrder
    vascular?: SortOrderInput | SortOrder
    plants?: PlantNomenclatureOrderByRelationAggregateInput
  }

  export type PlantTaxonomyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlantTaxonomyWhereInput | PlantTaxonomyWhereInput[]
    OR?: PlantTaxonomyWhereInput[]
    NOT?: PlantTaxonomyWhereInput | PlantTaxonomyWhereInput[]
    class?: StringNullableFilter<"PlantTaxonomy"> | string | null
    family?: StringFilter<"PlantTaxonomy"> | string
    vascular?: BoolNullableFilter<"PlantTaxonomy"> | boolean | null
    plants?: PlantNomenclatureListRelationFilter
  }, "id">

  export type PlantTaxonomyOrderByWithAggregationInput = {
    id?: SortOrder
    class?: SortOrderInput | SortOrder
    family?: SortOrder
    vascular?: SortOrderInput | SortOrder
    _count?: PlantTaxonomyCountOrderByAggregateInput
    _avg?: PlantTaxonomyAvgOrderByAggregateInput
    _max?: PlantTaxonomyMaxOrderByAggregateInput
    _min?: PlantTaxonomyMinOrderByAggregateInput
    _sum?: PlantTaxonomySumOrderByAggregateInput
  }

  export type PlantTaxonomyScalarWhereWithAggregatesInput = {
    AND?: PlantTaxonomyScalarWhereWithAggregatesInput | PlantTaxonomyScalarWhereWithAggregatesInput[]
    OR?: PlantTaxonomyScalarWhereWithAggregatesInput[]
    NOT?: PlantTaxonomyScalarWhereWithAggregatesInput | PlantTaxonomyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlantTaxonomy"> | number
    class?: StringNullableWithAggregatesFilter<"PlantTaxonomy"> | string | null
    family?: StringWithAggregatesFilter<"PlantTaxonomy"> | string
    vascular?: BoolNullableWithAggregatesFilter<"PlantTaxonomy"> | boolean | null
  }

  export type PlantSynonymWhereInput = {
    AND?: PlantSynonymWhereInput | PlantSynonymWhereInput[]
    OR?: PlantSynonymWhereInput[]
    NOT?: PlantSynonymWhereInput | PlantSynonymWhereInput[]
    id?: IntFilter<"PlantSynonym"> | number
    plantId?: IntFilter<"PlantSynonym"> | number
    name?: StringNullableFilter<"PlantSynonym"> | string | null
    plant?: XOR<PlantNomenclatureScalarRelationFilter, PlantNomenclatureWhereInput>
  }

  export type PlantSynonymOrderByWithRelationInput = {
    id?: SortOrder
    plantId?: SortOrder
    name?: SortOrderInput | SortOrder
    plant?: PlantNomenclatureOrderByWithRelationInput
  }

  export type PlantSynonymWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlantSynonymWhereInput | PlantSynonymWhereInput[]
    OR?: PlantSynonymWhereInput[]
    NOT?: PlantSynonymWhereInput | PlantSynonymWhereInput[]
    plantId?: IntFilter<"PlantSynonym"> | number
    name?: StringNullableFilter<"PlantSynonym"> | string | null
    plant?: XOR<PlantNomenclatureScalarRelationFilter, PlantNomenclatureWhereInput>
  }, "id">

  export type PlantSynonymOrderByWithAggregationInput = {
    id?: SortOrder
    plantId?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: PlantSynonymCountOrderByAggregateInput
    _avg?: PlantSynonymAvgOrderByAggregateInput
    _max?: PlantSynonymMaxOrderByAggregateInput
    _min?: PlantSynonymMinOrderByAggregateInput
    _sum?: PlantSynonymSumOrderByAggregateInput
  }

  export type PlantSynonymScalarWhereWithAggregatesInput = {
    AND?: PlantSynonymScalarWhereWithAggregatesInput | PlantSynonymScalarWhereWithAggregatesInput[]
    OR?: PlantSynonymScalarWhereWithAggregatesInput[]
    NOT?: PlantSynonymScalarWhereWithAggregatesInput | PlantSynonymScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlantSynonym"> | number
    plantId?: IntWithAggregatesFilter<"PlantSynonym"> | number
    name?: StringNullableWithAggregatesFilter<"PlantSynonym"> | string | null
  }

  export type PlantMorphologyWhereInput = {
    AND?: PlantMorphologyWhereInput | PlantMorphologyWhereInput[]
    OR?: PlantMorphologyWhereInput[]
    NOT?: PlantMorphologyWhereInput | PlantMorphologyWhereInput[]
    id?: IntFilter<"PlantMorphology"> | number
    lifecycle?: EnumLifecycleNullableListFilter<"PlantMorphology">
    isTerrestrial?: BoolNullableFilter<"PlantMorphology"> | boolean | null
    growthHabit?: StringNullableFilter<"PlantMorphology"> | string | null
    isDeciduous?: BoolNullableFilter<"PlantMorphology"> | boolean | null
    isDeciduousNote?: StringNullableFilter<"PlantMorphology"> | string | null
    reproductiveSystem?: StringNullableFilter<"PlantMorphology"> | string | null
    floweringPeriod?: EnumMonthNullableListFilter<"PlantMorphology">
    fruitingPeriod?: EnumMonthNullableListFilter<"PlantMorphology">
    floweringPeriodNote?: StringNullableFilter<"PlantMorphology"> | string | null
    fruitingPeriodNote?: StringNullableFilter<"PlantMorphology"> | string | null
    plants?: PlantNomenclatureListRelationFilter
  }

  export type PlantMorphologyOrderByWithRelationInput = {
    id?: SortOrder
    lifecycle?: SortOrder
    isTerrestrial?: SortOrderInput | SortOrder
    growthHabit?: SortOrderInput | SortOrder
    isDeciduous?: SortOrderInput | SortOrder
    isDeciduousNote?: SortOrderInput | SortOrder
    reproductiveSystem?: SortOrderInput | SortOrder
    floweringPeriod?: SortOrder
    fruitingPeriod?: SortOrder
    floweringPeriodNote?: SortOrderInput | SortOrder
    fruitingPeriodNote?: SortOrderInput | SortOrder
    plants?: PlantNomenclatureOrderByRelationAggregateInput
  }

  export type PlantMorphologyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlantMorphologyWhereInput | PlantMorphologyWhereInput[]
    OR?: PlantMorphologyWhereInput[]
    NOT?: PlantMorphologyWhereInput | PlantMorphologyWhereInput[]
    lifecycle?: EnumLifecycleNullableListFilter<"PlantMorphology">
    isTerrestrial?: BoolNullableFilter<"PlantMorphology"> | boolean | null
    growthHabit?: StringNullableFilter<"PlantMorphology"> | string | null
    isDeciduous?: BoolNullableFilter<"PlantMorphology"> | boolean | null
    isDeciduousNote?: StringNullableFilter<"PlantMorphology"> | string | null
    reproductiveSystem?: StringNullableFilter<"PlantMorphology"> | string | null
    floweringPeriod?: EnumMonthNullableListFilter<"PlantMorphology">
    fruitingPeriod?: EnumMonthNullableListFilter<"PlantMorphology">
    floweringPeriodNote?: StringNullableFilter<"PlantMorphology"> | string | null
    fruitingPeriodNote?: StringNullableFilter<"PlantMorphology"> | string | null
    plants?: PlantNomenclatureListRelationFilter
  }, "id">

  export type PlantMorphologyOrderByWithAggregationInput = {
    id?: SortOrder
    lifecycle?: SortOrder
    isTerrestrial?: SortOrderInput | SortOrder
    growthHabit?: SortOrderInput | SortOrder
    isDeciduous?: SortOrderInput | SortOrder
    isDeciduousNote?: SortOrderInput | SortOrder
    reproductiveSystem?: SortOrderInput | SortOrder
    floweringPeriod?: SortOrder
    fruitingPeriod?: SortOrder
    floweringPeriodNote?: SortOrderInput | SortOrder
    fruitingPeriodNote?: SortOrderInput | SortOrder
    _count?: PlantMorphologyCountOrderByAggregateInput
    _avg?: PlantMorphologyAvgOrderByAggregateInput
    _max?: PlantMorphologyMaxOrderByAggregateInput
    _min?: PlantMorphologyMinOrderByAggregateInput
    _sum?: PlantMorphologySumOrderByAggregateInput
  }

  export type PlantMorphologyScalarWhereWithAggregatesInput = {
    AND?: PlantMorphologyScalarWhereWithAggregatesInput | PlantMorphologyScalarWhereWithAggregatesInput[]
    OR?: PlantMorphologyScalarWhereWithAggregatesInput[]
    NOT?: PlantMorphologyScalarWhereWithAggregatesInput | PlantMorphologyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlantMorphology"> | number
    lifecycle?: EnumLifecycleNullableListFilter<"PlantMorphology">
    isTerrestrial?: BoolNullableWithAggregatesFilter<"PlantMorphology"> | boolean | null
    growthHabit?: StringNullableWithAggregatesFilter<"PlantMorphology"> | string | null
    isDeciduous?: BoolNullableWithAggregatesFilter<"PlantMorphology"> | boolean | null
    isDeciduousNote?: StringNullableWithAggregatesFilter<"PlantMorphology"> | string | null
    reproductiveSystem?: StringNullableWithAggregatesFilter<"PlantMorphology"> | string | null
    floweringPeriod?: EnumMonthNullableListFilter<"PlantMorphology">
    fruitingPeriod?: EnumMonthNullableListFilter<"PlantMorphology">
    floweringPeriodNote?: StringNullableWithAggregatesFilter<"PlantMorphology"> | string | null
    fruitingPeriodNote?: StringNullableWithAggregatesFilter<"PlantMorphology"> | string | null
  }

  export type PlantEcologyDistributionWhereInput = {
    AND?: PlantEcologyDistributionWhereInput | PlantEcologyDistributionWhereInput[]
    OR?: PlantEcologyDistributionWhereInput[]
    NOT?: PlantEcologyDistributionWhereInput | PlantEcologyDistributionWhereInput[]
    id?: IntFilter<"PlantEcologyDistribution"> | number
    habitat?: StringNullableFilter<"PlantEcologyDistribution"> | string | null
    plantOrigin?: StringNullableFilter<"PlantEcologyDistribution"> | string | null
    globalRange?: StringNullableFilter<"PlantEcologyDistribution"> | string | null
    chinaRange?: StringNullableFilter<"PlantEcologyDistribution"> | string | null
    endemic?: StringNullableFilter<"PlantEcologyDistribution"> | string | null
    plantId?: IntFilter<"PlantEcologyDistribution"> | number
    plant?: XOR<PlantNomenclatureScalarRelationFilter, PlantNomenclatureWhereInput>
  }

  export type PlantEcologyDistributionOrderByWithRelationInput = {
    id?: SortOrder
    habitat?: SortOrderInput | SortOrder
    plantOrigin?: SortOrderInput | SortOrder
    globalRange?: SortOrderInput | SortOrder
    chinaRange?: SortOrderInput | SortOrder
    endemic?: SortOrderInput | SortOrder
    plantId?: SortOrder
    plant?: PlantNomenclatureOrderByWithRelationInput
  }

  export type PlantEcologyDistributionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    plantId?: number
    AND?: PlantEcologyDistributionWhereInput | PlantEcologyDistributionWhereInput[]
    OR?: PlantEcologyDistributionWhereInput[]
    NOT?: PlantEcologyDistributionWhereInput | PlantEcologyDistributionWhereInput[]
    habitat?: StringNullableFilter<"PlantEcologyDistribution"> | string | null
    plantOrigin?: StringNullableFilter<"PlantEcologyDistribution"> | string | null
    globalRange?: StringNullableFilter<"PlantEcologyDistribution"> | string | null
    chinaRange?: StringNullableFilter<"PlantEcologyDistribution"> | string | null
    endemic?: StringNullableFilter<"PlantEcologyDistribution"> | string | null
    plant?: XOR<PlantNomenclatureScalarRelationFilter, PlantNomenclatureWhereInput>
  }, "id" | "plantId">

  export type PlantEcologyDistributionOrderByWithAggregationInput = {
    id?: SortOrder
    habitat?: SortOrderInput | SortOrder
    plantOrigin?: SortOrderInput | SortOrder
    globalRange?: SortOrderInput | SortOrder
    chinaRange?: SortOrderInput | SortOrder
    endemic?: SortOrderInput | SortOrder
    plantId?: SortOrder
    _count?: PlantEcologyDistributionCountOrderByAggregateInput
    _avg?: PlantEcologyDistributionAvgOrderByAggregateInput
    _max?: PlantEcologyDistributionMaxOrderByAggregateInput
    _min?: PlantEcologyDistributionMinOrderByAggregateInput
    _sum?: PlantEcologyDistributionSumOrderByAggregateInput
  }

  export type PlantEcologyDistributionScalarWhereWithAggregatesInput = {
    AND?: PlantEcologyDistributionScalarWhereWithAggregatesInput | PlantEcologyDistributionScalarWhereWithAggregatesInput[]
    OR?: PlantEcologyDistributionScalarWhereWithAggregatesInput[]
    NOT?: PlantEcologyDistributionScalarWhereWithAggregatesInput | PlantEcologyDistributionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlantEcologyDistribution"> | number
    habitat?: StringNullableWithAggregatesFilter<"PlantEcologyDistribution"> | string | null
    plantOrigin?: StringNullableWithAggregatesFilter<"PlantEcologyDistribution"> | string | null
    globalRange?: StringNullableWithAggregatesFilter<"PlantEcologyDistribution"> | string | null
    chinaRange?: StringNullableWithAggregatesFilter<"PlantEcologyDistribution"> | string | null
    endemic?: StringNullableWithAggregatesFilter<"PlantEcologyDistribution"> | string | null
    plantId?: IntWithAggregatesFilter<"PlantEcologyDistribution"> | number
  }

  export type PlantConservationWhereInput = {
    AND?: PlantConservationWhereInput | PlantConservationWhereInput[]
    OR?: PlantConservationWhereInput[]
    NOT?: PlantConservationWhereInput | PlantConservationWhereInput[]
    id?: IntFilter<"PlantConservation"> | number
    globalConservationStatus?: EnumGlobalConservationStatusNullableFilter<"PlantConservation"> | $Enums.GlobalConservationStatus | null
    chinaConservationStatus?: StringNullableFilter<"PlantConservation"> | string | null
    protectedStatus?: StringNullableFilter<"PlantConservation"> | string | null
    invasiveStatus?: EnumInvasiveStatusNullableFilter<"PlantConservation"> | $Enums.InvasiveStatus | null
    invasiveRange?: StringNullableFilter<"PlantConservation"> | string | null
    plantId?: IntFilter<"PlantConservation"> | number
    plant?: XOR<PlantNomenclatureScalarRelationFilter, PlantNomenclatureWhereInput>
  }

  export type PlantConservationOrderByWithRelationInput = {
    id?: SortOrder
    globalConservationStatus?: SortOrderInput | SortOrder
    chinaConservationStatus?: SortOrderInput | SortOrder
    protectedStatus?: SortOrderInput | SortOrder
    invasiveStatus?: SortOrderInput | SortOrder
    invasiveRange?: SortOrderInput | SortOrder
    plantId?: SortOrder
    plant?: PlantNomenclatureOrderByWithRelationInput
  }

  export type PlantConservationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    plantId?: number
    AND?: PlantConservationWhereInput | PlantConservationWhereInput[]
    OR?: PlantConservationWhereInput[]
    NOT?: PlantConservationWhereInput | PlantConservationWhereInput[]
    globalConservationStatus?: EnumGlobalConservationStatusNullableFilter<"PlantConservation"> | $Enums.GlobalConservationStatus | null
    chinaConservationStatus?: StringNullableFilter<"PlantConservation"> | string | null
    protectedStatus?: StringNullableFilter<"PlantConservation"> | string | null
    invasiveStatus?: EnumInvasiveStatusNullableFilter<"PlantConservation"> | $Enums.InvasiveStatus | null
    invasiveRange?: StringNullableFilter<"PlantConservation"> | string | null
    plant?: XOR<PlantNomenclatureScalarRelationFilter, PlantNomenclatureWhereInput>
  }, "id" | "plantId">

  export type PlantConservationOrderByWithAggregationInput = {
    id?: SortOrder
    globalConservationStatus?: SortOrderInput | SortOrder
    chinaConservationStatus?: SortOrderInput | SortOrder
    protectedStatus?: SortOrderInput | SortOrder
    invasiveStatus?: SortOrderInput | SortOrder
    invasiveRange?: SortOrderInput | SortOrder
    plantId?: SortOrder
    _count?: PlantConservationCountOrderByAggregateInput
    _avg?: PlantConservationAvgOrderByAggregateInput
    _max?: PlantConservationMaxOrderByAggregateInput
    _min?: PlantConservationMinOrderByAggregateInput
    _sum?: PlantConservationSumOrderByAggregateInput
  }

  export type PlantConservationScalarWhereWithAggregatesInput = {
    AND?: PlantConservationScalarWhereWithAggregatesInput | PlantConservationScalarWhereWithAggregatesInput[]
    OR?: PlantConservationScalarWhereWithAggregatesInput[]
    NOT?: PlantConservationScalarWhereWithAggregatesInput | PlantConservationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlantConservation"> | number
    globalConservationStatus?: EnumGlobalConservationStatusNullableWithAggregatesFilter<"PlantConservation"> | $Enums.GlobalConservationStatus | null
    chinaConservationStatus?: StringNullableWithAggregatesFilter<"PlantConservation"> | string | null
    protectedStatus?: StringNullableWithAggregatesFilter<"PlantConservation"> | string | null
    invasiveStatus?: EnumInvasiveStatusNullableWithAggregatesFilter<"PlantConservation"> | $Enums.InvasiveStatus | null
    invasiveRange?: StringNullableWithAggregatesFilter<"PlantConservation"> | string | null
    plantId?: IntWithAggregatesFilter<"PlantConservation"> | number
  }

  export type BotanicalGardenWhereInput = {
    AND?: BotanicalGardenWhereInput | BotanicalGardenWhereInput[]
    OR?: BotanicalGardenWhereInput[]
    NOT?: BotanicalGardenWhereInput | BotanicalGardenWhereInput[]
    id?: IntFilter<"BotanicalGarden"> | number
    botanicalGardenName?: StringFilter<"BotanicalGarden"> | string
    plants?: PlantNomenclatureListRelationFilter
  }

  export type BotanicalGardenOrderByWithRelationInput = {
    id?: SortOrder
    botanicalGardenName?: SortOrder
    plants?: PlantNomenclatureOrderByRelationAggregateInput
  }

  export type BotanicalGardenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BotanicalGardenWhereInput | BotanicalGardenWhereInput[]
    OR?: BotanicalGardenWhereInput[]
    NOT?: BotanicalGardenWhereInput | BotanicalGardenWhereInput[]
    botanicalGardenName?: StringFilter<"BotanicalGarden"> | string
    plants?: PlantNomenclatureListRelationFilter
  }, "id">

  export type BotanicalGardenOrderByWithAggregationInput = {
    id?: SortOrder
    botanicalGardenName?: SortOrder
    _count?: BotanicalGardenCountOrderByAggregateInput
    _avg?: BotanicalGardenAvgOrderByAggregateInput
    _max?: BotanicalGardenMaxOrderByAggregateInput
    _min?: BotanicalGardenMinOrderByAggregateInput
    _sum?: BotanicalGardenSumOrderByAggregateInput
  }

  export type BotanicalGardenScalarWhereWithAggregatesInput = {
    AND?: BotanicalGardenScalarWhereWithAggregatesInput | BotanicalGardenScalarWhereWithAggregatesInput[]
    OR?: BotanicalGardenScalarWhereWithAggregatesInput[]
    NOT?: BotanicalGardenScalarWhereWithAggregatesInput | BotanicalGardenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BotanicalGarden"> | number
    botanicalGardenName?: StringWithAggregatesFilter<"BotanicalGarden"> | string
  }

  export type MedicinalPropertiesWhereInput = {
    AND?: MedicinalPropertiesWhereInput | MedicinalPropertiesWhereInput[]
    OR?: MedicinalPropertiesWhereInput[]
    NOT?: MedicinalPropertiesWhereInput | MedicinalPropertiesWhereInput[]
    id?: IntFilter<"MedicinalProperties"> | number
    pharmaceuticalName?: StringNullableFilter<"MedicinalProperties"> | string | null
    herbalDrugPinyin?: StringNullableFilter<"MedicinalProperties"> | string | null
    taste?: EnumTasteNullableListFilter<"MedicinalProperties">
    energyFlow?: EnumEnergyFlowNullableListFilter<"MedicinalProperties">
    meridians?: EnumMeridianNullableListFilter<"MedicinalProperties">
    actions?: StringNullableFilter<"MedicinalProperties"> | string | null
    pharmacologicalProperties?: StringNullableListFilter<"MedicinalProperties">
    indications?: StringNullableListFilter<"MedicinalProperties">
    toxicity?: StringNullableFilter<"MedicinalProperties"> | string | null
    secondaryMetabolites?: StringNullableFilter<"MedicinalProperties"> | string | null
    herbalDrugs?: HerbalDrugBackgroundListRelationFilter
  }

  export type MedicinalPropertiesOrderByWithRelationInput = {
    id?: SortOrder
    pharmaceuticalName?: SortOrderInput | SortOrder
    herbalDrugPinyin?: SortOrderInput | SortOrder
    taste?: SortOrder
    energyFlow?: SortOrder
    meridians?: SortOrder
    actions?: SortOrderInput | SortOrder
    pharmacologicalProperties?: SortOrder
    indications?: SortOrder
    toxicity?: SortOrderInput | SortOrder
    secondaryMetabolites?: SortOrderInput | SortOrder
    herbalDrugs?: HerbalDrugBackgroundOrderByRelationAggregateInput
  }

  export type MedicinalPropertiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pharmaceuticalName?: string
    AND?: MedicinalPropertiesWhereInput | MedicinalPropertiesWhereInput[]
    OR?: MedicinalPropertiesWhereInput[]
    NOT?: MedicinalPropertiesWhereInput | MedicinalPropertiesWhereInput[]
    herbalDrugPinyin?: StringNullableFilter<"MedicinalProperties"> | string | null
    taste?: EnumTasteNullableListFilter<"MedicinalProperties">
    energyFlow?: EnumEnergyFlowNullableListFilter<"MedicinalProperties">
    meridians?: EnumMeridianNullableListFilter<"MedicinalProperties">
    actions?: StringNullableFilter<"MedicinalProperties"> | string | null
    pharmacologicalProperties?: StringNullableListFilter<"MedicinalProperties">
    indications?: StringNullableListFilter<"MedicinalProperties">
    toxicity?: StringNullableFilter<"MedicinalProperties"> | string | null
    secondaryMetabolites?: StringNullableFilter<"MedicinalProperties"> | string | null
    herbalDrugs?: HerbalDrugBackgroundListRelationFilter
  }, "id" | "pharmaceuticalName">

  export type MedicinalPropertiesOrderByWithAggregationInput = {
    id?: SortOrder
    pharmaceuticalName?: SortOrderInput | SortOrder
    herbalDrugPinyin?: SortOrderInput | SortOrder
    taste?: SortOrder
    energyFlow?: SortOrder
    meridians?: SortOrder
    actions?: SortOrderInput | SortOrder
    pharmacologicalProperties?: SortOrder
    indications?: SortOrder
    toxicity?: SortOrderInput | SortOrder
    secondaryMetabolites?: SortOrderInput | SortOrder
    _count?: MedicinalPropertiesCountOrderByAggregateInput
    _avg?: MedicinalPropertiesAvgOrderByAggregateInput
    _max?: MedicinalPropertiesMaxOrderByAggregateInput
    _min?: MedicinalPropertiesMinOrderByAggregateInput
    _sum?: MedicinalPropertiesSumOrderByAggregateInput
  }

  export type MedicinalPropertiesScalarWhereWithAggregatesInput = {
    AND?: MedicinalPropertiesScalarWhereWithAggregatesInput | MedicinalPropertiesScalarWhereWithAggregatesInput[]
    OR?: MedicinalPropertiesScalarWhereWithAggregatesInput[]
    NOT?: MedicinalPropertiesScalarWhereWithAggregatesInput | MedicinalPropertiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MedicinalProperties"> | number
    pharmaceuticalName?: StringNullableWithAggregatesFilter<"MedicinalProperties"> | string | null
    herbalDrugPinyin?: StringNullableWithAggregatesFilter<"MedicinalProperties"> | string | null
    taste?: EnumTasteNullableListFilter<"MedicinalProperties">
    energyFlow?: EnumEnergyFlowNullableListFilter<"MedicinalProperties">
    meridians?: EnumMeridianNullableListFilter<"MedicinalProperties">
    actions?: StringNullableWithAggregatesFilter<"MedicinalProperties"> | string | null
    pharmacologicalProperties?: StringNullableListFilter<"MedicinalProperties">
    indications?: StringNullableListFilter<"MedicinalProperties">
    toxicity?: StringNullableWithAggregatesFilter<"MedicinalProperties"> | string | null
    secondaryMetabolites?: StringNullableWithAggregatesFilter<"MedicinalProperties"> | string | null
  }

  export type HerbalDrugBackgroundWhereInput = {
    AND?: HerbalDrugBackgroundWhereInput | HerbalDrugBackgroundWhereInput[]
    OR?: HerbalDrugBackgroundWhereInput[]
    NOT?: HerbalDrugBackgroundWhereInput | HerbalDrugBackgroundWhereInput[]
    id?: IntFilter<"HerbalDrugBackground"> | number
    herbalDrugPinyin?: StringFilter<"HerbalDrugBackground"> | string
    plantPartUsed?: StringNullableFilter<"HerbalDrugBackground"> | string | null
    officialStatus?: BoolNullableFilter<"HerbalDrugBackground"> | boolean | null
    harvestingTime?: EnumMonthNullableListFilter<"HerbalDrugBackground">
    harvestingTimeNote?: StringNullableFilter<"HerbalDrugBackground"> | string | null
    primaryProcessing?: StringNullableFilter<"HerbalDrugBackground"> | string | null
    secondaryProcessing?: StringNullableFilter<"HerbalDrugBackground"> | string | null
    herbalDruglImage?: StringNullableFilter<"HerbalDrugBackground"> | string | null
    plantScientificName?: StringFilter<"HerbalDrugBackground"> | string
    pharmaceuticalName?: StringFilter<"HerbalDrugBackground"> | string
    plant?: XOR<PlantNomenclatureScalarRelationFilter, PlantNomenclatureWhereInput>
    medicinalProperty?: XOR<MedicinalPropertiesScalarRelationFilter, MedicinalPropertiesWhereInput>
    sourcingBackgrounds?: XOR<SourcingBackgroundNullableScalarRelationFilter, SourcingBackgroundWhereInput> | null
  }

  export type HerbalDrugBackgroundOrderByWithRelationInput = {
    id?: SortOrder
    herbalDrugPinyin?: SortOrder
    plantPartUsed?: SortOrderInput | SortOrder
    officialStatus?: SortOrderInput | SortOrder
    harvestingTime?: SortOrder
    harvestingTimeNote?: SortOrderInput | SortOrder
    primaryProcessing?: SortOrderInput | SortOrder
    secondaryProcessing?: SortOrderInput | SortOrder
    herbalDruglImage?: SortOrderInput | SortOrder
    plantScientificName?: SortOrder
    pharmaceuticalName?: SortOrder
    plant?: PlantNomenclatureOrderByWithRelationInput
    medicinalProperty?: MedicinalPropertiesOrderByWithRelationInput
    sourcingBackgrounds?: SourcingBackgroundOrderByWithRelationInput
  }

  export type HerbalDrugBackgroundWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    plantScientificName_pharmaceuticalName?: HerbalDrugBackgroundPlantScientificNamePharmaceuticalNameCompoundUniqueInput
    AND?: HerbalDrugBackgroundWhereInput | HerbalDrugBackgroundWhereInput[]
    OR?: HerbalDrugBackgroundWhereInput[]
    NOT?: HerbalDrugBackgroundWhereInput | HerbalDrugBackgroundWhereInput[]
    herbalDrugPinyin?: StringFilter<"HerbalDrugBackground"> | string
    plantPartUsed?: StringNullableFilter<"HerbalDrugBackground"> | string | null
    officialStatus?: BoolNullableFilter<"HerbalDrugBackground"> | boolean | null
    harvestingTime?: EnumMonthNullableListFilter<"HerbalDrugBackground">
    harvestingTimeNote?: StringNullableFilter<"HerbalDrugBackground"> | string | null
    primaryProcessing?: StringNullableFilter<"HerbalDrugBackground"> | string | null
    secondaryProcessing?: StringNullableFilter<"HerbalDrugBackground"> | string | null
    herbalDruglImage?: StringNullableFilter<"HerbalDrugBackground"> | string | null
    plantScientificName?: StringFilter<"HerbalDrugBackground"> | string
    pharmaceuticalName?: StringFilter<"HerbalDrugBackground"> | string
    plant?: XOR<PlantNomenclatureScalarRelationFilter, PlantNomenclatureWhereInput>
    medicinalProperty?: XOR<MedicinalPropertiesScalarRelationFilter, MedicinalPropertiesWhereInput>
    sourcingBackgrounds?: XOR<SourcingBackgroundNullableScalarRelationFilter, SourcingBackgroundWhereInput> | null
  }, "id" | "plantScientificName_pharmaceuticalName">

  export type HerbalDrugBackgroundOrderByWithAggregationInput = {
    id?: SortOrder
    herbalDrugPinyin?: SortOrder
    plantPartUsed?: SortOrderInput | SortOrder
    officialStatus?: SortOrderInput | SortOrder
    harvestingTime?: SortOrder
    harvestingTimeNote?: SortOrderInput | SortOrder
    primaryProcessing?: SortOrderInput | SortOrder
    secondaryProcessing?: SortOrderInput | SortOrder
    herbalDruglImage?: SortOrderInput | SortOrder
    plantScientificName?: SortOrder
    pharmaceuticalName?: SortOrder
    _count?: HerbalDrugBackgroundCountOrderByAggregateInput
    _avg?: HerbalDrugBackgroundAvgOrderByAggregateInput
    _max?: HerbalDrugBackgroundMaxOrderByAggregateInput
    _min?: HerbalDrugBackgroundMinOrderByAggregateInput
    _sum?: HerbalDrugBackgroundSumOrderByAggregateInput
  }

  export type HerbalDrugBackgroundScalarWhereWithAggregatesInput = {
    AND?: HerbalDrugBackgroundScalarWhereWithAggregatesInput | HerbalDrugBackgroundScalarWhereWithAggregatesInput[]
    OR?: HerbalDrugBackgroundScalarWhereWithAggregatesInput[]
    NOT?: HerbalDrugBackgroundScalarWhereWithAggregatesInput | HerbalDrugBackgroundScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HerbalDrugBackground"> | number
    herbalDrugPinyin?: StringWithAggregatesFilter<"HerbalDrugBackground"> | string
    plantPartUsed?: StringNullableWithAggregatesFilter<"HerbalDrugBackground"> | string | null
    officialStatus?: BoolNullableWithAggregatesFilter<"HerbalDrugBackground"> | boolean | null
    harvestingTime?: EnumMonthNullableListFilter<"HerbalDrugBackground">
    harvestingTimeNote?: StringNullableWithAggregatesFilter<"HerbalDrugBackground"> | string | null
    primaryProcessing?: StringNullableWithAggregatesFilter<"HerbalDrugBackground"> | string | null
    secondaryProcessing?: StringNullableWithAggregatesFilter<"HerbalDrugBackground"> | string | null
    herbalDruglImage?: StringNullableWithAggregatesFilter<"HerbalDrugBackground"> | string | null
    plantScientificName?: StringWithAggregatesFilter<"HerbalDrugBackground"> | string
    pharmaceuticalName?: StringWithAggregatesFilter<"HerbalDrugBackground"> | string
  }

  export type SourcingBackgroundWhereInput = {
    AND?: SourcingBackgroundWhereInput | SourcingBackgroundWhereInput[]
    OR?: SourcingBackgroundWhereInput[]
    NOT?: SourcingBackgroundWhereInput | SourcingBackgroundWhereInput[]
    id?: IntFilter<"SourcingBackground"> | number
    herbalDrugId?: IntFilter<"SourcingBackground"> | number
    cultivationStatus?: BoolNullableFilter<"SourcingBackground"> | boolean | null
    cultivationRegions?: StringNullableFilter<"SourcingBackground"> | string | null
    wildHarvestingRegions?: StringNullableFilter<"SourcingBackground"> | string | null
    harvestingPractice?: EnumHarvestingPracticeNullableListFilter<"SourcingBackground">
    harvestingPracticeNote?: StringNullableFilter<"SourcingBackground"> | string | null
    daodiStatus?: BoolNullableFilter<"SourcingBackground"> | boolean | null
    daodiRegions?: StringNullableFilter<"SourcingBackground"> | string | null
    productionRegions?: StringNullableFilter<"SourcingBackground"> | string | null
    herbalDrug?: XOR<HerbalDrugBackgroundScalarRelationFilter, HerbalDrugBackgroundWhereInput>
  }

  export type SourcingBackgroundOrderByWithRelationInput = {
    id?: SortOrder
    herbalDrugId?: SortOrder
    cultivationStatus?: SortOrderInput | SortOrder
    cultivationRegions?: SortOrderInput | SortOrder
    wildHarvestingRegions?: SortOrderInput | SortOrder
    harvestingPractice?: SortOrder
    harvestingPracticeNote?: SortOrderInput | SortOrder
    daodiStatus?: SortOrderInput | SortOrder
    daodiRegions?: SortOrderInput | SortOrder
    productionRegions?: SortOrderInput | SortOrder
    herbalDrug?: HerbalDrugBackgroundOrderByWithRelationInput
  }

  export type SourcingBackgroundWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    herbalDrugId?: number
    AND?: SourcingBackgroundWhereInput | SourcingBackgroundWhereInput[]
    OR?: SourcingBackgroundWhereInput[]
    NOT?: SourcingBackgroundWhereInput | SourcingBackgroundWhereInput[]
    cultivationStatus?: BoolNullableFilter<"SourcingBackground"> | boolean | null
    cultivationRegions?: StringNullableFilter<"SourcingBackground"> | string | null
    wildHarvestingRegions?: StringNullableFilter<"SourcingBackground"> | string | null
    harvestingPractice?: EnumHarvestingPracticeNullableListFilter<"SourcingBackground">
    harvestingPracticeNote?: StringNullableFilter<"SourcingBackground"> | string | null
    daodiStatus?: BoolNullableFilter<"SourcingBackground"> | boolean | null
    daodiRegions?: StringNullableFilter<"SourcingBackground"> | string | null
    productionRegions?: StringNullableFilter<"SourcingBackground"> | string | null
    herbalDrug?: XOR<HerbalDrugBackgroundScalarRelationFilter, HerbalDrugBackgroundWhereInput>
  }, "id" | "herbalDrugId">

  export type SourcingBackgroundOrderByWithAggregationInput = {
    id?: SortOrder
    herbalDrugId?: SortOrder
    cultivationStatus?: SortOrderInput | SortOrder
    cultivationRegions?: SortOrderInput | SortOrder
    wildHarvestingRegions?: SortOrderInput | SortOrder
    harvestingPractice?: SortOrder
    harvestingPracticeNote?: SortOrderInput | SortOrder
    daodiStatus?: SortOrderInput | SortOrder
    daodiRegions?: SortOrderInput | SortOrder
    productionRegions?: SortOrderInput | SortOrder
    _count?: SourcingBackgroundCountOrderByAggregateInput
    _avg?: SourcingBackgroundAvgOrderByAggregateInput
    _max?: SourcingBackgroundMaxOrderByAggregateInput
    _min?: SourcingBackgroundMinOrderByAggregateInput
    _sum?: SourcingBackgroundSumOrderByAggregateInput
  }

  export type SourcingBackgroundScalarWhereWithAggregatesInput = {
    AND?: SourcingBackgroundScalarWhereWithAggregatesInput | SourcingBackgroundScalarWhereWithAggregatesInput[]
    OR?: SourcingBackgroundScalarWhereWithAggregatesInput[]
    NOT?: SourcingBackgroundScalarWhereWithAggregatesInput | SourcingBackgroundScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SourcingBackground"> | number
    herbalDrugId?: IntWithAggregatesFilter<"SourcingBackground"> | number
    cultivationStatus?: BoolNullableWithAggregatesFilter<"SourcingBackground"> | boolean | null
    cultivationRegions?: StringNullableWithAggregatesFilter<"SourcingBackground"> | string | null
    wildHarvestingRegions?: StringNullableWithAggregatesFilter<"SourcingBackground"> | string | null
    harvestingPractice?: EnumHarvestingPracticeNullableListFilter<"SourcingBackground">
    harvestingPracticeNote?: StringNullableWithAggregatesFilter<"SourcingBackground"> | string | null
    daodiStatus?: BoolNullableWithAggregatesFilter<"SourcingBackground"> | boolean | null
    daodiRegions?: StringNullableWithAggregatesFilter<"SourcingBackground"> | string | null
    productionRegions?: StringNullableWithAggregatesFilter<"SourcingBackground"> | string | null
  }

  export type EthnobotanyWhereInput = {
    AND?: EthnobotanyWhereInput | EthnobotanyWhereInput[]
    OR?: EthnobotanyWhereInput[]
    NOT?: EthnobotanyWhereInput | EthnobotanyWhereInput[]
    id?: IntFilter<"Ethnobotany"> | number
    plantId?: IntFilter<"Ethnobotany"> | number
    folkMedicinalUses?: StringNullableFilter<"Ethnobotany"> | string | null
    otherCulturalUses?: StringNullableListFilter<"Ethnobotany">
    references?: StringNullableFilter<"Ethnobotany"> | string | null
    plant?: XOR<PlantNomenclatureScalarRelationFilter, PlantNomenclatureWhereInput>
  }

  export type EthnobotanyOrderByWithRelationInput = {
    id?: SortOrder
    plantId?: SortOrder
    folkMedicinalUses?: SortOrderInput | SortOrder
    otherCulturalUses?: SortOrder
    references?: SortOrderInput | SortOrder
    plant?: PlantNomenclatureOrderByWithRelationInput
  }

  export type EthnobotanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    plantId?: number
    AND?: EthnobotanyWhereInput | EthnobotanyWhereInput[]
    OR?: EthnobotanyWhereInput[]
    NOT?: EthnobotanyWhereInput | EthnobotanyWhereInput[]
    folkMedicinalUses?: StringNullableFilter<"Ethnobotany"> | string | null
    otherCulturalUses?: StringNullableListFilter<"Ethnobotany">
    references?: StringNullableFilter<"Ethnobotany"> | string | null
    plant?: XOR<PlantNomenclatureScalarRelationFilter, PlantNomenclatureWhereInput>
  }, "id" | "plantId">

  export type EthnobotanyOrderByWithAggregationInput = {
    id?: SortOrder
    plantId?: SortOrder
    folkMedicinalUses?: SortOrderInput | SortOrder
    otherCulturalUses?: SortOrder
    references?: SortOrderInput | SortOrder
    _count?: EthnobotanyCountOrderByAggregateInput
    _avg?: EthnobotanyAvgOrderByAggregateInput
    _max?: EthnobotanyMaxOrderByAggregateInput
    _min?: EthnobotanyMinOrderByAggregateInput
    _sum?: EthnobotanySumOrderByAggregateInput
  }

  export type EthnobotanyScalarWhereWithAggregatesInput = {
    AND?: EthnobotanyScalarWhereWithAggregatesInput | EthnobotanyScalarWhereWithAggregatesInput[]
    OR?: EthnobotanyScalarWhereWithAggregatesInput[]
    NOT?: EthnobotanyScalarWhereWithAggregatesInput | EthnobotanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ethnobotany"> | number
    plantId?: IntWithAggregatesFilter<"Ethnobotany"> | number
    folkMedicinalUses?: StringNullableWithAggregatesFilter<"Ethnobotany"> | string | null
    otherCulturalUses?: StringNullableListFilter<"Ethnobotany">
    references?: StringNullableWithAggregatesFilter<"Ethnobotany"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantNomenclatureCreateInput = {
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    links?: PlantNomenclatureCreatelinksInput | string[]
    taxonomy: PlantTaxonomyCreateNestedOneWithoutPlantsInput
    botanicalGardenList?: BotanicalGardenCreateNestedManyWithoutPlantsInput
    synonyms?: PlantSynonymCreateNestedManyWithoutPlantInput
    morphologies?: PlantMorphologyCreateNestedManyWithoutPlantsInput
    ecologyDistributions?: PlantEcologyDistributionCreateNestedOneWithoutPlantInput
    conservation?: PlantConservationCreateNestedOneWithoutPlantInput
    herbalDrugs?: HerbalDrugBackgroundCreateNestedManyWithoutPlantInput
    ethnobotanies?: EthnobotanyCreateNestedOneWithoutPlantInput
  }

  export type PlantNomenclatureUncheckedCreateInput = {
    internalId?: number
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    taxonomyId: number
    links?: PlantNomenclatureCreatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUncheckedCreateNestedManyWithoutPlantsInput
    synonyms?: PlantSynonymUncheckedCreateNestedManyWithoutPlantInput
    morphologies?: PlantMorphologyUncheckedCreateNestedManyWithoutPlantsInput
    ecologyDistributions?: PlantEcologyDistributionUncheckedCreateNestedOneWithoutPlantInput
    conservation?: PlantConservationUncheckedCreateNestedOneWithoutPlantInput
    herbalDrugs?: HerbalDrugBackgroundUncheckedCreateNestedManyWithoutPlantInput
    ethnobotanies?: EthnobotanyUncheckedCreateNestedOneWithoutPlantInput
  }

  export type PlantNomenclatureUpdateInput = {
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: PlantNomenclatureUpdatelinksInput | string[]
    taxonomy?: PlantTaxonomyUpdateOneRequiredWithoutPlantsNestedInput
    botanicalGardenList?: BotanicalGardenUpdateManyWithoutPlantsNestedInput
    synonyms?: PlantSynonymUpdateManyWithoutPlantNestedInput
    morphologies?: PlantMorphologyUpdateManyWithoutPlantsNestedInput
    ecologyDistributions?: PlantEcologyDistributionUpdateOneWithoutPlantNestedInput
    conservation?: PlantConservationUpdateOneWithoutPlantNestedInput
    herbalDrugs?: HerbalDrugBackgroundUpdateManyWithoutPlantNestedInput
    ethnobotanies?: EthnobotanyUpdateOneWithoutPlantNestedInput
  }

  export type PlantNomenclatureUncheckedUpdateInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomyId?: IntFieldUpdateOperationsInput | number
    links?: PlantNomenclatureUpdatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUncheckedUpdateManyWithoutPlantsNestedInput
    synonyms?: PlantSynonymUncheckedUpdateManyWithoutPlantNestedInput
    morphologies?: PlantMorphologyUncheckedUpdateManyWithoutPlantsNestedInput
    ecologyDistributions?: PlantEcologyDistributionUncheckedUpdateOneWithoutPlantNestedInput
    conservation?: PlantConservationUncheckedUpdateOneWithoutPlantNestedInput
    herbalDrugs?: HerbalDrugBackgroundUncheckedUpdateManyWithoutPlantNestedInput
    ethnobotanies?: EthnobotanyUncheckedUpdateOneWithoutPlantNestedInput
  }

  export type PlantNomenclatureCreateManyInput = {
    internalId?: number
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    taxonomyId: number
    links?: PlantNomenclatureCreatelinksInput | string[]
  }

  export type PlantNomenclatureUpdateManyMutationInput = {
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: PlantNomenclatureUpdatelinksInput | string[]
  }

  export type PlantNomenclatureUncheckedUpdateManyInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomyId?: IntFieldUpdateOperationsInput | number
    links?: PlantNomenclatureUpdatelinksInput | string[]
  }

  export type PlantTaxonomyCreateInput = {
    class?: string | null
    family: string
    vascular?: boolean | null
    plants?: PlantNomenclatureCreateNestedManyWithoutTaxonomyInput
  }

  export type PlantTaxonomyUncheckedCreateInput = {
    id?: number
    class?: string | null
    family: string
    vascular?: boolean | null
    plants?: PlantNomenclatureUncheckedCreateNestedManyWithoutTaxonomyInput
  }

  export type PlantTaxonomyUpdateInput = {
    class?: NullableStringFieldUpdateOperationsInput | string | null
    family?: StringFieldUpdateOperationsInput | string
    vascular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    plants?: PlantNomenclatureUpdateManyWithoutTaxonomyNestedInput
  }

  export type PlantTaxonomyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    class?: NullableStringFieldUpdateOperationsInput | string | null
    family?: StringFieldUpdateOperationsInput | string
    vascular?: NullableBoolFieldUpdateOperationsInput | boolean | null
    plants?: PlantNomenclatureUncheckedUpdateManyWithoutTaxonomyNestedInput
  }

  export type PlantTaxonomyCreateManyInput = {
    id?: number
    class?: string | null
    family: string
    vascular?: boolean | null
  }

  export type PlantTaxonomyUpdateManyMutationInput = {
    class?: NullableStringFieldUpdateOperationsInput | string | null
    family?: StringFieldUpdateOperationsInput | string
    vascular?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PlantTaxonomyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    class?: NullableStringFieldUpdateOperationsInput | string | null
    family?: StringFieldUpdateOperationsInput | string
    vascular?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PlantSynonymCreateInput = {
    name?: string | null
    plant: PlantNomenclatureCreateNestedOneWithoutSynonymsInput
  }

  export type PlantSynonymUncheckedCreateInput = {
    id?: number
    plantId: number
    name?: string | null
  }

  export type PlantSynonymUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: PlantNomenclatureUpdateOneRequiredWithoutSynonymsNestedInput
  }

  export type PlantSynonymUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    plantId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantSynonymCreateManyInput = {
    id?: number
    plantId: number
    name?: string | null
  }

  export type PlantSynonymUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantSynonymUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    plantId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantMorphologyCreateInput = {
    lifecycle?: PlantMorphologyCreatelifecycleInput | $Enums.Lifecycle[]
    isTerrestrial?: boolean | null
    growthHabit?: string | null
    isDeciduous?: boolean | null
    isDeciduousNote?: string | null
    reproductiveSystem?: string | null
    floweringPeriod?: PlantMorphologyCreatefloweringPeriodInput | $Enums.Month[]
    fruitingPeriod?: PlantMorphologyCreatefruitingPeriodInput | $Enums.Month[]
    floweringPeriodNote?: string | null
    fruitingPeriodNote?: string | null
    plants?: PlantNomenclatureCreateNestedManyWithoutMorphologiesInput
  }

  export type PlantMorphologyUncheckedCreateInput = {
    id?: number
    lifecycle?: PlantMorphologyCreatelifecycleInput | $Enums.Lifecycle[]
    isTerrestrial?: boolean | null
    growthHabit?: string | null
    isDeciduous?: boolean | null
    isDeciduousNote?: string | null
    reproductiveSystem?: string | null
    floweringPeriod?: PlantMorphologyCreatefloweringPeriodInput | $Enums.Month[]
    fruitingPeriod?: PlantMorphologyCreatefruitingPeriodInput | $Enums.Month[]
    floweringPeriodNote?: string | null
    fruitingPeriodNote?: string | null
    plants?: PlantNomenclatureUncheckedCreateNestedManyWithoutMorphologiesInput
  }

  export type PlantMorphologyUpdateInput = {
    lifecycle?: PlantMorphologyUpdatelifecycleInput | $Enums.Lifecycle[]
    isTerrestrial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    growthHabit?: NullableStringFieldUpdateOperationsInput | string | null
    isDeciduous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeciduousNote?: NullableStringFieldUpdateOperationsInput | string | null
    reproductiveSystem?: NullableStringFieldUpdateOperationsInput | string | null
    floweringPeriod?: PlantMorphologyUpdatefloweringPeriodInput | $Enums.Month[]
    fruitingPeriod?: PlantMorphologyUpdatefruitingPeriodInput | $Enums.Month[]
    floweringPeriodNote?: NullableStringFieldUpdateOperationsInput | string | null
    fruitingPeriodNote?: NullableStringFieldUpdateOperationsInput | string | null
    plants?: PlantNomenclatureUpdateManyWithoutMorphologiesNestedInput
  }

  export type PlantMorphologyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lifecycle?: PlantMorphologyUpdatelifecycleInput | $Enums.Lifecycle[]
    isTerrestrial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    growthHabit?: NullableStringFieldUpdateOperationsInput | string | null
    isDeciduous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeciduousNote?: NullableStringFieldUpdateOperationsInput | string | null
    reproductiveSystem?: NullableStringFieldUpdateOperationsInput | string | null
    floweringPeriod?: PlantMorphologyUpdatefloweringPeriodInput | $Enums.Month[]
    fruitingPeriod?: PlantMorphologyUpdatefruitingPeriodInput | $Enums.Month[]
    floweringPeriodNote?: NullableStringFieldUpdateOperationsInput | string | null
    fruitingPeriodNote?: NullableStringFieldUpdateOperationsInput | string | null
    plants?: PlantNomenclatureUncheckedUpdateManyWithoutMorphologiesNestedInput
  }

  export type PlantMorphologyCreateManyInput = {
    id?: number
    lifecycle?: PlantMorphologyCreatelifecycleInput | $Enums.Lifecycle[]
    isTerrestrial?: boolean | null
    growthHabit?: string | null
    isDeciduous?: boolean | null
    isDeciduousNote?: string | null
    reproductiveSystem?: string | null
    floweringPeriod?: PlantMorphologyCreatefloweringPeriodInput | $Enums.Month[]
    fruitingPeriod?: PlantMorphologyCreatefruitingPeriodInput | $Enums.Month[]
    floweringPeriodNote?: string | null
    fruitingPeriodNote?: string | null
  }

  export type PlantMorphologyUpdateManyMutationInput = {
    lifecycle?: PlantMorphologyUpdatelifecycleInput | $Enums.Lifecycle[]
    isTerrestrial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    growthHabit?: NullableStringFieldUpdateOperationsInput | string | null
    isDeciduous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeciduousNote?: NullableStringFieldUpdateOperationsInput | string | null
    reproductiveSystem?: NullableStringFieldUpdateOperationsInput | string | null
    floweringPeriod?: PlantMorphologyUpdatefloweringPeriodInput | $Enums.Month[]
    fruitingPeriod?: PlantMorphologyUpdatefruitingPeriodInput | $Enums.Month[]
    floweringPeriodNote?: NullableStringFieldUpdateOperationsInput | string | null
    fruitingPeriodNote?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantMorphologyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lifecycle?: PlantMorphologyUpdatelifecycleInput | $Enums.Lifecycle[]
    isTerrestrial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    growthHabit?: NullableStringFieldUpdateOperationsInput | string | null
    isDeciduous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeciduousNote?: NullableStringFieldUpdateOperationsInput | string | null
    reproductiveSystem?: NullableStringFieldUpdateOperationsInput | string | null
    floweringPeriod?: PlantMorphologyUpdatefloweringPeriodInput | $Enums.Month[]
    fruitingPeriod?: PlantMorphologyUpdatefruitingPeriodInput | $Enums.Month[]
    floweringPeriodNote?: NullableStringFieldUpdateOperationsInput | string | null
    fruitingPeriodNote?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantEcologyDistributionCreateInput = {
    habitat?: string | null
    plantOrigin?: string | null
    globalRange?: string | null
    chinaRange?: string | null
    endemic?: string | null
    plant: PlantNomenclatureCreateNestedOneWithoutEcologyDistributionsInput
  }

  export type PlantEcologyDistributionUncheckedCreateInput = {
    id?: number
    habitat?: string | null
    plantOrigin?: string | null
    globalRange?: string | null
    chinaRange?: string | null
    endemic?: string | null
    plantId: number
  }

  export type PlantEcologyDistributionUpdateInput = {
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    plantOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    globalRange?: NullableStringFieldUpdateOperationsInput | string | null
    chinaRange?: NullableStringFieldUpdateOperationsInput | string | null
    endemic?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: PlantNomenclatureUpdateOneRequiredWithoutEcologyDistributionsNestedInput
  }

  export type PlantEcologyDistributionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    plantOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    globalRange?: NullableStringFieldUpdateOperationsInput | string | null
    chinaRange?: NullableStringFieldUpdateOperationsInput | string | null
    endemic?: NullableStringFieldUpdateOperationsInput | string | null
    plantId?: IntFieldUpdateOperationsInput | number
  }

  export type PlantEcologyDistributionCreateManyInput = {
    id?: number
    habitat?: string | null
    plantOrigin?: string | null
    globalRange?: string | null
    chinaRange?: string | null
    endemic?: string | null
    plantId: number
  }

  export type PlantEcologyDistributionUpdateManyMutationInput = {
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    plantOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    globalRange?: NullableStringFieldUpdateOperationsInput | string | null
    chinaRange?: NullableStringFieldUpdateOperationsInput | string | null
    endemic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantEcologyDistributionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    plantOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    globalRange?: NullableStringFieldUpdateOperationsInput | string | null
    chinaRange?: NullableStringFieldUpdateOperationsInput | string | null
    endemic?: NullableStringFieldUpdateOperationsInput | string | null
    plantId?: IntFieldUpdateOperationsInput | number
  }

  export type PlantConservationCreateInput = {
    globalConservationStatus?: $Enums.GlobalConservationStatus | null
    chinaConservationStatus?: string | null
    protectedStatus?: string | null
    invasiveStatus?: $Enums.InvasiveStatus | null
    invasiveRange?: string | null
    plant: PlantNomenclatureCreateNestedOneWithoutConservationInput
  }

  export type PlantConservationUncheckedCreateInput = {
    id?: number
    globalConservationStatus?: $Enums.GlobalConservationStatus | null
    chinaConservationStatus?: string | null
    protectedStatus?: string | null
    invasiveStatus?: $Enums.InvasiveStatus | null
    invasiveRange?: string | null
    plantId: number
  }

  export type PlantConservationUpdateInput = {
    globalConservationStatus?: NullableEnumGlobalConservationStatusFieldUpdateOperationsInput | $Enums.GlobalConservationStatus | null
    chinaConservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    protectedStatus?: NullableStringFieldUpdateOperationsInput | string | null
    invasiveStatus?: NullableEnumInvasiveStatusFieldUpdateOperationsInput | $Enums.InvasiveStatus | null
    invasiveRange?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: PlantNomenclatureUpdateOneRequiredWithoutConservationNestedInput
  }

  export type PlantConservationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    globalConservationStatus?: NullableEnumGlobalConservationStatusFieldUpdateOperationsInput | $Enums.GlobalConservationStatus | null
    chinaConservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    protectedStatus?: NullableStringFieldUpdateOperationsInput | string | null
    invasiveStatus?: NullableEnumInvasiveStatusFieldUpdateOperationsInput | $Enums.InvasiveStatus | null
    invasiveRange?: NullableStringFieldUpdateOperationsInput | string | null
    plantId?: IntFieldUpdateOperationsInput | number
  }

  export type PlantConservationCreateManyInput = {
    id?: number
    globalConservationStatus?: $Enums.GlobalConservationStatus | null
    chinaConservationStatus?: string | null
    protectedStatus?: string | null
    invasiveStatus?: $Enums.InvasiveStatus | null
    invasiveRange?: string | null
    plantId: number
  }

  export type PlantConservationUpdateManyMutationInput = {
    globalConservationStatus?: NullableEnumGlobalConservationStatusFieldUpdateOperationsInput | $Enums.GlobalConservationStatus | null
    chinaConservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    protectedStatus?: NullableStringFieldUpdateOperationsInput | string | null
    invasiveStatus?: NullableEnumInvasiveStatusFieldUpdateOperationsInput | $Enums.InvasiveStatus | null
    invasiveRange?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantConservationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    globalConservationStatus?: NullableEnumGlobalConservationStatusFieldUpdateOperationsInput | $Enums.GlobalConservationStatus | null
    chinaConservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    protectedStatus?: NullableStringFieldUpdateOperationsInput | string | null
    invasiveStatus?: NullableEnumInvasiveStatusFieldUpdateOperationsInput | $Enums.InvasiveStatus | null
    invasiveRange?: NullableStringFieldUpdateOperationsInput | string | null
    plantId?: IntFieldUpdateOperationsInput | number
  }

  export type BotanicalGardenCreateInput = {
    botanicalGardenName: string
    plants?: PlantNomenclatureCreateNestedManyWithoutBotanicalGardenListInput
  }

  export type BotanicalGardenUncheckedCreateInput = {
    id?: number
    botanicalGardenName: string
    plants?: PlantNomenclatureUncheckedCreateNestedManyWithoutBotanicalGardenListInput
  }

  export type BotanicalGardenUpdateInput = {
    botanicalGardenName?: StringFieldUpdateOperationsInput | string
    plants?: PlantNomenclatureUpdateManyWithoutBotanicalGardenListNestedInput
  }

  export type BotanicalGardenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    botanicalGardenName?: StringFieldUpdateOperationsInput | string
    plants?: PlantNomenclatureUncheckedUpdateManyWithoutBotanicalGardenListNestedInput
  }

  export type BotanicalGardenCreateManyInput = {
    id?: number
    botanicalGardenName: string
  }

  export type BotanicalGardenUpdateManyMutationInput = {
    botanicalGardenName?: StringFieldUpdateOperationsInput | string
  }

  export type BotanicalGardenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    botanicalGardenName?: StringFieldUpdateOperationsInput | string
  }

  export type MedicinalPropertiesCreateInput = {
    pharmaceuticalName?: string | null
    herbalDrugPinyin?: string | null
    taste?: MedicinalPropertiesCreatetasteInput | $Enums.Taste[]
    energyFlow?: MedicinalPropertiesCreateenergyFlowInput | $Enums.EnergyFlow[]
    meridians?: MedicinalPropertiesCreatemeridiansInput | $Enums.Meridian[]
    actions?: string | null
    pharmacologicalProperties?: MedicinalPropertiesCreatepharmacologicalPropertiesInput | string[]
    indications?: MedicinalPropertiesCreateindicationsInput | string[]
    toxicity?: string | null
    secondaryMetabolites?: string | null
    herbalDrugs?: HerbalDrugBackgroundCreateNestedManyWithoutMedicinalPropertyInput
  }

  export type MedicinalPropertiesUncheckedCreateInput = {
    id?: number
    pharmaceuticalName?: string | null
    herbalDrugPinyin?: string | null
    taste?: MedicinalPropertiesCreatetasteInput | $Enums.Taste[]
    energyFlow?: MedicinalPropertiesCreateenergyFlowInput | $Enums.EnergyFlow[]
    meridians?: MedicinalPropertiesCreatemeridiansInput | $Enums.Meridian[]
    actions?: string | null
    pharmacologicalProperties?: MedicinalPropertiesCreatepharmacologicalPropertiesInput | string[]
    indications?: MedicinalPropertiesCreateindicationsInput | string[]
    toxicity?: string | null
    secondaryMetabolites?: string | null
    herbalDrugs?: HerbalDrugBackgroundUncheckedCreateNestedManyWithoutMedicinalPropertyInput
  }

  export type MedicinalPropertiesUpdateInput = {
    pharmaceuticalName?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDrugPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    taste?: MedicinalPropertiesUpdatetasteInput | $Enums.Taste[]
    energyFlow?: MedicinalPropertiesUpdateenergyFlowInput | $Enums.EnergyFlow[]
    meridians?: MedicinalPropertiesUpdatemeridiansInput | $Enums.Meridian[]
    actions?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacologicalProperties?: MedicinalPropertiesUpdatepharmacologicalPropertiesInput | string[]
    indications?: MedicinalPropertiesUpdateindicationsInput | string[]
    toxicity?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryMetabolites?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDrugs?: HerbalDrugBackgroundUpdateManyWithoutMedicinalPropertyNestedInput
  }

  export type MedicinalPropertiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pharmaceuticalName?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDrugPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    taste?: MedicinalPropertiesUpdatetasteInput | $Enums.Taste[]
    energyFlow?: MedicinalPropertiesUpdateenergyFlowInput | $Enums.EnergyFlow[]
    meridians?: MedicinalPropertiesUpdatemeridiansInput | $Enums.Meridian[]
    actions?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacologicalProperties?: MedicinalPropertiesUpdatepharmacologicalPropertiesInput | string[]
    indications?: MedicinalPropertiesUpdateindicationsInput | string[]
    toxicity?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryMetabolites?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDrugs?: HerbalDrugBackgroundUncheckedUpdateManyWithoutMedicinalPropertyNestedInput
  }

  export type MedicinalPropertiesCreateManyInput = {
    id?: number
    pharmaceuticalName?: string | null
    herbalDrugPinyin?: string | null
    taste?: MedicinalPropertiesCreatetasteInput | $Enums.Taste[]
    energyFlow?: MedicinalPropertiesCreateenergyFlowInput | $Enums.EnergyFlow[]
    meridians?: MedicinalPropertiesCreatemeridiansInput | $Enums.Meridian[]
    actions?: string | null
    pharmacologicalProperties?: MedicinalPropertiesCreatepharmacologicalPropertiesInput | string[]
    indications?: MedicinalPropertiesCreateindicationsInput | string[]
    toxicity?: string | null
    secondaryMetabolites?: string | null
  }

  export type MedicinalPropertiesUpdateManyMutationInput = {
    pharmaceuticalName?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDrugPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    taste?: MedicinalPropertiesUpdatetasteInput | $Enums.Taste[]
    energyFlow?: MedicinalPropertiesUpdateenergyFlowInput | $Enums.EnergyFlow[]
    meridians?: MedicinalPropertiesUpdatemeridiansInput | $Enums.Meridian[]
    actions?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacologicalProperties?: MedicinalPropertiesUpdatepharmacologicalPropertiesInput | string[]
    indications?: MedicinalPropertiesUpdateindicationsInput | string[]
    toxicity?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryMetabolites?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicinalPropertiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pharmaceuticalName?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDrugPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    taste?: MedicinalPropertiesUpdatetasteInput | $Enums.Taste[]
    energyFlow?: MedicinalPropertiesUpdateenergyFlowInput | $Enums.EnergyFlow[]
    meridians?: MedicinalPropertiesUpdatemeridiansInput | $Enums.Meridian[]
    actions?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacologicalProperties?: MedicinalPropertiesUpdatepharmacologicalPropertiesInput | string[]
    indications?: MedicinalPropertiesUpdateindicationsInput | string[]
    toxicity?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryMetabolites?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HerbalDrugBackgroundCreateInput = {
    herbalDrugPinyin: string
    plantPartUsed?: string | null
    officialStatus?: boolean | null
    harvestingTime?: HerbalDrugBackgroundCreateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: string | null
    primaryProcessing?: string | null
    secondaryProcessing?: string | null
    herbalDruglImage?: string | null
    plant: PlantNomenclatureCreateNestedOneWithoutHerbalDrugsInput
    medicinalProperty: MedicinalPropertiesCreateNestedOneWithoutHerbalDrugsInput
    sourcingBackgrounds?: SourcingBackgroundCreateNestedOneWithoutHerbalDrugInput
  }

  export type HerbalDrugBackgroundUncheckedCreateInput = {
    id?: number
    herbalDrugPinyin: string
    plantPartUsed?: string | null
    officialStatus?: boolean | null
    harvestingTime?: HerbalDrugBackgroundCreateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: string | null
    primaryProcessing?: string | null
    secondaryProcessing?: string | null
    herbalDruglImage?: string | null
    plantScientificName: string
    pharmaceuticalName: string
    sourcingBackgrounds?: SourcingBackgroundUncheckedCreateNestedOneWithoutHerbalDrugInput
  }

  export type HerbalDrugBackgroundUpdateInput = {
    herbalDrugPinyin?: StringFieldUpdateOperationsInput | string
    plantPartUsed?: NullableStringFieldUpdateOperationsInput | string | null
    officialStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    harvestingTime?: HerbalDrugBackgroundUpdateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: NullableStringFieldUpdateOperationsInput | string | null
    primaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDruglImage?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: PlantNomenclatureUpdateOneRequiredWithoutHerbalDrugsNestedInput
    medicinalProperty?: MedicinalPropertiesUpdateOneRequiredWithoutHerbalDrugsNestedInput
    sourcingBackgrounds?: SourcingBackgroundUpdateOneWithoutHerbalDrugNestedInput
  }

  export type HerbalDrugBackgroundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    herbalDrugPinyin?: StringFieldUpdateOperationsInput | string
    plantPartUsed?: NullableStringFieldUpdateOperationsInput | string | null
    officialStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    harvestingTime?: HerbalDrugBackgroundUpdateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: NullableStringFieldUpdateOperationsInput | string | null
    primaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDruglImage?: NullableStringFieldUpdateOperationsInput | string | null
    plantScientificName?: StringFieldUpdateOperationsInput | string
    pharmaceuticalName?: StringFieldUpdateOperationsInput | string
    sourcingBackgrounds?: SourcingBackgroundUncheckedUpdateOneWithoutHerbalDrugNestedInput
  }

  export type HerbalDrugBackgroundCreateManyInput = {
    id?: number
    herbalDrugPinyin: string
    plantPartUsed?: string | null
    officialStatus?: boolean | null
    harvestingTime?: HerbalDrugBackgroundCreateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: string | null
    primaryProcessing?: string | null
    secondaryProcessing?: string | null
    herbalDruglImage?: string | null
    plantScientificName: string
    pharmaceuticalName: string
  }

  export type HerbalDrugBackgroundUpdateManyMutationInput = {
    herbalDrugPinyin?: StringFieldUpdateOperationsInput | string
    plantPartUsed?: NullableStringFieldUpdateOperationsInput | string | null
    officialStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    harvestingTime?: HerbalDrugBackgroundUpdateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: NullableStringFieldUpdateOperationsInput | string | null
    primaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDruglImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HerbalDrugBackgroundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    herbalDrugPinyin?: StringFieldUpdateOperationsInput | string
    plantPartUsed?: NullableStringFieldUpdateOperationsInput | string | null
    officialStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    harvestingTime?: HerbalDrugBackgroundUpdateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: NullableStringFieldUpdateOperationsInput | string | null
    primaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDruglImage?: NullableStringFieldUpdateOperationsInput | string | null
    plantScientificName?: StringFieldUpdateOperationsInput | string
    pharmaceuticalName?: StringFieldUpdateOperationsInput | string
  }

  export type SourcingBackgroundCreateInput = {
    cultivationStatus?: boolean | null
    cultivationRegions?: string | null
    wildHarvestingRegions?: string | null
    harvestingPractice?: SourcingBackgroundCreateharvestingPracticeInput | $Enums.HarvestingPractice[]
    harvestingPracticeNote?: string | null
    daodiStatus?: boolean | null
    daodiRegions?: string | null
    productionRegions?: string | null
    herbalDrug: HerbalDrugBackgroundCreateNestedOneWithoutSourcingBackgroundsInput
  }

  export type SourcingBackgroundUncheckedCreateInput = {
    id?: number
    herbalDrugId: number
    cultivationStatus?: boolean | null
    cultivationRegions?: string | null
    wildHarvestingRegions?: string | null
    harvestingPractice?: SourcingBackgroundCreateharvestingPracticeInput | $Enums.HarvestingPractice[]
    harvestingPracticeNote?: string | null
    daodiStatus?: boolean | null
    daodiRegions?: string | null
    productionRegions?: string | null
  }

  export type SourcingBackgroundUpdateInput = {
    cultivationStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cultivationRegions?: NullableStringFieldUpdateOperationsInput | string | null
    wildHarvestingRegions?: NullableStringFieldUpdateOperationsInput | string | null
    harvestingPractice?: SourcingBackgroundUpdateharvestingPracticeInput | $Enums.HarvestingPractice[]
    harvestingPracticeNote?: NullableStringFieldUpdateOperationsInput | string | null
    daodiStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daodiRegions?: NullableStringFieldUpdateOperationsInput | string | null
    productionRegions?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDrug?: HerbalDrugBackgroundUpdateOneRequiredWithoutSourcingBackgroundsNestedInput
  }

  export type SourcingBackgroundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    herbalDrugId?: IntFieldUpdateOperationsInput | number
    cultivationStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cultivationRegions?: NullableStringFieldUpdateOperationsInput | string | null
    wildHarvestingRegions?: NullableStringFieldUpdateOperationsInput | string | null
    harvestingPractice?: SourcingBackgroundUpdateharvestingPracticeInput | $Enums.HarvestingPractice[]
    harvestingPracticeNote?: NullableStringFieldUpdateOperationsInput | string | null
    daodiStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daodiRegions?: NullableStringFieldUpdateOperationsInput | string | null
    productionRegions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SourcingBackgroundCreateManyInput = {
    id?: number
    herbalDrugId: number
    cultivationStatus?: boolean | null
    cultivationRegions?: string | null
    wildHarvestingRegions?: string | null
    harvestingPractice?: SourcingBackgroundCreateharvestingPracticeInput | $Enums.HarvestingPractice[]
    harvestingPracticeNote?: string | null
    daodiStatus?: boolean | null
    daodiRegions?: string | null
    productionRegions?: string | null
  }

  export type SourcingBackgroundUpdateManyMutationInput = {
    cultivationStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cultivationRegions?: NullableStringFieldUpdateOperationsInput | string | null
    wildHarvestingRegions?: NullableStringFieldUpdateOperationsInput | string | null
    harvestingPractice?: SourcingBackgroundUpdateharvestingPracticeInput | $Enums.HarvestingPractice[]
    harvestingPracticeNote?: NullableStringFieldUpdateOperationsInput | string | null
    daodiStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daodiRegions?: NullableStringFieldUpdateOperationsInput | string | null
    productionRegions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SourcingBackgroundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    herbalDrugId?: IntFieldUpdateOperationsInput | number
    cultivationStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cultivationRegions?: NullableStringFieldUpdateOperationsInput | string | null
    wildHarvestingRegions?: NullableStringFieldUpdateOperationsInput | string | null
    harvestingPractice?: SourcingBackgroundUpdateharvestingPracticeInput | $Enums.HarvestingPractice[]
    harvestingPracticeNote?: NullableStringFieldUpdateOperationsInput | string | null
    daodiStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daodiRegions?: NullableStringFieldUpdateOperationsInput | string | null
    productionRegions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EthnobotanyCreateInput = {
    folkMedicinalUses?: string | null
    otherCulturalUses?: EthnobotanyCreateotherCulturalUsesInput | string[]
    references?: string | null
    plant: PlantNomenclatureCreateNestedOneWithoutEthnobotaniesInput
  }

  export type EthnobotanyUncheckedCreateInput = {
    id?: number
    plantId: number
    folkMedicinalUses?: string | null
    otherCulturalUses?: EthnobotanyCreateotherCulturalUsesInput | string[]
    references?: string | null
  }

  export type EthnobotanyUpdateInput = {
    folkMedicinalUses?: NullableStringFieldUpdateOperationsInput | string | null
    otherCulturalUses?: EthnobotanyUpdateotherCulturalUsesInput | string[]
    references?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: PlantNomenclatureUpdateOneRequiredWithoutEthnobotaniesNestedInput
  }

  export type EthnobotanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    plantId?: IntFieldUpdateOperationsInput | number
    folkMedicinalUses?: NullableStringFieldUpdateOperationsInput | string | null
    otherCulturalUses?: EthnobotanyUpdateotherCulturalUsesInput | string[]
    references?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EthnobotanyCreateManyInput = {
    id?: number
    plantId: number
    folkMedicinalUses?: string | null
    otherCulturalUses?: EthnobotanyCreateotherCulturalUsesInput | string[]
    references?: string | null
  }

  export type EthnobotanyUpdateManyMutationInput = {
    folkMedicinalUses?: NullableStringFieldUpdateOperationsInput | string | null
    otherCulturalUses?: EthnobotanyUpdateotherCulturalUsesInput | string[]
    references?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EthnobotanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    plantId?: IntFieldUpdateOperationsInput | number
    folkMedicinalUses?: NullableStringFieldUpdateOperationsInput | string | null
    otherCulturalUses?: EthnobotanyUpdateotherCulturalUsesInput | string[]
    references?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PlantTaxonomyScalarRelationFilter = {
    is?: PlantTaxonomyWhereInput
    isNot?: PlantTaxonomyWhereInput
  }

  export type BotanicalGardenListRelationFilter = {
    every?: BotanicalGardenWhereInput
    some?: BotanicalGardenWhereInput
    none?: BotanicalGardenWhereInput
  }

  export type PlantSynonymListRelationFilter = {
    every?: PlantSynonymWhereInput
    some?: PlantSynonymWhereInput
    none?: PlantSynonymWhereInput
  }

  export type PlantMorphologyListRelationFilter = {
    every?: PlantMorphologyWhereInput
    some?: PlantMorphologyWhereInput
    none?: PlantMorphologyWhereInput
  }

  export type PlantEcologyDistributionNullableScalarRelationFilter = {
    is?: PlantEcologyDistributionWhereInput | null
    isNot?: PlantEcologyDistributionWhereInput | null
  }

  export type PlantConservationNullableScalarRelationFilter = {
    is?: PlantConservationWhereInput | null
    isNot?: PlantConservationWhereInput | null
  }

  export type HerbalDrugBackgroundListRelationFilter = {
    every?: HerbalDrugBackgroundWhereInput
    some?: HerbalDrugBackgroundWhereInput
    none?: HerbalDrugBackgroundWhereInput
  }

  export type EthnobotanyNullableScalarRelationFilter = {
    is?: EthnobotanyWhereInput | null
    isNot?: EthnobotanyWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BotanicalGardenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlantSynonymOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlantMorphologyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HerbalDrugBackgroundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlantNomenclatureCountOrderByAggregateInput = {
    internalId?: SortOrder
    plantScientificName?: SortOrder
    plantCommonName?: SortOrder
    plantPinyin?: SortOrder
    plantChineseName?: SortOrder
    taxonomyId?: SortOrder
    links?: SortOrder
  }

  export type PlantNomenclatureAvgOrderByAggregateInput = {
    internalId?: SortOrder
    taxonomyId?: SortOrder
  }

  export type PlantNomenclatureMaxOrderByAggregateInput = {
    internalId?: SortOrder
    plantScientificName?: SortOrder
    plantPinyin?: SortOrder
    plantChineseName?: SortOrder
    taxonomyId?: SortOrder
  }

  export type PlantNomenclatureMinOrderByAggregateInput = {
    internalId?: SortOrder
    plantScientificName?: SortOrder
    plantPinyin?: SortOrder
    plantChineseName?: SortOrder
    taxonomyId?: SortOrder
  }

  export type PlantNomenclatureSumOrderByAggregateInput = {
    internalId?: SortOrder
    taxonomyId?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type PlantNomenclatureListRelationFilter = {
    every?: PlantNomenclatureWhereInput
    some?: PlantNomenclatureWhereInput
    none?: PlantNomenclatureWhereInput
  }

  export type PlantNomenclatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlantTaxonomyCountOrderByAggregateInput = {
    id?: SortOrder
    class?: SortOrder
    family?: SortOrder
    vascular?: SortOrder
  }

  export type PlantTaxonomyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlantTaxonomyMaxOrderByAggregateInput = {
    id?: SortOrder
    class?: SortOrder
    family?: SortOrder
    vascular?: SortOrder
  }

  export type PlantTaxonomyMinOrderByAggregateInput = {
    id?: SortOrder
    class?: SortOrder
    family?: SortOrder
    vascular?: SortOrder
  }

  export type PlantTaxonomySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PlantNomenclatureScalarRelationFilter = {
    is?: PlantNomenclatureWhereInput
    isNot?: PlantNomenclatureWhereInput
  }

  export type PlantSynonymCountOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
    name?: SortOrder
  }

  export type PlantSynonymAvgOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
  }

  export type PlantSynonymMaxOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
    name?: SortOrder
  }

  export type PlantSynonymMinOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
    name?: SortOrder
  }

  export type PlantSynonymSumOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
  }

  export type EnumLifecycleNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Lifecycle[] | ListEnumLifecycleFieldRefInput<$PrismaModel> | null
    has?: $Enums.Lifecycle | EnumLifecycleFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Lifecycle[] | ListEnumLifecycleFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Lifecycle[] | ListEnumLifecycleFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumMonthNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Month[] | ListEnumMonthFieldRefInput<$PrismaModel> | null
    has?: $Enums.Month | EnumMonthFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Month[] | ListEnumMonthFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Month[] | ListEnumMonthFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PlantMorphologyCountOrderByAggregateInput = {
    id?: SortOrder
    lifecycle?: SortOrder
    isTerrestrial?: SortOrder
    growthHabit?: SortOrder
    isDeciduous?: SortOrder
    isDeciduousNote?: SortOrder
    reproductiveSystem?: SortOrder
    floweringPeriod?: SortOrder
    fruitingPeriod?: SortOrder
    floweringPeriodNote?: SortOrder
    fruitingPeriodNote?: SortOrder
  }

  export type PlantMorphologyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlantMorphologyMaxOrderByAggregateInput = {
    id?: SortOrder
    isTerrestrial?: SortOrder
    growthHabit?: SortOrder
    isDeciduous?: SortOrder
    isDeciduousNote?: SortOrder
    reproductiveSystem?: SortOrder
    floweringPeriodNote?: SortOrder
    fruitingPeriodNote?: SortOrder
  }

  export type PlantMorphologyMinOrderByAggregateInput = {
    id?: SortOrder
    isTerrestrial?: SortOrder
    growthHabit?: SortOrder
    isDeciduous?: SortOrder
    isDeciduousNote?: SortOrder
    reproductiveSystem?: SortOrder
    floweringPeriodNote?: SortOrder
    fruitingPeriodNote?: SortOrder
  }

  export type PlantMorphologySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlantEcologyDistributionCountOrderByAggregateInput = {
    id?: SortOrder
    habitat?: SortOrder
    plantOrigin?: SortOrder
    globalRange?: SortOrder
    chinaRange?: SortOrder
    endemic?: SortOrder
    plantId?: SortOrder
  }

  export type PlantEcologyDistributionAvgOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
  }

  export type PlantEcologyDistributionMaxOrderByAggregateInput = {
    id?: SortOrder
    habitat?: SortOrder
    plantOrigin?: SortOrder
    globalRange?: SortOrder
    chinaRange?: SortOrder
    endemic?: SortOrder
    plantId?: SortOrder
  }

  export type PlantEcologyDistributionMinOrderByAggregateInput = {
    id?: SortOrder
    habitat?: SortOrder
    plantOrigin?: SortOrder
    globalRange?: SortOrder
    chinaRange?: SortOrder
    endemic?: SortOrder
    plantId?: SortOrder
  }

  export type PlantEcologyDistributionSumOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
  }

  export type EnumGlobalConservationStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalConservationStatus | EnumGlobalConservationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.GlobalConservationStatus[] | ListEnumGlobalConservationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GlobalConservationStatus[] | ListEnumGlobalConservationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGlobalConservationStatusNullableFilter<$PrismaModel> | $Enums.GlobalConservationStatus | null
  }

  export type EnumInvasiveStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.InvasiveStatus | EnumInvasiveStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.InvasiveStatus[] | ListEnumInvasiveStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InvasiveStatus[] | ListEnumInvasiveStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInvasiveStatusNullableFilter<$PrismaModel> | $Enums.InvasiveStatus | null
  }

  export type PlantConservationCountOrderByAggregateInput = {
    id?: SortOrder
    globalConservationStatus?: SortOrder
    chinaConservationStatus?: SortOrder
    protectedStatus?: SortOrder
    invasiveStatus?: SortOrder
    invasiveRange?: SortOrder
    plantId?: SortOrder
  }

  export type PlantConservationAvgOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
  }

  export type PlantConservationMaxOrderByAggregateInput = {
    id?: SortOrder
    globalConservationStatus?: SortOrder
    chinaConservationStatus?: SortOrder
    protectedStatus?: SortOrder
    invasiveStatus?: SortOrder
    invasiveRange?: SortOrder
    plantId?: SortOrder
  }

  export type PlantConservationMinOrderByAggregateInput = {
    id?: SortOrder
    globalConservationStatus?: SortOrder
    chinaConservationStatus?: SortOrder
    protectedStatus?: SortOrder
    invasiveStatus?: SortOrder
    invasiveRange?: SortOrder
    plantId?: SortOrder
  }

  export type PlantConservationSumOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
  }

  export type EnumGlobalConservationStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalConservationStatus | EnumGlobalConservationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.GlobalConservationStatus[] | ListEnumGlobalConservationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GlobalConservationStatus[] | ListEnumGlobalConservationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGlobalConservationStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.GlobalConservationStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGlobalConservationStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumGlobalConservationStatusNullableFilter<$PrismaModel>
  }

  export type EnumInvasiveStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvasiveStatus | EnumInvasiveStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.InvasiveStatus[] | ListEnumInvasiveStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InvasiveStatus[] | ListEnumInvasiveStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInvasiveStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.InvasiveStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumInvasiveStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumInvasiveStatusNullableFilter<$PrismaModel>
  }

  export type BotanicalGardenCountOrderByAggregateInput = {
    id?: SortOrder
    botanicalGardenName?: SortOrder
  }

  export type BotanicalGardenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BotanicalGardenMaxOrderByAggregateInput = {
    id?: SortOrder
    botanicalGardenName?: SortOrder
  }

  export type BotanicalGardenMinOrderByAggregateInput = {
    id?: SortOrder
    botanicalGardenName?: SortOrder
  }

  export type BotanicalGardenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTasteNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Taste[] | ListEnumTasteFieldRefInput<$PrismaModel> | null
    has?: $Enums.Taste | EnumTasteFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Taste[] | ListEnumTasteFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Taste[] | ListEnumTasteFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumEnergyFlowNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.EnergyFlow[] | ListEnumEnergyFlowFieldRefInput<$PrismaModel> | null
    has?: $Enums.EnergyFlow | EnumEnergyFlowFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.EnergyFlow[] | ListEnumEnergyFlowFieldRefInput<$PrismaModel>
    hasSome?: $Enums.EnergyFlow[] | ListEnumEnergyFlowFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumMeridianNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Meridian[] | ListEnumMeridianFieldRefInput<$PrismaModel> | null
    has?: $Enums.Meridian | EnumMeridianFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Meridian[] | ListEnumMeridianFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Meridian[] | ListEnumMeridianFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MedicinalPropertiesCountOrderByAggregateInput = {
    id?: SortOrder
    pharmaceuticalName?: SortOrder
    herbalDrugPinyin?: SortOrder
    taste?: SortOrder
    energyFlow?: SortOrder
    meridians?: SortOrder
    actions?: SortOrder
    pharmacologicalProperties?: SortOrder
    indications?: SortOrder
    toxicity?: SortOrder
    secondaryMetabolites?: SortOrder
  }

  export type MedicinalPropertiesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MedicinalPropertiesMaxOrderByAggregateInput = {
    id?: SortOrder
    pharmaceuticalName?: SortOrder
    herbalDrugPinyin?: SortOrder
    actions?: SortOrder
    toxicity?: SortOrder
    secondaryMetabolites?: SortOrder
  }

  export type MedicinalPropertiesMinOrderByAggregateInput = {
    id?: SortOrder
    pharmaceuticalName?: SortOrder
    herbalDrugPinyin?: SortOrder
    actions?: SortOrder
    toxicity?: SortOrder
    secondaryMetabolites?: SortOrder
  }

  export type MedicinalPropertiesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MedicinalPropertiesScalarRelationFilter = {
    is?: MedicinalPropertiesWhereInput
    isNot?: MedicinalPropertiesWhereInput
  }

  export type SourcingBackgroundNullableScalarRelationFilter = {
    is?: SourcingBackgroundWhereInput | null
    isNot?: SourcingBackgroundWhereInput | null
  }

  export type HerbalDrugBackgroundPlantScientificNamePharmaceuticalNameCompoundUniqueInput = {
    plantScientificName: string
    pharmaceuticalName: string
  }

  export type HerbalDrugBackgroundCountOrderByAggregateInput = {
    id?: SortOrder
    herbalDrugPinyin?: SortOrder
    plantPartUsed?: SortOrder
    officialStatus?: SortOrder
    harvestingTime?: SortOrder
    harvestingTimeNote?: SortOrder
    primaryProcessing?: SortOrder
    secondaryProcessing?: SortOrder
    herbalDruglImage?: SortOrder
    plantScientificName?: SortOrder
    pharmaceuticalName?: SortOrder
  }

  export type HerbalDrugBackgroundAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HerbalDrugBackgroundMaxOrderByAggregateInput = {
    id?: SortOrder
    herbalDrugPinyin?: SortOrder
    plantPartUsed?: SortOrder
    officialStatus?: SortOrder
    harvestingTimeNote?: SortOrder
    primaryProcessing?: SortOrder
    secondaryProcessing?: SortOrder
    herbalDruglImage?: SortOrder
    plantScientificName?: SortOrder
    pharmaceuticalName?: SortOrder
  }

  export type HerbalDrugBackgroundMinOrderByAggregateInput = {
    id?: SortOrder
    herbalDrugPinyin?: SortOrder
    plantPartUsed?: SortOrder
    officialStatus?: SortOrder
    harvestingTimeNote?: SortOrder
    primaryProcessing?: SortOrder
    secondaryProcessing?: SortOrder
    herbalDruglImage?: SortOrder
    plantScientificName?: SortOrder
    pharmaceuticalName?: SortOrder
  }

  export type HerbalDrugBackgroundSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumHarvestingPracticeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.HarvestingPractice[] | ListEnumHarvestingPracticeFieldRefInput<$PrismaModel> | null
    has?: $Enums.HarvestingPractice | EnumHarvestingPracticeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.HarvestingPractice[] | ListEnumHarvestingPracticeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.HarvestingPractice[] | ListEnumHarvestingPracticeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type HerbalDrugBackgroundScalarRelationFilter = {
    is?: HerbalDrugBackgroundWhereInput
    isNot?: HerbalDrugBackgroundWhereInput
  }

  export type SourcingBackgroundCountOrderByAggregateInput = {
    id?: SortOrder
    herbalDrugId?: SortOrder
    cultivationStatus?: SortOrder
    cultivationRegions?: SortOrder
    wildHarvestingRegions?: SortOrder
    harvestingPractice?: SortOrder
    harvestingPracticeNote?: SortOrder
    daodiStatus?: SortOrder
    daodiRegions?: SortOrder
    productionRegions?: SortOrder
  }

  export type SourcingBackgroundAvgOrderByAggregateInput = {
    id?: SortOrder
    herbalDrugId?: SortOrder
  }

  export type SourcingBackgroundMaxOrderByAggregateInput = {
    id?: SortOrder
    herbalDrugId?: SortOrder
    cultivationStatus?: SortOrder
    cultivationRegions?: SortOrder
    wildHarvestingRegions?: SortOrder
    harvestingPracticeNote?: SortOrder
    daodiStatus?: SortOrder
    daodiRegions?: SortOrder
    productionRegions?: SortOrder
  }

  export type SourcingBackgroundMinOrderByAggregateInput = {
    id?: SortOrder
    herbalDrugId?: SortOrder
    cultivationStatus?: SortOrder
    cultivationRegions?: SortOrder
    wildHarvestingRegions?: SortOrder
    harvestingPracticeNote?: SortOrder
    daodiStatus?: SortOrder
    daodiRegions?: SortOrder
    productionRegions?: SortOrder
  }

  export type SourcingBackgroundSumOrderByAggregateInput = {
    id?: SortOrder
    herbalDrugId?: SortOrder
  }

  export type EthnobotanyCountOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
    folkMedicinalUses?: SortOrder
    otherCulturalUses?: SortOrder
    references?: SortOrder
  }

  export type EthnobotanyAvgOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
  }

  export type EthnobotanyMaxOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
    folkMedicinalUses?: SortOrder
    references?: SortOrder
  }

  export type EthnobotanyMinOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
    folkMedicinalUses?: SortOrder
    references?: SortOrder
  }

  export type EthnobotanySumOrderByAggregateInput = {
    id?: SortOrder
    plantId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlantNomenclatureCreateplantCommonNameInput = {
    set: string[]
  }

  export type PlantNomenclatureCreatelinksInput = {
    set: string[]
  }

  export type PlantTaxonomyCreateNestedOneWithoutPlantsInput = {
    create?: XOR<PlantTaxonomyCreateWithoutPlantsInput, PlantTaxonomyUncheckedCreateWithoutPlantsInput>
    connectOrCreate?: PlantTaxonomyCreateOrConnectWithoutPlantsInput
    connect?: PlantTaxonomyWhereUniqueInput
  }

  export type BotanicalGardenCreateNestedManyWithoutPlantsInput = {
    create?: XOR<BotanicalGardenCreateWithoutPlantsInput, BotanicalGardenUncheckedCreateWithoutPlantsInput> | BotanicalGardenCreateWithoutPlantsInput[] | BotanicalGardenUncheckedCreateWithoutPlantsInput[]
    connectOrCreate?: BotanicalGardenCreateOrConnectWithoutPlantsInput | BotanicalGardenCreateOrConnectWithoutPlantsInput[]
    connect?: BotanicalGardenWhereUniqueInput | BotanicalGardenWhereUniqueInput[]
  }

  export type PlantSynonymCreateNestedManyWithoutPlantInput = {
    create?: XOR<PlantSynonymCreateWithoutPlantInput, PlantSynonymUncheckedCreateWithoutPlantInput> | PlantSynonymCreateWithoutPlantInput[] | PlantSynonymUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: PlantSynonymCreateOrConnectWithoutPlantInput | PlantSynonymCreateOrConnectWithoutPlantInput[]
    createMany?: PlantSynonymCreateManyPlantInputEnvelope
    connect?: PlantSynonymWhereUniqueInput | PlantSynonymWhereUniqueInput[]
  }

  export type PlantMorphologyCreateNestedManyWithoutPlantsInput = {
    create?: XOR<PlantMorphologyCreateWithoutPlantsInput, PlantMorphologyUncheckedCreateWithoutPlantsInput> | PlantMorphologyCreateWithoutPlantsInput[] | PlantMorphologyUncheckedCreateWithoutPlantsInput[]
    connectOrCreate?: PlantMorphologyCreateOrConnectWithoutPlantsInput | PlantMorphologyCreateOrConnectWithoutPlantsInput[]
    connect?: PlantMorphologyWhereUniqueInput | PlantMorphologyWhereUniqueInput[]
  }

  export type PlantEcologyDistributionCreateNestedOneWithoutPlantInput = {
    create?: XOR<PlantEcologyDistributionCreateWithoutPlantInput, PlantEcologyDistributionUncheckedCreateWithoutPlantInput>
    connectOrCreate?: PlantEcologyDistributionCreateOrConnectWithoutPlantInput
    connect?: PlantEcologyDistributionWhereUniqueInput
  }

  export type PlantConservationCreateNestedOneWithoutPlantInput = {
    create?: XOR<PlantConservationCreateWithoutPlantInput, PlantConservationUncheckedCreateWithoutPlantInput>
    connectOrCreate?: PlantConservationCreateOrConnectWithoutPlantInput
    connect?: PlantConservationWhereUniqueInput
  }

  export type HerbalDrugBackgroundCreateNestedManyWithoutPlantInput = {
    create?: XOR<HerbalDrugBackgroundCreateWithoutPlantInput, HerbalDrugBackgroundUncheckedCreateWithoutPlantInput> | HerbalDrugBackgroundCreateWithoutPlantInput[] | HerbalDrugBackgroundUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: HerbalDrugBackgroundCreateOrConnectWithoutPlantInput | HerbalDrugBackgroundCreateOrConnectWithoutPlantInput[]
    createMany?: HerbalDrugBackgroundCreateManyPlantInputEnvelope
    connect?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
  }

  export type EthnobotanyCreateNestedOneWithoutPlantInput = {
    create?: XOR<EthnobotanyCreateWithoutPlantInput, EthnobotanyUncheckedCreateWithoutPlantInput>
    connectOrCreate?: EthnobotanyCreateOrConnectWithoutPlantInput
    connect?: EthnobotanyWhereUniqueInput
  }

  export type BotanicalGardenUncheckedCreateNestedManyWithoutPlantsInput = {
    create?: XOR<BotanicalGardenCreateWithoutPlantsInput, BotanicalGardenUncheckedCreateWithoutPlantsInput> | BotanicalGardenCreateWithoutPlantsInput[] | BotanicalGardenUncheckedCreateWithoutPlantsInput[]
    connectOrCreate?: BotanicalGardenCreateOrConnectWithoutPlantsInput | BotanicalGardenCreateOrConnectWithoutPlantsInput[]
    connect?: BotanicalGardenWhereUniqueInput | BotanicalGardenWhereUniqueInput[]
  }

  export type PlantSynonymUncheckedCreateNestedManyWithoutPlantInput = {
    create?: XOR<PlantSynonymCreateWithoutPlantInput, PlantSynonymUncheckedCreateWithoutPlantInput> | PlantSynonymCreateWithoutPlantInput[] | PlantSynonymUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: PlantSynonymCreateOrConnectWithoutPlantInput | PlantSynonymCreateOrConnectWithoutPlantInput[]
    createMany?: PlantSynonymCreateManyPlantInputEnvelope
    connect?: PlantSynonymWhereUniqueInput | PlantSynonymWhereUniqueInput[]
  }

  export type PlantMorphologyUncheckedCreateNestedManyWithoutPlantsInput = {
    create?: XOR<PlantMorphologyCreateWithoutPlantsInput, PlantMorphologyUncheckedCreateWithoutPlantsInput> | PlantMorphologyCreateWithoutPlantsInput[] | PlantMorphologyUncheckedCreateWithoutPlantsInput[]
    connectOrCreate?: PlantMorphologyCreateOrConnectWithoutPlantsInput | PlantMorphologyCreateOrConnectWithoutPlantsInput[]
    connect?: PlantMorphologyWhereUniqueInput | PlantMorphologyWhereUniqueInput[]
  }

  export type PlantEcologyDistributionUncheckedCreateNestedOneWithoutPlantInput = {
    create?: XOR<PlantEcologyDistributionCreateWithoutPlantInput, PlantEcologyDistributionUncheckedCreateWithoutPlantInput>
    connectOrCreate?: PlantEcologyDistributionCreateOrConnectWithoutPlantInput
    connect?: PlantEcologyDistributionWhereUniqueInput
  }

  export type PlantConservationUncheckedCreateNestedOneWithoutPlantInput = {
    create?: XOR<PlantConservationCreateWithoutPlantInput, PlantConservationUncheckedCreateWithoutPlantInput>
    connectOrCreate?: PlantConservationCreateOrConnectWithoutPlantInput
    connect?: PlantConservationWhereUniqueInput
  }

  export type HerbalDrugBackgroundUncheckedCreateNestedManyWithoutPlantInput = {
    create?: XOR<HerbalDrugBackgroundCreateWithoutPlantInput, HerbalDrugBackgroundUncheckedCreateWithoutPlantInput> | HerbalDrugBackgroundCreateWithoutPlantInput[] | HerbalDrugBackgroundUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: HerbalDrugBackgroundCreateOrConnectWithoutPlantInput | HerbalDrugBackgroundCreateOrConnectWithoutPlantInput[]
    createMany?: HerbalDrugBackgroundCreateManyPlantInputEnvelope
    connect?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
  }

  export type EthnobotanyUncheckedCreateNestedOneWithoutPlantInput = {
    create?: XOR<EthnobotanyCreateWithoutPlantInput, EthnobotanyUncheckedCreateWithoutPlantInput>
    connectOrCreate?: EthnobotanyCreateOrConnectWithoutPlantInput
    connect?: EthnobotanyWhereUniqueInput
  }

  export type PlantNomenclatureUpdateplantCommonNameInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PlantNomenclatureUpdatelinksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PlantTaxonomyUpdateOneRequiredWithoutPlantsNestedInput = {
    create?: XOR<PlantTaxonomyCreateWithoutPlantsInput, PlantTaxonomyUncheckedCreateWithoutPlantsInput>
    connectOrCreate?: PlantTaxonomyCreateOrConnectWithoutPlantsInput
    upsert?: PlantTaxonomyUpsertWithoutPlantsInput
    connect?: PlantTaxonomyWhereUniqueInput
    update?: XOR<XOR<PlantTaxonomyUpdateToOneWithWhereWithoutPlantsInput, PlantTaxonomyUpdateWithoutPlantsInput>, PlantTaxonomyUncheckedUpdateWithoutPlantsInput>
  }

  export type BotanicalGardenUpdateManyWithoutPlantsNestedInput = {
    create?: XOR<BotanicalGardenCreateWithoutPlantsInput, BotanicalGardenUncheckedCreateWithoutPlantsInput> | BotanicalGardenCreateWithoutPlantsInput[] | BotanicalGardenUncheckedCreateWithoutPlantsInput[]
    connectOrCreate?: BotanicalGardenCreateOrConnectWithoutPlantsInput | BotanicalGardenCreateOrConnectWithoutPlantsInput[]
    upsert?: BotanicalGardenUpsertWithWhereUniqueWithoutPlantsInput | BotanicalGardenUpsertWithWhereUniqueWithoutPlantsInput[]
    set?: BotanicalGardenWhereUniqueInput | BotanicalGardenWhereUniqueInput[]
    disconnect?: BotanicalGardenWhereUniqueInput | BotanicalGardenWhereUniqueInput[]
    delete?: BotanicalGardenWhereUniqueInput | BotanicalGardenWhereUniqueInput[]
    connect?: BotanicalGardenWhereUniqueInput | BotanicalGardenWhereUniqueInput[]
    update?: BotanicalGardenUpdateWithWhereUniqueWithoutPlantsInput | BotanicalGardenUpdateWithWhereUniqueWithoutPlantsInput[]
    updateMany?: BotanicalGardenUpdateManyWithWhereWithoutPlantsInput | BotanicalGardenUpdateManyWithWhereWithoutPlantsInput[]
    deleteMany?: BotanicalGardenScalarWhereInput | BotanicalGardenScalarWhereInput[]
  }

  export type PlantSynonymUpdateManyWithoutPlantNestedInput = {
    create?: XOR<PlantSynonymCreateWithoutPlantInput, PlantSynonymUncheckedCreateWithoutPlantInput> | PlantSynonymCreateWithoutPlantInput[] | PlantSynonymUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: PlantSynonymCreateOrConnectWithoutPlantInput | PlantSynonymCreateOrConnectWithoutPlantInput[]
    upsert?: PlantSynonymUpsertWithWhereUniqueWithoutPlantInput | PlantSynonymUpsertWithWhereUniqueWithoutPlantInput[]
    createMany?: PlantSynonymCreateManyPlantInputEnvelope
    set?: PlantSynonymWhereUniqueInput | PlantSynonymWhereUniqueInput[]
    disconnect?: PlantSynonymWhereUniqueInput | PlantSynonymWhereUniqueInput[]
    delete?: PlantSynonymWhereUniqueInput | PlantSynonymWhereUniqueInput[]
    connect?: PlantSynonymWhereUniqueInput | PlantSynonymWhereUniqueInput[]
    update?: PlantSynonymUpdateWithWhereUniqueWithoutPlantInput | PlantSynonymUpdateWithWhereUniqueWithoutPlantInput[]
    updateMany?: PlantSynonymUpdateManyWithWhereWithoutPlantInput | PlantSynonymUpdateManyWithWhereWithoutPlantInput[]
    deleteMany?: PlantSynonymScalarWhereInput | PlantSynonymScalarWhereInput[]
  }

  export type PlantMorphologyUpdateManyWithoutPlantsNestedInput = {
    create?: XOR<PlantMorphologyCreateWithoutPlantsInput, PlantMorphologyUncheckedCreateWithoutPlantsInput> | PlantMorphologyCreateWithoutPlantsInput[] | PlantMorphologyUncheckedCreateWithoutPlantsInput[]
    connectOrCreate?: PlantMorphologyCreateOrConnectWithoutPlantsInput | PlantMorphologyCreateOrConnectWithoutPlantsInput[]
    upsert?: PlantMorphologyUpsertWithWhereUniqueWithoutPlantsInput | PlantMorphologyUpsertWithWhereUniqueWithoutPlantsInput[]
    set?: PlantMorphologyWhereUniqueInput | PlantMorphologyWhereUniqueInput[]
    disconnect?: PlantMorphologyWhereUniqueInput | PlantMorphologyWhereUniqueInput[]
    delete?: PlantMorphologyWhereUniqueInput | PlantMorphologyWhereUniqueInput[]
    connect?: PlantMorphologyWhereUniqueInput | PlantMorphologyWhereUniqueInput[]
    update?: PlantMorphologyUpdateWithWhereUniqueWithoutPlantsInput | PlantMorphologyUpdateWithWhereUniqueWithoutPlantsInput[]
    updateMany?: PlantMorphologyUpdateManyWithWhereWithoutPlantsInput | PlantMorphologyUpdateManyWithWhereWithoutPlantsInput[]
    deleteMany?: PlantMorphologyScalarWhereInput | PlantMorphologyScalarWhereInput[]
  }

  export type PlantEcologyDistributionUpdateOneWithoutPlantNestedInput = {
    create?: XOR<PlantEcologyDistributionCreateWithoutPlantInput, PlantEcologyDistributionUncheckedCreateWithoutPlantInput>
    connectOrCreate?: PlantEcologyDistributionCreateOrConnectWithoutPlantInput
    upsert?: PlantEcologyDistributionUpsertWithoutPlantInput
    disconnect?: PlantEcologyDistributionWhereInput | boolean
    delete?: PlantEcologyDistributionWhereInput | boolean
    connect?: PlantEcologyDistributionWhereUniqueInput
    update?: XOR<XOR<PlantEcologyDistributionUpdateToOneWithWhereWithoutPlantInput, PlantEcologyDistributionUpdateWithoutPlantInput>, PlantEcologyDistributionUncheckedUpdateWithoutPlantInput>
  }

  export type PlantConservationUpdateOneWithoutPlantNestedInput = {
    create?: XOR<PlantConservationCreateWithoutPlantInput, PlantConservationUncheckedCreateWithoutPlantInput>
    connectOrCreate?: PlantConservationCreateOrConnectWithoutPlantInput
    upsert?: PlantConservationUpsertWithoutPlantInput
    disconnect?: PlantConservationWhereInput | boolean
    delete?: PlantConservationWhereInput | boolean
    connect?: PlantConservationWhereUniqueInput
    update?: XOR<XOR<PlantConservationUpdateToOneWithWhereWithoutPlantInput, PlantConservationUpdateWithoutPlantInput>, PlantConservationUncheckedUpdateWithoutPlantInput>
  }

  export type HerbalDrugBackgroundUpdateManyWithoutPlantNestedInput = {
    create?: XOR<HerbalDrugBackgroundCreateWithoutPlantInput, HerbalDrugBackgroundUncheckedCreateWithoutPlantInput> | HerbalDrugBackgroundCreateWithoutPlantInput[] | HerbalDrugBackgroundUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: HerbalDrugBackgroundCreateOrConnectWithoutPlantInput | HerbalDrugBackgroundCreateOrConnectWithoutPlantInput[]
    upsert?: HerbalDrugBackgroundUpsertWithWhereUniqueWithoutPlantInput | HerbalDrugBackgroundUpsertWithWhereUniqueWithoutPlantInput[]
    createMany?: HerbalDrugBackgroundCreateManyPlantInputEnvelope
    set?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
    disconnect?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
    delete?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
    connect?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
    update?: HerbalDrugBackgroundUpdateWithWhereUniqueWithoutPlantInput | HerbalDrugBackgroundUpdateWithWhereUniqueWithoutPlantInput[]
    updateMany?: HerbalDrugBackgroundUpdateManyWithWhereWithoutPlantInput | HerbalDrugBackgroundUpdateManyWithWhereWithoutPlantInput[]
    deleteMany?: HerbalDrugBackgroundScalarWhereInput | HerbalDrugBackgroundScalarWhereInput[]
  }

  export type EthnobotanyUpdateOneWithoutPlantNestedInput = {
    create?: XOR<EthnobotanyCreateWithoutPlantInput, EthnobotanyUncheckedCreateWithoutPlantInput>
    connectOrCreate?: EthnobotanyCreateOrConnectWithoutPlantInput
    upsert?: EthnobotanyUpsertWithoutPlantInput
    disconnect?: EthnobotanyWhereInput | boolean
    delete?: EthnobotanyWhereInput | boolean
    connect?: EthnobotanyWhereUniqueInput
    update?: XOR<XOR<EthnobotanyUpdateToOneWithWhereWithoutPlantInput, EthnobotanyUpdateWithoutPlantInput>, EthnobotanyUncheckedUpdateWithoutPlantInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BotanicalGardenUncheckedUpdateManyWithoutPlantsNestedInput = {
    create?: XOR<BotanicalGardenCreateWithoutPlantsInput, BotanicalGardenUncheckedCreateWithoutPlantsInput> | BotanicalGardenCreateWithoutPlantsInput[] | BotanicalGardenUncheckedCreateWithoutPlantsInput[]
    connectOrCreate?: BotanicalGardenCreateOrConnectWithoutPlantsInput | BotanicalGardenCreateOrConnectWithoutPlantsInput[]
    upsert?: BotanicalGardenUpsertWithWhereUniqueWithoutPlantsInput | BotanicalGardenUpsertWithWhereUniqueWithoutPlantsInput[]
    set?: BotanicalGardenWhereUniqueInput | BotanicalGardenWhereUniqueInput[]
    disconnect?: BotanicalGardenWhereUniqueInput | BotanicalGardenWhereUniqueInput[]
    delete?: BotanicalGardenWhereUniqueInput | BotanicalGardenWhereUniqueInput[]
    connect?: BotanicalGardenWhereUniqueInput | BotanicalGardenWhereUniqueInput[]
    update?: BotanicalGardenUpdateWithWhereUniqueWithoutPlantsInput | BotanicalGardenUpdateWithWhereUniqueWithoutPlantsInput[]
    updateMany?: BotanicalGardenUpdateManyWithWhereWithoutPlantsInput | BotanicalGardenUpdateManyWithWhereWithoutPlantsInput[]
    deleteMany?: BotanicalGardenScalarWhereInput | BotanicalGardenScalarWhereInput[]
  }

  export type PlantSynonymUncheckedUpdateManyWithoutPlantNestedInput = {
    create?: XOR<PlantSynonymCreateWithoutPlantInput, PlantSynonymUncheckedCreateWithoutPlantInput> | PlantSynonymCreateWithoutPlantInput[] | PlantSynonymUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: PlantSynonymCreateOrConnectWithoutPlantInput | PlantSynonymCreateOrConnectWithoutPlantInput[]
    upsert?: PlantSynonymUpsertWithWhereUniqueWithoutPlantInput | PlantSynonymUpsertWithWhereUniqueWithoutPlantInput[]
    createMany?: PlantSynonymCreateManyPlantInputEnvelope
    set?: PlantSynonymWhereUniqueInput | PlantSynonymWhereUniqueInput[]
    disconnect?: PlantSynonymWhereUniqueInput | PlantSynonymWhereUniqueInput[]
    delete?: PlantSynonymWhereUniqueInput | PlantSynonymWhereUniqueInput[]
    connect?: PlantSynonymWhereUniqueInput | PlantSynonymWhereUniqueInput[]
    update?: PlantSynonymUpdateWithWhereUniqueWithoutPlantInput | PlantSynonymUpdateWithWhereUniqueWithoutPlantInput[]
    updateMany?: PlantSynonymUpdateManyWithWhereWithoutPlantInput | PlantSynonymUpdateManyWithWhereWithoutPlantInput[]
    deleteMany?: PlantSynonymScalarWhereInput | PlantSynonymScalarWhereInput[]
  }

  export type PlantMorphologyUncheckedUpdateManyWithoutPlantsNestedInput = {
    create?: XOR<PlantMorphologyCreateWithoutPlantsInput, PlantMorphologyUncheckedCreateWithoutPlantsInput> | PlantMorphologyCreateWithoutPlantsInput[] | PlantMorphologyUncheckedCreateWithoutPlantsInput[]
    connectOrCreate?: PlantMorphologyCreateOrConnectWithoutPlantsInput | PlantMorphologyCreateOrConnectWithoutPlantsInput[]
    upsert?: PlantMorphologyUpsertWithWhereUniqueWithoutPlantsInput | PlantMorphologyUpsertWithWhereUniqueWithoutPlantsInput[]
    set?: PlantMorphologyWhereUniqueInput | PlantMorphologyWhereUniqueInput[]
    disconnect?: PlantMorphologyWhereUniqueInput | PlantMorphologyWhereUniqueInput[]
    delete?: PlantMorphologyWhereUniqueInput | PlantMorphologyWhereUniqueInput[]
    connect?: PlantMorphologyWhereUniqueInput | PlantMorphologyWhereUniqueInput[]
    update?: PlantMorphologyUpdateWithWhereUniqueWithoutPlantsInput | PlantMorphologyUpdateWithWhereUniqueWithoutPlantsInput[]
    updateMany?: PlantMorphologyUpdateManyWithWhereWithoutPlantsInput | PlantMorphologyUpdateManyWithWhereWithoutPlantsInput[]
    deleteMany?: PlantMorphologyScalarWhereInput | PlantMorphologyScalarWhereInput[]
  }

  export type PlantEcologyDistributionUncheckedUpdateOneWithoutPlantNestedInput = {
    create?: XOR<PlantEcologyDistributionCreateWithoutPlantInput, PlantEcologyDistributionUncheckedCreateWithoutPlantInput>
    connectOrCreate?: PlantEcologyDistributionCreateOrConnectWithoutPlantInput
    upsert?: PlantEcologyDistributionUpsertWithoutPlantInput
    disconnect?: PlantEcologyDistributionWhereInput | boolean
    delete?: PlantEcologyDistributionWhereInput | boolean
    connect?: PlantEcologyDistributionWhereUniqueInput
    update?: XOR<XOR<PlantEcologyDistributionUpdateToOneWithWhereWithoutPlantInput, PlantEcologyDistributionUpdateWithoutPlantInput>, PlantEcologyDistributionUncheckedUpdateWithoutPlantInput>
  }

  export type PlantConservationUncheckedUpdateOneWithoutPlantNestedInput = {
    create?: XOR<PlantConservationCreateWithoutPlantInput, PlantConservationUncheckedCreateWithoutPlantInput>
    connectOrCreate?: PlantConservationCreateOrConnectWithoutPlantInput
    upsert?: PlantConservationUpsertWithoutPlantInput
    disconnect?: PlantConservationWhereInput | boolean
    delete?: PlantConservationWhereInput | boolean
    connect?: PlantConservationWhereUniqueInput
    update?: XOR<XOR<PlantConservationUpdateToOneWithWhereWithoutPlantInput, PlantConservationUpdateWithoutPlantInput>, PlantConservationUncheckedUpdateWithoutPlantInput>
  }

  export type HerbalDrugBackgroundUncheckedUpdateManyWithoutPlantNestedInput = {
    create?: XOR<HerbalDrugBackgroundCreateWithoutPlantInput, HerbalDrugBackgroundUncheckedCreateWithoutPlantInput> | HerbalDrugBackgroundCreateWithoutPlantInput[] | HerbalDrugBackgroundUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: HerbalDrugBackgroundCreateOrConnectWithoutPlantInput | HerbalDrugBackgroundCreateOrConnectWithoutPlantInput[]
    upsert?: HerbalDrugBackgroundUpsertWithWhereUniqueWithoutPlantInput | HerbalDrugBackgroundUpsertWithWhereUniqueWithoutPlantInput[]
    createMany?: HerbalDrugBackgroundCreateManyPlantInputEnvelope
    set?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
    disconnect?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
    delete?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
    connect?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
    update?: HerbalDrugBackgroundUpdateWithWhereUniqueWithoutPlantInput | HerbalDrugBackgroundUpdateWithWhereUniqueWithoutPlantInput[]
    updateMany?: HerbalDrugBackgroundUpdateManyWithWhereWithoutPlantInput | HerbalDrugBackgroundUpdateManyWithWhereWithoutPlantInput[]
    deleteMany?: HerbalDrugBackgroundScalarWhereInput | HerbalDrugBackgroundScalarWhereInput[]
  }

  export type EthnobotanyUncheckedUpdateOneWithoutPlantNestedInput = {
    create?: XOR<EthnobotanyCreateWithoutPlantInput, EthnobotanyUncheckedCreateWithoutPlantInput>
    connectOrCreate?: EthnobotanyCreateOrConnectWithoutPlantInput
    upsert?: EthnobotanyUpsertWithoutPlantInput
    disconnect?: EthnobotanyWhereInput | boolean
    delete?: EthnobotanyWhereInput | boolean
    connect?: EthnobotanyWhereUniqueInput
    update?: XOR<XOR<EthnobotanyUpdateToOneWithWhereWithoutPlantInput, EthnobotanyUpdateWithoutPlantInput>, EthnobotanyUncheckedUpdateWithoutPlantInput>
  }

  export type PlantNomenclatureCreateNestedManyWithoutTaxonomyInput = {
    create?: XOR<PlantNomenclatureCreateWithoutTaxonomyInput, PlantNomenclatureUncheckedCreateWithoutTaxonomyInput> | PlantNomenclatureCreateWithoutTaxonomyInput[] | PlantNomenclatureUncheckedCreateWithoutTaxonomyInput[]
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutTaxonomyInput | PlantNomenclatureCreateOrConnectWithoutTaxonomyInput[]
    createMany?: PlantNomenclatureCreateManyTaxonomyInputEnvelope
    connect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
  }

  export type PlantNomenclatureUncheckedCreateNestedManyWithoutTaxonomyInput = {
    create?: XOR<PlantNomenclatureCreateWithoutTaxonomyInput, PlantNomenclatureUncheckedCreateWithoutTaxonomyInput> | PlantNomenclatureCreateWithoutTaxonomyInput[] | PlantNomenclatureUncheckedCreateWithoutTaxonomyInput[]
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutTaxonomyInput | PlantNomenclatureCreateOrConnectWithoutTaxonomyInput[]
    createMany?: PlantNomenclatureCreateManyTaxonomyInputEnvelope
    connect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type PlantNomenclatureUpdateManyWithoutTaxonomyNestedInput = {
    create?: XOR<PlantNomenclatureCreateWithoutTaxonomyInput, PlantNomenclatureUncheckedCreateWithoutTaxonomyInput> | PlantNomenclatureCreateWithoutTaxonomyInput[] | PlantNomenclatureUncheckedCreateWithoutTaxonomyInput[]
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutTaxonomyInput | PlantNomenclatureCreateOrConnectWithoutTaxonomyInput[]
    upsert?: PlantNomenclatureUpsertWithWhereUniqueWithoutTaxonomyInput | PlantNomenclatureUpsertWithWhereUniqueWithoutTaxonomyInput[]
    createMany?: PlantNomenclatureCreateManyTaxonomyInputEnvelope
    set?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    disconnect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    delete?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    connect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    update?: PlantNomenclatureUpdateWithWhereUniqueWithoutTaxonomyInput | PlantNomenclatureUpdateWithWhereUniqueWithoutTaxonomyInput[]
    updateMany?: PlantNomenclatureUpdateManyWithWhereWithoutTaxonomyInput | PlantNomenclatureUpdateManyWithWhereWithoutTaxonomyInput[]
    deleteMany?: PlantNomenclatureScalarWhereInput | PlantNomenclatureScalarWhereInput[]
  }

  export type PlantNomenclatureUncheckedUpdateManyWithoutTaxonomyNestedInput = {
    create?: XOR<PlantNomenclatureCreateWithoutTaxonomyInput, PlantNomenclatureUncheckedCreateWithoutTaxonomyInput> | PlantNomenclatureCreateWithoutTaxonomyInput[] | PlantNomenclatureUncheckedCreateWithoutTaxonomyInput[]
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutTaxonomyInput | PlantNomenclatureCreateOrConnectWithoutTaxonomyInput[]
    upsert?: PlantNomenclatureUpsertWithWhereUniqueWithoutTaxonomyInput | PlantNomenclatureUpsertWithWhereUniqueWithoutTaxonomyInput[]
    createMany?: PlantNomenclatureCreateManyTaxonomyInputEnvelope
    set?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    disconnect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    delete?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    connect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    update?: PlantNomenclatureUpdateWithWhereUniqueWithoutTaxonomyInput | PlantNomenclatureUpdateWithWhereUniqueWithoutTaxonomyInput[]
    updateMany?: PlantNomenclatureUpdateManyWithWhereWithoutTaxonomyInput | PlantNomenclatureUpdateManyWithWhereWithoutTaxonomyInput[]
    deleteMany?: PlantNomenclatureScalarWhereInput | PlantNomenclatureScalarWhereInput[]
  }

  export type PlantNomenclatureCreateNestedOneWithoutSynonymsInput = {
    create?: XOR<PlantNomenclatureCreateWithoutSynonymsInput, PlantNomenclatureUncheckedCreateWithoutSynonymsInput>
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutSynonymsInput
    connect?: PlantNomenclatureWhereUniqueInput
  }

  export type PlantNomenclatureUpdateOneRequiredWithoutSynonymsNestedInput = {
    create?: XOR<PlantNomenclatureCreateWithoutSynonymsInput, PlantNomenclatureUncheckedCreateWithoutSynonymsInput>
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutSynonymsInput
    upsert?: PlantNomenclatureUpsertWithoutSynonymsInput
    connect?: PlantNomenclatureWhereUniqueInput
    update?: XOR<XOR<PlantNomenclatureUpdateToOneWithWhereWithoutSynonymsInput, PlantNomenclatureUpdateWithoutSynonymsInput>, PlantNomenclatureUncheckedUpdateWithoutSynonymsInput>
  }

  export type PlantMorphologyCreatelifecycleInput = {
    set: $Enums.Lifecycle[]
  }

  export type PlantMorphologyCreatefloweringPeriodInput = {
    set: $Enums.Month[]
  }

  export type PlantMorphologyCreatefruitingPeriodInput = {
    set: $Enums.Month[]
  }

  export type PlantNomenclatureCreateNestedManyWithoutMorphologiesInput = {
    create?: XOR<PlantNomenclatureCreateWithoutMorphologiesInput, PlantNomenclatureUncheckedCreateWithoutMorphologiesInput> | PlantNomenclatureCreateWithoutMorphologiesInput[] | PlantNomenclatureUncheckedCreateWithoutMorphologiesInput[]
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutMorphologiesInput | PlantNomenclatureCreateOrConnectWithoutMorphologiesInput[]
    connect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
  }

  export type PlantNomenclatureUncheckedCreateNestedManyWithoutMorphologiesInput = {
    create?: XOR<PlantNomenclatureCreateWithoutMorphologiesInput, PlantNomenclatureUncheckedCreateWithoutMorphologiesInput> | PlantNomenclatureCreateWithoutMorphologiesInput[] | PlantNomenclatureUncheckedCreateWithoutMorphologiesInput[]
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutMorphologiesInput | PlantNomenclatureCreateOrConnectWithoutMorphologiesInput[]
    connect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
  }

  export type PlantMorphologyUpdatelifecycleInput = {
    set?: $Enums.Lifecycle[]
    push?: $Enums.Lifecycle | $Enums.Lifecycle[]
  }

  export type PlantMorphologyUpdatefloweringPeriodInput = {
    set?: $Enums.Month[]
    push?: $Enums.Month | $Enums.Month[]
  }

  export type PlantMorphologyUpdatefruitingPeriodInput = {
    set?: $Enums.Month[]
    push?: $Enums.Month | $Enums.Month[]
  }

  export type PlantNomenclatureUpdateManyWithoutMorphologiesNestedInput = {
    create?: XOR<PlantNomenclatureCreateWithoutMorphologiesInput, PlantNomenclatureUncheckedCreateWithoutMorphologiesInput> | PlantNomenclatureCreateWithoutMorphologiesInput[] | PlantNomenclatureUncheckedCreateWithoutMorphologiesInput[]
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutMorphologiesInput | PlantNomenclatureCreateOrConnectWithoutMorphologiesInput[]
    upsert?: PlantNomenclatureUpsertWithWhereUniqueWithoutMorphologiesInput | PlantNomenclatureUpsertWithWhereUniqueWithoutMorphologiesInput[]
    set?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    disconnect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    delete?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    connect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    update?: PlantNomenclatureUpdateWithWhereUniqueWithoutMorphologiesInput | PlantNomenclatureUpdateWithWhereUniqueWithoutMorphologiesInput[]
    updateMany?: PlantNomenclatureUpdateManyWithWhereWithoutMorphologiesInput | PlantNomenclatureUpdateManyWithWhereWithoutMorphologiesInput[]
    deleteMany?: PlantNomenclatureScalarWhereInput | PlantNomenclatureScalarWhereInput[]
  }

  export type PlantNomenclatureUncheckedUpdateManyWithoutMorphologiesNestedInput = {
    create?: XOR<PlantNomenclatureCreateWithoutMorphologiesInput, PlantNomenclatureUncheckedCreateWithoutMorphologiesInput> | PlantNomenclatureCreateWithoutMorphologiesInput[] | PlantNomenclatureUncheckedCreateWithoutMorphologiesInput[]
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutMorphologiesInput | PlantNomenclatureCreateOrConnectWithoutMorphologiesInput[]
    upsert?: PlantNomenclatureUpsertWithWhereUniqueWithoutMorphologiesInput | PlantNomenclatureUpsertWithWhereUniqueWithoutMorphologiesInput[]
    set?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    disconnect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    delete?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    connect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    update?: PlantNomenclatureUpdateWithWhereUniqueWithoutMorphologiesInput | PlantNomenclatureUpdateWithWhereUniqueWithoutMorphologiesInput[]
    updateMany?: PlantNomenclatureUpdateManyWithWhereWithoutMorphologiesInput | PlantNomenclatureUpdateManyWithWhereWithoutMorphologiesInput[]
    deleteMany?: PlantNomenclatureScalarWhereInput | PlantNomenclatureScalarWhereInput[]
  }

  export type PlantNomenclatureCreateNestedOneWithoutEcologyDistributionsInput = {
    create?: XOR<PlantNomenclatureCreateWithoutEcologyDistributionsInput, PlantNomenclatureUncheckedCreateWithoutEcologyDistributionsInput>
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutEcologyDistributionsInput
    connect?: PlantNomenclatureWhereUniqueInput
  }

  export type PlantNomenclatureUpdateOneRequiredWithoutEcologyDistributionsNestedInput = {
    create?: XOR<PlantNomenclatureCreateWithoutEcologyDistributionsInput, PlantNomenclatureUncheckedCreateWithoutEcologyDistributionsInput>
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutEcologyDistributionsInput
    upsert?: PlantNomenclatureUpsertWithoutEcologyDistributionsInput
    connect?: PlantNomenclatureWhereUniqueInput
    update?: XOR<XOR<PlantNomenclatureUpdateToOneWithWhereWithoutEcologyDistributionsInput, PlantNomenclatureUpdateWithoutEcologyDistributionsInput>, PlantNomenclatureUncheckedUpdateWithoutEcologyDistributionsInput>
  }

  export type PlantNomenclatureCreateNestedOneWithoutConservationInput = {
    create?: XOR<PlantNomenclatureCreateWithoutConservationInput, PlantNomenclatureUncheckedCreateWithoutConservationInput>
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutConservationInput
    connect?: PlantNomenclatureWhereUniqueInput
  }

  export type NullableEnumGlobalConservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.GlobalConservationStatus | null
  }

  export type NullableEnumInvasiveStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvasiveStatus | null
  }

  export type PlantNomenclatureUpdateOneRequiredWithoutConservationNestedInput = {
    create?: XOR<PlantNomenclatureCreateWithoutConservationInput, PlantNomenclatureUncheckedCreateWithoutConservationInput>
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutConservationInput
    upsert?: PlantNomenclatureUpsertWithoutConservationInput
    connect?: PlantNomenclatureWhereUniqueInput
    update?: XOR<XOR<PlantNomenclatureUpdateToOneWithWhereWithoutConservationInput, PlantNomenclatureUpdateWithoutConservationInput>, PlantNomenclatureUncheckedUpdateWithoutConservationInput>
  }

  export type PlantNomenclatureCreateNestedManyWithoutBotanicalGardenListInput = {
    create?: XOR<PlantNomenclatureCreateWithoutBotanicalGardenListInput, PlantNomenclatureUncheckedCreateWithoutBotanicalGardenListInput> | PlantNomenclatureCreateWithoutBotanicalGardenListInput[] | PlantNomenclatureUncheckedCreateWithoutBotanicalGardenListInput[]
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutBotanicalGardenListInput | PlantNomenclatureCreateOrConnectWithoutBotanicalGardenListInput[]
    connect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
  }

  export type PlantNomenclatureUncheckedCreateNestedManyWithoutBotanicalGardenListInput = {
    create?: XOR<PlantNomenclatureCreateWithoutBotanicalGardenListInput, PlantNomenclatureUncheckedCreateWithoutBotanicalGardenListInput> | PlantNomenclatureCreateWithoutBotanicalGardenListInput[] | PlantNomenclatureUncheckedCreateWithoutBotanicalGardenListInput[]
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutBotanicalGardenListInput | PlantNomenclatureCreateOrConnectWithoutBotanicalGardenListInput[]
    connect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
  }

  export type PlantNomenclatureUpdateManyWithoutBotanicalGardenListNestedInput = {
    create?: XOR<PlantNomenclatureCreateWithoutBotanicalGardenListInput, PlantNomenclatureUncheckedCreateWithoutBotanicalGardenListInput> | PlantNomenclatureCreateWithoutBotanicalGardenListInput[] | PlantNomenclatureUncheckedCreateWithoutBotanicalGardenListInput[]
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutBotanicalGardenListInput | PlantNomenclatureCreateOrConnectWithoutBotanicalGardenListInput[]
    upsert?: PlantNomenclatureUpsertWithWhereUniqueWithoutBotanicalGardenListInput | PlantNomenclatureUpsertWithWhereUniqueWithoutBotanicalGardenListInput[]
    set?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    disconnect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    delete?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    connect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    update?: PlantNomenclatureUpdateWithWhereUniqueWithoutBotanicalGardenListInput | PlantNomenclatureUpdateWithWhereUniqueWithoutBotanicalGardenListInput[]
    updateMany?: PlantNomenclatureUpdateManyWithWhereWithoutBotanicalGardenListInput | PlantNomenclatureUpdateManyWithWhereWithoutBotanicalGardenListInput[]
    deleteMany?: PlantNomenclatureScalarWhereInput | PlantNomenclatureScalarWhereInput[]
  }

  export type PlantNomenclatureUncheckedUpdateManyWithoutBotanicalGardenListNestedInput = {
    create?: XOR<PlantNomenclatureCreateWithoutBotanicalGardenListInput, PlantNomenclatureUncheckedCreateWithoutBotanicalGardenListInput> | PlantNomenclatureCreateWithoutBotanicalGardenListInput[] | PlantNomenclatureUncheckedCreateWithoutBotanicalGardenListInput[]
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutBotanicalGardenListInput | PlantNomenclatureCreateOrConnectWithoutBotanicalGardenListInput[]
    upsert?: PlantNomenclatureUpsertWithWhereUniqueWithoutBotanicalGardenListInput | PlantNomenclatureUpsertWithWhereUniqueWithoutBotanicalGardenListInput[]
    set?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    disconnect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    delete?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    connect?: PlantNomenclatureWhereUniqueInput | PlantNomenclatureWhereUniqueInput[]
    update?: PlantNomenclatureUpdateWithWhereUniqueWithoutBotanicalGardenListInput | PlantNomenclatureUpdateWithWhereUniqueWithoutBotanicalGardenListInput[]
    updateMany?: PlantNomenclatureUpdateManyWithWhereWithoutBotanicalGardenListInput | PlantNomenclatureUpdateManyWithWhereWithoutBotanicalGardenListInput[]
    deleteMany?: PlantNomenclatureScalarWhereInput | PlantNomenclatureScalarWhereInput[]
  }

  export type MedicinalPropertiesCreatetasteInput = {
    set: $Enums.Taste[]
  }

  export type MedicinalPropertiesCreateenergyFlowInput = {
    set: $Enums.EnergyFlow[]
  }

  export type MedicinalPropertiesCreatemeridiansInput = {
    set: $Enums.Meridian[]
  }

  export type MedicinalPropertiesCreatepharmacologicalPropertiesInput = {
    set: string[]
  }

  export type MedicinalPropertiesCreateindicationsInput = {
    set: string[]
  }

  export type HerbalDrugBackgroundCreateNestedManyWithoutMedicinalPropertyInput = {
    create?: XOR<HerbalDrugBackgroundCreateWithoutMedicinalPropertyInput, HerbalDrugBackgroundUncheckedCreateWithoutMedicinalPropertyInput> | HerbalDrugBackgroundCreateWithoutMedicinalPropertyInput[] | HerbalDrugBackgroundUncheckedCreateWithoutMedicinalPropertyInput[]
    connectOrCreate?: HerbalDrugBackgroundCreateOrConnectWithoutMedicinalPropertyInput | HerbalDrugBackgroundCreateOrConnectWithoutMedicinalPropertyInput[]
    createMany?: HerbalDrugBackgroundCreateManyMedicinalPropertyInputEnvelope
    connect?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
  }

  export type HerbalDrugBackgroundUncheckedCreateNestedManyWithoutMedicinalPropertyInput = {
    create?: XOR<HerbalDrugBackgroundCreateWithoutMedicinalPropertyInput, HerbalDrugBackgroundUncheckedCreateWithoutMedicinalPropertyInput> | HerbalDrugBackgroundCreateWithoutMedicinalPropertyInput[] | HerbalDrugBackgroundUncheckedCreateWithoutMedicinalPropertyInput[]
    connectOrCreate?: HerbalDrugBackgroundCreateOrConnectWithoutMedicinalPropertyInput | HerbalDrugBackgroundCreateOrConnectWithoutMedicinalPropertyInput[]
    createMany?: HerbalDrugBackgroundCreateManyMedicinalPropertyInputEnvelope
    connect?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
  }

  export type MedicinalPropertiesUpdatetasteInput = {
    set?: $Enums.Taste[]
    push?: $Enums.Taste | $Enums.Taste[]
  }

  export type MedicinalPropertiesUpdateenergyFlowInput = {
    set?: $Enums.EnergyFlow[]
    push?: $Enums.EnergyFlow | $Enums.EnergyFlow[]
  }

  export type MedicinalPropertiesUpdatemeridiansInput = {
    set?: $Enums.Meridian[]
    push?: $Enums.Meridian | $Enums.Meridian[]
  }

  export type MedicinalPropertiesUpdatepharmacologicalPropertiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MedicinalPropertiesUpdateindicationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type HerbalDrugBackgroundUpdateManyWithoutMedicinalPropertyNestedInput = {
    create?: XOR<HerbalDrugBackgroundCreateWithoutMedicinalPropertyInput, HerbalDrugBackgroundUncheckedCreateWithoutMedicinalPropertyInput> | HerbalDrugBackgroundCreateWithoutMedicinalPropertyInput[] | HerbalDrugBackgroundUncheckedCreateWithoutMedicinalPropertyInput[]
    connectOrCreate?: HerbalDrugBackgroundCreateOrConnectWithoutMedicinalPropertyInput | HerbalDrugBackgroundCreateOrConnectWithoutMedicinalPropertyInput[]
    upsert?: HerbalDrugBackgroundUpsertWithWhereUniqueWithoutMedicinalPropertyInput | HerbalDrugBackgroundUpsertWithWhereUniqueWithoutMedicinalPropertyInput[]
    createMany?: HerbalDrugBackgroundCreateManyMedicinalPropertyInputEnvelope
    set?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
    disconnect?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
    delete?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
    connect?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
    update?: HerbalDrugBackgroundUpdateWithWhereUniqueWithoutMedicinalPropertyInput | HerbalDrugBackgroundUpdateWithWhereUniqueWithoutMedicinalPropertyInput[]
    updateMany?: HerbalDrugBackgroundUpdateManyWithWhereWithoutMedicinalPropertyInput | HerbalDrugBackgroundUpdateManyWithWhereWithoutMedicinalPropertyInput[]
    deleteMany?: HerbalDrugBackgroundScalarWhereInput | HerbalDrugBackgroundScalarWhereInput[]
  }

  export type HerbalDrugBackgroundUncheckedUpdateManyWithoutMedicinalPropertyNestedInput = {
    create?: XOR<HerbalDrugBackgroundCreateWithoutMedicinalPropertyInput, HerbalDrugBackgroundUncheckedCreateWithoutMedicinalPropertyInput> | HerbalDrugBackgroundCreateWithoutMedicinalPropertyInput[] | HerbalDrugBackgroundUncheckedCreateWithoutMedicinalPropertyInput[]
    connectOrCreate?: HerbalDrugBackgroundCreateOrConnectWithoutMedicinalPropertyInput | HerbalDrugBackgroundCreateOrConnectWithoutMedicinalPropertyInput[]
    upsert?: HerbalDrugBackgroundUpsertWithWhereUniqueWithoutMedicinalPropertyInput | HerbalDrugBackgroundUpsertWithWhereUniqueWithoutMedicinalPropertyInput[]
    createMany?: HerbalDrugBackgroundCreateManyMedicinalPropertyInputEnvelope
    set?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
    disconnect?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
    delete?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
    connect?: HerbalDrugBackgroundWhereUniqueInput | HerbalDrugBackgroundWhereUniqueInput[]
    update?: HerbalDrugBackgroundUpdateWithWhereUniqueWithoutMedicinalPropertyInput | HerbalDrugBackgroundUpdateWithWhereUniqueWithoutMedicinalPropertyInput[]
    updateMany?: HerbalDrugBackgroundUpdateManyWithWhereWithoutMedicinalPropertyInput | HerbalDrugBackgroundUpdateManyWithWhereWithoutMedicinalPropertyInput[]
    deleteMany?: HerbalDrugBackgroundScalarWhereInput | HerbalDrugBackgroundScalarWhereInput[]
  }

  export type HerbalDrugBackgroundCreateharvestingTimeInput = {
    set: $Enums.Month[]
  }

  export type PlantNomenclatureCreateNestedOneWithoutHerbalDrugsInput = {
    create?: XOR<PlantNomenclatureCreateWithoutHerbalDrugsInput, PlantNomenclatureUncheckedCreateWithoutHerbalDrugsInput>
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutHerbalDrugsInput
    connect?: PlantNomenclatureWhereUniqueInput
  }

  export type MedicinalPropertiesCreateNestedOneWithoutHerbalDrugsInput = {
    create?: XOR<MedicinalPropertiesCreateWithoutHerbalDrugsInput, MedicinalPropertiesUncheckedCreateWithoutHerbalDrugsInput>
    connectOrCreate?: MedicinalPropertiesCreateOrConnectWithoutHerbalDrugsInput
    connect?: MedicinalPropertiesWhereUniqueInput
  }

  export type SourcingBackgroundCreateNestedOneWithoutHerbalDrugInput = {
    create?: XOR<SourcingBackgroundCreateWithoutHerbalDrugInput, SourcingBackgroundUncheckedCreateWithoutHerbalDrugInput>
    connectOrCreate?: SourcingBackgroundCreateOrConnectWithoutHerbalDrugInput
    connect?: SourcingBackgroundWhereUniqueInput
  }

  export type SourcingBackgroundUncheckedCreateNestedOneWithoutHerbalDrugInput = {
    create?: XOR<SourcingBackgroundCreateWithoutHerbalDrugInput, SourcingBackgroundUncheckedCreateWithoutHerbalDrugInput>
    connectOrCreate?: SourcingBackgroundCreateOrConnectWithoutHerbalDrugInput
    connect?: SourcingBackgroundWhereUniqueInput
  }

  export type HerbalDrugBackgroundUpdateharvestingTimeInput = {
    set?: $Enums.Month[]
    push?: $Enums.Month | $Enums.Month[]
  }

  export type PlantNomenclatureUpdateOneRequiredWithoutHerbalDrugsNestedInput = {
    create?: XOR<PlantNomenclatureCreateWithoutHerbalDrugsInput, PlantNomenclatureUncheckedCreateWithoutHerbalDrugsInput>
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutHerbalDrugsInput
    upsert?: PlantNomenclatureUpsertWithoutHerbalDrugsInput
    connect?: PlantNomenclatureWhereUniqueInput
    update?: XOR<XOR<PlantNomenclatureUpdateToOneWithWhereWithoutHerbalDrugsInput, PlantNomenclatureUpdateWithoutHerbalDrugsInput>, PlantNomenclatureUncheckedUpdateWithoutHerbalDrugsInput>
  }

  export type MedicinalPropertiesUpdateOneRequiredWithoutHerbalDrugsNestedInput = {
    create?: XOR<MedicinalPropertiesCreateWithoutHerbalDrugsInput, MedicinalPropertiesUncheckedCreateWithoutHerbalDrugsInput>
    connectOrCreate?: MedicinalPropertiesCreateOrConnectWithoutHerbalDrugsInput
    upsert?: MedicinalPropertiesUpsertWithoutHerbalDrugsInput
    connect?: MedicinalPropertiesWhereUniqueInput
    update?: XOR<XOR<MedicinalPropertiesUpdateToOneWithWhereWithoutHerbalDrugsInput, MedicinalPropertiesUpdateWithoutHerbalDrugsInput>, MedicinalPropertiesUncheckedUpdateWithoutHerbalDrugsInput>
  }

  export type SourcingBackgroundUpdateOneWithoutHerbalDrugNestedInput = {
    create?: XOR<SourcingBackgroundCreateWithoutHerbalDrugInput, SourcingBackgroundUncheckedCreateWithoutHerbalDrugInput>
    connectOrCreate?: SourcingBackgroundCreateOrConnectWithoutHerbalDrugInput
    upsert?: SourcingBackgroundUpsertWithoutHerbalDrugInput
    disconnect?: SourcingBackgroundWhereInput | boolean
    delete?: SourcingBackgroundWhereInput | boolean
    connect?: SourcingBackgroundWhereUniqueInput
    update?: XOR<XOR<SourcingBackgroundUpdateToOneWithWhereWithoutHerbalDrugInput, SourcingBackgroundUpdateWithoutHerbalDrugInput>, SourcingBackgroundUncheckedUpdateWithoutHerbalDrugInput>
  }

  export type SourcingBackgroundUncheckedUpdateOneWithoutHerbalDrugNestedInput = {
    create?: XOR<SourcingBackgroundCreateWithoutHerbalDrugInput, SourcingBackgroundUncheckedCreateWithoutHerbalDrugInput>
    connectOrCreate?: SourcingBackgroundCreateOrConnectWithoutHerbalDrugInput
    upsert?: SourcingBackgroundUpsertWithoutHerbalDrugInput
    disconnect?: SourcingBackgroundWhereInput | boolean
    delete?: SourcingBackgroundWhereInput | boolean
    connect?: SourcingBackgroundWhereUniqueInput
    update?: XOR<XOR<SourcingBackgroundUpdateToOneWithWhereWithoutHerbalDrugInput, SourcingBackgroundUpdateWithoutHerbalDrugInput>, SourcingBackgroundUncheckedUpdateWithoutHerbalDrugInput>
  }

  export type SourcingBackgroundCreateharvestingPracticeInput = {
    set: $Enums.HarvestingPractice[]
  }

  export type HerbalDrugBackgroundCreateNestedOneWithoutSourcingBackgroundsInput = {
    create?: XOR<HerbalDrugBackgroundCreateWithoutSourcingBackgroundsInput, HerbalDrugBackgroundUncheckedCreateWithoutSourcingBackgroundsInput>
    connectOrCreate?: HerbalDrugBackgroundCreateOrConnectWithoutSourcingBackgroundsInput
    connect?: HerbalDrugBackgroundWhereUniqueInput
  }

  export type SourcingBackgroundUpdateharvestingPracticeInput = {
    set?: $Enums.HarvestingPractice[]
    push?: $Enums.HarvestingPractice | $Enums.HarvestingPractice[]
  }

  export type HerbalDrugBackgroundUpdateOneRequiredWithoutSourcingBackgroundsNestedInput = {
    create?: XOR<HerbalDrugBackgroundCreateWithoutSourcingBackgroundsInput, HerbalDrugBackgroundUncheckedCreateWithoutSourcingBackgroundsInput>
    connectOrCreate?: HerbalDrugBackgroundCreateOrConnectWithoutSourcingBackgroundsInput
    upsert?: HerbalDrugBackgroundUpsertWithoutSourcingBackgroundsInput
    connect?: HerbalDrugBackgroundWhereUniqueInput
    update?: XOR<XOR<HerbalDrugBackgroundUpdateToOneWithWhereWithoutSourcingBackgroundsInput, HerbalDrugBackgroundUpdateWithoutSourcingBackgroundsInput>, HerbalDrugBackgroundUncheckedUpdateWithoutSourcingBackgroundsInput>
  }

  export type EthnobotanyCreateotherCulturalUsesInput = {
    set: string[]
  }

  export type PlantNomenclatureCreateNestedOneWithoutEthnobotaniesInput = {
    create?: XOR<PlantNomenclatureCreateWithoutEthnobotaniesInput, PlantNomenclatureUncheckedCreateWithoutEthnobotaniesInput>
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutEthnobotaniesInput
    connect?: PlantNomenclatureWhereUniqueInput
  }

  export type EthnobotanyUpdateotherCulturalUsesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PlantNomenclatureUpdateOneRequiredWithoutEthnobotaniesNestedInput = {
    create?: XOR<PlantNomenclatureCreateWithoutEthnobotaniesInput, PlantNomenclatureUncheckedCreateWithoutEthnobotaniesInput>
    connectOrCreate?: PlantNomenclatureCreateOrConnectWithoutEthnobotaniesInput
    upsert?: PlantNomenclatureUpsertWithoutEthnobotaniesInput
    connect?: PlantNomenclatureWhereUniqueInput
    update?: XOR<XOR<PlantNomenclatureUpdateToOneWithWhereWithoutEthnobotaniesInput, PlantNomenclatureUpdateWithoutEthnobotaniesInput>, PlantNomenclatureUncheckedUpdateWithoutEthnobotaniesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumGlobalConservationStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalConservationStatus | EnumGlobalConservationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.GlobalConservationStatus[] | ListEnumGlobalConservationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GlobalConservationStatus[] | ListEnumGlobalConservationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGlobalConservationStatusNullableFilter<$PrismaModel> | $Enums.GlobalConservationStatus | null
  }

  export type NestedEnumInvasiveStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.InvasiveStatus | EnumInvasiveStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.InvasiveStatus[] | ListEnumInvasiveStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InvasiveStatus[] | ListEnumInvasiveStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInvasiveStatusNullableFilter<$PrismaModel> | $Enums.InvasiveStatus | null
  }

  export type NestedEnumGlobalConservationStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalConservationStatus | EnumGlobalConservationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.GlobalConservationStatus[] | ListEnumGlobalConservationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GlobalConservationStatus[] | ListEnumGlobalConservationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGlobalConservationStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.GlobalConservationStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGlobalConservationStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumGlobalConservationStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumInvasiveStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvasiveStatus | EnumInvasiveStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.InvasiveStatus[] | ListEnumInvasiveStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InvasiveStatus[] | ListEnumInvasiveStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInvasiveStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.InvasiveStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumInvasiveStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumInvasiveStatusNullableFilter<$PrismaModel>
  }

  export type PlantTaxonomyCreateWithoutPlantsInput = {
    class?: string | null
    family: string
    vascular?: boolean | null
  }

  export type PlantTaxonomyUncheckedCreateWithoutPlantsInput = {
    id?: number
    class?: string | null
    family: string
    vascular?: boolean | null
  }

  export type PlantTaxonomyCreateOrConnectWithoutPlantsInput = {
    where: PlantTaxonomyWhereUniqueInput
    create: XOR<PlantTaxonomyCreateWithoutPlantsInput, PlantTaxonomyUncheckedCreateWithoutPlantsInput>
  }

  export type BotanicalGardenCreateWithoutPlantsInput = {
    botanicalGardenName: string
  }

  export type BotanicalGardenUncheckedCreateWithoutPlantsInput = {
    id?: number
    botanicalGardenName: string
  }

  export type BotanicalGardenCreateOrConnectWithoutPlantsInput = {
    where: BotanicalGardenWhereUniqueInput
    create: XOR<BotanicalGardenCreateWithoutPlantsInput, BotanicalGardenUncheckedCreateWithoutPlantsInput>
  }

  export type PlantSynonymCreateWithoutPlantInput = {
    name?: string | null
  }

  export type PlantSynonymUncheckedCreateWithoutPlantInput = {
    id?: number
    name?: string | null
  }

  export type PlantSynonymCreateOrConnectWithoutPlantInput = {
    where: PlantSynonymWhereUniqueInput
    create: XOR<PlantSynonymCreateWithoutPlantInput, PlantSynonymUncheckedCreateWithoutPlantInput>
  }

  export type PlantSynonymCreateManyPlantInputEnvelope = {
    data: PlantSynonymCreateManyPlantInput | PlantSynonymCreateManyPlantInput[]
    skipDuplicates?: boolean
  }

  export type PlantMorphologyCreateWithoutPlantsInput = {
    lifecycle?: PlantMorphologyCreatelifecycleInput | $Enums.Lifecycle[]
    isTerrestrial?: boolean | null
    growthHabit?: string | null
    isDeciduous?: boolean | null
    isDeciduousNote?: string | null
    reproductiveSystem?: string | null
    floweringPeriod?: PlantMorphologyCreatefloweringPeriodInput | $Enums.Month[]
    fruitingPeriod?: PlantMorphologyCreatefruitingPeriodInput | $Enums.Month[]
    floweringPeriodNote?: string | null
    fruitingPeriodNote?: string | null
  }

  export type PlantMorphologyUncheckedCreateWithoutPlantsInput = {
    id?: number
    lifecycle?: PlantMorphologyCreatelifecycleInput | $Enums.Lifecycle[]
    isTerrestrial?: boolean | null
    growthHabit?: string | null
    isDeciduous?: boolean | null
    isDeciduousNote?: string | null
    reproductiveSystem?: string | null
    floweringPeriod?: PlantMorphologyCreatefloweringPeriodInput | $Enums.Month[]
    fruitingPeriod?: PlantMorphologyCreatefruitingPeriodInput | $Enums.Month[]
    floweringPeriodNote?: string | null
    fruitingPeriodNote?: string | null
  }

  export type PlantMorphologyCreateOrConnectWithoutPlantsInput = {
    where: PlantMorphologyWhereUniqueInput
    create: XOR<PlantMorphologyCreateWithoutPlantsInput, PlantMorphologyUncheckedCreateWithoutPlantsInput>
  }

  export type PlantEcologyDistributionCreateWithoutPlantInput = {
    habitat?: string | null
    plantOrigin?: string | null
    globalRange?: string | null
    chinaRange?: string | null
    endemic?: string | null
  }

  export type PlantEcologyDistributionUncheckedCreateWithoutPlantInput = {
    id?: number
    habitat?: string | null
    plantOrigin?: string | null
    globalRange?: string | null
    chinaRange?: string | null
    endemic?: string | null
  }

  export type PlantEcologyDistributionCreateOrConnectWithoutPlantInput = {
    where: PlantEcologyDistributionWhereUniqueInput
    create: XOR<PlantEcologyDistributionCreateWithoutPlantInput, PlantEcologyDistributionUncheckedCreateWithoutPlantInput>
  }

  export type PlantConservationCreateWithoutPlantInput = {
    globalConservationStatus?: $Enums.GlobalConservationStatus | null
    chinaConservationStatus?: string | null
    protectedStatus?: string | null
    invasiveStatus?: $Enums.InvasiveStatus | null
    invasiveRange?: string | null
  }

  export type PlantConservationUncheckedCreateWithoutPlantInput = {
    id?: number
    globalConservationStatus?: $Enums.GlobalConservationStatus | null
    chinaConservationStatus?: string | null
    protectedStatus?: string | null
    invasiveStatus?: $Enums.InvasiveStatus | null
    invasiveRange?: string | null
  }

  export type PlantConservationCreateOrConnectWithoutPlantInput = {
    where: PlantConservationWhereUniqueInput
    create: XOR<PlantConservationCreateWithoutPlantInput, PlantConservationUncheckedCreateWithoutPlantInput>
  }

  export type HerbalDrugBackgroundCreateWithoutPlantInput = {
    herbalDrugPinyin: string
    plantPartUsed?: string | null
    officialStatus?: boolean | null
    harvestingTime?: HerbalDrugBackgroundCreateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: string | null
    primaryProcessing?: string | null
    secondaryProcessing?: string | null
    herbalDruglImage?: string | null
    medicinalProperty: MedicinalPropertiesCreateNestedOneWithoutHerbalDrugsInput
    sourcingBackgrounds?: SourcingBackgroundCreateNestedOneWithoutHerbalDrugInput
  }

  export type HerbalDrugBackgroundUncheckedCreateWithoutPlantInput = {
    id?: number
    herbalDrugPinyin: string
    plantPartUsed?: string | null
    officialStatus?: boolean | null
    harvestingTime?: HerbalDrugBackgroundCreateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: string | null
    primaryProcessing?: string | null
    secondaryProcessing?: string | null
    herbalDruglImage?: string | null
    pharmaceuticalName: string
    sourcingBackgrounds?: SourcingBackgroundUncheckedCreateNestedOneWithoutHerbalDrugInput
  }

  export type HerbalDrugBackgroundCreateOrConnectWithoutPlantInput = {
    where: HerbalDrugBackgroundWhereUniqueInput
    create: XOR<HerbalDrugBackgroundCreateWithoutPlantInput, HerbalDrugBackgroundUncheckedCreateWithoutPlantInput>
  }

  export type HerbalDrugBackgroundCreateManyPlantInputEnvelope = {
    data: HerbalDrugBackgroundCreateManyPlantInput | HerbalDrugBackgroundCreateManyPlantInput[]
    skipDuplicates?: boolean
  }

  export type EthnobotanyCreateWithoutPlantInput = {
    folkMedicinalUses?: string | null
    otherCulturalUses?: EthnobotanyCreateotherCulturalUsesInput | string[]
    references?: string | null
  }

  export type EthnobotanyUncheckedCreateWithoutPlantInput = {
    id?: number
    folkMedicinalUses?: string | null
    otherCulturalUses?: EthnobotanyCreateotherCulturalUsesInput | string[]
    references?: string | null
  }

  export type EthnobotanyCreateOrConnectWithoutPlantInput = {
    where: EthnobotanyWhereUniqueInput
    create: XOR<EthnobotanyCreateWithoutPlantInput, EthnobotanyUncheckedCreateWithoutPlantInput>
  }

  export type PlantTaxonomyUpsertWithoutPlantsInput = {
    update: XOR<PlantTaxonomyUpdateWithoutPlantsInput, PlantTaxonomyUncheckedUpdateWithoutPlantsInput>
    create: XOR<PlantTaxonomyCreateWithoutPlantsInput, PlantTaxonomyUncheckedCreateWithoutPlantsInput>
    where?: PlantTaxonomyWhereInput
  }

  export type PlantTaxonomyUpdateToOneWithWhereWithoutPlantsInput = {
    where?: PlantTaxonomyWhereInput
    data: XOR<PlantTaxonomyUpdateWithoutPlantsInput, PlantTaxonomyUncheckedUpdateWithoutPlantsInput>
  }

  export type PlantTaxonomyUpdateWithoutPlantsInput = {
    class?: NullableStringFieldUpdateOperationsInput | string | null
    family?: StringFieldUpdateOperationsInput | string
    vascular?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PlantTaxonomyUncheckedUpdateWithoutPlantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    class?: NullableStringFieldUpdateOperationsInput | string | null
    family?: StringFieldUpdateOperationsInput | string
    vascular?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BotanicalGardenUpsertWithWhereUniqueWithoutPlantsInput = {
    where: BotanicalGardenWhereUniqueInput
    update: XOR<BotanicalGardenUpdateWithoutPlantsInput, BotanicalGardenUncheckedUpdateWithoutPlantsInput>
    create: XOR<BotanicalGardenCreateWithoutPlantsInput, BotanicalGardenUncheckedCreateWithoutPlantsInput>
  }

  export type BotanicalGardenUpdateWithWhereUniqueWithoutPlantsInput = {
    where: BotanicalGardenWhereUniqueInput
    data: XOR<BotanicalGardenUpdateWithoutPlantsInput, BotanicalGardenUncheckedUpdateWithoutPlantsInput>
  }

  export type BotanicalGardenUpdateManyWithWhereWithoutPlantsInput = {
    where: BotanicalGardenScalarWhereInput
    data: XOR<BotanicalGardenUpdateManyMutationInput, BotanicalGardenUncheckedUpdateManyWithoutPlantsInput>
  }

  export type BotanicalGardenScalarWhereInput = {
    AND?: BotanicalGardenScalarWhereInput | BotanicalGardenScalarWhereInput[]
    OR?: BotanicalGardenScalarWhereInput[]
    NOT?: BotanicalGardenScalarWhereInput | BotanicalGardenScalarWhereInput[]
    id?: IntFilter<"BotanicalGarden"> | number
    botanicalGardenName?: StringFilter<"BotanicalGarden"> | string
  }

  export type PlantSynonymUpsertWithWhereUniqueWithoutPlantInput = {
    where: PlantSynonymWhereUniqueInput
    update: XOR<PlantSynonymUpdateWithoutPlantInput, PlantSynonymUncheckedUpdateWithoutPlantInput>
    create: XOR<PlantSynonymCreateWithoutPlantInput, PlantSynonymUncheckedCreateWithoutPlantInput>
  }

  export type PlantSynonymUpdateWithWhereUniqueWithoutPlantInput = {
    where: PlantSynonymWhereUniqueInput
    data: XOR<PlantSynonymUpdateWithoutPlantInput, PlantSynonymUncheckedUpdateWithoutPlantInput>
  }

  export type PlantSynonymUpdateManyWithWhereWithoutPlantInput = {
    where: PlantSynonymScalarWhereInput
    data: XOR<PlantSynonymUpdateManyMutationInput, PlantSynonymUncheckedUpdateManyWithoutPlantInput>
  }

  export type PlantSynonymScalarWhereInput = {
    AND?: PlantSynonymScalarWhereInput | PlantSynonymScalarWhereInput[]
    OR?: PlantSynonymScalarWhereInput[]
    NOT?: PlantSynonymScalarWhereInput | PlantSynonymScalarWhereInput[]
    id?: IntFilter<"PlantSynonym"> | number
    plantId?: IntFilter<"PlantSynonym"> | number
    name?: StringNullableFilter<"PlantSynonym"> | string | null
  }

  export type PlantMorphologyUpsertWithWhereUniqueWithoutPlantsInput = {
    where: PlantMorphologyWhereUniqueInput
    update: XOR<PlantMorphologyUpdateWithoutPlantsInput, PlantMorphologyUncheckedUpdateWithoutPlantsInput>
    create: XOR<PlantMorphologyCreateWithoutPlantsInput, PlantMorphologyUncheckedCreateWithoutPlantsInput>
  }

  export type PlantMorphologyUpdateWithWhereUniqueWithoutPlantsInput = {
    where: PlantMorphologyWhereUniqueInput
    data: XOR<PlantMorphologyUpdateWithoutPlantsInput, PlantMorphologyUncheckedUpdateWithoutPlantsInput>
  }

  export type PlantMorphologyUpdateManyWithWhereWithoutPlantsInput = {
    where: PlantMorphologyScalarWhereInput
    data: XOR<PlantMorphologyUpdateManyMutationInput, PlantMorphologyUncheckedUpdateManyWithoutPlantsInput>
  }

  export type PlantMorphologyScalarWhereInput = {
    AND?: PlantMorphologyScalarWhereInput | PlantMorphologyScalarWhereInput[]
    OR?: PlantMorphologyScalarWhereInput[]
    NOT?: PlantMorphologyScalarWhereInput | PlantMorphologyScalarWhereInput[]
    id?: IntFilter<"PlantMorphology"> | number
    lifecycle?: EnumLifecycleNullableListFilter<"PlantMorphology">
    isTerrestrial?: BoolNullableFilter<"PlantMorphology"> | boolean | null
    growthHabit?: StringNullableFilter<"PlantMorphology"> | string | null
    isDeciduous?: BoolNullableFilter<"PlantMorphology"> | boolean | null
    isDeciduousNote?: StringNullableFilter<"PlantMorphology"> | string | null
    reproductiveSystem?: StringNullableFilter<"PlantMorphology"> | string | null
    floweringPeriod?: EnumMonthNullableListFilter<"PlantMorphology">
    fruitingPeriod?: EnumMonthNullableListFilter<"PlantMorphology">
    floweringPeriodNote?: StringNullableFilter<"PlantMorphology"> | string | null
    fruitingPeriodNote?: StringNullableFilter<"PlantMorphology"> | string | null
  }

  export type PlantEcologyDistributionUpsertWithoutPlantInput = {
    update: XOR<PlantEcologyDistributionUpdateWithoutPlantInput, PlantEcologyDistributionUncheckedUpdateWithoutPlantInput>
    create: XOR<PlantEcologyDistributionCreateWithoutPlantInput, PlantEcologyDistributionUncheckedCreateWithoutPlantInput>
    where?: PlantEcologyDistributionWhereInput
  }

  export type PlantEcologyDistributionUpdateToOneWithWhereWithoutPlantInput = {
    where?: PlantEcologyDistributionWhereInput
    data: XOR<PlantEcologyDistributionUpdateWithoutPlantInput, PlantEcologyDistributionUncheckedUpdateWithoutPlantInput>
  }

  export type PlantEcologyDistributionUpdateWithoutPlantInput = {
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    plantOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    globalRange?: NullableStringFieldUpdateOperationsInput | string | null
    chinaRange?: NullableStringFieldUpdateOperationsInput | string | null
    endemic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantEcologyDistributionUncheckedUpdateWithoutPlantInput = {
    id?: IntFieldUpdateOperationsInput | number
    habitat?: NullableStringFieldUpdateOperationsInput | string | null
    plantOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    globalRange?: NullableStringFieldUpdateOperationsInput | string | null
    chinaRange?: NullableStringFieldUpdateOperationsInput | string | null
    endemic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantConservationUpsertWithoutPlantInput = {
    update: XOR<PlantConservationUpdateWithoutPlantInput, PlantConservationUncheckedUpdateWithoutPlantInput>
    create: XOR<PlantConservationCreateWithoutPlantInput, PlantConservationUncheckedCreateWithoutPlantInput>
    where?: PlantConservationWhereInput
  }

  export type PlantConservationUpdateToOneWithWhereWithoutPlantInput = {
    where?: PlantConservationWhereInput
    data: XOR<PlantConservationUpdateWithoutPlantInput, PlantConservationUncheckedUpdateWithoutPlantInput>
  }

  export type PlantConservationUpdateWithoutPlantInput = {
    globalConservationStatus?: NullableEnumGlobalConservationStatusFieldUpdateOperationsInput | $Enums.GlobalConservationStatus | null
    chinaConservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    protectedStatus?: NullableStringFieldUpdateOperationsInput | string | null
    invasiveStatus?: NullableEnumInvasiveStatusFieldUpdateOperationsInput | $Enums.InvasiveStatus | null
    invasiveRange?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantConservationUncheckedUpdateWithoutPlantInput = {
    id?: IntFieldUpdateOperationsInput | number
    globalConservationStatus?: NullableEnumGlobalConservationStatusFieldUpdateOperationsInput | $Enums.GlobalConservationStatus | null
    chinaConservationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    protectedStatus?: NullableStringFieldUpdateOperationsInput | string | null
    invasiveStatus?: NullableEnumInvasiveStatusFieldUpdateOperationsInput | $Enums.InvasiveStatus | null
    invasiveRange?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HerbalDrugBackgroundUpsertWithWhereUniqueWithoutPlantInput = {
    where: HerbalDrugBackgroundWhereUniqueInput
    update: XOR<HerbalDrugBackgroundUpdateWithoutPlantInput, HerbalDrugBackgroundUncheckedUpdateWithoutPlantInput>
    create: XOR<HerbalDrugBackgroundCreateWithoutPlantInput, HerbalDrugBackgroundUncheckedCreateWithoutPlantInput>
  }

  export type HerbalDrugBackgroundUpdateWithWhereUniqueWithoutPlantInput = {
    where: HerbalDrugBackgroundWhereUniqueInput
    data: XOR<HerbalDrugBackgroundUpdateWithoutPlantInput, HerbalDrugBackgroundUncheckedUpdateWithoutPlantInput>
  }

  export type HerbalDrugBackgroundUpdateManyWithWhereWithoutPlantInput = {
    where: HerbalDrugBackgroundScalarWhereInput
    data: XOR<HerbalDrugBackgroundUpdateManyMutationInput, HerbalDrugBackgroundUncheckedUpdateManyWithoutPlantInput>
  }

  export type HerbalDrugBackgroundScalarWhereInput = {
    AND?: HerbalDrugBackgroundScalarWhereInput | HerbalDrugBackgroundScalarWhereInput[]
    OR?: HerbalDrugBackgroundScalarWhereInput[]
    NOT?: HerbalDrugBackgroundScalarWhereInput | HerbalDrugBackgroundScalarWhereInput[]
    id?: IntFilter<"HerbalDrugBackground"> | number
    herbalDrugPinyin?: StringFilter<"HerbalDrugBackground"> | string
    plantPartUsed?: StringNullableFilter<"HerbalDrugBackground"> | string | null
    officialStatus?: BoolNullableFilter<"HerbalDrugBackground"> | boolean | null
    harvestingTime?: EnumMonthNullableListFilter<"HerbalDrugBackground">
    harvestingTimeNote?: StringNullableFilter<"HerbalDrugBackground"> | string | null
    primaryProcessing?: StringNullableFilter<"HerbalDrugBackground"> | string | null
    secondaryProcessing?: StringNullableFilter<"HerbalDrugBackground"> | string | null
    herbalDruglImage?: StringNullableFilter<"HerbalDrugBackground"> | string | null
    plantScientificName?: StringFilter<"HerbalDrugBackground"> | string
    pharmaceuticalName?: StringFilter<"HerbalDrugBackground"> | string
  }

  export type EthnobotanyUpsertWithoutPlantInput = {
    update: XOR<EthnobotanyUpdateWithoutPlantInput, EthnobotanyUncheckedUpdateWithoutPlantInput>
    create: XOR<EthnobotanyCreateWithoutPlantInput, EthnobotanyUncheckedCreateWithoutPlantInput>
    where?: EthnobotanyWhereInput
  }

  export type EthnobotanyUpdateToOneWithWhereWithoutPlantInput = {
    where?: EthnobotanyWhereInput
    data: XOR<EthnobotanyUpdateWithoutPlantInput, EthnobotanyUncheckedUpdateWithoutPlantInput>
  }

  export type EthnobotanyUpdateWithoutPlantInput = {
    folkMedicinalUses?: NullableStringFieldUpdateOperationsInput | string | null
    otherCulturalUses?: EthnobotanyUpdateotherCulturalUsesInput | string[]
    references?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EthnobotanyUncheckedUpdateWithoutPlantInput = {
    id?: IntFieldUpdateOperationsInput | number
    folkMedicinalUses?: NullableStringFieldUpdateOperationsInput | string | null
    otherCulturalUses?: EthnobotanyUpdateotherCulturalUsesInput | string[]
    references?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantNomenclatureCreateWithoutTaxonomyInput = {
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    links?: PlantNomenclatureCreatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenCreateNestedManyWithoutPlantsInput
    synonyms?: PlantSynonymCreateNestedManyWithoutPlantInput
    morphologies?: PlantMorphologyCreateNestedManyWithoutPlantsInput
    ecologyDistributions?: PlantEcologyDistributionCreateNestedOneWithoutPlantInput
    conservation?: PlantConservationCreateNestedOneWithoutPlantInput
    herbalDrugs?: HerbalDrugBackgroundCreateNestedManyWithoutPlantInput
    ethnobotanies?: EthnobotanyCreateNestedOneWithoutPlantInput
  }

  export type PlantNomenclatureUncheckedCreateWithoutTaxonomyInput = {
    internalId?: number
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    links?: PlantNomenclatureCreatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUncheckedCreateNestedManyWithoutPlantsInput
    synonyms?: PlantSynonymUncheckedCreateNestedManyWithoutPlantInput
    morphologies?: PlantMorphologyUncheckedCreateNestedManyWithoutPlantsInput
    ecologyDistributions?: PlantEcologyDistributionUncheckedCreateNestedOneWithoutPlantInput
    conservation?: PlantConservationUncheckedCreateNestedOneWithoutPlantInput
    herbalDrugs?: HerbalDrugBackgroundUncheckedCreateNestedManyWithoutPlantInput
    ethnobotanies?: EthnobotanyUncheckedCreateNestedOneWithoutPlantInput
  }

  export type PlantNomenclatureCreateOrConnectWithoutTaxonomyInput = {
    where: PlantNomenclatureWhereUniqueInput
    create: XOR<PlantNomenclatureCreateWithoutTaxonomyInput, PlantNomenclatureUncheckedCreateWithoutTaxonomyInput>
  }

  export type PlantNomenclatureCreateManyTaxonomyInputEnvelope = {
    data: PlantNomenclatureCreateManyTaxonomyInput | PlantNomenclatureCreateManyTaxonomyInput[]
    skipDuplicates?: boolean
  }

  export type PlantNomenclatureUpsertWithWhereUniqueWithoutTaxonomyInput = {
    where: PlantNomenclatureWhereUniqueInput
    update: XOR<PlantNomenclatureUpdateWithoutTaxonomyInput, PlantNomenclatureUncheckedUpdateWithoutTaxonomyInput>
    create: XOR<PlantNomenclatureCreateWithoutTaxonomyInput, PlantNomenclatureUncheckedCreateWithoutTaxonomyInput>
  }

  export type PlantNomenclatureUpdateWithWhereUniqueWithoutTaxonomyInput = {
    where: PlantNomenclatureWhereUniqueInput
    data: XOR<PlantNomenclatureUpdateWithoutTaxonomyInput, PlantNomenclatureUncheckedUpdateWithoutTaxonomyInput>
  }

  export type PlantNomenclatureUpdateManyWithWhereWithoutTaxonomyInput = {
    where: PlantNomenclatureScalarWhereInput
    data: XOR<PlantNomenclatureUpdateManyMutationInput, PlantNomenclatureUncheckedUpdateManyWithoutTaxonomyInput>
  }

  export type PlantNomenclatureScalarWhereInput = {
    AND?: PlantNomenclatureScalarWhereInput | PlantNomenclatureScalarWhereInput[]
    OR?: PlantNomenclatureScalarWhereInput[]
    NOT?: PlantNomenclatureScalarWhereInput | PlantNomenclatureScalarWhereInput[]
    internalId?: IntFilter<"PlantNomenclature"> | number
    plantScientificName?: StringFilter<"PlantNomenclature"> | string
    plantCommonName?: StringNullableListFilter<"PlantNomenclature">
    plantPinyin?: StringNullableFilter<"PlantNomenclature"> | string | null
    plantChineseName?: StringNullableFilter<"PlantNomenclature"> | string | null
    taxonomyId?: IntFilter<"PlantNomenclature"> | number
    links?: StringNullableListFilter<"PlantNomenclature">
  }

  export type PlantNomenclatureCreateWithoutSynonymsInput = {
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    links?: PlantNomenclatureCreatelinksInput | string[]
    taxonomy: PlantTaxonomyCreateNestedOneWithoutPlantsInput
    botanicalGardenList?: BotanicalGardenCreateNestedManyWithoutPlantsInput
    morphologies?: PlantMorphologyCreateNestedManyWithoutPlantsInput
    ecologyDistributions?: PlantEcologyDistributionCreateNestedOneWithoutPlantInput
    conservation?: PlantConservationCreateNestedOneWithoutPlantInput
    herbalDrugs?: HerbalDrugBackgroundCreateNestedManyWithoutPlantInput
    ethnobotanies?: EthnobotanyCreateNestedOneWithoutPlantInput
  }

  export type PlantNomenclatureUncheckedCreateWithoutSynonymsInput = {
    internalId?: number
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    taxonomyId: number
    links?: PlantNomenclatureCreatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUncheckedCreateNestedManyWithoutPlantsInput
    morphologies?: PlantMorphologyUncheckedCreateNestedManyWithoutPlantsInput
    ecologyDistributions?: PlantEcologyDistributionUncheckedCreateNestedOneWithoutPlantInput
    conservation?: PlantConservationUncheckedCreateNestedOneWithoutPlantInput
    herbalDrugs?: HerbalDrugBackgroundUncheckedCreateNestedManyWithoutPlantInput
    ethnobotanies?: EthnobotanyUncheckedCreateNestedOneWithoutPlantInput
  }

  export type PlantNomenclatureCreateOrConnectWithoutSynonymsInput = {
    where: PlantNomenclatureWhereUniqueInput
    create: XOR<PlantNomenclatureCreateWithoutSynonymsInput, PlantNomenclatureUncheckedCreateWithoutSynonymsInput>
  }

  export type PlantNomenclatureUpsertWithoutSynonymsInput = {
    update: XOR<PlantNomenclatureUpdateWithoutSynonymsInput, PlantNomenclatureUncheckedUpdateWithoutSynonymsInput>
    create: XOR<PlantNomenclatureCreateWithoutSynonymsInput, PlantNomenclatureUncheckedCreateWithoutSynonymsInput>
    where?: PlantNomenclatureWhereInput
  }

  export type PlantNomenclatureUpdateToOneWithWhereWithoutSynonymsInput = {
    where?: PlantNomenclatureWhereInput
    data: XOR<PlantNomenclatureUpdateWithoutSynonymsInput, PlantNomenclatureUncheckedUpdateWithoutSynonymsInput>
  }

  export type PlantNomenclatureUpdateWithoutSynonymsInput = {
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: PlantNomenclatureUpdatelinksInput | string[]
    taxonomy?: PlantTaxonomyUpdateOneRequiredWithoutPlantsNestedInput
    botanicalGardenList?: BotanicalGardenUpdateManyWithoutPlantsNestedInput
    morphologies?: PlantMorphologyUpdateManyWithoutPlantsNestedInput
    ecologyDistributions?: PlantEcologyDistributionUpdateOneWithoutPlantNestedInput
    conservation?: PlantConservationUpdateOneWithoutPlantNestedInput
    herbalDrugs?: HerbalDrugBackgroundUpdateManyWithoutPlantNestedInput
    ethnobotanies?: EthnobotanyUpdateOneWithoutPlantNestedInput
  }

  export type PlantNomenclatureUncheckedUpdateWithoutSynonymsInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomyId?: IntFieldUpdateOperationsInput | number
    links?: PlantNomenclatureUpdatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUncheckedUpdateManyWithoutPlantsNestedInput
    morphologies?: PlantMorphologyUncheckedUpdateManyWithoutPlantsNestedInput
    ecologyDistributions?: PlantEcologyDistributionUncheckedUpdateOneWithoutPlantNestedInput
    conservation?: PlantConservationUncheckedUpdateOneWithoutPlantNestedInput
    herbalDrugs?: HerbalDrugBackgroundUncheckedUpdateManyWithoutPlantNestedInput
    ethnobotanies?: EthnobotanyUncheckedUpdateOneWithoutPlantNestedInput
  }

  export type PlantNomenclatureCreateWithoutMorphologiesInput = {
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    links?: PlantNomenclatureCreatelinksInput | string[]
    taxonomy: PlantTaxonomyCreateNestedOneWithoutPlantsInput
    botanicalGardenList?: BotanicalGardenCreateNestedManyWithoutPlantsInput
    synonyms?: PlantSynonymCreateNestedManyWithoutPlantInput
    ecologyDistributions?: PlantEcologyDistributionCreateNestedOneWithoutPlantInput
    conservation?: PlantConservationCreateNestedOneWithoutPlantInput
    herbalDrugs?: HerbalDrugBackgroundCreateNestedManyWithoutPlantInput
    ethnobotanies?: EthnobotanyCreateNestedOneWithoutPlantInput
  }

  export type PlantNomenclatureUncheckedCreateWithoutMorphologiesInput = {
    internalId?: number
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    taxonomyId: number
    links?: PlantNomenclatureCreatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUncheckedCreateNestedManyWithoutPlantsInput
    synonyms?: PlantSynonymUncheckedCreateNestedManyWithoutPlantInput
    ecologyDistributions?: PlantEcologyDistributionUncheckedCreateNestedOneWithoutPlantInput
    conservation?: PlantConservationUncheckedCreateNestedOneWithoutPlantInput
    herbalDrugs?: HerbalDrugBackgroundUncheckedCreateNestedManyWithoutPlantInput
    ethnobotanies?: EthnobotanyUncheckedCreateNestedOneWithoutPlantInput
  }

  export type PlantNomenclatureCreateOrConnectWithoutMorphologiesInput = {
    where: PlantNomenclatureWhereUniqueInput
    create: XOR<PlantNomenclatureCreateWithoutMorphologiesInput, PlantNomenclatureUncheckedCreateWithoutMorphologiesInput>
  }

  export type PlantNomenclatureUpsertWithWhereUniqueWithoutMorphologiesInput = {
    where: PlantNomenclatureWhereUniqueInput
    update: XOR<PlantNomenclatureUpdateWithoutMorphologiesInput, PlantNomenclatureUncheckedUpdateWithoutMorphologiesInput>
    create: XOR<PlantNomenclatureCreateWithoutMorphologiesInput, PlantNomenclatureUncheckedCreateWithoutMorphologiesInput>
  }

  export type PlantNomenclatureUpdateWithWhereUniqueWithoutMorphologiesInput = {
    where: PlantNomenclatureWhereUniqueInput
    data: XOR<PlantNomenclatureUpdateWithoutMorphologiesInput, PlantNomenclatureUncheckedUpdateWithoutMorphologiesInput>
  }

  export type PlantNomenclatureUpdateManyWithWhereWithoutMorphologiesInput = {
    where: PlantNomenclatureScalarWhereInput
    data: XOR<PlantNomenclatureUpdateManyMutationInput, PlantNomenclatureUncheckedUpdateManyWithoutMorphologiesInput>
  }

  export type PlantNomenclatureCreateWithoutEcologyDistributionsInput = {
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    links?: PlantNomenclatureCreatelinksInput | string[]
    taxonomy: PlantTaxonomyCreateNestedOneWithoutPlantsInput
    botanicalGardenList?: BotanicalGardenCreateNestedManyWithoutPlantsInput
    synonyms?: PlantSynonymCreateNestedManyWithoutPlantInput
    morphologies?: PlantMorphologyCreateNestedManyWithoutPlantsInput
    conservation?: PlantConservationCreateNestedOneWithoutPlantInput
    herbalDrugs?: HerbalDrugBackgroundCreateNestedManyWithoutPlantInput
    ethnobotanies?: EthnobotanyCreateNestedOneWithoutPlantInput
  }

  export type PlantNomenclatureUncheckedCreateWithoutEcologyDistributionsInput = {
    internalId?: number
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    taxonomyId: number
    links?: PlantNomenclatureCreatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUncheckedCreateNestedManyWithoutPlantsInput
    synonyms?: PlantSynonymUncheckedCreateNestedManyWithoutPlantInput
    morphologies?: PlantMorphologyUncheckedCreateNestedManyWithoutPlantsInput
    conservation?: PlantConservationUncheckedCreateNestedOneWithoutPlantInput
    herbalDrugs?: HerbalDrugBackgroundUncheckedCreateNestedManyWithoutPlantInput
    ethnobotanies?: EthnobotanyUncheckedCreateNestedOneWithoutPlantInput
  }

  export type PlantNomenclatureCreateOrConnectWithoutEcologyDistributionsInput = {
    where: PlantNomenclatureWhereUniqueInput
    create: XOR<PlantNomenclatureCreateWithoutEcologyDistributionsInput, PlantNomenclatureUncheckedCreateWithoutEcologyDistributionsInput>
  }

  export type PlantNomenclatureUpsertWithoutEcologyDistributionsInput = {
    update: XOR<PlantNomenclatureUpdateWithoutEcologyDistributionsInput, PlantNomenclatureUncheckedUpdateWithoutEcologyDistributionsInput>
    create: XOR<PlantNomenclatureCreateWithoutEcologyDistributionsInput, PlantNomenclatureUncheckedCreateWithoutEcologyDistributionsInput>
    where?: PlantNomenclatureWhereInput
  }

  export type PlantNomenclatureUpdateToOneWithWhereWithoutEcologyDistributionsInput = {
    where?: PlantNomenclatureWhereInput
    data: XOR<PlantNomenclatureUpdateWithoutEcologyDistributionsInput, PlantNomenclatureUncheckedUpdateWithoutEcologyDistributionsInput>
  }

  export type PlantNomenclatureUpdateWithoutEcologyDistributionsInput = {
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: PlantNomenclatureUpdatelinksInput | string[]
    taxonomy?: PlantTaxonomyUpdateOneRequiredWithoutPlantsNestedInput
    botanicalGardenList?: BotanicalGardenUpdateManyWithoutPlantsNestedInput
    synonyms?: PlantSynonymUpdateManyWithoutPlantNestedInput
    morphologies?: PlantMorphologyUpdateManyWithoutPlantsNestedInput
    conservation?: PlantConservationUpdateOneWithoutPlantNestedInput
    herbalDrugs?: HerbalDrugBackgroundUpdateManyWithoutPlantNestedInput
    ethnobotanies?: EthnobotanyUpdateOneWithoutPlantNestedInput
  }

  export type PlantNomenclatureUncheckedUpdateWithoutEcologyDistributionsInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomyId?: IntFieldUpdateOperationsInput | number
    links?: PlantNomenclatureUpdatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUncheckedUpdateManyWithoutPlantsNestedInput
    synonyms?: PlantSynonymUncheckedUpdateManyWithoutPlantNestedInput
    morphologies?: PlantMorphologyUncheckedUpdateManyWithoutPlantsNestedInput
    conservation?: PlantConservationUncheckedUpdateOneWithoutPlantNestedInput
    herbalDrugs?: HerbalDrugBackgroundUncheckedUpdateManyWithoutPlantNestedInput
    ethnobotanies?: EthnobotanyUncheckedUpdateOneWithoutPlantNestedInput
  }

  export type PlantNomenclatureCreateWithoutConservationInput = {
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    links?: PlantNomenclatureCreatelinksInput | string[]
    taxonomy: PlantTaxonomyCreateNestedOneWithoutPlantsInput
    botanicalGardenList?: BotanicalGardenCreateNestedManyWithoutPlantsInput
    synonyms?: PlantSynonymCreateNestedManyWithoutPlantInput
    morphologies?: PlantMorphologyCreateNestedManyWithoutPlantsInput
    ecologyDistributions?: PlantEcologyDistributionCreateNestedOneWithoutPlantInput
    herbalDrugs?: HerbalDrugBackgroundCreateNestedManyWithoutPlantInput
    ethnobotanies?: EthnobotanyCreateNestedOneWithoutPlantInput
  }

  export type PlantNomenclatureUncheckedCreateWithoutConservationInput = {
    internalId?: number
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    taxonomyId: number
    links?: PlantNomenclatureCreatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUncheckedCreateNestedManyWithoutPlantsInput
    synonyms?: PlantSynonymUncheckedCreateNestedManyWithoutPlantInput
    morphologies?: PlantMorphologyUncheckedCreateNestedManyWithoutPlantsInput
    ecologyDistributions?: PlantEcologyDistributionUncheckedCreateNestedOneWithoutPlantInput
    herbalDrugs?: HerbalDrugBackgroundUncheckedCreateNestedManyWithoutPlantInput
    ethnobotanies?: EthnobotanyUncheckedCreateNestedOneWithoutPlantInput
  }

  export type PlantNomenclatureCreateOrConnectWithoutConservationInput = {
    where: PlantNomenclatureWhereUniqueInput
    create: XOR<PlantNomenclatureCreateWithoutConservationInput, PlantNomenclatureUncheckedCreateWithoutConservationInput>
  }

  export type PlantNomenclatureUpsertWithoutConservationInput = {
    update: XOR<PlantNomenclatureUpdateWithoutConservationInput, PlantNomenclatureUncheckedUpdateWithoutConservationInput>
    create: XOR<PlantNomenclatureCreateWithoutConservationInput, PlantNomenclatureUncheckedCreateWithoutConservationInput>
    where?: PlantNomenclatureWhereInput
  }

  export type PlantNomenclatureUpdateToOneWithWhereWithoutConservationInput = {
    where?: PlantNomenclatureWhereInput
    data: XOR<PlantNomenclatureUpdateWithoutConservationInput, PlantNomenclatureUncheckedUpdateWithoutConservationInput>
  }

  export type PlantNomenclatureUpdateWithoutConservationInput = {
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: PlantNomenclatureUpdatelinksInput | string[]
    taxonomy?: PlantTaxonomyUpdateOneRequiredWithoutPlantsNestedInput
    botanicalGardenList?: BotanicalGardenUpdateManyWithoutPlantsNestedInput
    synonyms?: PlantSynonymUpdateManyWithoutPlantNestedInput
    morphologies?: PlantMorphologyUpdateManyWithoutPlantsNestedInput
    ecologyDistributions?: PlantEcologyDistributionUpdateOneWithoutPlantNestedInput
    herbalDrugs?: HerbalDrugBackgroundUpdateManyWithoutPlantNestedInput
    ethnobotanies?: EthnobotanyUpdateOneWithoutPlantNestedInput
  }

  export type PlantNomenclatureUncheckedUpdateWithoutConservationInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomyId?: IntFieldUpdateOperationsInput | number
    links?: PlantNomenclatureUpdatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUncheckedUpdateManyWithoutPlantsNestedInput
    synonyms?: PlantSynonymUncheckedUpdateManyWithoutPlantNestedInput
    morphologies?: PlantMorphologyUncheckedUpdateManyWithoutPlantsNestedInput
    ecologyDistributions?: PlantEcologyDistributionUncheckedUpdateOneWithoutPlantNestedInput
    herbalDrugs?: HerbalDrugBackgroundUncheckedUpdateManyWithoutPlantNestedInput
    ethnobotanies?: EthnobotanyUncheckedUpdateOneWithoutPlantNestedInput
  }

  export type PlantNomenclatureCreateWithoutBotanicalGardenListInput = {
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    links?: PlantNomenclatureCreatelinksInput | string[]
    taxonomy: PlantTaxonomyCreateNestedOneWithoutPlantsInput
    synonyms?: PlantSynonymCreateNestedManyWithoutPlantInput
    morphologies?: PlantMorphologyCreateNestedManyWithoutPlantsInput
    ecologyDistributions?: PlantEcologyDistributionCreateNestedOneWithoutPlantInput
    conservation?: PlantConservationCreateNestedOneWithoutPlantInput
    herbalDrugs?: HerbalDrugBackgroundCreateNestedManyWithoutPlantInput
    ethnobotanies?: EthnobotanyCreateNestedOneWithoutPlantInput
  }

  export type PlantNomenclatureUncheckedCreateWithoutBotanicalGardenListInput = {
    internalId?: number
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    taxonomyId: number
    links?: PlantNomenclatureCreatelinksInput | string[]
    synonyms?: PlantSynonymUncheckedCreateNestedManyWithoutPlantInput
    morphologies?: PlantMorphologyUncheckedCreateNestedManyWithoutPlantsInput
    ecologyDistributions?: PlantEcologyDistributionUncheckedCreateNestedOneWithoutPlantInput
    conservation?: PlantConservationUncheckedCreateNestedOneWithoutPlantInput
    herbalDrugs?: HerbalDrugBackgroundUncheckedCreateNestedManyWithoutPlantInput
    ethnobotanies?: EthnobotanyUncheckedCreateNestedOneWithoutPlantInput
  }

  export type PlantNomenclatureCreateOrConnectWithoutBotanicalGardenListInput = {
    where: PlantNomenclatureWhereUniqueInput
    create: XOR<PlantNomenclatureCreateWithoutBotanicalGardenListInput, PlantNomenclatureUncheckedCreateWithoutBotanicalGardenListInput>
  }

  export type PlantNomenclatureUpsertWithWhereUniqueWithoutBotanicalGardenListInput = {
    where: PlantNomenclatureWhereUniqueInput
    update: XOR<PlantNomenclatureUpdateWithoutBotanicalGardenListInput, PlantNomenclatureUncheckedUpdateWithoutBotanicalGardenListInput>
    create: XOR<PlantNomenclatureCreateWithoutBotanicalGardenListInput, PlantNomenclatureUncheckedCreateWithoutBotanicalGardenListInput>
  }

  export type PlantNomenclatureUpdateWithWhereUniqueWithoutBotanicalGardenListInput = {
    where: PlantNomenclatureWhereUniqueInput
    data: XOR<PlantNomenclatureUpdateWithoutBotanicalGardenListInput, PlantNomenclatureUncheckedUpdateWithoutBotanicalGardenListInput>
  }

  export type PlantNomenclatureUpdateManyWithWhereWithoutBotanicalGardenListInput = {
    where: PlantNomenclatureScalarWhereInput
    data: XOR<PlantNomenclatureUpdateManyMutationInput, PlantNomenclatureUncheckedUpdateManyWithoutBotanicalGardenListInput>
  }

  export type HerbalDrugBackgroundCreateWithoutMedicinalPropertyInput = {
    herbalDrugPinyin: string
    plantPartUsed?: string | null
    officialStatus?: boolean | null
    harvestingTime?: HerbalDrugBackgroundCreateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: string | null
    primaryProcessing?: string | null
    secondaryProcessing?: string | null
    herbalDruglImage?: string | null
    plant: PlantNomenclatureCreateNestedOneWithoutHerbalDrugsInput
    sourcingBackgrounds?: SourcingBackgroundCreateNestedOneWithoutHerbalDrugInput
  }

  export type HerbalDrugBackgroundUncheckedCreateWithoutMedicinalPropertyInput = {
    id?: number
    herbalDrugPinyin: string
    plantPartUsed?: string | null
    officialStatus?: boolean | null
    harvestingTime?: HerbalDrugBackgroundCreateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: string | null
    primaryProcessing?: string | null
    secondaryProcessing?: string | null
    herbalDruglImage?: string | null
    plantScientificName: string
    sourcingBackgrounds?: SourcingBackgroundUncheckedCreateNestedOneWithoutHerbalDrugInput
  }

  export type HerbalDrugBackgroundCreateOrConnectWithoutMedicinalPropertyInput = {
    where: HerbalDrugBackgroundWhereUniqueInput
    create: XOR<HerbalDrugBackgroundCreateWithoutMedicinalPropertyInput, HerbalDrugBackgroundUncheckedCreateWithoutMedicinalPropertyInput>
  }

  export type HerbalDrugBackgroundCreateManyMedicinalPropertyInputEnvelope = {
    data: HerbalDrugBackgroundCreateManyMedicinalPropertyInput | HerbalDrugBackgroundCreateManyMedicinalPropertyInput[]
    skipDuplicates?: boolean
  }

  export type HerbalDrugBackgroundUpsertWithWhereUniqueWithoutMedicinalPropertyInput = {
    where: HerbalDrugBackgroundWhereUniqueInput
    update: XOR<HerbalDrugBackgroundUpdateWithoutMedicinalPropertyInput, HerbalDrugBackgroundUncheckedUpdateWithoutMedicinalPropertyInput>
    create: XOR<HerbalDrugBackgroundCreateWithoutMedicinalPropertyInput, HerbalDrugBackgroundUncheckedCreateWithoutMedicinalPropertyInput>
  }

  export type HerbalDrugBackgroundUpdateWithWhereUniqueWithoutMedicinalPropertyInput = {
    where: HerbalDrugBackgroundWhereUniqueInput
    data: XOR<HerbalDrugBackgroundUpdateWithoutMedicinalPropertyInput, HerbalDrugBackgroundUncheckedUpdateWithoutMedicinalPropertyInput>
  }

  export type HerbalDrugBackgroundUpdateManyWithWhereWithoutMedicinalPropertyInput = {
    where: HerbalDrugBackgroundScalarWhereInput
    data: XOR<HerbalDrugBackgroundUpdateManyMutationInput, HerbalDrugBackgroundUncheckedUpdateManyWithoutMedicinalPropertyInput>
  }

  export type PlantNomenclatureCreateWithoutHerbalDrugsInput = {
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    links?: PlantNomenclatureCreatelinksInput | string[]
    taxonomy: PlantTaxonomyCreateNestedOneWithoutPlantsInput
    botanicalGardenList?: BotanicalGardenCreateNestedManyWithoutPlantsInput
    synonyms?: PlantSynonymCreateNestedManyWithoutPlantInput
    morphologies?: PlantMorphologyCreateNestedManyWithoutPlantsInput
    ecologyDistributions?: PlantEcologyDistributionCreateNestedOneWithoutPlantInput
    conservation?: PlantConservationCreateNestedOneWithoutPlantInput
    ethnobotanies?: EthnobotanyCreateNestedOneWithoutPlantInput
  }

  export type PlantNomenclatureUncheckedCreateWithoutHerbalDrugsInput = {
    internalId?: number
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    taxonomyId: number
    links?: PlantNomenclatureCreatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUncheckedCreateNestedManyWithoutPlantsInput
    synonyms?: PlantSynonymUncheckedCreateNestedManyWithoutPlantInput
    morphologies?: PlantMorphologyUncheckedCreateNestedManyWithoutPlantsInput
    ecologyDistributions?: PlantEcologyDistributionUncheckedCreateNestedOneWithoutPlantInput
    conservation?: PlantConservationUncheckedCreateNestedOneWithoutPlantInput
    ethnobotanies?: EthnobotanyUncheckedCreateNestedOneWithoutPlantInput
  }

  export type PlantNomenclatureCreateOrConnectWithoutHerbalDrugsInput = {
    where: PlantNomenclatureWhereUniqueInput
    create: XOR<PlantNomenclatureCreateWithoutHerbalDrugsInput, PlantNomenclatureUncheckedCreateWithoutHerbalDrugsInput>
  }

  export type MedicinalPropertiesCreateWithoutHerbalDrugsInput = {
    pharmaceuticalName?: string | null
    herbalDrugPinyin?: string | null
    taste?: MedicinalPropertiesCreatetasteInput | $Enums.Taste[]
    energyFlow?: MedicinalPropertiesCreateenergyFlowInput | $Enums.EnergyFlow[]
    meridians?: MedicinalPropertiesCreatemeridiansInput | $Enums.Meridian[]
    actions?: string | null
    pharmacologicalProperties?: MedicinalPropertiesCreatepharmacologicalPropertiesInput | string[]
    indications?: MedicinalPropertiesCreateindicationsInput | string[]
    toxicity?: string | null
    secondaryMetabolites?: string | null
  }

  export type MedicinalPropertiesUncheckedCreateWithoutHerbalDrugsInput = {
    id?: number
    pharmaceuticalName?: string | null
    herbalDrugPinyin?: string | null
    taste?: MedicinalPropertiesCreatetasteInput | $Enums.Taste[]
    energyFlow?: MedicinalPropertiesCreateenergyFlowInput | $Enums.EnergyFlow[]
    meridians?: MedicinalPropertiesCreatemeridiansInput | $Enums.Meridian[]
    actions?: string | null
    pharmacologicalProperties?: MedicinalPropertiesCreatepharmacologicalPropertiesInput | string[]
    indications?: MedicinalPropertiesCreateindicationsInput | string[]
    toxicity?: string | null
    secondaryMetabolites?: string | null
  }

  export type MedicinalPropertiesCreateOrConnectWithoutHerbalDrugsInput = {
    where: MedicinalPropertiesWhereUniqueInput
    create: XOR<MedicinalPropertiesCreateWithoutHerbalDrugsInput, MedicinalPropertiesUncheckedCreateWithoutHerbalDrugsInput>
  }

  export type SourcingBackgroundCreateWithoutHerbalDrugInput = {
    cultivationStatus?: boolean | null
    cultivationRegions?: string | null
    wildHarvestingRegions?: string | null
    harvestingPractice?: SourcingBackgroundCreateharvestingPracticeInput | $Enums.HarvestingPractice[]
    harvestingPracticeNote?: string | null
    daodiStatus?: boolean | null
    daodiRegions?: string | null
    productionRegions?: string | null
  }

  export type SourcingBackgroundUncheckedCreateWithoutHerbalDrugInput = {
    id?: number
    cultivationStatus?: boolean | null
    cultivationRegions?: string | null
    wildHarvestingRegions?: string | null
    harvestingPractice?: SourcingBackgroundCreateharvestingPracticeInput | $Enums.HarvestingPractice[]
    harvestingPracticeNote?: string | null
    daodiStatus?: boolean | null
    daodiRegions?: string | null
    productionRegions?: string | null
  }

  export type SourcingBackgroundCreateOrConnectWithoutHerbalDrugInput = {
    where: SourcingBackgroundWhereUniqueInput
    create: XOR<SourcingBackgroundCreateWithoutHerbalDrugInput, SourcingBackgroundUncheckedCreateWithoutHerbalDrugInput>
  }

  export type PlantNomenclatureUpsertWithoutHerbalDrugsInput = {
    update: XOR<PlantNomenclatureUpdateWithoutHerbalDrugsInput, PlantNomenclatureUncheckedUpdateWithoutHerbalDrugsInput>
    create: XOR<PlantNomenclatureCreateWithoutHerbalDrugsInput, PlantNomenclatureUncheckedCreateWithoutHerbalDrugsInput>
    where?: PlantNomenclatureWhereInput
  }

  export type PlantNomenclatureUpdateToOneWithWhereWithoutHerbalDrugsInput = {
    where?: PlantNomenclatureWhereInput
    data: XOR<PlantNomenclatureUpdateWithoutHerbalDrugsInput, PlantNomenclatureUncheckedUpdateWithoutHerbalDrugsInput>
  }

  export type PlantNomenclatureUpdateWithoutHerbalDrugsInput = {
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: PlantNomenclatureUpdatelinksInput | string[]
    taxonomy?: PlantTaxonomyUpdateOneRequiredWithoutPlantsNestedInput
    botanicalGardenList?: BotanicalGardenUpdateManyWithoutPlantsNestedInput
    synonyms?: PlantSynonymUpdateManyWithoutPlantNestedInput
    morphologies?: PlantMorphologyUpdateManyWithoutPlantsNestedInput
    ecologyDistributions?: PlantEcologyDistributionUpdateOneWithoutPlantNestedInput
    conservation?: PlantConservationUpdateOneWithoutPlantNestedInput
    ethnobotanies?: EthnobotanyUpdateOneWithoutPlantNestedInput
  }

  export type PlantNomenclatureUncheckedUpdateWithoutHerbalDrugsInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomyId?: IntFieldUpdateOperationsInput | number
    links?: PlantNomenclatureUpdatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUncheckedUpdateManyWithoutPlantsNestedInput
    synonyms?: PlantSynonymUncheckedUpdateManyWithoutPlantNestedInput
    morphologies?: PlantMorphologyUncheckedUpdateManyWithoutPlantsNestedInput
    ecologyDistributions?: PlantEcologyDistributionUncheckedUpdateOneWithoutPlantNestedInput
    conservation?: PlantConservationUncheckedUpdateOneWithoutPlantNestedInput
    ethnobotanies?: EthnobotanyUncheckedUpdateOneWithoutPlantNestedInput
  }

  export type MedicinalPropertiesUpsertWithoutHerbalDrugsInput = {
    update: XOR<MedicinalPropertiesUpdateWithoutHerbalDrugsInput, MedicinalPropertiesUncheckedUpdateWithoutHerbalDrugsInput>
    create: XOR<MedicinalPropertiesCreateWithoutHerbalDrugsInput, MedicinalPropertiesUncheckedCreateWithoutHerbalDrugsInput>
    where?: MedicinalPropertiesWhereInput
  }

  export type MedicinalPropertiesUpdateToOneWithWhereWithoutHerbalDrugsInput = {
    where?: MedicinalPropertiesWhereInput
    data: XOR<MedicinalPropertiesUpdateWithoutHerbalDrugsInput, MedicinalPropertiesUncheckedUpdateWithoutHerbalDrugsInput>
  }

  export type MedicinalPropertiesUpdateWithoutHerbalDrugsInput = {
    pharmaceuticalName?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDrugPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    taste?: MedicinalPropertiesUpdatetasteInput | $Enums.Taste[]
    energyFlow?: MedicinalPropertiesUpdateenergyFlowInput | $Enums.EnergyFlow[]
    meridians?: MedicinalPropertiesUpdatemeridiansInput | $Enums.Meridian[]
    actions?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacologicalProperties?: MedicinalPropertiesUpdatepharmacologicalPropertiesInput | string[]
    indications?: MedicinalPropertiesUpdateindicationsInput | string[]
    toxicity?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryMetabolites?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicinalPropertiesUncheckedUpdateWithoutHerbalDrugsInput = {
    id?: IntFieldUpdateOperationsInput | number
    pharmaceuticalName?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDrugPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    taste?: MedicinalPropertiesUpdatetasteInput | $Enums.Taste[]
    energyFlow?: MedicinalPropertiesUpdateenergyFlowInput | $Enums.EnergyFlow[]
    meridians?: MedicinalPropertiesUpdatemeridiansInput | $Enums.Meridian[]
    actions?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacologicalProperties?: MedicinalPropertiesUpdatepharmacologicalPropertiesInput | string[]
    indications?: MedicinalPropertiesUpdateindicationsInput | string[]
    toxicity?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryMetabolites?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SourcingBackgroundUpsertWithoutHerbalDrugInput = {
    update: XOR<SourcingBackgroundUpdateWithoutHerbalDrugInput, SourcingBackgroundUncheckedUpdateWithoutHerbalDrugInput>
    create: XOR<SourcingBackgroundCreateWithoutHerbalDrugInput, SourcingBackgroundUncheckedCreateWithoutHerbalDrugInput>
    where?: SourcingBackgroundWhereInput
  }

  export type SourcingBackgroundUpdateToOneWithWhereWithoutHerbalDrugInput = {
    where?: SourcingBackgroundWhereInput
    data: XOR<SourcingBackgroundUpdateWithoutHerbalDrugInput, SourcingBackgroundUncheckedUpdateWithoutHerbalDrugInput>
  }

  export type SourcingBackgroundUpdateWithoutHerbalDrugInput = {
    cultivationStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cultivationRegions?: NullableStringFieldUpdateOperationsInput | string | null
    wildHarvestingRegions?: NullableStringFieldUpdateOperationsInput | string | null
    harvestingPractice?: SourcingBackgroundUpdateharvestingPracticeInput | $Enums.HarvestingPractice[]
    harvestingPracticeNote?: NullableStringFieldUpdateOperationsInput | string | null
    daodiStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daodiRegions?: NullableStringFieldUpdateOperationsInput | string | null
    productionRegions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SourcingBackgroundUncheckedUpdateWithoutHerbalDrugInput = {
    id?: IntFieldUpdateOperationsInput | number
    cultivationStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cultivationRegions?: NullableStringFieldUpdateOperationsInput | string | null
    wildHarvestingRegions?: NullableStringFieldUpdateOperationsInput | string | null
    harvestingPractice?: SourcingBackgroundUpdateharvestingPracticeInput | $Enums.HarvestingPractice[]
    harvestingPracticeNote?: NullableStringFieldUpdateOperationsInput | string | null
    daodiStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    daodiRegions?: NullableStringFieldUpdateOperationsInput | string | null
    productionRegions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HerbalDrugBackgroundCreateWithoutSourcingBackgroundsInput = {
    herbalDrugPinyin: string
    plantPartUsed?: string | null
    officialStatus?: boolean | null
    harvestingTime?: HerbalDrugBackgroundCreateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: string | null
    primaryProcessing?: string | null
    secondaryProcessing?: string | null
    herbalDruglImage?: string | null
    plant: PlantNomenclatureCreateNestedOneWithoutHerbalDrugsInput
    medicinalProperty: MedicinalPropertiesCreateNestedOneWithoutHerbalDrugsInput
  }

  export type HerbalDrugBackgroundUncheckedCreateWithoutSourcingBackgroundsInput = {
    id?: number
    herbalDrugPinyin: string
    plantPartUsed?: string | null
    officialStatus?: boolean | null
    harvestingTime?: HerbalDrugBackgroundCreateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: string | null
    primaryProcessing?: string | null
    secondaryProcessing?: string | null
    herbalDruglImage?: string | null
    plantScientificName: string
    pharmaceuticalName: string
  }

  export type HerbalDrugBackgroundCreateOrConnectWithoutSourcingBackgroundsInput = {
    where: HerbalDrugBackgroundWhereUniqueInput
    create: XOR<HerbalDrugBackgroundCreateWithoutSourcingBackgroundsInput, HerbalDrugBackgroundUncheckedCreateWithoutSourcingBackgroundsInput>
  }

  export type HerbalDrugBackgroundUpsertWithoutSourcingBackgroundsInput = {
    update: XOR<HerbalDrugBackgroundUpdateWithoutSourcingBackgroundsInput, HerbalDrugBackgroundUncheckedUpdateWithoutSourcingBackgroundsInput>
    create: XOR<HerbalDrugBackgroundCreateWithoutSourcingBackgroundsInput, HerbalDrugBackgroundUncheckedCreateWithoutSourcingBackgroundsInput>
    where?: HerbalDrugBackgroundWhereInput
  }

  export type HerbalDrugBackgroundUpdateToOneWithWhereWithoutSourcingBackgroundsInput = {
    where?: HerbalDrugBackgroundWhereInput
    data: XOR<HerbalDrugBackgroundUpdateWithoutSourcingBackgroundsInput, HerbalDrugBackgroundUncheckedUpdateWithoutSourcingBackgroundsInput>
  }

  export type HerbalDrugBackgroundUpdateWithoutSourcingBackgroundsInput = {
    herbalDrugPinyin?: StringFieldUpdateOperationsInput | string
    plantPartUsed?: NullableStringFieldUpdateOperationsInput | string | null
    officialStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    harvestingTime?: HerbalDrugBackgroundUpdateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: NullableStringFieldUpdateOperationsInput | string | null
    primaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDruglImage?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: PlantNomenclatureUpdateOneRequiredWithoutHerbalDrugsNestedInput
    medicinalProperty?: MedicinalPropertiesUpdateOneRequiredWithoutHerbalDrugsNestedInput
  }

  export type HerbalDrugBackgroundUncheckedUpdateWithoutSourcingBackgroundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    herbalDrugPinyin?: StringFieldUpdateOperationsInput | string
    plantPartUsed?: NullableStringFieldUpdateOperationsInput | string | null
    officialStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    harvestingTime?: HerbalDrugBackgroundUpdateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: NullableStringFieldUpdateOperationsInput | string | null
    primaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDruglImage?: NullableStringFieldUpdateOperationsInput | string | null
    plantScientificName?: StringFieldUpdateOperationsInput | string
    pharmaceuticalName?: StringFieldUpdateOperationsInput | string
  }

  export type PlantNomenclatureCreateWithoutEthnobotaniesInput = {
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    links?: PlantNomenclatureCreatelinksInput | string[]
    taxonomy: PlantTaxonomyCreateNestedOneWithoutPlantsInput
    botanicalGardenList?: BotanicalGardenCreateNestedManyWithoutPlantsInput
    synonyms?: PlantSynonymCreateNestedManyWithoutPlantInput
    morphologies?: PlantMorphologyCreateNestedManyWithoutPlantsInput
    ecologyDistributions?: PlantEcologyDistributionCreateNestedOneWithoutPlantInput
    conservation?: PlantConservationCreateNestedOneWithoutPlantInput
    herbalDrugs?: HerbalDrugBackgroundCreateNestedManyWithoutPlantInput
  }

  export type PlantNomenclatureUncheckedCreateWithoutEthnobotaniesInput = {
    internalId?: number
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    taxonomyId: number
    links?: PlantNomenclatureCreatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUncheckedCreateNestedManyWithoutPlantsInput
    synonyms?: PlantSynonymUncheckedCreateNestedManyWithoutPlantInput
    morphologies?: PlantMorphologyUncheckedCreateNestedManyWithoutPlantsInput
    ecologyDistributions?: PlantEcologyDistributionUncheckedCreateNestedOneWithoutPlantInput
    conservation?: PlantConservationUncheckedCreateNestedOneWithoutPlantInput
    herbalDrugs?: HerbalDrugBackgroundUncheckedCreateNestedManyWithoutPlantInput
  }

  export type PlantNomenclatureCreateOrConnectWithoutEthnobotaniesInput = {
    where: PlantNomenclatureWhereUniqueInput
    create: XOR<PlantNomenclatureCreateWithoutEthnobotaniesInput, PlantNomenclatureUncheckedCreateWithoutEthnobotaniesInput>
  }

  export type PlantNomenclatureUpsertWithoutEthnobotaniesInput = {
    update: XOR<PlantNomenclatureUpdateWithoutEthnobotaniesInput, PlantNomenclatureUncheckedUpdateWithoutEthnobotaniesInput>
    create: XOR<PlantNomenclatureCreateWithoutEthnobotaniesInput, PlantNomenclatureUncheckedCreateWithoutEthnobotaniesInput>
    where?: PlantNomenclatureWhereInput
  }

  export type PlantNomenclatureUpdateToOneWithWhereWithoutEthnobotaniesInput = {
    where?: PlantNomenclatureWhereInput
    data: XOR<PlantNomenclatureUpdateWithoutEthnobotaniesInput, PlantNomenclatureUncheckedUpdateWithoutEthnobotaniesInput>
  }

  export type PlantNomenclatureUpdateWithoutEthnobotaniesInput = {
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: PlantNomenclatureUpdatelinksInput | string[]
    taxonomy?: PlantTaxonomyUpdateOneRequiredWithoutPlantsNestedInput
    botanicalGardenList?: BotanicalGardenUpdateManyWithoutPlantsNestedInput
    synonyms?: PlantSynonymUpdateManyWithoutPlantNestedInput
    morphologies?: PlantMorphologyUpdateManyWithoutPlantsNestedInput
    ecologyDistributions?: PlantEcologyDistributionUpdateOneWithoutPlantNestedInput
    conservation?: PlantConservationUpdateOneWithoutPlantNestedInput
    herbalDrugs?: HerbalDrugBackgroundUpdateManyWithoutPlantNestedInput
  }

  export type PlantNomenclatureUncheckedUpdateWithoutEthnobotaniesInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomyId?: IntFieldUpdateOperationsInput | number
    links?: PlantNomenclatureUpdatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUncheckedUpdateManyWithoutPlantsNestedInput
    synonyms?: PlantSynonymUncheckedUpdateManyWithoutPlantNestedInput
    morphologies?: PlantMorphologyUncheckedUpdateManyWithoutPlantsNestedInput
    ecologyDistributions?: PlantEcologyDistributionUncheckedUpdateOneWithoutPlantNestedInput
    conservation?: PlantConservationUncheckedUpdateOneWithoutPlantNestedInput
    herbalDrugs?: HerbalDrugBackgroundUncheckedUpdateManyWithoutPlantNestedInput
  }

  export type PlantSynonymCreateManyPlantInput = {
    id?: number
    name?: string | null
  }

  export type HerbalDrugBackgroundCreateManyPlantInput = {
    id?: number
    herbalDrugPinyin: string
    plantPartUsed?: string | null
    officialStatus?: boolean | null
    harvestingTime?: HerbalDrugBackgroundCreateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: string | null
    primaryProcessing?: string | null
    secondaryProcessing?: string | null
    herbalDruglImage?: string | null
    pharmaceuticalName: string
  }

  export type BotanicalGardenUpdateWithoutPlantsInput = {
    botanicalGardenName?: StringFieldUpdateOperationsInput | string
  }

  export type BotanicalGardenUncheckedUpdateWithoutPlantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    botanicalGardenName?: StringFieldUpdateOperationsInput | string
  }

  export type BotanicalGardenUncheckedUpdateManyWithoutPlantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    botanicalGardenName?: StringFieldUpdateOperationsInput | string
  }

  export type PlantSynonymUpdateWithoutPlantInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantSynonymUncheckedUpdateWithoutPlantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantSynonymUncheckedUpdateManyWithoutPlantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantMorphologyUpdateWithoutPlantsInput = {
    lifecycle?: PlantMorphologyUpdatelifecycleInput | $Enums.Lifecycle[]
    isTerrestrial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    growthHabit?: NullableStringFieldUpdateOperationsInput | string | null
    isDeciduous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeciduousNote?: NullableStringFieldUpdateOperationsInput | string | null
    reproductiveSystem?: NullableStringFieldUpdateOperationsInput | string | null
    floweringPeriod?: PlantMorphologyUpdatefloweringPeriodInput | $Enums.Month[]
    fruitingPeriod?: PlantMorphologyUpdatefruitingPeriodInput | $Enums.Month[]
    floweringPeriodNote?: NullableStringFieldUpdateOperationsInput | string | null
    fruitingPeriodNote?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantMorphologyUncheckedUpdateWithoutPlantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    lifecycle?: PlantMorphologyUpdatelifecycleInput | $Enums.Lifecycle[]
    isTerrestrial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    growthHabit?: NullableStringFieldUpdateOperationsInput | string | null
    isDeciduous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeciduousNote?: NullableStringFieldUpdateOperationsInput | string | null
    reproductiveSystem?: NullableStringFieldUpdateOperationsInput | string | null
    floweringPeriod?: PlantMorphologyUpdatefloweringPeriodInput | $Enums.Month[]
    fruitingPeriod?: PlantMorphologyUpdatefruitingPeriodInput | $Enums.Month[]
    floweringPeriodNote?: NullableStringFieldUpdateOperationsInput | string | null
    fruitingPeriodNote?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlantMorphologyUncheckedUpdateManyWithoutPlantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    lifecycle?: PlantMorphologyUpdatelifecycleInput | $Enums.Lifecycle[]
    isTerrestrial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    growthHabit?: NullableStringFieldUpdateOperationsInput | string | null
    isDeciduous?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeciduousNote?: NullableStringFieldUpdateOperationsInput | string | null
    reproductiveSystem?: NullableStringFieldUpdateOperationsInput | string | null
    floweringPeriod?: PlantMorphologyUpdatefloweringPeriodInput | $Enums.Month[]
    fruitingPeriod?: PlantMorphologyUpdatefruitingPeriodInput | $Enums.Month[]
    floweringPeriodNote?: NullableStringFieldUpdateOperationsInput | string | null
    fruitingPeriodNote?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HerbalDrugBackgroundUpdateWithoutPlantInput = {
    herbalDrugPinyin?: StringFieldUpdateOperationsInput | string
    plantPartUsed?: NullableStringFieldUpdateOperationsInput | string | null
    officialStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    harvestingTime?: HerbalDrugBackgroundUpdateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: NullableStringFieldUpdateOperationsInput | string | null
    primaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDruglImage?: NullableStringFieldUpdateOperationsInput | string | null
    medicinalProperty?: MedicinalPropertiesUpdateOneRequiredWithoutHerbalDrugsNestedInput
    sourcingBackgrounds?: SourcingBackgroundUpdateOneWithoutHerbalDrugNestedInput
  }

  export type HerbalDrugBackgroundUncheckedUpdateWithoutPlantInput = {
    id?: IntFieldUpdateOperationsInput | number
    herbalDrugPinyin?: StringFieldUpdateOperationsInput | string
    plantPartUsed?: NullableStringFieldUpdateOperationsInput | string | null
    officialStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    harvestingTime?: HerbalDrugBackgroundUpdateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: NullableStringFieldUpdateOperationsInput | string | null
    primaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDruglImage?: NullableStringFieldUpdateOperationsInput | string | null
    pharmaceuticalName?: StringFieldUpdateOperationsInput | string
    sourcingBackgrounds?: SourcingBackgroundUncheckedUpdateOneWithoutHerbalDrugNestedInput
  }

  export type HerbalDrugBackgroundUncheckedUpdateManyWithoutPlantInput = {
    id?: IntFieldUpdateOperationsInput | number
    herbalDrugPinyin?: StringFieldUpdateOperationsInput | string
    plantPartUsed?: NullableStringFieldUpdateOperationsInput | string | null
    officialStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    harvestingTime?: HerbalDrugBackgroundUpdateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: NullableStringFieldUpdateOperationsInput | string | null
    primaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDruglImage?: NullableStringFieldUpdateOperationsInput | string | null
    pharmaceuticalName?: StringFieldUpdateOperationsInput | string
  }

  export type PlantNomenclatureCreateManyTaxonomyInput = {
    internalId?: number
    plantScientificName: string
    plantCommonName?: PlantNomenclatureCreateplantCommonNameInput | string[]
    plantPinyin?: string | null
    plantChineseName?: string | null
    links?: PlantNomenclatureCreatelinksInput | string[]
  }

  export type PlantNomenclatureUpdateWithoutTaxonomyInput = {
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: PlantNomenclatureUpdatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUpdateManyWithoutPlantsNestedInput
    synonyms?: PlantSynonymUpdateManyWithoutPlantNestedInput
    morphologies?: PlantMorphologyUpdateManyWithoutPlantsNestedInput
    ecologyDistributions?: PlantEcologyDistributionUpdateOneWithoutPlantNestedInput
    conservation?: PlantConservationUpdateOneWithoutPlantNestedInput
    herbalDrugs?: HerbalDrugBackgroundUpdateManyWithoutPlantNestedInput
    ethnobotanies?: EthnobotanyUpdateOneWithoutPlantNestedInput
  }

  export type PlantNomenclatureUncheckedUpdateWithoutTaxonomyInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: PlantNomenclatureUpdatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUncheckedUpdateManyWithoutPlantsNestedInput
    synonyms?: PlantSynonymUncheckedUpdateManyWithoutPlantNestedInput
    morphologies?: PlantMorphologyUncheckedUpdateManyWithoutPlantsNestedInput
    ecologyDistributions?: PlantEcologyDistributionUncheckedUpdateOneWithoutPlantNestedInput
    conservation?: PlantConservationUncheckedUpdateOneWithoutPlantNestedInput
    herbalDrugs?: HerbalDrugBackgroundUncheckedUpdateManyWithoutPlantNestedInput
    ethnobotanies?: EthnobotanyUncheckedUpdateOneWithoutPlantNestedInput
  }

  export type PlantNomenclatureUncheckedUpdateManyWithoutTaxonomyInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: PlantNomenclatureUpdatelinksInput | string[]
  }

  export type PlantNomenclatureUpdateWithoutMorphologiesInput = {
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: PlantNomenclatureUpdatelinksInput | string[]
    taxonomy?: PlantTaxonomyUpdateOneRequiredWithoutPlantsNestedInput
    botanicalGardenList?: BotanicalGardenUpdateManyWithoutPlantsNestedInput
    synonyms?: PlantSynonymUpdateManyWithoutPlantNestedInput
    ecologyDistributions?: PlantEcologyDistributionUpdateOneWithoutPlantNestedInput
    conservation?: PlantConservationUpdateOneWithoutPlantNestedInput
    herbalDrugs?: HerbalDrugBackgroundUpdateManyWithoutPlantNestedInput
    ethnobotanies?: EthnobotanyUpdateOneWithoutPlantNestedInput
  }

  export type PlantNomenclatureUncheckedUpdateWithoutMorphologiesInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomyId?: IntFieldUpdateOperationsInput | number
    links?: PlantNomenclatureUpdatelinksInput | string[]
    botanicalGardenList?: BotanicalGardenUncheckedUpdateManyWithoutPlantsNestedInput
    synonyms?: PlantSynonymUncheckedUpdateManyWithoutPlantNestedInput
    ecologyDistributions?: PlantEcologyDistributionUncheckedUpdateOneWithoutPlantNestedInput
    conservation?: PlantConservationUncheckedUpdateOneWithoutPlantNestedInput
    herbalDrugs?: HerbalDrugBackgroundUncheckedUpdateManyWithoutPlantNestedInput
    ethnobotanies?: EthnobotanyUncheckedUpdateOneWithoutPlantNestedInput
  }

  export type PlantNomenclatureUncheckedUpdateManyWithoutMorphologiesInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomyId?: IntFieldUpdateOperationsInput | number
    links?: PlantNomenclatureUpdatelinksInput | string[]
  }

  export type PlantNomenclatureUpdateWithoutBotanicalGardenListInput = {
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    links?: PlantNomenclatureUpdatelinksInput | string[]
    taxonomy?: PlantTaxonomyUpdateOneRequiredWithoutPlantsNestedInput
    synonyms?: PlantSynonymUpdateManyWithoutPlantNestedInput
    morphologies?: PlantMorphologyUpdateManyWithoutPlantsNestedInput
    ecologyDistributions?: PlantEcologyDistributionUpdateOneWithoutPlantNestedInput
    conservation?: PlantConservationUpdateOneWithoutPlantNestedInput
    herbalDrugs?: HerbalDrugBackgroundUpdateManyWithoutPlantNestedInput
    ethnobotanies?: EthnobotanyUpdateOneWithoutPlantNestedInput
  }

  export type PlantNomenclatureUncheckedUpdateWithoutBotanicalGardenListInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomyId?: IntFieldUpdateOperationsInput | number
    links?: PlantNomenclatureUpdatelinksInput | string[]
    synonyms?: PlantSynonymUncheckedUpdateManyWithoutPlantNestedInput
    morphologies?: PlantMorphologyUncheckedUpdateManyWithoutPlantsNestedInput
    ecologyDistributions?: PlantEcologyDistributionUncheckedUpdateOneWithoutPlantNestedInput
    conservation?: PlantConservationUncheckedUpdateOneWithoutPlantNestedInput
    herbalDrugs?: HerbalDrugBackgroundUncheckedUpdateManyWithoutPlantNestedInput
    ethnobotanies?: EthnobotanyUncheckedUpdateOneWithoutPlantNestedInput
  }

  export type PlantNomenclatureUncheckedUpdateManyWithoutBotanicalGardenListInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    plantScientificName?: StringFieldUpdateOperationsInput | string
    plantCommonName?: PlantNomenclatureUpdateplantCommonNameInput | string[]
    plantPinyin?: NullableStringFieldUpdateOperationsInput | string | null
    plantChineseName?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomyId?: IntFieldUpdateOperationsInput | number
    links?: PlantNomenclatureUpdatelinksInput | string[]
  }

  export type HerbalDrugBackgroundCreateManyMedicinalPropertyInput = {
    id?: number
    herbalDrugPinyin: string
    plantPartUsed?: string | null
    officialStatus?: boolean | null
    harvestingTime?: HerbalDrugBackgroundCreateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: string | null
    primaryProcessing?: string | null
    secondaryProcessing?: string | null
    herbalDruglImage?: string | null
    plantScientificName: string
  }

  export type HerbalDrugBackgroundUpdateWithoutMedicinalPropertyInput = {
    herbalDrugPinyin?: StringFieldUpdateOperationsInput | string
    plantPartUsed?: NullableStringFieldUpdateOperationsInput | string | null
    officialStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    harvestingTime?: HerbalDrugBackgroundUpdateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: NullableStringFieldUpdateOperationsInput | string | null
    primaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDruglImage?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: PlantNomenclatureUpdateOneRequiredWithoutHerbalDrugsNestedInput
    sourcingBackgrounds?: SourcingBackgroundUpdateOneWithoutHerbalDrugNestedInput
  }

  export type HerbalDrugBackgroundUncheckedUpdateWithoutMedicinalPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    herbalDrugPinyin?: StringFieldUpdateOperationsInput | string
    plantPartUsed?: NullableStringFieldUpdateOperationsInput | string | null
    officialStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    harvestingTime?: HerbalDrugBackgroundUpdateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: NullableStringFieldUpdateOperationsInput | string | null
    primaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDruglImage?: NullableStringFieldUpdateOperationsInput | string | null
    plantScientificName?: StringFieldUpdateOperationsInput | string
    sourcingBackgrounds?: SourcingBackgroundUncheckedUpdateOneWithoutHerbalDrugNestedInput
  }

  export type HerbalDrugBackgroundUncheckedUpdateManyWithoutMedicinalPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    herbalDrugPinyin?: StringFieldUpdateOperationsInput | string
    plantPartUsed?: NullableStringFieldUpdateOperationsInput | string | null
    officialStatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    harvestingTime?: HerbalDrugBackgroundUpdateharvestingTimeInput | $Enums.Month[]
    harvestingTimeNote?: NullableStringFieldUpdateOperationsInput | string | null
    primaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryProcessing?: NullableStringFieldUpdateOperationsInput | string | null
    herbalDruglImage?: NullableStringFieldUpdateOperationsInput | string | null
    plantScientificName?: StringFieldUpdateOperationsInput | string
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