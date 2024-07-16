/// <reference types="react" />
import { ThemeUIJSX } from '@theme-ui/core';
export { __ThemeUIContext, merge, useThemeUI, createElement, } from '@theme-ui/core';
export type { ThemeUIContextValue, IntrinsicSxElements, SxProp, ColorMode, ColorModesScale, CSSObject, CSSProperties, CSSPseudoSelectorProps, ResponsiveStyleValue, ThemeUICSSProperties, ThemeUIStyleObject, ThemeUICSSObject, Theme, ThemeStyles, TLengthStyledSystem, StylePropertyValue, } from '@theme-ui/core';
export { useColorMode, InitializeColorMode } from '@theme-ui/color-modes';
export { Themed, Styled, components } from '@theme-ui/mdx';
export { ThemeProvider } from '@theme-ui/theme-provider';
export * from '@theme-ui/components';
export { css, get } from '@theme-ui/css';
export declare const BaseStyles: (props: Record<string, unknown>) => import("react").ReactElement<{
    sx: {
        fontFamily: string;
        lineHeight: string;
        fontWeight: string;
        variant: string;
    };
}, string | import("react").JSXElementConstructor<any>>;
export declare const jsx: typeof import("react").createElement;
export declare namespace jsx {
    namespace JSX {
        interface Element extends ThemeUIJSX.Element {
        }
        interface ElementClass extends ThemeUIJSX.ElementClass {
        }
        interface ElementAttributesProperty extends ThemeUIJSX.ElementAttributesProperty {
        }
        interface ElementChildrenAttribute extends ThemeUIJSX.ElementChildrenAttribute {
        }
        type LibraryManagedAttributes<C, P> = ThemeUIJSX.LibraryManagedAttributes<C, P>;
        interface IntrinsicAttributes extends ThemeUIJSX.IntrinsicAttributes {
        }
        interface IntrinsicClassAttributes<T> extends ThemeUIJSX.IntrinsicClassAttributes<T> {
        }
        interface IntrinsicElements extends ThemeUIJSX.IntrinsicElements {
        }
    }
}
