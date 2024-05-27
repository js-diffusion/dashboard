## Vite React TypeScript 설치 및 설정

1. frontend 설치 & 실행

```bash
$ npm create vite@latest
frontendts
React
TypeScript
$ cd frontendts
$ yarn
$ yarn dev
```

2. Shadcn 설치 & 임포트

```bash
# 1. 
$ npx tailwindcss init -p
$ yarn add -D tailwindcss autoprefixer tailwindcss-animate postcss class-variance-authority clsx tailwind-merge lucide-react @radix-ui/react-icons

# 2. 
$ npx shadcn-ui@latest init
✔ Would you like to use TypeScript (recommended)? … yes
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Slate
✔ Where is your global CSS file? … src/index.css
✔ Would you like to use CSS variables for colors? … yes
✔ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) … 
✔ Where is your tailwind.config.js located? … tailwind.config.js
✔ Configure the import alias for components: … src/components
✔ Configure the import alias for utils: … src/lib/utils
✔ Are you using React Server Components? … no
✔ Write configuration to components.json. Proceed? … yes
```

3. path 절대경로 설정

```bash
yarn add path @types/node -D
```

```ts
// tsconfig.json
{
  "compilerOptions": {
    /* Base URL and Paths */
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"]
    }
  }
}

// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },  
})

// components.json
"aliases": {
  "components": "@/components",
  "utils": "@/lib/utils"
}
```

4. 컴포넌트 설치

```bash
npx shadcn-ui@latest add button badge checkbox dropdown-menu command popover separator select input table avatar breadcrumb card pagination progress separator sheet tabs tooltip input label textarea toggle-group navigation-menu icons calendar accordion

yarn add zod @tanstack/react-table @radix-ui/react-icons recharts date-fns
```