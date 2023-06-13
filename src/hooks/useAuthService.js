const useAuthService = () =>{
    async function authService(API, credentials) {
        return fetch(API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        }).then((data) => data.json());
      };    
    return{
        authService
    }
}

export default useAuthService