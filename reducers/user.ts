import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SettingObject = {
  value: string,
  switchOn: boolean,

}
export type UserState = {

     firstName: string,
     lastName: string,
     email: string,
     phone: SettingObject,
     companyName: SettingObject,
     address : SettingObject,
     linkedin : SettingObject,
     website : SettingObject,
     customArr: ArrObject [],
};
export type ArrObject = {
  name: string,
  infos: string | null,
  switchOn: boolean,
}


const initialState: UserState = {
    firstName:'', lastName:'', email: '', 
    phone:{
      value:'',
      switchOn: false,
    },
    companyName:{
      value:'',
      switchOn: false,
    },
    address:{
      value:'',
      switchOn: false,
    }, 
    linkedin:{
      value:'',
      switchOn: false,
    },
    website:{
      value:'',
      switchOn: false,
    },
    customArr: [],           
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateFisrtName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    updateLastName : (state, action: PayloadAction<string>) => {
      state.lastName =action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updatePhone: (state, action: PayloadAction<SettingObject>) => {
      state.phone = action.payload;
    },
    updateCompanyName: (state, action: PayloadAction<SettingObject>) => {
      state.companyName = action.payload;
    },
    updateAddress: (state, action: PayloadAction<SettingObject>) => {
      state.address = action.payload;
    },
    updateLinkedin: (state, action: PayloadAction<SettingObject>) => {
      state.linkedin = action.payload;
    },
    updateWebsite: (state, action: PayloadAction<SettingObject>) => {
      state.website = action.payload;
    },
    addCustom : (state, action:PayloadAction<ArrObject>) => {
      console.log('adding Custom -----', action.payload);
      (!state.customArr ? state['customArr'] = [action.payload] : state.customArr.push(action.payload));
    },
    removeCustom : (state, action: PayloadAction<string>) => {
      state.customArr = state.customArr.filter(e=> e?.name !== action.payload);
    },
    updateCustom :(state, action: PayloadAction<ArrObject>) => {
       state.customArr.map((e,i) => {
        if(e.name === action.payload.name){
          state.customArr[i] = action.payload
        }
      })
    }
  },

});


  
export const { updateFisrtName, updateLastName, updateEmail, updatePhone,  updateCompanyName, updateAddress,  updateLinkedin, updateWebsite, addCustom, removeCustom, updateCustom  } = userSlice.actions;
export default userSlice.reducer;