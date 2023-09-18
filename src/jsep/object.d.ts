declare module "object" {
  namespace object {
    import jsep from "jsep";
    export const name: string;
    export const OCURLY_CODE: number;
    export const CCURLY_CODE: number;
    export const OBJECT_EXP: string;
    export const PROPERTY: string;
    export function init(this: typeof jsep): void;

    export interface ObjectExpression extends jsep.jsep.Expression {
      type: "ObjectExpression";
      properties: Property[];
    }

    export interface Property extends jsep.jsep.Expression {
      type: "Property";
      computed: boolean;
      key: jsep.jsep.Expression;
      shorthand: boolean;
      value?: jsep.jsep.Expression;
    }

    const _export: jsep.jsep.IPlugin;
    export default _export;
  }
}
