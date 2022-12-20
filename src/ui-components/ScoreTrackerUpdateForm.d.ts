/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ScoreTracker } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ScoreTrackerUpdateFormInputValues = {
    score?: number;
    user?: string;
    botScore?: number;
};
export declare type ScoreTrackerUpdateFormValidationValues = {
    score?: ValidationFunction<number>;
    user?: ValidationFunction<string>;
    botScore?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScoreTrackerUpdateFormOverridesProps = {
    ScoreTrackerUpdateFormGrid?: FormProps<GridProps>;
    score?: FormProps<TextFieldProps>;
    user?: FormProps<TextFieldProps>;
    botScore?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScoreTrackerUpdateFormProps = React.PropsWithChildren<{
    overrides?: ScoreTrackerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    scoreTracker?: ScoreTracker;
    onSubmit?: (fields: ScoreTrackerUpdateFormInputValues) => ScoreTrackerUpdateFormInputValues;
    onSuccess?: (fields: ScoreTrackerUpdateFormInputValues) => void;
    onError?: (fields: ScoreTrackerUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ScoreTrackerUpdateFormInputValues) => ScoreTrackerUpdateFormInputValues;
    onValidate?: ScoreTrackerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ScoreTrackerUpdateForm(props: ScoreTrackerUpdateFormProps): React.ReactElement;
