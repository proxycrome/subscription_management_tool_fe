

const INITIAL_STATE={
    //signupInput:{},
    //sub:[],
    details:{},
    //signininput:{},
    detailssignin:{},
    forgotpassword:{},
    cancelicon:{display:"flex"},
    presentcolor:{partcolor:"",
                    howcolor:"",
                    privacystyle:"#030640",
                    aboutstyle:"",
                    dashheadercolor:"",
                    dashinvitecolor:"",
                    dashsubscribecolor:"",
                    paymentcolor:""
                },

    
}

const FlexReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){

        case'signup':
        return{
            ...state,
            signupInput:action.value
           
        }
        case'cancelicon':
        return{
            ...state,
            cancelicon:action.value
           
        }
       
       

         case 'signupdetails' :
            
        
        
                
               Object.assign(state.details,action.value)
              
               case 'passwordreset' :
            
        
        
                
               Object.assign(state.forgotpassword,action.value)
              
       
                
               case'signin':
               return{
                   ...state,
                  signininput:action.value
                  
               } 


               case 'signindetails' :
            
        
        
                
                Object.assign(state.detailssignin,action.value)
                case'headercolor':
                return{
                    ...state,
                   presentcolor:action.value
                   
                } 

            default:
                return state

    }
}

export default FlexReducer