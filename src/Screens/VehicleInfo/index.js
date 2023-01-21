import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native'
import Components from '../../Components';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Global from '../../Global';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';
import ImageModal from 'react-native-image-modal';
import rectangle from '../../Assets/rectangle.png';
import { useNavigation } from '@react-navigation/native';



const VehicleInfo = () => {
  let actionSheet = useRef();
  let navigation = useNavigation();

  const [vehicle, setVehicle] = useState([
    { label: 'Car', value: 'car' },
    { label: 'Bike', value: 'bike' },
    { label: 'Other', value: 'other' },
  ]);
  const [openVehicle, setOpenVehicle] = useState(false);
  const [authObj, setAuthObj] = useState({
    vehicle_type: '',
    model_no: '',
    vehicle_color: '',
    vehicle_brand: '',
    registration_number: '',
    vehicle: '',
    vehicleFront: '',
    vehicleBack: '',
  })
  const [docs, setDocs] = useState({
    cnic: false,
    license: false
  })

  const [errorObj, setErrorObj] = useState({
    vehicle_type: '',
    model_no: '',
    vehicle_color: '',
    vehicle_brand: '',
    registration_number: '',
    vehicle: '',
    vehicleFront: '',
    vehicleBack: '',
  })

  function handleSubmit(params) {
    alert('Detail has been submited');
    navigation.navigate('Home', {routeName:'Driver'})
  }

  let optionArray = [
    'Gallery',
    'Camera',
    'Cancel',
  ];
  const openSheet = (name, type) => {
    actionSheet.current.show();
    // alert(type);
    handleChange(name, type);
  }


  async function handleCNIC(index) {
    if (index == 0) {
      ImagePicker.openPicker({
        width: 300,
        height: 400,

      }).then(async (image) => {
        //console.log('image', image);
        const imgData = new FormData();
        imgData.append('images', { uri: image.path, name: 'photo', type: 'image/jpg' });
          if (authObj.vehicle == 'front') {
            setAuthObj({
              ...authObj,
              vehicleFront: image.path
            })
          }
          else if (authObj.vehicle == 'back') {
            setAuthObj({
              ...authObj,
              vehicleBack: image.path
            })
          }
      })
      //console.log('gallery image >>>', profileImage)

    }
    else if (index == 1) {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
      }).then(async (image) => {
        console.log('Camera Pic >>', image);
        const imgData = new FormData();
        imgData.append('images', { uri: image.path, name: 'photo', type: 'image/jpg' });
        if (authObj.vehicle == 'front') {
            setAuthObj({
              ...authObj,
              vehicleFront: image.path
            })
          }
          else if (authObj.vehicle == 'back') {
            setAuthObj({
              ...authObj,
              vehicleBack: image.path
            })
          }

      });

    }
  }


  function handleChange(name, value) {
    setAuthObj({
      ...authObj,
      [name]: value
    })
  }

  // console.log('CNIC TYPE >>>>', authObj.cnicFront, authObj.cnicBack)

  return (
    <SafeAreaView style={styles.container}>
      <Components.TopLogo />
      <ScrollView
       // style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        // keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        >
        <View style={{flex:1, marginHorizontal: 15 }}>
          <View style={{ alignItems: 'center' }}>
            <Components.Heading3 title={'Vehicle Info'} />
          </View>
          <Components.DropDown
            placeholder={'Vehicle Type'}
            list={vehicle}
            onChange={(value) => handleChange('vehicle_type', value())}
            value={authObj.vehicle_type}
            dropDownMaxHeight={150}
            open={openVehicle}
            style={styles.dropdown_inner_style}
            mainContainer_style={styles.container_style}
            setOpen={() => setOpenVehicle(openVehicle => !openVehicle)}
            listMode="SCROLLVIEW"
          />
          <View style={{ margin: 10 }} />
          <Components.InputText
            placeholder="Model No"
            name={'model_no'}
            handleChange={(name, value) => handleChange(name, value)}
            value={authObj.model_no}
          />
          {errorObj.model_no ? (
            <Text style={styles.error}>{errorObj.model_no}</Text>
          ) : (
            ''
          )}
          <View style={{ margin: 10 }} />
          <Components.InputText
            placeholder="Vehicle Color"
            name={'vehicle_color'}
            handleChange={(name, value) => handleChange(name, value)}
            value={authObj.vehicle_color}
          />
          {errorObj.vehicle_color ? (
            <Text style={styles.error}>{errorObj.vehicle_color}</Text>
          ) : (
            ''
          )}
          <View style={{ margin: 10 }} />
          <Components.InputText
            placeholder="Vehicle Brand"
            name={'vehicle_brand'}
            handleChange={(name, value) => handleChange(name, value)}
            value={authObj.vehicle_brand}
          />
          {errorObj.vehicle_brand ? (
            <Text style={styles.error}>{errorObj.vehicle_brand}</Text>
          ) : (
            ''
          )}
          <View style={{ margin: 10 }} />
          <Components.InputText
            placeholder="Registration Number"
            name={'registration_number'}
            handleChange={(name, value) => handleChange(name, value)}
            value={authObj.registration_number}
          />
          {errorObj.registration_number ? (
            <Text style={styles.error}>{errorObj.registration_number}</Text>
          ) : (
            ''
          )}
          <View style={{ margin: 10 }} />
          <View style={{ marginHorizontal: 15 }}>
            <Text>Upload your documents</Text>
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <View style={{ marginVertical: 10 }}>
                  <Text>Front</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {authObj.vehicle === 'front' ?
                    <ImageBackground
                      source={rectangle}
                      resizeMode="cover"
                      style={styles.icon_container}>
                      <TouchableOpacity
                        onPress={() => openSheet('vehicle', 'front')}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                      >
                        <IonicIcon name='document-outline' size={30} />
                      </TouchableOpacity>
                    </ImageBackground>
                    :
                    <TouchableOpacity
                      onPress={() => openSheet('vehicle', 'front')}
                      style={styles.unClickedBtn}
                    >
                      <IonicIcon name='document-outline' size={30} color={Global.gray_color}/>
                    </TouchableOpacity>
                  }
                  <View>
                    {authObj.vehicleFront == '' ?
                      <Components.SkeltonLoader
                      //  SkeltonLoading={SkeltonLoading}
                      />
                      :
                      <ImageModal
                        resizeMode="contain"
                        // imageBackgroundColor={Global.white}
                        style={{
                          width: 55,
                          height: 55,
                        }}
                        source={{
                          uri: authObj.vehicleFront,
                          // uri: 'file:///var/mobile/Containers/Data/Application/19B7CA05-94B4-464E-A69D-B580EEC265B6/Documents/1622008112347.png'
                        }}
                      />
                    }
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 12 }}>Vehicle Documents</Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ marginVertical: 10 }}>
                  <Text>Back</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                {authObj.vehicle === 'back' ?
                    <ImageBackground
                      source={rectangle}
                      resizeMode="cover"
                      style={styles.icon_container}>
                      <TouchableOpacity
                        onPress={() => openSheet('vehicle', 'back')}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                      >
                        <IonicIcon name='person-circle-outline' size={30} />
                      </TouchableOpacity>
                    </ImageBackground>
                    :
                    <TouchableOpacity
                      onPress={() => openSheet('vehicle', 'back')}
                      style={styles.unClickedBtn}
                    >
                      <IonicIcon name='document-outline' size={30} color={Global.gray_color}/>
                    </TouchableOpacity>
                  }
                  <View>
                    {authObj.vehicleBack == '' ?
                      <Components.SkeltonLoader
                      // SkeltonLoading={SkeltonLoading}
                      />
                      :
                      <ImageModal
                        resizeMode="contain"
                        // imageBackgroundColor={Global.white}
                        style={{
                          width: 55,
                          height: 55,
                        }}
                        source={{
                          uri: authObj.vehicleBack,
                          // uri: 'file:///var/mobile/Containers/Data/Application/19B7CA05-94B4-464E-A69D-B580EEC265B6/Documents/1622008112347.png'
                        }}
                      />
                    }
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 12 }}>Vehicle Documents</Text>
                </View>
              </View>
            </View>
          </View>
          {/* Driver License Docs */}
        <View style={{ marginVertical: 8 }} >
          <Components.AdBanner/>
        </View>
        <View style={{ marginVertical: 8 }} >
          <Components.BackButton title={'Back'} />
        </View>
        <View style={{ marginVertical:8 }}>
          <Components.MainButton
            title='Next'
            handleNavigation={handleSubmit}
            btn_container_style={styles.btn_container_style}
          />
        </View>

        </View>
      </ScrollView>
      <ActionSheet
        ref={actionSheet}
        title={'Which one do you like ?'}
        options={optionArray}
        cancelButtonIndex={2}
        destructiveButtonIndex={0}
        onPress={(index) =>
          handleCNIC(index)
        }
      />

    </SafeAreaView>
  )
}

export default VehicleInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btn_container_style: {
    flex: 1,
    backgroundColor: Global.main_color,
    alignItems: 'center',
    padding: 12,
    borderRadius: 22
  },
  imgLoaderStyle: {
    borderWidth: 5,
    width: 70,
    margin: 3
  },
  error: {
    textAlign: 'center',
    color: 'red',
  },
  icon_container: {
    height: 60,
    width: 60,
    // backgroundColor: Global.main_color,
    // borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',

  },
  unClickedBtn:{
    height: 60,
    width: 60,
    backgroundColor: Global.inputs_clr,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown_inner_style: {
    backgroundColor: Global.inputs_clr,
    borderColor: Global.inputs_clr,
    borderRadius: 100,
    paddingHorizontal: 15
    //width: '86%'
  },
})