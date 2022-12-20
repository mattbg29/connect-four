import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerScoreTracker = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ScoreTracker, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly score?: number | null;
  readonly user?: string | null;
  readonly botScore?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyScoreTracker = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ScoreTracker, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly score?: number | null;
  readonly user?: string | null;
  readonly botScore?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ScoreTracker = LazyLoading extends LazyLoadingDisabled ? EagerScoreTracker : LazyScoreTracker

export declare const ScoreTracker: (new (init: ModelInit<ScoreTracker>) => ScoreTracker) & {
  copyOf(source: ScoreTracker, mutator: (draft: MutableModel<ScoreTracker>) => MutableModel<ScoreTracker> | void): ScoreTracker;
}