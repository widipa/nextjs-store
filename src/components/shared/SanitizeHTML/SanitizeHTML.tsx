import {createElement, HTMLAttributes} from "react";
import sanitize from 'sanitize-html';

type SanitizeHTMLProps = {
    children: string;
    tag: string;
} & HTMLAttributes<HTMLDivElement>;

export const SanitizeHTML = ({tag, children, ...rest}: SanitizeHTMLProps) => {

    const sanitizedHTML = sanitize(children, {
        allowedTags: ['b', 'i', 'em', 'strong']
    })

    return createElement(tag, {...rest}, sanitizedHTML)
}