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


const PartnerBasicInfo = () => {
  let actionSheet = useRef();
  let navigation = useNavigation();
  const [gender, setGender] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ]);
  const [openGender, setOpenGender] = useState(false);
  const [authObj, setAuthObj] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    cnic: '',
    cnicType: '',
    cnicFront: '',
    cnicBack: '',
    license: '',
    licenseFront: '',
    licenseBack: '',
    gender: ''
  })
  const [docs, setDocs] = useState({
    cnic: false,
    license: false
  })

  const [errorObj, setErrorObj] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    cnic: '',
    cnicType: '',
    cnicFront: '',
    cnicBack: '',
    license: '',
    licenseFront: '',
    licenseBack: '',
    gender: ''
  })

  function handleSubmit(params) {
    alert('Detail has been submited');
    navigation.navigate('Home', {routeName:'Partner'});
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
    if (name == 'cnicType') {
      setDocs({
        cnic: true,
        license: false
      })
    }
    else if (name == 'license') {
      // alert('License')
      setDocs({
        cnic: false,
        license: true
      })
    }
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
        if (docs.cnic) {
          if (authObj.cnicType == 'front') {
            setAuthObj({
              ...authObj,
              cnicFront: image.path
            })
          }
          else if (authObj.cnicType == 'back') {
            setAuthObj({
              ...authObj,
              cnicBack: image.path
            })
          }
        }
        else if (docs.license) {
          // alert('Selecte Li')
          if (authObj.license == 'front') {
            setAuthObj({
              ...authObj,
              licenseFront: image.path
            })
          }
          else if (authObj.license == 'back') {
            setAuthObj({
              ...authObj,
              licenseBack: image.path
            })
          }
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
        if (docs.cnic) {
          if (authObj.cnicType == 'front') {
            setAuthObj({
              ...authObj,
              cnicFront: image.path
            })
          }
          else if (authObj.cnicType == 'back') {
            setAuthObj({
              ...authObj,
              cnicBack: image.path
            })
          }
        }
        else if (docs.license) {
          if (authObj.license == 'front') {
            setAuthObj({
              ...authObj,
              licenseFront: image.path
            })
          }
          else if (authObj.license == 'back') {
            setAuthObj({
              ...authObj,
              licenseBack: image.path
            })
          }
        }

      });

    }
    else {
      setDocs({
        cnic: false,
        license: false
      })
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
            <Components.Heading3 title={'Partner Basic Info'} />
          </View>
          <Components.InputText
            placeholder="First Name"
            icon="account-circle"
            name={'first_name'}
            handleChange={(name, value) => handleChange(name, value)}
            value={authObj.first_name}
          />
          {errorObj.first_name ? (
            <Text style={styles.error}>{errorObj.first_name}</Text>
          ) : (
            ''
          )}
          <View style={{ margin: 10 }} />
          <Components.InputText
            placeholder="Last Name"
            icon="account-circle"
            name={'last_name'}
            handleChange={(name, value) => handleChange(name, value)}
            value={authObj.last_name}
          />
          {errorObj.last_name ? (
            <Text style={styles.error}>{errorObj.last_name}</Text>
          ) : (
            ''
          )}
          <View style={{ margin: 10 }} />
          <Components.DropDown
            placeholder={'Gender'}
            list={gender}
            onChange={(value) => handleChange('gender', value())}
            value={authObj.gender}
            dropDownMaxHeight={150}
            open={openGender}
            style={styles.dropdown_inner_style}
            mainContainer_style={styles.container_style}
            setOpen={() => setOpenGender(openGender => !openGender)}
            listMode="SCROLLVIEW"
          />
          <View style={{ margin: 10 }} />
          <Components.InputText
            placeholder="Email (Optional)"
            icon="account-circle"
            name={'email'}
            handleChange={(name, value) => handleChange(name, value)}
            value={authObj.email}
          />
          {errorObj.email ? (
            <Text style={styles.error}>{errorObj.email}</Text>
          ) : (
            ''
          )}
          <View style={{ margin: 10 }} />
          <Components.InputText
            placeholder="Phone"
            icon="account-circle"
            name={'phone'}
            handleChange={(name, value) => handleChange(name, value)}
            value={authObj.phone}
          />
          {errorObj.phone ? (
            <Text style={styles.error}>{errorObj.phone}</Text>
          ) : (
            ''
          )}
          <View style={{ margin: 10 }} />
          <Components.InputText
            placeholder="CNIC Number"
            icon="account-circle"
            name={'cnic'}
            handleChange={(name, value) => handleChange(name, value)}
            value={authObj.cnic}
          />
          {errorObj.cnic ? (
            <Text style={styles.error}>{errorObj.cnic}</Text>
          ) : (
            ''
          )}
          <View style={{ marginHorizontal: 15 }}>
            <Text>Upload your documents</Text>
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <View style={{ marginVertical: 10 }}>
                  <Text>CNIC Front</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {authObj.cnicType === 'front' ?
                    <ImageBackground
                      source={rectangle}
                      resizeMode="cover"
                      style={styles.icon_container}>
                      <TouchableOpacity
                        onPress={() => openSheet('cnicType', 'front')}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                      >
                        <IonicIcon name='person-circle-outline' size={30} />
                      </TouchableOpacity>
                    </ImageBackground>
                    :
                    <TouchableOpacity
                      onPress={() => openSheet('cnicType', 'front')}
                      style={styles.unClickedBtn}
                    >
                      <IonicIcon name='person-circle-outline' size={30} color={Global.gray_color}/>
                    </TouchableOpacity>
                  }
                  <View>
                    {authObj.cnicFront == '' ?
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
                          uri: authObj.cnicFront,
                          // uri: 'file:///var/mobile/Containers/Data/Application/19B7CA05-94B4-464E-A69D-B580EEC265B6/Documents/1622008112347.png'
                        }}
                      />
                    }
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 12 }}>Identification Card</Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ marginVertical: 10 }}>
                  <Text>CNIC Back</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                {authObj.cnicType === 'back' ?
                    <ImageBackground
                      source={rectangle}
                      resizeMode="cover"
                      style={styles.icon_container}>
                      <TouchableOpacity
                        onPress={() => openSheet('cnicType', 'back')}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                      >
                        <IonicIcon name='person-circle-outline' size={30} />
                      </TouchableOpacity>
                    </ImageBackground>
                    :
                    <TouchableOpacity
                      onPress={() => openSheet('cnicType', 'back')}
                      style={styles.unClickedBtn}
                    >
                      <IonicIcon name='person-circle-outline' size={30} color={Global.gray_color}/>
                    </TouchableOpacity>
                  }
                  <View>
                    {authObj.cnicBack == '' ?
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
                          uri: authObj.cnicBack,
                          // uri: 'file:///var/mobile/Containers/Data/Application/19B7CA05-94B4-464E-A69D-B580EEC265B6/Documents/1622008112347.png'
                        }}
                      />
                    }
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 12 }}>Identification Card</Text>
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

export default PartnerBasicInfo;

function HeaderText() {
  return (
    <>
      <Text style={{ fontSize: 20, fontWeight: '500' }}>Partner</Text>
      <Text style={{ fontSize: 30, fontWeight: '700' }}>Basic Info</Text>
    </>
  )
}

function SkeltonLoading() {
  return (
    <View style={{ width: 70 }}>
      <View style={styles.imgLoaderStyle} />
      <View style={styles.imgLoaderStyle} />
      <View style={styles.imgLoaderStyle} />
    </View>
  )
}

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