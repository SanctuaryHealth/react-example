import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  JSON: unknown;
};

export enum Accent {
  American = 'american',
  British = 'british',
  French = 'french',
  Spanish = 'spanish'
}

export enum Category {
  AnxietyPanicGeneralizedAnxietyDisorder = 'anxietyPanic_generalizedAnxietyDisorder',
  AnxietyPanicOcd = 'anxietyPanic_ocd',
  AnxietyPanicPanicDisorders = 'anxietyPanic_panicDisorders',
  AnxietyPanicPhobias = 'anxietyPanic_phobias',
  AnxietyPanicPtsd = 'anxietyPanic_ptsd',
  AnxietyPanicSimilarConditions = 'anxietyPanic_similarConditions',
  AnxietyPanicSocialAnxiety = 'anxietyPanic_socialAnxiety',
  DepressionDysthymia = 'depression_dysthymia',
  DepressionMajor = 'depression_major',
  DepressionPostPartum = 'depression_postPartum',
  DepressionSeasonalAffectiveDisorder = 'depression_seasonalAffectiveDisorder',
  DepressionSimilar = 'depression_similar',
  DiabetesGestational = 'diabetes_gestational',
  DiabetesPrediabetes = 'diabetes_prediabetes',
  DiabetesType1 = 'diabetes_type1',
  DiabetesType2 = 'diabetes_type2',
  FitnessGetInShape = 'fitness_getInShape',
  FitnessMobility = 'fitness_mobility',
  FitnessStrength = 'fitness_strength',
  HeartHealthAtrialFibrillation = 'heartHealth_atrialFibrillation',
  HeartHealthCardiovascularDisease = 'heartHealth_cardiovascularDisease',
  HeartHealthCoronaryArteryDisease = 'heartHealth_coronaryArteryDisease',
  HeartHealthHeartFailure = 'heartHealth_heartFailure',
  HeartHealthHighCholesterol = 'heartHealth_highCholesterol',
  HeartHealthHypertension = 'heartHealth_hypertension',
  HeartHealthOtherArrhythmias = 'heartHealth_otherArrhythmias',
  HeartHealthPeripheralArteryDisease = 'heartHealth_peripheralArteryDisease',
  HeartHealthValvularheartDisease = 'heartHealth_valvularheartDisease',
  LearningMentalHealth = 'learning_mentalHealth',
  LearningNutrition = 'learning_nutrition',
  LearningPhysicalHealth = 'learning_physicalHealth',
  LearningSleep = 'learning_sleep',
  LearningWomensHealth = 'learning_womensHealth',
  MeditationAnxiety = 'meditation_anxiety',
  MeditationBodyConfidence = 'meditation_bodyConfidence',
  MeditationBreathwork = 'meditation_breathwork',
  MeditationFocus = 'meditation_focus',
  MeditationGong = 'meditation_gong',
  MeditationGrief = 'meditation_grief',
  MeditationKids = 'meditation_kids',
  MeditationMorning = 'meditation_morning',
  MeditationParental = 'meditation_parental',
  MeditationSexualHealth = 'meditation_sexualHealth',
  MeditationSleep = 'meditation_sleep',
  MeditationSoundscapes = 'meditation_soundscapes',
  MeditationWomensHealth = 'meditation_womensHealth',
  RecipesBreakfast = 'recipes_breakfast',
  RecipesDessert = 'recipes_dessert',
  RecipesGlutenFree = 'recipes_glutenFree',
  RecipesLowCalorie = 'recipes_lowCalorie',
  RecipesMainMeals = 'recipes_mainMeals',
  RecipesMeatFish = 'recipes_meatFish',
  RecipesQuickEasy = 'recipes_quickEasy',
  RecipesSnacks = 'recipes_snacks',
  RecipesVegan = 'recipes_vegan',
  RecipesVegetarian = 'recipes_vegetarian',
  SleepLearning = 'sleep_learning',
  SleepMeditations = 'sleep_meditations',
  SleepSoundscapes = 'sleep_soundscapes',
  SleepStories = 'sleep_stories',
  YogaAdvanced = 'yoga_advanced',
  YogaBeginners = 'yoga_beginners',
  YogaCore = 'yoga_core',
  YogaIntermediate = 'yoga_intermediate',
  YogaMobility = 'yoga_mobility',
  YogaMorning = 'yoga_morning',
  YogaPregnancy = 'yoga_pregnancy',
  YogaRelaxation = 'yoga_relaxation',
  YogaStrength = 'yoga_strength'
}

export enum CategoryType {
  AnxietyPanic = 'anxietyPanic',
  Depression = 'depression',
  Diabetes = 'diabetes',
  Fitness = 'fitness',
  HeartHealth = 'heartHealth',
  Learning = 'learning',
  Meditation = 'meditation',
  Recipes = 'recipes',
  Sleep = 'sleep',
  Yoga = 'yoga'
}

export enum ContentFormat {
  Article = 'article',
  Audio = 'audio',
  VideoAnimated = 'video_animated',
  VideoFilmStudio = 'video_filmStudio',
  VideoHomeStudio = 'video_homeStudio'
}

export enum ContentLicence {
  Api = 'api',
  File = 'file'
}

export enum ContentType {
  Post = 'post',
  Recipe = 'recipe',
  Series = 'series'
}

export type ContentUnion = Post | Recipe | Series;

