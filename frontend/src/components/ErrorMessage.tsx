import classNames from "classnames";

type Props = {
    message?: string;
    className?: string;
};

export default function ErrorMessage({ message, className }: Props) {
    return (
        <small
            className={classNames("transition text-left mt-2 text-red-500", className, {
                "text-error": message,
                "text-transparent": !message,
            })}
        >
            {message}
        </small>
    );
}
