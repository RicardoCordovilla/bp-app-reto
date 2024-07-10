export const formFields = [
    { label: 'Id', placeholder: 'Id', value: id, onChange: setNameForm, disabled: false, required: true, validation: /^[0-9]+$/ },
    { label: 'Nombre', placeholder: 'Inrgresa el nombre del producto', value: name, onChange: setNameForm, disabled: false, required: true },
    { label: 'Descripción', placeholder: 'Inrgresa la descripción del producto', value: description, onChange: setDescriptionForm, disabled: false, required: true },
    { label: 'Logo', placeholder: 'Inrgresa la url del logo del producto', value: logo, onChange: setLogoForm, disabled: false, required: false },
    { label: 'Fecha de liberación', placeholder: 'Inrgresa la fecha de liberación del producto', value: date_release, onChange: setDateReleaseForm, disabled: false, required: true ,validation: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/},
    { label: 'Fecha de revisión', placeholder: 'Inrgresa la fecha de revisión del producto', value: date_revision, onChange: setDateRevisionForm, disabled: true, required: true }
]

export default formFields;