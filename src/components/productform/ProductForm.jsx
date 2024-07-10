import React from 'react'
import { View } from 'react-native'
import ProductFormField from './fields/ProductFormField'

const ProductForm = ({ product, updateProduct }) => {

    const { id, name, description, logo, date_release, date_revision } = product
    const [nameForm, setNameForm] = useState(name)
    const [descriptionForm, setDescriptionForm] = useState(description)
    const [logoForm, setLogoForm] = useState(logo)
    const [dateReleaseForm, setDateReleaseForm] = useState(date_release)
    const [dateRevisionForm, setDateRevisionForm] = useState(date_revision)


    const fields = [
        { label: 'Id', value: name, onChange: setNameForm },
        { label: 'Name', value: name, onChange: setNameForm },
        { label: 'Description', value: description, onChange: setDescriptionForm },
        { label: 'Logo', value: logo, onChange: setLogoForm },
        { label: 'Date Release', value: date_release, onChange: setDateReleaseForm },
        { label: 'Date Revision', value: date_revision, onChange: setDateRevisionForm }
    ]


    return (
        <View>
            {
                fields.map((field, index) => (
                    <ProductFormField key={index} field={field} />
                ))
            }
        </View>
    )
}

export default ProductForm