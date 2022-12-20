/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ScoreTrackerCreateFormInputValues = {
    score?: number;
    user?: string;
    botScore?: number;
};
export declare type ScoreTrackerCreateFormValidationValues = {
    score?: ValidationFunction<number>;
    user?: ValidationFunction<string>;
    botScore?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScoreTrackerCreateFormOverridesProps = {
    ScoreTrackerCreateFormGrid?: FormProps<GridProps>;
    score?: FormProps<TextFieldProps>;
    user?: FormProps<TextFieldProps>;
    botScore?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScoreTrackerCreateFormProps = React.PropsWithChildren<{
    overrides?: ScoreTrackerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ScoreTrackerCreateFormInputValues) => ScoreTrackerCreateFormInputValues;
    onSuccess?: (fields: ScoreTrackerCreateFormInputValues) => void;
    onError?: (fields: ScoreTrackerCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ScoreTrackerCreateFormInputValues) => ScoreTrackerCreateFormInputValues;
    onValidate?: ScoreTrackerCreateFormValidationValues;
} & React.CSSProperties>;
export default function ScoreTrackerCreateForm(props: ScoreTrackerCreateFormProps): React.ReactElement;
