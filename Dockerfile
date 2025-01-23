# Seleccionar la imagen base
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto
COPY package*.json ./
COPY . .

# Instalar las dependencias
RUN npm install

# Construir el proyecto (si es necesario)
RUN npm run build

# Exponer el puerto (ajusta el puerto según tu aplicación)
EXPOSE 3000

# Definir el comando de inicio
CMD ["npm", "start"]