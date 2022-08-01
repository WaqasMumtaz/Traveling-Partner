import { StyleSheet, Text, View, Platform, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react';
import Components from '../../Components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Global from '../../Global';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';
import ImageModal from 'react-native-image-modal';



const DriverBasicInfo = () => {
  let actionSheet = useRef();
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
    licenseBack: ''
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
    licenseBack: ''
  })


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

  function handleSubmit(params) {
    alert('Detail has been submited');
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

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={Global.light_gray} />
      <Components.MainTopBar
        HeaderText={HeaderText}
      />
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={{ flexGrow: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
          <View style={{ marginTop: 15, marginHorizontal: 10 }}>
            <View style={{ margin: 10 }}>
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
            </View>
            <View style={{ margin: 10 }}>
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
            </View>
            <View style={{ margin: 10 }}>
              <Components.InputText
                placeholder="Email"
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
            </View>
            <View style={{ margin: 10 }}>
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
            </View>
            <View style={{ margin: 10 }}>
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
            </View>
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
                    <TouchableOpacity
                      onPress={() => openSheet('cnicType', 'front')}
                      style={styles.icon_container}
                    >
                      <IonicIcon name='person' size={35} color={Global.white} />
                    </TouchableOpacity>
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
                    <TouchableOpacity
                      onPress={() => openSheet('cnicType', 'back')}
                      style={styles.icon_container}
                    >
                      <IonicIcon name='person' size={35} color={Global.white} />
                    </TouchableOpacity>
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
            <View style={{ marginHorizontal: 15, marginTop: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <View style={{ marginVertical: 10 }}>
                    <Text>Driving License Front</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                      onPress={() => openSheet('license', 'front')}
                      style={[styles.icon_container, { backgroundColor: Global.secondary_clr }]}
                    >
                      <IonicIcon name='person' size={35} color={Global.white} />
                    </TouchableOpacity>
                    <View>
                      {authObj.licenseFront == '' ?
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
                            uri: authObj.licenseFront,
                            // uri: 'file:///var/mobile/Containers/Data/Application/19B7CA05-94B4-464E-A69D-B580EEC265B6/Documents/1622008112347.png'
                          }}
                        />
                      }
                    </View>
                  </View>
                  <View>
                    <Text style={{ fontSize: 12 }}>Driving License</Text>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ marginVertical: 10 }}>
                    <Text>Driving License Back</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <TouchableOpacity
                      onPress={() => openSheet('license', 'back')}
                      style={[styles.icon_container, { backgroundColor: Global.secondary_clr }]}
                    >
                      <IonicIcon name='person' size={35} color={Global.white} />
                    </TouchableOpacity>
                    <View>
                      {authObj.licenseBack == '' ?
                        <Components.SkeltonLoader
                        // SkeltonLoading={SkeltonLoading}
                        />
                        :
                        <ImageModal
                          resizeMode="contain"
                          // imageBackgroundColor={Global.white}
                          style={{
                            width: 50,
                            height: 50,
                          }}
                          source={{
                            uri: authObj.licenseBack,
                            // uri: 'file:///var/mobile/Containers/Data/Application/19B7CA05-94B4-464E-A69D-B580EEC265B6/Documents/1622008112347.png'
                          }}
                        />
                      }
                    </View>
                  </View>
                  <View>
                    <Text style={{ fontSize: 12 }}>Driving License</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{marginTop:18 ,marginHorizontal:10 }}>
            <Components.MainButton
              title='completed'
              handleNavigation={handleSubmit}
              btn_container_style={styles.btn_container_style}
            />
          </View>
          <View style={{ marginVertical: 18 }} >
            <Components.BackButton title={'back'} />
          </View>
        </KeyboardAwareScrollView>
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
      </View>
    </>
  )
}

export default DriverBasicInfo;

function HeaderText() {
  return (
    <>
      <Text style={{ fontSize: 20, fontWeight: '500' }}>Driver</Text>
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
  btn_container_style:{
    flex:1,
    backgroundColor: Global.main_color,
    alignItems:'center',
    padding:12,
    borderRadius:22
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
    width: 55,
    backgroundColor: Global.main_color,
    borderRadius: 8,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})