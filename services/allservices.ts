import axios from "axios";
 
export const userLogin = async ({ userLoginData }) => {
    try {
      const response = await axios.post(
        'https://api.hidromas.nl/user-login',
        userLoginData
        ,
        {
          headers: {
            "Content-Type": "application/json",
            "apikey": "hidromas-we-app-01~c^Dt0Oc32",
          }
        }
      );
      return {
        statusCode: response.status, 
        message: response.data.message, 
        data : response.data
      };
      
    } catch (error) {
      console.log("login error--->", error);
      throw error; 
    }
  }

export const userDetails = async ({userId}) => {
    try {
        const response = await axios.post(
            'https://api.hidromas.nl/get-user',
          userId
          , {
            headers : {
              "Content-Type" : "application/json",
              "apikey" : "hidromas-we-app-01~c^Dt0Oc32",
            }
          }
        );
       
          return {
            statusCode: response.status, 
            message: response.data.message,
            data : response.data
        };
        
      } catch (error: any) {
       console.log("userData error--->", error)
      }

}

export const meetingList = async ({userId}) => {
    try {
        const response = await axios.post(
            'https://api.hidromas.nl/get-meeting',
          userId
          , {
            headers : {
              "Content-Type" : "application/json",
              "apikey" : "hidromas-we-app-01~c^Dt0Oc32",
            }
          }
        );
          return {
            statusCode: response.status, 
            message: response.data.message,
        };
        
      } catch (error: any) {
       console.log("userData error--->", error)
      }

}