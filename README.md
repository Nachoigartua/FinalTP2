# API REST - Animales y Veterinarios

## Descripción
API REST para gestionar animales y veterinarios, con persistencia en memoria, archivos o MongoDB. Arquitectura MVC, validaciones y CRUD completo para ambos recursos.

## Instalación y uso rápido
1. Clona el repo e instala dependencias:
   ```bash
   git clone https://github.com/Nachoigartua/FinalTP2.git
   cd FinalTP2
   npm install
   ```
2. Configura `.env` (ejemplo):
   ```env
   PORT=8080
   PERSISTENCE= memory | fs | mongo
   MONGO_URL= (adjuntada en otro lado, por seguridad)
   MONGO_DB_NAME=tp2
   ```
3. Inicia el servidor:
   npm run watch
   ```
4. Para testear, podes cambiar en el package json , en el campo test, a Animales o Veterinarios, y ejecutar
   npm test

## Endpoints principales
- **Login para generar token:**
  - `POST    /api/login`         → Generar Token y copiar por consola (expira en 5 minutos)
- **Animales:** (requiere Token)
  - `GET    /api/animales`         → Lista todos
  - `POST   /api/animales`         → Crea uno (body: nombre, especie, edad, estado) 
  - `PUT    /api/animales/:id`     → Reemplaza por ID
  - `PATCH  /api/animales/:id`     → Modifica por ID
  - `DELETE /api/animales/:id`     → Elimina por ID *(requiere Token)*
- **Veterinarios:** (no requiere token)
  - `GET    /api/veterinarios`
  - `POST   /api/veterinarios`     (body: nombre, matricula, especialidad) 
  - `PUT    /api/veterinarios/:id`
  - `PATCH  /api/veterinarios/:id`
  - `DELETE /api/veterinarios/:id` 


## Persistencia
- Cambia el modo en `.env` con `PERSISTENCE=memory|fs|mongo`.
- Para MongoDB, completa `MONGO_URL` y `MONGO_DB_NAME`.
- Para archivos, se crean automáticamente (`animales.txt`, `veterinarios.txt`).

---
Autor: Ignacio Igartua, Meital Srougo, Patricio Baez, Manuel Dubovis, Agustin Peñalba

