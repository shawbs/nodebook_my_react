import $ from 'jquery';

const URL = 'http://127.0.0.1:8090';

export const API = {

    httpGet(url,param = null){

        url = URL + url;
        return new Promise((resolve,reject)=>{
            $.ajax(url,{
                type:'GET',
                dataType:'json',
                data:param,
                success:function(data){
                    resolve(data)
                },
                error:function(err){
                    reject(err)
                }
            })
        })
    },
    httpPost(url,param = null){
        
        url = URL + url;
        return new Promise((resolve,reject)=>{
            $.ajax(url,{
                type:'POST',
                dataType:'json',
                data:param,
                success:function(data){
                    resolve(data)
                },
                error:function(err){
                    reject(err)
                }
            })
        })
    }
}