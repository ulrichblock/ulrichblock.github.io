---
title: "Probleme mit Promises in Typescript vermeiden"
tags: ["typescript", "nodejs"]
published: false
date: "2020-06-09"
---

Im Zusammenspiel mit Typescript geht die Fehlersuche sehr weit. Insbesondere das Auffinden von falscher Promise Nutzung spart einen viele Kopfschmerzen im späteren Betrieb:

- https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
- https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
- https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md

```typescript
Promise.reject(new Error('Ups'))
```

```bash
(node:7741) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: Ups
(node:7741) DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code. */
```

.eslintrc.js
tsconfig.json > 