

const INITIAL_STATE={
    //signupInput:{},
    //sub:[],
    details:{},
    //signininput:{},
    detailssignin:{},
    presentcolor:{partcolor:"",
                    howcolor:"",
                    privacystyle:"#030640",
                    aboutstyle:"",
                    dashheadercolor:"",
                    dashinvitecolor:"",
                    dashsubscribecolor:""
                }
    
}

const FlexReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){

        case'signup':
        return{
            ...state,
            signupInput:action.value
           
        }
       

         case 'signupdetails' :
            
        
        
                
               Object.assign(state.details,action.value)
              
       
                
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