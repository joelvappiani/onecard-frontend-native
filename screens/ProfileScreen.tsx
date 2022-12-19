import AppBar from '../components/AppBar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable, AsyncStorage,} from 'react-native';

import React, { useState, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import { MaterialIcons } from "@expo/vector-icons";
import { Switch, HStack, Center, NativeBaseProvider, Divider, Box, Icon, ScrollView, Button, Modal, FormControl, Input, TextArea,} from "native-base";
import { FunctionSetInputValue } from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types';
import { useSelector, useDispatch } from 'react-redux';
import { updateFisrtName, updateLastName, updateEmail, updatePhone,  updateCompanyName, updateAddress,  updateLinkedin, updateWebsite, UserState, SettingObject, ArrObject, addCustom} from "../reducers/user"

 

function ProfileScreen() {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState<string>('');
    const [phoneSwitch, setPhoneSwitch] = useState<boolean>(false);
    const [companyName, setCompanyName] = useState<string>('');
    const [companyNameSwitch, setCompanyNameSwitch] = useState<boolean>(false);
    const [address, setAddress] = useState<string>('');
    const [addressSwitch, setAddressSwitch] = useState<boolean>(false);
    const [linkedin, setLinkedin] = useState<string>('');
    const [linkedinSwitch, setLinkedinSwitch] = useState<boolean>(false);
    const [website, setWebsite] = useState<string>('');
    const [websiteSwitch, setWebsiteSwitch] = useState<boolean>(false);
    const [custom, setCustom] = useState<ArrObject[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [infos, setInfos]= useState('');
    const dispatch = useDispatch();


    const user = useSelector<{user:UserState}, UserState>((state) => state.user);
     console.log(user)
    const customData = useSelector<{user:UserState}, ArrObject[]>((state)=> state.user.customArr);

//     const customData: any = useSelector(state, "ProfileInputs")

    const deleteCustom = (name:string) => {
// ecrire fonction delete ici
    }
// console.log(customData)
const customDisplay = ''
    // const customDisplay = customData.map((e:any) => <CustomInput name={e.name} color={e.color} icon={e.icon} value={e.infos} isCustom onDelete={handleDeleteCustomItem} />)

    const handleDeleteCustomItem = (name:string) => {
       // Gérer l'effacement
       // useDispatch(deleteCustomItem(name))
    }

    const handleOptionnalFieldChange = (value:string, type:'phone'|'companyName'|'address'|'linkedIn'|'website') => {
        switch (type) {
            case 'address' : 
                setAddress(value)
                dispatch(updateAddress({value, switchOn:addressSwitch}))
            break;
            case 'companyName' :
                setCompanyName(value)
                dispatch(updateCompanyName({value, switchOn:companyNameSwitch}))
            break;
            case 'linkedIn' : 
                setLinkedin(value)
                dispatch(updateLinkedin({value, switchOn:linkedinSwitch}))
            break;
            case 'phone' :
                setPhone(value)
                dispatch(updatePhone({value, switchOn:phoneSwitch}))
            break;
            case 'website' :
                setWebsite(value)
                dispatch(updateWebsite({value, switchOn:websiteSwitch}))
            break;
        }
    }

    const handleOptionnalFieldSwitch = (value:boolean, type:'phone'|'companyName'|'address'|'linkedIn'|'website') => {
        switch (type) {
            case 'address' : 
                setAddressSwitch(value)
                dispatch(updateAddress({value:address, switchOn:value}))
            break;
            case 'companyName' :
                setCompanyNameSwitch(value)
                dispatch(updateCompanyName({value:companyName, switchOn:value}))
            break;
            case 'linkedIn' : 
                setLinkedinSwitch(value)
                dispatch(updateLinkedin({value:linkedin, switchOn:value}))
            break;
            case 'phone' :
                setPhoneSwitch(value)
                dispatch(updatePhone({value:phone, switchOn:value}))
            break;
            case 'website' :
                setWebsiteSwitch(value)
                dispatch(updateWebsite({value:website, switchOn:value}))
            break;
        }
    }

    const handleCustom = () => {
        dispatch(addCustom({name, infos, switchOn:false}))
        setShowModal(false);
    }

return (
     <>
     <AppBar screenName='Profile' />
     <ScrollView>
       <SafeAreaView>
        
        <NativeBaseProvider >
           <View>
              <Text style={styles.title}>Required infos</Text>
           </View>
           <Divider my={3} width='88%' backgroundColor='#788F99' />
               <View style={styles.profileR}>
                
                
                 <CustomInput isRequired name='' color='' icon='' value={user.firstName} placeholder='Fisrt name' onBlur={(value) => setFirstName(value)} />
                 <CustomInput isRequired name='' color='' icon='' value={user.lastName} placeholder='Last name' onBlur={(value) => setLastName(value)} />
                 <CustomInput isRequired name='' color='' icon='' value={user.email} placeholder='Email' onBlur={(value) => setEmail(value)} />
                
                 
      
    
               </View>

              <View>
                      <Text style={styles.title}>Add to profile</Text>
              </View>
              <Divider my={3} width='88%' backgroundColor='#788F99' />
        <View >
              <View style={styles.profile}>

              <CustomInput name='' color='' icon='' value={user.phone.value ? user.phone.value : ''} placeholder='Phone' onBlur={(value) => handleOptionnalFieldChange(value,'phone')} onSwitch = {(value) => handleOptionnalFieldSwitch(value,'phone')} />
              <CustomInput name='' color='' icon='' value={user.companyName.value ? user.companyName.value: ''} placeholder='Company name' onBlur={(value) => handleOptionnalFieldChange(value,'companyName')} onSwitch = {(value) => handleOptionnalFieldSwitch(value,'companyName')} />
              <CustomInput name='' color='' icon='' value={user.address.value ? user.address.value: ''} placeholder='Address' onBlur={(value) => handleOptionnalFieldChange(value,'address')} onSwitch = {(value) => handleOptionnalFieldSwitch(value,'address')}/>
              <CustomInput name='' color='' icon='' value={user.linkedin.value ? user.linkedin.value: ''} placeholder='LinkedIn' onBlur={(value) => handleOptionnalFieldChange(value,'linkedIn')} onSwitch = {(value) => handleOptionnalFieldSwitch(value,'linkedIn')} />
              <CustomInput name='' color='' icon='' value={user.website.value ? user.website.value: ''} placeholder='Website' onBlur={(value) => handleOptionnalFieldChange (value,'website')} onSwitch = {(value) => handleOptionnalFieldSwitch(value,'website')}/>
               </View>

        
       
        </View>

        <View>
        <Text style={styles.title}>More</Text>
        </View> 
        <Divider my={3} width='88%' backgroundColor='#788F99' />
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px" >
          <Modal.CloseButton />
          <Modal.Header>Custom Infos</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Field name</FormControl.Label>
              <Input onChangeText={(value) => setName(value)}/>
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Infos</FormControl.Label>
              <TextArea h={20} w="100%" maxW="300" autoCompleteType={undefined} onChangeText={(value) => setInfos(value)}/>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {setShowModal(false);}} >
                Cancel
              </Button>
              <Button backgroundColor="rgba(18, 53, 67, 0.75)" onPress={() => handleCustom()}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
        <HStack style={styles.stack}>
        <Pressable
      
      onPress={() => {setShowModal(true)}}
      >
        <Icon as={MaterialIcons} name="add-circle-outline" size="10" color="#123543" top='-5' left='1'>
            </Icon>
        
      </Pressable>
      <Text style={styles.addcus}>Add custom infos..</Text>
        </HStack>
        <View>


         {/* <CustomInput name='' color='' icon='' value='' isCustom placeholder='Website' onBlur={(value) => setWebsite(value)} onDelete={handleDeleteCustomItem} />  */}
 
        {customDisplay}
        
        </View>
        </NativeBaseProvider>
        
        
       </SafeAreaView>
       </ScrollView>
       </>
)
}


const styles = StyleSheet.create({

textInput :{
    backgroundColor: "",
    width: 235,
    height: 40,
    borderRadius: 5,
    marginBottom: 15
   },

   title : {
       fontFamily: 'Futura',
       fontStyle:'normal',
       fontWeight:'200',
       fontSize: 21,
       color: '#123543',
       top: 10
},
   required: {
       flex: 1,

   },
   profile: {
       flex: 1,
       flexDirection: 'column'

   },
   profileR: {
    flex: 1,
    flexDirection: 'column',
    left: 51

},
stack: {
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    height:40,
    marginTop:10,
},
addcus: {
    fontFamily: 'Futura',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 21,
    lineHeight: 25,
    textAlign: 'center',
    color: '#123543',
    width: 188,
    height: 34,
    left: 7,
    
}

})

export default ProfileScreen

