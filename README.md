Banking Products App
Esta aplicación ha sido desarrollada en React Native utilizando Expo. Su propósito es mostrar productos bancarios y permitir la gestión de estos productos a través de una interfaz de usuario sencilla e intuitiva.

Funcionalidades
Visualización de Productos Bancarios:

La pantalla principal muestra una lista de productos bancarios.
Al final de la lista, hay un botón para agregar un nuevo producto.
Creación de un Nuevo Producto:

Al hacer clic en el botón "Crear Producto", se abre un formulario donde se puede ingresar la información del nuevo producto.
Edición de un Producto:

Al seleccionar un producto de la lista, se abre una pantalla con dos botones: "Editar" y "Eliminar".
Al hacer clic en "Editar", se abre una nueva página con un formulario para modificar la información del producto.
Eliminación de un Producto:

Al hacer clic en "Eliminar", se muestra un modal de confirmación para asegurarse de que se desea eliminar el producto.
Instalación

Estructura del proyecto:

src/
    components/                   # Componentes reutilizables de la aplicación
        buttons/
            ButtonAction.jsx      # Componente para acciones de botón
            buttonaction.styles.js # Estilos para ButtonAction
        fields/
            InputField.jsx        # Componente para los campos de entrada
            inputfield.styles.js  # Estilos para InputField
        product/
            ProductContainer.jsx  # Contenedor principal para un producto
            productcontainer.styles.js # Estilos para ProductContainer
            actions/
                ProductActions.jsx # Acciones específicas de un producto
                productactions.styles.js # Estilos para ProductActions
            body/
                ProductBody.jsx    # Cuerpo principal del producto
                productbody.styles.js # Estilos para ProductBody
                field/
                    ProductBodyField.jsx # Campos específicos del cuerpo del producto
                    productbodyfield.styles.js # Estilos para ProductBodyField
                logofield/
                    LogoField.jsx   # Campo para el logo del producto
                    logofield.styles.js # Estilos para LogoField
            header/
                ProductHeader.jsx   # Encabezado del producto
                productheader.styles.js # Estilos para ProductHeader
        productform/
            ProductForm.jsx       # Formulario para crear/editar un producto
            productform.styles.js # Estilos para ProductForm
            fields/
                ProductFormField.jsx # Campos específicos del formulario del producto
                productformfield.styles.js # Estilos para ProductFormField
        productscontainer/
            ProductsContainer.jsx # Contenedor para la lista de productos
            productscontainer.styles.js # Estilos para ProductsContainer
        registerrow/
            RegisterRow.jsx       # Fila de registro
            registerrow.styles.js # Estilos para RegisterRow
        searchfield/
            SearchField.jsx       # Campo de búsqueda
            searchfield.styles.js # Estilos para SearchField
    screens/                      # Pantallas principales de la aplicación
        editproduct/
            EditPage.jsx          # Página para editar un producto
            editpage.styles.js    # Estilos para EditPage
        myproducts/
            myproducts.styles.js  # Estilos para MyProductsPage
            MyProductsPage.jsx    # Página principal de mis productos
        product/
            ProductPage.jsx       # Página de un producto individual
            productpage.styles.js # Estilos para ProductPage
    utils/                        # Utilidades y funciones auxiliares
        fetch/
            api.js                # Llamadas a la API
            products.js           # Funciones relacionadas con los productos
        globals/
            formFields.js         # Campos de formulario globales
        store/
            products.store.js     # Almacenamiento y gestión del estado de los productos
        styles/
            globlalstyles.js      # Estilos globales de la aplicación


Video:

https://firebasestorage.googleapis.com/v0/b/uploadimages-87460.appspot.com/o/pruebas%2FRecordIt-1720594993.mov?alt=media&token=17ff3d97-1a2e-4cf8-8ca1-8c4c962b26cf
