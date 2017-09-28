
export  const LocalStore = {

     set(key,value){
        localStorage[key] = value;
     },
   
      get(key){
       return localStorage[key] || '';
     },
   
      setObj(key,obj){
        localStorage[key] = obj;
     },
   
      getObj(key){
        return localStorage[key] || '{}' ;
     },
     
      remove(key){
       return localStorage.removeItem(key);
     }
}