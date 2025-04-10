import type { ActionDefinition, ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
export declare namespace handleSwipeAction {
    type ParamsDefinition = {
        didLike: {
            multiplicity: false;
            nullable: false;
            type: 'boolean';
        };
        swipedID: {
            multiplicity: false;
            nullable: false;
            type: 'string';
        };
        swiperID: {
            multiplicity: false;
            nullable: false;
            type: 'string';
        };
    };
    interface Params {
        readonly didLike: ActionParam.PrimitiveType<'boolean'>;
        readonly swipedID: ActionParam.PrimitiveType<'string'>;
        readonly swiperID: ActionParam.PrimitiveType<'string'>;
    }
    interface Signatures {
        applyAction<P extends handleSwipeAction.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
        batchApplyAction<P extends ReadonlyArray<handleSwipeAction.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
    }
}
/**
 * @param {ActionParam.PrimitiveType<"boolean">} didLike
 * @param {ActionParam.PrimitiveType<"string">} swipedID
 * @param {ActionParam.PrimitiveType<"string">} swiperID
 */
export interface handleSwipeAction extends ActionDefinition<handleSwipeAction.Signatures> {
    __DefinitionMetadata?: {
        apiName: 'handleSwipeAction';
        displayName: 'Handle swipe action';
        modifiedEntities: {
            MatchStatus: {
                created: true;
                modified: true;
            };
            Person: {
                created: false;
                modified: true;
            };
        };
        parameters: handleSwipeAction.ParamsDefinition;
        rid: 'ri.actions.main.action-type.ca196cc0-7e7d-4b40-bc4b-0ae0ad3bce19';
        status: 'ACTIVE';
        type: 'action';
        signatures: handleSwipeAction.Signatures;
    };
    apiName: 'handleSwipeAction';
    type: 'action';
    osdkMetadata: typeof $osdkMetadata;
}
export declare const handleSwipeAction: handleSwipeAction;
