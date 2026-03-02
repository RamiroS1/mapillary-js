# Street View Agrícola (Asozulia)

Este repositorio se usa para ejecutar el visor 360° agrícola con imágenes GoPro y carga local de archivos/carpeta.

## Requisitos

- Node.js 18+
- npm

## Ejecución local

Desde la raíz del proyecto:

```bash
npm install --legacy-peer-deps
npm run build
npm run serve
```

Abrir en el navegador:

- `http://localhost:8000/`

## Flujo recomendado de uso

1. Abrir la aplicación en el navegador.
2. Usar **"Cargar desde mi PC"**.
3. Seleccionar carpeta o archivos de imágenes 360° (`.jpg`, `.jpeg`, `.png`, `.webp`).
4. Esperar el procesamiento de EXIF/GPS y la construcción del recorrido.

## Manifiesto (opcional)

Si se desea ejecutar con manifiesto local preconstruido:

```bash
npm run generate-street-manifest
npm run serve
```

O en un solo paso:

```bash
npm run build:deploy
npm run serve
```

## Deploy (Vercel)

El despliegue se realiza desde la rama `main` del repositorio de trabajo. El proyecto está configurado para funcionar en Vercel y en local, incluyendo fallback de carga para recursos de Mapillary cuando `/dist` no está disponible en producción.

## Nota operativa

Si en producción no aparecen datos del servidor, se puede seguir trabajando con el flujo de **carga local** desde el navegador, que es el modo principal para validación de recorridos GoPro 360.
