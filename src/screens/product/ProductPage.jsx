import React, { useState } from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { useGlobalStore, useProductsStore } from '../../utils/store/products.store';
import ProductHeader from '../../components/product/header/ProductHeader';
import styles from './productpage.styles';
import { useNavigation } from '@react-navigation/native'
import ProductBody from '../../components/product/body/ProductBody';
import LogoField from '../../components/product/body/logofield/LogoField';
import ProductActions from '../../components/product/actions/ProductActions';
import ButtonAction from '../../components/buttons/ButtonAction';
import API from '../../utils/fetch/api';

const ProductPage = () => {
  const navigate = useNavigation()
  const { productStore } = useGlobalStore()
  const { removeProduct } = useProductsStore()
  const [modalVisible, setModalVisible] = useState(false)

  const handleEdit = () => {
    navigate.navigate('edit')
  }

  const handleDelete = () => {
    setModalVisible(true)
  }

  const deleteProduct = () => {
    API.products.deleteProduct(productStore.id)
      .then((response) => {
        removeProduct(productStore.id)
        console.log(response)
        navigate.navigate('home')
      })
      .catch((error) => { console.log(error) })
  }


  return (

    <View style={styles.productPage_container}>
      <TouchableOpacity onPress={() => navigate.navigate('home')}>
        <Text>
          Atras
        </Text>
      </TouchableOpacity>
      <ProductHeader productStore={productStore} />
      <LogoField title={'Logo'} image={productStore.image} />
      <ProductBody productStore={productStore} />
      <ProductActions
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Modal
        visible={modalVisible}
        animationType='slide'
        style={styles.modal_container}
        transparent={true}
      >
        <View style={styles.modal_content}>
          <View style={styles.modal_body}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modal_close}>
              <Text style={styles.modal_closeText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modal_title}>
              ¿Estás seguro de eliminar este producto?
              {productStore.name}
            </Text>
            <View style={styles.modal_actions}>
              <ButtonAction title='Confirmar' severity='primary' action={deleteProduct} />
              <ButtonAction title='Cancelar' severity='secondary' action={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>

    </View>
  )
}

export default ProductPage