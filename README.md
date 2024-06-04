# react-mono

the react-app inside this workspace are generated using this repository template

[Joao paulo moraes boilerplate](https://github.com/joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate)

---

[Official documentation](https://pnpm.io/workspaces) of pnpm workspace

### How to create monorepo using pnpm workspace

1. create root folder to maintain packages

2. add `pnpm-workspace.yaml` to define workspace configuration

3. create new folder based on your workspace

4. try create project inside the folder you define in workspace configuration

5. run `pnpm install` in root workspace

### How to install module

1. in your `package.json` file, add your module name based on `name` field in `package.json` file

```
{
    "dependencies": {
        "@your/workspace/module": "workspace:^"
    }
}
```

2. run `pnpm install` in your root workspace

### Tailwind classes not applied when export component

Tailwind classes are being purged when you export the component outside of your module. Include your module into `contents` array in `tailwind.config`.

[See example](./apps/module-transaction/tailwind.config.mjs)

[Will Liu post about configuring tailwind configuration](https://www.willliu.com/blog/Why-your-Tailwind-styles-aren-t-working-in-your-Turborepo)

### Export module using exports field

When you want to export module inside workspace, you can use `exports` field in `package.json` file.

[See example](./packages/configs/package.json)

[Official documentation](https://nodejs.org/api/packages.html#main-entry-point-export) of using `exports` field
