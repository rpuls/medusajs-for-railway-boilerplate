/// <reference types="react" />
import { SxProp } from './types';
declare type WithConditionalSxProp<P> = 'className' extends keyof P ? string extends P['className'] ? P & SxProp : P : P;
declare type ReactJSXElement = JSX.Element;
declare type ReactJSXElementClass = JSX.ElementClass;
declare type ReactJSXElementAttributesProperty = JSX.ElementAttributesProperty;
declare type ReactJSXElementChildrenAttribute = JSX.ElementChildrenAttribute;
declare type ReactJSXLibraryManagedAttributes<C, P> = JSX.LibraryManagedAttributes<C, P>;
declare type ReactJSXIntrinsicAttributes = JSX.IntrinsicAttributes;
declare type ReactJSXIntrinsicClassAttributes<T> = JSX.IntrinsicClassAttributes<T>;
declare type ReactJSXIntrinsicElements = JSX.IntrinsicElements;
export declare namespace ThemeUIJSX {
    interface Element extends ReactJSXElement {
    }
    interface ElementClass extends ReactJSXElementClass {
    }
    interface ElementAttributesProperty extends ReactJSXElementAttributesProperty {
    }
    interface ElementChildrenAttribute extends ReactJSXElementChildrenAttribute {
    }
    type LibraryManagedAttributes<C, P> = WithConditionalSxProp<P> & ReactJSXLibraryManagedAttributes<C, P>;
    interface IntrinsicAttributes extends ReactJSXIntrinsicAttributes {
    }
    interface IntrinsicClassAttributes<T> extends ReactJSXIntrinsicClassAttributes<T> {
    }
    type IntrinsicElements = {
        [K in keyof ReactJSXIntrinsicElements]: ReactJSXIntrinsicElements[K] & SxProp;
    };
}
export {};
