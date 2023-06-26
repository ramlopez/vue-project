# Cómo replicar problema

1. Crear proyecto de PLCNext Engineer, crearle una página de HMI al menos
(aunque esté vacía), cargar a controlador real o simulación (testeado con
simulación en mi caso). Dejarlo corriendo.

2. En esta carpeta de proyecto de Vue, abrir una consola y hacer `npm install`
para bajar módulos y dependencias (requiere npm, parte de
[Node.js](https://nodejs.org/))

3. Compilar este proyecto con `npm run build` (producción), esto crea
archivos web listos para copiar a webserver en la carpeta `/dist`

4. Conectarse al controlador (real o simulado) para pasar archivos (yo usé
WinSCP). Copiar contenidos de `/dist` a carpeta webserver de controlador:
`/opt/plcnext/projects/PCWE/Services/Ehmi/custweb` (crear carpeta custweb)

5. Entrar con un navegador (ej: la propia PC de programación) a
`<IP de controlador>:5050/custweb/index.html` y debería mostrar la página de
ejemplo de Vue sin problemas (llevo meses sin drama en navegador de PC)

6. Pero al ingresar con un BWP-2102W (directo a la URL o con un botón de HMI de
PLCNext que linkea) se queda pantalla de navegador en blanco.
    
    - Tampoco parece ser posible abrirla en otra pestaña que era mi intención
    original (pantalla de configuración de qué página va a ir BWP al encender
    no me deja agregar más pestañas)

---
---

Lo que sigue es el README por defecto de Vue (+ devbuild)


# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Compiles Files in /dist/ but in Development Mode (not for Production!)

```sh
npm run devbuild
```
