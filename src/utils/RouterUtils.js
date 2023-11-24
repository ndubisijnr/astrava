import { navigationRef } from "../router";

export class RouterUtils {
  static navigate(name, params) {

    if (navigationRef.isReady()) {
      console.log(navigationRef.isReady())
      navigationRef.navigate(name, params);
    }
  }
    static  goBack(){
        if(navigationRef.isReady()){
             navigationRef.goBack()
            // return navigationRef.getCurrentRoute()
        }
    }

   static currentRoute(){
       if(navigationRef.isReady()){
          
           return navigationRef.getCurrentRoute()
       }
    }
}



