

export const FormExp = {

    /**
     * 
     * @param {*} input 单个表单控件
     * @param {*} stateArr 表单控件状态集合
     */
    watchChange(react,input,stateArr){
        //RegExp正则验证
        let isEmail = /^\w+\@+[A-Z]+\.+(com|cn)+/ig;
        let isPwd = /^\w{6,}/ig;
        
        let formState = stateArr;
        let str = input.value;

        switch(input.name){
          case 'username': str.match(isEmail) === null ? (
            react.setState({
              formState:Object.assign(formState,{usernameState:'error'})
            })
          ): (
            react.setState({
              formState:Object.assign(formState,{usernameState:'success'})
            })
          ); break;
          case 'password': str.match(isPwd) === null ? (
            react.setState({
              formState:Object.assign(formState,{passwordState:'error'})
            })
          ): (
            react.setState({
              formState:Object.assign(formState,{passwordState:'success'})
            })
          );  break;
          case 'pwdT': str !== react.regForm.password.value ? (
            react.setState({
              formState:Object.assign(formState,{pwdTState:'error'})
            })
          ): (
            react.setState({
              formState:Object.assign(formState,{pwdTState:'success'})
            })
          );  break;
          case 'agreement': input.checked !== true ? (
            react.setState({
              formState:Object.assign(formState,{agreementState:'error'})
            })
          ): (
            react.setState({
              formState:Object.assign(formState,{agreementState:'success'})
            })
          );  break
        }
        
        react.setState({disabled:!(this.checkForm(formState))});
        
      },
      /**
       * @return boolean 
       * @param {*} stateArr 表单控件状态集合
       */
      checkForm(stateArr){
        let falg = false;
        let formStateArr = stateArr;
        for(let key in formStateArr){
          if(formStateArr[key] !== 'success'){
            falg = false;break;
          }else{
            falg = true;
          }
        }
        return falg;
      }
}