export type Creator = {
  __typename?: 'Creator';
  /** Creator's accent */
  accent: Accent;
  /** Creator's bio */
  bio: Scalars['String'];
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** Soft delete time given as the ISO Date string */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** Episodes by creator */
  episodes: Array<Episode>;
  /** Creator's gender */
  gender: Gender;
  /** UUID of creator */
  id: Scalars['String'];
  /** Creator's language */
  language: Language;
  /** Creator's name */
  name: Scalars['String'];
  /** Photo of creator */
  photoFileDetails: FileDetails;
  /** Posts by creator */
  posts: Array<Post>;
  /** Recipes by creator */
  recipes: Array<Recipe>;
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Discount = {
  __typename?: 'Discount';
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** The discount value */
  discountValue: Scalars['Float'];
  /** The content that the discount are applied to */
  discountedContent: Array<ContentUnion>;
  /** The content which applied the discount */
  discountingContent: ContentUnion;
  /** The content id which applied the discount */
  discountingContentId: Scalars['String'];
  /** Type of discounting content object */
  discountingContentType: ContentType;
  /** UUID of discount */
  id: Scalars['String'];
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Episode = {
  __typename?: 'Episode';
  /** Approximate consumption time for episode given in minutes */
  approximateTime: Scalars['Int'];
  /** Rich text content of episode given as JSON string of raw DraftJs content state */
  content?: Maybe<Scalars['String']>;
  /** Rich text content of episode given as JSON string of HTML */
  contentHTML?: Maybe<Scalars['String']>;
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** Creator of episode */
  creator: Creator;
  /** Id of creator of episode */
  creatorId: Scalars['String'];
  /** Soft delete time given as the ISO Date string */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** Description of episode */
  description: Scalars['String'];
  /** ICD-10 codes for the episode */
  icd10?: Maybe<Array<Scalars['String']>>;
  /** UUID of episode */
  id: Scalars['String'];
  /** Keywords for the episode */
  keywords?: Maybe<Array<Scalars['String']>>;
  /** Learning outcome for the episode */
  learningOutcome?: Maybe<Scalars['String']>;
  /** Media content for episode */
  mediaFileDetailsList: Array<FileDetails>;
  /** Display photo for episode */
  photoFileDetails: FileDetails;
  /** Position of episode in series episode is included in */
  position: Scalars['Int'];
  /** Script content for episode */
  scriptFileDetails?: Maybe<FileDetails>;
  /** Series episode is included in */
  series: Series;
  /** Id of series episode is included in */
  seriesId: Scalars['String'];
  /** Title of episode */
  title: Scalars['String'];
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type File = {
  __typename?: 'File';
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** Soft delete time given as the ISO Date string */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** Encoding of file */
  encoding: Scalars['String'];
  /** File details object associated with this file */
  fileDetails: FileDetails;
  /** Filename of file */
  filename: Scalars['String'];
  /** UUID of file */
  id: Scalars['String'];
  /** MIME type of file */
  mimetype: Scalars['String'];
  /** Size of file in Bytes */
  size: Scalars['Float'];
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** URL of file */
  url: Scalars['String'];
};

export type FileDetails = {
  __typename?: 'FileDetails';
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** Soft delete time given as the ISO Date string */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** Associated file */
  file: File;
  /** Type of file object */
  fileType: FileDetailsType;
  /** UUID of file */
  id: Scalars['String'];
  /** Orientation of file */
  orientation?: Maybe<Orientation>;
  /** Parent of the file union */
  parent: FileDetailsParentUnion;
  /** UUID of parent object */
  parentId: Scalars['String'];
  /** Type of parent object */
  parentType: FileDetailsParentType;
  /** Subtitle language of file */
  subtitles?: Maybe<Language>;
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum FileDetailsParentType {
  Creator = 'creator',
  EpisodeMedia = 'episodeMedia',
  EpisodePhoto = 'episodePhoto',
  EpisodeScript = 'episodeScript',
  PostMedia = 'postMedia',
  PostParent = 'postParent',
  PostScript = 'postScript',
  Recipe = 'recipe',
  RecipeParent = 'recipeParent',
  SeriesParent = 'seriesParent'
}

export type FileDetailsParentUnion = Creator | Episode | Post | PostParent | Recipe | RecipeParent | SeriesParent;

export enum FileDetailsType {
  Audio = 'audio',
  Document = 'document',
  Pdf = 'pdf',
  Photo = 'photo',
  Video = 'video'
}

export type GcsFile = {
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  size: Scalars['Float'];
  tempName: Scalars['String'];
};

export enum Gender {
  Female = 'female',
  Male = 'male'
}

export type IngredientListItem = {
  __typename?: 'IngredientListItem';
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** Plural of custom unit */
  customUnitPlural?: Maybe<Scalars['String']>;
  /** Singular of custom unit */
  customUnitSingular?: Maybe<Scalars['String']>;
  /** Soft delete time given as the ISO Date string */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** UUID of ingredient list item */
  id: Scalars['String'];
  /** Ingredient */
  ingredient: Scalars['String'];
  /** Quantity of ingredient */
  quantity: Scalars['Float'];
  /** Recipe of ingredient list item */
  recipe: Recipe;
  /** Id of recipe of ingredient list item */
  recipeId: Scalars['String'];
  /** Unit of quantity */
  unit: Unit;
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum Language {
  English = 'english',
  French = 'french',
  Spanish = 'spanish'
}

export type ManagementRole = {
  __typename?: 'ManagementRole';
  canDemoteFrom: Array<ManagementRole>;
  canPromoteTo: Array<ManagementRole>;
  canUpdatePermissions: Array<ManagementRole>;
  contentManage: Scalars['Boolean'];
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** Soft delete time given as the ISO Date string */
  deletedAt?: Maybe<Scalars['DateTime']>;
  employeesAdd: Scalars['Boolean'];
  employeesDelete: Scalars['Boolean'];
  employeesUpdate: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  organization: Organization;
  organizationId: Scalars['String'];
  organizationUpdateDetails: Scalars['Boolean'];
  roleAdd: Scalars['Boolean'];
  roleDelete: Scalars['Boolean'];
  superAdmin: Scalars['Boolean'];
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
  users: Array<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAdminUser: User;
  addContentOrganization: Organization;
  addCreator: Creator;
  addDemoRequest: Scalars['Boolean'];
  addDiscount: Discount;
  addEpisode: Episode;
  addManagementRole: ManagementRole;
  addPost: Post;
  addPostParent: PostParent;
  addRecipe: Recipe;
  addRecipeParent: RecipeParent;
  addSeries: Series;
  addSeriesParent: SeriesParent;
  addSuggestedContentToPlan: OrganizationPlan;
  addUserToOrganization: OrganizationPlan;
  confirmPlanAdditions: OrganizationPlan;
  deleteCreator: Creator;
  deleteDiscount: Discount;
  deleteEmployee: OrganizationPlan;
  deleteEpisode: Episode;
  deleteManagementRole: ManagementRole;
  deleteOrganization: Organization;
  deletePost: Post;
  deletePostParent: PostParent;
  deleteRecipe: Recipe;
  deleteRecipeParent: RecipeParent;
  deleteSeries: Series;
  deleteSeriesParent: SeriesParent;
  deleteUser: User;
  getUsers: Array<User>;
  isUniqueUser: Scalars['Boolean'];
  isValidOnboardingOrganization?: Maybe<Organization>;
  onboardEmployeeToOrganization: User;
  onboardOwnerToOrganization: Organization;
  regenerateOrganizationPlanApiKey: OrganizationPlan;
  requestBespokeContentEmail: Scalars['Boolean'];
  sendForgotPasswordEmail: Scalars['Boolean'];
  sendInvitationEmail: Organization;
  sendVerificationEmail: Scalars['Boolean'];
  sendWelcomeEmail: Scalars['Boolean'];
  updateCreator: Creator;
  updateDiscount: Discount;
  updateEmployeeRole: OrganizationPlan;
  updateEpisode: Episode;
  updateManagementRole: ManagementRole;
  updateOrganization: Organization;
  updateOrganizationPlan: OrganizationPlan;
  updateOrganizationPlanPreferences: OrganizationPlan;
  updatePlanContent: OrganizationPlan;
  updatePost: Post;
  updatePostParent: PostParent;
  updateRecipe: Recipe;
  updateRecipeParent: RecipeParent;
  updateSeries: Series;
  updateSeriesParent: SeriesParent;
  updateUser: User;
};


export type MutationAddAdminUserArgs = {
  newAdminUserData: NewAdminUserData;
};


export type MutationAddContentOrganizationArgs = {
  newOrganizationData: NewOrganizationData;
  newOrganizationPlanData: NewOrganizationPlanData;
};


export type MutationAddCreatorArgs = {
  newCreatorData: NewCreatorData;
};


export type MutationAddDemoRequestArgs = {
  newDemoRequestData: NewDemoRequestData;
};


export type MutationAddDiscountArgs = {
  discountValue: Scalars['Float'];
  discountedContentIds: Array<Scalars['String']>;
  discountingContentId: Scalars['String'];
  discountingContentType: ContentType;
};


export type MutationAddEpisodeArgs = {
  newEpisodeData: NewEpisodeData;
  seriesId: Scalars['String'];
};


export type MutationAddManagementRoleArgs = {
  newManagementRoleData: NewManagementRoleData;
  organizationId: Scalars['String'];
};


export type MutationAddPostArgs = {
  newPostData: NewPostData;
  postParentId: Scalars['String'];
};


export type MutationAddPostParentArgs = {
  newPostParentData: NewPostParentData;
};


export type MutationAddRecipeArgs = {
  newRecipeData: NewRecipeData;
  recipeParentId: Scalars['String'];
};


export type MutationAddRecipeParentArgs = {
  newRecipeParentData: NewRecipeParentData;
};


export type MutationAddSeriesArgs = {
  newSeriesData: NewSeriesData;
  seriesParentId: Scalars['String'];
};


export type MutationAddSeriesParentArgs = {
  newSeriesParentData: NewSeriesParentData;
};


export type MutationAddSuggestedContentToPlanArgs = {
  categoryType?: InputMaybe<CategoryType>;
  organizationPlanId: Scalars['String'];
};


export type MutationAddUserToOrganizationArgs = {
  email: Scalars['String'];
  managementRoleIds: Array<Scalars['String']>;
  organizationId: Scalars['String'];
};


export type MutationConfirmPlanAdditionsArgs = {
  organizationPlanId: Scalars['String'];
};


export type MutationDeleteCreatorArgs = {
  creatorId: Scalars['String'];
};


export type MutationDeleteDiscountArgs = {
  discountId: Scalars['String'];
};


export type MutationDeleteEmployeeArgs = {
  organizationId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationDeleteEpisodeArgs = {
  episodeId: Scalars['String'];
};


export type MutationDeleteManagementRoleArgs = {
  managementRoleId: Scalars['String'];
};


export type MutationDeleteOrganizationArgs = {
  organizationId: Scalars['String'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['String'];
};


export type MutationDeletePostParentArgs = {
  postParentId: Scalars['String'];
};


export type MutationDeleteRecipeArgs = {
  recipeId: Scalars['String'];
};


export type MutationDeleteRecipeParentArgs = {
  recipeParentId: Scalars['String'];
};


export type MutationDeleteSeriesArgs = {
  seriesId: Scalars['String'];
};


export type MutationDeleteSeriesParentArgs = {
  seriesParentId: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type MutationGetUsersArgs = {
  sequelizeQuery?: InputMaybe<SequelizeQuery>;
};


export type MutationIsUniqueUserArgs = {
  email: Scalars['String'];
};


export type MutationIsValidOnboardingOrganizationArgs = {
  organizationId: Scalars['String'];
};


export type MutationOnboardEmployeeToOrganizationArgs = {
  organizationId: Scalars['String'];
  password: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationOnboardOwnerToOrganizationArgs = {
  contractType?: InputMaybe<TermsAndConditionsStatus>;
  newEmployeeUserData: NewEmployeeUserData;
  organizationId: Scalars['String'];
};


export type MutationRegenerateOrganizationPlanApiKeyArgs = {
  organizationPlanId: Scalars['String'];
};


export type MutationRequestBespokeContentEmailArgs = {
  categories: Array<CategoryType>;
  email: Scalars['String'];
  message?: InputMaybe<Scalars['String']>;
  organizationId: Scalars['String'];
};


export type MutationSendForgotPasswordEmailArgs = {
  email: Scalars['String'];
};


export type MutationSendInvitationEmailArgs = {
  organizationId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationSendVerificationEmailArgs = {
  email: Scalars['String'];
};


export type MutationSendWelcomeEmailArgs = {
  userId: Scalars['String'];
};


export type MutationUpdateCreatorArgs = {
  creatorId: Scalars['String'];
  updateCreatorData: UpdateCreatorData;
};


export type MutationUpdateDiscountArgs = {
  discountId: Scalars['String'];
  discountValue?: InputMaybe<Scalars['Float']>;
  discountedContentIds?: InputMaybe<Array<Scalars['String']>>;
  discountingContentId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateEmployeeRoleArgs = {
  managementRoleIds: Array<Scalars['String']>;
  organizationId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationUpdateEpisodeArgs = {
  episodeId: Scalars['String'];
  updateEpisodeData: UpdateEpisodeData;
};


export type MutationUpdateManagementRoleArgs = {
  managementRoleId: Scalars['String'];
  updatedManagementRoleData: UpdateManagementRoleData;
};


export type MutationUpdateOrganizationArgs = {
  organizationId: Scalars['String'];
  updatedOrganizationData: UpdateOrganizationData;
};


export type MutationUpdateOrganizationPlanArgs = {
  organizationPlanId: Scalars['String'];
  updateOrganizationPlanData: UpdateOrganizationPlanData;
};


export type MutationUpdateOrganizationPlanPreferencesArgs = {
  organizationPlanId: Scalars['String'];
  updateOrganizationPlanDataPreferences: UpdateOrganizationPlanPreferencesData;
};


export type MutationUpdatePlanContentArgs = {
  contentIds: Array<Scalars['String']>;
  contentType: ContentType;
  organizationPlanId: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  postId: Scalars['String'];
  updatePostData: UpdatePostData;
};


export type MutationUpdatePostParentArgs = {
  postParentId: Scalars['String'];
  updatePostParentData: UpdatePostParentData;
};


export type MutationUpdateRecipeArgs = {
  recipeId: Scalars['String'];
  updateRecipeData: UpdateRecipeData;
};


export type MutationUpdateRecipeParentArgs = {
  recipeParentId: Scalars['String'];
  updateRecipeParentData: UpdateRecipeParentData;
};


export type MutationUpdateSeriesArgs = {
  seriesId: Scalars['String'];
  updatedSeriesData: UpdateSeriesData;
};


export type MutationUpdateSeriesParentArgs = {
  seriesParentId: Scalars['String'];
  updateSeriesParentData: UpdateSeriesParentData;
};


export type MutationUpdateUserArgs = {
  updatedUserData: UpdateUserData;
  userId: Scalars['String'];
};

export type NewAdminUserData = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type NewCreatorData = {
  accent: Accent;
  bio: Scalars['String'];
  gender: Gender;
  language: Language;
  name: Scalars['String'];
  photoFileDetails: NewFileDetails;
};

export type NewDemoRequestData = {
  company: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type NewEmployeeUserData = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type NewEpisodeData = {
  approximateTime: Scalars['Int'];
  content?: InputMaybe<Scalars['String']>;
  creatorId: Scalars['String'];
  description: Scalars['String'];
  icd10?: InputMaybe<Array<Scalars['String']>>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  learningOutcome?: InputMaybe<Scalars['String']>;
  mediaFileDetailsList?: InputMaybe<Array<NewFileDetails>>;
  photoFileDetails: NewFileDetails;
  position: Scalars['Int'];
  scriptFileDetails?: InputMaybe<NewFileDetails>;
  title: Scalars['String'];
};

export type NewFileDetails = {
  file?: InputMaybe<GcsFile>;
  fileType?: InputMaybe<FileDetailsType>;
  /** Orientation of file */
  orientation?: InputMaybe<Orientation>;
  /** Subtitle language of file */
  subtitles?: InputMaybe<Language>;
};

export type NewIngredientListItem = {
  customUnitPlural?: InputMaybe<Scalars['String']>;
  customUnitSingular?: InputMaybe<Scalars['String']>;
  ingredient: Scalars['String'];
  quantity: Scalars['Float'];
  unit: Unit;
};

export type NewManagementRoleData = {
  canDemoteFromIds: Array<Scalars['String']>;
  canPromoteToIds: Array<Scalars['String']>;
  canUpdatePermissionsIds: Array<Scalars['String']>;
  contentManage: Scalars['Boolean'];
  employeesAdd: Scalars['Boolean'];
  employeesDelete: Scalars['Boolean'];
  employeesUpdate: Scalars['Boolean'];
  name: Scalars['String'];
  organizationUpdateDetails: Scalars['Boolean'];
  roleAdd: Scalars['Boolean'];
  roleDelete: Scalars['Boolean'];
  superAdmin: Scalars['Boolean'];
};

export type NewOrganizationData = {
  /** Version of the Terms and Conditions document */
  contractType: TermsAndConditionsStatus;
  name: Scalars['String'];
};

export type NewOrganizationPlanData = {
  activePlanCapacity: Scalars['Int'];
  /** Preferences for the order of categorys to show on the platform */
  categoryTypePreferences?: InputMaybe<Array<CategoryType>>;
  contentLicenceType: ContentLicence;
  /** Prefernce for including the scripts of content downloading content */
  includedScriptPreference?: InputMaybe<Scalars['Boolean']>;
  /** Preferences for the orientation of video content you want to add to your library */
  orientationPreferences?: InputMaybe<Array<Orientation>>;
  /** Preference for the addition of any included subtitle content to your library */
  subtitlePreferences?: InputMaybe<Array<Language>>;
  suggestedPostIds?: InputMaybe<Array<Scalars['String']>>;
  suggestedRecipeIds?: InputMaybe<Array<Scalars['String']>>;
  suggestedSeriesIds?: InputMaybe<Array<Scalars['String']>>;
  totalPlanCapacity: Scalars['Int'];
};

export type NewPostData = {
  approximateTime: Scalars['Int'];
  content?: InputMaybe<Scalars['String']>;
  contentFormat: ContentFormat;
  contentValue: Scalars['Int'];
  creatorId: Scalars['String'];
  description: Scalars['String'];
  icd10?: InputMaybe<Array<Scalars['String']>>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  language: Language;
  learningOutcome?: InputMaybe<Scalars['String']>;
  mediaFileDetailsList?: InputMaybe<Array<NewFileDetails>>;
  scriptFileDetails?: InputMaybe<NewFileDetails>;
  title: Scalars['String'];
  topic?: InputMaybe<Array<Topic>>;
};

export type NewPostParentData = {
  category: Array<Category>;
  clinicallyVerified: Scalars['Boolean'];
  featured: Scalars['Boolean'];
  photoFileDetails: NewFileDetails;
  universalTitle: Scalars['String'];
  unlisted: Scalars['Boolean'];
};

export type NewRecipeData = {
  contentValue: Scalars['Int'];
  creatorId: Scalars['String'];
  description: Scalars['String'];
  format: RecipeFormat;
  ingredientsList: Array<NewIngredientListItem>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  language: Language;
  mediaFileDetailsList?: InputMaybe<Array<NewFileDetails>>;
  method: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type NewRecipeParentData = {
  approximateTime: Scalars['Int'];
  calories: Scalars['Int'];
  category: Array<Category>;
  featured: Scalars['Boolean'];
  photoFileDetails: NewFileDetails;
  servings: Scalars['Int'];
  tags: Array<RecipeTag>;
  universalTitle: Scalars['String'];
  unlisted: Scalars['Boolean'];
};

export type NewSeriesData = {
  contentFormat: ContentFormat;
  contentValue: Scalars['Int'];
  description: Scalars['String'];
  icd10?: InputMaybe<Array<Scalars['String']>>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  language: Language;
  learningOutcome?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  topic?: InputMaybe<Array<Topic>>;
};

export type NewSeriesParentData = {
  category: Array<Category>;
  clinicallyVerified: Scalars['Boolean'];
  featured: Scalars['Boolean'];
  photoFileDetails: NewFileDetails;
  universalTitle: Scalars['String'];
  unlisted: Scalars['Boolean'];
};

export type Organization = {
  __typename?: 'Organization';
  /** Date of when the Terms and Conditions where agreed upon */
  contractSignedDate?: Maybe<Scalars['DateTime']>;
  /** Version of the Terms and Conditions document */
  contractType: TermsAndConditionsStatus;
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** Soft delete time given as the ISO Date string */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** Employees registered with organization */
  employees: Array<User>;
  /** UUID of organization */
  id: Scalars['String'];
  /** Management roles of organization */
  managementRoles: Array<ManagementRole>;
  /** Name of organization */
  name: Scalars['String'];
  /** The content plan of the organization */
  plan: OrganizationPlan;
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrganizationContent = {
  __typename?: 'OrganizationContent';
  /** Discount applied to this content at purchase */
  appliedDiscount?: Maybe<Scalars['Int']>;
  /** Parent of the organization content */
  content: ContentUnion;
  /** The content id added to the plan */
  contentId: Scalars['String'];
  /** The content type added to the plan */
  contentType: ContentType;
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** The plan that has added this content */
  organizationPlan: OrganizationPlan;
  /** The plan id that has added this content */
  organizationPlanId: Scalars['String'];
  /** Status of the content */
  status: OrganizationContentStatus;
  /** Credits spent on this content */
  transactionValue?: Maybe<Scalars['Int']>;
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum OrganizationContentStatus {
  AddUnconfirmed = 'addUnconfirmed',
  Confirmed = 'confirmed',
  Removed = 'removed'
}

export type OrganizationPlan = {
  __typename?: 'OrganizationPlan';
  /** The maximum active capacity of the plan */
  activePlanCapacity: Scalars['Int'];
  /** API key for organization plan  */
  apiKey?: Maybe<Scalars['String']>;
  /** Preferences for the order of categories to show on the platform */
  categoryTypePreferences?: Maybe<Array<CategoryType>>;
  /** Licence type for the content licence plan */
  contentLicenceType: ContentLicence;
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** Soft delete time given as the ISO Date string */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** UUID of organization plan */
  id: Scalars['String'];
  /** Prefernce for including the scripts of content downloading content */
  includedScriptPreference?: Maybe<Scalars['Boolean']>;
  /** The organization the plan is part of */
  organization: Organization;
  /** The content in the plan */
  organizationContent: Array<OrganizationContent>;
  /** The id of the organization the plan is part of */
  organizationId: Scalars['String'];
  /** The suggested posts for the plan */
  organizationSuggestedPosts: Array<Post>;
  /** The suggested recipes for the plan */
  organizationSuggestedRecipes: Array<Recipe>;
  /** The suggested series for the plan */
  organizationSuggestedSeries: Array<Series>;
  /** Preferences for the orientation of video content you want to add to your library */
  orientationPreferences?: Maybe<Array<Orientation>>;
  /** Preference for the addition of any included subtitle content to your library */
  subtitlePreferences?: Maybe<Array<Language>>;
  /** The maximum total capacity of the plan */
  totalPlanCapacity: Scalars['Int'];
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum Orientation {
  Landscape = 'landscape',
  Portrait = 'portrait'
}

export type Post = {
  __typename?: 'Post';
  /** Discounts that apply to this post */
  appliableDiscounts: Array<Discount>;
  /** Approximate consumption time for post given in minutes */
  approximateTime: Scalars['Int'];
  /** Rich text content of post given as JSON string of raw DraftJs content state */
  content?: Maybe<Scalars['String']>;
  /** Format of content */
  contentFormat: ContentFormat;
  /** Rich text content of post given as JSON string of HTML */
  contentHTML?: Maybe<Scalars['String']>;
  /** Content value of post */
  contentValue: Scalars['Float'];
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** Creator of post */
  creator: Creator;
  /** Creator id of post */
  creatorId: Scalars['String'];
  /** Soft delete time given as the ISO Date string */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** Description of post */
  description: Scalars['String'];
  /** Discounts available when owning this post */
  discountsApplied: Array<Discount>;
  /** ICD-10 code for the post */
  icd10?: Maybe<Array<Scalars['String']>>;
  /** UUID of post */
  id: Scalars['String'];
  /** Keywords for the post */
  keywords?: Maybe<Array<Scalars['String']>>;
  /** Language of post */
  language: Language;
  /** Learning outcome for the post */
  learningOutcome?: Maybe<Scalars['String']>;
  /** Media content for post */
  mediaFileDetailsList: Array<FileDetails>;
  /** Organization content status */
  organizationContentList: Array<OrganizationContent>;
  /** Parent of post */
  postParent: PostParent;
  /** Parent id of post */
  postParentId: Scalars['String'];
  /** Script for post */
  scriptFileDetails?: Maybe<FileDetails>;
  /** Title of post */
  title: Scalars['String'];
  /** Topic of the post */
  topic?: Maybe<Array<Topic>>;
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostParent = {
  __typename?: 'PostParent';
  /** List of categories post parent is included in */
  category: Array<Category>;
  /** Flag indicating if content has been clinically verified */
  clinicallyVerified: Scalars['Boolean'];
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** Soft delete time given as the ISO Date string */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** Flag indicating if post parent is featured for promotion */
  featured: Scalars['Boolean'];
  /** UUID of post parent */
  id: Scalars['String'];
  /** Display photo for post parent */
  photoFileDetails: FileDetails;
  /** Posts of post parent */
  posts: Array<Post>;
  /** Universal title of post parent */
  universalTitle: Scalars['String'];
  /** Flag indicating if post parent's content is unlisted */
  unlisted: Scalars['Boolean'];
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  getCreators: Array<Creator>;
  getDiscounts: Array<Discount>;
  getEpisodes: Array<Episode>;
  getFiles: Array<File>;
  getManagementRoles: Array<ManagementRole>;
  getOrganizationPlans: Array<OrganizationPlan>;
  getOrganizations: Array<Organization>;
  getPostParents: Array<PostParent>;
  getPosts: Array<Post>;
  getRecipeParents: Array<RecipeParent>;
  getRecipes: Array<Recipe>;
  getSeries: Array<Series>;
  getSeriesParents: Array<SeriesParent>;
  getSignedFile: SignedFile;
  getUserHeadCount: Scalars['Int'];
  getUsers: Array<User>;
  isUniqueUser: Scalars['Boolean'];
  isValidOnboardingOrganization?: Maybe<Organization>;
  sendForgotPasswordEmail: Scalars['Boolean'];
  sendVerificationEmail: Scalars['Boolean'];
};


export type QueryGetCreatorsArgs = {
  sequelizeQuery?: InputMaybe<SequelizeQuery>;
};


export type QueryGetDiscountsArgs = {
  sequelizeQuery?: InputMaybe<SequelizeQuery>;
};


export type QueryGetEpisodesArgs = {
  sequelizeQuery?: InputMaybe<SequelizeQuery>;
};


export type QueryGetFilesArgs = {
  sequelizeQuery?: InputMaybe<SequelizeQuery>;
};


export type QueryGetManagementRolesArgs = {
  sequelizeQuery?: InputMaybe<SequelizeQuery>;
};


export type QueryGetOrganizationPlansArgs = {
  sequelizeQuery?: InputMaybe<SequelizeQuery>;
};


export type QueryGetOrganizationsArgs = {
  sequelizeQuery?: InputMaybe<SequelizeQuery>;
};


export type QueryGetPostParentsArgs = {
  sequelizeQuery?: InputMaybe<SequelizeQuery>;
};


export type QueryGetPostsArgs = {
  sequelizeQuery?: InputMaybe<SequelizeQuery>;
};


export type QueryGetRecipeParentsArgs = {
  sequelizeQuery?: InputMaybe<SequelizeQuery>;
};


export type QueryGetRecipesArgs = {
  sequelizeQuery?: InputMaybe<SequelizeQuery>;
};


export type QueryGetSeriesArgs = {
  sequelizeQuery?: InputMaybe<SequelizeQuery>;
};


export type QueryGetSeriesParentsArgs = {
  sequelizeQuery?: InputMaybe<SequelizeQuery>;
};


export type QueryGetSignedFileArgs = {
  fileName: Scalars['String'];
};


export type QueryGetUserHeadCountArgs = {
  organizationId: Scalars['String'];
  sequelizeQuery?: InputMaybe<SequelizeQuery>;
};


export type QueryGetUsersArgs = {
  sequelizeQuery?: InputMaybe<SequelizeQuery>;
};


export type QueryIsUniqueUserArgs = {
  email: Scalars['String'];
};


export type QueryIsValidOnboardingOrganizationArgs = {
  organizationId: Scalars['String'];
};


export type QuerySendForgotPasswordEmailArgs = {
  email: Scalars['String'];
};


export type QuerySendVerificationEmailArgs = {
  email: Scalars['String'];
};

export type Recipe = {
  __typename?: 'Recipe';
  /** Discounts that apply to this recipe */
  appliableDiscounts: Array<Discount>;
  /** Content value of recipe */
  contentValue: Scalars['Float'];
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** Creator of recipe */
  creator: Creator;
  /** Creator id of recipe */
  creatorId: Scalars['String'];
  /** Soft delete time given as the ISO Date string */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** Description of recipe */
  description: Scalars['String'];
  /** Discounts available when owning this recipe */
  discountsApplied: Array<Discount>;
  /** Unit format of the ingredients (Imperial/ Metric) */
  format: RecipeFormat;
  /** UUID of recipe */
  id: Scalars['String'];
  /** Ingredients list for recipe */
  ingredientsList: Array<IngredientListItem>;
  /** Keywords for the recipe */
  keywords?: Maybe<Array<Scalars['String']>>;
  /** Language of recipe */
  language: Language;
  /** Media content for recipe */
  mediaFileDetailsList: Array<FileDetails>;
  /** Preparation steps for recipe */
  method: Array<Scalars['String']>;
  /** Organization content status */
  organizationContentList: Array<OrganizationContent>;
  /** Parent of recipe */
  recipeParent: RecipeParent;
  /** Parent id of recipe */
  recipeParentId: Scalars['String'];
  /** Title of recipe */
  title: Scalars['String'];
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum RecipeFormat {
  Imperial = 'imperial',
  Metric = 'metric'
}

export type RecipeParent = {
  __typename?: 'RecipeParent';
  /** Approximate preparation time for recipe parent given in minutes */
  approximateTime: Scalars['Int'];
  /** Approximate calorie count per serving of prepared food */
  calories: Scalars['Int'];
  /** List of categories recipe parent is included in */
  category: Array<Category>;
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** Soft delete time given as the ISO Date string */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** Flag indicating if recipe parent is featured for promotion */
  featured: Scalars['Boolean'];
  /** UUID of recipe parent */
  id: Scalars['String'];
  /** Display photo for recipe parent */
  photoFileDetails: FileDetails;
  /** Recipes of the recipe parent */
  recipes: Array<Recipe>;
  /** Expected servings for recipe parent */
  servings: Scalars['Int'];
  /** Tags of recipe parent */
  tags: Array<RecipeTag>;
  /** Universal title of recipe parent */
  universalTitle: Scalars['String'];
  /** Flag indicating if recipe parent's content is unlisted */
  unlisted: Scalars['Boolean'];
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum RecipeTag {
  ContainsNuts = 'containsNuts',
  DairyFree = 'dairyFree',
  GlutenFree = 'glutenFree',
  Ketogenic = 'ketogenic',
  Pescatarian = 'pescatarian',
  Vegan = 'vegan',
  Vegetarian = 'vegetarian'
}

export type SequelizeQuery = {
  /** Details what attributes to group. Note: If you wish to order by an attribute of a nested model, you must include that model and attribute in the requested data OR include feature. */
  group?: InputMaybe<Scalars['JSON']>;
  /** Details what additional linked data is eagerly fetched (this is also generated automatically based on what data you request, with both joined), and the conditions additional data must meet to be fetched (see “left” and “right” joins). */
  include?: InputMaybe<Scalars['JSON']>;
  /** Corresponds to the maximum number of items returned. Can be used in conjunction with “Offset” and “Order” to implement pagination. */
  limit?: InputMaybe<Scalars['Int']>;
  /** Corresponds to the number of items skipped before the first returned result. Can be used in conjunction with “Limit” and “Order” to implement pagination. */
  offset?: InputMaybe<Scalars['Int']>;
  /** Details what attributes and direction results are ordered by. Can be used in conjunction with “Offset” and “Limit” to implement pagination. Note: If you wish to order by an attribute of a nested model, you must include that model and attribute in the requested data OR include feature */
  order?: InputMaybe<Scalars['JSON']>;
  /** Details requirements of requested model’s attributes to be included in the results. Used to specifically request data that fits a condition.  */
  where?: InputMaybe<Scalars['JSON']>;
};

export type Series = {
  __typename?: 'Series';
  /** Discounts that apply to this series */
  appliableDiscounts: Array<Discount>;
  /** Format of content */
  contentFormat: ContentFormat;
  /** Content value of series */
  contentValue: Scalars['Float'];
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** Soft delete time given as the ISO Date string */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** Description of series */
  description: Scalars['String'];
  /** Discounts available when owning this series */
  discountsApplied: Array<Discount>;
  /** Episodes of series */
  episodes: Array<Episode>;
  /** ICD-10 codes for the series */
  icd10?: Maybe<Array<Scalars['String']>>;
  /** UUID of series */
  id: Scalars['String'];
  /** Keywords for the series */
  keywords?: Maybe<Array<Scalars['String']>>;
  /** Language of series */
  language: Language;
  /** Learning outcome for the series */
  learningOutcome?: Maybe<Scalars['String']>;
  /** Organization content status */
  organizationContentList: Array<OrganizationContent>;
  /** Parent of series */
  seriesParent: SeriesParent;
  /** Parent id of series */
  seriesParentId: Scalars['String'];
  /** Title of series */
  title: Scalars['String'];
  /** Topics of the series */
  topic?: Maybe<Array<Topic>>;
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SeriesParent = {
  __typename?: 'SeriesParent';
  /** List of categories series parent is included in */
  category: Array<Category>;
  /** Flag indicating if content has been clinically verified */
  clinicallyVerified: Scalars['Boolean'];
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** Soft delete time given as the ISO Date string */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** Flag indicating if series parent is featured for promotion */
  featured: Scalars['Boolean'];
  /** UUID of series parent */
  id: Scalars['String'];
  /** Display photo for series parent */
  photoFileDetails: FileDetails;
  /** Series of the series parent */
  series: Array<Series>;
  /** Universal title of series */
  universalTitle: Scalars['String'];
  /** Flag indicating if series parent's content is unlisted */
  unlisted: Scalars['Boolean'];
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SignedFields = {
  __typename?: 'SignedFields';
  key: Scalars['String'];
  policy: Scalars['String'];
  xGoogAlgorithm: Scalars['String'];
  xGoogCredential: Scalars['String'];
  xGoogDate: Scalars['String'];
  xGoogSignature: Scalars['String'];
};

export type SignedFile = {
  __typename?: 'SignedFile';
  fields: SignedFields;
  url: Scalars['String'];
};

export enum TermsAndConditionsStatus {
  Custom = 'custom',
  StandardMay22 = 'standardMay22'
}

export enum Topic {
  AnatomyBody = 'anatomyBody',
  AnxietySeniors = 'anxietySeniors',
  CareerWork = 'careerWork',
  Causes = 'causes',
  Comorbidities = 'comorbidities',
  DiabetesSeniors = 'diabetesSeniors',
  Diagnosis = 'diagnosis',
  ExperimentalTherapies = 'experimentalTherapies',
  Fitness = 'fitness',
  Lifestyle = 'lifestyle',
  LossGrief = 'lossGrief',
  MedicalInterventions = 'medicalInterventions',
  Medications = 'medications',
  MentalHealth = 'mentalHealth',
  MentalHealthExercises = 'mentalHealthExercises',
  NonMedicationTreatment = 'nonMedicationTreatment',
  Nutrition = 'nutrition',
  PanicAttacks = 'panicAttacks',
  Relationships = 'relationships',
  RisksComplications = 'risksComplications',
  SeniorsDepression = 'seniorsDepression',
  Sleep = 'sleep',
  Support = 'support',
  Surgeries = 'surgeries',
  Symptoms = 'symptoms',
  Testing = 'testing',
  Treatment = 'treatment',
  WomensHealth = 'womensHealth'
}

export enum Unit {
  Cups = 'cups',
  Custom = 'custom',
  Grams = 'grams',
  Milliliters = 'milliliters',
  None = 'none',
  Ounces = 'ounces',
  Teaspoons = 'teaspoons'
}

export type UpdateCreatorData = {
  accent?: InputMaybe<Accent>;
  bio?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  language?: InputMaybe<Language>;
  name?: InputMaybe<Scalars['String']>;
  photoFileDetails?: InputMaybe<NewFileDetails>;
};

export type UpdateEpisodeData = {
  approximateTime?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  creatorId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  icd10?: InputMaybe<Array<Scalars['String']>>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  learningOutcome?: InputMaybe<Scalars['String']>;
  newMediaFileDetailsList?: InputMaybe<Array<NewFileDetails>>;
  photoFileDetails?: InputMaybe<NewFileDetails>;
  position?: InputMaybe<Scalars['Int']>;
  scriptFileDetails?: InputMaybe<NewFileDetails>;
  title?: InputMaybe<Scalars['String']>;
  updateMediaFileDetailsList?: InputMaybe<Array<UpdateFileDetails>>;
};

export type UpdateFileDetails = {
  file?: InputMaybe<GcsFile>;
  fileType?: InputMaybe<FileDetailsType>;
  id: Scalars['String'];
  /** Orientation of file */
  orientation?: InputMaybe<Orientation>;
  /** Subtitle language of file */
  subtitles?: InputMaybe<Language>;
};

export type UpdateManagementRoleData = {
  addCanDemoteFromIds?: InputMaybe<Array<Scalars['String']>>;
  addCanPromoteToIds?: InputMaybe<Array<Scalars['String']>>;
  addCanUpdatePermissionsIds?: InputMaybe<Array<Scalars['String']>>;
  contentManage?: InputMaybe<Scalars['Boolean']>;
  employeesAdd?: InputMaybe<Scalars['Boolean']>;
  employeesDelete?: InputMaybe<Scalars['Boolean']>;
  employeesUpdate?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  organizationUpdateDetails?: InputMaybe<Scalars['Boolean']>;
  removeCanDemoteFromIds?: InputMaybe<Array<Scalars['String']>>;
  removeCanPromoteToIds?: InputMaybe<Array<Scalars['String']>>;
  removeCanUpdatePermissionsIds?: InputMaybe<Array<Scalars['String']>>;
  roleAdd?: InputMaybe<Scalars['Boolean']>;
  roleDelete?: InputMaybe<Scalars['Boolean']>;
  superAdmin?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateOrganizationData = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateOrganizationPlanData = {
  activePlanCapacity?: InputMaybe<Scalars['Int']>;
  addSuggestedPostIds?: InputMaybe<Array<Scalars['String']>>;
  addSuggestedRecipeIds?: InputMaybe<Array<Scalars['String']>>;
  addSuggestedSeriesIds?: InputMaybe<Array<Scalars['String']>>;
  /** Preferences for the order of categorys to show on the platform */
  categoryTypePreferences?: InputMaybe<Array<CategoryType>>;
  contentLicenceType?: InputMaybe<ContentLicence>;
  /** Prefernce for including the scripts of content downloading content */
  includedScriptPreference?: InputMaybe<Scalars['Boolean']>;
  /** Preferences for the orientation of video content you want to add to your library */
  orientationPreferences?: InputMaybe<Array<Orientation>>;
  removeSuggestedPostIds?: InputMaybe<Array<Scalars['String']>>;
  removeSuggestedRecipeIds?: InputMaybe<Array<Scalars['String']>>;
  removeSuggestedSeriesIds?: InputMaybe<Array<Scalars['String']>>;
  /** Preference for the addition of any included subtitle content to your library */
  subtitlePreferences?: InputMaybe<Array<Language>>;
  totalPlanCapacity?: InputMaybe<Scalars['Int']>;
};

export type UpdateOrganizationPlanPreferencesData = {
  /** Prefernce for including the scripts of content downloading content */
  includedScriptPreference?: InputMaybe<Scalars['Boolean']>;
  /** Preferences for the orientation of video content you want to add to your library */
  orientationPreferences?: InputMaybe<Array<Orientation>>;
  /** Preference for the addition of any included subtitle content to your library */
  subtitlePreferences?: InputMaybe<Array<Language>>;
};

export type UpdatePostData = {
  approximateTime?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  contentFormat?: InputMaybe<ContentFormat>;
  contentValue?: InputMaybe<Scalars['Int']>;
  creatorId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  icd10?: InputMaybe<Array<Scalars['String']>>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  language?: InputMaybe<Language>;
  learningOutcome?: InputMaybe<Scalars['String']>;
  newMediaFileDetailsList?: InputMaybe<Array<NewFileDetails>>;
  scriptFileDetails?: InputMaybe<NewFileDetails>;
  title?: InputMaybe<Scalars['String']>;
  topic?: InputMaybe<Array<Topic>>;
  updateMediaFileDetailsList?: InputMaybe<Array<UpdateFileDetails>>;
};

export type UpdatePostParentData = {
  category?: InputMaybe<Array<Category>>;
  clinicallyVerified?: InputMaybe<Scalars['Boolean']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  photoFileDetails?: InputMaybe<NewFileDetails>;
  universalTitle?: InputMaybe<Scalars['String']>;
  unlisted?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateRecipeData = {
  contentValue?: InputMaybe<Scalars['Int']>;
  creatorId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<RecipeFormat>;
  ingredientsList?: InputMaybe<Array<NewIngredientListItem>>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  language?: InputMaybe<Language>;
  method?: InputMaybe<Array<Scalars['String']>>;
  newMediaFileDetailsList?: InputMaybe<Array<NewFileDetails>>;
  title?: InputMaybe<Scalars['String']>;
  updateMediaFileDetailsList?: InputMaybe<Array<UpdateFileDetails>>;
};

export type UpdateRecipeParentData = {
  approximateTime?: InputMaybe<Scalars['Int']>;
  calories?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<Array<Category>>;
  featured?: InputMaybe<Scalars['Boolean']>;
  photoFileDetails?: InputMaybe<NewFileDetails>;
  servings?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Array<RecipeTag>>;
  universalTitle?: InputMaybe<Scalars['String']>;
  unlisted?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateSeriesData = {
  contentFormat?: InputMaybe<ContentFormat>;
  contentValue?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  icd10?: InputMaybe<Array<Scalars['String']>>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  language?: InputMaybe<Language>;
  learningOutcome?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  topic?: InputMaybe<Array<Topic>>;
};

export type UpdateSeriesParentData = {
  category?: InputMaybe<Array<Category>>;
  clinicallyVerified?: InputMaybe<Scalars['Boolean']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  photoFileDetails?: InputMaybe<NewFileDetails>;
  universalTitle?: InputMaybe<Scalars['String']>;
  unlisted?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateUserData = {
  name?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  /** Creation time given as the ISO Date string */
  createdAt: Scalars['DateTime'];
  /** Soft delete time given as the ISO Date string */
  deletedAt?: Maybe<Scalars['DateTime']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  managementRoles: Array<ManagementRole>;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  /** Last update time given as the ISO Date string */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostFragmentFragment = { __typename?: 'Post', id: string, title: string };

export type GetPostsOperationQueryVariables = Exact<{
  sequelizeQuery: SequelizeQuery;
}>;


export type GetPostsOperationQuery = { __typename?: 'Query', getPosts: Array<{ __typename?: 'Post', id: string, title: string }> };

export const PostFragmentFragmentDoc = gql`
    fragment postFragment on Post {
  id
  title
}
    `;
export const GetPostsOperationDocument = gql`
    query getPostsOperation($sequelizeQuery: SequelizeQuery!) {
  getPosts(sequelizeQuery: $sequelizeQuery) {
    ...postFragment
  }
}
    ${PostFragmentFragmentDoc}`;

/**
 * __useGetPostsOperationQuery__
 *
 * To run a query within a React component, call `useGetPostsOperationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsOperationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsOperationQuery({
 *   variables: {
 *      sequelizeQuery: // value for 'sequelizeQuery'
 *   },
 * });
 */
export function useGetPostsOperationQuery(baseOptions: Apollo.QueryHookOptions<GetPostsOperationQuery, GetPostsOperationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsOperationQuery, GetPostsOperationQueryVariables>(GetPostsOperationDocument, options);
      }
export function useGetPostsOperationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsOperationQuery, GetPostsOperationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsOperationQuery, GetPostsOperationQueryVariables>(GetPostsOperationDocument, options);
        }
export type GetPostsOperationQueryHookResult = ReturnType<typeof useGetPostsOperationQuery>;
export type GetPostsOperationLazyQueryHookResult = ReturnType<typeof useGetPostsOperationLazyQuery>;
export type GetPostsOperationQueryResult = Apollo.QueryResult<GetPostsOperationQuery, GetPostsOperationQueryVariables>;