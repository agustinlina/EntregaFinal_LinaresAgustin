# Entrega Final de Curso JS Flex, CoderHouse 2024

## Emulador de Sistema de Gestión de Clientes

### Descripción del Proyecto
El objetivo de este proyecto es emular un sistema de gestión de clientes, permitiendo al usuario agregar y eliminar clientes de una tabla. Durante la carga de cada cliente, el usuario puede especificar los siguientes datos:
- Nombre.
- Apellido.
- Deuda.
  
El sistema, también carga de manera asincronica clientes guardados previamente en un archivo de formato JSON. Se utiliza el almacenamiento local (`localStorage`) para guardar los clientes, de modo que la información persista entre sesiones.

### Tecnologías Utilizadas
Este proyecto fue desarrollado utilizando:
- **JavaScript**: Para la lógica del sistema de gestión de clientes.
- **Bootstrap**: Para el diseño y la creación de una interfaz de usuario responsiva y atractiva.
- **SweetAlert2**: Para mostrar alertas modernas y personalizadas al usuario durante las acciones del sistema (como confirmaciones de eliminación o notificaciones de éxito).

### Implementaciones
1. **Base de datos**: Se Utiliza `localStorage` para mantener la persistencia de datos del cliente. Se garantiza que los clientes no sean duplicados y que las operaciones sean eficientes.

2. **Validación de Entradas de Usuario**: Validaciones utilizando JavaScript para evitar entradas vacías o inválidas, asegurando que los datos del cliente estén completos y en el formato correcto antes de ser añadidos al sistema.

3. **Feedback Interactivo con SweetAlert2**: SweetAlert2 se utiliza para brindar retroalimentación al usuario de manera más atractiva, como confirmaciones de éxito al agregar clientes y alertas de advertencia al intentar eliminar un cliente.

