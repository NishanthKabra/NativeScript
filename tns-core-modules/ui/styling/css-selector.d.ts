﻿declare module "ui/styling/css-selector" {
    import * as parser from "css";

    /**
     * An interface describing the shape of a type on which the selectors may apply.
     * Note, the ui/core/view implements Node.
     * To specify which pseudo-class states are on or off, set node[state("<name>")] to boolean.
     */
    interface Node {
        parent?: Node;

        id?: string;
        cssType?: string;
        cssClasses?: Set<string>;
        cssPseudoClasses?: Set<string>;
    }

    interface Declaration {
        property: string;
        value: string;
    }

    class SelectorCore {
        match(node: Node): boolean;
        ruleset: RuleSet;
    }

    class RuleSet {
        declarations: Declaration[];
    }

    class SelectorsMap {
        constructor(rules: RuleSet[]);

        /**
         * Get a list of selectors that are likely to match the node.
         */
        query(node: Node): SelectorCore[];
    }

    export function fromAstNodes(astRules: parser.Node[]): RuleSet[];
    export function applyInlineStyle(node: Node, declarations: Declaration[]): void;
}
