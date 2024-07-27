import { IntrinsicSxElements } from '@theme-ui/core';
import { Theme } from '@theme-ui/css';
import { ComponentType, FC, ReactNode, DetailedHTMLProps, HTMLAttributes, ElementType, ComponentProps } from 'react';
import { StyledComponent } from '@emotion/styled';
declare type MDXProviderComponentsKnownKeys = {
    [key in keyof IntrinsicSxElements]?: ComponentType<any> | string;
};
export interface MDXProviderComponents extends MDXProviderComponentsKnownKeys {
    [key: string]: ComponentType<any> | string | undefined;
}
export declare type MdxAliases = {
    [key in keyof IntrinsicSxElements]: keyof JSX.IntrinsicElements;
};
export declare type MdxAliasesKeys = 'inlineCode' | 'thematicBreak' | 'root';
export declare type ThemedProps = {
    theme: Theme;
};
export interface MdxProviderProps {
    components?: MDXProviderComponents;
    children: ReactNode;
}
declare const aliases: {
    readonly inlineCode: "code";
    readonly thematicBreak: "hr";
    readonly root: "div";
};
declare type Aliases = typeof aliases;
export declare type ThemedComponentName = keyof IntrinsicSxElements | keyof JSX.IntrinsicElements;
export declare const themed: (key: ThemedComponentName) => ({ theme, ...rest }: ThemedProps) => import("@theme-ui/core").CSSObject;
interface AnyComponentProps extends JSX.IntrinsicAttributes {
    [key: string]: unknown;
}
export declare type WithPoorAsProp<Props, As extends ElementType | undefined = undefined> = {
    as?: As;
} & (undefined extends As ? As extends undefined ? Props : AnyComponentProps : AnyComponentProps);
export interface ThemedComponent<Name extends ElementType> {
    <As extends ElementType | undefined = undefined>(props: WithPoorAsProp<ComponentProps<Name>, As>): JSX.Element;
}
export declare type ThemedComponentsDict = {
    [K in keyof IntrinsicSxElements]: K extends keyof Aliases ? ThemedComponent<Aliases[K]> : K extends keyof JSX.IntrinsicElements ? ThemedComponent<K> : never;
};
declare type ThemedDiv = StyledComponent<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemedProps, Theme>;
export declare const Themed: ThemedDiv & ThemedComponentsDict;
/**
 * @deprecated since 0.6.0.
 *
 * `Styled` was renamed to `Themed` to avoid confusion with styled components.
 */
export declare const Styled: ThemedDiv & ThemedComponentsDict;
export declare const components: ThemedComponentsDict;
export declare const MDXProvider: FC<MdxProviderProps>;
export {};
