import {HTMLAttributes} from "react";
import sanitize from 'sanitize-html';

type SanitizeHTMLProps = {
    children: string;
    tag?: string;
} & HTMLAttributes<HTMLDivElement>;

export const SanitizeHTML = ({children, ...rest}: SanitizeHTMLProps) => {
    const sanitizedHTML = sanitize(children, {
        allowedTags: ['b', 'i', 'em', 'strong', 'h3', 'p', 'a', 'hr'],
        allowedAttributes: {
            'a': ['href']
        }
    });

    return (
        <div
            {...rest}
            dangerouslySetInnerHTML={{__html: sanitizedHTML}}
        />
    );
}
