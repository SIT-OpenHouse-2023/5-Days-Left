import classNames from "classnames";
import { InputHTMLAttributes } from "react";
import ErrorMessage from "./ErrorMessage";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string;
    label?: string;
}

export default function InputField({ errorMessage, label, ...props }: Props) {
    return (
        <label className="flex flex-col gap-1">
            <p>
                {label}{" "}
                {props.required && <span className="text-red-500">*</span>}
            </p>
            <input
                {...props}
                className={classNames("bg-[#8DB9FB] p-2 rounded-md w-full", {
                    "!border-error focus:border-error": errorMessage,
                })}
            />
            <ErrorMessage message={errorMessage} />
        </label>
    );
}
