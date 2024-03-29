# Expandable Input

## IMPORTANT

> This project is archived. An improved version of this project that works with Angular 15+ [can be found here](https://github.com/DmitryEfimenko/ngspot/tree/main/packages/expandable-input/package) and is published as [@ngspot/expandable-input](https://www.npmjs.com/package/@ngspot/expandable-input)

---

A component consisting of a trigger element (button/icon/anything else...) and an input which shows by sliding to the left when the button is clicked.
Both, the trigger element and the input need to be supplied allowing a lot of flexibility.

This repository consists of three main packages:

- [@ng-expandable-input/cdk](https://github.com/DmitryEfimenko/ng-expandable-input/tree/master/projects/ng-expandable-input)
- [@ng-expandable-input/material](https://github.com/DmitryEfimenko/ng-expandable-input/tree/master/projects/ng-expandable-input-material)
- [@ng-expandable-input/bootstrap](https://github.com/DmitryEfimenko/ng-expandable-input/tree/master/projects/ng-expandable-input-bootstrap)

The CDK package is a package that material and bootstrap packages build on top of. In contrast to the two latter packages the CDK package does not assume any application styling.

## Demo:

https://dmitryefimenko.github.io/ng-expandable-input/

## Playground

[Stackblitz](https://stackblitz.com/github/DmitryEfimenko/ng-expandable-input?file=src%2Fapp%2Fcdk%2Fcdk.component.html)

## Installation

`npm i @ng-expandable-input/cdk`

```ts
import { ExpandableInputModule } from '@ng-expandable-input/cdk';

@NgModule({
  imports: [ExpandableInputModule],
  // ...
})
export class AppModule {}
```

## API:

See README for [@ng-expandable-input/cdk](https://github.com/DmitryEfimenko/ng-expandable-input/tree/master/projects/ng-expandable-input#api)

## License:

MIT
